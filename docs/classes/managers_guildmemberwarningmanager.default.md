[yin-yang-ts](../README.md) / [Exports](../modules.md) / [managers/GuildMemberWarningManager](../modules/managers_guildmemberwarningmanager.md) / default

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

Defined in: [src/managers/GuildMemberWarningManager.ts:12](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/17c6b1a/src/managers/GuildMemberWarningManager.ts#L12)

## Properties

### cache

• **cache**: *Collection*<string, [*default*](structures_warning.default.md)\>

Defined in: [src/managers/GuildMemberWarningManager.ts:9](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/17c6b1a/src/managers/GuildMemberWarningManager.ts#L9)

___

### guild

• **guild**: *Guild*

Defined in: [src/managers/GuildMemberWarningManager.ts:8](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/17c6b1a/src/managers/GuildMemberWarningManager.ts#L8)

___

### member

• **member**: *GuildMember*

Defined in: [src/managers/GuildMemberWarningManager.ts:7](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/17c6b1a/src/managers/GuildMemberWarningManager.ts#L7)

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

Defined in: [src/managers/GuildMemberWarningManager.ts:43](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/17c6b1a/src/managers/GuildMemberWarningManager.ts#L43)

___

### init

▸ `Private`**init**(): *void*

**Returns:** *void*

Defined in: [src/managers/GuildMemberWarningManager.ts:24](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/17c6b1a/src/managers/GuildMemberWarningManager.ts#L24)

___

### remove

▸ **remove**(`id`: *string*): *string* \| *Collection*<string, [*default*](structures_warning.default.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |

**Returns:** *string* \| *Collection*<string, [*default*](structures_warning.default.md)\>

Defined in: [src/managers/GuildMemberWarningManager.ts:72](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/17c6b1a/src/managers/GuildMemberWarningManager.ts#L72)

___

### update

▸ `Private`**update**(`id`: *string*, `data?`: [*MemberWarning*](../interfaces/database_models_member.memberwarning.md)): *undefined* \| *string* \| [*default*](structures_warning.default.md)

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |
`data?` | [*MemberWarning*](../interfaces/database_models_member.memberwarning.md) |

**Returns:** *undefined* \| *string* \| [*default*](structures_warning.default.md)

Defined in: [src/managers/GuildMemberWarningManager.ts:96](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/17c6b1a/src/managers/GuildMemberWarningManager.ts#L96)
