<template>
  <van-cell-group>
    <van-cell
      v-for="i in list"
      :key="i.title"
      :title="i.title"
      :to="i.to"
      is-link
    >
    </van-cell>
  </van-cell-group>
  <div v-if="isWeiXin" class="xcx">
    <van-image width="220" src="assets/xcx.png">
      <template v-slot:loading>
        <van-loading type="spinner" size="20" />
      </template>
    </van-image>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { $http } from '@/plugins/axios'
import { $apis } from '@/plugins/apis'

const list = ref<Array<any>>([])
const isWeiXin = ref<boolean>(false)

onMounted(async () => {
  // 加载列表配置
  const res: any = await $http.get($apis.list.list)
  list.value = res.data.list
  isWeiXin.value = !!window.WeixinJSBridge
})
</script>
<style lang="stylus" scoped>
.xcx {
  margin-top 10px
  text-align: center;
}
</style>
