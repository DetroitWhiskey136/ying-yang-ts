import { Core } from '../../index';

export class MessageEvent extends Core.Handler.Event.Event {
  constructor() {
    super({
      enabled: true,
      name: 'ready',
    });
  }

  async run(bot: Core.Client.BotClient, client: Core.Client.DiscordClient) {
    //
  }
}
