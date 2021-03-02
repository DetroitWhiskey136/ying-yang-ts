[yin-yang-ts](../README.md) / [Exports](../modules.md) / [command/CommandError](../modules/command_commanderror.md) / default

# Class: default

[command/CommandError](../modules/command_commanderror.md).default

## Hierarchy

* *Error*

  ↳ **default**

## Table of contents

### Constructors

- [constructor](command_commanderror.default.md#constructor)

### Properties

- [delete](command_commanderror.default.md#delete)
- [fields](command_commanderror.default.md#fields)
- [message](command_commanderror.default.md#message)
- [name](command_commanderror.default.md#name)
- [onUsage](command_commanderror.default.md#onusage)
- [options](command_commanderror.default.md#options)
- [stack](command_commanderror.default.md#stack)
- [prepareStackTrace](command_commanderror.default.md#preparestacktrace)
- [stackTraceLimit](command_commanderror.default.md#stacktracelimit)

### Methods

- [addField](command_commanderror.default.md#addfield)
- [captureStackTrace](command_commanderror.default.md#capturestacktrace)

## Constructors

### constructor

\+ **new default**(`message`: *string*, `options`: CommandErrorOptions): [*default*](command_commanderror.default.md)

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |
`options` | CommandErrorOptions |

**Returns:** [*default*](command_commanderror.default.md)

Defined in: [src/command/CommandError.ts:20](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/112e06c/src/command/CommandError.ts#L20)

## Properties

### delete

• **delete**: *boolean*

Defined in: [src/command/CommandError.ts:17](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/112e06c/src/command/CommandError.ts#L17)

___

### fields

• **fields**: CommandErrorField[]

Defined in: [src/command/CommandError.ts:16](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/112e06c/src/command/CommandError.ts#L16)

___

### message

• **message**: *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:973

___

### onUsage

• **onUsage**: *boolean*

Defined in: [src/command/CommandError.ts:15](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/112e06c/src/command/CommandError.ts#L15)

___

### options

• **options**: CommandErrorOptions

Defined in: [src/command/CommandError.ts:14](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/112e06c/src/command/CommandError.ts#L14)

___

### stack

• `Optional` **stack**: *undefined* \| *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:975

___

### prepareStackTrace

▪ `Optional` `Static` **prepareStackTrace**: *undefined* \| (`err`: Error, `stackTraces`: CallSite[]) => *any*

Optional override for formatting stack traces

**`see`** https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces

Defined in: node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: *number*

Defined in: node_modules/@types/node/globals.d.ts:13

## Methods

### addField

▸ **addField**(`name`: *string*, `value`: *string*, `inline?`: *boolean*): [*default*](command_commanderror.default.md)

Adds a field to the Error embed.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`name` | *string* | - | The name of the field.   |
`value` | *string* | - | The value for the field.   |
`inline` | *boolean* | false | - |

**Returns:** [*default*](command_commanderror.default.md)

The error embed.

Defined in: [src/command/CommandError.ts:36](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/112e06c/src/command/CommandError.ts#L36)

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

Defined in: node_modules/@types/node/globals.d.ts:4
