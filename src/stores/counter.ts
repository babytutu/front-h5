import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  actions: {
    changeCount(payload: string) {
      this.count = Number(payload)
    },
  }
})
