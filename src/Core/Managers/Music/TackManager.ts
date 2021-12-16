import {
  AudioResource,
  createAudioResource,
  demuxProbe,
} from '@discordjs/voice';
import { raw as ytdl } from 'youtube-dl-exec';
import { getInfo } from 'ytdl-core';

const noop = () => {};

export interface TrackData {
  url: string;
  title: string;
  onStart: () => void;
  onFinish: () => void;
  onError: (error: Error) => void;
}

export class TrackManager implements TrackData {
  public readonly url: string;
  public readonly title: string;
  public readonly onStart: () => void;
  public readonly onFinish: () => void;
  public readonly onError: (error: Error) => void;

  private constructor({
    url, title, onStart, onFinish, onError,
  }: TrackData) {
    this.url = url;
    this.title = title;
    this.onStart = onStart;
    this.onFinish = onFinish;
    this.onError = onError;
  }

  /**
   * Creates an AudioResource from this TrackManager.
   * @returns {Promise<AudioResource<TrackManager>>} AudioResource.
   */
  public createAudioResource(): Promise<AudioResource<TrackManager>> {
    return new Promise((resolve, reject) => {
      const process = ytdl(
        this.url,
        {
          f: 'bestaudio[ext=webm+acodec=opus+asr=48000]/bestaudio',
          o: '-',
          q: '',
          r: '100K',
        },
        { stdio: ['ignore', 'pipe', 'ignore'] },
      );
      if (!process.stdout) {
        reject(new Error('No stdout'));
        return;
      }
      const stream = process.stdout;
      const onError = (error: Error) => {
        if (!process.killed) process.kill();
        stream.resume();
        reject(error);
      };
      process
        .once('spawn', () => {
          demuxProbe(stream).then((probe) => resolve(
            createAudioResource(probe.stream, {
              inputType: probe.type,
              metadata: this,
            }),
          ));
        })
        .catch(onError);
    });
  }

  /**
   *  Creates a TrackManager from a video URL and cifecycle callback method.
   * @param url The URL of the video.
   * @param methods Lifecycle callbacks.
   * @returns {Promise<TrackManager>} The created TrackManager
   */
  public static async from(
    url: string,
    methods: Pick<TrackManager, 'onStart' | 'onFinish' | 'onError'>,
  ): Promise<TrackManager> {
    const info = await getInfo(url);

    const wrappedMethods = {
      onError(error: Error) {
        wrappedMethods.onError = noop;
        methods.onError(error);
      },
      onFinish() {
        wrappedMethods.onFinish = noop;
        methods.onFinish();
      },
      onStart() {
        wrappedMethods.onStart = noop;
        methods.onStart();
      },
    };

    return new TrackManager({
      title: info.videoDetails.title,
      url,
      ...wrappedMethods,
    });
  }
}
