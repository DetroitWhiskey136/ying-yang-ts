[yin-yang-ts](../README.md) / [Exports](../modules.md) / [util/Util](../modules/util_util.md) / default

# Class: default

[util/Util](../modules/util_util.md).default

## Table of contents

### Constructors

- [constructor](util_util.default.md#constructor)

### Methods

- [isBoolean](util_util.default.md#isboolean)
- [isEmpty](util_util.default.md#isempty)
- [isPromise](util_util.default.md#ispromise)

## Constructors

### constructor

\+ **new default**(): [*default*](util_util.default.md)

**Returns:** [*default*](util_util.default.md)

## Methods

### isBoolean

▸ `Static`**isBoolean**(`str`: *string*): *string* \| *boolean*

Checks if string is a boolean.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`str` | *string* | The value to be checked.   |

**Returns:** *string* \| *boolean*

If the value was a boolean.

Defined in: [src/util/Util.ts:64](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/17c6b1a/src/util/Util.ts#L64)

___

### isEmpty

▸ `Static`**isEmpty**(`val`: *any*): *boolean*

Checks if something is empty as in if their size/length is 0.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`val` | *any* | The value to be checked if empty.   |

**Returns:** *boolean*

Whether it is empty or not.

Defined in: [src/util/Util.ts:11](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/17c6b1a/src/util/Util.ts#L11)

___

### isPromise

▸ `Static`**isPromise**(`val`: *any*): *boolean*

Checks if something is a promise.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`val` | *any* | The value to be checked.   |

**Returns:** *boolean*

If the value was a promise.

Defined in: [src/util/Util.ts:51](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/17c6b1a/src/util/Util.ts#L51)
