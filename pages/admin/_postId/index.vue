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
        loadedPost: res.data
      }
    }).catch(e => context.error(e))
  },
  methods: {
    editPost(postData) {
      axios.put(`https://first-nuxt-app-a32f8-default-rtdb.firebaseio.com/posts/${this.$route.params.postId}.json`, postData).then(res => {
        console.log(res)
        this.$router.push('/admin')
      }).catch(e => {
        console.log(e)
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
