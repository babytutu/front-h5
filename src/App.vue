<template>
  <van-config-provider :theme="isDarkMode ? 'dark' : 'light'">
    <div class="warper">
      <TNav v-if="showNav" />
      <div class="app-content">
        <router-view />
      </div>
      <div class="van-safe-area-bottom"></div>
    </div>
    <van-icon name="wap-home" class="backToHome" @click="$router.push('/')" />
  </van-config-provider>
</template>

<script setup lang="ts">
const showNav = window.navigator.userAgent.toLowerCase().indexOf('micromessenger') <= -1
const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
</script>

<style lang="stylus">
html,
body {
  height 100%
  overflow hidden
}
#app {
  height: 100vh;
  display: flex;
  overflow: hidden;
  flex-direction: column;
}

.app-content {
  flex 1
  overflow: auto
}

.warper {
  height: 100vh;
  display: flex;
  overflow: auto;
  flex-direction: column;
}
.backToHome {
  position absolute
  bottom 10px
  right 10px
  padding 5px
  font-size 24px
  background rgba(255, 255, 255, .2)
  border-radius 100%
}
</style>
