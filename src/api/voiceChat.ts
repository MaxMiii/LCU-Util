/**
 * Voicechat API 模块 (自动生成)
 * 25 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetVoiceChatV1AudioProperties
 * @url GET /voice-chat/v1/audio-properties
 */
export function getVoiceChatV1AudioProperties(): Promise<unknown> {
  return get('/voice-chat/v1/audio-properties')
}

/**
 * GetVoiceChatV1CallStatsAggregate
 * @url GET /voice-chat/v1/call-stats/aggregate
 */
export function getVoiceChatV1CallStatsAggregate(): Promise<unknown> {
  return get('/voice-chat/v1/call-stats/aggregate')
}

/**
 * GetVoiceChatV1CallStatsById
 * @url GET /voice-chat/v1/call-stats/{id}
 * @param params - 路径参数: { id }
 */
export function getVoiceChatV1CallStatsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/voice-chat/v1/call-stats/${id}`)
}

/**
 * GetVoiceChatV1CodecSettings
 * @url GET /voice-chat/v1/codec-settings
 */
export function getVoiceChatV1CodecSettings(): Promise<unknown> {
  return get('/voice-chat/v1/codec-settings')
}

/**
 * PutVoiceChatV1CodecSettings
 * @url PUT /voice-chat/v1/codec-settings
 */
export function putVoiceChatV1CodecSettings(): Promise<unknown> {
  return put('/voice-chat/v1/codec-settings')
}

/**
 * GetVoiceChatV1Config
 * @url GET /voice-chat/v1/config
 */
export function getVoiceChatV1Config(): Promise<unknown> {
  return get('/voice-chat/v1/config')
}

/**
 * GetVoiceChatV1Errors
 * @url GET /voice-chat/v1/errors
 */
export function getVoiceChatV1Errors(): Promise<unknown> {
  return get('/voice-chat/v1/errors')
}

/**
 * GetVoiceChatV1PushToTalk
 * @url GET /voice-chat/v1/push-to-talk
 */
export function getVoiceChatV1PushToTalk(): Promise<unknown> {
  return get('/voice-chat/v1/push-to-talk')
}

/**
 * PutVoiceChatV1PushToTalk
 * @url PUT /voice-chat/v1/push-to-talk
 */
export function putVoiceChatV1PushToTalk(): Promise<unknown> {
  return put('/voice-chat/v1/push-to-talk')
}

/**
 * PostVoiceChatV1PushToTalkCheckAvailable
 * @url POST /voice-chat/v1/push-to-talk/check-available
 */
export function postVoiceChatV1PushToTalkCheckAvailable(): Promise<unknown> {
  return post('/voice-chat/v1/push-to-talk/check-available')
}

/**
 * GetVoiceChatV2DevicesCapture
 * @url GET /voice-chat/v2/devices/capture
 */
export function getVoiceChatV2DevicesCapture(): Promise<unknown> {
  return get('/voice-chat/v2/devices/capture')
}

/**
 * GetVoiceChatV2DevicesCapturePermission
 * @url GET /voice-chat/v2/devices/capture/permission
 */
export function getVoiceChatV2DevicesCapturePermission(): Promise<unknown> {
  return get('/voice-chat/v2/devices/capture/permission')
}

/**
 * PutVoiceChatV2DevicesCapturePromptForPermission
 * @url PUT /voice-chat/v2/devices/capture/prompt-for-permission
 */
export function putVoiceChatV2DevicesCapturePromptForPermission(): Promise<unknown> {
  return put('/voice-chat/v2/devices/capture/prompt-for-permission')
}

/**
 * GetVoiceChatV2DevicesRender
 * @url GET /voice-chat/v2/devices/render
 */
export function getVoiceChatV2DevicesRender(): Promise<unknown> {
  return get('/voice-chat/v2/devices/render')
}

/**
 * DeleteVoiceChatV2Sessions
 * @url DELETE /voice-chat/v2/sessions
 */
export function deleteVoiceChatV2Sessions(): Promise<unknown> {
  return del('/voice-chat/v2/sessions')
}

/**
 * GetVoiceChatV2Sessions
 * @url GET /voice-chat/v2/sessions
 */
export function getVoiceChatV2Sessions(): Promise<unknown> {
  return get('/voice-chat/v2/sessions')
}

/**
 * PostVoiceChatV2Sessions
 * @url POST /voice-chat/v2/sessions
 */
export function postVoiceChatV2Sessions(): Promise<unknown> {
  return post('/voice-chat/v2/sessions')
}

/**
 * DeleteVoiceChatV2SessionsById
 * @url DELETE /voice-chat/v2/sessions/{id}
 * @param params - 路径参数: { id }
 */
export function deleteVoiceChatV2SessionsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/voice-chat/v2/sessions/${id}`)
}

/**
 * GetVoiceChatV2SessionsById
 * @url GET /voice-chat/v2/sessions/{id}
 * @param params - 路径参数: { id }
 */
export function getVoiceChatV2SessionsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/voice-chat/v2/sessions/${id}`)
}

/**
 * PostVoiceChatV2SessionsById
 * @url POST /voice-chat/v2/sessions/{id}
 * @param params - 路径参数: { id }
 */
export function postVoiceChatV2SessionsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/voice-chat/v2/sessions/${id}`)
}

/**
 * GetVoiceChatV2SessionsBySessionIdParticipantsByParticipantId
 * @url GET /voice-chat/v2/sessions/{sessionId}/participants/{participantId}
 * @param params - 路径参数: { sessionId, participantId }
 */
export function getVoiceChatV2SessionsBySessionIdParticipantsByParticipantId(params: { sessionId: string | number, participantId: string | number }): Promise<unknown> {
  const { sessionId, participantId } = params

  return get(`/voice-chat/v2/sessions/${sessionId}/participants/${participantId}`)
}

/**
 * PutVoiceChatV2SessionsBySessionIdParticipantsByParticipantId
 * @url PUT /voice-chat/v2/sessions/{sessionId}/participants/{participantId}
 * @param params - 路径参数: { sessionId, participantId }
 */
export function putVoiceChatV2SessionsBySessionIdParticipantsByParticipantId(params: { sessionId: string | number, participantId: string | number }): Promise<unknown> {
  const { sessionId, participantId } = params

  return put(`/voice-chat/v2/sessions/${sessionId}/participants/${participantId}`)
}

/**
 * GetVoiceChatV2Settings
 * @url GET /voice-chat/v2/settings
 */
export function getVoiceChatV2Settings(): Promise<unknown> {
  return get('/voice-chat/v2/settings')
}

/**
 * PutVoiceChatV2Settings
 * @url PUT /voice-chat/v2/settings
 */
export function putVoiceChatV2Settings(): Promise<unknown> {
  return put('/voice-chat/v2/settings')
}

/**
 * GetVoiceChatV2State
 * @url GET /voice-chat/v2/state
 */
export function getVoiceChatV2State(): Promise<unknown> {
  return get('/voice-chat/v2/state')
}
