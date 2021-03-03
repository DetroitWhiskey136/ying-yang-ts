---
title: "Class: default<D>"
---

# Class: default<D\>

[database/EnmapProvider](../modules/database_enmapprovider.md).default

The EnmapProvider class.

## Type parameters

Name |
:------ |
`D` |

## Table of contents

### Constructors

- [constructor](database_enmapprovider.default.md#constructor)

### Properties

- [\_\_proto\_\_](database_enmapprovider.default.md#__proto__)
- [help](database_enmapprovider.default.md#help)
- [model](database_enmapprovider.default.md#model)

### Methods

- [delete](database_enmapprovider.default.md#delete)
- [ensure](database_enmapprovider.default.md#ensure)
- [get](database_enmapprovider.default.md#get)
- [set](database_enmapprovider.default.md#set)
- [update](database_enmapprovider.default.md#update)

## Constructors

### constructor

\+ **new default**<D\>(`model`: *Enmap*<string \| number, any\>): [*default*](database_enmapprovider.default.md)<D\>

#### Type parameters:

Name |
:------ |
`D` |

#### Parameters:

Name | Type |
:------ | :------ |
`model` | *Enmap*<string \| number, any\> |

**Returns:** [*default*](database_enmapprovider.default.md)<D\>

## Properties

### \_\_proto\_\_

• **\_\_proto\_\_**: *any*

___

### help

• **help**: *object*

___

### model

• **model**: *any*

## Methods

### delete

▸ **delete**(`key`: *string*): D

Deletes a document in the db,returns an error if it doesn't exist

**`memberof`** EnmapProvider

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`key` | *string* | The key of the document.   |

**Returns:** D

The object should be null or undefined -_- or an error.

___

### ensure

▸ **ensure**(`key`: *string*, `value`: *any*): D

ensures a document exists in the db, creates a new document if it doesn't exist

**`memberof`** EnmapProvider

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`key` | *string* | The key of the document.   |
`value` | *any* | The value of the document.   |

**Returns:** D

The object of the document.

___

### get

▸ **get**(`key`: *string*): D

Gets a document from the db / returns an error if not found.

**`memberof`** EnmapProvider

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`key` | *string* | The key of the document.   |

**Returns:** D

The document or an error.

___

### set

▸ **set**(`key`: *string*, `value`: *any*): D

sets a document from the db, returns an error if it exists

**`memberof`** EnmapProvider

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`key` | *string* | The key of the document.   |
`value` | *any* | The object value of the document.   |

**Returns:** D

An error if document exists or creates the docment.

___

### update

▸ **update**(`key`: *string*, `value`: *any*): D

updates a document from the db, returns an error if it doesn't exist (allows dot-notaion)

**`memberof`** EnmapProvider

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`key` | *string* | The key of the document.   |
`value` | *any* | The new value of the docuemnt.   |

**Returns:** D

The document or an error.
