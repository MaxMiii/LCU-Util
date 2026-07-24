/**
 * Manager API 模块 (自动生成)
 * 9 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * Get the status of the external plugin connection.
 * @url GET /plugin-manager/v1/external-plugins/availability
 */
export function getPluginManagerV1ExternalPluginsAvailability(): Promise<unknown> {
  return get('/plugin-manager/v1/external-plugins/availability')
}

/**
 * Get the status of the plugin manager.
 * @url GET /plugin-manager/v1/status
 */
export function getPluginManagerV1Status(): Promise<unknown> {
  return get('/plugin-manager/v1/status')
}

/**
 * Get all plugin descriptions.
 * @url GET /plugin-manager/v2/descriptions
 */
export function getPluginManagerV2Descriptions(): Promise<unknown> {
  return get('/plugin-manager/v2/descriptions')
}

/**
 * Get a plugin description.
 * @url GET /plugin-manager/v2/descriptions/{plugin}
 * @param params - 路径参数: { plugin }
 */
export function getPluginManagerV2DescriptionsByPlugin(params: { plugin: string | number }): Promise<unknown> {
  const { plugin } = params

  return get(`/plugin-manager/v2/descriptions/${plugin}`)
}

/**
 * Get diagnostic information for all plugins.
 * @url GET /plugin-manager/v2/plugins
 */
export function getPluginManagerV2Plugins(): Promise<unknown> {
  return get('/plugin-manager/v2/plugins')
}

/**
 * Get diagnostic information for a single plugin.
 * @url GET /plugin-manager/v2/plugins/{plugin}
 * @param params - 路径参数: { plugin }
 */
export function getPluginManagerV2PluginsByPlugin(params: { plugin: string | number }): Promise<unknown> {
  const { plugin } = params

  return get(`/plugin-manager/v2/plugins/${plugin}`)
}

/**
 * Get the plugin manifest.
 * @url GET /plugin-manager/v3/plugins-manifest
 */
export function getPluginManagerV3PluginsManifest(): Promise<unknown> {
  return get('/plugin-manager/v3/plugins-manifest')
}

/**
 * Download a backend asset
 * @url GET /{plugin}/assets/{path}
 * @param params - 路径参数: { plugin, path }
 */
export function getByPluginAssetsByPath(params: { plugin: string | number, path: string | number }): Promise<unknown> {
  const { plugin, path } = params

  return get(`/${plugin}/assets/${path}`)
}

/**
 * Download the header for a backend asset
 * @url HEAD /{plugin}/assets/{path}
 * @param params - 路径参数: { plugin, path }
 */
export function headByPluginAssetsByPath(params: { plugin: string | number, path: string | number }): Promise<unknown> {
  const { plugin, path } = params

  return Promise.reject(new Error('Unsupported method: HEAD'))
}
