---
title: "Class: default"
---

# Class: default

[command/parameters/CommandParameters](../modules/command_parameters_commandparameters.md).default

## Table of contents

### Constructors

- [constructor](command_parameters_commandparameters.default.md#constructor)

### Methods

- [handle](command_parameters_commandparameters.default.md#handle)
- [handleArguments](command_parameters_commandparameters.default.md#handlearguments)
- [handleFlags](command_parameters_commandparameters.default.md#handleflags)
- [parseOptions](command_parameters_commandparameters.default.md#parseoptions)
- [parseParameter](command_parameters_commandparameters.default.md#parseparameter)

## Constructors

### constructor

\+ **new default**(): [*default*](command_parameters_commandparameters.default.md)

**Returns:** [*default*](command_parameters_commandparameters.default.md)

## Methods

### handle

▸ `Static`**handle**(`context`: [*CommandContext*](command_commandcontext.commandcontext.md), `options`: *object*, `args`: *string*[]): *Promise*<string[]\>

Triggers options parser, the flag handler and the argument handler.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`context` | [*CommandContext*](command_commandcontext.commandcontext.md) | The command context.   |
`options` | *object* | The options.   |
`args` | *string*[] | Array of the command args.   |

**Returns:** *Promise*<string[]\>

The handled arguments.

___

### handleArguments

▸ `Static`**handleArguments**(`context`: [*CommandContext*](command_commandcontext.commandcontext.md), `opts`: CommandsParameterOptions, `args`: *string*[]): *Promise*<string[]\>

Handles the arguments.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`context` | [*CommandContext*](command_commandcontext.commandcontext.md) | The command context   |
`opts` | CommandsParameterOptions | The options.   |
`args` | *string*[] | The arguments.   |

**Returns:** *Promise*<string[]\>

The parsed arguments

___

### handleFlags

▸ `Static`**handleFlags**(`context`: [*CommandContext*](command_commandcontext.commandcontext.md), `opts`: CommandsParameterOptions, `args`: *string*[]): *Promise*<void\>

Handles the flags.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`context` | [*CommandContext*](command_commandcontext.commandcontext.md) | The command context.   |
`opts` | CommandsParameterOptions | The options.   |
`args` | *string*[] | Array of the command args.   |

**Returns:** *Promise*<void\>

___

### parseOptions

▸ `Static`**parseOptions**(`params`: *any*): *object*

#### Parameters:

Name | Type |
:------ | :------ |
`params` | *any* |

**Returns:** *object*

Name | Type |
:------ | :------ |
`flags` | *any* |
`parameters` | *any* |

___

### parseParameter

▸ `Static`**parseParameter**(`context`: [*CommandContext*](command_commandcontext.commandcontext.md), `param`: [*ParameterOptions*](../interfaces/command_parameters_types_parameter.parameteroptions.md), `arg`: *string*, `missingErr`: *string*): *Promise*<string\>

Parses a parameter

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`context` | [*CommandContext*](command_commandcontext.commandcontext.md) | The command context.   |
`param` | [*ParameterOptions*](../interfaces/command_parameters_types_parameter.parameteroptions.md) | The parameter.   |
`arg` | *string* | The query.   |
`missingErr` | *string* | The error to throw whenever the parse fails.   |

**Returns:** *Promise*<string\>

parsedArgs
