[yin-yang-ts](../README.md) / [Exports](../modules.md) / [client/BotClient](../modules/client_botclient.md) / BotClient

# Class: BotClient

[client/BotClient](../modules/client_botclient.md).BotClient

The BotClient Class.

**`exports`** 

## Table of contents

### Constructors

- [constructor](client_botclient.botclient.md#constructor)

### Properties

- [aliases](client_botclient.botclient.md#aliases)
- [client](client_botclient.botclient.md#client)
- [commands](client_botclient.botclient.md#commands)
- [database](client_botclient.botclient.md#database)
- [events](client_botclient.botclient.md#events)
- [logger](client_botclient.botclient.md#logger)

## Constructors

### constructor

\+ **new BotClient**(`options`: ClientOptions): [*BotClient*](client_botclient.botclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`options` | ClientOptions |

**Returns:** [*BotClient*](client_botclient.botclient.md)

Defined in: [src/client/BotClient.ts:28](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/client/BotClient.ts#L28)

## Properties

### aliases

• **aliases**: *Collection*<string, string\>

Defined in: [src/client/BotClient.ts:19](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/client/BotClient.ts#L19)

___

### client

• **client**: [*DiscordClient*](client_discordclient.discordclient.md)

Defined in: [src/client/BotClient.ts:15](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/client/BotClient.ts#L15)

___

### commands

• **commands**: *Collection*<string, [*default*](handlers_command.default.md)\>

Defined in: [src/client/BotClient.ts:18](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/client/BotClient.ts#L18)

___

### database

• **database**: [*default*](database_database.default.md)

Defined in: [src/client/BotClient.ts:20](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/client/BotClient.ts#L20)

___

### events

• **events**: *Collection*<string, [*default*](handlers_event.default.md)\>

Defined in: [src/client/BotClient.ts:17](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/client/BotClient.ts#L17)

___

### logger

• **logger**: [*default*](util_logger.default.md)

Defined in: [src/client/BotClient.ts:16](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/client/BotClient.ts#L16)
