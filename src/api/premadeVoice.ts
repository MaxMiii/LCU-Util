/**
 * Premadevoice API 模块 (自动生成)
 * 24 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolPremadeVoiceV1Availability
 * @url GET /lol-premade-voice/v1/availability
 */
export function getLolPremadeVoiceV1Availability(): Promise<unknown> {
  return get('/lol-premade-voice/v1/availability')
}

/**
 * GetLolPremadeVoiceV1Capturedevices
 * @url GET /lol-premade-voice/v1/capturedevices
 */
export function getLolPremadeVoiceV1Capturedevices(): Promise<unknown> {
  return get('/lol-premade-voice/v1/capturedevices')
}

/**
 * PutLolPremadeVoiceV1Capturedevices
 * @url PUT /lol-premade-voice/v1/capturedevices
 */
export function putLolPremadeVoiceV1Capturedevices(): Promise<unknown> {
  return put('/lol-premade-voice/v1/capturedevices')
}

/**
 * GetLolPremadeVoiceV1FirstExperience
 * @url GET /lol-premade-voice/v1/first-experience
 */
export function getLolPremadeVoiceV1FirstExperience(): Promise<unknown> {
  return get('/lol-premade-voice/v1/first-experience')
}

/**
 * PostLolPremadeVoiceV1FirstExperienceGame
 * @url POST /lol-premade-voice/v1/first-experience/game
 */
export function postLolPremadeVoiceV1FirstExperienceGame(): Promise<unknown> {
  return post('/lol-premade-voice/v1/first-experience/game')
}

/**
 * PostLolPremadeVoiceV1FirstExperienceLcu
 * @url POST /lol-premade-voice/v1/first-experience/lcu
 */
export function postLolPremadeVoiceV1FirstExperienceLcu(): Promise<unknown> {
  return post('/lol-premade-voice/v1/first-experience/lcu')
}

/**
 * PostLolPremadeVoiceV1FirstExperienceReset
 * @url POST /lol-premade-voice/v1/first-experience/reset
 */
export function postLolPremadeVoiceV1FirstExperienceReset(): Promise<unknown> {
  return post('/lol-premade-voice/v1/first-experience/reset')
}

/**
 * PostLolPremadeVoiceV1GameClientUpdatedPTTKey
 * @url POST /lol-premade-voice/v1/gameClientUpdatedPTTKey
 */
export function postLolPremadeVoiceV1GameClientUpdatedPTTKey(): Promise<unknown> {
  return post('/lol-premade-voice/v1/gameClientUpdatedPTTKey')
}

/**
 * DeleteLolPremadeVoiceV1MicTest
 * @url DELETE /lol-premade-voice/v1/mic-test
 */
export function deleteLolPremadeVoiceV1MicTest(): Promise<unknown> {
  return del('/lol-premade-voice/v1/mic-test')
}

/**
 * GetLolPremadeVoiceV1MicTest
 * @url GET /lol-premade-voice/v1/mic-test
 */
export function getLolPremadeVoiceV1MicTest(): Promise<unknown> {
  return get('/lol-premade-voice/v1/mic-test')
}

/**
 * PostLolPremadeVoiceV1MicTest
 * @url POST /lol-premade-voice/v1/mic-test
 */
export function postLolPremadeVoiceV1MicTest(): Promise<unknown> {
  return post('/lol-premade-voice/v1/mic-test')
}

/**
 * GetLolPremadeVoiceV1ParticipantRecords
 * @url GET /lol-premade-voice/v1/participant-records
 */
export function getLolPremadeVoiceV1ParticipantRecords(): Promise<unknown> {
  return get('/lol-premade-voice/v1/participant-records')
}

/**
 * GetLolPremadeVoiceV1Participants
 * @url GET /lol-premade-voice/v1/participants
 */
export function getLolPremadeVoiceV1Participants(): Promise<unknown> {
  return get('/lol-premade-voice/v1/participants')
}

/**
 * PutLolPremadeVoiceV1ParticipantsByPuuidMute
 * @url PUT /lol-premade-voice/v1/participants/{puuid}/mute
 * @param params - 路径参数: { puuid }
 */
export function putLolPremadeVoiceV1ParticipantsByPuuidMute(params: { puuid: string | number }): Promise<unknown> {
  const { puuid } = params

  return put(`/lol-premade-voice/v1/participants/${puuid}/mute`)
}

/**
 * PutLolPremadeVoiceV1ParticipantsByPuuidVolume
 * @url PUT /lol-premade-voice/v1/participants/{puuid}/volume
 * @param params - 路径参数: { puuid }
 */
export function putLolPremadeVoiceV1ParticipantsByPuuidVolume(params: { puuid: string | number }): Promise<unknown> {
  const { puuid } = params

  return put(`/lol-premade-voice/v1/participants/${puuid}/volume`)
}

/**
 * PostLolPremadeVoiceV1PushToTalkCheckAvailable
 * @url POST /lol-premade-voice/v1/push-to-talk/check-available
 */
export function postLolPremadeVoiceV1PushToTalkCheckAvailable(): Promise<unknown> {
  return post('/lol-premade-voice/v1/push-to-talk/check-available')
}

/**
 * PutLolPremadeVoiceV1SelfActivationSensitivity
 * @url PUT /lol-premade-voice/v1/self/activationSensitivity
 */
export function putLolPremadeVoiceV1SelfActivationSensitivity(): Promise<unknown> {
  return put('/lol-premade-voice/v1/self/activationSensitivity')
}

/**
 * PutLolPremadeVoiceV1SelfInputMode
 * @url PUT /lol-premade-voice/v1/self/inputMode
 */
export function putLolPremadeVoiceV1SelfInputMode(): Promise<unknown> {
  return put('/lol-premade-voice/v1/self/inputMode')
}

/**
 * PutLolPremadeVoiceV1SelfMicLevel
 * @url PUT /lol-premade-voice/v1/self/micLevel
 */
export function putLolPremadeVoiceV1SelfMicLevel(): Promise<unknown> {
  return put('/lol-premade-voice/v1/self/micLevel')
}

/**
 * PutLolPremadeVoiceV1SelfMute
 * @url PUT /lol-premade-voice/v1/self/mute
 */
export function putLolPremadeVoiceV1SelfMute(): Promise<unknown> {
  return put('/lol-premade-voice/v1/self/mute')
}

/**
 * DeleteLolPremadeVoiceV1Session
 * @url DELETE /lol-premade-voice/v1/session
 */
export function deleteLolPremadeVoiceV1Session(): Promise<unknown> {
  return del('/lol-premade-voice/v1/session')
}

/**
 * PostLolPremadeVoiceV1Session
 * @url POST /lol-premade-voice/v1/session
 */
export function postLolPremadeVoiceV1Session(): Promise<unknown> {
  return post('/lol-premade-voice/v1/session')
}

/**
 * GetLolPremadeVoiceV1Settings
 * @url GET /lol-premade-voice/v1/settings
 */
export function getLolPremadeVoiceV1Settings(): Promise<unknown> {
  return get('/lol-premade-voice/v1/settings')
}

/**
 * PostLolPremadeVoiceV1SettingsReset
 * @url POST /lol-premade-voice/v1/settings/reset
 */
export function postLolPremadeVoiceV1SettingsReset(): Promise<unknown> {
  return post('/lol-premade-voice/v1/settings/reset')
}
