<template>
  <van-cell-group>
    <template v-if="weatherInfo.city">
      <van-cell :title="weatherInfo.city" :value="weatherInfo.reporttime" />
      <van-cell
        v-for="i in weatherInfo.casts"
        :key="i.date"
        :title="i.date"
        :value="weeks[i.week ? i.week - 1 : 0]"
      >
        <template #label>
          {{
            i.dayweather +
            '~' +
            i.nightweather +
            ' (' +
            i.nighttemp +
            '℃~' +
            i.daytemp +
            '℃)'
          }}
        </template>
      </van-cell>
    </template>
    <van-field
      v-model="fieldValue"
      is-link
      readonly
      label="其他城市"
      placeholder="请选择"
      @click="show = true"
    />
    <van-popup v-model:show="show" position="bottom">
      <van-area
        title="标题"
        :area-list="areaList"
        :columns-num="2"
        @confirm="onConfirm"
      />
    </van-popup>
    <template v-if="cityInfo.city">
      <van-cell :title="cityInfo.city" :value="cityInfo.reporttime" />
      <van-cell
        v-for="i in cityInfo.casts"
        :key="i.date"
        :title="i.date"
        :value="weeks[i.week ? i.week - 1 : 0]"
      >
        <template #label>
          {{
            i.dayweather +
            '~' +
            i.nightweather +
            ' (' +
            i.nighttemp +
            '℃~' +
            i.daytemp +
            '℃)'
          }}
        </template>
      </van-cell>
    </template>
  </van-cell-group>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { showLoadingToast, showFailToast, closeToast } from 'vant'
import { getWeather, getLoaction } from '@/plugins/amap'
import { areaList } from '@vant/area-data'

import 'vant/es/toast/style'

const weatherInfo = ref<any>({})
const show = ref(false)
const cityInfo = ref<any>({})
const fieldValue = ref('')
const weeks: Array<string> = [
  '周一',
  '周二',
  '周三',
  '周四',
  '周五',
  '周六',
  '周日',
]

const onConfirm = (data: any) => {
  show.value = false
  const [, { text, value }] = data.selectedOptions
  fieldValue.value = text
  getWeatherByCode(value)
    .then((res: any) => {
      cityInfo.value = res
    })
    .catch((err) => {
      showFailToast(err)
    })
}

const getWeatherByCode = (code: string) => {
  showLoadingToast({
    duration: 0,
    message: '加载中...',
    forbidClick: true,
  })

  return getWeather(code).then((res: any) => {
    const {
      count,
      forecasts: [weather],
    } = res
    closeToast()
    if (count === '1') {
      return {
        ...weather,
        code,
      }
    } else {
      showFailToast('天气预报查询失败')
    }
  })
}

onMounted(() => {
  getLoaction()
    .then((res: any) => {
      const { adcode } = res
      getWeatherByCode(adcode).then((res: any) => {
        weatherInfo.value = res
      })
    })
    .catch((err) => {
      showFailToast(err)
    })
})
</script>
