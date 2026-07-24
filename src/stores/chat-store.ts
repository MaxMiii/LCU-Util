/**
 * 全局聊天状态 Store (Pinia)
 * ==============================
 * 独立于页面生命周期，订阅 /lol-chat/v1/me 事件
 * 切换页面时订阅不会丢失
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { lcuEventBus } from '../utils/lcu-event-bus'
import { createLcuClient, get } from '../utils/lcu-request'

export interface ChatData {
  availability: string
  statusMessage?: string
  gameName?: string
  gameTag?: string
  icon?: number
  name?: string
  platformId?: string
  lol?: {
    level?: number
    rankedLeagueDivision?: string
    rankedLeagueQueue?: string
    rankedLeagueTier?: string
    gameMode?: string
    gameQueueType?: string
    gameStatus?: string
  }
}

export interface SummonerData {
  displayName: string
  gameName: string
  tagLine: string
  summonerId: number
  profileIconId: number
  summonerLevel: number
  xpSinceLastLevel: number
  xpUntilNextLevel: number
}

export interface MatchStats {
  win: boolean | string
  kills: number
  deaths: number
  assists: number
}

export interface MatchParticipant {
  championId: number
  stats: MatchStats
}

export interface MatchEntry {
  gameCreationDate: string
  gameDuration: number
  participants: MatchParticipant[]
}

interface MatchHistoryResponse {
  games: {
    games: MatchEntry[]
  }
}

export const useChatStore = defineStore('chat', () => {
  const chatInfo = ref<ChatData | null>(null)
  const summonerData = ref<SummonerData | null>(null)
  const loaded = ref(false)
  const backdropImage = ref('')

  let removeListener: (() => void) | null = null
  let removeSummonerListener: (() => void) | null = null
  let removeBackdropListener: (() => void) | null = null
  let prevBackdropBlobUrl = ''

  const matchHistory = ref<MatchEntry[]>([])
  const championNameMap = ref<Record<number, { key: string; name: string }>>({})

  // ============ localStorage 缓存 ============
  const SUMMONER_CACHE_KEY = 'lol_summoner_cache'

  function saveSummonerCache(data: SummonerData): void {
    try {
      localStorage.setItem(SUMMONER_CACHE_KEY, JSON.stringify(data))
    } catch {
      // 存储空间不足时静默失败
    }
  }

  function loadSummonerCache(): SummonerData | null {
    try {
      const raw = localStorage.getItem(SUMMONER_CACHE_KEY)
      return raw ? (JSON.parse(raw) as SummonerData) : null
    } catch {
      return null
    }
  }

  // 启动时从缓存恢复 summonerData，让 UI 可以立即展示
  const cached = loadSummonerCache()
  if (cached) {
    summonerData.value = cached
  }

  /** 从 LCU API 拉取初始数据 */
  async function fetchChatData(): Promise<void> {
    try {
      const res = await window.electronAPI?.getLeagueClientInfo()
      if (!res || res.error || !res.port || !res.authToken) return
      createLcuClient(res.port, res.authToken)
      const data = await get<ChatData>('/lol-chat/v1/me')
      if (data) {
        chatInfo.value = data as ChatData
      }
    } catch {
      // 静默失败，等 WebSocket 事件推送
    } finally {
      loaded.value = true
    }
  }

  /** 从 LCU API 拉取召唤师初始数据 */
  async function fetchSummonerData(): Promise<void> {
    try {
      const data = await get<SummonerData>('/lol-summoner/v1/current-summoner')
      if (data) {
        summonerData.value = data
        saveSummonerCache(data)
      }
    } catch {
      // 静默失败，等 WebSocket 事件推送
    }
  }

  /** 启动：拉取初始数据 + 注册 WebSocket 实时监听 */
  function start(): void {
    if (removeListener && removeSummonerListener) return // 防止重复注册

    fetchChatData()
    fetchSummonerData()

    removeListener = lcuEventBus.on('/lol-chat/v1/me', (data) => {
      if (data && typeof data === 'object') {
        chatInfo.value = {
          ...chatInfo.value,
          ...Object.fromEntries(
            Object.entries(data).filter(([_, v]) => v != null)
          ),
        } as ChatData
      }
    })

    // 同时监听召唤师数据变更（等级、经验等）
    removeSummonerListener = lcuEventBus.on('/lol-summoner/v1/current-summoner', (data) => {
      if (data && typeof data === 'object') {
        summonerData.value = data as SummonerData
        saveSummonerCache(data as SummonerData)
      }
    })
  }

  /** 停止：取消 WebSocket 监听 */
  function stop(): void {
    removeListener?.()
    removeListener = null
    removeSummonerListener?.()
    removeSummonerListener = null
    removeBackdropListener?.()
    removeBackdropListener = null
  }

  /** 释放上一个背景 blob URL */
  function revokeBackdropBlob(): void {
    if (prevBackdropBlobUrl) {
      URL.revokeObjectURL(prevBackdropBlobUrl)
      prevBackdropBlobUrl = ''
    }
  }

  /**
   * 通过 LCU 加载背景图片，转为 blob URL
   * @param imagePath  背景图路径（来自 backdrop API）
   * @param baseUrl    LCU 基础 URL
   * @param authHeader LCU Basic Auth 请求头
   */
  async function fetchBackdropImage(imagePath: string, baseUrl: string, authHeader: string): Promise<void> {
    if (!baseUrl || !authHeader) return
    try {
      revokeBackdropBlob()
      const imgRes = await fetch(`${baseUrl}${imagePath}`, {
        headers: { Authorization: authHeader },
      })
      if (imgRes.ok) {
        const blob = await imgRes.blob()
        const blobUrl = URL.createObjectURL(blob)
        backdropImage.value = blobUrl
        prevBackdropBlobUrl = blobUrl
      }
    } catch (e) {
      console.warn('[ChatStore] 加载背景图片失败:', e)
    }
  }

  /** 从 DDragon 加载英雄 ID → 名称映射（缓存，只加载一次） */
  async function fetchChampionNameMap(): Promise<void> {
    if (Object.keys(championNameMap.value).length > 0) return
    try {
      const res = await fetch('https://ddragon.leagueoflegends.com/cdn/16.14.1/data/zh_CN/champion.json')
      if (res.ok) {
        const json = await res.json()
        const map: Record<number, { key: string; name: string }> = {}
        for (const champ of Object.values(json.data) as any[]) {
          map[Number(champ.key)] = { key: champ.id, name: champ.name }
        }
        championNameMap.value = map
      }
    } catch (e) {
      console.warn('[ChatStore] 加载英雄名称映射失败:', e)
    }
  }

  /** 获取最近比赛记录（持久化，只请求一次） */
  async function fetchMatchHistory(): Promise<void> {
    if (matchHistory.value.length > 0) return
    try {
      const data = await get<MatchHistoryResponse>(
        '/lol-match-history/v1/products/lol/current-summoner/matches',
        { begIndex: 0, endIndex: 10 },
      )
      if (data?.games?.games) {
        matchHistory.value = data.games.games
      }
    } catch (e) {
      console.warn('[ChatStore] 获取比赛记录失败:', e)
    }
  }

  /**
   * 注册背景更换监听
   * @param uri 完整 backdrop URI，如 /lol-collections/v1/inventories/{summonerId}/backdrop
   * @param onChanged 背景变更时的回调
   */
  function registerBackdropListener(uri: string, onChanged: () => void): void {
    removeBackdropListener?.()
    removeBackdropListener = lcuEventBus.on(uri, () => {
      console.log('[ChatStore] 背景更换事件触发')
      onChanged()
    })
  }

  return {
    chatInfo, summonerData, loaded, backdropImage,
    matchHistory, championNameMap,
    start, stop, fetchBackdropImage,
    fetchChampionNameMap, fetchMatchHistory,
    registerBackdropListener,
  }
})
