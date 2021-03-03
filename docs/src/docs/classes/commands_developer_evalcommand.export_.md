---
title: "Class: export="
---

# Class: export=

[commands/Developer/EvalCommand](../modules/commands_developer_evalcommand.md).export=

## Hierarchy

* [*default*](handlers_command.default.md)

  ↳ **export=**

## Table of contents

### Constructors

- [constructor](commands_developer_evalcommand.export_.md#constructor)

### Properties

- [aliases](commands_developer_evalcommand.export_.md#aliases)
- [bot](commands_developer_evalcommand.export_.md#bot)
- [category](commands_developer_evalcommand.export_.md#category)
- [description](commands_developer_evalcommand.export_.md#description)
- [enabled](commands_developer_evalcommand.export_.md#enabled)
- [guildOnly](commands_developer_evalcommand.export_.md#guildonly)
- [name](commands_developer_evalcommand.export_.md#name)
- [options](commands_developer_evalcommand.export_.md#options)
- [parameters](commands_developer_evalcommand.export_.md#parameters)
- [type](commands_developer_evalcommand.export_.md#type)
- [usage](commands_developer_evalcommand.export_.md#usage)

### Methods

- [\_run](commands_developer_evalcommand.export_.md#_run)
- [clean](commands_developer_evalcommand.export_.md#clean)
- [run](commands_developer_evalcommand.export_.md#run)

## Constructors

### constructor

\+ **new export=**(`bot`: [*BotClient*](client_botclient.botclient.md)): [*export=*](commands_developer_evalcommand.export_.md)

#### Parameters:

Name | Type |
:------ | :------ |
`bot` | [*BotClient*](client_botclient.botclient.md) |

**Returns:** [*export=*](commands_developer_evalcommand.export_.md)

Inherited from: [default](handlers_command.default.md)

## Properties

### aliases

• **aliases**: *string*[]

Inherited from: [default](handlers_command.default.md).[aliases](handlers_command.default.md#aliases)

___

### bot

• **bot**: [*BotClient*](client_botclient.botclient.md)

Inherited from: [default](handlers_command.default.md).[bot](handlers_command.default.md#bot)

___

### category

• **category**: *string*

Inherited from: [default](handlers_command.default.md).[category](handlers_command.default.md#category)

___

### description

• **description**: *string*

Inherited from: [default](handlers_command.default.md).[description](handlers_command.default.md#description)

___

### enabled

• **enabled**: *boolean*

Inherited from: [default](handlers_command.default.md).[enabled](handlers_command.default.md#enabled)

___

### guildOnly

• **guildOnly**: *boolean*

Inherited from: [default](handlers_command.default.md).[guildOnly](handlers_command.default.md#guildonly)

___

### name

• **name**: *string*

Inherited from: [default](handlers_command.default.md).[name](handlers_command.default.md#name)

___

### options

• **options**: commandOptions

Inherited from: [default](handlers_command.default.md).[options](handlers_command.default.md#options)

___

### parameters

• **parameters**: *object*[]

Inherited from: [default](handlers_command.default.md).[parameters](handlers_command.default.md#parameters)

___

### type

• **type**: *string*

Inherited from: [default](handlers_command.default.md).[type](handlers_command.default.md#type)

___

### usage

• **usage**: *string*

Inherited from: [default](handlers_command.default.md).[usage](handlers_command.default.md#usage)

## Methods

### \_run

▸ **_run**(`ctx`: [*CommandContext*](command_commandcontext.commandcontext.md)): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`ctx` | [*CommandContext*](command_commandcontext.commandcontext.md) |

**Returns:** *Promise*<void\>

Inherited from: [default](handlers_command.default.md)

___

### clean

▸ **clean**(`str`: *string*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`str` | *string* |

**Returns:** *string*

___

### run

▸ **run**(`ctx`: [*CommandContext*](command_commandcontext.commandcontext.md)): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`ctx` | [*CommandContext*](command_commandcontext.commandcontext.md) |

**Returns:** *Promise*<void\>

Overrides: [default](handlers_command.default.md)
