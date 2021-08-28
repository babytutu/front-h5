<template>
  <van-list>
    <van-cell-group :title="i.title" v-for="i in list" :key="i.id">
      <van-cell v-for="item in i.list" :key="item.id" :title="item.title" :label="item.content">
      </van-cell>
    </van-cell-group>
  </van-list>
</template>
<script>
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    this.$axios.get(this.$apis.list.qa, this.searchForm).then(res => {
      this.list = res.data
    })
  }
}
</script>
