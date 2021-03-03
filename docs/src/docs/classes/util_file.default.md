---
title: "Class: default"
---

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

## Properties

### message

• **message**: *null* \| *string*

## Methods

### LoadFile

▸ `Private`**LoadFile**(`filePath`: *string*, `fileName`: *string*, `bot`: [*BotClient*](client_botclient.botclient.md)): *Promise*<void\>

Loads a specific file into the appropriate Collection if not disabled.

**`static`** 

**`memberof`** FileUtil

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`filePath` | *string* | The files path.   |
`fileName` | *string* | The files name.   |
`bot` | [*BotClient*](client_botclient.botclient.md) | The BotClient.   |

**Returns:** *Promise*<void\>

A void Promise

___

### LoadFiles

▸ **LoadFiles**(`url`: *string*, `bot`: [*BotClient*](client_botclient.botclient.md)): *void*

Load all files in a folder and
gets them ready for the loadFile method

**`static`** 

**`memberof`** FileUtil

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`url` | *string* | The folder of files you want to load   |
`bot` | [*BotClient*](client_botclient.botclient.md) | The BotClient object   |

**Returns:** *void*
