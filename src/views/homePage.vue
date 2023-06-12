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
import { home } from '@/data/home'

const list = ref<Array<any>>(home)
const isWeiXin = ref<boolean>(false)

onMounted(async () => {
  isWeiXin.value = !!window.WeixinJSBridge
})
</script>
<style lang="stylus" scoped>
.xcx {
  margin-top 10px
  text-align: center;
}
</style>
