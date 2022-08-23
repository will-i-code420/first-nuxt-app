<template lang="html">
  <v-row justify="center" align="center">
    <v-col cols="16" sm="12" md="10">
      <SinglePost :post="loadedPost" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SinglePostPage",
  head() {
    return {
      title: loadedPost.title,
      meta: [
        { hid: 'description', name: 'description', content: loadedPost.content.slice(0,17) }
      ]
    }
  },
  asyncData(context) {
    return this.$axios.$get(`/posts/${context.params.id}.json`).then(data => {
      return {
        loadedPost: data
      }
    }).catch(e => context.error(e))
  }
}
</script>

<style lang="css" scoped>
</style>
