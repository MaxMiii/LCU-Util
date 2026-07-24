# LCU-Util

[中文版本](README.md)

**LCU-Util** — A modern desktop application built with Vue 3 + Electron + TypeScript, integrating the League of Legends Client (LCU) API to provide real-time summoner information, match history, encyclopedia, and more.

---

## Runtime Environment

| Tool       | Version    |
|------------|------------|
| Node.js    | v24.18.0   |
| Yarn       | 1.22.22    |
| TypeScript | ~5.1.0     |

---

## Tech Stack

| Category              | Dependency               | Version    |
|-----------------------|--------------------------|------------|
| **Frontend Framework**| vue                      | ^3.2.13    |
| **UI Library**        | element-plus             | ^2.2.0     |
| **State Management**  | pinia                    | ^4.0.2     |
| **Router**            | vue-router               | ^4.0.16    |
| **Build Tool**        | @vue/cli-service         | ~5.0.0     |
| **CSS Preprocessor**  | sass                     | ^1.54.0    |
| **CSS Preprocessor**  | sass-loader              | ^13.0.2    |
| **Desktop Framework** | electron                 | 28.3.3     |
| **Packaging Tool**    | electron-builder         | ^24.6.0    |
| **HTTP Client**       | axios                    | ^1.18.1    |
| **Animation**         | animate.css              | ^4.1.1     |
| **Polyfill**          | core-js                  | ^3.8.3     |
| **i18n**              | i18next                  | ^26.3.6    |
| **i18n**              | i18next-vue              | ^5.4.0     |
| **Linting**           | eslint                   | ^7.32.0    |
| **Linting**           | @typescript-eslint       | ^5.62.0    |
| **Linting**           | eslint-plugin-vue        | ^8.0.3     |
| **Babel**             | @babel/core              | ^7.12.16   |
| **Babel**             | @babel/preset-typescript | ^7.29.7    |
| **Other**             | nodemon                  | ^3.0.0     |
| **Other**             | concurrently             | ^8.0.0     |
| **Other**             | cross-env                | ^7.0.3     |
| **Other**             | wait-on                  | ^7.0.0     |
| **Other**             | electron-devtools-installer | ^3.2.0 |

---

## Project Architecture

```
src/
├── api/                    # Auto-generated LCU API modules (60+ modules)
├── i18n/                   # Internationalization configuration
│   ├── locales/
│   │   ├── zh-CN.ts        # Chinese language pack
│   │   └── en-US.ts        # English language pack
│   └── index.ts            # i18next initialization & setup
├── router/
│   └── index.ts            # Vue Router config (Hash/History auto-adapt)
├── stores/
│   └── chat-store.ts       # Pinia global state (summoner data, match history, WebSocket)
├── utils/
│   ├── lcu-request.ts      # LCU HTTP API request wrapper
│   ├── lcu-event-bus.ts    # LCU WebSocket event bus
│   ├── lcu-websocket.ts    # LCU WebSocket connection management
│   ├── match-score.ts      # Match scoring / tagging utility
│   └── request.ts          # Generic HTTP request wrapper
├── views/
│   ├── DashboardView.vue           # Dashboard (title bar + sidebar + router outlet)
│   ├── DashboardPlaceholder.vue    # Placeholder page
│   └── main/
│       ├── IndexView.vue           # Home page (summoner info, real-time status, match history)
│       ├── ApiView.vue             # API testing page
│       └── EncyclopediaView.vue    # Encyclopedia (champion skins + item details)
├── App.vue                # Root component (glassmorphism theme CSS variables + background)
├── main.ts                # Application entry point
└── shims-vue.d.ts         # TypeScript type declarations
```

---

## Features

### ✅ Completed

- **LCU Auto Connection** — Automatically detects League Client process, communicates via WebSocket + HTTP API in real time
- **Summoner Info Display** — Avatar, level, XP progress, online status, rank information
- **Real-Time Status Updates** — Listens to `/lol-chat/v1/me` via WebSocket, reflects status (online/in-game/in-queue, etc.) in real time
- **Recent Match History** — Fetches game history, displayed in a table (time, champion, result, KDA, score, duration)
- **Match Scoring System** — Auto-scoring based on KDA algorithm with MVP / SVP / "Scapegoat" labels
- **Background Decoration** — Fetches LCU background decoration images and listens for change events for real-time updates
- **Encyclopedia** — Champion skin carousel + item detail modals (price, description, build recipe)
- **API Testing Page** — HTTP request debugging + WebSocket message send/receive
- **Multi-Tab Navigation** — Home / API Test / Encyclopedia / Settings
- **Glassmorphism UI Theme** — Consistent dark frosted-glass style with dark semi-transparent backgrounds and blur effects
- **Internationalization** — i18next + i18next-vue, supports Chinese/English switching, automatic browser language detection
- **Window Controls** — Custom title bar with minimize / maximize-restore / close buttons
- **Data Caching** — Summoner info persisted to localStorage, no repeated requests on page navigation

### 🚧 Upcoming

> More features are under continuous development…

---

## Development Commands

```bash
# Install dependencies
yarn install

# Development mode (Web)
yarn serve

# Development mode (Electron)
yarn electron:serve

# Production build (Web)
yarn build

# Production build + package (Electron)
yarn electron:build

# Type checking
yarn type-check

# Lint
yarn lint
```

---

## Related Links

- [League Custom Lobby](https://github.com/XHXIAIEIN/LeagueCustomLobby)
- [Riot Games API - Regional Routing Values](https://developer.riotgames.com/docs/lol#routing-values_regional-routing-values)

---

## Project Highlights

- **Tech Stack**: Vue 3 + Electron 28+ + Element-Plus
- **UI Style**: Minimalist premium dark theme with glassmorphism effects
- **Background Animation**: Slowly floating ambient glow, subtle diffusion gradients, flowing lines
- **Window Design**: Frameless window with custom title bar supporting drag-and-move
- **Scrollbar**: Slim minimal custom scrollbar displayed only inside the application
- **Security**: Follows Electron latest security best practices using contextIsolation

## Security Features

- Context Isolation (`contextIsolation: true`)
- Node Integration disabled (`nodeIntegration: false`)
- Safe API exposure via preload script
- Protection against prototype pollution and XSS attacks

## Notes

1. The project uses Electron's frameless window, with `backgroundMaterial: 'acrylic'` to resolve the window shadow issue on Windows
2. All styles are written in SCSS, keeping code clean with detailed comments
3. Scrollbar styles apply only to the internal application container, not affecting global scroll
4. Window control buttons have hover and active state animations
5. Background animations use CSS3 `@keyframes`, optimized for performance
6. Color scheme uses low-saturation tones to reduce visual fatigue

## Additional Documentation

- [Style Refactoring Notes](STYLE_REFACTOR.md)
