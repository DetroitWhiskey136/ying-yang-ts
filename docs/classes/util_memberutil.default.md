[yin-yang-ts](../README.md) / [Exports](../modules.md) / [util/MemberUtil](../modules/util_memberutil.md) / default

# Class: default

[util/MemberUtil](../modules/util_memberutil.md).default

## Table of contents

### Constructors

- [constructor](util_memberutil.default.md#constructor)

### Methods

- [parseMember](util_memberutil.default.md#parsemember)
- [parseMemberFromID](util_memberutil.default.md#parsememberfromid)
- [parseMemberFromMention](util_memberutil.default.md#parsememberfrommention)

## Constructors

### constructor

\+ **new default**(): [*default*](util_memberutil.default.md)

**Returns:** [*default*](util_memberutil.default.md)

## Methods

### parseMember

▸ `Static`**parseMember**(`exp`: *string*, `guild`: *Guild*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`exp` | *string* |
`guild` | *Guild* |

**Returns:** *void*

Defined in: [src/util/MemberUtil.ts:12](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/112e06c/src/util/MemberUtil.ts#L12)

___

### parseMemberFromID

▸ `Static`**parseMemberFromID**(`id`: *string*, `guild`: *Guild*): *null* \| *GuildMember*

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |
`guild` | *Guild* |

**Returns:** *null* \| *GuildMember*

Defined in: [src/util/MemberUtil.ts:5](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/112e06c/src/util/MemberUtil.ts#L5)

___

### parseMemberFromMention

▸ `Static`**parseMemberFromMention**(`mention`: *MessageMentions*, `guild`: *Guild*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`mention` | *MessageMentions* |
`guild` | *Guild* |

**Returns:** *void*

Defined in: [src/util/MemberUtil.ts:9](https://github.com/DetroitWhiskey136/ying-yang-ts/blob/112e06c/src/util/MemberUtil.ts#L9)
