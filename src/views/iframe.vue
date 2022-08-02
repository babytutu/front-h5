<template>
  <iframe :src="src" frameborder="0" width="100%" height="100%" />
</template>
<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: 'iframePage',
  beforeRouteEnter (to, from, next) {
    to.meta.title = to.params.title
    next()
  },
  computed: {
    src() {
      return this.$route.params.url + ''
    }
  }
})
</script>
