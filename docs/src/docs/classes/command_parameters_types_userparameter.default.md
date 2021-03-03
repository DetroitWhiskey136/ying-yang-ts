---
title: "Class: default"
---

# Class: default

[command/parameters/types/UserParameter](../modules/command_parameters_types_userparameter.md).default

## Hierarchy

* [*default*](command_parameters_types_parameter.default.md)

  ↳ **default**

## Table of contents

### Constructors

- [constructor](command_parameters_types_userparameter.default.md#constructor)

### Properties

- [aliases](command_parameters_types_userparameter.default.md#aliases)
- [full](command_parameters_types_userparameter.default.md#full)
- [fullJoin](command_parameters_types_userparameter.default.md#fulljoin)
- [missingError](command_parameters_types_userparameter.default.md#missingerror)
- [name](command_parameters_types_userparameter.default.md#name)
- [required](command_parameters_types_userparameter.default.md#required)
- [showUsage](command_parameters_types_userparameter.default.md#showusage)
- [types](command_parameters_types_userparameter.default.md#types)
- [whitelist](command_parameters_types_userparameter.default.md#whitelist)
- [acceptBot](command_parameters_types_userparameter.default.md#acceptbot)
- [acceptSelf](command_parameters_types_userparameter.default.md#acceptself)
- [acceptUser](command_parameters_types_userparameter.default.md#acceptuser)
- [errors](command_parameters_types_userparameter.default.md#errors)
- [fetchGlobal](command_parameters_types_userparameter.default.md#fetchglobal)
- [moreParams](command_parameters_types_userparameter.default.md#moreparams)
- [verifyHierarchy](command_parameters_types_userparameter.default.md#verifyhierarchy)

### Methods

- [\_parse](command_parameters_types_userparameter.default.md#_parse)
- [parse](command_parameters_types_userparameter.default.md#parse)
- [parseOptions](command_parameters_types_userparameter.default.md#parseoptions)

## Constructors

### constructor

\+ **new default**(): [*default*](command_parameters_types_userparameter.default.md)

**Returns:** [*default*](command_parameters_types_userparameter.default.md)

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

___

### acceptBot

▪ `Static` **acceptBot**: *boolean*

___

### acceptSelf

▪ `Static` **acceptSelf**: *boolean*

___

### acceptUser

▪ `Static` **acceptUser**: *boolean*

___

### errors

▪ `Static` **errors**: OptionErrors

___

### fetchGlobal

▪ `Static` **fetchGlobal**: *boolean*

___

### moreParams

▪ `Static` **moreParams**: *any*

___

### verifyHierarchy

▪ `Static` **verifyHierarchy**: *boolean*

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

▸ `Static`**parse**(`arg`: *string*, `ctx`: [*CommandContext*](command_commandcontext.commandcontext.md)): *Promise*<ParsedUser\>

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`arg` | *string* | The argument.   |
`ctx` | [*CommandContext*](command_commandcontext.commandcontext.md) | The context of this argument.   |

**Returns:** *Promise*<ParsedUser\>

a user?

Overrides: [default](command_parameters_types_parameter.default.md)

___

### parseOptions

▸ `Static`**parseOptions**(`options`: UserParameterOptions): *object*

#### Parameters:

Name | Type |
:------ | :------ |
`options` | UserParameterOptions |

**Returns:** *object*

Name | Type |
:------ | :------ |
`acceptBot` | *boolean* |
`acceptSelf` | *any* |
`acceptUser` | *any* |
`aliases` | *any* |
`errors` | *object* |
`errors.acceptBotError` | *string* |
`errors.acceptSelfError` | *string* |
`errors.acceptUserError` | *string* |
`errors.invalidUserError` | *string* |
`fetchGlobal` | *boolean* |
`full` | *boolean* |
`fullJoin` | *any* |
`missingError` | *any* |
`name` | *any* |
`required` | *any* |
`showUsage` | *any* |
`verifyHierarchy` | *boolean* |
`whitelist` | *any* |

Overrides: [default](command_parameters_types_parameter.default.md)
