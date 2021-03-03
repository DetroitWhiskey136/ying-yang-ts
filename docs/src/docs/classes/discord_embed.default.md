---
title: "Class: default"
---

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

- [options](discord_embed.default.md#options)

### Methods

- [addField](discord_embed.default.md#addfield)
- [addFields](discord_embed.default.md#addfields)
- [resolveImage](discord_embed.default.md#resolveimage)
- [setAuthor](discord_embed.default.md#setauthor)
- [setDescription](discord_embed.default.md#setdescription)
- [setError](discord_embed.default.md#seterror)
- [setFooter](discord_embed.default.md#setfooter)
- [setImage](discord_embed.default.md#setimage)
- [setTemplate](discord_embed.default.md#settemplate)
- [setThumbnail](discord_embed.default.md#setthumbnail)
- [setTitle](discord_embed.default.md#settitle)
- [hasSupport](discord_embed.default.md#hassupport)
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

## Properties

### options

• **options**: EmbedOptions

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

___

### setAuthor

▸ **setAuthor**(`name`: EmbedInput, `iconURL?`: *null* \| *string* \| *GuildMember* \| *Guild* \| *User*, `url?`: *null* \| *string* \| *GuildMember* \| *Guild* \| *User*): [*default*](discord_embed.default.md)

Sets the author of this embed.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`name` | EmbedInput | The name of the author   |
`iconURL?` | *null* \| *string* \| *GuildMember* \| *Guild* \| *User* | The icon URL of the author   |
`url?` | *null* \| *string* \| *GuildMember* \| *Guild* \| *User* | The URL of the author   |

**Returns:** [*default*](discord_embed.default.md)

This?

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

___

### setError

▸ **setError**(): [*default*](discord_embed.default.md)

Sets the color of this embed to red

**Returns:** [*default*](discord_embed.default.md)

This?

___

### setFooter

▸ **setFooter**(`text`: EmbedInput, `iconURL?`: *null* \| *string* \| *GuildMember* \| *Guild* \| *User*): [*default*](discord_embed.default.md)

Sets the footer of this embed.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`text` | EmbedInput | - | The text of the footer   |
`iconURL` | *null* \| *string* \| *GuildMember* \| *Guild* \| *User* | null | The icon URL of the footer   |

**Returns:** [*default*](discord_embed.default.md)

This?

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

___

### setTemplate

▸ **setTemplate**(`user`: *User*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`user` | *User* |

**Returns:** *void*

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
