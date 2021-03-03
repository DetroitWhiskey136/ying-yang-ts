---
title: "Class: default"
---

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

## Properties

### client

• **client**: [*DiscordClient*](client_discordclient.discordclient.md) \| *Client*

___

### guild

• **guild**: *Guild*

___

### id

• **id**: *string*

___

### member

• **member**: *GuildMember*

___

### moderator

• **moderator**: *string* \| *GuildMember*

___

### points

• **points**: *number*

___

### reason

• **reason**: *string*

## Methods

### getMod

▸ `Private`**getMod**(`moderator`: *string*): *string* \| *GuildMember*

#### Parameters:

Name | Type |
:------ | :------ |
`moderator` | *string* |

**Returns:** *string* \| *GuildMember*
