<template>
  <TGroup
    v-if="weatherInfo.casts && weatherInfo.casts.length"
    :title="weatherInfo.province + weatherInfo.city"
    :list="weatherInfo.casts"
  >
    <template
      #default="{
        data: { week, date, dayweather, nightweather, nighttemp, daytemp },
      }"
    >
      <van-cell :title="date" :value="weeks[week ? week - 1 : 0]">
        <template #label>
          <p>
            {{
              dayweather +
              '~' +
              nightweather +
              ' (' +
              nighttemp +
              '℃~' +
              daytemp +
              '℃)'
            }}
          </p>
        </template>
      </van-cell>
    </template>
  </TGroup>
  <van-divider />
  <van-button block to="/city">返回</van-button>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { showLoadingToast, closeToast } from 'vant'
import { getWeather } from '@/plugins/amap'

const route = useRoute()

const weeks: Array<string> = [
  '周一',
  '周二',
  '周三',
  '周四',
  '周五',
  '周六',
  '周日',
]

interface WeatherInfo {
  casts: Array<any>
  province: string
  city: string
}

const weatherInfo = ref<WeatherInfo>({
  casts: [],
  province: '',
  city: '',
})

onMounted(() => {
  showLoadingToast({
    duration: 0,
    message: '加载中...',
    forbidClick: true,
  })
  // 查询城市天气
  getWeather(String(route.params.adcode))
    .then((res: any) => {
      const {
        forecasts: [info],
      } = res
      weatherInfo.value = info
      closeToast()
    })
    .catch(() => {
      closeToast()
    })
})
</script>
