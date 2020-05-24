<template>
  <iframe :src="$route.params.url" frameborder="0" width="100%" height="100%"></iframe>
</template>
<script>
export default {
  name: 'iframePage',
  beforeRouteEnter (to, from, next) {
    const {
      params: {
        title
      }
    } = to
    to.meta.title = title
    next()
  },
}
</script>
