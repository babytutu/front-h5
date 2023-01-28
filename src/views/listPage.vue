<template>
  <TList ref="list" @getData="getData">
    <template #default="item">
      <van-cell
        :title="item.data.title"
        :value="item.data.value"
        :label="item.data.label"
      />
    </template>
  </TList>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import TList from '@/components/T-list.vue'

const size = 30
const list = ref<InstanceType<typeof TList> | null>(null)

/**
 * 分页获取数据
 * @param {Number} page 当前页数
 */
function getData(page: number) {
  setTimeout(() => {
    const { arr, length } = mockData(page)
    list.value?.renderList(arr, length < size)
  }, 500)
}
/**
 * 模拟接口数据
 */
function mockData(page: number) {
  const arr = [] as Array<any>
  if (page < 5) {
    for (let i = 1; i < 31; i++) {
      const id = (page - 1) * size + i
      arr.push({
        title: `序号 ${id}`,
        value: `页码 ${page}`,
        id,
      })
    }
  }
  return {
    arr,
    length: arr.length,
  }
}
</script>
