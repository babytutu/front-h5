<template>
  <van-cell-group title="点击图标复制htmlCode"> </van-cell-group>
  <van-collapse accordion v-model="activeNames">
    <van-collapse-item
      :title="i.label"
      v-for="i in category"
      :key="i.label"
      :name="i.name"
    >
      <div class="emoji">
        <div
          class="emoji-item van-hairline--surround"
          v-for="j in list[i.name]"
          :key="j"
          @click="copy(j)"
        >
          <div class="emoji-item-icon" v-html="j"></div>
          <div>{{ j }}</div>
        </div>
      </div>
    </van-collapse-item>
  </van-collapse>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { showToast } from 'vant'
import 'vant/es/toast/style'
import { copyText } from '@/plugins/copy'
import { emoji } from '@/data/emoji'

const list = ref<any>(emoji)
const category = ref<Array<any>>([
  {
    label: '笑脸和人',
    name: 'smileys and people',
  },
  {
    label: '动物和自然',
    name: 'animals and nature',
  },
  {
    label: '食物和饮料',
    name: 'food and drink',
  },
  {
    label: '旅行和地方',
    name: 'travel and places',
  },
  {
    label: '活动',
    name: 'activities',
  },
  {
    label: '对象',
    name: 'objects',
  },
  {
    label: '符号和标志',
    name: 'symbols',
  },
  {
    label: '旗帜和字母',
    name: 'flags',
  },
])

const activeNames = ref<string>('')

const copy = (text: string) => {
  const flag = copyText(text)
  showToast({
    type: flag ? 'success' : 'fail',
    message: `复制${flag ? '成功' : '失败'}`,
  })
}
</script>
<style lang="stylus" scoped>
.emoji {
  display flex
  flex-wrap: wrap;
  &-item {
    width 25%
    padding 10px 0
    font-size 12px
    text-align center
    line-height 24px
    &-icon {
      font-size 20px
    }
  }
}
</style>
