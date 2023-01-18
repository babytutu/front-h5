<template>
  <van-cell :title="title">
    <template #label>
      <div class="description" v-html="description"></div>
      {{ link }}<br>
      <i>{{ pubDate }}</i>
    </template>
  </van-cell>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  data: any
}>()

const title = ref('')
const description = ref('')
const link = ref('')
const info = ref([])
const pubDate = ref('')

onMounted(() => {
  info.value = Array.from(props.data)
  title.value = info.value[1].textContent
  link.value = info.value[3].textContent
  pubDate.value = info.value[5].textContent
  description.value = info.value[9].textContent
})
</script>
<style>
.description {
  display: flex;
}
.featured-image img {
  width: 100px;
  padding-right: 10px;
}
</style>
