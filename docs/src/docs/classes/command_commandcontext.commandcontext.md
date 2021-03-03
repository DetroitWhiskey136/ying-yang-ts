---
title: "Class: CommandContext"
---

# Class: CommandContext

[command/CommandContext](../modules/command_commandcontext.md).CommandContext

The CommandContext Class

## Table of contents

### Constructors

- [constructor](command_commandcontext.commandcontext.md#constructor)

### Properties

- [args](command_commandcontext.commandcontext.md#args)
- [author](command_commandcontext.commandcontext.md#author)
- [bot](command_commandcontext.commandcontext.md#bot)
- [channel](command_commandcontext.commandcontext.md#channel)
- [client](command_commandcontext.commandcontext.md#client)
- [database](command_commandcontext.commandcontext.md#database)
- [flags](command_commandcontext.commandcontext.md#flags)
- [guild](command_commandcontext.commandcontext.md#guild)
- [member](command_commandcontext.commandcontext.md#member)
- [mentions](command_commandcontext.commandcontext.md#mentions)
- [message](command_commandcontext.commandcontext.md#message)
- [parseState](command_commandcontext.commandcontext.md#parsestate)
- [prefix](command_commandcontext.commandcontext.md#prefix)
- [query](command_commandcontext.commandcontext.md#query)
- [voiceChannel](command_commandcontext.commandcontext.md#voicechannel)

### Methods

- [getVoiceChannel](command_commandcontext.commandcontext.md#getvoicechannel)

## Constructors

### constructor

\+ **new CommandContext**(`options`: commandContext): [*CommandContext*](command_commandcontext.commandcontext.md)

#### Parameters:

Name | Type |
:------ | :------ |
`options` | commandContext |

**Returns:** [*CommandContext*](command_commandcontext.commandcontext.md)

## Properties

### args

• **args**: *string*[]

___

### author

• **author**: *User*

___

### bot

• **bot**: [*BotClient*](client_botclient.botclient.md)

___

### channel

• **channel**: *TextChannel* \| *DMChannel* \| *NewsChannel*

___

### client

• **client**: [*DiscordClient*](client_discordclient.discordclient.md)

___

### database

• **database**: [*default*](database_database.default.md)

___

### flags

• **flags**: *object*

___

### guild

• **guild**: *null* \| *Guild*

___

### member

• **member**: *null* \| *GuildMember*

___

### mentions

• **mentions**: *MessageMentions*

___

### message

• **message**: *Message*

___

### parseState

• `Optional` **parseState**: *undefined* \| *object*

___

### prefix

• **prefix**: *null* \| *string*

___

### query

• **query**: *string*

___

### voiceChannel

• **voiceChannel**: *null* \| *VoiceChannel*

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
