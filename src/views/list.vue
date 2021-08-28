<template>
  <section>
    <van-list >
      <!--@see https://youzan.github.io/vant/#/zh-CN/cell -->
      <van-cell-group :title="i.title" v-for="i in list" :key="i.id">
        <van-cell v-for="item in i.list" :key="item.id" :title="item.title" :label="item.content">
        </van-cell>
      </van-cell-group>
    </van-list>
  </section>
</template>
<script>
export default {
  data () {
    return {
      list: [],
    }
  },
  created () {
    this.$axios.get(this.$apis.list.qa, this.searchForm).then(res => {
      this.list = res.data
    })
  },
}
</script>
