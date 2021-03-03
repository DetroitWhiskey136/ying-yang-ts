---
title: "Class: DiscordClient"
---

# Class: DiscordClient

[client/DiscordClient](../modules/client_discordclient.md).DiscordClient

## Hierarchy

* *Client*

  ↳ **DiscordClient**

## Table of contents

### Constructors

- [constructor](client_discordclient.discordclient.md#constructor)

### Properties

- [bot](client_discordclient.discordclient.md#bot)
- [channels](client_discordclient.discordclient.md#channels)
- [emojis](client_discordclient.discordclient.md#emojis)
- [guilds](client_discordclient.discordclient.md#guilds)
- [options](client_discordclient.discordclient.md#options)
- [readyAt](client_discordclient.discordclient.md#readyat)
- [readyTimestamp](client_discordclient.discordclient.md#readytimestamp)
- [shard](client_discordclient.discordclient.md#shard)
- [token](client_discordclient.discordclient.md#token)
- [uptime](client_discordclient.discordclient.md#uptime)
- [user](client_discordclient.discordclient.md#user)
- [users](client_discordclient.discordclient.md#users)
- [voice](client_discordclient.discordclient.md#voice)
- [ws](client_discordclient.discordclient.md#ws)
- [defaultMaxListeners](client_discordclient.discordclient.md#defaultmaxlisteners)
- [errorMonitor](client_discordclient.discordclient.md#errormonitor)

### Methods

- [addListener](client_discordclient.discordclient.md#addlistener)
- [clearImmediate](client_discordclient.discordclient.md#clearimmediate)
- [clearInterval](client_discordclient.discordclient.md#clearinterval)
- [clearTimeout](client_discordclient.discordclient.md#cleartimeout)
- [destroy](client_discordclient.discordclient.md#destroy)
- [emit](client_discordclient.discordclient.md#emit)
- [eventNames](client_discordclient.discordclient.md#eventnames)
- [fetchApplication](client_discordclient.discordclient.md#fetchapplication)
- [fetchGuildPreview](client_discordclient.discordclient.md#fetchguildpreview)
- [fetchInvite](client_discordclient.discordclient.md#fetchinvite)
- [fetchVoiceRegions](client_discordclient.discordclient.md#fetchvoiceregions)
- [fetchWebhook](client_discordclient.discordclient.md#fetchwebhook)
- [generateInvite](client_discordclient.discordclient.md#generateinvite)
- [getGuild](client_discordclient.discordclient.md#getguild)
- [getMaxListeners](client_discordclient.discordclient.md#getmaxlisteners)
- [listenerCount](client_discordclient.discordclient.md#listenercount)
- [listeners](client_discordclient.discordclient.md#listeners)
- [login](client_discordclient.discordclient.md#login)
- [off](client_discordclient.discordclient.md#off)
- [on](client_discordclient.discordclient.md#on)
- [once](client_discordclient.discordclient.md#once)
- [prependListener](client_discordclient.discordclient.md#prependlistener)
- [prependOnceListener](client_discordclient.discordclient.md#prependoncelistener)
- [rawListeners](client_discordclient.discordclient.md#rawlisteners)
- [removeAllListeners](client_discordclient.discordclient.md#removealllisteners)
- [removeListener](client_discordclient.discordclient.md#removelistener)
- [setImmediate](client_discordclient.discordclient.md#setimmediate)
- [setInterval](client_discordclient.discordclient.md#setinterval)
- [setMaxListeners](client_discordclient.discordclient.md#setmaxlisteners)
- [setTimeout](client_discordclient.discordclient.md#settimeout)
- [sweepMessages](client_discordclient.discordclient.md#sweepmessages)
- [toJSON](client_discordclient.discordclient.md#tojson)
- [listenerCount](client_discordclient.discordclient.md#listenercount)

## Constructors

### constructor

\+ **new DiscordClient**(`options`: ClientOptions, `bot`: [*BotClient*](client_botclient.botclient.md)): [*DiscordClient*](client_discordclient.discordclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`options` | ClientOptions |
`bot` | [*BotClient*](client_botclient.botclient.md) |

**Returns:** [*DiscordClient*](client_discordclient.discordclient.md)

## Properties

### bot

• **bot**: [*BotClient*](client_botclient.botclient.md)

___

### channels

• **channels**: *ChannelManager*

___

### emojis

• `Readonly` **emojis**: *GuildEmojiManager*

___

### guilds

• **guilds**: *GuildManager*

___

### options

• **options**: ClientOptions

___

### readyAt

• **readyAt**: *null* \| Date

___

### readyTimestamp

• `Readonly` **readyTimestamp**: *null* \| *number*

___

### shard

• **shard**: *null* \| *ShardClientUtil*

___

### token

• **token**: *null* \| *string*

___

### uptime

• `Readonly` **uptime**: *null* \| *number*

___

### user

• **user**: *null* \| *ClientUser*

___

### users

• **users**: *UserManager*

___

### voice

• **voice**: *null* \| *ClientVoiceManager*

___

### ws

• **ws**: *WebSocketManager*

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: *number*

___

### errorMonitor

▪ `Readonly` `Static` **errorMonitor**: *typeof* [*errorMonitor*](client_discordclient.discordclient.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

## Methods

### addListener

▸ **addListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*DiscordClient*](client_discordclient.discordclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*DiscordClient*](client_discordclient.discordclient.md)

___

### clearImmediate

▸ **clearImmediate**(`timeout`: *Immediate*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`timeout` | *Immediate* |

**Returns:** *void*

___

### clearInterval

▸ **clearInterval**(`interval`: *Timeout*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`interval` | *Timeout* |

**Returns:** *void*

___

### clearTimeout

▸ **clearTimeout**(`timeout`: *Timeout*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`timeout` | *Timeout* |

**Returns:** *void*

___

### destroy

▸ **destroy**(): *void*

**Returns:** *void*

___

### emit

▸ **emit**<K\>(`event`: K, ...`args`: ClientEvents[K]): *boolean*

#### Type parameters:

Name | Type |
:------ | :------ |
`K` | *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume* |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | K |
`...args` | ClientEvents[K] |

**Returns:** *boolean*

▸ **emit**<S\>(`event`: *Exclude*<S, *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume*\>, ...`args`: *any*[]): *boolean*

#### Type parameters:

Name | Type |
:------ | :------ |
`S` | *string* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *Exclude*<S, *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume*\> |
`...args` | *any*[] |

**Returns:** *boolean*

___

### eventNames

▸ **eventNames**(): (*string* \| *symbol*)[]

**Returns:** (*string* \| *symbol*)[]

___

### fetchApplication

▸ **fetchApplication**(): *Promise*<ClientApplication\>

**Returns:** *Promise*<ClientApplication\>

___

### fetchGuildPreview

▸ **fetchGuildPreview**(`guild`: GuildResolvable): *Promise*<GuildPreview\>

#### Parameters:

Name | Type |
:------ | :------ |
`guild` | GuildResolvable |

**Returns:** *Promise*<GuildPreview\>

___

### fetchInvite

▸ **fetchInvite**(`invite`: *string*): *Promise*<Invite\>

#### Parameters:

Name | Type |
:------ | :------ |
`invite` | *string* |

**Returns:** *Promise*<Invite\>

___

### fetchVoiceRegions

▸ **fetchVoiceRegions**(): *Promise*<Collection<string, VoiceRegion\>\>

**Returns:** *Promise*<Collection<string, VoiceRegion\>\>

___

### fetchWebhook

▸ **fetchWebhook**(`id`: *string*, `token?`: *string*): *Promise*<Webhook\>

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |
`token?` | *string* |

**Returns:** *Promise*<Webhook\>

___

### generateInvite

▸ **generateInvite**(`options?`: *number* \| InviteGenerationOptions \| *CREATE_INSTANT_INVITE* \| *KICK_MEMBERS* \| *BAN_MEMBERS* \| *ADMINISTRATOR* \| *MANAGE_CHANNELS* \| *MANAGE_GUILD* \| *ADD_REACTIONS* \| *VIEW_AUDIT_LOG* \| *PRIORITY_SPEAKER* \| *STREAM* \| *VIEW_CHANNEL* \| *SEND_MESSAGES* \| *SEND_TTS_MESSAGES* \| *MANAGE_MESSAGES* \| *EMBED_LINKS* \| *ATTACH_FILES* \| *READ_MESSAGE_HISTORY* \| *MENTION_EVERYONE* \| *USE_EXTERNAL_EMOJIS* \| *VIEW_GUILD_INSIGHTS* \| *CONNECT* \| *SPEAK* \| *MUTE_MEMBERS* \| *DEAFEN_MEMBERS* \| *MOVE_MEMBERS* \| *USE_VAD* \| *CHANGE_NICKNAME* \| *MANAGE_NICKNAMES* \| *MANAGE_ROLES* \| *MANAGE_WEBHOOKS* \| *MANAGE_EMOJIS* \| *Readonly*<BitField<PermissionString\>\> \| *RecursiveReadonlyArray*<number \| *CREATE_INSTANT_INVITE* \| *KICK_MEMBERS* \| *BAN_MEMBERS* \| *ADMINISTRATOR* \| *MANAGE_CHANNELS* \| *MANAGE_GUILD* \| *ADD_REACTIONS* \| *VIEW_AUDIT_LOG* \| *PRIORITY_SPEAKER* \| *STREAM* \| *VIEW_CHANNEL* \| *SEND_MESSAGES* \| *SEND_TTS_MESSAGES* \| *MANAGE_MESSAGES* \| *EMBED_LINKS* \| *ATTACH_FILES* \| *READ_MESSAGE_HISTORY* \| *MENTION_EVERYONE* \| *USE_EXTERNAL_EMOJIS* \| *VIEW_GUILD_INSIGHTS* \| *CONNECT* \| *SPEAK* \| *MUTE_MEMBERS* \| *DEAFEN_MEMBERS* \| *MOVE_MEMBERS* \| *USE_VAD* \| *CHANGE_NICKNAME* \| *MANAGE_NICKNAMES* \| *MANAGE_ROLES* \| *MANAGE_WEBHOOKS* \| *MANAGE_EMOJIS* \| Readonly<BitField<PermissionString\>\>\>): *Promise*<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`options?` | *number* \| InviteGenerationOptions \| *CREATE_INSTANT_INVITE* \| *KICK_MEMBERS* \| *BAN_MEMBERS* \| *ADMINISTRATOR* \| *MANAGE_CHANNELS* \| *MANAGE_GUILD* \| *ADD_REACTIONS* \| *VIEW_AUDIT_LOG* \| *PRIORITY_SPEAKER* \| *STREAM* \| *VIEW_CHANNEL* \| *SEND_MESSAGES* \| *SEND_TTS_MESSAGES* \| *MANAGE_MESSAGES* \| *EMBED_LINKS* \| *ATTACH_FILES* \| *READ_MESSAGE_HISTORY* \| *MENTION_EVERYONE* \| *USE_EXTERNAL_EMOJIS* \| *VIEW_GUILD_INSIGHTS* \| *CONNECT* \| *SPEAK* \| *MUTE_MEMBERS* \| *DEAFEN_MEMBERS* \| *MOVE_MEMBERS* \| *USE_VAD* \| *CHANGE_NICKNAME* \| *MANAGE_NICKNAMES* \| *MANAGE_ROLES* \| *MANAGE_WEBHOOKS* \| *MANAGE_EMOJIS* \| *Readonly*<BitField<PermissionString\>\> \| *RecursiveReadonlyArray*<number \| *CREATE_INSTANT_INVITE* \| *KICK_MEMBERS* \| *BAN_MEMBERS* \| *ADMINISTRATOR* \| *MANAGE_CHANNELS* \| *MANAGE_GUILD* \| *ADD_REACTIONS* \| *VIEW_AUDIT_LOG* \| *PRIORITY_SPEAKER* \| *STREAM* \| *VIEW_CHANNEL* \| *SEND_MESSAGES* \| *SEND_TTS_MESSAGES* \| *MANAGE_MESSAGES* \| *EMBED_LINKS* \| *ATTACH_FILES* \| *READ_MESSAGE_HISTORY* \| *MENTION_EVERYONE* \| *USE_EXTERNAL_EMOJIS* \| *VIEW_GUILD_INSIGHTS* \| *CONNECT* \| *SPEAK* \| *MUTE_MEMBERS* \| *DEAFEN_MEMBERS* \| *MOVE_MEMBERS* \| *USE_VAD* \| *CHANGE_NICKNAME* \| *MANAGE_NICKNAMES* \| *MANAGE_ROLES* \| *MANAGE_WEBHOOKS* \| *MANAGE_EMOJIS* \| Readonly<BitField<PermissionString\>\>\> |

**Returns:** *Promise*<string\>

___

### getGuild

▸ **getGuild**(`arg0`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`arg0` | *string* |

**Returns:** *void*

___

### getMaxListeners

▸ **getMaxListeners**(): *number*

**Returns:** *number*

___

### listenerCount

▸ **listenerCount**(`event`: *string* \| *symbol*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |

**Returns:** *number*

___

### listeners

▸ **listeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

___

### login

▸ **login**(`token?`: *string*): *Promise*<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`token?` | *string* |

**Returns:** *Promise*<string\>

___

### off

▸ **off**<K\>(`event`: K, `listener`: (...`args`: ClientEvents[K]) => *void*): [*DiscordClient*](client_discordclient.discordclient.md)

#### Type parameters:

Name | Type |
:------ | :------ |
`K` | *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume* |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | K |
`listener` | (...`args`: ClientEvents[K]) => *void* |

**Returns:** [*DiscordClient*](client_discordclient.discordclient.md)

▸ **off**<S\>(`event`: *Exclude*<S, *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume*\>, `listener`: (...`args`: *any*[]) => *void*): [*DiscordClient*](client_discordclient.discordclient.md)

#### Type parameters:

Name | Type |
:------ | :------ |
`S` | *string* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *Exclude*<S, *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume*\> |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*DiscordClient*](client_discordclient.discordclient.md)

___

### on

▸ **on**<K\>(`event`: K, `listener`: (...`args`: ClientEvents[K]) => *void*): [*DiscordClient*](client_discordclient.discordclient.md)

#### Type parameters:

Name | Type |
:------ | :------ |
`K` | *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume* |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | K |
`listener` | (...`args`: ClientEvents[K]) => *void* |

**Returns:** [*DiscordClient*](client_discordclient.discordclient.md)

▸ **on**<S\>(`event`: *Exclude*<S, *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume*\>, `listener`: (...`args`: *any*[]) => *void*): [*DiscordClient*](client_discordclient.discordclient.md)

#### Type parameters:

Name | Type |
:------ | :------ |
`S` | *string* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *Exclude*<S, *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume*\> |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*DiscordClient*](client_discordclient.discordclient.md)

___

### once

▸ **once**<K\>(`event`: K, `listener`: (...`args`: ClientEvents[K]) => *void*): [*DiscordClient*](client_discordclient.discordclient.md)

#### Type parameters:

Name | Type |
:------ | :------ |
`K` | *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume* |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | K |
`listener` | (...`args`: ClientEvents[K]) => *void* |

**Returns:** [*DiscordClient*](client_discordclient.discordclient.md)

▸ **once**<S\>(`event`: *Exclude*<S, *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume*\>, `listener`: (...`args`: *any*[]) => *void*): [*DiscordClient*](client_discordclient.discordclient.md)

#### Type parameters:

Name | Type |
:------ | :------ |
`S` | *string* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *Exclude*<S, *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume*\> |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*DiscordClient*](client_discordclient.discordclient.md)

___

### prependListener

▸ **prependListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*DiscordClient*](client_discordclient.discordclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*DiscordClient*](client_discordclient.discordclient.md)

___

### prependOnceListener

▸ **prependOnceListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*DiscordClient*](client_discordclient.discordclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*DiscordClient*](client_discordclient.discordclient.md)

___

### rawListeners

▸ **rawListeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

___

### removeAllListeners

▸ **removeAllListeners**<K\>(`event?`: K): [*DiscordClient*](client_discordclient.discordclient.md)

#### Type parameters:

Name | Type |
:------ | :------ |
`K` | *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume* |

#### Parameters:

Name | Type |
:------ | :------ |
`event?` | K |

**Returns:** [*DiscordClient*](client_discordclient.discordclient.md)

▸ **removeAllListeners**<S\>(`event?`: *Exclude*<S, *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume*\>): [*DiscordClient*](client_discordclient.discordclient.md)

#### Type parameters:

Name | Type |
:------ | :------ |
`S` | *string* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`event?` | *Exclude*<S, *channelCreate* \| *channelDelete* \| *channelPinsUpdate* \| *channelUpdate* \| *debug* \| *warn* \| *disconnect* \| *emojiCreate* \| *emojiDelete* \| *emojiUpdate* \| *error* \| *guildBanAdd* \| *guildBanRemove* \| *guildCreate* \| *guildDelete* \| *guildUnavailable* \| *guildIntegrationsUpdate* \| *guildMemberAdd* \| *guildMemberAvailable* \| *guildMemberRemove* \| *guildMembersChunk* \| *guildMemberSpeaking* \| *guildMemberUpdate* \| *guildUpdate* \| *inviteCreate* \| *inviteDelete* \| *message* \| *messageDelete* \| *messageReactionRemoveAll* \| *messageReactionRemoveEmoji* \| *messageDeleteBulk* \| *messageReactionAdd* \| *messageReactionRemove* \| *messageUpdate* \| *presenceUpdate* \| *rateLimit* \| *ready* \| *invalidated* \| *roleCreate* \| *roleDelete* \| *roleUpdate* \| *typingStart* \| *userUpdate* \| *voiceStateUpdate* \| *webhookUpdate* \| *shardDisconnect* \| *shardError* \| *shardReady* \| *shardReconnecting* \| *shardResume*\> |

**Returns:** [*DiscordClient*](client_discordclient.discordclient.md)

___

### removeListener

▸ **removeListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*DiscordClient*](client_discordclient.discordclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*DiscordClient*](client_discordclient.discordclient.md)

___

### setImmediate

▸ **setImmediate**(`fn`: (...`args`: *any*[]) => *void*, ...`args`: *any*[]): *Immediate*

#### Parameters:

Name | Type |
:------ | :------ |
`fn` | (...`args`: *any*[]) => *void* |
`...args` | *any*[] |

**Returns:** *Immediate*

___

### setInterval

▸ **setInterval**(`fn`: (...`args`: *any*[]) => *void*, `delay`: *number*, ...`args`: *any*[]): *Timeout*

#### Parameters:

Name | Type |
:------ | :------ |
`fn` | (...`args`: *any*[]) => *void* |
`delay` | *number* |
`...args` | *any*[] |

**Returns:** *Timeout*

___

### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*DiscordClient*](client_discordclient.discordclient.md)

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |

**Returns:** [*DiscordClient*](client_discordclient.discordclient.md)

___

### setTimeout

▸ **setTimeout**(`fn`: (...`args`: *any*[]) => *void*, `delay`: *number*, ...`args`: *any*[]): *Timeout*

#### Parameters:

Name | Type |
:------ | :------ |
`fn` | (...`args`: *any*[]) => *void* |
`delay` | *number* |
`...args` | *any*[] |

**Returns:** *Timeout*

___

### sweepMessages

▸ **sweepMessages**(`lifetime?`: *number*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`lifetime?` | *number* |

**Returns:** *number*

___

### toJSON

▸ **toJSON**(): *object*

**Returns:** *object*

___

### listenerCount

▸ `Static`**listenerCount**(`emitter`: *EventEmitter*, `event`: *string* \| *symbol*): *number*

**`deprecated`** since v4.0.0

#### Parameters:

Name | Type |
:------ | :------ |
`emitter` | *EventEmitter* |
`event` | *string* \| *symbol* |

**Returns:** *number*
