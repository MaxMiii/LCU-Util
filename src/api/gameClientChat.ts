/**
 * Gameclientchat API 模块 (自动生成)
 * 5 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolGameClientChatV1Buddies
 * @url GET /lol-game-client-chat/v1/buddies
 */
export function getLolGameClientChatV1Buddies(): Promise<unknown> {
  return get('/lol-game-client-chat/v1/buddies')
}

/**
 * GetLolGameClientChatV1IgnoredSummoners
 * @url GET /lol-game-client-chat/v1/ignored-summoners
 */
export function getLolGameClientChatV1IgnoredSummoners(): Promise<unknown> {
  return get('/lol-game-client-chat/v1/ignored-summoners')
}

/**
 * PostLolGameClientChatV1InstantMessages
 * @url POST /lol-game-client-chat/v1/instant-messages
 * @param query - 查询参数: { summonerName, message }
 */
export function postLolGameClientChatV1InstantMessages(query: { summonerName: string; message: string }): Promise<unknown> {
  return post('/lol-game-client-chat/v1/instant-messages', query)
}

/**
 * GetLolGameClientChatV1MutedSummoners
 * @url GET /lol-game-client-chat/v1/muted-summoners
 */
export function getLolGameClientChatV1MutedSummoners(): Promise<unknown> {
  return get('/lol-game-client-chat/v1/muted-summoners')
}

/**
 * PostLolGameClientChatV1PartyMessages
 * @url POST /lol-game-client-chat/v1/party-messages
 * @param query - 查询参数: { message }
 */
export function postLolGameClientChatV1PartyMessages(query: { message: string }): Promise<unknown> {
  return post('/lol-game-client-chat/v1/party-messages', query)
}
