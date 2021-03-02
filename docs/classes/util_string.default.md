[yin-yang-ts](../README.md) / [Exports](../modules.md) / [util/String](../modules/util_string.md) / default

# Class: default

[util/String](../modules/util_string.md).default

## Table of contents

### Constructors

- [constructor](util_string.default.md#constructor)

### Methods

- [code](util_string.default.md#code)
- [escapeRegExp](util_string.default.md#escaperegexp)
- [hasPlaceholder](util_string.default.md#hasplaceholder)
- [makeID](util_string.default.md#makeid)
- [toProperCase](util_string.default.md#topropercase)

## Constructors

### constructor

\+ **new default**(): [*default*](util_string.default.md)

**Returns:** [*default*](util_string.default.md)

## Methods

### code

▸ `Static`**code**(`str`: *string*, `lang`: *string*, `minLength?`: *number*, `maxLength?`: *number*): *string*

If string is longer than max length will cut string down

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`str` | *string* | - | The string   |
`lang` | *string* | - | The markdown lang   |
`minLength` | *number* | 0 | The minumim length   |
`maxLength` | *number* | 1024 | The maximum langth   |

**Returns:** *string*

The formated string of code?

Defined in: [src/util/String.ts:13](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/17c6b1a/src/util/String.ts#L13)

___

### escapeRegExp

▸ `Static`**escapeRegExp**(`str`: *string*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`str` | *string* |

**Returns:** *string*

Defined in: [src/util/String.ts:18](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/17c6b1a/src/util/String.ts#L18)

___

### hasPlaceholder

▸ `Static`**hasPlaceholder**(`str`: *string*, `placeholder`: *string*, `value`: *string*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`str` | *string* |
`placeholder` | *string* |
`value` | *string* |

**Returns:** *string*

Defined in: [src/util/String.ts:28](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/17c6b1a/src/util/String.ts#L28)

___

### makeID

▸ `Static`**makeID**(`length`: *number*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`length` | *number* |

**Returns:** *string*

Defined in: [src/util/String.ts:35](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/17c6b1a/src/util/String.ts#L35)

___

### toProperCase

▸ `Static`**toProperCase**(`str`: *string*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`str` | *string* |

**Returns:** *string*

Defined in: [src/util/String.ts:24](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/17c6b1a/src/util/String.ts#L24)
