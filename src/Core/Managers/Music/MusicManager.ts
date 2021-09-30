import { promisify } from 'util';
import {
  AudioPlayer,
  AudioPlayerStatus,
  AudioResource,
  createAudioPlayer,
  entersState,
  VoiceConnection,
  VoiceConnectionDisconnectReason,
  VoiceConnectionStatus,
} from '@discordjs/voice';
import { TrackManager } from './TackManager';

const wait = promisify(setTimeout);

export class MusicManager {
  public readonly voiceConnection: VoiceConnection;
  public readonly audioPlayer: AudioPlayer;
  public queue: TrackManager[];
  public queueLock = false;
  public readyLock = false;

  public constructor(voiceConnection: VoiceConnection) {
    this.voiceConnection = voiceConnection;
    this.audioPlayer = createAudioPlayer();
    this.queue = [];

    this.voiceConnection.on('stateChange', async (_, newState) => {
      if (newState.status === VoiceConnectionStatus.Disconnected) {
        if (
          newState.reason === VoiceConnectionDisconnectReason.WebSocketClose
          && newState.closeCode === 4014
        ) {
          try {
            await entersState(
              this.voiceConnection,
              VoiceConnectionStatus.Connecting,
              5_000,
            );
          } catch {
            this.voiceConnection.destroy();
          }
        } else if (this.voiceConnection.rejoinAttempts < 5) {
          await wait((this.voiceConnection.rejoinAttempts + 1) * 5_000);
          this.voiceConnection.rejoin();
        } else {
          this.voiceConnection.destroy();
        }
      } else if (newState.status === VoiceConnectionStatus.Destroyed) {
        this.stop();
      } else if (
        !this.readyLock
        && (newState.status === VoiceConnectionStatus.Connecting
          || newState.status === VoiceConnectionStatus.Signalling)
      ) {
        this.readyLock = true;
        try {
          await entersState(
            this.voiceConnection,
            VoiceConnectionStatus.Ready,
            20_000,
          );
        } catch {
          if (
            this.voiceConnection.state.status
            !== VoiceConnectionStatus.Destroyed
          ) this.voiceConnection.destroy();
        } finally {
          this.readyLock = false;
        }
      }
    });

    // Configure audio player
    this.audioPlayer.on('stateChange', (oldState, newState) => {
      if (
        newState.status === AudioPlayerStatus.Idle
        && oldState.status !== AudioPlayerStatus.Idle
      ) {
        (oldState.resource as AudioResource<TrackManager>).metadata.onFinish();
        // eslint-disable-next-line no-void
        void this.processQueue();
      } else if (newState.status === AudioPlayerStatus.Playing) {
        (newState.resource as AudioResource<TrackManager>).metadata.onStart();
      }
    });

    this.audioPlayer.on('error', (error) => (error.resource as AudioResource<TrackManager>).metadata.onError(error));

    voiceConnection.subscribe(this.audioPlayer);
  }

  /**
   * Adds a new Track to the queue.
   * @param {TrackManager} track The track to add to the queue
	 * @returns {void} void
   */
  public enqueue(track: TrackManager): void {
    this.queue.push(track);
    // eslint-disable-next-line no-void
    void this.processQueue();
  }

  /**
   * Stops audio playback and empties the queue
	 * @returns {void} void
   */
  public stop(): void {
    this.queueLock = true;
    this.queue = [];
    this.audioPlayer.stop(true);
  }

  /**
   * Attempts to play a Track from the queue
   * @returns {Promise<void>} void
   */
  private async processQueue(): Promise<void> {
    if (
      this.queueLock
      || this.audioPlayer.state.status !== AudioPlayerStatus.Idle
      || this.queue.length === 0
    ) {
      return;
    }
    this.queueLock = true;

    const nextTrack = this.queue.shift()!;
    try {
      const resource = await nextTrack.createAudioResource();
      this.audioPlayer.play(resource);
      this.queueLock = false;
    } catch (error) {
      nextTrack.onError(error as Error);
      this.queueLock = false;
      this.processQueue();
    }
  }
}
