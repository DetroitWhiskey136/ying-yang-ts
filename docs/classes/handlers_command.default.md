[yin-yang-ts](../README.md) / [Exports](../modules.md) / [handlers/Command](../modules/handlers_command.md) / default

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

Defined in: [src/handlers/Command.ts:32](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/handlers/Command.ts#L32)

## Properties

### aliases

• **aliases**: *string*[]

Defined in: [src/handlers/Command.ts:28](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/handlers/Command.ts#L28)

___

### bot

• **bot**: [*BotClient*](client_botclient.botclient.md)

Defined in: [src/handlers/Command.ts:19](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/handlers/Command.ts#L19)

___

### category

• **category**: *string*

Defined in: [src/handlers/Command.ts:24](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/handlers/Command.ts#L24)

___

### description

• **description**: *string*

Defined in: [src/handlers/Command.ts:23](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/handlers/Command.ts#L23)

___

### enabled

• **enabled**: *boolean*

Defined in: [src/handlers/Command.ts:26](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/handlers/Command.ts#L26)

___

### guildOnly

• **guildOnly**: *boolean*

Defined in: [src/handlers/Command.ts:27](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/handlers/Command.ts#L27)

___

### name

• **name**: *string*

Defined in: [src/handlers/Command.ts:22](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/handlers/Command.ts#L22)

___

### options

• **options**: commandOptions

Defined in: [src/handlers/Command.ts:20](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/handlers/Command.ts#L20)

___

### parameters

• **parameters**: *object*[]

Defined in: [src/handlers/Command.ts:21](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/handlers/Command.ts#L21)

___

### type

• **type**: *string*

Defined in: [src/handlers/Command.ts:29](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/handlers/Command.ts#L29)

___

### usage

• **usage**: *string*

Defined in: [src/handlers/Command.ts:25](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/handlers/Command.ts#L25)

## Methods

### \_run

▸ **_run**(`ctx`: [*default*](command_commandcontext.default.md)): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`ctx` | [*default*](command_commandcontext.default.md) |

**Returns:** *Promise*<void\>

Defined in: [src/handlers/Command.ts:61](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/handlers/Command.ts#L61)

___

### run

▸ **run**(`ctx`: [*default*](command_commandcontext.default.md)): *void* \| *Promise*<void\>

Gets called if the command doesn't have a run method.

**`memberof`** Command

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`ctx` | [*default*](command_commandcontext.default.md) | The commands context.   |

**Returns:** *void* \| *Promise*<void\>

Defined in: [src/handlers/Command.ts:57](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/handlers/Command.ts#L57)

___

### setup

▸ `Private`**setup**(`options`: commandOptions): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`options` | commandOptions |

**Returns:** *void*

Defined in: [src/handlers/Command.ts:40](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/handlers/Command.ts#L40)
