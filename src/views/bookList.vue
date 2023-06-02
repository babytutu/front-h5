<template>
  <van-cell
    :title="i.lemmaTitle"
    :label="i.summary"
    v-for="i in bookList"
    :key="i"
  >
    <template #extra>
      {{ i.year }}
    </template>
  </van-cell>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { $http } from '@/plugins/axios'
import { $apis } from '@/plugins/apis'
import { showLoadingToast, closeToast } from 'vant'
import 'vant/es/toast/style'

const bookList = ref<any>([])
const page = ref(1)

const getList = async () => {
  showLoadingToast({
    duration: 0,
    message: '加载中...',
    forbidClick: true,
  })
  const res: any = await $http.post($apis.api('http'), {
    url: `https://baike.baidu.com/starmap/api/getlemmalist?nodeId=b699ee5348d583862bfa148f&pn=${page.value}&rn=50`,
  })
  const { hasMore, list } = res.data
  if (hasMore) {
    page.value++
    getList()
  } else {
    closeToast()
  }
  bookList.value = [...bookList.value, ...list]
}

onMounted(() => {
  getList()
})
</script>
