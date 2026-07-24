/**
 * Nperewards API 模块 (自动生成)
 * 6 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * PostLolNpeRewardsV1ChallengesOpt
 * @url POST /lol-npe-rewards/v1/challenges/opt
 */
export function postLolNpeRewardsV1ChallengesOpt(): Promise<unknown> {
  return post('/lol-npe-rewards/v1/challenges/opt')
}

/**
 * GetLolNpeRewardsV1ChallengesProgress
 * @url GET /lol-npe-rewards/v1/challenges/progress
 */
export function getLolNpeRewardsV1ChallengesProgress(): Promise<unknown> {
  return get('/lol-npe-rewards/v1/challenges/progress')
}

/**
 * GetLolNpeRewardsV1LevelRewards
 * @url GET /lol-npe-rewards/v1/level-rewards
 */
export function getLolNpeRewardsV1LevelRewards(): Promise<unknown> {
  return get('/lol-npe-rewards/v1/level-rewards')
}

/**
 * GetLolNpeRewardsV1LevelRewardsState
 * @url GET /lol-npe-rewards/v1/level-rewards/state
 */
export function getLolNpeRewardsV1LevelRewardsState(): Promise<unknown> {
  return get('/lol-npe-rewards/v1/level-rewards/state')
}

/**
 * GetLolNpeRewardsV1LoginRewards
 * @url GET /lol-npe-rewards/v1/login-rewards
 */
export function getLolNpeRewardsV1LoginRewards(): Promise<unknown> {
  return get('/lol-npe-rewards/v1/login-rewards')
}

/**
 * GetLolNpeRewardsV1LoginRewardsState
 * @url GET /lol-npe-rewards/v1/login-rewards/state
 */
export function getLolNpeRewardsV1LoginRewardsState(): Promise<unknown> {
  return get('/lol-npe-rewards/v1/login-rewards/state')
}
