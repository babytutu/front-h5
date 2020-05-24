// vue.config.js
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
const exec = require('child_process').execSync
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

const title = '前端集中营'

// 获取最后一次提交的commitID,处理异常报错
let version

try {
  // 获取githash
  version = exec('git log --pretty=format:"%h" -1').toString()
} catch (e) {
  /* eslint-disable no-console */
  console.warn('Getting revision FAILED. Maybe this is not a git project.')
}

module.exports = {
  // 选项...
  assetsDir: 'build',
  devServer: {
    port: 9999,
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            replace: false,
            propList: ['*'],
            // 该项仅在使用 Circle 组件时需要
            // 原因参见 https://github.com/youzan/vant/issues/1948
            selectorBlackList: ['van-circle__layer']
          })
        ]
      }
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = title
        args[0].version = version
        args[0].buildTime = new Date().toLocaleString()
        return args
      })

    config.resolve.alias
      .set('static', resolve('public/static'))
  }
}
