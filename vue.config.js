/**
 * ===================================================================
 * Vue CLI 配置文件 (vue.config.js)
 * ===================================================================
 * 作用：
 *   - 配置 Vue CLI 构建选项
 *   - 设置开发服务器端口
 *   - 适配 Electron 开发环境
 * ===================================================================
 */

const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  /**
   * 基础路径
   * 在 Electron 环境中使用相对路径
   */
  publicPath: './',

  /**
   * 输出目录
   * 打包结果输出到 dist 目录
   */
  outputDir: 'dist',

  /**
   * 静态资源目录
   * 静态资源输出到 static 目录
   */
  assetsDir: 'static',

  /**
   * 开发服务器配置
   * 适配 Electron 开发环境
   */
  devServer: {
    port: 5173,  // 开发服务器端口，配合 Electron 主进程
    hot: true,   // 启用热重载
    // 允许外部访问，方便 Electron 加载
    host: '0.0.0.0',
    // 代理配置（如果需要连接后端服务）
    proxy: null,
  },

  /**
   * 构建配置
   */
  configureWebpack: {
    // Webpack 额外配置
  },

  chainWebpack: config => {
    // 链式配置 Webpack
    
    // 配置别名
    config.resolve.alias
      .set('@', `${__dirname}/src`)
    
    // 添加 .ts 和 .tsx 文件扩展名解析
    config.resolve.extensions
      .prepend('.ts')
      .prepend('.tsx')
    
    // TypeScript 文件由 babel-loader 转译（@babel/preset-typescript）
    // 类型检查通过 npm run type-check 单独执行
    config.module
      .rule('ts')
      .test(/\.tsx?$/)
      .use('babel-loader')
        .loader('babel-loader')
        .end()
      .exclude
        .add(/node_modules/)
        .end()
    
    // 针对 Electron 环境的特殊配置
    if (process.env.NODE_ENV === 'production') {
      // 生产环境配置
      config.optimization.minimize(true)
    }
  },

  /**
   * CSS 相关配置
   */
  css: {
    // 提取 CSS 到单独文件
    extract: process.env.NODE_ENV === 'production',
    // 开发环境下将 CSS 注入到 DOM
    sourceMap: false,
    // 支持预处理器
    loaderOptions: {
      scss: {
        // 全局 SCSS 变量和混入（已移至 main.js 中导入）
      }
    }
  },

  /**
   * 构建模式
   * 默认为 spa (单页应用)
   */
  pages: {
    index: {
      // 入口文件
      entry: 'src/main.ts',
      // 模板文件
      template: 'public/index.html',
      // 输出文件
      filename: 'index.html',
      // 页面标题
      title: 'CyberTech System',
      // 注入到模板中的额外资源
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },

  /**
   * 文件名哈希
   */
  filenameHashing: true,

  /**
   * 生产环境移除 console
   */
  productionSourceMap: false,

  /**
   * 跨域资源共享配置
   */
  crossorigin: undefined,

  /**
   * 完整性校验
   */
  integrity: false,

  /**
   * 并行构建
   */
  parallel: true
})