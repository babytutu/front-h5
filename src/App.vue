<template>
  <div id="nav">
    <van-nav-bar :fixed="true" :title="$route.meta.title" left-text="主页" left-arrow @click-left="onClickLeft" />
  </div>
  <router-view />
</template>
<script>
export default {
  methods: {
    onClickLeft () {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="stylus">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top 46px
}
</style>
