/**
 * Rms API 模块 (自动生成)
 * 15 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolRmsV1ChampionMasteryLeaveupUpdate
 * @url GET /lol-rms/v1/champion-mastery-leaveup-update
 */
export function getLolRmsV1ChampionMasteryLeaveupUpdate(): Promise<unknown> {
  return get('/lol-rms/v1/champion-mastery-leaveup-update')
}

/**
 * DeleteLolRmsV1ChampionMasteryLeaveupUpdateById
 * @url DELETE /lol-rms/v1/champion-mastery-leaveup-update/{id}
 * @param params - 路径参数: { id }
 */
export function deleteLolRmsV1ChampionMasteryLeaveupUpdateById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/lol-rms/v1/champion-mastery-leaveup-update/${id}`)
}

/**
 * DeleteRiotMessagingServiceV1Connect
 * @url DELETE /riot-messaging-service/v1/connect
 */
export function deleteRiotMessagingServiceV1Connect(): Promise<unknown> {
  return del('/riot-messaging-service/v1/connect')
}

/**
 * PostRiotMessagingServiceV1Connect
 * @url POST /riot-messaging-service/v1/connect
 */
export function postRiotMessagingServiceV1Connect(): Promise<unknown> {
  return post('/riot-messaging-service/v1/connect')
}

/**
 * DeleteRiotMessagingServiceV1Entitlements
 * @url DELETE /riot-messaging-service/v1/entitlements
 */
export function deleteRiotMessagingServiceV1Entitlements(): Promise<unknown> {
  return del('/riot-messaging-service/v1/entitlements')
}

/**
 * PostRiotMessagingServiceV1Entitlements
 * @url POST /riot-messaging-service/v1/entitlements
 */
export function postRiotMessagingServiceV1Entitlements(): Promise<unknown> {
  return post('/riot-messaging-service/v1/entitlements')
}

/**
 * GetRiotMessagingServiceV1MessageByA
 * @url GET /riot-messaging-service/v1/message/{a}
 * @param params - 路径参数: { a }
 */
export function getRiotMessagingServiceV1MessageByA(params: { a: string | number }): Promise<unknown> {
  const { a } = params

  return get(`/riot-messaging-service/v1/message/${a}`)
}

/**
 * GetRiotMessagingServiceV1MessageByAByB
 * @url GET /riot-messaging-service/v1/message/{a}/{b}
 * @param params - 路径参数: { a, b }
 */
export function getRiotMessagingServiceV1MessageByAByB(params: { a: string | number, b: string | number }): Promise<unknown> {
  const { a, b } = params

  return get(`/riot-messaging-service/v1/message/${a}/${b}`)
}

/**
 * GetRiotMessagingServiceV1MessageByAByBByC
 * @url GET /riot-messaging-service/v1/message/{a}/{b}/{c}
 * @param params - 路径参数: { a, b, c }
 */
export function getRiotMessagingServiceV1MessageByAByBByC(params: { a: string | number, b: string | number, c: string | number }): Promise<unknown> {
  const { a, b, c } = params

  return get(`/riot-messaging-service/v1/message/${a}/${b}/${c}`)
}

/**
 * GetRiotMessagingServiceV1MessageByAByBByCByD
 * @url GET /riot-messaging-service/v1/message/{a}/{b}/{c}/{d}
 * @param params - 路径参数: { a, b, c, d }
 */
export function getRiotMessagingServiceV1MessageByAByBByCByD(params: { a: string | number, b: string | number, c: string | number, d: string | number }): Promise<unknown> {
  const { a, b, c, d } = params

  return get(`/riot-messaging-service/v1/message/${a}/${b}/${c}/${d}`)
}

/**
 * GetRiotMessagingServiceV1MessageByAByBByCByDByE
 * @url GET /riot-messaging-service/v1/message/{a}/{b}/{c}/{d}/{e}
 * @param params - 路径参数: { a, b, c, d, e }
 */
export function getRiotMessagingServiceV1MessageByAByBByCByDByE(params: { a: string | number, b: string | number, c: string | number, d: string | number, e: string | number }): Promise<unknown> {
  const { a, b, c, d, e } = params

  return get(`/riot-messaging-service/v1/message/${a}/${b}/${c}/${d}/${e}`)
}

/**
 * GetRiotMessagingServiceV1MessageByAByBByCByDByEByF
 * @url GET /riot-messaging-service/v1/message/{a}/{b}/{c}/{d}/{e}/{f}
 * @param params - 路径参数: { a, b, c, d, e, f }
 */
export function getRiotMessagingServiceV1MessageByAByBByCByDByEByF(params: { a: string | number, b: string | number, c: string | number, d: string | number, e: string | number, f: string | number }): Promise<unknown> {
  const { a, b, c, d, e, f } = params

  return get(`/riot-messaging-service/v1/message/${a}/${b}/${c}/${d}/${e}/${f}`)
}

/**
 * DeleteRiotMessagingServiceV1Session
 * @url DELETE /riot-messaging-service/v1/session
 */
export function deleteRiotMessagingServiceV1Session(): Promise<unknown> {
  return del('/riot-messaging-service/v1/session')
}

/**
 * GetRiotMessagingServiceV1Session
 * @url GET /riot-messaging-service/v1/session
 */
export function getRiotMessagingServiceV1Session(): Promise<unknown> {
  return get('/riot-messaging-service/v1/session')
}

/**
 * GetRiotMessagingServiceV1State
 * @url GET /riot-messaging-service/v1/state
 */
export function getRiotMessagingServiceV1State(): Promise<unknown> {
  return get('/riot-messaging-service/v1/state')
}
