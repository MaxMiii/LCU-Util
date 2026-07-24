/**
 * Gamesettings API 模块 (自动生成)
 * 10 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolGameSettingsV1Didreset
 * @url GET /lol-game-settings/v1/didreset
 */
export function getLolGameSettingsV1Didreset(): Promise<unknown> {
  return get('/lol-game-settings/v1/didreset')
}

/**
 * GetLolGameSettingsV1GameSettings
 * @url GET /lol-game-settings/v1/game-settings
 */
export function getLolGameSettingsV1GameSettings(): Promise<unknown> {
  return get('/lol-game-settings/v1/game-settings')
}

/**
 * PatchLolGameSettingsV1GameSettings
 * @url PATCH /lol-game-settings/v1/game-settings
 */
export function patchLolGameSettingsV1GameSettings(): Promise<unknown> {
  return patch('/lol-game-settings/v1/game-settings')
}

/**
 * GetLolGameSettingsV1GameSettingsSchema
 * @url GET /lol-game-settings/v1/game-settings-schema
 */
export function getLolGameSettingsV1GameSettingsSchema(): Promise<unknown> {
  return get('/lol-game-settings/v1/game-settings-schema')
}

/**
 * GetLolGameSettingsV1InputSettings
 * @url GET /lol-game-settings/v1/input-settings
 */
export function getLolGameSettingsV1InputSettings(): Promise<unknown> {
  return get('/lol-game-settings/v1/input-settings')
}

/**
 * PatchLolGameSettingsV1InputSettings
 * @url PATCH /lol-game-settings/v1/input-settings
 */
export function patchLolGameSettingsV1InputSettings(): Promise<unknown> {
  return patch('/lol-game-settings/v1/input-settings')
}

/**
 * GetLolGameSettingsV1InputSettingsSchema
 * @url GET /lol-game-settings/v1/input-settings-schema
 */
export function getLolGameSettingsV1InputSettingsSchema(): Promise<unknown> {
  return get('/lol-game-settings/v1/input-settings-schema')
}

/**
 * GetLolGameSettingsV1Ready
 * @url GET /lol-game-settings/v1/ready
 */
export function getLolGameSettingsV1Ready(): Promise<unknown> {
  return get('/lol-game-settings/v1/ready')
}

/**
 * PostLolGameSettingsV1ReloadPostGame
 * @url POST /lol-game-settings/v1/reload-post-game
 */
export function postLolGameSettingsV1ReloadPostGame(): Promise<unknown> {
  return post('/lol-game-settings/v1/reload-post-game')
}

/**
 * PostLolGameSettingsV1Save
 * @url POST /lol-game-settings/v1/save
 */
export function postLolGameSettingsV1Save(): Promise<unknown> {
  return post('/lol-game-settings/v1/save')
}
