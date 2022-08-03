<template>
  <van-cell-group title="状态管理" inset>
    <van-field center :model-value="count" label="计数器" readonly>
      <template #button>
        <van-button size="small" type="primary" @click="reset">重置</van-button>
      </template>
    </van-field>
    <van-field
      v-model="digit"
      center
      type="digit"
      label="整数"
    >
      <template #button>
        <van-button size="small" type="primary" @click="update(digit)">更新</van-button>
      </template>
    </van-field>
  </van-cell-group>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { useCounterStore } from '@/stores/counter'
const digit = ref('')
const store = useCounterStore()
const count = computed(() => store.count)
const update = (val: string) => store.changeCount(val)
const reset = () => store.$reset()
</script>
