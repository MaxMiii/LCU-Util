/**
 * Perks API 模块 (自动生成)
 * 24 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolPerksV1Currentpage
 * @url GET /lol-perks/v1/currentpage
 */
export function getLolPerksV1Currentpage(): Promise<unknown> {
  return get('/lol-perks/v1/currentpage')
}

/**
 * PutLolPerksV1Currentpage
 * @url PUT /lol-perks/v1/currentpage
 */
export function putLolPerksV1Currentpage(): Promise<unknown> {
  return put('/lol-perks/v1/currentpage')
}

/**
 * GetLolPerksV1Customizationlimits
 * @url GET /lol-perks/v1/customizationlimits
 */
export function getLolPerksV1Customizationlimits(): Promise<unknown> {
  return get('/lol-perks/v1/customizationlimits')
}

/**
 * GetLolPerksV1Inventory
 * @url GET /lol-perks/v1/inventory
 */
export function getLolPerksV1Inventory(): Promise<unknown> {
  return get('/lol-perks/v1/inventory')
}

/**
 * DeleteLolPerksV1Pages
 * @url DELETE /lol-perks/v1/pages
 */
export function deleteLolPerksV1Pages(): Promise<unknown> {
  return del('/lol-perks/v1/pages')
}

/**
 * GetLolPerksV1Pages
 * @url GET /lol-perks/v1/pages
 */
export function getLolPerksV1Pages(): Promise<unknown> {
  return get('/lol-perks/v1/pages')
}

/**
 * PostLolPerksV1Pages
 * @url POST /lol-perks/v1/pages
 */
export function postLolPerksV1Pages(): Promise<unknown> {
  return post('/lol-perks/v1/pages')
}

/**
 * PutLolPerksV1PagesValidate
 * @url PUT /lol-perks/v1/pages/validate
 */
export function putLolPerksV1PagesValidate(): Promise<unknown> {
  return put('/lol-perks/v1/pages/validate')
}

/**
 * DeleteLolPerksV1PagesById
 * @url DELETE /lol-perks/v1/pages/{id}
 * @param params - 路径参数: { id }
 */
export function deleteLolPerksV1PagesById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/lol-perks/v1/pages/${id}`)
}

/**
 * GetLolPerksV1PagesById
 * @url GET /lol-perks/v1/pages/{id}
 * @param params - 路径参数: { id }
 */
export function getLolPerksV1PagesById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/lol-perks/v1/pages/${id}`)
}

/**
 * PutLolPerksV1PagesById
 * @url PUT /lol-perks/v1/pages/{id}
 * @param params - 路径参数: { id }
 */
export function putLolPerksV1PagesById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return put(`/lol-perks/v1/pages/${id}`)
}

/**
 * DeleteLolPerksV1PagesByIdAutoModifiedSelections
 * @url DELETE /lol-perks/v1/pages/{id}/auto-modified-selections
 * @param params - 路径参数: { id }
 */
export function deleteLolPerksV1PagesByIdAutoModifiedSelections(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/lol-perks/v1/pages/${id}/auto-modified-selections`)
}

/**
 * GetLolPerksV1Perks
 * @url GET /lol-perks/v1/perks
 */
export function getLolPerksV1Perks(): Promise<unknown> {
  return get('/lol-perks/v1/perks')
}

/**
 * PutLolPerksV1PerksAckGameplayUpdated
 * @url PUT /lol-perks/v1/perks/ack-gameplay-updated
 */
export function putLolPerksV1PerksAckGameplayUpdated(): Promise<unknown> {
  return put('/lol-perks/v1/perks/ack-gameplay-updated')
}

/**
 * GetLolPerksV1PerksDisabled
 * @url GET /lol-perks/v1/perks/disabled
 */
export function getLolPerksV1PerksDisabled(): Promise<unknown> {
  return get('/lol-perks/v1/perks/disabled')
}

/**
 * GetLolPerksV1PerksGameplayUpdated
 * @url GET /lol-perks/v1/perks/gameplay-updated
 */
export function getLolPerksV1PerksGameplayUpdated(): Promise<unknown> {
  return get('/lol-perks/v1/perks/gameplay-updated')
}

/**
 * GetLolPerksV1SchemaVersion
 * @url GET /lol-perks/v1/schema-version
 */
export function getLolPerksV1SchemaVersion(): Promise<unknown> {
  return get('/lol-perks/v1/schema-version')
}

/**
 * GetLolPerksV1Servicesettings
 * @url GET /lol-perks/v1/servicesettings
 */
export function getLolPerksV1Servicesettings(): Promise<unknown> {
  return get('/lol-perks/v1/servicesettings')
}

/**
 * GetLolPerksV1Settings
 * @url GET /lol-perks/v1/settings
 */
export function getLolPerksV1Settings(): Promise<unknown> {
  return get('/lol-perks/v1/settings')
}

/**
 * PutLolPerksV1Settings
 * @url PUT /lol-perks/v1/settings
 */
export function putLolPerksV1Settings(): Promise<unknown> {
  return put('/lol-perks/v1/settings')
}

/**
 * GetLolPerksV1ShowAutoModifiedPagesNotification
 * @url GET /lol-perks/v1/show-auto-modified-pages-notification
 */
export function getLolPerksV1ShowAutoModifiedPagesNotification(): Promise<unknown> {
  return get('/lol-perks/v1/show-auto-modified-pages-notification')
}

/**
 * PostLolPerksV1ShowAutoModifiedPagesNotification
 * @url POST /lol-perks/v1/show-auto-modified-pages-notification
 */
export function postLolPerksV1ShowAutoModifiedPagesNotification(): Promise<unknown> {
  return post('/lol-perks/v1/show-auto-modified-pages-notification')
}

/**
 * GetLolPerksV1Styles
 * @url GET /lol-perks/v1/styles
 */
export function getLolPerksV1Styles(): Promise<unknown> {
  return get('/lol-perks/v1/styles')
}

/**
 * PostLolPerksV1UpdatePageOrder
 * @url POST /lol-perks/v1/update-page-order
 */
export function postLolPerksV1UpdatePageOrder(): Promise<unknown> {
  return post('/lol-perks/v1/update-page-order')
}
