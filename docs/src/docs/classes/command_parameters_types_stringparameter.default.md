---
title: "Class: default"
---

# Class: default

[command/parameters/types/StringParameter](../modules/command_parameters_types_stringparameter.md).default

## Hierarchy

* [*default*](command_parameters_types_parameter.default.md)

  ↳ **default**

## Table of contents

### Constructors

- [constructor](command_parameters_types_stringparameter.default.md#constructor)

### Properties

- [aliases](command_parameters_types_stringparameter.default.md#aliases)
- [clean](command_parameters_types_stringparameter.default.md#clean)
- [errorRegex](command_parameters_types_stringparameter.default.md#errorregex)
- [forceLowerCase](command_parameters_types_stringparameter.default.md#forcelowercase)
- [forceUpperCase](command_parameters_types_stringparameter.default.md#forceuppercase)
- [full](command_parameters_types_stringparameter.default.md#full)
- [fullJoin](command_parameters_types_stringparameter.default.md#fulljoin)
- [maxLength](command_parameters_types_stringparameter.default.md#maxlength)
- [missingError](command_parameters_types_stringparameter.default.md#missingerror)
- [name](command_parameters_types_stringparameter.default.md#name)
- [required](command_parameters_types_stringparameter.default.md#required)
- [showUsage](command_parameters_types_stringparameter.default.md#showusage)
- [truncate](command_parameters_types_stringparameter.default.md#truncate)
- [types](command_parameters_types_stringparameter.default.md#types)
- [whitelist](command_parameters_types_stringparameter.default.md#whitelist)
- [clean](command_parameters_types_stringparameter.default.md#clean)
- [errorRegex](command_parameters_types_stringparameter.default.md#errorregex)
- [errors](command_parameters_types_stringparameter.default.md#errors)
- [forceLowerCase](command_parameters_types_stringparameter.default.md#forcelowercase)
- [forceUpperCase](command_parameters_types_stringparameter.default.md#forceuppercase)
- [maxLength](command_parameters_types_stringparameter.default.md#maxlength)
- [truncate](command_parameters_types_stringparameter.default.md#truncate)

### Methods

- [\_parse](command_parameters_types_stringparameter.default.md#_parse)
- [parse](command_parameters_types_stringparameter.default.md#parse)
- [parseOptions](command_parameters_types_stringparameter.default.md#parseoptions)

## Constructors

### constructor

\+ **new default**(): [*default*](command_parameters_types_stringparameter.default.md)

**Returns:** [*default*](command_parameters_types_stringparameter.default.md)

Inherited from: [default](command_parameters_types_parameter.default.md)

## Properties

### aliases

• `Optional` **aliases**: *undefined* \| *string*[]

Inherited from: [default](command_parameters_types_parameter.default.md).[aliases](command_parameters_types_parameter.default.md#aliases)

___

### clean

• **clean**: *boolean*

___

### errorRegex

• **errorRegex**: *any*

___

### forceLowerCase

• **forceLowerCase**: *boolean*

___

### forceUpperCase

• **forceUpperCase**: *boolean*

___

### full

• `Optional` **full**: *undefined* \| *boolean*

Inherited from: [default](command_parameters_types_parameter.default.md).[full](command_parameters_types_parameter.default.md#full)

___

### fullJoin

• `Optional` **fullJoin**: *undefined* \| *string*

Inherited from: [default](command_parameters_types_parameter.default.md).[fullJoin](command_parameters_types_parameter.default.md#fulljoin)

___

### maxLength

• **maxLength**: *number*

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

### truncate

• **truncate**: *boolean*

___

### types

• `Optional` **types**: *any*

Inherited from: [default](command_parameters_types_parameter.default.md).[types](command_parameters_types_parameter.default.md#types)

___

### whitelist

• `Optional` **whitelist**: *undefined* \| *string*[]

Inherited from: [default](command_parameters_types_parameter.default.md).[whitelist](command_parameters_types_parameter.default.md#whitelist)

___

### clean

▪ `Static` **clean**: *boolean*

___

### errorRegex

▪ `Static` **errorRegex**: *any*

___

### errors

▪ `Static` **errors**: *any*

___

### forceLowerCase

▪ `Static` **forceLowerCase**: *boolean*

___

### forceUpperCase

▪ `Static` **forceUpperCase**: *boolean*

___

### maxLength

▪ `Static` **maxLength**: *number*

___

### truncate

▪ `Static` **truncate**: *boolean*

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

▸ `Static`**parse**(`arg`: *null* \| *string*, `ctx`: [*CommandContext*](command_commandcontext.commandcontext.md)): *null* \| *string*

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`arg` | *null* \| *string* | The argument.   |
`ctx` | [*CommandContext*](command_commandcontext.commandcontext.md) | The context of this argument.   |

**Returns:** *null* \| *string*

string

Overrides: [default](command_parameters_types_parameter.default.md)

___

### parseOptions

▸ `Static`**parseOptions**(`options`: [*StringOptions*](../interfaces/command_parameters_types_stringparameter.stringoptions.md)): *object*

#### Parameters:

Name | Type |
:------ | :------ |
`options` | [*StringOptions*](../interfaces/command_parameters_types_stringparameter.stringoptions.md) |

**Returns:** *object*

Name | Type |
:------ | :------ |
`aliases` | *any* |
`clean` | *boolean* |
`errorRegex` | *any* |
`forceLowerCase` | *boolean* |
`forceUpperCase` | *boolean* |
`full` | *boolean* |
`fullJoin` | *any* |
`maxLength` | *number* |
`missingError` | *any* |
`name` | *any* |
`required` | *any* |
`showUsage` | *any* |
`truncate` | *boolean* |
`whitelist` | *any* |

Overrides: [default](command_parameters_types_parameter.default.md)
