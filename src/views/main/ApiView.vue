<!--
  ===================================================================
  API 请求模拟工具页面 (src/views/ApiView.vue)
  ===================================================================
  作用：
    - 类似 Swagger UI 的 API 请求模拟工具
    - 连接设置：Base URL / 端口 / 认证头，支持一键获取 LCU 信息
    - 请求配置：Method / Path / Headers / Query Params / Request Body
    - 响应展示：状态码 / 耗时 / 大小 / 响应头 / 响应体（JSON 格式化）
    - 完全适配明/暗主题
  ===================================================================
-->

<template>
  <div class="api-view">
    <!-- ==============================
         连接设置
         ============================== -->
    <section class="api-section">
      <div class="section-header">
        <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="10" cy="10" r="8"/>
          <path d="M2 10h16M10 2a15 15 0 010 16M10 2a15 15 0 00-8 8"/>
        </svg>
        <span>{{ $t('api.connectionSettings') }}</span>
      </div>

      <div class="conn-row">
        <div class="conn-field conn-field--url">
          <label>Base URL</label>
          <input v-model="baseUrl" placeholder="https://127.0.0.1" class="api-input" />
        </div>
        <div class="conn-field conn-field--port">
          <label>Port</label>
          <input v-model="port" :placeholder="$t('api.port')" class="api-input" />
        </div>
        <div class="conn-field conn-field--btn">
          <button class="api-btn api-btn--lcu" @click="fetchLcuInfo" :disabled="lcuLoading">
            <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M10 3a7 7 0 017 7v3l2 2H1l2-2v-3a7 7 0 017-7z"/>
              <path d="M7 16a3 3 0 006 0"/>
            </svg>
            {{ lcuLoading ? $t('api.fetching') : $t('api.fetchLcuInfo') }}
          </button>
          <span v-if="lcuStatus" class="lcu-status" :class="{ connected: lcuConnected }">
            {{ lcuStatus }}
          </span>
        </div>
      </div>

      <div class="conn-row">
        <div class="conn-field conn-field--auth">
          <label>{{ $t('api.authType') }}</label>
          <select v-model="authType" class="api-select">
            <option value="none">{{ $t('api.none') }}</option>
            <option value="basic">Basic Auth</option>
            <option value="bearer">Bearer Token</option>
            <option value="none1">none</option>
          </select>
        </div>
        <div class="conn-field conn-field--token" v-if="authType !== 'none'">
          <label>{{ $t('api.tokenPassword') }}</label>
          <input v-model="authToken" type="text" :placeholder="$t('api.inputToken')" class="api-input" />
        </div>
      </div>
    </section>

    <!-- 顶部菜单栏 -->
    <div class="top-menu">
      <el-button
        v-for="tab in tabs"
        :key="tab.key"
        :class="['top-menu__btn', { 'top-menu__btn--active': activeTab === tab.key }]"
        @click="activeTab = tab.key"
      >
        {{ tab.label }}
      </el-button>
    </div>

    <!-- ==============================
         HTTP 测试
         ============================== -->
    <template v-if="activeTab === 'http'">
    <!-- ==============================
         请求配置
         ============================== -->
    <section class="api-section">
      <div class="section-header">
        <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M2 5l8-3 8 3M2 5v10l8 3M2 5l8 3m0-3v10m8-10v10l-8 3"/>
        </svg>
        <span>{{ $t('api.requestConfig') }}</span>
      </div>

      <!-- Method + Path -->
      <div class="req-row">
        <select v-model="method" class="api-select api-select--method" :class="'method-' + method.toLowerCase()">
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="PATCH">PATCH</option>
          <option value="DELETE">DELETE</option>
        </select>
        <input v-model="path" placeholder="/lol-summoner/v1/current-summoner" class="api-input api-input--path" />
        <button class="api-btn api-btn--send" @click="sendRequest" :disabled="loading">
          <svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor">
            <path d="M1 1l18 9L1 19V1z"/>
          </svg>
          {{ loading ? $t('api.sending') : $t('api.sendRequest') }}
        </button>
        <button class="api-btn api-btn--reset" @click="resetRequest">
          <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M1 4v6h6M19 16v-6h-6"/>
            <path d="M17.4 6A9 9 0 003 8.5M2.6 14A9 9 0 0017 11.5"/>
          </svg>
          {{ $t('api.reset') }}
        </button>
      </div>

      <!-- Headers -->
      <div class="params-section">
        <div class="params-header" @click="showHeaders = !showHeaders">
          <svg viewBox="0 0 20 20" width="14" height="14" :class="{ rotated: showHeaders }" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="transition:transform .2s">
            <path d="M7 3l5 7-5 7"/>
          </svg>
          {{ $t('api.headers') }}
          <span class="param-count">{{ headers.length }}</span>
          <button class="param-add-btn" @click.stop="headers.push({ key: '', value: '' })">{{ $t('api.add') }}</button>
        </div>
        <div v-show="showHeaders" class="params-body">
          <div v-for="(h, i) in headers" :key="'h-' + i" class="param-row">
            <input v-model="h.key" :placeholder="$t('api.headerName')" class="api-input api-input--param-key" />
            <input v-model="h.value" :placeholder="$t('api.value')" class="api-input api-input--param-val" />
            <button class="param-del-btn" @click="headers.splice(i, 1)">×</button>
          </div>
        </div>
      </div>

      <!-- Query Params -->
      <div class="params-section">
        <div class="params-header" @click="showQuery = !showQuery">
          <svg viewBox="0 0 20 20" width="14" height="14" :class="{ rotated: showQuery }" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="transition:transform .2s">
            <path d="M7 3l5 7-5 7"/>
          </svg>
          {{ $t('api.queryParams') }}
          <span class="param-count">{{ queryParams.length }}</span>
          <button class="param-add-btn" @click.stop="queryParams.push({ key: '', value: '' })">{{ $t('api.add') }}</button>
        </div>
        <div v-show="showQuery" class="params-body">
          <div v-for="(p, i) in queryParams" :key="'q-' + i" class="param-row">
            <input v-model="p.key" :placeholder="$t('api.paramName')" class="api-input api-input--param-key" />
            <input v-model="p.value" :placeholder="$t('api.paramValue')" class="api-input api-input--param-val" />
            <button class="param-del-btn" @click="queryParams.splice(i, 1)">×</button>
          </div>
        </div>
      </div>

      <!-- Body -->
      <div v-if="['POST', 'PUT', 'PATCH'].includes(method)" class="params-section">
        <div class="params-header">
          <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="3" width="16" height="14" rx="2"/>
            <path d="M6 7h8M6 10h8M6 13h4"/>
          </svg>
          {{ $t('api.requestBody') }}
        </div>
        <textarea
          v-model="body"
          class="api-textarea"
          placeholder='{\n  "key": "value"\n}'
          rows="6"
          spellcheck="false"
        ></textarea>
      </div>
    </section>

    <!-- ==============================
         响应结果
         ============================== -->
    <section class="api-section" v-if="response || error">
      <div class="section-header">
        <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 13l3 4L15 4"/>
        </svg>
        <span>{{ $t('api.responseResult') }}</span>
        <span v-if="response" class="resp-meta">
          <span class="resp-badge" :class="'status-' + Math.floor(response.status / 100)">{{ response.status }} {{ response.statusText }}</span>
          <span class="resp-info">{{ response.time }}ms</span>
          <span class="resp-info">{{ response.size }}</span>
        </span>
      </div>

      <!-- 错误 -->
      <div v-if="error" class="resp-error">
        <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
          <path d="M10 0a10 10 0 100 20 10 10 0 000-20zm1 15H9v-2h2v2zm0-4H9V5h2v6z"/>
        </svg>
        {{ error }}
      </div>

      <!-- 响应头 -->
      <div v-if="response" class="params-section">
        <div class="params-header" @click="showRespHeaders = !showRespHeaders">
          <svg viewBox="0 0 20 20" width="14" height="14" :class="{ rotated: showRespHeaders }" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="transition:transform .2s">
            <path d="M7 3l5 7-5 7"/>
          </svg>
          {{ $t('api.responseHeaders') }}
        </div>
        <div v-show="showRespHeaders" class="params-body">
          <div v-for="(v, k) in response.headers" :key="k" class="param-row param-row--resp">
            <span class="param-key-label">{{ k }}:</span>
            <span class="param-val-label">{{ v }}</span>
          </div>
        </div>
      </div>

      <!-- 响应体 -->
      <div v-if="response" class="resp-body-wrapper">
        <div class="resp-body-header">
          <span>{{ $t('api.responseBody') }}</span>
          <button class="api-btn api-btn--copy" @click="copyResponse">{{ $t('api.copy') }}</button>
        </div>
        <pre class="resp-body"><code v-html="highlightJson(response.data)"></code></pre>
      </div>
    </section>
    </template>

    <!-- ==============================
         WebSocket 测试
         ============================== -->
    <template v-if="activeTab === 'ws'">
    <section class="api-section">
      <div class="section-header">
        <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 8l7-5 7 5M3 12l7 5 7-5"/>
          <path d="M3 8v4M17 8v4"/>
          <path d="M10 3v14"/>
        </svg>
        <span>{{ $t('api.wsTest') }}</span>
        <span v-if="wsStatus === 'connected'" class="ws-badge ws-badge--on">{{ $t('api.wsConnected') }}</span>
        <span v-else-if="wsStatus === 'connecting'" class="ws-badge ws-badge--pending">{{ $t('api.wsConnecting') }}</span>
        <span v-else class="ws-badge ws-badge--off">{{ $t('api.wsDisconnected') }}</span>
      </div>

      <!-- 连接设置 -->
      <div class="ws-conn-row">
        <div class="conn-field conn-field--port">
          <label>Port</label>
          <input v-model="wsPort" :placeholder="$t('api.port')" class="api-input" />
        </div>
        <div class="conn-field conn-field--token">
          <label>Token</label>
          <input v-model="wsToken" type="text" :placeholder="$t('api.inputToken')" class="api-input" />
        </div>
        <div class="conn-field conn-field--btn">
          <button
            v-if="wsStatus !== 'connected'"
            class="api-btn api-btn--send"
            @click="wsConnect"
            :disabled="wsStatus === 'connecting'"
          >{{ $t('api.connect') }}</button>
          <button
            v-else
            class="api-btn api-btn--reset"
            @click="wsDisconnect"
          >{{ $t('api.disconnect') }}</button>
        </div>
      </div>

      <!-- 事件订阅 -->
      <div class="ws-sub-row">
        <input
          v-model="wsSubscribeUri"
          class="api-input api-input--path"
          :placeholder="$t('api.subscribeUriPlaceholder')"
        />
        <button class="api-btn api-btn--lcu" @click="wsSubscribe" :disabled="wsStatus !== 'connected'">{{ $t('api.subscribe') }}</button>
      </div>

      <!-- 已订阅列表 -->
      <div v-if="wsSubList.length" class="ws-subs">
        <span
          v-for="uri in wsSubList"
          :key="uri"
          class="ws-sub-tag"
          @click="wsUnsubscribe(uri)"
          :title="'点击取消订阅: ' + (uri || $t('api.allEvents'))"
        >{{ uri || $t('api.allEvents') }} ×</span>
      </div>

      <!-- 事件日志 -->
      <div class="ws-log-header">
        <span>{{ $t('api.eventLog') }}</span>
        <div class="ws-log-actions">
          <button class="api-btn api-btn--copy" @click="wsRawLog = ''">{{ $t('api.clear') }}</button>
        </div>
      </div>
      <textarea
        ref="wsRawLogEl"
        readonly
        class="ws-raw-log"
        :value="wsRawLog"
        :placeholder="$t('api.noEvents')"
      ></textarea>
    </section>
    </template>
  </div>
</template>

<script setup lang="ts">
/**
 * API 请求模拟工具
 * - 支持自定义 Base URL、Headers、Query、Body
 * - 一键获取 LCU 进程认证信息
 * - 响应状态码 / 耗时 / 大小 / 响应体展示
 */
import { ref, computed, watch, onUnmounted, nextTick } from 'vue'
import { useTranslation } from 'i18next-vue'
import { LcuWebSocket } from '../../utils/lcu-websocket'
import { createLcuClient, rawRequest } from '../../utils/lcu-request'

const { t } = useTranslation()

// ==============================
// 顶部菜单
// ==============================
const tabs = [
  { key: 'http', label: 'HTTP' },
  { key: 'ws', label: 'WebSocket' },
]
const activeTab = ref('http')

// ==============================
// 类型定义
// ==============================

interface KeyValuePair {
  key: string
  value: string
}

interface ResponseData {
  status: number
  statusText: string
  time: number
  size: string
  headers: Record<string, string>
  data: string
}

// ==============================
// 连接设置
// ==============================
const baseUrl = ref('')
const port = ref('')
const authType = ref<'none' | 'basic' | 'bearer'>('none')
const authToken = ref('')

// 当 port 变化时自动拼接 Base URL
watch(port, (val) => {
  if (val && !baseUrl.value) {
    baseUrl.value = 'https://127.0.0.1'
  }
})

// ==============================
// LCU 信息获取
// ==============================
const lcuLoading = ref(false)
const lcuStatus = ref('')
const lcuConnected = ref(false)

async function fetchLcuInfo(): Promise<void> {
  if (!window.electronAPI) {
    lcuStatus.value = t('api.nonElectron')
    lcuConnected.value = false
    return
  }

  lcuLoading.value = true
  lcuStatus.value = t('api.fetchingStatus')

  try {
    const info = await window.electronAPI.getLeagueClientInfo()
    if (info.error) {
      lcuStatus.value = info.error
      lcuConnected.value = false
    } else {
      baseUrl.value = 'https://127.0.0.1'
      port.value = info.port || ''
      authType.value = 'basic'
      authToken.value = info.authToken || ''
      createLcuClient(info.port || '', info.authToken || '')
      lcuStatus.value = t('api.lcuConnected', { port: info.port || '' })
      lcuConnected.value = true
    }
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e)
    lcuStatus.value = t('api.fetchFailed', { msg })
    lcuConnected.value = false
  } finally {
    lcuLoading.value = false
  }
}

// ==============================
// 请求配置
// ==============================
const method = ref('GET')
const path = ref('/lol-summoner/v1/current-summoner')
const headers = ref<KeyValuePair[]>([{ key: 'Content-Type', value: 'application/json' }])
const queryParams = ref<KeyValuePair[]>([])
const body = ref('')

const showHeaders = ref(true)
const showQuery = ref(true)

function resetRequest(): void {
  method.value = 'GET'
  path.value = ''
  headers.value = [{ key: 'Content-Type', value: 'application/json' },{ key: 'Authorization',value: authToken.value }]
  queryParams.value = []
  body.value = ''
  response.value = null
  error.value = ''
  showRespHeaders.value = false
}

// ==============================
// 发送请求
// ==============================
const loading = ref(false)
const response = ref<ResponseData | null>(null)
const error = ref('')
const showRespHeaders = ref(false)

async function sendRequest(): Promise<void> {
  if (!baseUrl.value || !path.value) {
    error.value = t('api.fillUrlAndPath')
    return
  }

  loading.value = true
  response.value = null
  error.value = ''
  showRespHeaders.value = false

  const start = performance.now()

  try {
    let status: number
    let statusText: string
    let dataStr: string
    let respHeaders: Record<string, string>

    // LCU 模式：使用 lcu-request
    if (authType.value === 'basic') {
      // 每次发送前重新初始化，确保 port/token 是最新的
      if (port.value && authToken.value) {
        createLcuClient(port.value, authToken.value)
      }

      const customHeaders: Record<string, string> = {}
      headers.value.filter(h => h.key && h.key !== 'Authorization').forEach(h => {
        customHeaders[h.key] = h.value
      })

      const validParams = queryParams.value.filter(p => p.key)
      const params: Record<string, string> = {}
      validParams.forEach(p => { params[p.key] = p.value })

      let reqBody: string | Record<string, unknown> | undefined
      if (['POST', 'PUT', 'PATCH'].includes(method.value) && body.value) {
        try { reqBody = JSON.parse(body.value) as Record<string, unknown> } catch { reqBody = body.value }
      }

      const axiosRes = await rawRequest(
        method.value as import('axios').Method,
        '/' + path.value.replace(/^\//, ''),
        reqBody,
        validParams.length ? params : undefined,
        customHeaders,
      )

      status = axiosRes.status
      statusText = axiosRes.statusText
      dataStr = typeof axiosRes.data === 'string' ? axiosRes.data : JSON.stringify(axiosRes.data, null, 2)
      respHeaders = {}
      Object.entries(axiosRes.headers).forEach(([k, v]) => {
        respHeaders[k] = typeof v === 'string' ? v : String(v)
      })
    } else {
      // 普通模式：使用 fetch
      let base = baseUrl.value.replace(/\/+$/, '')
      if (port.value) {
        base = base.replace(/:\d+$/, '') + ':' + port.value
      }
      let url = base + '/' + path.value.replace(/^\//, '')

      const validParams = queryParams.value.filter(p => p.key)
      if (validParams.length) {
        const usp = new URLSearchParams()
        validParams.forEach(p => usp.append(p.key, p.value))
        url += '?' + usp.toString()
      }

      const reqHeaders: Record<string, string> = {}
      headers.value.filter(h => h.key).forEach(h => {
        reqHeaders[h.key] = h.value
      })
      if (authToken.value && authType.value === 'bearer') {
        reqHeaders['Authorization'] = 'Bearer ' + authToken.value
      }

      let reqBody: string | null = null
      if (['POST', 'PUT', 'PATCH'].includes(method.value) && body.value) {
        reqBody = body.value
      }

      const res = await fetch(url, {
        method: method.value,
        headers: reqHeaders,
        body: reqBody,
      })

      status = res.status
      statusText = res.statusText

      const contentType = res.headers.get('content-type') || ''
      if (contentType.includes('json')) {
        try {
          const json = await res.json()
          dataStr = JSON.stringify(json, null, 2)
        } catch {
          dataStr = await res.text()
        }
      } else {
        dataStr = await res.text()
      }

      respHeaders = {}
      res.headers.forEach((v, k) => { respHeaders[k] = v })
    }

    const end = performance.now()
    const elapsed = Math.round(end - start)
    const bytes = new TextEncoder().encode(dataStr).length
    const sizeStr = bytes > 1024 ? (bytes / 1024).toFixed(1) + ' KB' : bytes + ' B'

    response.value = {
      status,
      statusText,
      time: elapsed,
      size: sizeStr,
      headers: respHeaders,
      data: dataStr,
    }
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e)
    error.value = msg
  } finally {
    loading.value = false
  }
}

// ==============================
// 复制响应
// ==============================
async function copyResponse(): Promise<void> {
  if (!response.value) return
  try {
    await navigator.clipboard.writeText(response.value.data)
  } catch {
    // 降级：选中文本
    const pre = document.querySelector('.resp-body code')
    if (pre) {
      const range = document.createRange()
      range.selectNode(pre)
      window.getSelection()?.removeAllRanges()
      window.getSelection()?.addRange(range)
    }
  }
}

/** JSON 语法高亮 */
function highlightJson(str: string): string {
  if (!str) return ''
  // 转义 HTML
  const escaped = str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
  // 添加语法高亮
  return escaped.replace(
    /("((?:""|[^"])*?)"\s*:)|("((?:""|[^"])*?)")|(true|false|null)|(-?\d+\.?\d*(?:[eE][+-]?\d+)?)/g,
    (match, key, keyContent, strVal, strContent, boolVal, numVal) => {
      if (key) return `<span class="j-key">"${keyContent}"</span><span class="j-colon">:</span>`
      if (strVal) return `<span class="j-string">"${strContent}"</span>`
      if (boolVal) return `<span class="j-bool">${boolVal}</span>`
      if (numVal) return `<span class="j-num">${numVal}</span>`
      return match
    },
  )
}

// ==============================
// WebSocket 测试
// ==============================
const wsClient = new LcuWebSocket()
const wsStatus = ref<'disconnected' | 'connecting' | 'connected'>('disconnected')
const wsPort = ref('')
const wsToken = ref('')
const wsSubscribeUri = ref('')
const wsRawLog = ref('')
const wsRawLogEl = ref<HTMLTextAreaElement | null>(null)
const MAX_RAW_LOG = 100000
const wsSubList = ref<string[]>([])

/** 同步状态变化（由 onEvent 回调手动触发，wsClient 非响应式对象） */

/** 当 LCU 信息获取成功时自动填充 WS 端口和 Token */
watch(lcuConnected, (connected) => {
  if (connected && port.value && authToken.value) {
    wsPort.value = port.value
    wsToken.value = authToken.value
  }
})

/** 同步日志和连接状态 */
wsClient.onEvent(() => {
  const logs = wsClient.logs
  const last = logs[logs.length - 1]
  if (last && last.raw) {
    wsRawLog.value += last.raw + '\n'
    if (wsRawLog.value.length > MAX_RAW_LOG) {
      wsRawLog.value = wsRawLog.value.slice(-MAX_RAW_LOG)
    }
  }
  wsStatus.value = wsClient.status
})

/** 自动滚动到文本域底部 */
watch(wsRawLog, () => {
  nextTick(() => {
    const el = wsRawLogEl.value
    if (el) el.scrollTop = el.scrollHeight
  })
})

wsClient.onEvent(() => {
  wsSubList.value = wsClient.getSubscriptions()
})

function wsConnect(): void {
  if (!wsPort.value) return
  wsStatus.value = 'connecting'
  wsClient.connect(wsPort.value, wsToken.value)
}

function wsDisconnect(): void {
  wsClient.disconnect()
  wsStatus.value = 'disconnected'
}

function wsSubscribe(): void {
  const uri = wsSubscribeUri.value.trim()
  wsClient.subscribe(uri)
  wsSubList.value = wsClient.getSubscriptions()
}

function wsUnsubscribe(uri: string): void {
  wsClient.unsubscribe(uri)
  wsSubList.value = wsClient.getSubscriptions()
}

/** 组件销毁时断开 WebSocket */
onUnmounted(() => {
  wsClient.disconnect()
})
</script>

<style scoped lang="scss">
/* ==============================
 * 布局
 * ============================== */
.api-view {
  padding: 4px;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.api-section {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 10px;
  padding: 16px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: var(--card-shadow);
}

.section-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--glass-border);
}

.section-header svg {
  color: var(--accent);
  flex-shrink: 0;
}

/* ==============================
 * 顶部菜单栏
 * ============================== */
.top-menu {
  display: flex;
  gap: 4px;
  padding: 0;
  border-bottom: 1px solid var(--glass-border);

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
 * 连接设置
 * ============================== */
.conn-row {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.conn-row:last-child {
  margin-bottom: 0;
}

.conn-field {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.conn-field label {
  font-size: 11px;
  font-weight: 500;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.conn-field--url {
  flex: 2;
  min-width: 200px;
}

.conn-field--port {
  flex: 0 0 100px;
}

.conn-field--auth {
  flex: 0 0 130px;
}

.conn-field--token {
  flex: 1;
  min-width: 200px;
}

.conn-field--btn {
  flex: 0 0 auto;
  flex-direction: row;
  align-items: flex-end;
  gap: 8px;
}

/* ==============================
 * 通用输入组件
 * ============================== */
.api-input {
  height: 34px;
  padding: 0 10px;
  border: 1px solid var(--input-border);
  border-radius: 6px;
  background: var(--input-bg);
  color: var(--text-primary);
  font-size: 13px;
  outline: none;
  transition: border-color 0.2s;
  font-family: 'Consolas', 'Courier New', monospace;
}

.api-input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 2px var(--accent-alpha-012);
}

.api-input::placeholder {
  color: var(--text-tertiary);
}

.api-select {
  height: 34px;
  padding: 0 8px;
  border: 1px solid var(--input-border);
  border-radius: 6px;
  background: var(--input-bg);
  color: var(--text-primary);
  font-size: 13px;
  outline: none;
  cursor: pointer;
  transition: border-color 0.2s;
}

.api-select:focus {
  border-color: var(--accent);
}

/* Method 颜色 */
.api-select--method {
  flex: 0 0 100px;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.5px;
}

.method-get    { color: #22c55e; border-color: #22c55e40; }
.method-post   { color: #3b82f6; border-color: #3b82f640; }
.method-put    { color: #f59e0b; border-color: #f59e0b40; }
.method-patch  { color: #8b5cf6; border-color: #8b5cf640; }
.method-delete { color: #ef4444; border-color: #ef444440; }

.api-textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid var(--input-border);
  border-radius: 6px;
  background: var(--input-bg);
  color: var(--text-primary);
  font-size: 13px;
  font-family: 'Consolas', 'Courier New', monospace;
  resize: vertical;
  outline: none;
  line-height: 1.5;
  transition: border-color 0.2s;
}

.api-textarea:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 2px var(--accent-alpha-012);
}

/* ==============================
 * 按钮
 * ============================== */
.api-btn {
  height: 34px;
  padding: 0 14px;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s;
  white-space: nowrap;
}

.api-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.api-btn--lcu {
  background: var(--accent-alpha-01);
  color: var(--accent);
  border: 1px solid var(--accent-alpha-02);
}
.api-btn--lcu:hover:not(:disabled) {
  background: var(--accent-alpha-02);
}

.api-btn--send {
  background: var(--accent);
  color: #fff;
}
.api-btn--send:hover:not(:disabled) {
  background: var(--accent-hover);
  box-shadow: 0 2px 8px var(--accent-alpha-03);
  transform: translateY(-1px);
}

.api-btn--reset {
  background: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--input-border);
}
.api-btn--reset:hover {
  background: var(--btn-hover-bg);
  color: var(--text-primary);
}

.api-btn--copy {
  background: transparent;
  color: var(--accent);
  border: 1px solid var(--accent-alpha-02);
  font-size: 11px;
  height: 26px;
}
.api-btn--copy:hover {
  background: var(--accent-alpha-01);
}

/* ==============================
 * 按钮行
 * ============================== */
.req-row {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}

.api-input--path {
  flex: 1;
  min-width: 0;
}

/* ==============================
 * LCU 状态
 * ============================== */
.lcu-status {
  font-size: 12px;
  color: var(--text-tertiary);
  white-space: nowrap;
  align-self: flex-end;
  padding-bottom: 4px;
}
.lcu-status.connected {
  color: #22c55e;
}

/* ==============================
 * 参数区域
 * ============================== */
.params-section {
  background: var(--glass-bg);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  margin-bottom: 8px;
  border: 1px solid var(--glass-border);
  border-radius: 6px;
  overflow: hidden;
}

.params-section:last-child {
  margin-bottom: 0;
}

.params-header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 10px;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-secondary);
  cursor: pointer;
  user-select: none;
  transition: background 0.15s;
  background: var(--glass-bg);
}
.params-header:hover {
  background: var(--glass-bg-hover);
}

.rotated {
  transform: rotate(90deg);
}

.param-count {
  font-size: 11px;
  border-radius: 10px;
  padding: 0 6px;
  height: 18px;
  display: inline-flex;
  align-items: center;
  background: var(--accent-alpha-01);
  color: var(--accent);
  font-weight: 600;
}

.param-add-btn {
  margin-left: auto;
  background: transparent;
  border: 1px dashed var(--input-border);
  border-radius: 4px;
  color: var(--accent);
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  padding: 2px 8px;
  transition: all 0.2s;
}
.param-add-btn:hover {
  background: var(--accent-alpha-01);
  border-color: var(--accent);
}

.params-body {
  padding: 6px 10px 10px;
}

.param-row {
  display: flex;
  gap: 6px;
  margin-top: 6px;
  align-items: center;
}

.param-row:first-child {
  margin-top: 0;
}

.api-input--param-key {
  flex: 1;
  min-width: 120px;
}

.api-input--param-val {
  flex: 2;
  min-width: 120px;
}

.param-del-btn {
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  color: var(--text-tertiary);
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  transition: all 0.15s;
  flex-shrink: 0;
}
.param-del-btn:hover {
  background: rgba(239, 68, 68, 0.15);
  color: #ef4444;
}

/* 响应头只读行 */
.param-row--resp {
  flex-wrap: wrap;
  gap: 4px 8px;
  padding: 3px 0;
  font-size: 12px;
  font-family: 'Consolas', monospace;
}
.param-key-label {
  color: var(--accent);
  font-weight: 500;
  min-width: 120px;
}
.param-val-label {
  color: var(--text-primary);
  word-break: break-all;
}

/* ==============================
 * 响应
 * ============================== */
.resp-meta {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 8px;
}

.resp-badge {
  font-size: 12px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
  font-family: 'Consolas', monospace;
}

.status-2 { background: rgba(34, 197, 94, 0.12); color: #22c55e; }
.status-3 { background: rgba(245, 158, 11, 0.12); color: #f59e0b; }
.status-4 { background: rgba(239, 68, 68, 0.12); color: #ef4444; }
.status-5 { background: rgba(239, 68, 68, 0.12); color: #ef4444; }

.resp-info {
  font-size: 11px;
  color: var(--text-tertiary);
  font-family: 'Consolas', monospace;
}

.resp-error {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 10px;
  background: rgba(239, 68, 68, 0.08);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 6px;
  color: #ef4444;
  font-size: 13px;
}
.resp-error svg {
  flex-shrink: 0;
  margin-top: 1px;
}

.resp-body-wrapper {
  margin-top: 8px;
}

.resp-body-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-secondary);
}

.resp-body {
  background: var(--input-bg);
  border: 1px solid var(--input-border);
  border-radius: 6px;
  padding: 12px;
  overflow-x: auto;
  max-height: 400px;
  overflow-y: auto;
  margin: 0;
}

.resp-body code {
  font-size: 12px;
  font-family: 'Consolas', 'Courier New', monospace;
  color: var(--text-primary);
  line-height: 1.6;
  white-space: pre;
}

/* JSON 语法高亮颜色 */
:deep(.j-key) {
  color: #569cd6;
}

:deep(.j-colon) {
  color: var(--text-secondary);
}

:deep(.j-string) {
  color: #ce9178;
}

:deep(.j-bool) {
  color: #569cd6;
}

:deep(.j-num) {
  color: #b5cea8;
}

/* ==============================
 * WebSocket 测试栏
 * ============================== */
.ws-badge {
  font-size: 11px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 10px;
  margin-left: auto;
}
.ws-badge--on {
  background: rgba(34, 197, 94, 0.12);
  color: #22c55e;
}
.ws-badge--pending {
  background: rgba(245, 158, 11, 0.12);
  color: #f59e0b;
}
.ws-badge--off {
  background: rgba(239, 68, 68, 0.08);
  color: #ef4444;
}

.ws-conn-row {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.ws-sub-row {
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
}

.ws-subs {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 10px;
}

.ws-sub-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 10px;
  font-size: 11px;
  font-weight: 500;
  color: var(--accent);
  background: var(--accent-alpha-01);
  border: 1px solid var(--accent-alpha-02);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.15s;
}
.ws-sub-tag:hover {
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.3);
  color: #ef4444;
}

.ws-log-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 6px;
}

.ws-log-actions {
  display: flex;
  gap: 6px;
}

.ws-raw-log {
  width: 100%;
  height: 360px;
  padding: 10px;
  border: 1px solid var(--input-border);
  border-radius: 6px;
  background: var(--input-bg);
  color: var(--text-primary);
  font-family: 'Consolas', 'Courier New', monospace;
  font-size: 12px;
  line-height: 1.5;
  resize: vertical;
  outline: none;
  white-space: pre;
  overflow-y: auto;
}

.ws-raw-log::placeholder {
  color: var(--text-tertiary);
}

.type-unsubscribe {
  color: #f59e0b;
  background: rgba(245, 158, 11, 0.1);
}

.type-info {
  color: var(--text-secondary);
  background: var(--btn-hover-bg);
}

.type-error {
  color: #ef4444;
  background: rgba(239, 68, 68, 0.1);
}

.ws-log-uri {
  color: var(--accent);
  font-size: 11px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
}

.ws-log-data {
  margin: 0;
  padding: 4px 0 0;
  font-size: 11px;
  line-height: 1.5;
  color: var(--text-primary);
  white-space: pre-wrap;
  word-break: break-all;
}

.ws-log-data code {
  font-size: 11px;
  font-family: 'Consolas', 'Courier New', monospace;
}
</style>
