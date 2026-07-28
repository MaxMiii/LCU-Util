# Update Log

## v0.2.0 - 测试第二个版本

### 新增功能
- **系统设置页面** — 新增系统设置页，首项为"打开调试界面"，点击后打开 Chrome DevTools
- **评分趋势图** — 主页最近比赛下方新增 ECharts 评分折线图，展示近 20 场评分分布、胜负颜色标记、平均分参考线
- **gameMode 列** — 比赛表格新增"游戏模式"列
- **地图分类 fallback** — EncyclopediaView 在非 Electron 环境下使用硬编码地图分类，避免显示"无法获取地图分类"

### 国际化 (i18n)
- **全量文本审计** — 扫描所有页面，将硬编码中文文本全部替换为 `$t()` 引用
- **新增翻译键** — 为 IndexView（评分趋势/图表 tooltip）、EncyclopediaView（地图名/加载错误）、ApiView（连接设置/请求配置/响应/WebSocket 等约 50 组）增加中英文对照
- **动态语言适配** — EncyclopediaView 的 localeCompare 由固定 `'zh-CN'` 改为 `i18n.language`

### Bug 修复
- **生产环境 IPC 失效** — preload.js 中 `require('ws')` 因 `ws` 包不在 `dependencies` 中导致脚本崩溃，所有 IPC 通信失败。修复：将 `ws` 加入生产依赖 + try-catch 保护
- **关闭窗口不退出** — 点击关闭后进程驻留后台，改为直接调用 `app.quit()`
- **电子打包配置兼容** — 适配 electron-builder 24.13.3，macOS 配置改为 camelCase（`entitlementsInherit`），移除 NSIS 废弃属性 `requestedExecutionLevel`
- **EncyclopediaView `useTranslation` 报错** — `i18next-vue` 的 `useTranslation()` 不返回 `i18n` 实例，改为直接导入 i18n 模块
- **滚动条超出圆角** — profile-card 设置 `overflow: hidden auto` + 自定义滚动条样式（不滚动透明，悬停显示）

### 品牌与文档
- **品牌重命名** — 全项目 "CyberTech/赛博/" 统一替换为 "LCU-Util"（package.json、electron-builder、i18n、README 等 8 个文件）
- **README 英文版** — 新增 `README.en.md`，中英文版本互加跳转链接
- **Logo** — 生成 256×256 ICO 格式 favicon.ico（大写 L 蓝青渐变带发光效果）
