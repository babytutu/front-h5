<template>
  <groupModel v-if="info.casts && info.casts.length" :title="info.province + info.city" :list="info.casts">
    <template v-slot="{ data: {
      week, date, dayweather, nightweather, nighttemp, daytemp
    } }">
      <van-cell :title="date" :value="weeks[week - 1]">
        <template #label>
          <p>{{dayweather + '~' + nightweather + ' (' +nighttemp + '℃~' + daytemp + '℃)'}}</p>
        </template>
      </van-cell>
    </template>
  </groupModel>
  <van-divider />
  <van-button block to="/city">返回</van-button>
</template>
<script>
import { getWeather } from '@/plugins/amap'
import groupModel from '@/components/group.vue'

export default {
  name: 'weatherView',
  components: {
    groupModel
  },
  data () {
    return {
      info: {},
      weeks: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    }
  },
  created () {
    this.$toast.loading({
      duration: 0,
      message: '加载中...',
      forbidClick: true,
    })
    getWeather(this.$route.params.adcode).then(res => {
      const {
        forecasts: [
          info,
        ]
      } = res
      this.info = info
      this.$toast.clear()
    }).catch(() => {
      this.$toast.clear()
    })
  }
}
</script>
