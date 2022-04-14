<template>
  <navModel v-if="showNav" />
  <div class="app-content">
    <router-view/>
  </div>
  <div class="van-safe-area-bottom"></div>
</template>
<script>
import { watch } from 'vue'
import { usePageVisibility } from '@vant/use'
import { Notify } from 'vant'

import navModel from '@/components/nav.vue'
export default {
  components: {
    navModel
  },
  data () {
    return {
      // 微信不展示头部
      showNav: window.navigator.userAgent.toLowerCase().indexOf('micromessenger') <= -1,
    }
  },
  created () {
    watch(usePageVisibility(), (value) => {
      if (value === 'visible') {
        Notify({
          message: '欢迎回来',
          color: '#999',
          background: '#eee',
          position: 'bottom',
          duration: 1000
        })
      }
    })
  }
}
</script>

<style lang="stylus">
html,
body {
  height 100%
  overflow hidden
}
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  background: #f8f8f8
  height 100%
  display: flex
  flex-direction: column;
.app-content {
  flex 1
  overflow-x: hidden
  overflow-y: auto
}
</style>
