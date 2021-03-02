[yin-yang-ts](../README.md) / [Exports](../modules.md) / [command/parameters/types/Parameter](../modules/command_parameters_types_parameter.md) / default

# Class: default

[command/parameters/types/Parameter](../modules/command_parameters_types_parameter.md).default

## Hierarchy

* **default**

  ↳ [*default*](command_parameters_types_booleanflagparameter.default.md)

  ↳ [*default*](command_parameters_types_booleanparameter.default.md)

  ↳ [*default*](command_parameters_types_stringparameter.default.md)

  ↳ [*default*](command_parameters_types_userparameter.default.md)

## Table of contents

### Constructors

- [constructor](command_parameters_types_parameter.default.md#constructor)

### Properties

- [aliases](command_parameters_types_parameter.default.md#aliases)
- [full](command_parameters_types_parameter.default.md#full)
- [fullJoin](command_parameters_types_parameter.default.md#fulljoin)
- [missingError](command_parameters_types_parameter.default.md#missingerror)
- [name](command_parameters_types_parameter.default.md#name)
- [required](command_parameters_types_parameter.default.md#required)
- [showUsage](command_parameters_types_parameter.default.md#showusage)
- [types](command_parameters_types_parameter.default.md#types)
- [whitelist](command_parameters_types_parameter.default.md#whitelist)

### Methods

- [\_parse](command_parameters_types_parameter.default.md#_parse)
- [parse](command_parameters_types_parameter.default.md#parse)
- [parseOptions](command_parameters_types_parameter.default.md#parseoptions)

## Constructors

### constructor

\+ **new default**(): [*default*](command_parameters_types_parameter.default.md)

**Returns:** [*default*](command_parameters_types_parameter.default.md)

## Properties

### aliases

• `Optional` **aliases**: *undefined* \| *string*[]

Defined in: [src/command/parameters/types/Parameter.ts:17](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/parameters/types/Parameter.ts#L17)

___

### full

• `Optional` **full**: *undefined* \| *boolean*

Defined in: [src/command/parameters/types/Parameter.ts:18](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/parameters/types/Parameter.ts#L18)

___

### fullJoin

• `Optional` **fullJoin**: *undefined* \| *string*

Defined in: [src/command/parameters/types/Parameter.ts:19](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/parameters/types/Parameter.ts#L19)

___

### missingError

• `Optional` **missingError**: *undefined* \| *string*

Defined in: [src/command/parameters/types/Parameter.ts:20](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/parameters/types/Parameter.ts#L20)

___

### name

• `Optional` **name**: *undefined* \| *string*

Defined in: [src/command/parameters/types/Parameter.ts:21](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/parameters/types/Parameter.ts#L21)

___

### required

• `Optional` **required**: *undefined* \| *boolean*

Defined in: [src/command/parameters/types/Parameter.ts:22](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/parameters/types/Parameter.ts#L22)

___

### showUsage

• `Optional` **showUsage**: *undefined* \| *boolean*

Defined in: [src/command/parameters/types/Parameter.ts:23](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/parameters/types/Parameter.ts#L23)

___

### types

• `Optional` **types**: *any*

Defined in: [src/command/parameters/types/Parameter.ts:16](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/parameters/types/Parameter.ts#L16)

___

### whitelist

• `Optional` **whitelist**: *undefined* \| *string*[]

Defined in: [src/command/parameters/types/Parameter.ts:24](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/parameters/types/Parameter.ts#L24)

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

Defined in: [src/command/parameters/types/Parameter.ts:50](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/parameters/types/Parameter.ts#L50)

___

### parse

▸ `Static`**parse**(`arg`: *any*, `ctx`: [*default*](command_commandcontext.default.md)): *any*

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`arg` | *any* | The query of the argument.   |
`ctx` | [*default*](command_commandcontext.default.md) | The commands context   |

**Returns:** *any*

Any

Defined in: [src/command/parameters/types/Parameter.ts:60](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/parameters/types/Parameter.ts#L60)

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

Defined in: [src/command/parameters/types/Parameter.ts:30](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/command/parameters/types/Parameter.ts#L30)
