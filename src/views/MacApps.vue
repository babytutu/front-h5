<template>
  <van-cell-group title="点击复制地址">
    <van-cell
      v-for="info in list"
      :key="info.title"
      :title="info.title"
      @click="copy(info.link)"
    >
      <template #label>
        <div class="description" v-html="info.description"></div>
        <div><van-icon class="icon" name="link-o" />{{ info.link }}</div>
        <div>
          <van-icon class="icon" name="clock-o" /><i>{{ info.pubDate }}</i>
        </div>
      </template>
    </van-cell>
  </van-cell-group>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { $http } from '@/plugins/axios'
import { $apis } from '@/plugins/apis'
import { copyText } from '@/plugins/copy'

import { showLoadingToast, closeToast, showToast } from 'vant'
import 'vant/es/toast/style'

const list = ref<any>([])

const copy = (text: string) => {
  const flag = copyText(text)
  showToast({
    type: flag ? 'success' : 'fail',
    message: `复制${flag ? '成功' : '失败'}`,
  })
}

onMounted(async () => {
  showLoadingToast({
    duration: 0,
    message: '加载中...',
    forbidClick: true,
  })
  const res: any = await $http.get($apis.api + '/macapps')
  list.value = res.data.map((i: any) => {
    const { title, link, pubDate, description } = i
    return {
      title,
      link,
      pubDate: new Date(pubDate.replace(' &#43;0800', '')).toLocaleString(),
      description: description.replace(
        'Download 点击前往下载 欢迎每日关注更新内容 ',
        ''
      ),
    }
  })
  closeToast()
})
</script>
<style lang="stylus" scoped>
:deep(.van-icon) {
  margin-right: 5px;
}
.description {
  display: flex;
}
:deep(.featured-image img) {
  width: 60px;
  padding-right: 10px;
}
</style>
