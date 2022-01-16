import { Core } from '../../index';

export class ConfigCommand extends Core.Handler.Commands.Command {
  constructor() {
    super({
      category: Core.Handler.Commands.CommandCategories.ADMIN,
      description: 'This is used to set various guild related settings.',
      guildOnly: true,
      name: 'config',
      options: [
        {
          description: 'Should members display names only contain english letters/numbers?',
          name: 'auto_format_usernames',
          type: 'BOOLEAN',
        },
        {
          description: 'Give a message for users that join.',
          name: 'welcome_message',
          type: 'STRING',
        },
        {
          description: 'Give a message for users that leave.',
          name: 'leave_message',
          type: 'STRING',
        },
        {
          description: 'What channel do you want logs sent to?',
          name: 'log_channel',
          type: 'CHANNEL',
        },
        {
          description: 'What is the prefix for this guild?',
          name: 'prefix',
          type: 'STRING',
        },
        {
          description: 'What channel do you want new users to be welcomed in?',
          name: 'welcome_channel',
          type: 'CHANNEL',
        },
        {
          description: 'What role do admins have?',
          name: 'admin_role',
          type: 'ROLE',
        },
        {
          description: 'What role do moderators have?',
          name: 'moderator_role',
          type: 'ROLE',
        },
        {
          description: 'What role do support members have?',
          name: 'support_role',
          type: 'ROLE',
        },
        {
          description: 'What role does dj have?',
          name: 'dj_role',
          type: 'ROLE',
        },
      ],
      permission: Core.Managers.Permissions.PermissionLevel.ADMIN,
      usage: 'Config <prop> <value>',
    });
  }

  async runNormal(ctx: Core.Handler.Commands.CommandContext) {
    // Test
  }

  async runSlash(ctx: Core.Handler.Commands.SlashContext) {
    const { guild } = ctx.commandInteraction;
    const { data } = ctx.commandInteraction.options;
    const formedMessage:string[] = [];

    if (data.length <= 0) {
      return ctx.commandInteraction.reply(`\`\`\`${JSON.stringify(ctx.database.guilds.get(guild!.id), null, 2)}\`\`\``);
    }
    data.forEach((item) => {
      switch (item.name) {
        case 'auto_format_usernames':
          ctx.bot.database.guilds.update(
            ctx.commandInteraction.guild!.id,
            { autoFormatUsernames: item.value },
          );
          break;
        case 'prefix':
          ctx.bot.database.guilds.update(
            ctx.commandInteraction.guild!.id,
            { prefix: item.value },
          );
          break;
        case 'welcome_message':
          ctx.bot.database.guilds.update(
            ctx.commandInteraction.guild!.id,
            { joinMessage: item.value },
          );
          break;
        case 'leave_message':
          ctx.bot.database.guilds.update(
            ctx.commandInteraction.guild!.id,
            { leaveMessage: item.value },
          );
          break;
        case 'log_channel':
          ctx.bot.database.guilds.update(
            ctx.commandInteraction.guild!.id,
            { log: item.value },
          );
          break;
        case 'welcome_channel':
          ctx.bot.database.guilds.update(
            ctx.commandInteraction.guild!.id,
            { welcomeChannel: item.value },
          );
          break;
        case 'admin_role':
          ctx.bot.database.guilds.update(
            ctx.commandInteraction.guild!.id,
            {
              roles: {
                admin: item.value,
              },
            },
          );
          break;
        case 'moderator_role':
          ctx.bot.database.guilds.update(
            ctx.commandInteraction.guild!.id,
            {
              roles: {
                moderator: item.value,
              },
            },
          );
          break;
        case 'support_role':
          ctx.bot.database.guilds.update(
            ctx.commandInteraction.guild!.id,
            {
              roles: {
                support: item.value,
              },
            },
          );
          break;
        case 'dj':
          ctx.bot.database.guilds.update(
            ctx.commandInteraction.guild!.id,
            {
              roles: {
                dj: item.value,
              },
            },
          );
          break;
        default:
          break;
      }
      formedMessage.push(`Updated \`${item.name}\` to \`${item.value}\``);
    });
    return ctx.commandInteraction.reply(formedMessage.join('\n'));
  }
}
