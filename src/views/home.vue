<template>
  <groupModel title="Home" :list="list" />
</template>
<script>
import groupModel from '@/components/group.vue'

export default {
  name: 'HomeView',
  components: {
    groupModel
  },
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
