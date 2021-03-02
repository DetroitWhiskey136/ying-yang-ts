[yin-yang-ts](../README.md) / [Exports](../modules.md) / [database/EnmapProvider](../modules/database_enmapprovider.md) / default

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

Defined in: [src/database/EnmapProvider.ts:18](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/17c6b1a/src/database/EnmapProvider.ts#L18)

## Properties

### \_\_proto\_\_

• **\_\_proto\_\_**: *any*

Defined in: [src/database/EnmapProvider.ts:8](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/17c6b1a/src/database/EnmapProvider.ts#L8)

___

### help

• **help**: *object*

Defined in: [src/database/EnmapProvider.ts:7](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/17c6b1a/src/database/EnmapProvider.ts#L7)

___

### model

• **model**: *any*

Defined in: [src/database/EnmapProvider.ts:6](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/17c6b1a/src/database/EnmapProvider.ts#L6)

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

Defined in: [src/database/EnmapProvider.ts:84](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/17c6b1a/src/database/EnmapProvider.ts#L84)

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

Defined in: [src/database/EnmapProvider.ts:74](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/17c6b1a/src/database/EnmapProvider.ts#L74)

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

Defined in: [src/database/EnmapProvider.ts:34](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/17c6b1a/src/database/EnmapProvider.ts#L34)

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

Defined in: [src/database/EnmapProvider.ts:46](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/17c6b1a/src/database/EnmapProvider.ts#L46)

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

Defined in: [src/database/EnmapProvider.ts:60](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/17c6b1a/src/database/EnmapProvider.ts#L60)
