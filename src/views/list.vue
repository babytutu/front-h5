<template>
  <listWarper @getData="getData" ref="list">
    <template v-slot="item">
      <van-cell :title="item.data.title" :value="item.data.value" :label="item.data.label" :is-link="item.data.link" :to="item.data.to" />
    </template>
  </listWarper>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import listWarper from '@/components/list.vue'
export default defineComponent({
  name: 'listView',
  data () {
    return {
      value: '',
      size: 20
    }
  },
  components: {
    listWarper,
  },
  methods: {
    /**
     * 分页获取数据
     * @param {Number} page 当前页数
     */
    getData (page: number) {
      setTimeout(() => {
        const list = this.mockData(page)
        const listDom: any = this.$refs.list
        listDom && listDom.renderList(list, list.length < this.size)
      }, 500)
    },
    /**
     * 模拟接口数据
     */
    mockData (page: number) {
      const arr = []
      if (page < 5) {
        for (let i = 1; i < 21; i++) {
          arr.push({
            title: `序号 ${i}`,
            value: `页码 ${page}`,
            id: i + '' + page,
            link: true,
            to: `/detail/${page}/${i}`
          })
        }
      }
      return arr
    }
  }
})
</script>
