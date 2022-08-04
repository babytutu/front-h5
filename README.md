# 前端集中营

基于create-vue开发，搭配使用ts,vue-router,pinia,vite

使用vue3版本，搭配vant组件库，搭配GitHub Actions自动部署最新代码

## 部署相关

### 部署命令

```bash
yarn build
```
生成`dist`目录

## 开发说明

### 安装依赖包

```bash
yarn
```

### 开启本地开发模式

- 默认端口9090，`vite.config.js`文件中配置

```bash
yarn start
```

### 打包生成生产环境代码

```bash
yarn build
```

### 校验和修复代码错误

```bash
yarn lint
```

## src目录结构

```
├── public               // 非打包文件目录
│   ├── data             // 数据目录
│   ├── static           // 静态资源目录
│   │    └── css         // 基础样式
│   └── favicon.ico      // 网站图标
├── src                  // 前端代码目录
│   ├── components       // 组件目录
│   ├── plugins          // 插件目录
│   ├── router           // 页面路由配置
│   ├── stores           // 状态管理pinia
│   ├── views            // 页面
│   ├── App.vue          // 前端模版入口
│   └── main.ts          // webpack入口
├── .editorconfig        // 编辑器配置
├── .eslintrc.cjs        // eslint配置，代码规范
├── .gitignore           // git忽略文件
├── .npmrc               // npm配置, 指向淘宝服务器
├── components.d.ts      // 组件按需加载自动更新
├── env.d.ts             // vite配置文件
│── index.html           // html模版
├── manualChunks.json    // 自定义打包配置
├── package.json         // node工程配置
├── postcss.config.js    // postcss相关配置
├── README.md            // 说明文档
├── tsconfig.config.json // ts配置（node）
├── tsconfig.json        // ts配置（web）
├── vite.config.js       // vite配置
└── yarn.lock            // yarn锁
```
