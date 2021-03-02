[yin-yang-ts](../README.md) / [Exports](../modules.md) / [structures/Warning](../modules/structures_warning.md) / default

# Class: default

[structures/Warning](../modules/structures_warning.md).default

## Table of contents

### Constructors

- [constructor](structures_warning.default.md#constructor)

### Properties

- [client](structures_warning.default.md#client)
- [guild](structures_warning.default.md#guild)
- [id](structures_warning.default.md#id)
- [member](structures_warning.default.md#member)
- [moderator](structures_warning.default.md#moderator)
- [points](structures_warning.default.md#points)
- [reason](structures_warning.default.md#reason)

### Methods

- [getMod](structures_warning.default.md#getmod)

## Constructors

### constructor

\+ **new default**(`client`: [*DiscordClient*](client_discordclient.discordclient.md) \| *Client*, `data`: [*MemberWarning*](../interfaces/database_models_member.memberwarning.md), `member`: *GuildMember*): [*default*](structures_warning.default.md)

#### Parameters:

Name | Type |
:------ | :------ |
`client` | [*DiscordClient*](client_discordclient.discordclient.md) \| *Client* |
`data` | [*MemberWarning*](../interfaces/database_models_member.memberwarning.md) |
`member` | *GuildMember* |

**Returns:** [*default*](structures_warning.default.md)

Defined in: [src/structures/Warning.ts:15](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/structures/Warning.ts#L15)

## Properties

### client

• **client**: [*DiscordClient*](client_discordclient.discordclient.md) \| *Client*

Defined in: [src/structures/Warning.ts:6](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/structures/Warning.ts#L6)

___

### guild

• **guild**: *Guild*

Defined in: [src/structures/Warning.ts:7](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/structures/Warning.ts#L7)

___

### id

• **id**: *string*

Defined in: [src/structures/Warning.ts:9](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/structures/Warning.ts#L9)

___

### member

• **member**: *GuildMember*

Defined in: [src/structures/Warning.ts:8](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/structures/Warning.ts#L8)

___

### moderator

• **moderator**: *string* \| *GuildMember*

Defined in: [src/structures/Warning.ts:12](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/structures/Warning.ts#L12)

___

### points

• **points**: *number*

Defined in: [src/structures/Warning.ts:11](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/structures/Warning.ts#L11)

___

### reason

• **reason**: *string*

Defined in: [src/structures/Warning.ts:10](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/structures/Warning.ts#L10)

## Methods

### getMod

▸ `Private`**getMod**(`moderator`: *string*): *string* \| *GuildMember*

#### Parameters:

Name | Type |
:------ | :------ |
`moderator` | *string* |

**Returns:** *string* \| *GuildMember*

Defined in: [src/structures/Warning.ts:29](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/9e5d8a8/src/structures/Warning.ts#L29)
