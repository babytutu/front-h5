<template>
  <groupModel title="详情" :list="list" />
  <van-divider />
  <van-button block to="/list">返回</van-button>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import groupModel from '@/components/group.vue'

const route = useRoute()

const list = [
  {
    title: '页码',
    value: Number(route.params.page)
  },
  {
    title: '序号',
    value: Number(route.params.index)
  },
]
</script>
