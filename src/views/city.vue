<template>
  <groupModel v-for="i in list" :key="i.id" :title="i.title" :list="i.childs">
    <template v-slot="{ data }">
      <van-cell :title="data.title" is-link value="天气查询" :to="`/weather/${data.value}`">
      </van-cell>
    </template>
  </groupModel>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Toast } from 'vant'
import { _axios } from '@/plugins/axios'
import { apis } from '@/plugins/apis'
import groupModel from '@/components/group.vue'

let list = ref([] as Array<any>)

onMounted(() => {
  Toast.loading({
    duration: 0,
    message: '加载中...',
    forbidClick: true,
  })
  _axios.get(apis.weather.city).then((res: any) => {
    list.value = res.list
    Toast.clear()
  }).catch(() => {
    Toast.clear()
  })
})
</script>
