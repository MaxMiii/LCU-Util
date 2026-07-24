/**
 * ===================================================================
 * Electron Builder 配置文件 (electron-builder.config.js)
 * ===================================================================
 * 作用：
 *   - 配置 Electron 应用打包选项
 *   - 定义应用元数据（名称、版本、描述等）
 *   - 配置构建目标（Windows、macOS、Linux）
 *   - 设置安装程序选项
 * ===================================================================
 */

module.exports = {
  /**
   * 应用基本信息
   */
  productName: "CyberTech System",      // 应用名称
  appId: "com.cybertech.system",       // 应用 ID
  copyright: "Copyright © 2026 CyberTech", // 版权声明

  /**
   * 构建配置
   */
  directories: {
    output: "dist-electron",            // 打包输出目录
    buildResources: "resources"         // 构建资源目录
  },

  /**
   * Windows 构建配置
   */
  win: {
    target: [
      {
        target: "nsis",                 // NSIS 安装程序
        arch: ["x64"]                   // 支持架构
      }
    ],
    icon: "public/favicon.ico",         // 应用图标
    publisherName: "CyberTech",         // 发布商名称
    legalTrademarks: "CyberTech System is a trademark of CyberTech"
  },

  /**
   * NSIS 安装程序配置
   */
  nsis: {
    oneClick: false,                    // 不使用一键安装
    allowElevation: true,               // 允许权限提升
    allowToChangeInstallationDirectory: true, // 允许更改安装目录
    createDesktopShortcut: true,        // 创建桌面快捷方式
    createStartMenuShortcut: true,      // 创建开始菜单快捷方式
    requestedExecutionLevel: 'requireAdministrator', // 要求管理员权限运行
    installerIcon: "public/favicon.ico", // 安装程序图标
    uninstallerIcon: "public/favicon.ico" // 卸载程序图标
  },

  /**
   * 文件过滤配置
   */
  files: [
    "dist/**/*",                       // 包含打包后的文件
    "electron/**/*",                   // 包含 Electron 主进程文件
    "!node_modules/**/*",              // 排除 node_modules
    "!src/**/*",                       // 排除源代码
    "!public/**/*",                    // 排除公共静态资源（除了图标）
    "!.github/**/*",                   // 排除 GitHub 相关
    "!docs/**/*",                      // 排除文档
    "!tests/**/*",                     // 排除测试文件
    "!dist-electron/**/*"              // 排除之前的打包输出
  ],

  /**
   * 额外资源
   */
  extraResources: [
    {
      from: "public/",                  // 从 public 目录复制资源
      to: "public/",                    // 复制到应用内的 public 目录
      filter: ["**/*", "!index.html"]   // 复制所有文件，但排除 index.html
    }
  ],

  /**
   * dmg 配置 (macOS)
   */
  dmg: {
    contents: [
      {
        x: 410,
        y: 150,
        type: "link",
        path: "/Applications"
      },
      {
        x: 130,
        y: 150,
        type: "file"
      }
    ]
  },

  /**
   * macos 配置
   */
  mac: {
    target: {
      target: "default",
      arch: ["x64", "arm64"]
    },
    icon: "public/favicon.ico",
    hardenedRuntime: true,
    gatekeeperAssess: false,
    entitlements: "build/entitlements.mac.plist",
    "entitlements-inherit": "build/entitlements.mac.plist"
  },

  /**
   * Linux 配置
   */
  linux: {
    target: ["AppImage"],
    icon: "public/favicon.ico",
    maintainer: "CyberTech",
    vendor: "CyberTech",
    synopsis: "CyberTech Management System",
    description: "赛博科技管理系统 - 基于 Vue3 + Electron + Element-Plus 开发的现代化桌面应用",
    category: "Office"
  }
}