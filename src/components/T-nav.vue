<template>
  <van-nav-bar
    :title="title"
    @click-left="$router.go(-1)"
    @click-right="$router.push('/')"
  >
    <template v-if="$route.path !== '/'" #left>
      <van-icon name="arrow-left" color="#333" size="20" />
    </template>
    <template v-if="$route.path !== '/'" #right>
      <van-icon name="wap-home-o" color="#333" size="20" />
    </template>
  </van-nav-bar>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const title = computed<string>(() => route.meta.title as string)
</script>
