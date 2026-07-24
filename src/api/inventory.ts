/**
 * Inventory API 模块 (自动生成)
 * 16 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolInventoryV1ChampSelectInventory
 * @url GET /lol-inventory/v1/champSelectInventory
 */
export function getLolInventoryV1ChampSelectInventory(): Promise<unknown> {
  return get('/lol-inventory/v1/champSelectInventory')
}

/**
 * GetLolInventoryV1InitialConfigurationComplete
 * @url GET /lol-inventory/v1/initial-configuration-complete
 */
export function getLolInventoryV1InitialConfigurationComplete(): Promise<unknown> {
  return get('/lol-inventory/v1/initial-configuration-complete')
}

/**
 * GetLolInventoryV1Inventory
 * @url GET /lol-inventory/v1/inventory
 * @param query - 查询参数: { inventoryTypes }
 */
export function getLolInventoryV1Inventory(query: { inventoryTypes: string[] }): Promise<unknown> {
  return get('/lol-inventory/v1/inventory', query)
}

/**
 * GetLolInventoryV1InventoryEmotes
 * @url GET /lol-inventory/v1/inventory/emotes
 */
export function getLolInventoryV1InventoryEmotes(): Promise<unknown> {
  return get('/lol-inventory/v1/inventory/emotes')
}

/**
 * PostLolInventoryV1NotificationAcknowledge
 * @url POST /lol-inventory/v1/notification/acknowledge
 */
export function postLolInventoryV1NotificationAcknowledge(): Promise<unknown> {
  return post('/lol-inventory/v1/notification/acknowledge')
}

/**
 * GetLolInventoryV1NotificationsByInventoryType
 * @url GET /lol-inventory/v1/notifications/{inventoryType}
 * @param params - 路径参数: { inventoryType }
 */
export function getLolInventoryV1NotificationsByInventoryType(params: { inventoryType: string | number }): Promise<unknown> {
  const { inventoryType } = params

  return get(`/lol-inventory/v1/notifications/${inventoryType}`)
}

/**
 * GetLolInventoryV1PlayersByPuuidInventory
 * @url GET /lol-inventory/v1/players/{puuid}/inventory
 * @param params - 路径参数: { puuid }
 * @param query - 查询参数: { inventoryTypes }
 */
export function getLolInventoryV1PlayersByPuuidInventory(params: { puuid: string | number }, query: { inventoryTypes: string[] }): Promise<unknown> {
  const { puuid } = params

  return get(`/lol-inventory/v1/players/${puuid}/inventory`, query)
}

/**
 * GetLolInventoryV1SignedInventory
 * @url GET /lol-inventory/v1/signedInventory
 * @param query - 查询参数: { inventoryTypes }
 */
export function getLolInventoryV1SignedInventory(query: { inventoryTypes: string[] }): Promise<unknown> {
  return get('/lol-inventory/v1/signedInventory', query)
}

/**
 * GetLolInventoryV1SignedInventorySimple
 * @url GET /lol-inventory/v1/signedInventory/simple
 * @param query - 查询参数: { inventoryTypes, queryParams }
 */
export function getLolInventoryV1SignedInventorySimple(query: { inventoryTypes: string[]; queryParams?: Record<string, unknown> }): Promise<unknown> {
  return get('/lol-inventory/v1/signedInventory/simple', query)
}

/**
 * GetLolInventoryV1SignedInventoryTournamentlogos
 * @url GET /lol-inventory/v1/signedInventory/tournamentlogos
 */
export function getLolInventoryV1SignedInventoryTournamentlogos(): Promise<unknown> {
  return get('/lol-inventory/v1/signedInventory/tournamentlogos')
}

/**
 * GetLolInventoryV1SignedInventoryCache
 * @url GET /lol-inventory/v1/signedInventoryCache
 */
export function getLolInventoryV1SignedInventoryCache(): Promise<unknown> {
  return get('/lol-inventory/v1/signedInventoryCache')
}

/**
 * GetLolInventoryV1SignedWallet
 * @url GET /lol-inventory/v1/signedWallet
 * @param query - 查询参数: { currencyTypes }
 */
export function getLolInventoryV1SignedWallet(query: { currencyTypes: string[] }): Promise<unknown> {
  return get('/lol-inventory/v1/signedWallet', query)
}

/**
 * GetLolInventoryV1SignedWalletByCurrencyType
 * @url GET /lol-inventory/v1/signedWallet/{currencyType}
 * @param params - 路径参数: { currencyType }
 */
export function getLolInventoryV1SignedWalletByCurrencyType(params: { currencyType: string | number }): Promise<unknown> {
  const { currencyType } = params

  return get(`/lol-inventory/v1/signedWallet/${currencyType}`)
}

/**
 * GetLolInventoryV1Wallet
 * @url GET /lol-inventory/v1/wallet
 * @param query - 查询参数: { currencyTypes }
 */
export function getLolInventoryV1Wallet(query: { currencyTypes: string[] }): Promise<unknown> {
  return get('/lol-inventory/v1/wallet', query)
}

/**
 * GetLolInventoryV1WalletByCurrencyType
 * @url GET /lol-inventory/v1/wallet/{currencyType}
 * @param params - 路径参数: { currencyType }
 */
export function getLolInventoryV1WalletByCurrencyType(params: { currencyType: string | number }): Promise<unknown> {
  const { currencyType } = params

  return get(`/lol-inventory/v1/wallet/${currencyType}`)
}

/**
 * GetLolInventoryV2InventoryByInventoryType
 * @url GET /lol-inventory/v2/inventory/{inventoryType}
 * @param params - 路径参数: { inventoryType }
 */
export function getLolInventoryV2InventoryByInventoryType(params: { inventoryType: string | number }): Promise<unknown> {
  const { inventoryType } = params

  return get(`/lol-inventory/v2/inventory/${inventoryType}`)
}
