const { defineConfig } = require('@vue/cli-service')

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
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 9999,
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
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/front-h5/'
    : '/',
})
