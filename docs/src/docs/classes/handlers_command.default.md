---
title: "Class: default"
---

# Class: default

[handlers/Command](../modules/handlers_command.md).default

## Hierarchy

* **default**

  ↳ [*export=*](commands_developer_evalcommand.export_.md)

  ↳ [*export=*](commands_developer_testcommand.export_.md)

  ↳ [*export=*](commands_moderator_clearwarncommand.export_.md)

  ↳ [*export=*](commands_moderator_deletewarncommand.export_.md)

  ↳ [*export=*](commands_moderator_updatewarncommand.export_.md)

  ↳ [*export=*](commands_moderator_warncommand.export_.md)

## Table of contents

### Constructors

- [constructor](handlers_command.default.md#constructor)

### Properties

- [aliases](handlers_command.default.md#aliases)
- [bot](handlers_command.default.md#bot)
- [category](handlers_command.default.md#category)
- [description](handlers_command.default.md#description)
- [enabled](handlers_command.default.md#enabled)
- [guildOnly](handlers_command.default.md#guildonly)
- [name](handlers_command.default.md#name)
- [options](handlers_command.default.md#options)
- [parameters](handlers_command.default.md#parameters)
- [type](handlers_command.default.md#type)
- [usage](handlers_command.default.md#usage)

### Methods

- [\_run](handlers_command.default.md#_run)
- [run](handlers_command.default.md#run)
- [setup](handlers_command.default.md#setup)

## Constructors

### constructor

\+ **new default**(`bot`: [*BotClient*](client_botclient.botclient.md), `options`: commandOptions, `parameters`: *object*[]): [*default*](handlers_command.default.md)

#### Parameters:

Name | Type |
:------ | :------ |
`bot` | [*BotClient*](client_botclient.botclient.md) |
`options` | commandOptions |
`parameters` | *object*[] |

**Returns:** [*default*](handlers_command.default.md)

## Properties

### aliases

• **aliases**: *string*[]

___

### bot

• **bot**: [*BotClient*](client_botclient.botclient.md)

___

### category

• **category**: *string*

___

### description

• **description**: *string*

___

### enabled

• **enabled**: *boolean*

___

### guildOnly

• **guildOnly**: *boolean*

___

### name

• **name**: *string*

___

### options

• **options**: commandOptions

___

### parameters

• **parameters**: *object*[]

___

### type

• **type**: *string*

___

### usage

• **usage**: *string*

## Methods

### \_run

▸ **_run**(`ctx`: [*CommandContext*](command_commandcontext.commandcontext.md)): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`ctx` | [*CommandContext*](command_commandcontext.commandcontext.md) |

**Returns:** *Promise*<void\>

___

### run

▸ **run**(`ctx`: [*CommandContext*](command_commandcontext.commandcontext.md)): *void* \| *Promise*<void\>

Gets called if the command doesn't have a run method.

**`memberof`** Command

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`ctx` | [*CommandContext*](command_commandcontext.commandcontext.md) | The commands context.   |

**Returns:** *void* \| *Promise*<void\>

___

### setup

▸ `Private`**setup**(`options`: commandOptions): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`options` | commandOptions |

**Returns:** *void*
