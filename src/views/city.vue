<template>
<van-index-bar :index-list="indexList">
  <template v-for="i in list" :key="i.id">
    <van-index-anchor :index="i.title" />
    <groupModel :title="i.title" :list="i.childs">
      <template v-slot="{ data }">
        <van-cell :title="data.title" is-link :to="`/weather/${data.value}`">
        </van-cell>
      </template>
    </groupModel>
  </template>
</van-index-bar>
</template>
<script>
import { IndexBar, IndexAnchor, Cell, Toast } from 'vant'
import groupModel from '@/components/group.vue'
export default {
  name: 'weatherView',
  components: {
    [IndexBar.name]: IndexBar,
    [IndexAnchor.name]: IndexAnchor,
    [Cell.name]: Cell,
    groupModel,
  },
  data () {
    return {
      indexList: [],
      list: [],
    }
  },
  created () {
    Toast.loading({
      duration: 0,
      message: '加载中...',
      forbidClick: true,
    })
    this.$axios.get(this.$apis.weather.city).then(res => {
      this.list = res.list
      this.indexList = res.list.map(i => i.title)
      Toast.clear()
    }).catch(() => {
      Toast.clear()
    })
  }
}
</script>
<style lang="stylus" scoped>
>>> .van-index-bar__index {
  line-height: 1.5
}
</style>
