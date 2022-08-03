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
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const title = computed(() => route.meta.title + '')
</script>
