/**
 * Playerbehavior API 模块 (自动生成)
 * 11 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolPlayerBehaviorV1Ban
 * @url GET /lol-player-behavior/v1/ban
 */
export function getLolPlayerBehaviorV1Ban(): Promise<unknown> {
  return get('/lol-player-behavior/v1/ban')
}

/**
 * GetLolPlayerBehaviorV1ChatRestriction
 * @url GET /lol-player-behavior/v1/chat-restriction
 */
export function getLolPlayerBehaviorV1ChatRestriction(): Promise<unknown> {
  return get('/lol-player-behavior/v1/chat-restriction')
}

/**
 * DeleteLolPlayerBehaviorV1CodeOfConductNotification
 * @url DELETE /lol-player-behavior/v1/code-of-conduct-notification
 */
export function deleteLolPlayerBehaviorV1CodeOfConductNotification(): Promise<unknown> {
  return del('/lol-player-behavior/v1/code-of-conduct-notification')
}

/**
 * GetLolPlayerBehaviorV1CodeOfConductNotification
 * @url GET /lol-player-behavior/v1/code-of-conduct-notification
 */
export function getLolPlayerBehaviorV1CodeOfConductNotification(): Promise<unknown> {
  return get('/lol-player-behavior/v1/code-of-conduct-notification')
}

/**
 * GetLolPlayerBehaviorV1Config
 * @url GET /lol-player-behavior/v1/config
 */
export function getLolPlayerBehaviorV1Config(): Promise<unknown> {
  return get('/lol-player-behavior/v1/config')
}

/**
 * GetLolPlayerBehaviorV1RankedRestriction
 * @url GET /lol-player-behavior/v1/ranked-restriction
 */
export function getLolPlayerBehaviorV1RankedRestriction(): Promise<unknown> {
  return get('/lol-player-behavior/v1/ranked-restriction')
}

/**
 * GetLolPlayerBehaviorV1ReformCard
 * @url GET /lol-player-behavior/v1/reform-card
 */
export function getLolPlayerBehaviorV1ReformCard(): Promise<unknown> {
  return get('/lol-player-behavior/v1/reform-card')
}

/**
 * GetLolPlayerBehaviorV1ReporterFeedback
 * @url GET /lol-player-behavior/v1/reporter-feedback
 */
export function getLolPlayerBehaviorV1ReporterFeedback(): Promise<unknown> {
  return get('/lol-player-behavior/v1/reporter-feedback')
}

/**
 * DeleteLolPlayerBehaviorV1ReporterFeedbackById
 * @url DELETE /lol-player-behavior/v1/reporter-feedback/{id}
 * @param params - 路径参数: { id }
 */
export function deleteLolPlayerBehaviorV1ReporterFeedbackById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/lol-player-behavior/v1/reporter-feedback/${id}`)
}

/**
 * GetLolPlayerBehaviorV1ReporterFeedbackById
 * @url GET /lol-player-behavior/v1/reporter-feedback/{id}
 * @param params - 路径参数: { id }
 */
export function getLolPlayerBehaviorV1ReporterFeedbackById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/lol-player-behavior/v1/reporter-feedback/${id}`)
}

/**
 * GetLolPlayerBehaviorV2ReformCard
 * @url GET /lol-player-behavior/v2/reform-card
 */
export function getLolPlayerBehaviorV2ReformCard(): Promise<unknown> {
  return get('/lol-player-behavior/v2/reform-card')
}
