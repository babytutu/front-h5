<template>
  <groupModel v-for="i in list" :key="i.id" :title="i.title" :list="i.childs">
    <template v-slot="{ data }">
      <van-cell :title="data.title" is-link value="天气查询" :to="`/weather/${data.value}`">
      </van-cell>
    </template>
  </groupModel>
</template>
<script>
import groupModel from '@/components/group.vue'
export default {
  name: 'weatherView',
  components: {
    groupModel,
  },
  data () {
    return {
      indexList: [],
      list: [],
    }
  },
  created () {
    this.$toast.loading({
      duration: 0,
      message: '加载中...',
      forbidClick: true,
    })
    this.$axios.get(this.$apis.weather.city).then(res => {
      this.list = res.list
      this.indexList = res.list.map(i => i.title)
      this.$toast.clear()
    }).catch(() => {
      this.$toast.clear()
    })
  }
}
</script>
