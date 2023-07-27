<template>
  <van-cell-group title="高德API">
    <van-field
      v-model="fieldValue"
      is-link
      readonly
      label="城市"
      placeholder="请选择"
      @click="show = true"
    />
    <van-popup v-model:show="show" position="bottom">
      <van-area
        v-model="current"
        title="标题"
        :area-list="areaList"
        :columns-num="2"
        @confirm="onConfirm"
      />
    </van-popup>
    <template v-if="cityInfo.city">
      <van-cell
        :title="cityInfo.province + '-' + cityInfo.city"
        :value="cityInfo.reporttime"
      />
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
import { showLoadingToast, closeToast } from 'vant'
import { $http } from '@/plugins/axios'
import { $apis } from '@/plugins/apis'
import 'vant/es/toast/style'

const show = ref(false)
const cityInfo = ref<any>({})
const fieldValue = ref('杭州市')
const weeks: Array<string> = [
  '周一',
  '周二',
  '周三',
  '周四',
  '周五',
  '周六',
  '周日',
]

const current = ref<string>('330100')

const areaList = ref<any>({
  province_list: {},
  city_list: {},
})

const onConfirm = (data: any) => {
  show.value = false
  const [
    { text: province, value: provinceCode },
    { text = '', value = '' } = {},
  ] = data.selectedOptions
  fieldValue.value = text || province
  getInfoByCode(value || provinceCode)
}

const getInfoByCode = (code: string) => {
  showLoadingToast({
    duration: 0,
    message: '加载中...',
    forbidClick: true,
  })

  $http
    .post($apis.api('amap'), {
      api: 'weather',
      data: `city=${code}`,
    })
    .then((res: any) => {
      cityInfo.value = res.forecasts[0]
      closeToast()
    })
}

const getDistrictAll = () => {
  $http
    .post($apis.api('amap'), {
      api: 'district',
    })
    .then((res: any) => {
      const {
        districts: [{ districts }],
      } = res
      districts.forEach((i: any) => {
        areaList.value.province_list[i.adcode] = i.name
        i.districts.forEach((j: any) => {
          areaList.value.city_list[j.adcode] = j.name
        })
      })
    })
}

onMounted(() => {
  getDistrictAll()
  getInfoByCode(current.value)
})
</script>
