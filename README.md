# 前端集中营

基于[Vue CLI 5](https://cli.vuejs.org/)开发

升级使用vue3版本，搭配vant组件库，搭配GitHub Actions自动部署最新代码

## 部署相关

### 部署命令

```bash
yarn run build
```
生成`dist`目录

## 开发说明

### 安装依赖包

```bash
yarn
```

### 开启本地开发模式

- 默认端口9090，`vue.config.js`文件中配置

```bash
yarn start
```

### 打包生成生产环境代码

```bash
yarn run build
```

### 校验和修复代码错误

```bash
yarn run lint
```

## src目录结构

```
├── public               // 非打包文件目录
│   ├── data             // 数据目录
│   ├── static           // 静态资源目录
│   │    └── css         // 基础样式
│   ├── favicon.ico      // 网站图标
│   └── index.html       // html模版
├── src                  // 前端代码目录
│   ├── components       // 组件目录
│   ├── plugins          // 插件目录
│   ├── router           // 页面路由配置
│   ├── views            // 页面
│   ├── App.vue          // 前端模版入口
│   └── main.js          // webpack入口
├── .browserslistrc      // 浏览器支持
├── .editorconfig        // 编辑器配置
├── .eslintrc.js         // eslint配置，代码规范
├── .gitignore           // git忽略文件
├── .npmrc               // npm配置, 指向淘宝服务器
├── babel.config.js      // babel配置
├── package.json         // node工程配置
├── postcss.config.js    // postcss相关配置
├── README.md            // 说明文档
├── vue.config.js        // vue-cli配置
└── yarn.lock            // yarn锁
```

