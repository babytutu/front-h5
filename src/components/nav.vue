<template>
  <van-nav-bar
    :title="$route.meta.title"
    @click-left="onClick('/')"
    @click-right="onClick('/list')">
    <template #right v-if="$route.path !== '/list'">
      <van-icon name="more-o" color="#333" size="20" />
    </template>
    <template #left v-if="$route.path !== '/'">
      <van-icon name="home-o" color="#333" size="20" />
    </template>
  </van-nav-bar>
</template>
<script>
import { NavBar, Icon } from 'vant'
export default {
  name: 'navModel',
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon
  },
  methods: {
    onClick (path) {
      this.$router.push(path)
    }
  }
}
</script>
