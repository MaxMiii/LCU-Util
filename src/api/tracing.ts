/**
 * Tracing API 模块 (自动生成)
 * 11 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * Ends recording of a performance metric.
 * @url DELETE /tracing/v1/performance/{name}
 * @param params - 路径参数: { name }
 */
export function deleteTracingV1PerformanceByName(params: { name: string | number }): Promise<unknown> {
  const { name } = params

  return del(`/tracing/v1/performance/${name}`)
}

/**
 * Starts recording of a performance metric.
 * @url POST /tracing/v1/performance/{name}
 * @param params - 路径参数: { name }
 */
export function postTracingV1PerformanceByName(params: { name: string | number }): Promise<unknown> {
  const { name } = params

  return post(`/tracing/v1/performance/${name}`)
}

/**
 * Record a tracing event.
 * @url POST /tracing/v1/trace/event
 */
export function postTracingV1TraceEvent(): Promise<unknown> {
  return post('/tracing/v1/trace/event')
}

/**
 * Record a module description.
 * @url POST /tracing/v1/trace/module
 */
export function postTracingV1TraceModule(): Promise<unknown> {
  return post('/tracing/v1/trace/module')
}

/**
 * Record a non timing telemetry event.
 * @url POST /tracing/v1/trace/non-timing-event/{eventName}
 * @param params - 路径参数: { eventName }
 * @param query - 查询参数: { value, unit }
 */
export function postTracingV1TraceNonTimingEventByEventName(params: { eventName: string | number }, query: { value: string; unit: string }): Promise<unknown> {
  const { eventName } = params

  return post(`/tracing/v1/trace/non-timing-event/${eventName}`, query)
}

/**
 * Record a tracing phase beginning.
 * @url POST /tracing/v1/trace/phase/begin
 */
export function postTracingV1TracePhaseBegin(): Promise<unknown> {
  return post('/tracing/v1/trace/phase/begin')
}

/**
 * Record a tracing phase ending.
 * @url POST /tracing/v1/trace/phase/end
 */
export function postTracingV1TracePhaseEnd(): Promise<unknown> {
  return post('/tracing/v1/trace/phase/end')
}

/**
 * Record a tracing step event.
 * @url POST /tracing/v1/trace/step-event
 */
export function postTracingV1TraceStepEvent(): Promise<unknown> {
  return post('/tracing/v1/trace/step-event')
}

/**
 * Record the ending of a time series event.
 * @url DELETE /tracing/v1/trace/time-series-event/{eventName}
 * @param params - 路径参数: { eventName }
 * @param query - 查询参数: { when, suffix }
 */
export function deleteTracingV1TraceTimeSeriesEventByEventName(params: { eventName: string | number }, query: { when: number; suffix?: string }): Promise<unknown> {
  const { eventName } = params

  return del(`/tracing/v1/trace/time-series-event/${eventName}`, query)
}

/**
 * Record the beginning of a time series event.
 * @url POST /tracing/v1/trace/time-series-event/{eventName}
 * @param params - 路径参数: { eventName }
 */
export function postTracingV1TraceTimeSeriesEventByEventName(params: { eventName: string | number }): Promise<unknown> {
  const { eventName } = params

  return post(`/tracing/v1/trace/time-series-event/${eventName}`)
}

/**
 * Record a marker within a time series event.
 * @url POST /tracing/v1/trace/time-series-event/{eventName}/marker/{markerName}
 * @param params - 路径参数: { eventName, markerName }
 */
export function postTracingV1TraceTimeSeriesEventByEventNameMarkerByMarkerName(params: { eventName: string | number, markerName: string | number }): Promise<unknown> {
  const { eventName, markerName } = params

  return post(`/tracing/v1/trace/time-series-event/${eventName}/marker/${markerName}`)
}
