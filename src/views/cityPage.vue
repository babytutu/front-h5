<template>
  <TGroup v-for="i in list" :key="i.id" :title="i.title" :list="i.childs">
    <template #default="{ data }">
      <van-cell
        :title="data.title"
        is-link
        value="天气查询"
        :to="`/weather/${data.value}`"
      >
      </van-cell>
    </template>
  </TGroup>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Toast } from 'vant'
import { $http } from '@/plugins/axios'
import { $apis } from '@/plugins/apis'

const list = ref<Array<any>>([])

onMounted(() => {
  Toast.loading({
    duration: 0,
    message: '加载中...',
    forbidClick: true,
  })
  // 加载城市列表
  $http
    .get($apis.weather.city)
    .then((res: any) => {
      list.value = res.list
      Toast.clear()
    })
    .catch(() => {
      Toast.clear()
    })
})
</script>
