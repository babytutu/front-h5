<template>
  <section>
    <!--@see https://youzan.github.io/vant/#/zh-CN/cell -->
    <van-list>
      <van-cell
        v-for="item in list"
        :key="item.router"
        :title="item.title"
        is-link
        :label="item.label"
        :to="item.router">
        <template #right-icon v-if="item.arrow">
          <van-icon :name="item.arrow" size="16" />
        </template>
      </van-cell>
    </van-list>
  </section>
</template>
<script>
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    this.$axios.get(this.$apis.list.list).then(res => {
      this.list = res.list
    })
  }
}
</script>
