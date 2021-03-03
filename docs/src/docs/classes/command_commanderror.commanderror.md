---
title: "Class: CommandError"
---

# Class: CommandError

[command/CommandError](../modules/command_commanderror.md).CommandError

## Hierarchy

* *Error*

  ↳ **CommandError**

## Table of contents

### Constructors

- [constructor](command_commanderror.commanderror.md#constructor)

### Properties

- [delete](command_commanderror.commanderror.md#delete)
- [fields](command_commanderror.commanderror.md#fields)
- [onUsage](command_commanderror.commanderror.md#onusage)
- [options](command_commanderror.commanderror.md#options)

### Methods

- [addField](command_commanderror.commanderror.md#addfield)

## Constructors

### constructor

\+ **new CommandError**(`message`: *string*, `options`: [*CommandErrorOptions*](../interfaces/command_commanderror.commanderroroptions.md)): [*CommandError*](command_commanderror.commanderror.md)

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |
`options` | [*CommandErrorOptions*](../interfaces/command_commanderror.commanderroroptions.md) |

**Returns:** [*CommandError*](command_commanderror.commanderror.md)

## Properties

### delete

• **delete**: *boolean*

___

### fields

• **fields**: [*CommandErrorField*](../interfaces/command_commanderror.commanderrorfield.md)[]

___

### onUsage

• **onUsage**: *boolean*

___

### options

• **options**: [*CommandErrorOptions*](../interfaces/command_commanderror.commanderroroptions.md)

## Methods

### addField

▸ **addField**(`name`: *string*, `value`: *string*, `inline?`: *boolean*): [*CommandError*](command_commanderror.commanderror.md)

Adds a field to the Error embed.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`name` | *string* | - | The name of the field.   |
`value` | *string* | - | The value for the field.   |
`inline` | *boolean* | false | - |

**Returns:** [*CommandError*](command_commanderror.commanderror.md)

The error embed.
