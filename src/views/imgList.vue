<template>
  <van-cell-group title="左右滑动操作">
    <van-swipe-cell v-for="i in list" :key="i._id">
      <van-cell
        :title="i.content"
        :label="new Date(i.createdAt).toLocaleString()"
      >
        <template #icon>
          <van-image
            width="50"
            height="50"
            class="list-item-img"
            :src="i.url"
            @click="preView(i.url)"
          />
        </template>
      </van-cell>
      <template #right>
        <van-button
          @click="editItem(i)"
          text="编辑"
          square
          color="#409EFF"
          class="delete-button"
        />
        <van-button
          @click="deleteItem(i)"
          text="删除"
          square
          color="#F56C6C"
          class="delete-button"
        />
      </template>
      <template #left>
        <van-button
          square
          type="primary"
          to="addItem"
          color="#67C23A"
          text="新增"
          class="delete-button"
        />
      </template>
    </van-swipe-cell>
  </van-cell-group>
  <van-dialog
    v-model:show="show"
    title="编辑描述"
    :beforeClose="beforeClose"
    show-cancel-button
  >
    <van-form ref="contentField">
      <van-field
        v-model="content"
        name="描述"
        label="描述"
        placeholder="描述"
        type="textarea"
        maxlength="20"
        rows="2"
        autosize
        show-word-limit
        :rules="[{ required: true, message: '请填写描述' }]"
      />
    </van-form>
  </van-dialog>
  <van-image-preview v-model:show="showPic" :images="images">
    <template #image="{ src }">
      <img :src="src" alt="" srcset="" />
    </template>
  </van-image-preview>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { $http } from '@/plugins/axios'
import { $apis } from '@/plugins/apis'
import { showLoadingToast, closeToast, showConfirmDialog } from 'vant'
import 'vant/es/toast/style'
import 'vant/es/dialog/style'

const list = ref<Array<any>>([])
const show = ref<boolean>(false)
const content = ref<string>('')
const id = ref<string>('')
const contentField = ref<any>(null)
const images = ref<Array<string>>([])
const showPic = ref<boolean>(false)

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
      list.value = res.data
      closeToast()
    })
}

const preView = (url: string) => {
  showPic.value = true
  images.value = [url]
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

const editItem = (obj: any) => {
  content.value = obj.content
  id.value = obj._id
  show.value = true
}

const beforeClose = (action: string) =>
  new Promise<boolean>((resolve) => {
    if (action === 'confirm') {
      contentField.value.validate('content')
      if (!content.value) {
        resolve(false)
        return
      }
      $http
        .post($apis.api('editById'), {
          category: 'imgList',
          id: id.value,
          data: {
            content: content.value,
          },
        })
        .then(() => {
          getList()
          resolve(true)
        })
    } else {
      resolve(true)
    }
  })
</script>
<style lang="stylus" scoped>
.delete-button {
  height: 100%;
}
.list-item-img {
  margin-right 10px
  border-radius: 4px;
  overflow: hidden
}
</style>
