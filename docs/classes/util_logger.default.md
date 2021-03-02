[yin-yang-ts](../README.md) / [Exports](../modules.md) / [util/Logger](../modules/util_logger.md) / default

# Class: default

[util/Logger](../modules/util_logger.md).default

The Logger Class, every project should have this.

**`export`** 

## Table of contents

### Constructors

- [constructor](util_logger.default.md#constructor)

### Methods

- [debug](util_logger.default.md#debug)
- [error](util_logger.default.md#error)
- [info](util_logger.default.md#info)
- [log](util_logger.default.md#log)
- [warn](util_logger.default.md#warn)
- [appendLogs](util_logger.default.md#appendlogs)
- [formatTime](util_logger.default.md#formattime)
- [timestamp](util_logger.default.md#timestamp)
- [type](util_logger.default.md#type)

## Constructors

### constructor

\+ **new default**(): [*default*](util_logger.default.md)

**Returns:** [*default*](util_logger.default.md)

## Methods

### debug

▸ **debug**(...`content`: *any*[]): *void*

Sends a Debug message

**`static`** 

**`memberof`** Logger

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`...content` | *any*[] | The content.   |

**Returns:** *void*

Defined in: [src/util/Logger.ts:190](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/util/Logger.ts#L190)

___

### error

▸ **error**(...`content`: *any*[]): *void*

Sends a Error message

**`static`** 

**`memberof`** Logger

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`...content` | *any*[] | The content.   |

**Returns:** *void*

Defined in: [src/util/Logger.ts:216](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/util/Logger.ts#L216)

___

### info

▸ **info**(...`content`: *any*[]): *void*

Sends a Info message

**`static`** 

**`memberof`** Logger

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`...content` | *any*[] | The content.   |

**Returns:** *void*

Defined in: [src/util/Logger.ts:177](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/util/Logger.ts#L177)

___

### log

▸ **log**(...`content`: *any*[]): *void*

Sends a Log message

**`static`** 

**`memberof`** Logger

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`...content` | *any*[] | The content.   |

**Returns:** *void*

Defined in: [src/util/Logger.ts:164](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/util/Logger.ts#L164)

___

### warn

▸ **warn**(...`content`: *any*[]): *void*

Sends a Warn message

**`static`** 

**`memberof`** Logger

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`...content` | *any*[] | The content.   |

**Returns:** *void*

Defined in: [src/util/Logger.ts:203](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/util/Logger.ts#L203)

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

Defined in: [src/util/Logger.ts:95](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/util/Logger.ts#L95)

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

Defined in: [src/util/Logger.ts:60](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/util/Logger.ts#L60)

___

### timestamp

▸ `Private` `Static`**timestamp**(): *string*[]

Create a new timestamp array.

**`static`** 

**`memberof`** Logger

**Returns:** *string*[]

String Array

Defined in: [src/util/Logger.ts:72](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/util/Logger.ts#L72)

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

Defined in: [src/util/Logger.ts:110](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/util/Logger.ts#L110)
