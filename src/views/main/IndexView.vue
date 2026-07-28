<template>
  <div class="index-view">
    <!-- 加载态：Skeleton 骨架屏 -->
    <div v-if="loading" class="profile-card">
      <el-skeleton animated>
        <template #template>
          <div class="skeleton-content">
            <el-skeleton-item variant="circle" style="width: 72px; height: 72px" />
            <div class="skeleton-lines">
              <el-skeleton-item variant="text" style="width: 60%; height: 18px" />
              <el-skeleton-item variant="text" style="width: 40%; height: 14px" />
              <el-skeleton-item variant="text" style="width: 90%; height: 10px" />
            </div>
          </div>
        </template>
      </el-skeleton>
    </div>

    <!-- 内容态 -->
    <div v-if="summonerData && !loading" class="profile-card">
      <!-- 上部：个人信息 -->
      <div class="profile-main">
        <el-avatar :size="72" class="profile-avatar">
          <img :src="avatarUrl" :alt="$t('index.avatar')" />
        </el-avatar>
        <div class="profile-info">
          <h2 class="profile-name">{{ summonerData.gameName || summonerData.displayName }}</h2>
          <div class="profile-level">{{ $t('summoner.level', { level: summonerData.summonerLevel }) }}</div>
          <div class="profile-xp">
            <el-progress
              :percentage="xpPercentage"
              :stroke-width="3"
              :show-text="false"
              color="#4a9eff"
              :trail-color="'rgba(255,255,255,0.08)'"
            />
            <span class="xp-label">
              {{ $t('summoner.exp', { current: summonerData.xpSinceLastLevel, max: summonerData.xpUntilNextLevel }) }}
            </span>
          </div>
        </div>
      </div>

      <!-- 下部：实时状态 -->
      <div v-if="chatInfo" class="status-section">
        <div class="status-section__header">
          <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" style="margin-right:6px;vertical-align:-2px">
            <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 12.5A5.5 5.5 0 118 2.5a5.5 5.5 0 010 11zM7.5 4h1v5h-1V4zm0 6h1v1h-1v-1z"/>
          </svg>
          {{ $t('status.title') }}
        </div>
        <div class="status-section__body">
          <div class="status-item">
            <span class="status-item__label">{{ $t('status.availability') }}</span>
            <span class="status-item__value">
              <span :class="['status-dot', 'status-dot--' + chatInfo.availability]"></span>
              {{ tAvailability(chatInfo.availability) }}
            </span>
          </div>
          <div v-if="chatInfo.statusMessage" class="status-item">
            <span class="status-item__label">{{ $t('status.message') }}</span>
            <span class="status-item__value status-item__value--msg">{{ chatInfo.statusMessage }}</span>
          </div>
          <div class="status-item">
            <span class="status-item__label">{{ $t('status.platform') }}</span>
            <span class="status-item__value">{{ tPlatform(chatInfo.platformId) }}</span>
          </div>
          <div v-if="chatInfo.lol?.gameStatus" class="status-item">
            <span class="status-item__label">{{ $t('status.gameStatus') }}</span>
            <span class="status-item__value">{{ tGameStatus(chatInfo.lol.gameStatus) }}</span>
          </div>
          <div v-if="chatInfo.lol?.gameMode" class="status-item">
            <span class="status-item__label">{{ $t('status.gameMode') }}</span>
            <span class="status-item__value">{{ tGameMode(chatInfo.lol.gameMode) }}</span>
          </div>
          <div v-if="chatInfo.lol?.gameQueueType" class="status-item">
            <span class="status-item__label">{{ $t('status.queueType') }}</span>
            <span class="status-item__value">{{ tQueue(chatInfo.lol.gameQueueType) }}</span>
          </div>
          <div v-if="chatInfo.lol?.rankedLeagueTier" class="status-item">
            <span class="status-item__label">{{ tQueue(chatInfo.lol.rankedLeagueQueue) }}</span>
            <span class="status-item__value">{{ tTier(chatInfo.lol.rankedLeagueTier) }} {{ chatInfo.lol.rankedLeagueDivision }}</span>
          </div>
        </div>
      </div>

      <!-- 评分趋势图 -->
      <div v-if="matchHistory.length" class="chart-section">
        <div class="chart-section__header">{{ $t('index.chartTitle') }}</div>
        <VChart :option="chartOption" autoresize class="score-chart" />
      </div>

      <!-- 最近比赛 -->
      <div v-if="matchHistory.length" class="match-section">
        <div class="match-section__header">{{ $t('match.recent') }}</div>
        <div class="match-list">
          <el-table
            :data="matchHistory"
            size="small"
            style="width: 100%"
            row-class-name="match-item"
          >
            <el-table-column :label="$t('match.col.time')" min-width="50" align="left">
              <template #default="{ row }">
                <span class="match-item__time">{{ formatTime(row.gameCreationDate) }}</span>
              </template>
            </el-table-column>
            <el-table-column :label="$t('match.col.champion')" min-width="50">
              <template #default="{ row }">
                <div class="match-item__champ">
                  <img
                    v-if="row.participants[0]?.championId && championNameMap[row.participants[0].championId]"
                    :src="'https://ddragon.leagueoflegends.com/cdn/16.14.1/img/champion/' + championNameMap[row.participants[0].championId].key + '.png'"
                    class="match-item__champ-icon"
                  />
                  <span class="match-item__champ-name">{{ championNameMap[row.participants[0]?.championId]?.name || row.participants[0]?.championId }}</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column :label="$t('match.col.gameMode')" width="80" align="center">
              <template #default="{ row }">
                <span class="match-item__mode">{{ tGameMode(row.gameMode) }}</span>
              </template>
            </el-table-column>
            <el-table-column :label="$t('match.col.result')" width="50" align="center">
              <template #default="{ row }">
                <span :class="['match-item__result', isWin(row.participants[0]?.stats?.win) ? 'match-win' : 'match-lose']">
                  {{ isWin(row.participants[0]?.stats?.win) ? $t('match.win') : $t('match.lose') }}
                </span>
              </template>
            </el-table-column>
            <el-table-column :label="$t('match.col.kda')" width="150" align="center">
              <template #default="{ row }">
                <span class="match-item__kda">
                  {{ row.participants[0]?.stats?.kills }}/{{ row.participants[0]?.stats?.deaths }}/{{ row.participants[0]?.stats?.assists }}
                </span>
              </template>
            </el-table-column>
            <el-table-column :label="$t('match.col.score')" width="100" align="center">
              <template #default="{ row }">
                <span v-if="row.participants[0]?.stats" class="match-item__score-wrap">
                  <span v-if="getMatchDisplay(row.participants[0]?.stats).tag" :class="['match-tag', getMatchDisplay(row.participants[0]?.stats).tagClass]">
                    {{ getMatchDisplay(row.participants[0]?.stats).displayText }}
                  </span>
                  <span v-else class="match-score-num">{{ getMatchDisplay(row.participants[0]?.stats).displayText }}</span>
                </span>
              </template>
            </el-table-column>
            <el-table-column :label="$t('match.col.duration')" width="100" align="center">
              <template #default="{ row }">
                <span class="match-item__duration">{{ formatDuration(row.gameDuration) }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>

    <!-- 错误/空态 -->
  </div>
</template>

<script setup lang="ts">
/**
 * IndexView 主页
 * - 页面创建时通过 LCU 获取当前召唤师信息
 * - 展示头像、等级、经验值进度
 * - 使用 Skeleton 骨架屏等待加载
 */
import { ref, computed, onMounted } from 'vue'
import { useTranslation } from 'i18next-vue'
import { createLcuClient, get, getLcuBaseUrl } from '@/utils/lcu-request'
import { useChatStore, type SummonerData } from '@/stores/chat-store'
import { getMatchDisplay, isWin, calculateScore } from '@/utils/match-score'
import VChart from 'vue-echarts'
import 'echarts'

const { t } = useTranslation()

const chatStore = useChatStore()
const chatInfo = computed(() => chatStore.chatInfo)
const summonerData = computed(() => chatStore.summonerData)
const matchHistory = computed(() => chatStore.matchHistory)
const championNameMap = computed(() => chatStore.championNameMap)

/** 最近20场评分趋势图配置 */
const chartOption = computed(() => {
  const matches = matchHistory.value
  if (!matches.length) return {}

  const labels: string[] = []
  const scores: number[] = []
  const colors: string[] = []
  const avgScores: number[] = []

  let totalScore = 0
  for (let i = matches.length - 1; i >= 0; i--) {
    const m = matches[i]
    const stats = m.participants[0]?.stats
    const score = stats ? calculateScore(stats) : 0
    const win = stats ? isWin(stats.win) : false

    labels.push('')
    scores.push(score)
    colors.push(win ? '#22c55e' : '#ef4444')
    totalScore += score
  }
  const avg = totalScore / scores.length
  scores.forEach(() => avgScores.push(Math.round(avg * 10) / 10))

  return {
    tooltip: {
      trigger: 'item',
      formatter: (params: any) => {
        const match = matches[matches.length - 1 - params.dataIndex]
        const stats = match?.participants[0]?.stats
        const win = stats ? isWin(stats.win) : false
        return t('index.tooltip', {
          index: params.dataIndex + 1,
          score: params.value,
          result: win ? t('match.win') : t('match.lose'),
          kills: stats?.kills || 0,
          deaths: stats?.deaths || 0,
          assists: stats?.assists || 0,
        })
      },
    },
    grid: { left: 40, right: 20, top: 25, bottom: 25 },
    xAxis: {
      type: 'category',
      data: labels,
      axisLabel: { show: false },
      axisLine: { show: false },
      axisTick: { show: false },
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 10,
      splitLine: { lineStyle: { color: 'rgba(255,255,255,0.06)' } },
      axisLabel: { color: 'var(--text-tertiary)', fontSize: 10 },
    },
    series: [
      {
        type: 'line',
        data: scores.map((v, i) => ({
          value: v,
          itemStyle: { color: colors[i] },
        })),
        smooth: true,
        showSymbol: true,
        symbol: 'circle',
        symbolSize: 6,
        lineStyle: { width: 2, color: 'var(--accent)' },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(74, 158, 255, 0.25)' },
              { offset: 1, color: 'rgba(74, 158, 255, 0)' },
            ],
          },
        },
      },
      {
        type: 'line',
        data: avgScores.map(v => ({ value: v })),
        smooth: true,
        showSymbol: false,
        lineStyle: { width: 1, type: 'dashed', color: 'rgba(255,255,255,0.2)' },
        z: 1,
      },
    ],
  }
})

/** 背景装饰数据接口 */
interface BackdropData {
  backdropImage: string
}

// 17729558240

const loading = ref(true)

/** LCU 连接信息缓存 */
let lcuBaseUrl = ''
let lcuAuthHeader = ''

/** 头像 URL（来自 /lol-chat/v1/me 的 icon 字段，支持 WebSocket 实时更新） */
const avatarUrl = computed(() => {
  const iconId = chatInfo.value?.icon
  if (!iconId) return ''
  return `https://ddragon.leagueoflegends.com/cdn/16.14.1/img/profileicon/${iconId}.png`
})

/** 经验值百分比 */
const xpPercentage = computed(() => {
  if (!summonerData.value || summonerData.value.xpUntilNextLevel === 0) return 0
  return Math.round((summonerData.value.xpSinceLastLevel / summonerData.value.xpUntilNextLevel) * 100)
})


// ==============================
// 翻译映射
// ==============================

const availabilityMap: Record<string, string> = {
  chat: t('availability.chat'),
  away: t('availability.away'),
  mobile: t('availability.mobile'),
  dnd: t('availability.dnd'),
  offline: t('availability.offline'),
}

const tierMap: Record<string, string> = {
  IRON: t('tier.IRON'),
  BRONZE: t('tier.BRONZE'),
  SILVER: t('tier.SILVER'),
  GOLD: t('tier.GOLD'),
  PLATINUM: t('tier.PLATINUM'),
  DIAMOND: t('tier.DIAMOND'),
  MASTER: t('tier.MASTER'),
  GRANDMASTER: t('tier.GRANDMASTER'),
  CHALLENGER: t('tier.CHALLENGER'),
}

const queueMap: Record<string, string> = {
  RANKED_SOLO_5x5: t('queue.RANKED_SOLO_5x5'),
  RANKED_FLEX_SR: t('queue.RANKED_FLEX_SR'),
  RANKED_TFT: t('queue.RANKED_TFT'),
}

const platformMap: Record<string, string> = {
  NA1: t('platform.NA1'),
  EUW1: t('platform.EUW1'),
  EUN1: t('platform.EUN1'),
  KR: t('platform.KR'),
  BR1: t('platform.BR1'),
  JP1: t('platform.JP1'),
  RU: t('platform.RU'),
  OC1: t('platform.OC1'),
  TR1: t('platform.TR1'),
  LA1: t('platform.LA1'),
  LA2: t('platform.LA2'),
  TENCENT: t('platform.TENCENT'),
}

const gameStatusMap: Record<string, string> = {
  outOfGame: t('gameStatus.outOfGame'),
  inGame: t('gameStatus.inGame'),
  championSelect: t('gameStatus.championSelect'),
  inQueue: t('gameStatus.inQueue'),
  inLobby: t('gameStatus.inLobby'),
  inTeamBuilder: t('gameStatus.inTeamBuilder'),
}

const gameModeMap: Record<string, string> = {
  CLASSIC: t('gameMode.CLASSIC'),
  TFT: t('gameMode.TFT'),
  ARAM: t('gameMode.ARAM'),
  KIWI: t('gameMode.KIWI'),
  CHERRY: t('gameMode.CHERRY'),
}

function tAvailability(val: string): string {
  return availabilityMap[val] || val
}

function tTier(val?: string): string {
  return val ? (tierMap[val] || val) : '-'
}

function tQueue(val?: string): string {
  return val ? (queueMap[val] || val) : '-'
}

function tPlatform(val?: string): string {
  return val ? (platformMap[val] || val) : '-'
}

function tGameStatus(val?: string): string {
  return val ? (gameStatusMap[val] || val) : '-'
}
function tGameMode(val?: string): string {
  return val ? (gameModeMap[val] || val) : '-'
}

/** 格式化比赛时间（MM-DD HH:mm） */
function formatTime(dateStr: string): string {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  const hours = String(d.getHours()).padStart(2, '0')
  const mins = String(d.getMinutes()).padStart(2, '0')
  return `${month}-${day} ${hours}:${mins}`
}

/** 格式化对局时长（秒 → mm:ss） */
function formatDuration(seconds: number): string {
  if (!seconds) return ''
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

/** 初始化页面数据（获取背景装饰图） */
async function fetchSummonerInfo(): Promise<void> {
  if (!window.electronAPI) {
    console.warn('[IndexView] 非 Electron 环境，无法获取 LCU 信息')
    loading.value = false
    return
  }

  try {
    const info = await window.electronAPI.getLeagueClientInfo()
    if (info.error || !info.port || !info.authToken) {
      console.warn('[IndexView] LCU 未连接:', info.error)
      loading.value = false
      return
    }

    createLcuClient(info.port, info.authToken)

    // 缓存 LCU 连接信息，供后续图片请求使用
    lcuBaseUrl = getLcuBaseUrl()
    lcuAuthHeader = 'Basic ' + btoa('riot:' + info.authToken)

    // 确保 summonerData 可用（store 异步加载可能还未完成）
    if (!summonerData.value) {
      try {
        const data = await get<SummonerData>('/lol-summoner/v1/current-summoner')
        chatStore.$patch({ summonerData: data })
      } catch (e) {
        console.warn('[IndexView] 补充获取召唤师数据失败:', e)
      }
    }

    // 获取背景装饰图元信息（仅首次，store 持久化）
    if (!chatStore.backdropImage) {
      try {
        const backdropRes = await fetch(
          `${lcuBaseUrl}/lol-collections/v1/inventories/${summonerData.value?.summonerId}/backdrop`,
          { headers: { Authorization: lcuAuthHeader } },
        )
        if (backdropRes.ok) {
          const backdropData: BackdropData = await backdropRes.json()
          if (backdropData.backdropImage) {
            // 通过 LCU 请求实际的图片资源（带认证），转为 blob URL
            chatStore.fetchBackdropImage(backdropData.backdropImage, lcuBaseUrl, lcuAuthHeader)
          }
        }
      } catch (e) {
        console.warn('[IndexView] 获取背景装饰图失败:', e)
      }
    }

    // 注册背景更换监听（每次进入页面都执行，确保监听器存在）
    if (summonerData.value?.summonerId) {
      const backdropUri = `/lol-collections/v1/inventories/${summonerData.value.summonerId}/backdrop`
      chatStore.registerBackdropListener(backdropUri, async () => {
        try {
          const backdropRes = await fetch(
            `${lcuBaseUrl}${backdropUri}`,
            { headers: { Authorization: lcuAuthHeader } },
          )
          if (backdropRes.ok) {
            const backdropData: BackdropData = await backdropRes.json()
            if (backdropData.backdropImage) {
              chatStore.fetchBackdropImage(backdropData.backdropImage, lcuBaseUrl, lcuAuthHeader)
            }
          }
        } catch (e) {
          console.warn('[IndexView] 背景变更刷新失败:', e)
        }
      })
    }
  } catch (e) {
    console.error('[IndexView] 获取召唤师信息异常:', e)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  // 获取召唤师信息 + 背景图 + 注册监听（store 持久化，不会重复请求）
  fetchSummonerInfo()

  // 加载英雄名称映射 & 最近比赛（store 内防重复）
  chatStore.fetchChampionNameMap()
  chatStore.fetchMatchHistory()
})
</script>

<style lang="scss" scoped>
.index-view {
  width: 100%;
  height: 100%;
  display: flex;
  // align-items: center;
  // margin-top: 40px;
  justify-content: center;
  overflow: hidden;
}

/* ==============================
 * 综合信息卡片
 * ============================== */
.profile-card {
  width: 60%;
  max-width: 92%;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 14px;
  padding: 24px 28px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: var(--card-shadow);
  overflow: hidden auto;
  max-height: calc(100vh - 140px);
  // height: 350px;
}

/* card 内部滚动条：不滚动时透明，滚动时显示 */
.profile-card::-webkit-scrollbar {
  width: 4px;
}

.profile-card::-webkit-scrollbar-track {
  background: transparent;
}

.profile-card::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius: 2px;
  transition: background 0.2s ease;
}

.profile-card:hover::-webkit-scrollbar-thumb,
.profile-card:active::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, rgba(74, 144, 226, 0.4), rgba(123, 104, 238, 0.35));
}

/* 骨架屏布局 */
.skeleton-content {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
}

.skeleton-lines {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* ==============================
 * 上部：个人信息
 * ============================== */
.profile-main {
  display: flex;
  align-items: center;
  gap: 18px;
}

.profile-avatar {
  flex-shrink: 0;
  border: 2px solid var(--accent);
  box-shadow: 0 0 14px var(--accent-alpha-03);
}

.profile-info {
  flex: 1;
  min-width: 0;
}

.profile-name {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.profile-level {
  font-size: 12px;
  color: var(--accent);
  font-weight: 500;
  margin-top: 2px;
}

.profile-xp {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 6px;
  width: 30%;
}

.profile-xp .xp-label {
  font-size: 10px;
  color: var(--text-tertiary);
}

/* ==============================
 * 下部：实时状态
 * ============================== */
.status-section {
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid var(--card-border);
}

.status-section__header {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 14px;
}

.status-section__body {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.status-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.status-item__label {
  font-size: 12px;
  color: var(--text-tertiary);
}

.status-item__value {
  font-size: 13px;
  color: var(--text-primary);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 5px;
}

.status-item__value--msg {
  max-width: 240px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 在线状态指示点 */
.status-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.status-dot--chat    { background: #22c55e; }
.status-dot--away    { background: #f59e0b; }
.status-dot--mobile  { background: #3b82f6; }
.status-dot--dnd     { background: #ef4444; }
.status-dot--offline { background: #9ca3af; }

/* ==============================
 * 最近比赛
 * ============================== */
.match-section {
  margin-top: 10px;
  padding-top: 14px;
  border-top: 1px solid var(--card-border);
}

.match-section__header {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.match-list {
  // el-table dark glass overrides
  :deep(.el-table) {
    --el-table-header-bg-color: transparent;
    --el-table-tr-bg-color: transparent;
    --el-table-border-color: transparent;
    --el-table-row-hover-bg-color: var(--glass-bg-hover);
    background: transparent;
    color: var(--text-primary);
    font-size: 12px;
  }

  :deep(.el-table__cell) {
    border-bottom: none !important;
  }

  :deep(.el-table__header th.el-table__cell) {
    background: transparent !important;
    color: var(--text-tertiary);
    font-weight: 600;
    font-size: 11px;
  }

  :deep(.el-table__body td.el-table__cell) {
    padding: 4px 0;
    border: none;
  }

  :deep(.el-table__body-wrapper) {
    &::-webkit-scrollbar {
      width: 3px;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--input-border);
      border-radius: 2px;
    }
  }
}

.match-item {
  transition: background 0.15s;
}

.match-item__time {
  color: var(--text-tertiary);
  font-size: 11px;
  white-space: nowrap;
}

.match-item__champ {
  display: flex;
  align-items: center;
  gap: 5px;
}

.match-item__champ-icon {
  width: 18px;
  height: 18px;
  border-radius: 3px;
  flex-shrink: 0;
}

.match-item__champ-name {
  color: var(--text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.match-item__result {
  font-weight: 600;
  text-align: center;
}

.match-win  { color: #22c55e; }
.match-lose { color: #ef4444; }

.match-item__kda {
  color: var(--text-secondary);
  text-align: center;
  white-space: nowrap;
}

.match-item__duration {
  color: var(--text-tertiary);
  text-align: right;
  font-size: 11px;
  white-space: nowrap;
}

.match-item__mode {
  color: var(--text-secondary);
  font-size: 11px;
  white-space: nowrap;
}

/* 评分 & 标签 */
.match-item__score-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}

.match-tag {
  display: inline-block;
  padding: 1px 5px;
  font-size: 10px;
  font-weight: 700;
  border-radius: 4px;
  line-height: 1.4;
}

.tag-mvp {
  color: #fff;
  background: #e6b422;
}

.tag-svp {
  color: #fff;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
}

.tag-blame {
  color: #fff;
  background: rgba(239, 68, 68, 0.85);
}

.match-score-num {
  color: var(--text-tertiary);
  font-size: 11px;
  font-weight: 500;
}

/* ==============================
 * 评分趋势图
 * ============================== */
.chart-section {
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px solid var(--card-border);
}

.chart-section__header {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.score-chart {
  width: 100%;
  height: 200px;
}
</style>
