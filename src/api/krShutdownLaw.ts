/**
 * Krshutdownlaw API 模块 (自动生成)
 * 7 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolKrShutdownLawV1CustomStatus
 * @url GET /lol-kr-shutdown-law/v1/custom-status
 */
export function getLolKrShutdownLawV1CustomStatus(): Promise<unknown> {
  return get('/lol-kr-shutdown-law/v1/custom-status')
}

/**
 * GetLolKrShutdownLawV1DisabledQueues
 * @url GET /lol-kr-shutdown-law/v1/disabled-queues
 */
export function getLolKrShutdownLawV1DisabledQueues(): Promise<unknown> {
  return get('/lol-kr-shutdown-law/v1/disabled-queues')
}

/**
 * GetLolKrShutdownLawV1Notification
 * @url GET /lol-kr-shutdown-law/v1/notification
 */
export function getLolKrShutdownLawV1Notification(): Promise<unknown> {
  return get('/lol-kr-shutdown-law/v1/notification')
}

/**
 * GetLolKrShutdownLawV1QueueStatusByQueueId
 * @url GET /lol-kr-shutdown-law/v1/queue-status/{queue_id}
 * @param params - 路径参数: { queue_id }
 */
export function getLolKrShutdownLawV1QueueStatusByQueueId(params: { queue_id: string | number }): Promise<unknown> {
  const { queue_id } = params

  return get(`/lol-kr-shutdown-law/v1/queue-status/${queue_id}`)
}

/**
 * GetLolKrShutdownLawV1RatingScreen
 * @url GET /lol-kr-shutdown-law/v1/rating-screen
 */
export function getLolKrShutdownLawV1RatingScreen(): Promise<unknown> {
  return get('/lol-kr-shutdown-law/v1/rating-screen')
}

/**
 * PostLolKrShutdownLawV1RatingScreenAcknowledge
 * @url POST /lol-kr-shutdown-law/v1/rating-screen/acknowledge
 */
export function postLolKrShutdownLawV1RatingScreenAcknowledge(): Promise<unknown> {
  return post('/lol-kr-shutdown-law/v1/rating-screen/acknowledge')
}

/**
 * GetLolKrShutdownLawV1Status
 * @url GET /lol-kr-shutdown-law/v1/status
 */
export function getLolKrShutdownLawV1Status(): Promise<unknown> {
  return get('/lol-kr-shutdown-law/v1/status')
}
