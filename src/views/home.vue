<template>
  <groupModel title="Home" :list="list" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import groupModel from '@/components/group.vue'

export default defineComponent({
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
    this.$axios.get(this.$apis.list.list).then((res: any) => {
      this.list = res.list
    })
  }
})
</script>
