<template>
  <TGroup title="Home" :list="list" />
  <div class="xcx" v-if="isWeiXin">
    <van-image width="240" :src="xcx">
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

interface res {
  list: Array<any>
}

const list = ref<Array<any>>([])
const isWeiXin = ref<boolean>(false)
const xcx = 'src/assets/xcx.png'

onMounted(async () => {
  // 加载列表配置
  const res: res = await $http.get($apis.list.list)
  list.value = res.list
  isWeiXin.value = !!window.WeixinJSBridge
})
</script>
<style lang="stylus" scoped>
.xcx {
  padding-top 10px
  text-align: center
}
</style>
