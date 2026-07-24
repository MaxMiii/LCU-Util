/**
 * Npetutorialpath API 模块 (自动生成)
 * 6 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolNpeTutorialPathV1RewardsChamp
 * @url GET /lol-npe-tutorial-path/v1/rewards/champ
 */
export function getLolNpeTutorialPathV1RewardsChamp(): Promise<unknown> {
  return get('/lol-npe-tutorial-path/v1/rewards/champ')
}

/**
 * GetLolNpeTutorialPathV1Settings
 * @url GET /lol-npe-tutorial-path/v1/settings
 */
export function getLolNpeTutorialPathV1Settings(): Promise<unknown> {
  return get('/lol-npe-tutorial-path/v1/settings')
}

/**
 * PutLolNpeTutorialPathV1Settings
 * @url PUT /lol-npe-tutorial-path/v1/settings
 */
export function putLolNpeTutorialPathV1Settings(): Promise<unknown> {
  return put('/lol-npe-tutorial-path/v1/settings')
}

/**
 * GetLolNpeTutorialPathV1Tutorials
 * @url GET /lol-npe-tutorial-path/v1/tutorials
 */
export function getLolNpeTutorialPathV1Tutorials(): Promise<unknown> {
  return get('/lol-npe-tutorial-path/v1/tutorials')
}

/**
 * PatchLolNpeTutorialPathV1TutorialsInit
 * @url PATCH /lol-npe-tutorial-path/v1/tutorials/init
 */
export function patchLolNpeTutorialPathV1TutorialsInit(): Promise<unknown> {
  return patch('/lol-npe-tutorial-path/v1/tutorials/init')
}

/**
 * PutLolNpeTutorialPathV1TutorialsByTutorialIdView
 * @url PUT /lol-npe-tutorial-path/v1/tutorials/{tutorialId}/view
 * @param params - 路径参数: { tutorialId }
 */
export function putLolNpeTutorialPathV1TutorialsByTutorialIdView(params: { tutorialId: string | number }): Promise<unknown> {
  const { tutorialId } = params

  return put(`/lol-npe-tutorial-path/v1/tutorials/${tutorialId}/view`)
}
