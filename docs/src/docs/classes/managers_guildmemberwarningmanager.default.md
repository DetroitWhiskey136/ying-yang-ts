---
title: "Class: default"
---

# Class: default

[managers/GuildMemberWarningManager](../modules/managers_guildmemberwarningmanager.md).default

## Table of contents

### Constructors

- [constructor](managers_guildmemberwarningmanager.default.md#constructor)

### Properties

- [cache](managers_guildmemberwarningmanager.default.md#cache)
- [guild](managers_guildmemberwarningmanager.default.md#guild)
- [member](managers_guildmemberwarningmanager.default.md#member)

### Methods

- [add](managers_guildmemberwarningmanager.default.md#add)
- [init](managers_guildmemberwarningmanager.default.md#init)
- [remove](managers_guildmemberwarningmanager.default.md#remove)
- [update](managers_guildmemberwarningmanager.default.md#update)

## Constructors

### constructor

\+ **new default**(`member`: *GuildMember*): [*default*](managers_guildmemberwarningmanager.default.md)

#### Parameters:

Name | Type |
:------ | :------ |
`member` | *GuildMember* |

**Returns:** [*default*](managers_guildmemberwarningmanager.default.md)

## Properties

### cache

• **cache**: *Collection*<string, [*default*](structures_warning.default.md)\>

___

### guild

• **guild**: *Guild*

___

### member

• **member**: *GuildMember*

## Methods

### add

▸ **add**(`reason`: *string*, `points`: *number*, `moderator`: *null* \| *GuildMember*): *undefined* \| [*default*](structures_warning.default.md)

#### Parameters:

Name | Type |
:------ | :------ |
`reason` | *string* |
`points` | *number* |
`moderator` | *null* \| *GuildMember* |

**Returns:** *undefined* \| [*default*](structures_warning.default.md)

___

### init

▸ `Private`**init**(): *void*

**Returns:** *void*

___

### remove

▸ **remove**(`id`: *string*): *string* \| *Collection*<string, [*default*](structures_warning.default.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |

**Returns:** *string* \| *Collection*<string, [*default*](structures_warning.default.md)\>

___

### update

▸ `Private`**update**(`id`: *string*, `data?`: [*MemberWarning*](../interfaces/database_models_member.memberwarning.md)): *undefined* \| *string* \| [*default*](structures_warning.default.md)

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |
`data?` | [*MemberWarning*](../interfaces/database_models_member.memberwarning.md) |

**Returns:** *undefined* \| *string* \| [*default*](structures_warning.default.md)
