import * as os from 'os';
import { version } from 'discord.js';
import moment from 'moment';

import { Core } from '../../index';

export class BotInfoCommand extends Core.Handler.Commands.Command {
  constructor() {
    super({
      category: Core.Handler.Commands.CommandCategories.DEVELOPER,
      description: 'Displays information about the bots runtime.',
      enabled: true,
      name: 'botinfo',
      options: [],
      usage: 'botinfo',
    });
  }

  async runNormal(ctx: Core.Handler.Commands.CommandContext): Promise<void> {
    const {
      bot, message, member, channel, client,
    } = ctx;

    const uptime = Core.Util.Strings.formatUptime(process.uptime());

    const users = client.users.cache.size;
    const guilds = client.guilds.cache.size;

    const clientDataResult: Array<string> = [];
    const systemDataResult: Array<string> = [];
    const clientData = [
      ['Started At:', `${moment(client.readyTimestamp).format('MMM DD, YYYY hh:mm A')}`],
      ['Process Uptime:', `${uptime}`],
      ['Guilds:', `${guilds}`],
      ['Users:', `${users}`],
    ];

    const systemData = [
      ['Discord.js Version:', `${version}`],
      ['Node Version:', `${process.versions.node}`],
      ['Ram Usage:', `${((process.memoryUsage().heapUsed / os.freemem()) * 100).toFixed(2)}%`],
      ['Ping:', `${Math.floor(client.ws.ping)} ms`],
    ];

    clientData.forEach((i) => {
      clientDataResult.push(`${i[0]}\n~ ${i[1]}`);
    });

    systemData.forEach((i) => {
      systemDataResult.push(`${i[0]}\n~ ${i[1]}`);
    });

    const embed = new Core.Discord.Embed()
      .setTitle(`This is ${client.user!.username}'s info!`)
      .setColor(member?.displayColor ?? 'AQUA')
      .setThumbnail(client.user!.displayAvatarURL({ format: 'png', size: 64 }))
      .setDescription(`${client.user!.username}(${client.user!.id})\n${client.application?.description}`)
      .addField('Client Information:', `\`\`\`${clientDataResult.join('\n')}\`\`\``)
      .addField('System Information:', `\`\`\`${systemDataResult.join('\n')}\`\`\``)
      // .addField('CHANGELOG @latest', `\`\`\`${changeLog.latest.join('\n')}\`\`\``)
      .setFooter({ text: `${member?.displayName} | ${moment().format('LLL')}` });

    channel.send({ embeds: [embed] });
  }

  async runSlash(ctx: Core.Handler.Commands.SlashContext): Promise<void> {
    // Code Here ...
  }
}
