/**
 * Honorv2 API 模块 (自动生成)
 * 16 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolHonorV2V1Ballot
 * @url GET /lol-honor-v2/v1/ballot
 */
export function getLolHonorV2V1Ballot(): Promise<unknown> {
  return get('/lol-honor-v2/v1/ballot')
}

/**
 * GetLolHonorV2V1Config
 * @url GET /lol-honor-v2/v1/config
 */
export function getLolHonorV2V1Config(): Promise<unknown> {
  return get('/lol-honor-v2/v1/config')
}

/**
 * PostLolHonorV2V1HonorPlayer
 * @url POST /lol-honor-v2/v1/honor-player
 */
export function postLolHonorV2V1HonorPlayer(): Promise<unknown> {
  return post('/lol-honor-v2/v1/honor-player')
}

/**
 * GetLolHonorV2V1LateRecognition
 * @url GET /lol-honor-v2/v1/late-recognition
 */
export function getLolHonorV2V1LateRecognition(): Promise<unknown> {
  return get('/lol-honor-v2/v1/late-recognition')
}

/**
 * PostLolHonorV2V1LateRecognitionAck
 * @url POST /lol-honor-v2/v1/late-recognition/ack
 */
export function postLolHonorV2V1LateRecognitionAck(): Promise<unknown> {
  return post('/lol-honor-v2/v1/late-recognition/ack')
}

/**
 * GetLolHonorV2V1LatestEligibleGame
 * @url GET /lol-honor-v2/v1/latest-eligible-game
 */
export function getLolHonorV2V1LatestEligibleGame(): Promise<unknown> {
  return get('/lol-honor-v2/v1/latest-eligible-game')
}

/**
 * GetLolHonorV2V1LevelChange
 * @url GET /lol-honor-v2/v1/level-change
 */
export function getLolHonorV2V1LevelChange(): Promise<unknown> {
  return get('/lol-honor-v2/v1/level-change')
}

/**
 * PostLolHonorV2V1LevelChangeAck
 * @url POST /lol-honor-v2/v1/level-change/ack
 */
export function postLolHonorV2V1LevelChangeAck(): Promise<unknown> {
  return post('/lol-honor-v2/v1/level-change/ack')
}

/**
 * GetLolHonorV2V1MutualHonor
 * @url GET /lol-honor-v2/v1/mutual-honor
 */
export function getLolHonorV2V1MutualHonor(): Promise<unknown> {
  return get('/lol-honor-v2/v1/mutual-honor')
}

/**
 * PostLolHonorV2V1MutualHonorAck
 * @url POST /lol-honor-v2/v1/mutual-honor/ack
 */
export function postLolHonorV2V1MutualHonorAck(): Promise<unknown> {
  return post('/lol-honor-v2/v1/mutual-honor/ack')
}

/**
 * GetLolHonorV2V1Profile
 * @url GET /lol-honor-v2/v1/profile
 */
export function getLolHonorV2V1Profile(): Promise<unknown> {
  return get('/lol-honor-v2/v1/profile')
}

/**
 * GetLolHonorV2V1Recognition
 * @url GET /lol-honor-v2/v1/recognition
 */
export function getLolHonorV2V1Recognition(): Promise<unknown> {
  return get('/lol-honor-v2/v1/recognition')
}

/**
 * GetLolHonorV2V1RewardGranted
 * @url GET /lol-honor-v2/v1/reward-granted
 */
export function getLolHonorV2V1RewardGranted(): Promise<unknown> {
  return get('/lol-honor-v2/v1/reward-granted')
}

/**
 * PostLolHonorV2V1RewardGrantedAck
 * @url POST /lol-honor-v2/v1/reward-granted/ack
 */
export function postLolHonorV2V1RewardGrantedAck(): Promise<unknown> {
  return post('/lol-honor-v2/v1/reward-granted/ack')
}

/**
 * GetLolHonorV2V1TeamChoices
 * @url GET /lol-honor-v2/v1/team-choices
 */
export function getLolHonorV2V1TeamChoices(): Promise<unknown> {
  return get('/lol-honor-v2/v1/team-choices')
}

/**
 * GetLolHonorV2V1VoteCompletion
 * @url GET /lol-honor-v2/v1/vote-completion
 */
export function getLolHonorV2V1VoteCompletion(): Promise<unknown> {
  return get('/lol-honor-v2/v1/vote-completion')
}
