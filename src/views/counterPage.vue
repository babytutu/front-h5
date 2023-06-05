<template>
  <van-cell-group title="状态管理" inset>
    <van-field center :model-value="count" label="计数器" readonly>
      <template #button>
        <van-icon name="plus" @click="addCount" />
      </template>
    </van-field>
    <van-field name="stepper" label="步进器">
      <template #input>
        <van-stepper v-model.number="digit" min="0" max="100" />
      </template>
      <template #button>
        <van-icon name="success" @click="handleValueChange" />
      </template>
    </van-field>
  </van-cell-group>
  <div class="bottom-btn">
    <van-button round block type="primary" native-type="submit" @click="reset">
      重置
    </van-button>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useCounterStore } from '@/stores/counter'

const digit = ref<number>(0)
const store = useCounterStore()
const count = computed<number>(() => store.count)

/**
 * 初始化
 */
function reset() {
  store.$reset()
  digit.value = store.count
}
/**
 * 更新计数器
 */
function handleValueChange() {
  store.changeCount(digit.value)
}
/**
 * 自增+1
 */
function addCount() {
  store.add()
}

onMounted(() => {
  digit.value = store.count
})
</script>
<style lang="stylus" scoped>
.bottom-btn{
  margin: 16px
}
</style>
