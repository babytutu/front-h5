<template>
  <van-nav-bar :title="title" @click-left="$router.go(-1)" @click-right="$router.push('/')">
    <template #left v-if="$route.path !== '/'">
      <van-icon name="arrow-left" color="#333" size="20" />
    </template>
    <template #right v-if="$route.path !== '/'">
      <van-icon name="wap-home-o" color="#333" size="20" />
    </template>
  </van-nav-bar>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'navModel',
  computed: {
    title (): string {
      return this.$route.meta.title + ''
    }
  },
})
</script>
