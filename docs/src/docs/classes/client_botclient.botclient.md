---
title: "Class: BotClient"
---

# Class: BotClient

[client/BotClient](../modules/client_botclient.md).BotClient

The BotClient Class.

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

## Properties

### aliases

• **aliases**: *Collection*<string, string\>

___

### client

• **client**: [*DiscordClient*](client_discordclient.discordclient.md)

___

### commands

• **commands**: *Collection*<string, [*Command*](handlers_command.command.md)\>

___

### database

• **database**: [*Database*](database_database.database.md)

___

### events

• **events**: *Collection*<string, [*Event*](handlers_event.event.md)\>

___

### logger

• **logger**: [*Logger*](util_logger.logger.md)
