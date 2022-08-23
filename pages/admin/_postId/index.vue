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
import axios from 'axios'

export default {
  asyncData(context) {
    return axios.get(`https://first-nuxt-app-a32f8-default-rtdb.firebaseio.com/posts/${context.params.postId}.json`).then(res => {
      return {
        loadedPost: {id: context.params.postId, ...res.data}
      }
    }).catch(e => context.error(e))
  },
  methods: {
    editPost(postData) {
      this.$store.disptach('editPost', postData).then(() => {
        this.$router.push('/admin')
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
