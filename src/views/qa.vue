<template>
  <groupModel :title="i.title" :list="i.list" v-for="i in list" :key="i.id" />
</template>
<script>
import groupModel from '@/components/group.vue'
export default {
  name: 'qaView',
  data () {
    return {
      list: []
    }
  },
  components: {
    groupModel
  },
  created () {
    this.$axios.get(this.$apis.list.qa).then(res => {
      this.list = res.data
    })
  }
}
</script>
