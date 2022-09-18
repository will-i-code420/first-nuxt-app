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
  /*
  find out why this errors out after switching to async/await
  head() {
    return {
      title: loadedPost.title,
      meta: [
        { hid: 'description', name: 'description', content: loadedPost.content.slice(0,17) }
      ]
    }
  },
  */
  async asyncData(context) {
    try {
      const data = await context.app.$axios.$get(`/posts/${context.params.id}.json`)
      console.log(data)
      return {
        loadedPost: data
      }
    } catch (e) {
      console.log(e)
      context.error(e)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
