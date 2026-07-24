/**
 * Purchasewidget API 模块 (自动生成)
 * 9 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolPurchaseWidgetV1Configuration
 * @url GET /lol-purchase-widget/v1/configuration
 */
export function getLolPurchaseWidgetV1Configuration(): Promise<unknown> {
  return get('/lol-purchase-widget/v1/configuration')
}

/**
 * GetLolPurchaseWidgetV1OrderNotifications
 * @url GET /lol-purchase-widget/v1/order-notifications
 */
export function getLolPurchaseWidgetV1OrderNotifications(): Promise<unknown> {
  return get('/lol-purchase-widget/v1/order-notifications')
}

/**
 * GetLolPurchaseWidgetV1PurchasableItem
 * @url GET /lol-purchase-widget/v1/purchasable-item
 * @param query - 查询参数: { inventoryType, itemId }
 */
export function getLolPurchaseWidgetV1PurchasableItem(query: { inventoryType: string; itemId: number }): Promise<unknown> {
  return get('/lol-purchase-widget/v1/purchasable-item', query)
}

/**
 * PostLolPurchaseWidgetV1PurchasableItemsByInventoryType
 * @url POST /lol-purchase-widget/v1/purchasable-items/{inventoryType}
 * @param params - 路径参数: { inventoryType }
 */
export function postLolPurchaseWidgetV1PurchasableItemsByInventoryType(params: { inventoryType: string | number }): Promise<unknown> {
  const { inventoryType } = params

  return post(`/lol-purchase-widget/v1/purchasable-items/${inventoryType}`)
}

/**
 * PostLolPurchaseWidgetV2PurchaseItems
 * @url POST /lol-purchase-widget/v2/purchaseItems
 */
export function postLolPurchaseWidgetV2PurchaseItems(): Promise<unknown> {
  return post('/lol-purchase-widget/v2/purchaseItems')
}

/**
 * GetLolPurchaseWidgetV3BaseSkinLineDataByOfferId
 * @url GET /lol-purchase-widget/v3/base-skin-line-data/{offerId}
 * @param params - 路径参数: { offerId }
 */
export function getLolPurchaseWidgetV3BaseSkinLineDataByOfferId(params: { offerId: string | number }): Promise<unknown> {
  const { offerId } = params

  return get(`/lol-purchase-widget/v3/base-skin-line-data/${offerId}`)
}

/**
 * GetLolPurchaseWidgetV3PurchaseOfferOrderStatuses
 * @url GET /lol-purchase-widget/v3/purchase-offer-order-statuses
 */
export function getLolPurchaseWidgetV3PurchaseOfferOrderStatuses(): Promise<unknown> {
  return get('/lol-purchase-widget/v3/purchase-offer-order-statuses')
}

/**
 * PostLolPurchaseWidgetV3PurchaseOffer
 * @url POST /lol-purchase-widget/v3/purchaseOffer
 */
export function postLolPurchaseWidgetV3PurchaseOffer(): Promise<unknown> {
  return post('/lol-purchase-widget/v3/purchaseOffer')
}

/**
 * PostLolPurchaseWidgetV3ValidateOffer
 * @url POST /lol-purchase-widget/v3/validateOffer
 */
export function postLolPurchaseWidgetV3ValidateOffer(): Promise<unknown> {
  return post('/lol-purchase-widget/v3/validateOffer')
}
