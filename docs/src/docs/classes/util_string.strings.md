---
title: "Class: Strings"
---

# Class: Strings

[util/String](../modules/util_string.md).Strings

## Table of contents

### Constructors

- [constructor](util_string.strings.md#constructor)

### Methods

- [code](util_string.strings.md#code)
- [escapeRegExp](util_string.strings.md#escaperegexp)
- [hasPlaceholder](util_string.strings.md#hasplaceholder)
- [makeID](util_string.strings.md#makeid)
- [toProperCase](util_string.strings.md#topropercase)

## Constructors

### constructor

\+ **new Strings**(): [*Strings*](util_string.strings.md)

**Returns:** [*Strings*](util_string.strings.md)

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

___

### escapeRegExp

▸ `Static`**escapeRegExp**(`str`: *string*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`str` | *string* |

**Returns:** *string*

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

___

### makeID

▸ `Static`**makeID**(`length`: *number*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`length` | *number* |

**Returns:** *string*

___

### toProperCase

▸ `Static`**toProperCase**(`str`: *string*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`str` | *string* |

**Returns:** *string*
