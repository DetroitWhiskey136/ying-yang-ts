[yin-yang-ts](../README.md) / [Exports](../modules.md) / [discord/Embed](../modules/discord_embed.md) / default

# Class: default

[discord/Embed](../modules/discord_embed.md).default

Represents a rich embed in a message.

## Hierarchy

* *MessageEmbed*

  ↳ **default**

## Table of contents

### Constructors

- [constructor](discord_embed.default.md#constructor)

### Properties

- [author](discord_embed.default.md#author)
- [color](discord_embed.default.md#color)
- [createdAt](discord_embed.default.md#createdat)
- [description](discord_embed.default.md#description)
- [fields](discord_embed.default.md#fields)
- [files](discord_embed.default.md#files)
- [footer](discord_embed.default.md#footer)
- [hexColor](discord_embed.default.md#hexcolor)
- [image](discord_embed.default.md#image)
- [length](discord_embed.default.md#length)
- [options](discord_embed.default.md#options)
- [provider](discord_embed.default.md#provider)
- [thumbnail](discord_embed.default.md#thumbnail)
- [timestamp](discord_embed.default.md#timestamp)
- [title](discord_embed.default.md#title)
- [type](discord_embed.default.md#type)
- [url](discord_embed.default.md#url)
- [video](discord_embed.default.md#video)

### Methods

- [addField](discord_embed.default.md#addfield)
- [addFields](discord_embed.default.md#addfields)
- [attachFiles](discord_embed.default.md#attachfiles)
- [resolveImage](discord_embed.default.md#resolveimage)
- [setAuthor](discord_embed.default.md#setauthor)
- [setColor](discord_embed.default.md#setcolor)
- [setDescription](discord_embed.default.md#setdescription)
- [setError](discord_embed.default.md#seterror)
- [setFooter](discord_embed.default.md#setfooter)
- [setImage](discord_embed.default.md#setimage)
- [setTemplate](discord_embed.default.md#settemplate)
- [setThumbnail](discord_embed.default.md#setthumbnail)
- [setTimestamp](discord_embed.default.md#settimestamp)
- [setTitle](discord_embed.default.md#settitle)
- [setURL](discord_embed.default.md#seturl)
- [spliceFields](discord_embed.default.md#splicefields)
- [toJSON](discord_embed.default.md#tojson)
- [hasSupport](discord_embed.default.md#hassupport)
- [normalizeField](discord_embed.default.md#normalizefield)
- [normalizeFields](discord_embed.default.md#normalizefields)
- [resolveName](discord_embed.default.md#resolvename)

## Constructors

### constructor

\+ **new default**(`embedResolvable?`: *null* \| *GuildMember* \| *User*, `options?`: *Partial*<EmbedOptions\>, `data?`: *MessageEmbed* \| MessageEmbedOptions): [*default*](discord_embed.default.md)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`embedResolvable?` | *null* \| *GuildMember* \| *User* | The embed resolvable.   |
`options` | *Partial*<EmbedOptions\> | The options for the embed.   |
`data` | *MessageEmbed* \| MessageEmbedOptions | The data of the embed.    |

**Returns:** [*default*](discord_embed.default.md)

Defined in: [src/discord/Embed.ts:36](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/discord/Embed.ts#L36)

## Properties

### author

• **author**: *null* \| MessageEmbedAuthor

Defined in: node_modules/discord.js/typings/index.d.ts:1084

___

### color

• **color**: *null* \| *number*

Defined in: node_modules/discord.js/typings/index.d.ts:1085

___

### createdAt

• `Readonly` **createdAt**: *null* \| Date

Defined in: node_modules/discord.js/typings/index.d.ts:1086

___

### description

• **description**: *null* \| *string*

Defined in: node_modules/discord.js/typings/index.d.ts:1087

___

### fields

• **fields**: EmbedField[]

Defined in: node_modules/discord.js/typings/index.d.ts:1088

___

### files

• **files**: (*string* \| *MessageAttachment* \| FileOptions)[]

Defined in: node_modules/discord.js/typings/index.d.ts:1089

___

### footer

• **footer**: *null* \| MessageEmbedFooter

Defined in: node_modules/discord.js/typings/index.d.ts:1090

___

### hexColor

• `Readonly` **hexColor**: *null* \| *string*

Defined in: node_modules/discord.js/typings/index.d.ts:1091

___

### image

• **image**: *null* \| MessageEmbedImage

Defined in: node_modules/discord.js/typings/index.d.ts:1092

___

### length

• `Readonly` **length**: *number*

Defined in: node_modules/discord.js/typings/index.d.ts:1093

___

### options

• **options**: EmbedOptions

Defined in: [src/discord/Embed.ts:36](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/discord/Embed.ts#L36)

___

### provider

• **provider**: *null* \| MessageEmbedProvider

Defined in: node_modules/discord.js/typings/index.d.ts:1094

___

### thumbnail

• **thumbnail**: *null* \| MessageEmbedThumbnail

Defined in: node_modules/discord.js/typings/index.d.ts:1095

___

### timestamp

• **timestamp**: *null* \| *number*

Defined in: node_modules/discord.js/typings/index.d.ts:1096

___

### title

• **title**: *null* \| *string*

Defined in: node_modules/discord.js/typings/index.d.ts:1097

___

### type

• **type**: *string*

Defined in: node_modules/discord.js/typings/index.d.ts:1098

___

### url

• **url**: *null* \| *string*

Defined in: node_modules/discord.js/typings/index.d.ts:1099

___

### video

• `Readonly` **video**: *null* \| MessageEmbedVideo

Defined in: node_modules/discord.js/typings/index.d.ts:1100

## Methods

### addField

▸ **addField**(`name`: *string* \| *number*, `value`: *string* \| *number*, `inline?`: *boolean*): [*default*](discord_embed.default.md)

Adds a field to the embed (max 25).

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`name` | *string* \| *number* | - | The name of this field   |
`value` | *string* \| *number* | - | The value of this field   |
`inline` | *boolean* | false | If this field will be displayed inline   |

**Returns:** [*default*](discord_embed.default.md)

This?

Defined in: [src/discord/Embed.ts:199](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/discord/Embed.ts#L199)

___

### addFields

▸ **addFields**(...`fields`: FieldOptions[]): [*default*](discord_embed.default.md)

Adds fields to the embed (max 25).

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`...fields` | FieldOptions[] | The fields to add   |

**Returns:** [*default*](discord_embed.default.md)

This?

Defined in: [src/discord/Embed.ts:217](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/discord/Embed.ts#L217)

___

### attachFiles

▸ **attachFiles**(`file`: (*string* \| *MessageAttachment* \| FileOptions)[]): [*default*](discord_embed.default.md)

#### Parameters:

Name | Type |
:------ | :------ |
`file` | (*string* \| *MessageAttachment* \| FileOptions)[] |

**Returns:** [*default*](discord_embed.default.md)

Defined in: node_modules/discord.js/typings/index.d.ts:1103

___

### resolveImage

▸ **resolveImage**(`resolvable`: EmbedInput): *string*

Resolves an icon

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`resolvable` | EmbedInput | The resolvable to be resolved   |

**Returns:** *string*

The resolved image url

Defined in: [src/discord/Embed.ts:110](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/discord/Embed.ts#L110)

___

### setAuthor

▸ **setAuthor**(`name`: EmbedInput, `iconURL?`: *null* \| *string* \| *Guild* \| *GuildMember* \| *User*, `url?`: *null* \| *string* \| *Guild* \| *GuildMember* \| *User*): [*default*](discord_embed.default.md)

Sets the author of this embed.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`name` | EmbedInput | The name of the author   |
`iconURL?` | *null* \| *string* \| *Guild* \| *GuildMember* \| *User* | The icon URL of the author   |
`url?` | *null* \| *string* \| *Guild* \| *GuildMember* \| *User* | The URL of the author   |

**Returns:** [*default*](discord_embed.default.md)

This?

Defined in: [src/discord/Embed.ts:140](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/discord/Embed.ts#L140)

___

### setColor

▸ **setColor**(`color`: ColorResolvable): [*default*](discord_embed.default.md)

#### Parameters:

Name | Type |
:------ | :------ |
`color` | ColorResolvable |

**Returns:** [*default*](discord_embed.default.md)

Defined in: node_modules/discord.js/typings/index.d.ts:1105

___

### setDescription

▸ **setDescription**(`description`: *string*): [*default*](discord_embed.default.md)

Sets the description of this embed.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`description` | *string* | The description   |

**Returns:** [*default*](discord_embed.default.md)

This?

Defined in: [src/discord/Embed.ts:179](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/discord/Embed.ts#L179)

___

### setError

▸ **setError**(): [*default*](discord_embed.default.md)

Sets the color of this embed to red

**Returns:** [*default*](discord_embed.default.md)

This?

Defined in: [src/discord/Embed.ts:129](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/discord/Embed.ts#L129)

___

### setFooter

▸ **setFooter**(`text`: EmbedInput, `iconURL?`: *null* \| *string* \| *Guild* \| *GuildMember* \| *User*): [*default*](discord_embed.default.md)

Sets the footer of this embed.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`text` | EmbedInput | - | The text of the footer   |
`iconURL` | *null* \| *string* \| *Guild* \| *GuildMember* \| *User* | null | The icon URL of the footer   |

**Returns:** [*default*](discord_embed.default.md)

This?

Defined in: [src/discord/Embed.ts:162](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/discord/Embed.ts#L162)

___

### setImage

▸ **setImage**(`url`: EmbedInput): [*default*](discord_embed.default.md)

Sets the image of this embed.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`url` | EmbedInput | The URL of the image   |

**Returns:** [*default*](discord_embed.default.md)

This?

Defined in: [src/discord/Embed.ts:248](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/discord/Embed.ts#L248)

___

### setTemplate

▸ **setTemplate**(`user`: *User*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`user` | *User* |

**Returns:** *void*

Defined in: [src/discord/Embed.ts:74](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/discord/Embed.ts#L74)

___

### setThumbnail

▸ **setThumbnail**(`url`: EmbedInput): [*default*](discord_embed.default.md)

Sets the thumbnail of this embed.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`url` | EmbedInput | The URL of the thumbnail   |

**Returns:** [*default*](discord_embed.default.md)

This?

Defined in: [src/discord/Embed.ts:239](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/discord/Embed.ts#L239)

___

### setTimestamp

▸ **setTimestamp**(`timestamp?`: *number* \| Date): [*default*](discord_embed.default.md)

#### Parameters:

Name | Type |
:------ | :------ |
`timestamp?` | *number* \| Date |

**Returns:** [*default*](discord_embed.default.md)

Defined in: node_modules/discord.js/typings/index.d.ts:1110

___

### setTitle

▸ **setTitle**(`title`: *string*): [*default*](discord_embed.default.md)

Sets the title of this embed.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`title` | *string* | The title   |

**Returns:** [*default*](discord_embed.default.md)

This?

Defined in: [src/discord/Embed.ts:188](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/discord/Embed.ts#L188)

___

### setURL

▸ **setURL**(`url`: *string*): [*default*](discord_embed.default.md)

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |

**Returns:** [*default*](discord_embed.default.md)

Defined in: node_modules/discord.js/typings/index.d.ts:1112

___

### spliceFields

▸ **spliceFields**(`index`: *number*, `deleteCount`: *number*, ...`fields`: EmbedFieldData[] \| EmbedFieldData[][]): [*default*](discord_embed.default.md)

#### Parameters:

Name | Type |
:------ | :------ |
`index` | *number* |
`deleteCount` | *number* |
`...fields` | EmbedFieldData[] \| EmbedFieldData[][] |

**Returns:** [*default*](discord_embed.default.md)

Defined in: node_modules/discord.js/typings/index.d.ts:1113

___

### toJSON

▸ **toJSON**(): *object*

**Returns:** *object*

Defined in: node_modules/discord.js/typings/index.d.ts:1114

___

### hasSupport

▸ `Static`**hasSupport**(`resolvable`: *any*): *boolean*

No idea what this does probably shouldn't touch it.

**`static`** 

**`memberof`** Embed

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`resolvable` | *any* | The resolvable   |

**Returns:** *boolean*

A Boolean

Defined in: [src/discord/Embed.ts:99](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/discord/Embed.ts#L99)

___

### normalizeField

▸ `Static`**normalizeField**(`name`: *any*, `value`: *any*, `inline?`: *boolean*): *Required*<EmbedFieldData\>

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *any* |
`value` | *any* |
`inline?` | *boolean* |

**Returns:** *Required*<EmbedFieldData\>

Defined in: node_modules/discord.js/typings/index.d.ts:1116

___

### normalizeFields

▸ `Static`**normalizeFields**(...`fields`: EmbedFieldData[] \| EmbedFieldData[][]): *Required*<EmbedFieldData\>[]

#### Parameters:

Name | Type |
:------ | :------ |
`...fields` | EmbedFieldData[] \| EmbedFieldData[][] |

**Returns:** *Required*<EmbedFieldData\>[]

Defined in: node_modules/discord.js/typings/index.d.ts:1121

___

### resolveName

▸ `Static`**resolveName**(`resolvable`: EmbedInput): *string*

Resolves a name

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`resolvable` | EmbedInput | The resolvable to be resolved   |

**Returns:** *string*

The resolved name

Defined in: [src/discord/Embed.ts:85](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/discord/Embed.ts#L85)
