# 前端集中营

基于[Vue CLI 3](https://cli.vuejs.org/)开发


## 部署相关

### 部署命令

```bash
npm install
npm run build
```
生成`dist`目录

### 服务器配置信息

> static/config.js

## 开发说明

### 安装依赖包

```bash
npm install
```

### 开启本地开发模式

- 默认端口9090，`vue.config.js`文件中配置

```bash
npm run serve
```

### 打包生成生产环境代码

```bash
npm run build
```

### 校验和修复代码错误

```bash
npm run lint
```

### 页面开发

已有3个页面，可按照路径添加

- 页面路由配置`router.js`
- 页面目录`views`
- 对还需完善信息，增加`@todo`标记

### 其他设置

> babel

babel.config.js

> webpack

vue.config.js

## 与后端协作

### 接口配置

src/plugins/axios.js

### 接口地址

src/utils/api.js

### 接口异常处理

接口状态非200，回参数result_code非1，在接口配置文件`src/plugins/axios.js`统一处理异常

## src目录结构

```
├── public               // 非打包文件目录
│   ├── data             // 数据目录
│   ├── static           // 静态资源目录
│   │    ├── css         // 基础样式
│   │    └── img         // 图片
│   ├── favicon.ico      // 网站图标
│   └── index.html       // html模版
├── src                  // 前端代码目录
│   ├── components       // 组件目录
│   ├── plugins          // 插件目录
│   ├── utils            // 模块目录
│   ├── views            // 页面
│   ├── App.vue          // 前端模版入口
│   ├── main.js          // webpack入口
│   └── router.js        // 页面路由配置
├── .editorconfig        // 编辑器配置
├── .eslintrc.js         // eslint配置，代码规范
├── .gitignore           // git忽略文件
├── .npmrc               // npm配置, 指向淘宝服务器
├── babel.config.js      // babel配置
├── package.json         // node工程配置
├── README.md            // 说明文档
└── vue.config.js        // vue-cli配置
```

