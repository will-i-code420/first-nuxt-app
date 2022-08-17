<template lang="html">
<v-container>
  <v-row justify="center" align="center">
    <v-col cols="16" sm="12" md="10" class="new-post-page">
      <PostForm @submit-post="savePost" />
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    savePost(postData) {
      axios.post('https://first-nuxt-app-a32f8-default-rtdb.firebaseio.com/posts.json', postData).then(res => {
        console.log(res)
      }).catch(e => {
        console.log(e)
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
