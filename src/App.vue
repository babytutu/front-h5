<template>
  <navModel />
  <div class="app-content">
    <router-view/>
  </div>
  <div class="van-safe-area-bottom"></div>
</template>
<script>
import navModel from '@/components/nav.vue'
export default {
  components: {
    navModel
  },
  methods: {
    onClickLeft () {
      this.$router.push('/home')
    }
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
