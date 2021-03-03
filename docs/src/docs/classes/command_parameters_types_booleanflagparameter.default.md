---
title: "Class: default"
---

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

___

### full

• `Optional` **full**: *undefined* \| *boolean*

Inherited from: [default](command_parameters_types_parameter.default.md).[full](command_parameters_types_parameter.default.md#full)

___

### fullJoin

• `Optional` **fullJoin**: *undefined* \| *string*

Inherited from: [default](command_parameters_types_parameter.default.md).[fullJoin](command_parameters_types_parameter.default.md#fulljoin)

___

### missingError

• `Optional` **missingError**: *undefined* \| *string*

Inherited from: [default](command_parameters_types_parameter.default.md).[missingError](command_parameters_types_parameter.default.md#missingerror)

___

### name

• `Optional` **name**: *undefined* \| *string*

Inherited from: [default](command_parameters_types_parameter.default.md).[name](command_parameters_types_parameter.default.md#name)

___

### required

• `Optional` **required**: *undefined* \| *boolean*

Inherited from: [default](command_parameters_types_parameter.default.md).[required](command_parameters_types_parameter.default.md#required)

___

### showUsage

• `Optional` **showUsage**: *undefined* \| *boolean*

Inherited from: [default](command_parameters_types_parameter.default.md).[showUsage](command_parameters_types_parameter.default.md#showusage)

___

### types

• `Optional` **types**: *any*

Inherited from: [default](command_parameters_types_parameter.default.md).[types](command_parameters_types_parameter.default.md#types)

___

### whitelist

• `Optional` **whitelist**: *undefined* \| *string*[]

Inherited from: [default](command_parameters_types_parameter.default.md).[whitelist](command_parameters_types_parameter.default.md#whitelist)

## Methods

### \_parse

▸ `Static` `Private`**_parse**(`arg`: *string*, `ctx`: [*CommandContext*](command_commandcontext.commandcontext.md), `opt?`: *object*): *void*

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`arg` | *string* | The query of the argument.   |
`ctx` | [*CommandContext*](command_commandcontext.commandcontext.md) | The context of this argument.   |
`opt` | *object* | - |

**Returns:** *void*

Inherited from: [default](command_parameters_types_parameter.default.md)

___

### parse

▸ `Static`**parse**(): *boolean*

**Returns:** *boolean*

Overrides: [default](command_parameters_types_parameter.default.md)

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
