---
title: "Class: default"
---

# Class: default

[events/Message/MessageEvent](../modules/events_message_messageevent.md).default

## Hierarchy

* [*default*](handlers_event.default.md)

  ↳ **default**

## Table of contents

### Constructors

- [constructor](events_message_messageevent.default.md#constructor)

### Properties

- [enabled](events_message_messageevent.default.md#enabled)
- [name](events_message_messageevent.default.md#name)
- [type](events_message_messageevent.default.md#type)

### Methods

- [createEmbed](events_message_messageevent.default.md#createembed)
- [getPrefix](events_message_messageevent.default.md#getprefix)
- [isValidMessage](events_message_messageevent.default.md#isvalidmessage)
- [run](events_message_messageevent.default.md#run)

## Constructors

### constructor

\+ **new default**(): [*default*](events_message_messageevent.default.md)

**Returns:** [*default*](events_message_messageevent.default.md)

Inherited from: [default](handlers_event.default.md)

## Properties

### enabled

• **enabled**: *boolean*

Inherited from: [default](handlers_event.default.md).[enabled](handlers_event.default.md#enabled)

___

### name

• **name**: *string*

Inherited from: [default](handlers_event.default.md).[name](handlers_event.default.md#name)

___

### type

• **type**: *string*

Inherited from: [default](handlers_event.default.md).[type](handlers_event.default.md#type)

## Methods

### createEmbed

▸ **createEmbed**(`channel`: *TextChannel* \| *DMChannel* \| *NewsChannel*, `color`: ColorResolvable, `message`: *string*): *void*

 Creates a nice little embed for returning information to the user.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`channel` | *TextChannel* \| *DMChannel* \| *NewsChannel* | the message channel   |
`color` | ColorResolvable | the embed color wanted   |
`message` | *string* | the message you want to send to the user i.e. "Don't be a dumbass"   |

**Returns:** *void*

___

### getPrefix

▸ `Private`**getPrefix**(`prefix`: *string*, `__namedParameters`: *Message*): *null* \| *string*

#### Parameters:

Name | Type |
:------ | :------ |
`prefix` | *string* |
`__namedParameters` | *Message* |

**Returns:** *null* \| *string*

___

### isValidMessage

▸ `Private`**isValidMessage**(`message`: *Message*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *Message* |

**Returns:** *boolean*

___

### run

▸ **run**(`bot`: [*BotClient*](client_botclient.botclient.md), `client`: [*DiscordClient*](client_discordclient.discordclient.md), `message`: *Message*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`bot` | [*BotClient*](client_botclient.botclient.md) |
`client` | [*DiscordClient*](client_discordclient.discordclient.md) |
`message` | *Message* |

**Returns:** *void*
