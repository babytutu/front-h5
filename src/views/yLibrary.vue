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
    <van-cell :title="i.title" :label="i.publisher" v-for="i in books" :key="i">
      <template #extra>
        {{ i.year }}
      </template>
      <template #label>
        <p>出版社:{{ i.publisher }}</p>
        <p>ISBN: {{ i.isbn }}</p>
        <p>格式: {{ i.extension }}</p>
        <p>作者：{{ i.author }}</p>
      </template>
    </van-cell>
  </template>
  <template v-else>
    <van-cell title="暂无结果"></van-cell>
  </template>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { $http } from '@/plugins/axios'
import { $apis } from '@/plugins/apis'

import { showLoadingToast, closeToast } from 'vant'
import 'vant/es/toast/style'

const bookList = ref<any>([])
const page = ref(1)
const keyword = ref('')
const total = ref(0)
const pages = computed(() => Math.ceil(total.value / 20))
const types = ref([])
const books = ref<Array<any>>([])

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
  const res: any = await $http.post($apis.api, {
    url: `https://api.ylibrary.org/api/search/`,
    data: {
      keyword: keyword.value,
      page: page.value,
      sensitive: false,
    },
    method: 'post',
  })
  const { hits, data } = res
  total.value = hits
  bookList.value = data
  changeList(types.value)
  closeToast()
}
</script>
