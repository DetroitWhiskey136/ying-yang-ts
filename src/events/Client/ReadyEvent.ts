import {
  BotClient, DiscordClient, Event,
} from '../../index';

export class MessageEvent extends Event {
  constructor() {
    super({
      enabled: true,
      name: 'ready',
    });
  }

  async run(bot: BotClient, client: DiscordClient) {
    //
  }
}
