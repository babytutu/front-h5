<template>
  <groupModel title="详情" :list="list" />
  <van-divider />
  <van-button block to="/list">返回</van-button>
</template>
<script>
import { Divider, Button } from 'vant'
import groupModel from '@/components/group.vue'
export default {
  name: 'detailView',
  components: {
    groupModel,
    [Divider.name]: Divider,
    [Button.name]: Button
  },
  computed: {
    list () {
      return [
        {
          title: '页码',
          value: this.$route.params.page
        },
        {
          title: '序号',
          value: this.$route.params.index
        },
      ]
    }
  }
}
</script>
