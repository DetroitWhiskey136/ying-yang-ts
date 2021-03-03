---
title: "Class: Logger"
---

# Class: Logger

[util/Logger](../modules/util_logger.md).Logger

The Logger Class, every project should have this.

**`export`** 

## Table of contents

### Constructors

- [constructor](util_logger.logger.md#constructor)

### Methods

- [appendLogs](util_logger.logger.md#appendlogs)
- [debug](util_logger.logger.md#debug)
- [error](util_logger.logger.md#error)
- [formatTime](util_logger.logger.md#formattime)
- [info](util_logger.logger.md#info)
- [log](util_logger.logger.md#log)
- [timestamp](util_logger.logger.md#timestamp)
- [type](util_logger.logger.md#type)
- [warn](util_logger.logger.md#warn)
- [appendLogs](util_logger.logger.md#appendlogs)
- [formatTime](util_logger.logger.md#formattime)
- [timestamp](util_logger.logger.md#timestamp)
- [type](util_logger.logger.md#type)

## Constructors

### constructor

\+ **new Logger**(): [*Logger*](util_logger.logger.md)

**Returns:** [*Logger*](util_logger.logger.md)

## Methods

### appendLogs

▸ **appendLogs**(): *void*

**Returns:** *void*

___

### debug

▸ **debug**(): *void*

**Returns:** *void*

▸ **debug**(...`content`: *any*[]): *void*

Sends a Debug message

**`static`** 

**`memberof`** Logger

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`...content` | *any*[] | The content.   |

**Returns:** *void*

___

### error

▸ **error**(): *void*

**Returns:** *void*

▸ **error**(...`content`: *any*[]): *void*

Sends a Error message

**`static`** 

**`memberof`** Logger

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`...content` | *any*[] | The content.   |

**Returns:** *void*

___

### formatTime

▸ **formatTime**(): *string*

**Returns:** *string*

___

### info

▸ **info**(): *void*

**Returns:** *void*

▸ **info**(...`content`: *any*[]): *void*

Sends a Info message

**`static`** 

**`memberof`** Logger

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`...content` | *any*[] | The content.   |

**Returns:** *void*

___

### log

▸ **log**(): *void*

**Returns:** *void*

▸ **log**(...`content`: *any*[]): *void*

Sends a Log message

**`static`** 

**`memberof`** Logger

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`...content` | *any*[] | The content.   |

**Returns:** *void*

___

### timestamp

▸ **timestamp**(): *string*[]

**Returns:** *string*[]

___

### type

▸ **type**(): *string*[]

**Returns:** *string*[]

___

### warn

▸ **warn**(): *void*

**Returns:** *void*

▸ **warn**(...`content`: *any*[]): *void*

Sends a Warn message

**`static`** 

**`memberof`** Logger

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`...content` | *any*[] | The content.   |

**Returns:** *void*

___

### appendLogs

▸ `Private` `Static`**appendLogs**(`timestamp`: *string*[], ...`content`: *any*[]): *void*

Writes to the end of the log file

**`static`** 

**`memberof`** Logger

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`timestamp` | *string*[] | A timestamp.   |
`...content` | *any*[] | The content.   |

**Returns:** *void*

___

### formatTime

▸ `Private` `Static`**formatTime**(`input`: *number*): *string*

Adds 0 to the beginning of the number if less than 10

**`static`** 

**`memberof`** Logger

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`input` | *number* | The number to format   |

**Returns:** *string*

String or Number

___

### timestamp

▸ `Private` `Static`**timestamp**(): *string*[]

Create a new timestamp array.

**`static`** 

**`memberof`** Logger

**Returns:** *string*[]

String Array

___

### type

▸ `Private` `Static`**type**(`loggerType`: *LOG* \| *INFO* \| *DEBUG* \| *WARN* \| *ERROR*): *string*[]

Creates a type for colors and stuff

**`static`** 

**`memberof`** Logger

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`loggerType` | *LOG* \| *INFO* \| *DEBUG* \| *WARN* \| *ERROR* | The Logger Type.   |

**Returns:** *string*[]

String Array
