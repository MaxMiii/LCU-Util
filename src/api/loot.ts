/**
 * Loot API 模块 (自动生成)
 * 32 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolLootV1CurrencyConfiguration
 * @url GET /lol-loot/v1/currency-configuration
 */
export function getLolLootV1CurrencyConfiguration(): Promise<unknown> {
  return get('/lol-loot/v1/currency-configuration')
}

/**
 * GetLolLootV1Enabled
 * @url GET /lol-loot/v1/enabled
 */
export function getLolLootV1Enabled(): Promise<unknown> {
  return get('/lol-loot/v1/enabled')
}

/**
 * GetLolLootV1LootGrants
 * @url GET /lol-loot/v1/loot-grants
 */
export function getLolLootV1LootGrants(): Promise<unknown> {
  return get('/lol-loot/v1/loot-grants')
}

/**
 * DeleteLolLootV1LootGrantsById
 * @url DELETE /lol-loot/v1/loot-grants/{id}
 * @param params - 路径参数: { id }
 */
export function deleteLolLootV1LootGrantsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/lol-loot/v1/loot-grants/${id}`)
}

/**
 * GetLolLootV1LootItems
 * @url GET /lol-loot/v1/loot-items
 */
export function getLolLootV1LootItems(): Promise<unknown> {
  return get('/lol-loot/v1/loot-items')
}

/**
 * GetLolLootV1LootOddsByRecipeName
 * @url GET /lol-loot/v1/loot-odds/{recipeName}
 * @param params - 路径参数: { recipeName }
 */
export function getLolLootV1LootOddsByRecipeName(params: { recipeName: string | number }): Promise<unknown> {
  const { recipeName } = params

  return get(`/lol-loot/v1/loot-odds/${recipeName}`)
}

/**
 * GetLolLootV1Milestones
 * @url GET /lol-loot/v1/milestones
 * @param query - 查询参数: { minimizeResponse, includeInactive }
 */
export function getLolLootV1Milestones(query: { minimizeResponse: boolean; includeInactive?: boolean }): Promise<unknown> {
  return get('/lol-loot/v1/milestones', query)
}

/**
 * GetLolLootV1MilestonesCounters
 * @url GET /lol-loot/v1/milestones/counters
 */
export function getLolLootV1MilestonesCounters(): Promise<unknown> {
  return get('/lol-loot/v1/milestones/counters')
}

/**
 * GetLolLootV1MilestonesItems
 * @url GET /lol-loot/v1/milestones/items
 */
export function getLolLootV1MilestonesItems(): Promise<unknown> {
  return get('/lol-loot/v1/milestones/items')
}

/**
 * GetLolLootV1MilestonesByLootMilestonesId
 * @url GET /lol-loot/v1/milestones/{lootMilestonesId}
 * @param params - 路径参数: { lootMilestonesId }
 * @param query - 查询参数: { includeInactive }
 */
export function getLolLootV1MilestonesByLootMilestonesId(params: { lootMilestonesId: string | number }, query: { includeInactive?: boolean }): Promise<unknown> {
  const { lootMilestonesId } = params

  return get(`/lol-loot/v1/milestones/${lootMilestonesId}`, query)
}

/**
 * PostLolLootV1MilestonesByLootMilestonesIdClaim
 * @url POST /lol-loot/v1/milestones/{lootMilestonesId}/claim
 * @param params - 路径参数: { lootMilestonesId }
 */
export function postLolLootV1MilestonesByLootMilestonesIdClaim(params: { lootMilestonesId: string | number }): Promise<unknown> {
  const { lootMilestonesId } = params

  return post(`/lol-loot/v1/milestones/${lootMilestonesId}/claim`)
}

/**
 * GetLolLootV1MilestonesByLootMilestonesIdClaimProgress
 * @url GET /lol-loot/v1/milestones/{lootMilestonesId}/claimProgress
 * @param params - 路径参数: { lootMilestonesId }
 */
export function getLolLootV1MilestonesByLootMilestonesIdClaimProgress(params: { lootMilestonesId: string | number }): Promise<unknown> {
  const { lootMilestonesId } = params

  return get(`/lol-loot/v1/milestones/${lootMilestonesId}/claimProgress`)
}

/**
 * GetLolLootV1MilestonesByLootMilestonesIdCounter
 * @url GET /lol-loot/v1/milestones/{lootMilestonesId}/counter
 * @param params - 路径参数: { lootMilestonesId }
 */
export function getLolLootV1MilestonesByLootMilestonesIdCounter(params: { lootMilestonesId: string | number }): Promise<unknown> {
  const { lootMilestonesId } = params

  return get(`/lol-loot/v1/milestones/${lootMilestonesId}/counter`)
}

/**
 * GetLolLootV1NewPlayerCheckDone
 * @url GET /lol-loot/v1/new-player-check-done
 */
export function getLolLootV1NewPlayerCheckDone(): Promise<unknown> {
  return get('/lol-loot/v1/new-player-check-done')
}

/**
 * PostLolLootV1NewPlayerCheckDoneByNewValue
 * @url POST /lol-loot/v1/new-player-check-done/{newValue}
 * @param params - 路径参数: { newValue }
 */
export function postLolLootV1NewPlayerCheckDoneByNewValue(params: { newValue: string | number }): Promise<unknown> {
  const { newValue } = params

  return post(`/lol-loot/v1/new-player-check-done/${newValue}`)
}

/**
 * GetLolLootV1PlayerDisplayCategories
 * @url GET /lol-loot/v1/player-display-categories
 */
export function getLolLootV1PlayerDisplayCategories(): Promise<unknown> {
  return get('/lol-loot/v1/player-display-categories')
}

/**
 * GetLolLootV1PlayerLoot
 * @url GET /lol-loot/v1/player-loot
 */
export function getLolLootV1PlayerLoot(): Promise<unknown> {
  return get('/lol-loot/v1/player-loot')
}

/**
 * GetLolLootV1PlayerLootMap
 * @url GET /lol-loot/v1/player-loot-map
 */
export function getLolLootV1PlayerLootMap(): Promise<unknown> {
  return get('/lol-loot/v1/player-loot-map')
}

/**
 * GetLolLootV1PlayerLootNotifications
 * @url GET /lol-loot/v1/player-loot-notifications
 */
export function getLolLootV1PlayerLootNotifications(): Promise<unknown> {
  return get('/lol-loot/v1/player-loot-notifications')
}

/**
 * PostLolLootV1PlayerLootNotificationsByIdAcknowledge
 * @url POST /lol-loot/v1/player-loot-notifications/{id}/acknowledge
 * @param params - 路径参数: { id }
 */
export function postLolLootV1PlayerLootNotificationsByIdAcknowledge(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-loot/v1/player-loot-notifications/${id}/acknowledge`)
}

/**
 * GetLolLootV1PlayerLootByLootId
 * @url GET /lol-loot/v1/player-loot/{lootId}
 * @param params - 路径参数: { lootId }
 */
export function getLolLootV1PlayerLootByLootId(params: { lootId: string | number }): Promise<unknown> {
  const { lootId } = params

  return get(`/lol-loot/v1/player-loot/${lootId}`)
}

/**
 * GetLolLootV1PlayerLootByLootIdContextMenu
 * @url GET /lol-loot/v1/player-loot/{lootId}/context-menu
 * @param params - 路径参数: { lootId }
 */
export function getLolLootV1PlayerLootByLootIdContextMenu(params: { lootId: string | number }): Promise<unknown> {
  const { lootId } = params

  return get(`/lol-loot/v1/player-loot/${lootId}/context-menu`)
}

/**
 * PostLolLootV1PlayerLootByLootIdContextMenu
 * @url POST /lol-loot/v1/player-loot/{lootId}/context-menu
 * @param params - 路径参数: { lootId }
 */
export function postLolLootV1PlayerLootByLootIdContextMenu(params: { lootId: string | number }): Promise<unknown> {
  const { lootId } = params

  return post(`/lol-loot/v1/player-loot/${lootId}/context-menu`)
}

/**
 * DeleteLolLootV1PlayerLootByLootIdNewNotification
 * @url DELETE /lol-loot/v1/player-loot/{lootId}/new-notification
 * @param params - 路径参数: { lootId }
 */
export function deleteLolLootV1PlayerLootByLootIdNewNotification(params: { lootId: string | number }): Promise<unknown> {
  const { lootId } = params

  return del(`/lol-loot/v1/player-loot/${lootId}/new-notification`)
}

/**
 * PostLolLootV1PlayerLootByLootNameRedeem
 * @url POST /lol-loot/v1/player-loot/{lootName}/redeem
 * @param params - 路径参数: { lootName }
 */
export function postLolLootV1PlayerLootByLootNameRedeem(params: { lootName: string | number }): Promise<unknown> {
  const { lootName } = params

  return post(`/lol-loot/v1/player-loot/${lootName}/redeem`)
}

/**
 * GetLolLootV1Ready
 * @url GET /lol-loot/v1/ready
 */
export function getLolLootV1Ready(): Promise<unknown> {
  return get('/lol-loot/v1/ready')
}

/**
 * GetLolLootV1RecipesConfiguration
 * @url GET /lol-loot/v1/recipes/configuration
 */
export function getLolLootV1RecipesConfiguration(): Promise<unknown> {
  return get('/lol-loot/v1/recipes/configuration')
}

/**
 * GetLolLootV1RecipesInitialItemByLootId
 * @url GET /lol-loot/v1/recipes/initial-item/{lootId}
 * @param params - 路径参数: { lootId }
 * @param query - 查询参数: { includeInactive }
 */
export function getLolLootV1RecipesInitialItemByLootId(params: { lootId: string | number }, query: { includeInactive?: boolean }): Promise<unknown> {
  const { lootId } = params

  return get(`/lol-loot/v1/recipes/initial-item/${lootId}`, query)
}

/**
 * PostLolLootV1RecipesInitialItemByLootId
 * @url POST /lol-loot/v1/recipes/initial-item/{lootId}
 * @param params - 路径参数: { lootId }
 * @param query - 查询参数: { includeInactive }
 */
export function postLolLootV1RecipesInitialItemByLootId(params: { lootId: string | number }, query: { includeInactive?: boolean }): Promise<unknown> {
  const { lootId } = params

  return post(`/lol-loot/v1/recipes/initial-item/${lootId}`, query)
}

/**
 * PostLolLootV1RecipesByRecipeNameCraft
 * @url POST /lol-loot/v1/recipes/{recipeName}/craft
 * @param params - 路径参数: { recipeName }
 * @param query - 查询参数: { repeat }
 */
export function postLolLootV1RecipesByRecipeNameCraft(params: { recipeName: string | number }, query: { repeat?: number }): Promise<unknown> {
  const { recipeName } = params

  return post(`/lol-loot/v1/recipes/${recipeName}/craft`, query)
}

/**
 * PostLolLootV1Refresh
 * @url POST /lol-loot/v1/refresh
 * @param query - 查询参数: { force }
 */
export function postLolLootV1Refresh(query: { force: boolean }): Promise<unknown> {
  return post('/lol-loot/v1/refresh', query)
}

/**
 * GetLolLootV2PlayerLootMap
 * @url GET /lol-loot/v2/player-loot-map
 */
export function getLolLootV2PlayerLootMap(): Promise<unknown> {
  return get('/lol-loot/v2/player-loot-map')
}
