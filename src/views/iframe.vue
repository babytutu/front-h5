<template>
  <iframe :src="$route.params.url" frameborder="0" width="100%" height="100%" />
</template>
<script>
export default {
  name: 'iframePage',
  beforeRouteEnter (to, from, next) {
    to.meta.title = to.params.title
    document.title = to.params.title
    next()
  },
}
</script>
