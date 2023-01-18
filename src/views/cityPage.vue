<template>
  <TGroup v-for="i in list" :key="i.id" :title="i.title" :list="i.childs">
    <template #default="{ data }">
      <van-cell
        is-link
        :title="data.title"
        :to="`/weather/${data.value}`"
      >
        <template #value>
          {{weatherInfo[data.value]?.weather + '(' + weatherInfo[data.value]?.temperature + ')'}}
        </template>
        <template #label>
          {{weatherInfo[data.value]?.reporttime}}
        </template>
      </van-cell>
    </template>
  </TGroup>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { showLoadingToast, closeToast } from 'vant'
import { $http } from '@/plugins/axios'
import { $apis } from '@/plugins/apis'
import { getBatchWeather } from '@/plugins/amap'
import 'vant/es/toast/style'

const list = ref<Array<any>>([])
const weatherInfo = ref<any>({})

onMounted(() => {
  showLoadingToast({
    duration: 0,
    message: '加载中...',
    forbidClick: true,
  })
  // 加载城市列表
  $http
    .get($apis.weather.city)
    .then((res: any) => {
      list.value = res.list
      const citys = res.list.map((i: any) => i.childs).flat().map((j: any) => j.value)
      getBatchWeather(citys).then((res: any) => {
        res.forEach((resp: any) => {
          weatherInfo.value[resp.body.lives[0].adcode] = resp.body.lives[0]
        })
        closeToast()
      })
    })
    .catch(() => {
      closeToast()
    })
})
</script>
