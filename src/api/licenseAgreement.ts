/**
 * Licenseagreement API 模块 (自动生成)
 * 5 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolLicenseAgreementV1Agreements
 * @url GET /lol-license-agreement/v1/agreements
 */
export function getLolLicenseAgreementV1Agreements(): Promise<unknown> {
  return get('/lol-license-agreement/v1/agreements')
}

/**
 * PostLolLicenseAgreementV1AgreementsByIdAccept
 * @url POST /lol-license-agreement/v1/agreements/{id}/accept
 * @param params - 路径参数: { id }
 */
export function postLolLicenseAgreementV1AgreementsByIdAccept(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-license-agreement/v1/agreements/${id}/accept`)
}

/**
 * PostLolLicenseAgreementV1AgreementsByIdDecline
 * @url POST /lol-license-agreement/v1/agreements/{id}/decline
 * @param params - 路径参数: { id }
 */
export function postLolLicenseAgreementV1AgreementsByIdDecline(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-license-agreement/v1/agreements/${id}/decline`)
}

/**
 * GetLolLicenseAgreementV1AllAgreements
 * @url GET /lol-license-agreement/v1/all-agreements
 */
export function getLolLicenseAgreementV1AllAgreements(): Promise<unknown> {
  return get('/lol-license-agreement/v1/all-agreements')
}

/**
 * GetLolLicenseAgreementV1ServeLocation
 * @url GET /lol-license-agreement/v1/serve-location
 */
export function getLolLicenseAgreementV1ServeLocation(): Promise<unknown> {
  return get('/lol-license-agreement/v1/serve-location')
}
