import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

import { createHtmlPlugin } from 'vite-plugin-html'

import manualChunks from './manualChunks.json'

const exec = require('child_process').execSync

// 获取最后一次提交的commitID,处理异常报错
let version
try {
  version = exec('git rev-parse --short HEAD').toString().replace(/\n/, '')
} catch (e) {
  /* eslint-disable no-console */
  console.warn('Getting revision FAILED. Maybe this is not a git project.')
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    createHtmlPlugin({
      minify: true,
      /**
       * 在这里写entry后，你将不需要在`index.html`内添加 script 标签，原有标签需要删除
       * @default src/main.ts
       */
      entry: 'src/main.ts',
      /**
       * 需要注入 index.html ejs 模版的数据
       */
      inject: {
        data: {
          title: 'FRONT-H5',
          version,
        },
      }
    }),
    vueJsx(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3002,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks,
      }
    }
  }
})
