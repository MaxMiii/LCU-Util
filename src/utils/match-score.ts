/**
 * ===================================================================
 * 对局评分工具 (src/utils/match-score.ts)
 * ===================================================================
 * 基于 KDA + 胜负对每局比赛进行打分（0-10），并给出标签：
 *   - MVP  （胜利，≥ 8.0 分）
 *   - SVP  （失败，≥ 7.0 分，且击杀未达高击杀阈值时不显示）
 *   - 甩锅 （失败，< 3.0 分，且击杀未达高击杀阈值）
 *   胜利对局不使用甩锅，失败对局高击杀（≥ 8）时不显示任何标签
 * ===================================================================
 */

export interface MatchStats {
  win: boolean | string
  kills: number
  deaths: number
  assists: number
}

/**
 * 判断对局是否胜利（兼容 boolean 和 string 类型）
 */
export function isWin(win: boolean | string | undefined): boolean {
  if (win === undefined || win === null) return false
  if (typeof win === 'boolean') return win
  return win.toLowerCase() === 'win' || win.toLowerCase() === 'victory'
}

/**
 * 计算本局评分（0-10 分，一位小数）
 * 公式：((kills × 1.0 + assists × 0.7) / max(deaths, 1)) ，上限 10，胜利 +0.5
 * - 击杀权重最高，助攻次之
 * - 死亡数避免除零
 * - 胜利有额外加分
 */
export function calculateScore(stats: MatchStats): number {
  const { kills, deaths, assists, win } = stats
  const safeDeaths = Math.max(deaths, 1)
  const raw = (kills * 1.0 + assists * 0.7) / safeDeaths
  let score = Math.min(raw, 10)
  // 胜利加成
  if (isWin(win)) {
    score = Math.min(score + 0.5, 10)
  }
  return Math.round(score * 10) / 10
}

export type MatchTag = 'MVP' | 'SVP' | '甩锅' | null

/** 高击杀阈值：失败时击杀 ≥ 此值则不显示任何标签 */
const HIGH_KILL_THRESHOLD = 8
/** MVP 评分门槛 */
const MVP_SCORE = 8.0
/** SVP 评分门槛 */
const SVP_SCORE = 7.0
/** 甩锅评分门槛（低于此值） */
const BLAME_SCORE = 3.0

/**
 * 根据评分、胜负、击杀数获取标签
 * @param score  评分
 * @param isWin  是否胜利
 * @param kills  击杀数
 */
export function getMatchTag(score: number, win: boolean, kills: number): MatchTag {
  if (win) {
    // 胜利：评分达标 → MVP，否则无标签（胜利不甩锅）
    return score >= MVP_SCORE ? 'MVP' : null
  }

  // 失败：高击杀说明个人尽力了，不显示任何标签
  if (kills >= HIGH_KILL_THRESHOLD) return null

  // 失败：评分高 → SVP
  if (score >= SVP_SCORE) return 'SVP'
  // 失败：评分低 → 甩锅
  if (score < BLAME_SCORE) return '甩锅'

  return null
}

/**
 * 格式化评分显示
 */
export function formatScore(score: number): string {
  return score.toFixed(1)
}

/**
 * 获取用于 CSS 的标签 class 名
 */
export function getTagClass(tag: MatchTag): string {
  if (!tag) return ''
  const map: Record<string, string> = {
    MVP: 'tag-mvp',
    SVP: 'tag-svp',
    '甩锅': 'tag-blame',
  }
  return map[tag] || ''
}

export interface MatchDisplay {
  tag: MatchTag
  score: number
  displayText: string
  tagClass: string
}

/**
 * 获取对局的完整展示信息（标签 + 评分文本 + CSS 类名）
 */
export function getMatchDisplay(stats: MatchStats | undefined): MatchDisplay {
  if (!stats) {
    return { tag: null, score: 0, displayText: '0.0', tagClass: '' }
  }
  const score = calculateScore(stats)
  const w = isWin(stats.win)
  const tag = getMatchTag(score, w, stats.kills)
  return {
    tag,
    score,
    displayText: tag ? `${tag} ${formatScore(score)}` : formatScore(score),
    tagClass: getTagClass(tag),
  }
}
