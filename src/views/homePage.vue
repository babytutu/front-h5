<template>
  <TGroup title="Home" :list="list" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { $http } from '@/plugins/axios'
import { $apis } from '@/plugins/apis'

interface res {
  list: Array<any>
}

const list = ref<Array<any>>([])

onMounted(async () => {
  // 加载列表配置
  const res: res = await $http.get($apis.list.list)
  list.value = res.list
})
</script>
