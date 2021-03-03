---
title: "Class: default"
---

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

___

### full

• `Optional` **full**: *undefined* \| *boolean*

___

### fullJoin

• `Optional` **fullJoin**: *undefined* \| *string*

___

### missingError

• `Optional` **missingError**: *undefined* \| *string*

___

### name

• `Optional` **name**: *undefined* \| *string*

___

### required

• `Optional` **required**: *undefined* \| *boolean*

___

### showUsage

• `Optional` **showUsage**: *undefined* \| *boolean*

___

### types

• `Optional` **types**: *any*

___

### whitelist

• `Optional` **whitelist**: *undefined* \| *string*[]

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

___

### parse

▸ `Static`**parse**(`arg`: *any*, `ctx`: [*CommandContext*](command_commandcontext.commandcontext.md)): *any*

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`arg` | *any* | The query of the argument.   |
`ctx` | [*CommandContext*](command_commandcontext.commandcontext.md) | The commands context   |

**Returns:** *any*

Any

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
