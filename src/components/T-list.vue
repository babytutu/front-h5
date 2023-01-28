<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <template v-for="item in list" :key="item.id">
        <slot :data="item" />
      </template>
    </van-list>
  </van-pull-refresh>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const emit = defineEmits(['getData'])

const loading = ref<boolean>(false)
const finished = ref<boolean>(false)
const refreshing = ref<boolean>(false)
const list = ref<Array<any>>([])
const page = ref<number>(1)

/**
 * 渲染列表
 * @param {Array} data 数据
 * @param {Boolean} finish 是否加载完成
 */
function renderList(data: Array<any>, finish: boolean) {
  list.value = list.value.concat(data)
  finished.value = finish
  refreshing.value = false
  loading.value = false
  if (!finish) {
    page.value++
  }
}
/**
 * 加载列表
 */
function onLoad() {
  loading.value = true
  if (refreshing.value) {
    list.value = []
  }
  emit('getData', page.value)
}
/**
 * 刷新
 */
function onRefresh() {
  refreshing.value = true
  list.value = []
  page.value = 1
  onLoad()
}

defineExpose({
  renderList,
})
</script>
