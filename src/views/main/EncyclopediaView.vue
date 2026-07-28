<template>
  <div class="encyclopedia-view">
    <!-- 顶部菜单栏 -->
    <div class="top-menu">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        :class="['top-menu__btn', { 'top-menu__btn--active': activeTab === tab.key }]"
        @click="switchTab(tab.key)"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- 英雄列表 -->
    <div v-if="activeTab === 'champion' && !showCarousel" class="champion-list">
      <!-- 搜索框 -->
      <div class="search-bar">
        <svg class="search-icon" viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="8.5" cy="8.5" r="5.5"/>
          <path d="M12.5 12.5L17 17"/>
        </svg>
        <input
          v-model="searchQuery"
          class="search-input"
          type="text"
          :placeholder="$t('encyclopedia.searchChampion')"
        />
      </div>

      <div v-if="championLoading" class="loading-tip">{{ $t('encyclopedia.loadingChampion') }}</div>
      <div v-else-if="championError" class="loading-tip loading-tip--error">{{ championError }}</div>
      <div v-else-if="!filteredChampions.length" class="loading-tip">{{ $t('encyclopedia.noChampion') }}</div>
      <div v-else class="champion-grid">
        <div
          v-for="champion in filteredChampions"
          :key="champion.id"
          class="champion-card"
          @click="openSkinView(champion)"
        >
          <div class="champion-card__avatar">
            <img
              :src="`https://ddragon.leagueoflegends.com/cdn/16.14.1/img/champion/${champion.image.full}`"
              :alt="champion.name"
              class="champion-img"
            />
          </div>
          <span class="champion-card__name">{{ champion.name }}</span>
        </div>
      </div>
    </div>

    <!-- 物品列表 -->
    <div v-else-if="activeTab === 'item'" class="champion-list">
      <!-- 搜索框 -->
      <div class="search-bar">
        <svg class="search-icon" viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="8.5" cy="8.5" r="5.5"/>
          <path d="M12.5 12.5L17 17"/>
        </svg>
        <input
          v-model="itemSearchQuery"
          class="search-input"
          type="text"
          :placeholder="$t('encyclopedia.searchItem')"
        />
      </div>

      <div v-if="itemLoading" class="loading-tip">{{ $t('encyclopedia.loadingItem') }}</div>
      <div v-else-if="itemError" class="loading-tip loading-tip--error">{{ itemError }}</div>
      <template v-else>
        <!-- 地图分类 -->
        <div v-if="mapLoading" class="map-loading">{{ $t('encyclopedia.loadingMap') }}</div>
        <div v-else-if="mapError" class="map-error">{{ mapError }}</div>
        <div v-else-if="maps.length" class="map-filter-bar">
          <button
            v-for="m in maps"
            :key="m.id"
            :class="['map-filter-btn', { active: selectedMapId === m.id }]"
            @click="selectedMapId = m.id"
          >{{ m.gameModeName }}</button>
        </div>

        <div v-if="!filteredItems.length" class="loading-tip">{{ $t('encyclopedia.noItem') }}</div>
        <div v-else class="champion-grid">
          <div
            v-for="item in filteredItems"
            :key="item.id"
            class="champion-card"
          >
            <div class="champion-card__avatar" @click="openItemDetail(item)">
              <img
                :src="`https://ddragon.leagueoflegends.com/cdn/16.14.1/img/item/${item.image.full}`"
                :alt="item.name"
                class="champion-img"
              />
            </div>
            <span class="champion-card__name">{{ item.name }}</span>
          </div>
        </div>
      </template>
    </div>

    <!-- 物品详情弹窗 -->
    <el-dialog
      v-model="itemDialogVisible"
      width="420px"
      top="8vh"
      :close-on-click-modal="false"
      class="item-detail-dialog"
    >
      <template #header>
        <div class="item-dialog-header">
          <img
            v-if="currentItem"
            :src="`https://ddragon.leagueoflegends.com/cdn/16.14.1/img/item/${currentItem.image.full}`"
            :alt="currentItem.name"
            class="dialog-item-icon"
          />
          <span class="dialog-item-name">{{ currentItem?.name || '' }}</span>
        </div>
      </template>

      <template v-if="currentItem">
        <!-- 价格信息 -->
        <div class="item-price">
          <div class="price-main">
            <span class="price-main-label">{{ $t('encyclopedia.item.totalPrice') }}</span>
            <span class="price-main-value">{{ currentItem.gold.total }}</span>
          </div>
          <div class="price-sub">
            <span class="price-sub-item">{{ $t('encyclopedia.item.basePrice') }} {{ currentItem.gold.base }}</span>
            <span class="price-sub-item">{{ $t('encyclopedia.item.sellPrice') }} {{ currentItem.gold.sell }}</span>
            <span v-if="!currentItem.gold.purchasable" class="price-sub-item price-unbuyable">{{ $t('encyclopedia.item.unbuyable') }}</span>
          </div>
        </div>

        <!-- 描述（渲染为 HTML） -->
        <div class="item-desc" v-html="formatDescription(currentItem.description)"></div>

        <!-- 简短文 -->
        <div class="item-plaintext">{{ currentItem.plaintext }}</div>

        <!-- 合成材料 -->
        <div v-if="currentItem.from?.length" class="item-from">
          <div class="from-title">{{ $t('encyclopedia.item.recipe') }}</div>
          <div class="from-list">
            <span
              v-for="fromId in currentItem.from"
              :key="fromId"
              class="from-tag"
            >{{ itemNameMap[fromId] || fromId }}</span>
          </div>
        </div>
      </template>
    </el-dialog>

    <!-- 皮肤走马灯 - 直接显示在页面中 -->
    <div v-if="showCarousel" class="skin-carousel-section">
      <div class="skin-carousel-header">
        <button class="back-btn" @click="closeSkinView">
          <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 4l-6 6 6 6"/>
          </svg>
          {{ $t('encyclopedia.back') }}
        </button>
        <span class="skin-carousel-title">{{ currentChampionName }} - {{ $t('encyclopedia.skins') }}</span>
      </div>

      <div v-if="skinLoading" class="loading-tip">{{ $t('encyclopedia.loadingSkin') }}</div>
      <div v-else-if="!skins.length" class="loading-tip">{{ $t('encyclopedia.noSkin') }}</div>
      <div v-else class="carousel-wrapper">
        <el-carousel
          type="card"
          height="420px"
          indicator-position="none"
          arrow="always"
          :interval="4000"
          :autoplay="false"
          trigger="click"
        >
          <el-carousel-item v-for="skin in skins" :key="skin.num">
            <div class="skin-slide">
              <img
                :src="`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${currentChampionId}_${skin.num}.jpg`"
                :alt="skin.name"
                class="skin-img"
              />
              <div class="skin-name">{{ skin.name === 'default' ? $t('encyclopedia.defaultSkin') : skin.name }}</div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * 百科大全页面
 * - 顶部菜单：英雄 / 物品
 * - 默认展示英雄列表，从 DDragon API 获取数据
 */
import { ref, computed, onMounted } from 'vue'
import { useTranslation } from 'i18next-vue'
import { createLcuClient, get } from '../../utils/lcu-request'
import i18n from '../../i18n'

const { t } = useTranslation()

function getDdLocale(): string {
  return i18n.language.replace('-', '_')
}

// ==============================
// 类型定义
// ==============================
interface ChampionImage {
  full: string
}

interface Champion {
  id: string
  name: string
  image: ChampionImage
}

interface ChampionResponse {
  data: Record<string, Champion>
}

/** 皮肤数据 */
interface ChampionSkin {
  num: number
  name: string
  parentSkin?: string
}

interface ChampionDetailResponse {
  data: Record<string, {
    id: string
    name: string
    skins: ChampionSkin[]
  }>
}

// ==============================
// 物品类型
// ==============================
interface ItemImage {
  full: string
}

interface ItemGold {
  base: number
  total: number
  sell: number
  purchasable: boolean
}

interface Item {
  id: string
  name: string
  description: string
  plaintext: string
  image: ItemImage
  gold: ItemGold
  stats: Record<string, number>
  maps: Record<string, boolean>
  from?: string[]
  into?: string[]
  tags?: string[]
}

interface ItemResponse {
  data: Record<string, Item>
}

/** LCU 地图数据 */
interface MapInfo {
  id: number
  gameModeName: string
}

// ==============================
// 顶部菜单
// ==============================
const tabs = computed(() => [
  { key: 'champion', label: t('encyclopedia.tab.champion') },
  { key: 'item', label: t('encyclopedia.tab.item') },
])
const activeTab = ref('champion')

// ==============================
// 英雄数据
// ==============================
const champions = ref<Champion[]>([])
const championLoading = ref(false)
const championError = ref('')

/** 搜索 */
const searchQuery = ref('')
const filteredChampions = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return champions.value
  return champions.value.filter(
    c => c.name.toLowerCase().includes(q) || c.id.toLowerCase().includes(q),
  )
})

async function fetchChampions(): Promise<void> {
  championLoading.value = true
  championError.value = ''

  try {
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/16.14.1/data/${getDdLocale()}/champion.json`,
    )
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`)
    }
    const json: ChampionResponse = await res.json()
    // 将对象转为数组并按名称排序
    const list = Object.values(json.data)
    list.sort((a, b) => a.name.localeCompare(b.name, i18n.language))
    champions.value = list
  } catch (e) {
    championError.value = t('encyclopedia.loadError', { msg: e instanceof Error ? e.message : String(e) })
  } finally {
    championLoading.value = false
  }
}

onMounted(() => {
  fetchChampions()
})

// ==============================
// 物品数据
// ==============================
const items = ref<Item[]>([])
const itemLoading = ref(false)
const itemError = ref('')
const itemSearchQuery = ref('')
const itemFetched = ref(false)

const filteredItems = computed(() => {
  const q = itemSearchQuery.value.trim().toLowerCase()
  let list = items.value
  // 搜索过滤
  if (q) {
    list = list.filter(
      i => i.name.toLowerCase().includes(q) || i.id.toLowerCase().includes(q) || (i.plaintext && i.plaintext.toLowerCase().includes(q)),
    )
  }
  // 地图分类过滤
  if (selectedMapId.value !== null) {
    list = list.filter(i => i.maps?.[String(selectedMapId.value)] === true)
  }
  return list
})

/** 物品 ID → 名称映射 */
const itemNameMap = computed(() => {
  const map: Record<string, string> = {}
  for (const item of items.value) {
    map[item.id] = item.name
  }
  return map
})

// ==============================
// 地图分类
// ==============================
const VALID_MAP_IDS = [11, 12, 21, 22, 30, 33, 35]
const maps = ref<MapInfo[]>([])
const selectedMapId = ref<number | null>(null)
const mapLoading = ref(false)
const mapError = ref('')

async function fetchMaps(): Promise<void> {
  if (maps.value.length) return

  // 硬编码地图名作为 fallback（Electron 不可用时）
  const fallbackMaps: MapInfo[] = [
    { id: 11, gameModeName: t('mapName.sr') },
    { id: 12, gameModeName: t('mapName.ha') },
    { id: 21, gameModeName: t('mapName.nb') },
    { id: 22, gameModeName: t('mapName.tft') },
    { id: 30, gameModeName: t('mapName.ha') },
    { id: 33, gameModeName: t('mapName.cherry') },
    { id: 35, gameModeName: t('mapName.tft') },
  ]

  mapLoading.value = true
  try {
    if (!window.electronAPI) {
      maps.value = fallbackMaps
      if (maps.value.length && selectedMapId.value === null) {
        selectedMapId.value = maps.value[0].id
      }
      return
    }

    const info = await window.electronAPI.getLeagueClientInfo()
    if (info.error || !info.authToken || !info.port) {
      mapError.value = info.error || t('encyclopedia.noLcuInfo')
      return
    }
    createLcuClient(info.port, info.authToken)
    const allMaps: MapInfo[] = await get<MapInfo[]>('/lol-maps/v2/maps')
    // 按 ID 去重：保留第一个出现的同名 ID
    const seen = new Set<number>()
    maps.value = allMaps.filter(m => {
      const mapId = Number(m.id)
      if (!VALID_MAP_IDS.includes(mapId) || seen.has(mapId)) return false
      seen.add(mapId)
      return true
    })
    // 默认选中第一个分类
    if (maps.value.length && selectedMapId.value === null) {
      selectedMapId.value = maps.value[0].id
    }
  } catch (e) {
    mapError.value = t('encyclopedia.mapLoadError', { msg: e instanceof Error ? e.message : String(e) })
  } finally {
    mapLoading.value = false
  }
}

// ==============================
// 物品详情弹窗
// ==============================
const itemDialogVisible = ref(false)
const currentItem = ref<Item | null>(null)

function openItemDetail(item: Item): void {
  currentItem.value = item
  itemDialogVisible.value = true
}

/** 处理描述 HTML：</passive><br> → 冒号 */
function formatDescription(desc: string): string {
  return desc.replace(/<\/passive><br\s*\/?>/gi, '</passive>：')
}

async function fetchItems(): Promise<void> {
  if (itemFetched.value) return
  itemLoading.value = true
  itemError.value = ''

  try {
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/16.14.1/data/${getDdLocale()}/item.json`,
    )
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`)
    }
    const json: ItemResponse = await res.json()
    const list = Object.entries(json.data).map(([id, item]) => ({
      ...item,
      id,
    }))
    list.sort((a, b) => a.name.localeCompare(b.name, i18n.language))
    items.value = list
    itemFetched.value = true
  } catch (e) {
    itemError.value = t('encyclopedia.loadError', { msg: e instanceof Error ? e.message : String(e) })
  } finally {
    itemLoading.value = false
  }
}

function switchTab(key: string): void {
  activeTab.value = key
  showCarousel.value = false
  if (key === 'item') {
    fetchItems()
    fetchMaps()
  }
}

// ==============================
// 皮肤走马灯
// ==============================
const showCarousel = ref(false)
const currentChampionId = ref('')
const currentChampionName = ref('')
const skins = ref<ChampionSkin[]>([])
const skinLoading = ref(false)

async function openSkinView(champion: Champion): Promise<void> {
  // 如果点击的是同一个英雄，不重复请求
  if (currentChampionId.value === champion.id && skins.value.length) {
    showCarousel.value = true
    return
  }

  currentChampionId.value = champion.id
  currentChampionName.value = champion.name
  skinLoading.value = true
  showCarousel.value = true

  try {
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/16.14.1/data/${getDdLocale()}/champion/${champion.id}.json`,
    )
    if (!res.ok) throw new Error(`HTTP ${res.status}`)

    const json: ChampionDetailResponse = await res.json()
    const data = json.data[champion.id]
    if (data?.skins) {
      // 只保留没有 parentSkin 属性的基础皮肤
      skins.value = data.skins.filter(s => !s.parentSkin)
    } else {
      skins.value = []
    }
  } catch (e) {
    console.warn('[Encyclopedia] 加载皮肤失败:', e)
    skins.value = []
  } finally {
    skinLoading.value = false
  }
}

function closeSkinView(): void {
  showCarousel.value = false
}
</script>

<style lang="scss" scoped>
.encyclopedia-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* ==============================
 * 顶部菜单栏
 * ============================== */
.top-menu {
  display: flex;
  gap: 4px;
  padding: 0;
  background: var(--glass-bg);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--glass-border);
  border-radius: 8px 8px 0 0;
  padding: 4px 8px;

  &__btn {
    padding: 8px 20px;
    font-size: 14px;
    font-weight: 500;
    color: var(--text-secondary);
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: all 0.2s ease;
    outline: none;
    margin-bottom: -1px;

    &:hover {
      color: var(--text-primary);
    }

    &--active {
      color: var(--accent);
      border-bottom-color: var(--accent);
    }
  }
}

/* ==============================
 * 英雄列表
 * ============================== */
.champion-list {
  flex: 1;
  overflow-y: auto;
}

/* 搜索框 */
.search-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  margin-bottom: 12px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 8px;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  transition: all 0.2s ease;

  &:focus-within {
    border-color: var(--accent);
    box-shadow: 0 0 0 2px var(--accent-alpha-02);
  }
}

.search-icon {
  flex-shrink: 0;
  color: var(--text-tertiary);
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 13px;
  color: var(--text-primary);

  &::placeholder {
    color: var(--text-tertiary);
  }
}

/* 地图分类栏 */
.map-filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
}

.map-filter-btn {
  padding: 4px 14px;
  font-size: 12px;
  font-weight: 500;
  color: var(--text-secondary);
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;

  &:hover {
    color: var(--text-primary);
    border-color: var(--glass-border-hover);
  }

  &.active {
    color: #fff;
    background: var(--accent);
    border-color: var(--accent);
  }
}

.map-loading {
  font-size: 12px;
  color: var(--text-tertiary);
  margin-bottom: 12px;
}

.map-error {
  font-size: 12px;
  color: #ef4444;
  margin-bottom: 12px;
}

.champion-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 12px;
}

.champion-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 8px 4px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: var(--glass-bg-hover);
  }

  &__avatar {
    width: 60px;
    height: 60px;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid var(--glass-border);
  }

  &__name {
    font-size: 11px;
    color: var(--text-secondary);
    text-align: center;
    line-height: 1.3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 72px;
  }
}

.champion-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* ==============================
 * 物品详情弹窗
 * ============================== */
:deep(.item-detail-dialog) {
  background: rgba(10, 14, 23, 0.94);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid var(--glass-border);
  border-radius: 14px;

  .el-dialog__header {
    padding-bottom: 12px;
  }

  .el-dialog__body {
    padding: 16px 20px 20px;
  }

  .el-dialog__close {
    color: var(--text-secondary);
    font-size: 16px;

    &:hover {
      color: var(--text-primary);
    }
  }

  .item-dialog-header {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .dialog-item-icon {
    width: 36px;
    height: 36px;
    border-radius: 6px;
    object-fit: cover;
  }

  .dialog-item-name {
    font-size: 16px;
    font-weight: 600;
    color: var(--text-primary);
  }

  .item-price {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 12px 16px;
    background: var(--input-bg, #f5f5f5);
    border-radius: 10px;
    margin-bottom: 16px;
  }

  .price-main {
    display: flex;
    align-items: baseline;
    gap: 6px;
    flex-shrink: 0;
  }

  .price-main-label {
    font-size: 12px;
    color: var(--text-tertiary);
  }

  .price-main-value {
    font-size: 18px;
    font-weight: 700;
    color: #e6b422;
    line-height: 1;
  }

  .price-sub {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 12px;
  }

  .price-sub-item {
    font-size: 12px;
    color: var(--text-secondary);
  }

  .price-unbuyable {
    color: #ef4444;
  }

  .item-desc {
    font-size: 13px;
    line-height: 1.7;
    color: var(--text-primary);
    margin-bottom: 10px;

    mainText, stats { display: inline; }
    attention {
      color: #e6b422;
      font-weight: 600;
      font-style: normal;
    }
    passive {
      color: #22c55e;
      font-weight: 600;
    }
    active {
      color: #f59e0b;
      font-weight: 600;
    }
    status { display: inline; color: var(--text-secondary); }
    rarity { display: inline; color: #a855f7; }
    rules { display: inline; color: var(--text-tertiary); }
    magicDamage { color: #60a5fa; }
    physicalDamage { color: #f87171; }
    trueDamage { color: #fff; background: #92400e; padding: 0 3px; border-radius: 2px; }
    healing { color: #34d399; }
    scaleMana, scaleAP, scaleAD, scaleArmor, scaleMR, scaleLevel, scaleLethality { color: #818cf8; }
    br {
      content: '';
      display: block;
      margin: 4px 0;
    }
    li { display: block; margin-top: 6px; }
  }

  .item-plaintext {
    font-size: 12px;
    color: var(--text-tertiary);
    line-height: 1.5;
    margin-bottom: 14px;
    padding-top: 10px;
    border-top: 1px solid var(--glass-border);
  }

  .item-from { margin-top: 4px; }

  .from-title {
    font-size: 12px;
    color: var(--text-tertiary);
    margin-bottom: 6px;
  }

  .from-list {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .from-tag {
    display: inline-block;
    padding: 2px 10px;
    font-size: 12px;
    color: var(--accent);
    background: var(--accent-alpha-01);
    border: 1px solid var(--accent-alpha-02);
    border-radius: 12px;
    cursor: default;
  }
}

/* 皮肤走马灯区域 */
.skin-carousel-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.skin-carousel-header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;
  font-size: 13px;
  color: var(--text-secondary);
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: var(--text-primary);
    background: var(--glass-bg-hover);
    border-color: var(--accent);
  }
}

.skin-carousel-title {
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
}

.skin-slide {
  position: relative;
  width: 100%;
  height: 100%;
}

.skin-img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  border-radius: 8px;
  cursor: pointer;
}

.skin-name {
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  position: absolute;
  bottom: 16px;
  left: 0;
  right: 0;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  color: #fff;
}

:deep(.el-carousel) {
  --el-carousel-arrow-background: rgba(0, 0, 0, 0.3);
}

:deep(.el-carousel__container) {
  background: transparent;
}

.carousel-wrapper {
  max-width: 580px;
  width: 100%;
  margin: 0 auto;
}

/* ==============================
 * 通用提示
 * ============================== */
.loading-tip,
.placeholder-tip {
  padding: 40px 0;
  text-align: center;
  font-size: 14px;
  color: var(--text-tertiary);
}

.loading-tip--error {
  color: #ef4444;
}
</style>
