[yin-yang-ts](../README.md) / [Exports](../modules.md) / [commands/Moderator/WarnCommand](../modules/commands_moderator_warncommand.md) / export%3D

# Class: export=

[commands/Moderator/WarnCommand](../modules/commands_moderator_warncommand.md).export=

## Hierarchy

* [*default*](handlers_command.default.md)

  ↳ **export=**

## Table of contents

### Constructors

- [constructor](commands_moderator_warncommand.export_.md#constructor)

### Properties

- [aliases](commands_moderator_warncommand.export_.md#aliases)
- [bot](commands_moderator_warncommand.export_.md#bot)
- [category](commands_moderator_warncommand.export_.md#category)
- [description](commands_moderator_warncommand.export_.md#description)
- [enabled](commands_moderator_warncommand.export_.md#enabled)
- [guildOnly](commands_moderator_warncommand.export_.md#guildonly)
- [name](commands_moderator_warncommand.export_.md#name)
- [options](commands_moderator_warncommand.export_.md#options)
- [parameters](commands_moderator_warncommand.export_.md#parameters)
- [type](commands_moderator_warncommand.export_.md#type)
- [usage](commands_moderator_warncommand.export_.md#usage)

### Methods

- [\_run](commands_moderator_warncommand.export_.md#_run)
- [run](commands_moderator_warncommand.export_.md#run)

## Constructors

### constructor

\+ **new export=**(`bot`: [*BotClient*](client_botclient.botclient.md)): [*export=*](commands_moderator_warncommand.export_.md)

#### Parameters:

Name | Type |
:------ | :------ |
`bot` | [*BotClient*](client_botclient.botclient.md) |

**Returns:** [*export=*](commands_moderator_warncommand.export_.md)

Inherited from: [default](handlers_command.default.md)

Defined in: [src/commands/Moderator/WarnCommand.ts:7](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/commands/Moderator/WarnCommand.ts#L7)

## Properties

### aliases

• **aliases**: *string*[]

Inherited from: [default](handlers_command.default.md).[aliases](handlers_command.default.md#aliases)

Defined in: [src/handlers/Command.ts:28](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/handlers/Command.ts#L28)

___

### bot

• **bot**: [*BotClient*](client_botclient.botclient.md)

Inherited from: [default](handlers_command.default.md).[bot](handlers_command.default.md#bot)

Defined in: [src/handlers/Command.ts:19](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/handlers/Command.ts#L19)

___

### category

• **category**: *string*

Inherited from: [default](handlers_command.default.md).[category](handlers_command.default.md#category)

Defined in: [src/handlers/Command.ts:24](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/handlers/Command.ts#L24)

___

### description

• **description**: *string*

Inherited from: [default](handlers_command.default.md).[description](handlers_command.default.md#description)

Defined in: [src/handlers/Command.ts:23](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/handlers/Command.ts#L23)

___

### enabled

• **enabled**: *boolean*

Inherited from: [default](handlers_command.default.md).[enabled](handlers_command.default.md#enabled)

Defined in: [src/handlers/Command.ts:26](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/handlers/Command.ts#L26)

___

### guildOnly

• **guildOnly**: *boolean*

Inherited from: [default](handlers_command.default.md).[guildOnly](handlers_command.default.md#guildonly)

Defined in: [src/handlers/Command.ts:27](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/handlers/Command.ts#L27)

___

### name

• **name**: *string*

Inherited from: [default](handlers_command.default.md).[name](handlers_command.default.md#name)

Defined in: [src/handlers/Command.ts:22](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/handlers/Command.ts#L22)

___

### options

• **options**: commandOptions

Inherited from: [default](handlers_command.default.md).[options](handlers_command.default.md#options)

Defined in: [src/handlers/Command.ts:20](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/handlers/Command.ts#L20)

___

### parameters

• **parameters**: *object*[]

Inherited from: [default](handlers_command.default.md).[parameters](handlers_command.default.md#parameters)

Defined in: [src/handlers/Command.ts:21](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/handlers/Command.ts#L21)

___

### type

• **type**: *string*

Inherited from: [default](handlers_command.default.md).[type](handlers_command.default.md#type)

Defined in: [src/handlers/Command.ts:29](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/handlers/Command.ts#L29)

___

### usage

• **usage**: *string*

Inherited from: [default](handlers_command.default.md).[usage](handlers_command.default.md#usage)

Defined in: [src/handlers/Command.ts:25](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/handlers/Command.ts#L25)

## Methods

### \_run

▸ **_run**(`ctx`: [*default*](command_commandcontext.default.md)): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`ctx` | [*default*](command_commandcontext.default.md) |

**Returns:** *Promise*<void\>

Inherited from: [default](handlers_command.default.md)

Defined in: [src/handlers/Command.ts:61](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/handlers/Command.ts#L61)

___

### run

▸ **run**(`ctx`: [*default*](command_commandcontext.default.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`ctx` | [*default*](command_commandcontext.default.md) |

**Returns:** *void*

Overrides: [default](handlers_command.default.md)

Defined in: [src/commands/Moderator/WarnCommand.ts:21](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/commands/Moderator/WarnCommand.ts#L21)
