<template lang="html">
  <v-row justify="center" align="center">
    <v-col cols="16" sm="12" md="10">
      <v-card class="logo py-4 d-flex justify-center">
        <v-img class="align-end" :src="loadedPost.img">
          <v-card-title class="headline justify-center">{{loadedPost.title}}</v-card-title>
        </v-img>
      </v-card>
      <v-card>
        <v-card-subtitle>{{loadedPost.author}} - Date: {{loadedPost.date}}</v-card-subtitle>
        <v-card-text>{{loadedPost.content}}</v-card-text>
        <v-card-actions>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SinglePostPage",
  asyncData(context,cb) {
    setTimeout(() => {
      cb(null,{
        loadedPost: {
          id: 1, title: 'New Vue News', author: 'Bob Dole', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', img: 'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'
        }
      })
    }, 1000)
  }
}
</script>

<style lang="css" scoped>
</style>
