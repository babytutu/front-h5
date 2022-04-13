<template>
  <listWarper @getData="getData" ref="list">
    <template v-slot="item">
      <van-cell :title="item.data.title" :value="item.data.value" :label="item.data.label" :is-link="item.data.link" :to="item.data.to" />
    </template>
  </listWarper>
</template>
<script>
import { Cell } from 'vant'
import listWarper from '@/components/list.vue'
export default {
  name: 'listView',
  data () {
    return {
      value: '',
      size: 20
    }
  },
  components: {
    listWarper,
    [Cell.name]: Cell,
  },
  methods: {
    /**
     * 分页获取数据
     * @param {Number} page 当前页数
     */
    getData (page) {
      setTimeout(() => {
        const list = this.mockData(page)
        this.$refs.list && this.$refs.list.renderList(list, list.length < this.size)
      }, 500)
    },
    /**
     * 模拟接口数据
     */
    mockData (page) {
      const arr = []
      if (page < 5) {
        for (let i = 1; i < 21; i++) {
          arr.push({
            title: `Index ${i}`,
            value: `Page ${page}`,
            id: i + '' + page,
            link: true,
            to: `/detail/${page}/${i}`
          })
        }
      }
      return arr
    }
  }
}
</script>
