<template>
  <iframe :src="src" frameborder="0" width="100%" height="100%" />
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const src = computed(() => route.params.url as string)
</script>
