<template>
  <groupModel :title="i.title" :list="i.list" v-for="i in list" :key="i.id" />
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { _axios } from '@/plugins/axios'
import { apis } from '@/plugins/apis'
import groupModel from '@/components/group.vue'

interface res {
  data: Array<any>
}

const list = ref([] as Array<any>)

onMounted(async () => {
  const res: res = await _axios.get(apis.list.qa)
  list.value = res.data
})
</script>
