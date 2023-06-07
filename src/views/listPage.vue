<template>
  <TList ref="list" @getData="getData">
    <template #default="item">
      <van-cell :title="item.data.title" :label="item.data.description" />
    </template>
  </TList>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import TList from '@/components/T-list.vue'
import { $apis } from '@/plugins/apis'
import { $http } from '@/plugins/axios'

const size = 10
const list = ref<InstanceType<typeof TList> | null>(null)

/**
 * 分页获取数据
 * @param {Number} page 当前页数
 */
function getData(page: number) {
  $http.get($apis.fakerapi('books', 20)).then((res: any) => {
    list.value?.renderList(res.data, page > size)
  })
}
</script>
