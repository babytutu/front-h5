<template>
  <groupModel v-for="i in list" :key="i.id" :title="i.title" :list="i.childs">
    <template v-slot="{ data }">
      <van-cell :title="data.title" is-link value="天气查询" :to="`/weather/${data.value}`">
      </van-cell>
    </template>
  </groupModel>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import groupModel from '@/components/group.vue'
export default defineComponent({
  name: 'weatherView',
  components: {
    groupModel,
  },
  data() {
    return {
      list: [] as any[],
    }
  },
  created() {
    this.$toast.loading({
      duration: 0,
      message: '加载中...',
      forbidClick: true,
    })
    this.$axios.get(this.$apis.weather.city).then((res: any) => {
      this.list = res.list
      this.$toast.clear()
    }).catch(() => {
      this.$toast.clear()
    })
  }
})
</script>
