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
  const res: any = await $http.post($apis.api('http'), {
    url: 'https://www.digit77.com/categories/macapps/index.xml',
  })

  const data: any = new DOMParser().parseFromString(res.data, 'text/xml')

  const nodes: any = data.firstChild.childNodes[1].childNodes || []
  const value = Array.from(nodes)
    .filter((i: any) => i.tagName === 'item')
    .map((i: any) => Array.from(i.childNodes).filter((i: any) => i.tagName))
  list.value = value.map((i: any) => {
    const [title, link, pubDate, , , description] = i
    return {
      title: title.textContent,
      link: link.textContent,
      pubDate: new Date(pubDate.textContent).toLocaleString(),
      description: description.textContent.replace(
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
