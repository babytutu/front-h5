<template>
  <TGroup v-for="i in list" :key="i.id" :title="i.title" :list="i.list" />
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { $http } from '@/plugins/axios'
import { $apis } from '@/plugins/apis'

interface res {
  data: Array<any>
}

const list = ref<Array<any>>([])

onMounted(async () => {
  // 查询列表数据
  const res: res = await $http.get($apis.list.qa)
  list.value = res.data
})
</script>
