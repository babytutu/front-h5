<template>
  <van-form @submit="onSubmit">
    <van-cell-group title="随便写写">
      <van-field
        name="uploader"
        label="配图"
        :rules="[{ required: true, message: '请上传图片' }]"
      >
        <template #input>
          <van-uploader
            :before-read="beforeRead"
            v-model="fileList"
            max-count="1"
          />
        </template>
      </van-field>
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
    </van-cell-group>
    <div class="form-btn">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>
<script setup lang="ts">
import Compressor from 'compressorjs'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { $http } from '@/plugins/axios'
import { $apis } from '@/plugins/apis'
import { showFailToast, showSuccessToast } from 'vant'
import 'vant/es/toast/style'

const router = useRouter()

const fileList = ref([])
const content = ref<string>('')

const beforeRead = (file: any) => {
  return new Promise<any>((resolve) => {
    new Compressor(file, {
      quality: 0.8,
      width: 500,
      height: 500,
      success: resolve,
      error() {
        showFailToast('图片上传失败')
      },
    })
  })
}

const onSubmit = () => {
  const [
    {
      file: { name },
      file,
    },
  ] = fileList.value

  $http
    .post($apis.api('insert'), {
      content: content.value,
      category: 'imgList',
    })
    .then(({ _id }: any) => {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('name', name)
      formData.append('owner', _id)
      formData.append('category', 'imgList')
      $http
        .post($apis.api('upload'), formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(() => {
          showSuccessToast('提交成功')
          router.push('/imgList')
        })
    })
}
</script>
<style lang="stylus" scoped>
.form-btn {
  margin: 16px;
}
</style>
