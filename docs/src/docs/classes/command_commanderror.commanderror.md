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
- [message](command_commanderror.commanderror.md#message)
- [name](command_commanderror.commanderror.md#name)
- [onUsage](command_commanderror.commanderror.md#onusage)
- [options](command_commanderror.commanderror.md#options)
- [stack](command_commanderror.commanderror.md#stack)
- [prepareStackTrace](command_commanderror.commanderror.md#preparestacktrace)
- [stackTraceLimit](command_commanderror.commanderror.md#stacktracelimit)

### Methods

- [addField](command_commanderror.commanderror.md#addfield)
- [captureStackTrace](command_commanderror.commanderror.md#capturestacktrace)

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

### message

• **message**: *string*

___

### name

• **name**: *string*

___

### onUsage

• **onUsage**: *boolean*

___

### options

• **options**: [*CommandErrorOptions*](../interfaces/command_commanderror.commanderroroptions.md)

___

### stack

• `Optional` **stack**: *undefined* \| *string*

___

### prepareStackTrace

▪ `Optional` `Static` **prepareStackTrace**: *undefined* \| (`err`: Error, `stackTraces`: CallSite[]) => *any*

Optional override for formatting stack traces

**`see`** https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: *number*

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

___

### captureStackTrace

▸ `Static`**captureStackTrace**(`targetObject`: *object*, `constructorOpt?`: Function): *void*

Create .stack property on a target object

#### Parameters:

Name | Type |
:------ | :------ |
`targetObject` | *object* |
`constructorOpt?` | Function |

**Returns:** *void*
