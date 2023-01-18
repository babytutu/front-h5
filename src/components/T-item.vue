<template>
  <van-cell :title="info.title" @click="copy">
    <template #label>
      <div class="description" v-html="info.description"></div>
      <div><van-icon class="icon" name="link-o" />{{ info.link }}</div>
      <div><van-icon class="icon" name="clock-o" /><i>{{ info.pubDate }}</i></div>
    </template>
  </van-cell>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { showSuccessToast, showFailToast } from 'vant'
import 'vant/es/toast/style'

const props = defineProps<{
  data: any
}>()

const info = ref<any>('')

const copy = () => {
  try {
    const input = document.createElement('input')
    input.value = info.value.link
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
    showSuccessToast('下载地址复制成功')
  } catch (error) {
    showFailToast('下载地址复制失败')
  }
}

onMounted(() => {
  const [
    title,
    link,
    pubDate,,,
    description
  ] = props.data
  info.value = {
    title: title.textContent,
    link: link.textContent,
    pubDate: new Date(pubDate.textContent).toLocaleString(),
    description: description.textContent.replace('Download 点击前往下载 欢迎每日关注更新内容 ', '')
  }
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
