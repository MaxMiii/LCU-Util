/**
 * Personalizedoffers API 模块 (自动生成)
 * 6 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolPersonalizedOffersV1Offers
 * @url GET /lol-personalized-offers/v1/offers
 */
export function getLolPersonalizedOffersV1Offers(): Promise<unknown> {
  return get('/lol-personalized-offers/v1/offers')
}

/**
 * PostLolPersonalizedOffersV1OffersByIdPurchase
 * @url POST /lol-personalized-offers/v1/offers/{id}/purchase
 * @param params - 路径参数: { id }
 */
export function postLolPersonalizedOffersV1OffersByIdPurchase(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-personalized-offers/v1/offers/${id}/purchase`)
}

/**
 * PostLolPersonalizedOffersV1OffersByIdReveal
 * @url POST /lol-personalized-offers/v1/offers/{id}/reveal
 * @param params - 路径参数: { id }
 */
export function postLolPersonalizedOffersV1OffersByIdReveal(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-personalized-offers/v1/offers/${id}/reveal`)
}

/**
 * GetLolPersonalizedOffersV1Ready
 * @url GET /lol-personalized-offers/v1/ready
 */
export function getLolPersonalizedOffersV1Ready(): Promise<unknown> {
  return get('/lol-personalized-offers/v1/ready')
}

/**
 * GetLolPersonalizedOffersV1Status
 * @url GET /lol-personalized-offers/v1/status
 */
export function getLolPersonalizedOffersV1Status(): Promise<unknown> {
  return get('/lol-personalized-offers/v1/status')
}

/**
 * GetLolPersonalizedOffersV1Themed
 * @url GET /lol-personalized-offers/v1/themed
 */
export function getLolPersonalizedOffersV1Themed(): Promise<unknown> {
  return get('/lol-personalized-offers/v1/themed')
}
