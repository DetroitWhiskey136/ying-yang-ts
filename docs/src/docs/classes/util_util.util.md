---
title: "Class: Util"
---

# Class: Util

[util/Util](../modules/util_util.md).Util

**`static`** 

## Table of contents

### Constructors

- [constructor](util_util.util.md#constructor)

### Methods

- [isBoolean](util_util.util.md#isboolean)
- [isEmpty](util_util.util.md#isempty)
- [isPromise](util_util.util.md#ispromise)

## Constructors

### constructor

\+ **new Util**(): [*Util*](util_util.util.md)

**Returns:** [*Util*](util_util.util.md)

## Methods

### isBoolean

▸ `Static`**isBoolean**(`str`: *string*): *string* \| *boolean*

Checks if string is a boolean.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`str` | *string* | The value to be checked.   |

**Returns:** *string* \| *boolean*

reutrns the represented value as a boolean else returns the str.

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

___

### isPromise

▸ `Static`**isPromise**(`val`: *any*): *boolean*

Checks if something is a promise.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`val` | *any* | The value to be checked.   |

**Returns:** *boolean*

Whether it is a promise or not.
