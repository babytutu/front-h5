<template>
  <TItem :data="i" v-for="i in list" :key="i"></TItem>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { $http } from '@/plugins/axios'
import { $apis } from '@/plugins/apis'

import { showLoadingToast, closeToast } from 'vant'
import 'vant/es/toast/style'

const list = ref<any>([])

onMounted(async () => {
  showLoadingToast({
    duration: 0,
    message: '加载中...',
    forbidClick: true,
  })
  const res: any = await $http.post($apis.api('http'), {
    url: 'https://www.digit77.com/categories/macapps/index.xml',
  })

  const data: any = new DOMParser().parseFromString(res, 'text/xml')

  const nodes: any = data.firstChild.childNodes[1].childNodes || []
  list.value = Array.from(nodes)
    .filter((i: any) => i.tagName === 'item')
    .map((i: any) => Array.from(i.childNodes).filter((i: any) => i.tagName))
  closeToast()
})
</script>
