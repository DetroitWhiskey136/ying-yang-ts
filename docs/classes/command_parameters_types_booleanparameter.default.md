[yin-yang-ts](../README.md) / [Exports](../modules.md) / [command/parameters/types/BooleanParameter](../modules/command_parameters_types_booleanparameter.md) / default

# Class: default

[command/parameters/types/BooleanParameter](../modules/command_parameters_types_booleanparameter.md).default

## Hierarchy

* [*default*](command_parameters_types_parameter.default.md)

  ↳ **default**

## Table of contents

### Constructors

- [constructor](command_parameters_types_booleanparameter.default.md#constructor)

### Properties

- [aliases](command_parameters_types_booleanparameter.default.md#aliases)
- [full](command_parameters_types_booleanparameter.default.md#full)
- [fullJoin](command_parameters_types_booleanparameter.default.md#fulljoin)
- [missingError](command_parameters_types_booleanparameter.default.md#missingerror)
- [name](command_parameters_types_booleanparameter.default.md#name)
- [required](command_parameters_types_booleanparameter.default.md#required)
- [showUsage](command_parameters_types_booleanparameter.default.md#showusage)
- [types](command_parameters_types_booleanparameter.default.md#types)
- [whitelist](command_parameters_types_booleanparameter.default.md#whitelist)
- [falseValues](command_parameters_types_booleanparameter.default.md#falsevalues)
- [trueValues](command_parameters_types_booleanparameter.default.md#truevalues)

### Methods

- [\_parse](command_parameters_types_booleanparameter.default.md#_parse)
- [parse](command_parameters_types_booleanparameter.default.md#parse)
- [parseOptions](command_parameters_types_booleanparameter.default.md#parseoptions)

## Constructors

### constructor

\+ **new default**(): [*default*](command_parameters_types_booleanparameter.default.md)

**Returns:** [*default*](command_parameters_types_booleanparameter.default.md)

Inherited from: [default](command_parameters_types_parameter.default.md)

## Properties

### aliases

• `Optional` **aliases**: *undefined* \| *string*[]

Inherited from: [default](command_parameters_types_parameter.default.md).[aliases](command_parameters_types_parameter.default.md#aliases)

Defined in: [src/command/parameters/types/Parameter.ts:17](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/parameters/types/Parameter.ts#L17)

___

### full

• `Optional` **full**: *undefined* \| *boolean*

Inherited from: [default](command_parameters_types_parameter.default.md).[full](command_parameters_types_parameter.default.md#full)

Defined in: [src/command/parameters/types/Parameter.ts:18](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/parameters/types/Parameter.ts#L18)

___

### fullJoin

• `Optional` **fullJoin**: *undefined* \| *string*

Inherited from: [default](command_parameters_types_parameter.default.md).[fullJoin](command_parameters_types_parameter.default.md#fulljoin)

Defined in: [src/command/parameters/types/Parameter.ts:19](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/parameters/types/Parameter.ts#L19)

___

### missingError

• `Optional` **missingError**: *undefined* \| *string*

Inherited from: [default](command_parameters_types_parameter.default.md).[missingError](command_parameters_types_parameter.default.md#missingerror)

Defined in: [src/command/parameters/types/Parameter.ts:20](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/parameters/types/Parameter.ts#L20)

___

### name

• `Optional` **name**: *undefined* \| *string*

Inherited from: [default](command_parameters_types_parameter.default.md).[name](command_parameters_types_parameter.default.md#name)

Defined in: [src/command/parameters/types/Parameter.ts:21](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/parameters/types/Parameter.ts#L21)

___

### required

• `Optional` **required**: *undefined* \| *boolean*

Inherited from: [default](command_parameters_types_parameter.default.md).[required](command_parameters_types_parameter.default.md#required)

Defined in: [src/command/parameters/types/Parameter.ts:22](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/parameters/types/Parameter.ts#L22)

___

### showUsage

• `Optional` **showUsage**: *undefined* \| *boolean*

Inherited from: [default](command_parameters_types_parameter.default.md).[showUsage](command_parameters_types_parameter.default.md#showusage)

Defined in: [src/command/parameters/types/Parameter.ts:23](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/parameters/types/Parameter.ts#L23)

___

### types

• `Optional` **types**: *any*

Inherited from: [default](command_parameters_types_parameter.default.md).[types](command_parameters_types_parameter.default.md#types)

Defined in: [src/command/parameters/types/Parameter.ts:16](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/parameters/types/Parameter.ts#L16)

___

### whitelist

• `Optional` **whitelist**: *undefined* \| *string*[]

Inherited from: [default](command_parameters_types_parameter.default.md).[whitelist](command_parameters_types_parameter.default.md#whitelist)

Defined in: [src/command/parameters/types/Parameter.ts:24](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/parameters/types/Parameter.ts#L24)

___

### falseValues

▪ `Static` **falseValues**: *string*[]

Defined in: [src/command/parameters/types/BooleanParameter.ts:10](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/parameters/types/BooleanParameter.ts#L10)

___

### trueValues

▪ `Static` **trueValues**: *string*[]

Defined in: [src/command/parameters/types/BooleanParameter.ts:12](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/parameters/types/BooleanParameter.ts#L12)

## Methods

### \_parse

▸ `Static` `Private`**_parse**(`arg`: *string*, `ctx`: [*default*](command_commandcontext.default.md), `opt?`: *object*): *void*

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`arg` | *string* | The query of the argument.   |
`ctx` | [*default*](command_commandcontext.default.md) | The context of this argument.   |
`opt` | *object* | - |

**Returns:** *void*

Inherited from: [default](command_parameters_types_parameter.default.md)

Defined in: [src/command/parameters/types/Parameter.ts:50](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/parameters/types/Parameter.ts#L50)

___

### parse

▸ `Static`**parse**(`arg`: *string*): *boolean*

**`static`** 

**`memberof`** BooleanParameter

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`arg` | *string* | The argument's query.   |

**Returns:** *boolean*

The returned value.

Overrides: [default](command_parameters_types_parameter.default.md)

Defined in: [src/command/parameters/types/BooleanParameter.ts:33](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/parameters/types/BooleanParameter.ts#L33)

___

### parseOptions

▸ `Static`**parseOptions**(`options`: [*BooleanOptions*](../interfaces/command_parameters_types_booleanparameter.booleanoptions.md)): *object*

#### Parameters:

Name | Type |
:------ | :------ |
`options` | [*BooleanOptions*](../interfaces/command_parameters_types_booleanparameter.booleanoptions.md) |

**Returns:** *object*

Name | Type |
:------ | :------ |
`aliases` | *any* |
`falseValues` | *string*[] |
`full` | *boolean* |
`fullJoin` | *any* |
`missingError` | *any* |
`name` | *any* |
`required` | *any* |
`showUsage` | *any* |
`trueValues` | *string*[] |
`whitelist` | *any* |

Overrides: [default](command_parameters_types_parameter.default.md)

Defined in: [src/command/parameters/types/BooleanParameter.ts:14](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/parameters/types/BooleanParameter.ts#L14)
