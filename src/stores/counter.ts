import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 1,
  }),
  actions: {
    /**
     * 更新计数器
     * @param {number} payload 值
     */
    changeCount(payload: number) {
      this.count = payload
    },
    /**
     * 自增1
     */
    add() {
      this.count++
    },
  },
})
