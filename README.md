# CyberTech System

[English Version](README.en.md)

LCU-Util —— 基于 Vue 3 + Electron + TypeScript 的现代桌面应用，集成英雄联盟客户端（LCU）API，提供实时召唤师信息、比赛记录、百科大全等功能。

---

## 运行环境

| 工具 | 版本 |
|------|------|
| Node.js | v24.18.0 |
| Yarn | 1.22.22 |
| TypeScript | ~5.1.0 |

---

## 技术栈

| 类别 | 依赖 | 版本 |
|------|------|------|
| **前端框架** | vue | ^3.2.13 |
| **UI 库** | element-plus | ^2.2.0 |
| **状态管理** | pinia | ^4.0.2 |
| **路由** | vue-router | ^4.0.16 |
| **构建工具** | @vue/cli-service | ~5.0.0 |
| **CSS 预处理器** | sass | ^1.54.0 |
| **CSS 预处理器** | sass-loader | ^13.0.2 |
| **桌面框架** | electron | 28.3.3 |
| **打包工具** | electron-builder | ^24.6.0 |
| **HTTP 请求** | axios | ^1.18.1 |
| **动画** | animate.css | ^4.1.1 |
| **Polyfill** | core-js | ^3.8.3 |
| **国际化** | i18next | ^26.3.6 |
| **国际化** | i18next-vue | ^5.4.0 |
| **代码规范** | eslint | ^7.32.0 |
| **代码规范** | @typescript-eslint/eslint-plugin | ^5.62.0 |
| **代码规范** | eslint-plugin-vue | ^8.0.3 |
| **Babel** | @babel/core | ^7.12.16 |
| **Babel** | @babel/preset-typescript | ^7.29.7 |
| **其他** | nodemon | ^3.0.0 |
| **其他** | concurrently | ^8.0.0 |
| **其他** | cross-env | ^7.0.3 |
| **其他** | wait-on | ^7.0.0 |
| **其他** | electron-devtools-installer | ^3.2.0 |

---

## 项目架构

```
src/
├── api/                    # LCU API 自动生成的接口模块（60+ 模块）
├── i18n/                   # 国际化配置
│   ├── locales/
│   │   ├── zh-CN.ts        # 中文语言包
│   │   └── en-US.ts        # 英文语言包
│   └── index.ts            # i18next 初始化与安装
├── router/
│   └── index.ts            # Vue Router 路由配置（Hash/History 自适应）
├── stores/
│   └── chat-store.ts       # Pinia 全局状态（召唤师数据、比赛记录、WebSocket）
├── utils/
│   ├── lcu-request.ts      # LCU HTTP API 请求封装
│   ├── lcu-event-bus.ts    # LCU WebSocket 事件总线
│   ├── lcu-websocket.ts    # LCU WebSocket 连接管理
│   ├── match-score.ts      # 比赛评分/标签工具
│   └── request.ts          # 通用 HTTP 请求封装
├── views/
│   ├── DashboardView.vue           # 仪表盘（标题栏 + 侧边栏 + 路由出口）
│   ├── DashboardPlaceholder.vue    # 占位页面
│   └── main/
│       ├── IndexView.vue           # 主页（召唤师信息 + 实时状态 + 比赛记录）
│       ├── ApiView.vue             # API 测试页
│       └── EncyclopediaView.vue    # 百科大全（英雄皮肤 + 物品详情）
├── App.vue                # 根组件（毛玻璃主题 CSS 变量 + 背景图）
├── main.ts                # 应用入口
└── shims-vue.d.ts         # TypeScript 类型声明
```

---

## 功能介绍

### ✅ 已完成

- **LCU 自动连接** — 自动检测英雄联盟客户端进程，通过 WebSocket + HTTP API 实时通信
- **召唤师信息展示** — 头像、等级、经验值进度、在线状态、段位信息
- **实时状态更新** — 通过 WebSocket 监听 `/lol-chat/v1/me`，实时反映在线/游戏中/队列中等状态
- **最近比赛记录** — 获取对局历史，表格展示（时间、英雄、结果、KDA、评分、时长）
- **比赛评分系统** — 基于 KDA 算法自动评分，MVP / SVP / 甩锅 标签
- **背景图装饰** — 获取 LCU 背景装饰图并监听更换事件，实时更新
- **百科大全** — 英雄皮肤走马灯展示 + 物品详情弹窗（含价格、描述、合成配方）
- **API 测试页** — HTTP 请求调试 + WebSocket 消息收发
- **多标签页** — 主页 / API 测试 / 百科大全 / 系统设置
- **毛玻璃 UI 主题** — 全局统一深色毛玻璃风格，暗色半透明背景 + 磨砂效果
- **国际化** — i18next + i18next-vue，支持中/英文切换，浏览器语言自动检测
- **窗口控制** — 自定义标题栏，最小化 / 最大化还原 / 关闭
- **数据缓存** — 召唤师信息持久化到 localStorage，页面切换不重复请求

### 🚧 未完待续

> 更多功能持续开发中……

---

## 开发命令

```bash
# 安装依赖
yarn install

# 开发模式（Web）
yarn serve

# 开发模式（Electron）
yarn electron:serve

# 生产构建（Web）
yarn build

# 生产构建 + 打包（Electron）
yarn electron:build

# 类型检查
yarn type-check

# 代码检查
yarn lint
```
https://github.com/XHXIAIEIN/LeagueCustomLobby

https://developer.riotgames.com/docs/lol#routing-values_regional-routing-values








# CyberTech System

基于 Vue3 + Electron + Element-Plus 开发的现代化桌面应用。

## 项目特性

- **技术栈**：Vue 3 + Electron 28+ + Element-Plus
- **界面风格**：简约高级浅色主题，低饱和度配色
- **背景动画**：缓慢浮动的朦胧光晕、微弱扩散渐变、缓慢流动线条
- **窗口设计**：无边框窗口，自定义标题栏，支持拖拽移动
- **滚动条**：纤细简约的自定义滚动条，仅在应用内部显示
- **安全规范**：遵循 Electron 最新安全规范，使用 contextIsolation

## 项目结构

```
electron/
├── main.js          # Electron 主进程文件
└── preload.js       # 预加载脚本
src/
├── views/
│   └── login.vue    # 登录页面
├── router/
│   └── index.js     # 路由配置
├── style/
│   └── scrollbar.scss # 滚动条样式
├── App.vue          # 应用根组件
└── main.js          # Vue 入口文件
public/
├── favicon.ico
└── index.html
```

## 技术要求

- Node.js >= 16.x
- npm 或 yarn
- Electron 28+

## 安装依赖

由于系统执行策略限制，请以管理员身份运行 PowerShell，并执行以下命令来临时更改执行策略：

```bash
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

然后运行安装脚本：

```bash
./install-dependencies.bat
```

或者手动执行：

```bash
cd d:\code\test-vue
npm install
```

### 如果 Electron 环境检测失败

如果遇到 `isDev` 判断为 `false` 的问题，请确保已安装 `cross-env`：

```bash
npm install cross-env@^7.0.3
```

或运行：

```bash
./install-cross-env.bat
```

## 启动项目

### 开发模式（仅 Vue）

```bash
npm run serve
```

或运行：
```bash
./run-dev-server.bat
```

### Electron 开发模式

```bash
npm run electron:serve
```

或运行：
```bash
./run-electron-dev.bat
```

## 构建项目

### 构建 Vue 应用

```bash
npm run build
```

### 构建 Electron 应用

```bash
npm run electron:build
```

## 核心功能

### 1. Electron 主进程 (main.js)

- 无边框窗口设计，隐藏系统标题栏
- 窗口可拖拽区域设置 (-webkit-app-region: drag)
- 窗口控制：最小化、最大化/还原、关闭
- 开发环境自动开启 DevTools
- 安全配置：contextIsolation: true, nodeIntegration: false

### 2. 预加载脚本 (preload.js)

- 通过 contextBridge 暴露 window.electronAPI
- 封装窗口控制函数：winMin(), winMaxToggle(), winClose()
- 符合 Electron 最新安全规范

### 3. 简约高级风格登录页

- 浅色主题，低饱和度蓝紫配色
- 自定义标题栏，支持拖拽移动
- 缓慢浮动的朦胧光晕背景动画
- 白色半透明卡片 + 毛玻璃效果
- 输入框聚焦时柔和变色过渡

### 4. 自定义滚动条

- 纤细简约的滚动条样式（5px 宽度）
- 滚动条只存在于应用内部容器
- 美化的 Webkit 滚动条样式
- 低饱和度配色，与整体风格一致

## 路由配置

使用 Vue Router 4，history 模式（Electron 环境自动切换为 hash 模式）

## 安全特性

- 上下文隔离 (contextIsolation: true)
- 禁用 Node 集成 (nodeIntegration: false)
- 通过预加载脚本安全地暴露 API
- 防止原型污染和 XSS 攻击

## 注意事项

1. 项目使用了 Electron 的无边框窗口，在 Windows 下通过 backgroundMaterial: 'acrylic' 解决了窗口阴影问题
2. 所有样式使用 SCSS 编写，保持代码简洁，注释详细
3. 滚动条样式仅应用于应用内部容器，不影响全局滚动
4. 窗口控制按钮具有 hover 和 active 状态动画效果
5. 背景动画使用 CSS3 @keyframes 实现，性能优化良好
6. 配色采用低饱和度方案，减少视觉疲劳

## 更多文档

- [页面风格重构说明](STYLE_REFACTOR.md) - 详细的风格重构文档
