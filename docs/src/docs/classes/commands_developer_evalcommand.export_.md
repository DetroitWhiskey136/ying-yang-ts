---
title: "Class: export="
---

# Class: export=

[commands/Developer/EvalCommand](../modules/commands_developer_evalcommand.md).export=

## Table of contents

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
