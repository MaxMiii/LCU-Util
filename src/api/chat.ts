/**
 * Chat API 模块 (自动生成)
 * 53 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolChatV1BlockedPlayers
 * @url GET /lol-chat/v1/blocked-players
 */
export function getLolChatV1BlockedPlayers(): Promise<unknown> {
  return get('/lol-chat/v1/blocked-players')
}

/**
 * PostLolChatV1BlockedPlayers
 * @url POST /lol-chat/v1/blocked-players
 */
export function postLolChatV1BlockedPlayers(): Promise<unknown> {
  return post('/lol-chat/v1/blocked-players')
}

/**
 * DeleteLolChatV1BlockedPlayersById
 * @url DELETE /lol-chat/v1/blocked-players/{id}
 * @param params - 路径参数: { id }
 */
export function deleteLolChatV1BlockedPlayersById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/lol-chat/v1/blocked-players/${id}`)
}

/**
 * GetLolChatV1BlockedPlayersById
 * @url GET /lol-chat/v1/blocked-players/{id}
 * @param params - 路径参数: { id }
 */
export function getLolChatV1BlockedPlayersById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/lol-chat/v1/blocked-players/${id}`)
}

/**
 * GetLolChatV1Config
 * @url GET /lol-chat/v1/config
 */
export function getLolChatV1Config(): Promise<unknown> {
  return get('/lol-chat/v1/config')
}

/**
 * GetLolChatV1Conversations
 * @url GET /lol-chat/v1/conversations
 */
export function getLolChatV1Conversations(): Promise<unknown> {
  return get('/lol-chat/v1/conversations')
}

/**
 * PostLolChatV1Conversations
 * @url POST /lol-chat/v1/conversations
 */
export function postLolChatV1Conversations(): Promise<unknown> {
  return post('/lol-chat/v1/conversations')
}

/**
 * DeleteLolChatV1ConversationsActive
 * @url DELETE /lol-chat/v1/conversations/active
 */
export function deleteLolChatV1ConversationsActive(): Promise<unknown> {
  return del('/lol-chat/v1/conversations/active')
}

/**
 * GetLolChatV1ConversationsActive
 * @url GET /lol-chat/v1/conversations/active
 */
export function getLolChatV1ConversationsActive(): Promise<unknown> {
  return get('/lol-chat/v1/conversations/active')
}

/**
 * PutLolChatV1ConversationsActive
 * @url PUT /lol-chat/v1/conversations/active
 */
export function putLolChatV1ConversationsActive(): Promise<unknown> {
  return put('/lol-chat/v1/conversations/active')
}

/**
 * GetLolChatV1ConversationsNotify
 * @url GET /lol-chat/v1/conversations/notify
 */
export function getLolChatV1ConversationsNotify(): Promise<unknown> {
  return get('/lol-chat/v1/conversations/notify')
}

/**
 * DeleteLolChatV1ConversationsById
 * @url DELETE /lol-chat/v1/conversations/{id}
 * @param params - 路径参数: { id }
 */
export function deleteLolChatV1ConversationsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/lol-chat/v1/conversations/${id}`)
}

/**
 * GetLolChatV1ConversationsById
 * @url GET /lol-chat/v1/conversations/{id}
 * @param params - 路径参数: { id }
 */
export function getLolChatV1ConversationsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/lol-chat/v1/conversations/${id}`)
}

/**
 * PutLolChatV1ConversationsById
 * @url PUT /lol-chat/v1/conversations/{id}
 * @param params - 路径参数: { id }
 */
export function putLolChatV1ConversationsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return put(`/lol-chat/v1/conversations/${id}`)
}

/**
 * PostLolChatV1ConversationsByIdClosed
 * @url POST /lol-chat/v1/conversations/{id}/closed
 * @param params - 路径参数: { id }
 */
export function postLolChatV1ConversationsByIdClosed(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-chat/v1/conversations/${id}/closed`)
}

/**
 * PutLolChatV1ConversationsByIdClosed
 * @url PUT /lol-chat/v1/conversations/{id}/closed
 * @param params - 路径参数: { id }
 */
export function putLolChatV1ConversationsByIdClosed(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return put(`/lol-chat/v1/conversations/${id}/closed`)
}

/**
 * DeleteLolChatV1ConversationsByIdMessages
 * @url DELETE /lol-chat/v1/conversations/{id}/messages
 * @param params - 路径参数: { id }
 */
export function deleteLolChatV1ConversationsByIdMessages(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/lol-chat/v1/conversations/${id}/messages`)
}

/**
 * GetLolChatV1ConversationsByIdMessages
 * @url GET /lol-chat/v1/conversations/{id}/messages
 * @param params - 路径参数: { id }
 */
export function getLolChatV1ConversationsByIdMessages(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/lol-chat/v1/conversations/${id}/messages`)
}

/**
 * PostLolChatV1ConversationsByIdMessages
 * @url POST /lol-chat/v1/conversations/{id}/messages
 * @param params - 路径参数: { id }
 */
export function postLolChatV1ConversationsByIdMessages(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-chat/v1/conversations/${id}/messages`)
}

/**
 * GetLolChatV1ConversationsByIdParticipants
 * @url GET /lol-chat/v1/conversations/{id}/participants
 * @param params - 路径参数: { id }
 */
export function getLolChatV1ConversationsByIdParticipants(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/lol-chat/v1/conversations/${id}/participants`)
}

/**
 * PostLolChatV1ConversationsByIdParticipants
 * @url POST /lol-chat/v1/conversations/{id}/participants
 * @param params - 路径参数: { id }
 */
export function postLolChatV1ConversationsByIdParticipants(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-chat/v1/conversations/${id}/participants`)
}

/**
 * GetLolChatV1ConversationsByIdParticipantsByPid
 * @url GET /lol-chat/v1/conversations/{id}/participants/{pid}
 * @param params - 路径参数: { id, pid }
 */
export function getLolChatV1ConversationsByIdParticipantsByPid(params: { id: string | number, pid: string | number }): Promise<unknown> {
  const { id, pid } = params

  return get(`/lol-chat/v1/conversations/${id}/participants/${pid}`)
}

/**
 * GetLolChatV1Errors
 * @url GET /lol-chat/v1/errors
 */
export function getLolChatV1Errors(): Promise<unknown> {
  return get('/lol-chat/v1/errors')
}

/**
 * DeleteLolChatV1ErrorsById
 * @url DELETE /lol-chat/v1/errors/{id}
 * @param params - 路径参数: { id }
 */
export function deleteLolChatV1ErrorsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/lol-chat/v1/errors/${id}`)
}

/**
 * GetLolChatV1FriendCounts
 * @url GET /lol-chat/v1/friend-counts
 */
export function getLolChatV1FriendCounts(): Promise<unknown> {
  return get('/lol-chat/v1/friend-counts')
}

/**
 * GetLolChatV1FriendExistsBySummonerId
 * @url GET /lol-chat/v1/friend-exists/{summonerId}
 * @param params - 路径参数: { summonerId }
 */
export function getLolChatV1FriendExistsBySummonerId(params: { summonerId: string | number }): Promise<unknown> {
  const { summonerId } = params

  return get(`/lol-chat/v1/friend-exists/${summonerId}`)
}

/**
 * GetLolChatV1FriendGroups
 * @url GET /lol-chat/v1/friend-groups
 */
export function getLolChatV1FriendGroups(): Promise<unknown> {
  return get('/lol-chat/v1/friend-groups')
}

/**
 * PostLolChatV1FriendGroups
 * @url POST /lol-chat/v1/friend-groups
 */
export function postLolChatV1FriendGroups(): Promise<unknown> {
  return post('/lol-chat/v1/friend-groups')
}

/**
 * PutLolChatV1FriendGroupsOrder
 * @url PUT /lol-chat/v1/friend-groups/order
 */
export function putLolChatV1FriendGroupsOrder(): Promise<unknown> {
  return put('/lol-chat/v1/friend-groups/order')
}

/**
 * DeleteLolChatV1FriendGroupsById
 * @url DELETE /lol-chat/v1/friend-groups/{id}
 * @param params - 路径参数: { id }
 */
export function deleteLolChatV1FriendGroupsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/lol-chat/v1/friend-groups/${id}`)
}

/**
 * GetLolChatV1FriendGroupsById
 * @url GET /lol-chat/v1/friend-groups/{id}
 * @param params - 路径参数: { id }
 */
export function getLolChatV1FriendGroupsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/lol-chat/v1/friend-groups/${id}`)
}

/**
 * PutLolChatV1FriendGroupsById
 * @url PUT /lol-chat/v1/friend-groups/{id}
 * @param params - 路径参数: { id }
 */
export function putLolChatV1FriendGroupsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return put(`/lol-chat/v1/friend-groups/${id}`)
}

/**
 * GetLolChatV1FriendGroupsByIdFriends
 * @url GET /lol-chat/v1/friend-groups/{id}/friends
 * @param params - 路径参数: { id }
 */
export function getLolChatV1FriendGroupsByIdFriends(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/lol-chat/v1/friend-groups/${id}/friends`)
}

/**
 * GetLolChatV1FriendRequests
 * @url GET /lol-chat/v1/friend-requests
 */
export function getLolChatV1FriendRequests(): Promise<unknown> {
  return get('/lol-chat/v1/friend-requests')
}

/**
 * PostLolChatV1FriendRequests
 * @url POST /lol-chat/v1/friend-requests
 */
export function postLolChatV1FriendRequests(): Promise<unknown> {
  return post('/lol-chat/v1/friend-requests')
}

/**
 * DeleteLolChatV1FriendRequestsById
 * @url DELETE /lol-chat/v1/friend-requests/{id}
 * @param params - 路径参数: { id }
 */
export function deleteLolChatV1FriendRequestsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/lol-chat/v1/friend-requests/${id}`)
}

/**
 * PutLolChatV1FriendRequestsById
 * @url PUT /lol-chat/v1/friend-requests/{id}
 * @param params - 路径参数: { id }
 */
export function putLolChatV1FriendRequestsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return put(`/lol-chat/v1/friend-requests/${id}`)
}

/**
 * GetLolChatV1Friends
 * @url GET /lol-chat/v1/friends
 */
export function getLolChatV1Friends(): Promise<unknown> {
  return get('/lol-chat/v1/friends')
}

/**
 * DeleteLolChatV1FriendsById
 * @url DELETE /lol-chat/v1/friends/{id}
 * @param params - 路径参数: { id }
 */
export function deleteLolChatV1FriendsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/lol-chat/v1/friends/${id}`)
}

/**
 * GetLolChatV1FriendsById
 * @url GET /lol-chat/v1/friends/{id}
 * @param params - 路径参数: { id }
 */
export function getLolChatV1FriendsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/lol-chat/v1/friends/${id}`)
}

/**
 * PutLolChatV1FriendsById
 * @url PUT /lol-chat/v1/friends/{id}
 * @param params - 路径参数: { id }
 */
export function putLolChatV1FriendsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return put(`/lol-chat/v1/friends/${id}`)
}

/**
 * GetLolChatV1Me
 * @url GET /lol-chat/v1/me
 */
export function getLolChatV1Me(): Promise<unknown> {
  return get('/lol-chat/v1/me')
}

/**
 * PutLolChatV1Me
 * @url PUT /lol-chat/v1/me
 */
export function putLolChatV1Me(): Promise<unknown> {
  return put('/lol-chat/v1/me')
}

/**
 * GetLolChatV1Resources
 * @url GET /lol-chat/v1/resources
 */
export function getLolChatV1Resources(): Promise<unknown> {
  return get('/lol-chat/v1/resources')
}

/**
 * DeleteLolChatV1Session
 * @url DELETE /lol-chat/v1/session
 */
export function deleteLolChatV1Session(): Promise<unknown> {
  return del('/lol-chat/v1/session')
}

/**
 * GetLolChatV1Session
 * @url GET /lol-chat/v1/session
 */
export function getLolChatV1Session(): Promise<unknown> {
  return get('/lol-chat/v1/session')
}

/**
 * PostLolChatV1SessionPlain
 * @url POST /lol-chat/v1/session/plain
 */
export function postLolChatV1SessionPlain(): Promise<unknown> {
  return post('/lol-chat/v1/session/plain')
}

/**
 * PostLolChatV1SessionRso
 * @url POST /lol-chat/v1/session/rso
 */
export function postLolChatV1SessionRso(): Promise<unknown> {
  return post('/lol-chat/v1/session/rso')
}

/**
 * GetLolChatV1Settings
 * @url GET /lol-chat/v1/settings
 */
export function getLolChatV1Settings(): Promise<unknown> {
  return get('/lol-chat/v1/settings')
}

/**
 * PutLolChatV1Settings
 * @url PUT /lol-chat/v1/settings
 * @param query - 查询参数: { doAsync }
 */
export function putLolChatV1Settings(query: { doAsync?: boolean }): Promise<unknown> {
  return put('/lol-chat/v1/settings', query)
}

/**
 * DeleteLolChatV1SettingsByKey
 * @url DELETE /lol-chat/v1/settings/{key}
 * @param params - 路径参数: { key }
 * @param query - 查询参数: { doAsync }
 */
export function deleteLolChatV1SettingsByKey(params: { key: string | number }, query: { doAsync?: boolean }): Promise<unknown> {
  const { key } = params

  return del(`/lol-chat/v1/settings/${key}`, query)
}

/**
 * GetLolChatV1SettingsByKey
 * @url GET /lol-chat/v1/settings/{key}
 * @param params - 路径参数: { key }
 */
export function getLolChatV1SettingsByKey(params: { key: string | number }): Promise<unknown> {
  const { key } = params

  return get(`/lol-chat/v1/settings/${key}`)
}

/**
 * PutLolChatV1SettingsByKey
 * @url PUT /lol-chat/v1/settings/{key}
 * @param params - 路径参数: { key }
 * @param query - 查询参数: { doAsync }
 */
export function putLolChatV1SettingsByKey(params: { key: string | number }, query: { doAsync?: boolean }): Promise<unknown> {
  const { key } = params

  return put(`/lol-chat/v1/settings/${key}`, query)
}
