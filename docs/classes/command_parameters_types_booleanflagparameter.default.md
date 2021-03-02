[yin-yang-ts](../README.md) / [Exports](../modules.md) / [command/parameters/types/BooleanFlagParameter](../modules/command_parameters_types_booleanflagparameter.md) / default

# Class: default

[command/parameters/types/BooleanFlagParameter](../modules/command_parameters_types_booleanflagparameter.md).default

## Hierarchy

* [*default*](command_parameters_types_parameter.default.md)

  ↳ **default**

## Table of contents

### Constructors

- [constructor](command_parameters_types_booleanflagparameter.default.md#constructor)

### Properties

- [aliases](command_parameters_types_booleanflagparameter.default.md#aliases)
- [full](command_parameters_types_booleanflagparameter.default.md#full)
- [fullJoin](command_parameters_types_booleanflagparameter.default.md#fulljoin)
- [missingError](command_parameters_types_booleanflagparameter.default.md#missingerror)
- [name](command_parameters_types_booleanflagparameter.default.md#name)
- [required](command_parameters_types_booleanflagparameter.default.md#required)
- [showUsage](command_parameters_types_booleanflagparameter.default.md#showusage)
- [types](command_parameters_types_booleanflagparameter.default.md#types)
- [whitelist](command_parameters_types_booleanflagparameter.default.md#whitelist)

### Methods

- [\_parse](command_parameters_types_booleanflagparameter.default.md#_parse)
- [parse](command_parameters_types_booleanflagparameter.default.md#parse)
- [parseOptions](command_parameters_types_booleanflagparameter.default.md#parseoptions)

## Constructors

### constructor

\+ **new default**(): [*default*](command_parameters_types_booleanflagparameter.default.md)

**Returns:** [*default*](command_parameters_types_booleanflagparameter.default.md)

Inherited from: [default](command_parameters_types_parameter.default.md)

## Properties

### aliases

• `Optional` **aliases**: *undefined* \| *string*[]

Inherited from: [default](command_parameters_types_parameter.default.md).[aliases](command_parameters_types_parameter.default.md#aliases)

Defined in: [src/command/parameters/types/Parameter.ts:17](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/112e06c/src/command/parameters/types/Parameter.ts#L17)

___

### full

• `Optional` **full**: *undefined* \| *boolean*

Inherited from: [default](command_parameters_types_parameter.default.md).[full](command_parameters_types_parameter.default.md#full)

Defined in: [src/command/parameters/types/Parameter.ts:18](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/112e06c/src/command/parameters/types/Parameter.ts#L18)

___

### fullJoin

• `Optional` **fullJoin**: *undefined* \| *string*

Inherited from: [default](command_parameters_types_parameter.default.md).[fullJoin](command_parameters_types_parameter.default.md#fulljoin)

Defined in: [src/command/parameters/types/Parameter.ts:19](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/112e06c/src/command/parameters/types/Parameter.ts#L19)

___

### missingError

• `Optional` **missingError**: *undefined* \| *string*

Inherited from: [default](command_parameters_types_parameter.default.md).[missingError](command_parameters_types_parameter.default.md#missingerror)

Defined in: [src/command/parameters/types/Parameter.ts:20](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/112e06c/src/command/parameters/types/Parameter.ts#L20)

___

### name

• `Optional` **name**: *undefined* \| *string*

Inherited from: [default](command_parameters_types_parameter.default.md).[name](command_parameters_types_parameter.default.md#name)

Defined in: [src/command/parameters/types/Parameter.ts:21](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/112e06c/src/command/parameters/types/Parameter.ts#L21)

___

### required

• `Optional` **required**: *undefined* \| *boolean*

Inherited from: [default](command_parameters_types_parameter.default.md).[required](command_parameters_types_parameter.default.md#required)

Defined in: [src/command/parameters/types/Parameter.ts:22](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/112e06c/src/command/parameters/types/Parameter.ts#L22)

___

### showUsage

• `Optional` **showUsage**: *undefined* \| *boolean*

Inherited from: [default](command_parameters_types_parameter.default.md).[showUsage](command_parameters_types_parameter.default.md#showusage)

Defined in: [src/command/parameters/types/Parameter.ts:23](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/112e06c/src/command/parameters/types/Parameter.ts#L23)

___

### types

• `Optional` **types**: *any*

Inherited from: [default](command_parameters_types_parameter.default.md).[types](command_parameters_types_parameter.default.md#types)

Defined in: [src/command/parameters/types/Parameter.ts:16](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/112e06c/src/command/parameters/types/Parameter.ts#L16)

___

### whitelist

• `Optional` **whitelist**: *undefined* \| *string*[]

Inherited from: [default](command_parameters_types_parameter.default.md).[whitelist](command_parameters_types_parameter.default.md#whitelist)

Defined in: [src/command/parameters/types/Parameter.ts:24](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/112e06c/src/command/parameters/types/Parameter.ts#L24)

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

Defined in: [src/command/parameters/types/Parameter.ts:50](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/112e06c/src/command/parameters/types/Parameter.ts#L50)

___

### parse

▸ `Static`**parse**(): *boolean*

**Returns:** *boolean*

Overrides: [default](command_parameters_types_parameter.default.md)

Defined in: src/command/parameters/types/BooleanFlagParameter.ts:4

___

### parseOptions

▸ `Static`**parseOptions**(`options?`: *any*): *object*

#### Parameters:

Name | Type |
:------ | :------ |
`options` | *any* |

**Returns:** *object*

Name | Type |
:------ | :------ |
`aliases` | *any* |
`full` | *boolean* |
`fullJoin` | *any* |
`missingError` | *any* |
`name` | *any* |
`required` | *any* |
`showUsage` | *any* |
`whitelist` | *any* |

Inherited from: [default](command_parameters_types_parameter.default.md)

Defined in: [src/command/parameters/types/Parameter.ts:30](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/112e06c/src/command/parameters/types/Parameter.ts#L30)
