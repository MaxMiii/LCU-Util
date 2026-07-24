/**
 * Spectator API 模块 (自动生成)
 * 3 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * PostLolSpectatorV1BuddySpectate
 * @url POST /lol-spectator/v1/buddy/spectate
 */
export function postLolSpectatorV1BuddySpectate(): Promise<unknown> {
  return post('/lol-spectator/v1/buddy/spectate')
}

/**
 * GetLolSpectatorV1Spectate
 * @url GET /lol-spectator/v1/spectate
 */
export function getLolSpectatorV1Spectate(): Promise<unknown> {
  return get('/lol-spectator/v1/spectate')
}

/**
 * PostLolSpectatorV1SpectateLaunch
 * @url POST /lol-spectator/v1/spectate/launch
 */
export function postLolSpectatorV1SpectateLaunch(): Promise<unknown> {
  return post('/lol-spectator/v1/spectate/launch')
}
