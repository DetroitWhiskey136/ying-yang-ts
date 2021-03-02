[yin-yang-ts](../README.md) / [Exports](../modules.md) / [command/CommandContext](../modules/command_commandcontext.md) / default

# Class: default

[command/CommandContext](../modules/command_commandcontext.md).default

The CommandContext Class

## Table of contents

### Constructors

- [constructor](command_commandcontext.default.md#constructor)

### Properties

- [args](command_commandcontext.default.md#args)
- [author](command_commandcontext.default.md#author)
- [bot](command_commandcontext.default.md#bot)
- [channel](command_commandcontext.default.md#channel)
- [client](command_commandcontext.default.md#client)
- [database](command_commandcontext.default.md#database)
- [flags](command_commandcontext.default.md#flags)
- [guild](command_commandcontext.default.md#guild)
- [member](command_commandcontext.default.md#member)
- [mentions](command_commandcontext.default.md#mentions)
- [message](command_commandcontext.default.md#message)
- [parseState](command_commandcontext.default.md#parsestate)
- [prefix](command_commandcontext.default.md#prefix)
- [query](command_commandcontext.default.md#query)
- [voiceChannel](command_commandcontext.default.md#voicechannel)

### Methods

- [getVoiceChannel](command_commandcontext.default.md#getvoicechannel)

## Constructors

### constructor

\+ **new default**(`options`: commandContext): [*default*](command_commandcontext.default.md)

#### Parameters:

Name | Type |
:------ | :------ |
`options` | commandContext |

**Returns:** [*default*](command_commandcontext.default.md)

Defined in: [src/command/CommandContext.ts:42](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/CommandContext.ts#L42)

## Properties

### args

• **args**: *string*[]

Defined in: [src/command/CommandContext.ts:31](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/CommandContext.ts#L31)

___

### author

• **author**: *User*

Defined in: [src/command/CommandContext.ts:25](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/CommandContext.ts#L25)

___

### bot

• **bot**: [*BotClient*](client_botclient.botclient.md)

Defined in: [src/command/CommandContext.ts:20](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/CommandContext.ts#L20)

___

### channel

• **channel**: *TextChannel* \| *DMChannel* \| *NewsChannel*

Defined in: [src/command/CommandContext.ts:26](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/CommandContext.ts#L26)

___

### client

• **client**: [*DiscordClient*](client_discordclient.discordclient.md)

Defined in: [src/command/CommandContext.ts:27](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/CommandContext.ts#L27)

___

### database

• **database**: [*default*](database_database.default.md)

Defined in: [src/command/CommandContext.ts:32](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/CommandContext.ts#L32)

___

### flags

• **flags**: *object*

Defined in: [src/command/CommandContext.ts:33](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/CommandContext.ts#L33)

___

### guild

• **guild**: *null* \| *Guild*

Defined in: [src/command/CommandContext.ts:24](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/CommandContext.ts#L24)

___

### member

• **member**: *null* \| *GuildMember*

Defined in: [src/command/CommandContext.ts:23](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/CommandContext.ts#L23)

___

### mentions

• **mentions**: *MessageMentions*

Defined in: [src/command/CommandContext.ts:22](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/CommandContext.ts#L22)

___

### message

• **message**: *Message*

Defined in: [src/command/CommandContext.ts:21](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/CommandContext.ts#L21)

___

### parseState

• `Optional` **parseState**: *undefined* \| *object*

Defined in: [src/command/CommandContext.ts:34](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/CommandContext.ts#L34)

___

### prefix

• **prefix**: *null* \| *string*

Defined in: [src/command/CommandContext.ts:29](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/CommandContext.ts#L29)

___

### query

• **query**: *string*

Defined in: [src/command/CommandContext.ts:30](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/CommandContext.ts#L30)

___

### voiceChannel

• **voiceChannel**: *null* \| *VoiceChannel*

Defined in: [src/command/CommandContext.ts:28](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/CommandContext.ts#L28)

## Methods

### getVoiceChannel

▸ `Private`**getVoiceChannel**(`member`: *null* \| *GuildMember*, `guild`: *null* \| *Guild*, `client`: [*DiscordClient*](client_discordclient.discordclient.md)): *null* \| *VoiceChannel*

Gets a voicechannel if it exists/in-use.

**`memberof`** CommandContext

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`member` | *null* \| *GuildMember* | The member.   |
`guild` | *null* \| *Guild* | The members guild.   |
`client` | [*DiscordClient*](client_discordclient.discordclient.md) | The client from discord.   |

**Returns:** *null* \| *VoiceChannel*

return the voicechannel or null.

Defined in: [src/command/CommandContext.ts:73](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/CommandContext.ts#L73)
