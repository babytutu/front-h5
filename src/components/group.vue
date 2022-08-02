<template>
  <van-cell-group :title="title">
    <template v-for="item in list" :key="item[id]">
      <slot :data="item">
        <van-cell :title="item.title" :label="item.label" :value="item.value" :is-link="item.isLink || !!item.to" :to="item.to">
        </van-cell>
      </slot>
    </template>
  </van-cell-group>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

type List = Array<any>

export default defineComponent ({
  name: 'groupModel',
  props: {
    title: String,
    list: {
      type: Array as PropType<List>
    },
    id: {
      type: String,
      default: 'id',
    },
  },
})
</script>
