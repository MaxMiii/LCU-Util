/**
 * Store API 模块 (自动生成)
 * 21 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolStoreV1Catalog
 * @url GET /lol-store/v1/catalog
 * @param query - 查询参数: { inventoryType, itemId }
 */
export function getLolStoreV1Catalog(query: { inventoryType?: string[]; itemId?: number[] }): Promise<unknown> {
  return get('/lol-store/v1/catalog', query)
}

/**
 * GetLolStoreV1CatalogSales
 * @url GET /lol-store/v1/catalog/sales
 */
export function getLolStoreV1CatalogSales(): Promise<unknown> {
  return get('/lol-store/v1/catalog/sales')
}

/**
 * GetLolStoreV1CatalogByInventoryType
 * @url GET /lol-store/v1/catalog/{inventoryType}
 * @param params - 路径参数: { inventoryType }
 * @param query - 查询参数: { itemIds }
 */
export function getLolStoreV1CatalogByInventoryType(params: { inventoryType: string | number }, query: { itemIds: number[] }): Promise<unknown> {
  const { inventoryType } = params

  return get(`/lol-store/v1/catalog/${inventoryType}`, query)
}

/**
 * GetLolStoreV1CatalogByInstanceIds
 * @url GET /lol-store/v1/catalogByInstanceIds
 * @param query - 查询参数: { instanceIds }
 */
export function getLolStoreV1CatalogByInstanceIds(query: { instanceIds: string[] }): Promise<unknown> {
  return get('/lol-store/v1/catalogByInstanceIds', query)
}

/**
 * GetLolStoreV1GetStoreUrl
 * @url GET /lol-store/v1/getStoreUrl
 */
export function getLolStoreV1GetStoreUrl(): Promise<unknown> {
  return get('/lol-store/v1/getStoreUrl')
}

/**
 * GetLolStoreV1Giftablefriends
 * @url GET /lol-store/v1/giftablefriends
 */
export function getLolStoreV1Giftablefriends(): Promise<unknown> {
  return get('/lol-store/v1/giftablefriends')
}

/**
 * GetLolStoreV1ItemKeysFromInstanceIds
 * @url GET /lol-store/v1/itemKeysFromInstanceIds
 * @param query - 查询参数: { instanceIds }
 */
export function getLolStoreV1ItemKeysFromInstanceIds(query: { instanceIds: string[] }): Promise<unknown> {
  return get('/lol-store/v1/itemKeysFromInstanceIds', query)
}

/**
 * GetLolStoreV1ItemKeysFromOfferIds
 * @url GET /lol-store/v1/itemKeysFromOfferIds
 * @param query - 查询参数: { offerIds }
 */
export function getLolStoreV1ItemKeysFromOfferIds(query: { offerIds: string[] }): Promise<unknown> {
  return get('/lol-store/v1/itemKeysFromOfferIds', query)
}

/**
 * GetLolStoreV1LastPage
 * @url GET /lol-store/v1/lastPage
 */
export function getLolStoreV1LastPage(): Promise<unknown> {
  return get('/lol-store/v1/lastPage')
}

/**
 * PostLolStoreV1LastPage
 * @url POST /lol-store/v1/lastPage
 */
export function postLolStoreV1LastPage(): Promise<unknown> {
  return post('/lol-store/v1/lastPage')
}

/**
 * PostLolStoreV1NotificationsAcknowledge
 * @url POST /lol-store/v1/notifications/acknowledge
 */
export function postLolStoreV1NotificationsAcknowledge(): Promise<unknown> {
  return post('/lol-store/v1/notifications/acknowledge')
}

/**
 * GetLolStoreV1Offers
 * @url GET /lol-store/v1/offers
 * @param query - 查询参数: { inventoryTypeUUIDs }
 */
export function getLolStoreV1Offers(query: { inventoryTypeUUIDs?: string[] }): Promise<unknown> {
  return get('/lol-store/v1/offers', query)
}

/**
 * GetLolStoreV1OrderNotifications
 * @url GET /lol-store/v1/order-notifications
 */
export function getLolStoreV1OrderNotifications(): Promise<unknown> {
  return get('/lol-store/v1/order-notifications')
}

/**
 * GetLolStoreV1OrderNotificationsById
 * @url GET /lol-store/v1/order-notifications/{id}
 * @param params - 路径参数: { id }
 */
export function getLolStoreV1OrderNotificationsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/lol-store/v1/order-notifications/${id}`)
}

/**
 * GetLolStoreV1PaymentDetails
 * @url GET /lol-store/v1/paymentDetails
 * @param query - 查询参数: { action, giftRecipientAccountId, giftMessage }
 */
export function getLolStoreV1PaymentDetails(query: { action: string; giftRecipientAccountId?: number; giftMessage?: string }): Promise<unknown> {
  return get('/lol-store/v1/paymentDetails', query)
}

/**
 * GetLolStoreV1SkinsBySkinId
 * @url GET /lol-store/v1/skins/{skinId}
 * @param params - 路径参数: { skinId }
 */
export function getLolStoreV1SkinsBySkinId(params: { skinId: string | number }): Promise<unknown> {
  const { skinId } = params

  return get(`/lol-store/v1/skins/${skinId}`)
}

/**
 * PostLolStoreV1SkinsBySkinIdPurchase
 * @url POST /lol-store/v1/skins/{skinId}/purchase
 * @param params - 路径参数: { skinId }
 */
export function postLolStoreV1SkinsBySkinIdPurchase(params: { skinId: string | number }): Promise<unknown> {
  const { skinId } = params

  return post(`/lol-store/v1/skins/${skinId}/purchase`)
}

/**
 * GetLolStoreV1Status
 * @url GET /lol-store/v1/status
 */
export function getLolStoreV1Status(): Promise<unknown> {
  return get('/lol-store/v1/status')
}

/**
 * GetLolStoreV1StoreReady
 * @url GET /lol-store/v1/store-ready
 */
export function getLolStoreV1StoreReady(): Promise<unknown> {
  return get('/lol-store/v1/store-ready')
}

/**
 * GetLolStoreV1Wallet
 * @url GET /lol-store/v1/wallet
 */
export function getLolStoreV1Wallet(): Promise<unknown> {
  return get('/lol-store/v1/wallet')
}

/**
 * GetLolStoreV1ByPageType
 * @url GET /lol-store/v1/{pageType}
 * @param params - 路径参数: { pageType }
 */
export function getLolStoreV1ByPageType(params: { pageType: string | number }): Promise<unknown> {
  const { pageType } = params

  return get(`/lol-store/v1/${pageType}`)
}
