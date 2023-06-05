<template>
  <van-cell-group :title="title">
    <template v-for="item in list" :key="item.id">
      <slot :data="item">
        <van-cell
          :title="item.title"
          :label="item.label"
          :value="item.value"
          :is-link="item.isLink || !!item.to"
          :to="item.to"
        >
        </van-cell>
      </slot>
    </template>
  </van-cell-group>
</template>
<script setup lang="ts">
interface Item {
  title: string
  value: string | number
  label?: string
  isLink?: boolean
  to?: any
  week?: number
  date?: string
  dayweather?: string
  nightweather?: string
  nighttemp?: string
  daytemp?: string
}

defineProps<{
  title?: string
  list: Array<Item>
}>()
</script>
