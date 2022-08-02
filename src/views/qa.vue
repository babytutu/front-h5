<template>
  <groupModel :title="i.title" :list="i.list" v-for="i in list" :key="i.id" />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import groupModel from '@/components/group.vue'
export default defineComponent({
  name: 'qaView',
  data () {
    return {
      list: [] as Array<any>
    }
  },
  components: {
    groupModel
  },
  created () {
    this.$axios.get(this.$apis.list.qa).then((res: any) => {
      this.list = res.data
    })
  }
})
</script>
