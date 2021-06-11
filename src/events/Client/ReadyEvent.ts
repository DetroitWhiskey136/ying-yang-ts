import {
  BotClient, DiscordClient, Event, Files,
} from '../../index';

export class MessageEvent extends Event {
  constructor() {
    super({
      enabled: true,
      name: 'ready',
    });
  }

  async run(bot: BotClient, client: DiscordClient) {
    if (!(process.env.NODE_ENV
      ? process.env.NODE_ENV.indexOf('production') > -1
      : false
    )) {
      Files.LoadFiles('src/slash-commands', bot);
    } else {
      Files.LoadFiles('dist/slash-commands', bot);
    }
  }
}
