<template>
  <van-cell :title="i.title" :label="i.summary" v-for="i in list" :key="i">
    <template #extra>
      {{ i.year }}
    </template>
  </van-cell>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
const list = ref<any>([])

onMounted(() => {
  fetch('data/books.json')
    .then((response) => response.json())
    .then((data: any) => {
      list.value = data
    })
})
</script>
