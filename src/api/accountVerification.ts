/**
 * Accountverification API 模块 (自动生成)
 * 6 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * PostLolAccountVerificationV1Authenticate
 * @url POST /lol-account-verification/v1/authenticate
 */
export function postLolAccountVerificationV1Authenticate(): Promise<unknown> {
  return post('/lol-account-verification/v1/authenticate')
}

/**
 * GetLolAccountVerificationV1Device
 * @url GET /lol-account-verification/v1/device
 */
export function getLolAccountVerificationV1Device(): Promise<unknown> {
  return get('/lol-account-verification/v1/device')
}

/**
 * PostLolAccountVerificationV1Invalidate
 * @url POST /lol-account-verification/v1/invalidate
 */
export function postLolAccountVerificationV1Invalidate(): Promise<unknown> {
  return post('/lol-account-verification/v1/invalidate')
}

/**
 * GetLolAccountVerificationV1IsVerified
 * @url GET /lol-account-verification/v1/is-verified
 */
export function getLolAccountVerificationV1IsVerified(): Promise<unknown> {
  return get('/lol-account-verification/v1/is-verified')
}

/**
 * PostLolAccountVerificationV1SendToken
 * @url POST /lol-account-verification/v1/send-token
 */
export function postLolAccountVerificationV1SendToken(): Promise<unknown> {
  return post('/lol-account-verification/v1/send-token')
}

/**
 * PostLolAccountVerificationV1Verify
 * @url POST /lol-account-verification/v1/verify
 */
export function postLolAccountVerificationV1Verify(): Promise<unknown> {
  return post('/lol-account-verification/v1/verify')
}
