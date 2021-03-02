[yin-yang-ts](../README.md) / [Exports](../modules.md) / [util/File](../modules/util_file.md) / default

# Class: default

[util/File](../modules/util_file.md).default

Standard File Handler Class

## Table of contents

### Constructors

- [constructor](util_file.default.md#constructor)

### Properties

- [message](util_file.default.md#message)

### Methods

- [LoadFile](util_file.default.md#loadfile)
- [LoadFiles](util_file.default.md#loadfiles)

## Constructors

### constructor

\+ **new default**(): [*default*](util_file.default.md)

Creates an instance of FileUtil.

**`memberof`** FileUtil

**Returns:** [*default*](util_file.default.md)

Defined in: [src/util/File.ts:14](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/112e06c/src/util/File.ts#L14)

## Properties

### message

• **message**: *null* \| *string*

Defined in: [src/util/File.ts:14](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/112e06c/src/util/File.ts#L14)

## Methods

### LoadFile

▸ `Private`**LoadFile**(`filePath`: *string*, `fileName`: *string*, `bot`: [*default*](client_botclient.default.md)): *Promise*<void\>

Loads a specific file into the appropriate Collection if not disabled.

**`static`** 

**`memberof`** FileUtil

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`filePath` | *string* | The files path.   |
`fileName` | *string* | The files name.   |
`bot` | [*default*](client_botclient.default.md) | The BotClient.   |

**Returns:** *Promise*<void\>

A void Promise

Defined in: [src/util/File.ts:60](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/112e06c/src/util/File.ts#L60)

___

### LoadFiles

▸ **LoadFiles**(`url`: *string*, `bot`: [*default*](client_botclient.default.md)): *void*

Load all files in a folder and
gets them ready for the loadFile method

**`static`** 

**`memberof`** FileUtil

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`url` | *string* | The folder of files you want to load   |
`bot` | [*default*](client_botclient.default.md) | The BotClient object   |

**Returns:** *void*

Defined in: [src/util/File.ts:37](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/112e06c/src/util/File.ts#L37)
