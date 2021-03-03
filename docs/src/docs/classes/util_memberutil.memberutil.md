---
title: "Class: MemberUtil"
---

# Class: MemberUtil

[util/MemberUtil](../modules/util_memberutil.md).MemberUtil

## Table of contents

### Constructors

- [constructor](util_memberutil.memberutil.md#constructor)

### Methods

- [parseMember](util_memberutil.memberutil.md#parsemember)
- [parseMemberFromID](util_memberutil.memberutil.md#parsememberfromid)
- [parseMemberFromMention](util_memberutil.memberutil.md#parsememberfrommention)

## Constructors

### constructor

\+ **new MemberUtil**(): [*MemberUtil*](util_memberutil.memberutil.md)

**Returns:** [*MemberUtil*](util_memberutil.memberutil.md)

## Methods

### parseMember

▸ `Static`**parseMember**(`exp`: *string*, `guild`: *Guild*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`exp` | *string* |
`guild` | *Guild* |

**Returns:** *void*

___

### parseMemberFromID

▸ `Static`**parseMemberFromID**(`id`: *string*, `guild`: *Guild*): *null* \| *GuildMember*

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |
`guild` | *Guild* |

**Returns:** *null* \| *GuildMember*

___

### parseMemberFromMention

▸ `Static`**parseMemberFromMention**(`mention`: *MessageMentions*, `guild`: *Guild*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`mention` | *MessageMentions* |
`guild` | *Guild* |

**Returns:** *void*
