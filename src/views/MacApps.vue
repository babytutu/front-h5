<template>
  <TItem :data="i" v-for="i in list" :key="i"></TItem>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
const list = ref<any>([])

onMounted(() => {
  fetch('data/index.xml')
    .then((response) => response.text())
    .then((str) => new DOMParser().parseFromString(str, 'text/xml'))
    .then((data: any) => {
      const nodes: any = data.firstChild.childNodes[1].childNodes || []
      list.value = Array.from(nodes)
        .filter((i: any) => i.tagName === 'item')
        .map((i: any) => Array.from(i.childNodes).filter((i: any) => i.tagName))
    })
})
</script>
