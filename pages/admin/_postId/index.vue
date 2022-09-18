<template lang="html">
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="16" sm="12" md="10" class="new-post-page">
        <PostForm edit :post="loadedPost" @edit-post="editPost"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData(context) {
    try {
      const data = await context.app.$axios.$get(`/posts/${context.params.postId}.json`)
      return {
        loadedPost: {id: context.params.postId, ...data}
      }
    } catch (e) {
      console.log(e)
      context.error(e)
    }
  },
  methods: {
    editPost(postData) {
      this.$store.dispatch('editPost', postData).then(() => {
        this.$router.push('/admin')
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
