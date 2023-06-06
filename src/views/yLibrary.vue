<template>
  <van-form @submit="search">
    <van-field
      v-model="keyword"
      name="关键字"
      label="关键字"
      placeholder="请填写关键字"
      center
      clearable
      :rules="[{ required: true, message: '请填写关键字' }]"
    >
      <template #button>
        <van-button size="small" type="primary" native-type="submit"
          >查询</van-button
        >
      </template>
    </van-field>
  </van-form>
  <template v-if="total">
    <van-cell>第 {{ page }} 页， 共 {{ total }} 条 / {{ pages }} 页</van-cell>
    <van-field name="stepper" label="页数">
      <template #input>
        <van-stepper v-model="page" min="1" :max="pages" @change="getList" />
      </template>
    </van-field>
    <van-field name="checkboxGroup" label="格式">
      <template #input>
        <van-checkbox-group
          @change="changeList"
          v-model="types"
          direction="horizontal"
        >
          <van-checkbox name="epub" shape="square">epub</van-checkbox>
          <van-checkbox name="pdf" shape="square">pdf</van-checkbox>
        </van-checkbox-group>
      </template>
    </van-field>
  </template>
  <template v-if="books.length">
    <van-cell
      @click="detail(i.id)"
      :title="i.title"
      :label="i.publisher"
      v-for="i in books"
      :key="i"
    >
      <template #extra>
        {{ i.year }}
      </template>
      <template #label>
        <p v-if="i.publisher">出版社:{{ i.publisher }}</p>
        <p v-if="i.isbn">ISBN: {{ i.isbn }}</p>
        <p>格式: {{ i.extension }}</p>
        <p v-if="i.author">作者：{{ i.author }}</p>
      </template>
    </van-cell>
  </template>
  <template v-else>
    <van-empty description="暂无结果" />
  </template>
  <template v-if="total">
    <van-cell>第 {{ page }} 页， 共 {{ total }} 条 / {{ pages }} 页</van-cell>
    <van-field name="stepper" label="页数">
      <template #input>
        <van-stepper v-model="page" min="1" :max="pages" @change="getList" />
      </template>
    </van-field>
    <van-field name="checkboxGroup" label="格式">
      <template #input>
        <van-checkbox-group
          @change="changeList"
          v-model="types"
          direction="horizontal"
        >
          <van-checkbox name="epub" shape="square">epub</van-checkbox>
          <van-checkbox name="pdf" shape="square">pdf</van-checkbox>
        </van-checkbox-group>
      </template>
    </van-field>
  </template>
  <!-- 底部弹出 -->
  <van-popup
    v-model:show="showBottom"
    position="bottom"
    closeable
    close-icon="close"
    :style="{ height: '100%' }"
  >
    <iframe :src="url" class="iframe" />
  </van-popup>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  showLoadingToast,
  closeToast,
  showToast,
  showConfirmDialog,
} from 'vant'
import 'vant/es/toast/style'
import 'vant/es/dialog/style'

import { $http } from '@/plugins/axios'
import { $apis } from '@/plugins/apis'
import { copyText } from '@/plugins/copy'

const bookList = ref<any>([])
const page = ref(1)
const keyword = ref('福尔摩斯')
const total = ref(0)
const pages = computed(() => Math.ceil(total.value / 20))
const types = ref(['epub'])
const books = ref<Array<any>>([])
const showBottom = ref(false)
const url = ref('')

const search = () => {
  page.value = 1
  getList()
}

const changeList = (val: Array<string>) => {
  books.value = val.length
    ? bookList.value.filter((i: any) => val.includes(i.extension))
    : bookList.value
}

const getList = async () => {
  showLoadingToast({
    duration: 0,
    message: '加载中...',
    forbidClick: true,
  })
  const res: any = await $http.post($apis.api('http'), {
    url: `https://api.ylibrary.org/api/search/`,
    data: {
      keyword: keyword.value,
      page: page.value,
      sensitive: false,
    },
    method: 'post',
  })
  const { hits, data } = res.data
  total.value = hits
  bookList.value = data
  changeList(types.value)
  closeToast()
}

const detail = async (id: string) => {
  showLoadingToast({
    duration: 0,
    message: '加载中...',
    forbidClick: true,
  })
  const res: any = await $http.post($apis.api('http'), {
    url: `https://api.ylibrary.org/api/detail/`,
    data: {
      id,
      source: 'zlibrary',
    },
    method: 'post',
  })
  const { ipfs_cid } = res.data
  closeToast()
  if (!ipfs_cid) {
    showToast('暂无下载')
  }
  const link = `https://ipfs-checker.1kbtool.com/${ipfs_cid}`
  showConfirmDialog({
    title: 'IPFS下载',
    confirmButtonText: '访问',
    cancelButtonText: '复制',
    message: link,
  })
    .then(() => {
      url.value = link
      showBottom.value = true
    })
    .catch(() => {
      const flag = copyText(link)
      showToast({
        type: flag ? 'success' : 'fail',
        message: `复制${flag ? '成功' : '失败'}`,
      })
    })
}
</script>
<style lang="stylus" scoped>
.iframe {
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
