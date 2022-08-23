<template lang="html">
  <v-row justify="center" align="center">
    <v-col cols="16" sm="12" md="10">
      <SinglePost :post="loadedPost" />
    </v-col>
  </v-row>
</template>

<script>
import axios from 'axios'

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
    return axios.get(`https://first-nuxt-app-a32f8-default-rtdb.firebaseio.com/posts/${context.params.id}.json`).then(res => {
      return {
        loadedPost: res.data
      }
    }).catch(e => context.error(e))
  }
}
</script>

<style lang="css" scoped>
</style>
