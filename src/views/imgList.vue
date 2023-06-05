<template>
  <van-cell-group>
    <template #title>
      <van-button type="primary" size="small" to="imgUpload">新增</van-button>
    </template>
    <div class="van-hairline--bottom" v-for="i in list" :key="i._id">
      <van-swipe-cell>
        <van-space :size="20" class="list-item">
          <van-image
            width="100"
            height="100"
            :src="i.url"
            @click="showImagePreview([i.url])"
          />
          <div>
            <div>{{ i.content }}</div>
            <div class="time">{{ new Date(i.createdAt).toLocaleString() }}</div>
          </div>
        </van-space>
        <template #right>
          <van-button
            @click="deleteItem(i)"
            text="删除"
            type="danger"
            square
            class="delete-button"
          />
        </template>
      </van-swipe-cell>
    </div>
  </van-cell-group>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { $http } from '@/plugins/axios'
import { $apis } from '@/plugins/apis'
import {
  showLoadingToast,
  closeToast,
  showConfirmDialog,
  showImagePreview,
} from 'vant'
import 'vant/es/toast/style'
import 'vant/es/dialog/style'

const list = ref<Array<any>>([])

onMounted(() => {
  getList()
})

const getList = () => {
  showLoadingToast({
    duration: 0,
    message: '加载中...',
    forbidClick: true,
  })
  $http
    .post($apis.api('getListByCategory'), {
      category: 'imgList',
    })
    .then((res: any) => {
      list.value = res
      closeToast()
    })
}

const deleteItem = (i: any) => {
  showConfirmDialog({
    message: `确认删除？`,
  }).then(() => {
    $http
      .post($apis.api('removeById'), {
        category: 'imgList',
        id: i._id,
      })
      .then(() => {
        getList()
      })
  })
}
</script>
<style lang="stylus" scoped>
.delete-button {
  height: 100%;
}
.list-item {
  padding: 16px;
  .time {
    font-size: 12px;
  }
}
</style>
