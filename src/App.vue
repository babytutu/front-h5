<template>
  <div id="app">
    <!-- @see https://youzan.github.io/vant/#/zh-CN/sticky -->
    <van-sticky>
      <!-- @see https://youzan.github.io/vant/#/zh-CN/nav-bar -->
      <van-nav-bar
        :title="$route.meta.title"
        @click-left="$router.push('/')"
      >
        <template #left v-if="!$route.meta.home">
          <van-icon name="wap-nav" size="20" color="#666" />
        </template>
      </van-nav-bar>
    </van-sticky>
    <router-view/>
  </div>
</template>
<style lang="stylus" scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 24px;
  display flex;
  flex-direction: column;
}
</style>
