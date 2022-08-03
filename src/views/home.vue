<template>
  <groupModel title="Home" :list="list" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { _axios } from '@/plugins/axios'
import { apis } from '@/plugins/apis'
import groupModel from '@/components/group.vue'

interface res {
  list: Array<any>
}

let list = ref([] as Array<any>)

onMounted(async () => {
  const res: res = await _axios.get(apis.list.list)
  list.value = res.list
})
</script>
