<template>
  <groupModel v-if="weatherInfo.casts && weatherInfo.casts.length" :title="weatherInfo.province + weatherInfo.city" :list="weatherInfo.casts">
    <template v-slot="{ data: {
      week, date, dayweather, nightweather, nighttemp, daytemp
    } }">
      <van-cell :title="date" :value="weeks[week ? week - 1 : 0]">
        <template #label>
          <p>{{dayweather + '~' + nightweather + ' (' +nighttemp + '℃~' + daytemp + '℃)'}}</p>
        </template>
      </van-cell>
    </template>
  </groupModel>
  <van-divider />
  <van-button block to="/city">返回</van-button>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { Toast } from 'vant'
import { getWeather } from '@/plugins/amap'
import groupModel from '@/components/group.vue'

const route = useRoute()

const weeks: Array<string> = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']

const weatherInfo = ref({
  casts: [],
  province: '',
  city: ''
})

onMounted(() => {
  Toast.loading({
    duration: 0,
    message: '加载中...',
    forbidClick: true,
  })
  getWeather(route.params.adcode as string).then((res: any) => {
    const {
      forecasts: [
        info,
      ]
    } = res
    weatherInfo.value = info
    Toast.clear()
  }).catch(() => {
    Toast.clear()
  })
})
</script>
