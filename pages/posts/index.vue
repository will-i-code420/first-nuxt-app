<template lang="html">
  <v-container>
  <v-row justify="center" align="center">
    <v-col cols="16" sm="12" md="10" class="posts-page">
      <v-card class="mb-5">
        <v-card-title class="headline justify-center">
          Latest Posts
        </v-card-title>
        <PostList :posts="loadedPosts" />
    </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
  name: "PostsPage",
  asyncData(context,cb) {
    setTimeout(() => {
      cb(null,{
        loadedPosts: [
        {id: 1, title: 'New Vue News', author: 'Bob Dole', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', img: 'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'},
        {id: 2, title: 'ECMA News', author: 'Bob Dole', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', img: 'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'},
        {id: 3, title: 'Got Node?', author: 'Bob Dole', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', img: 'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'},
      ]
    })
    },1000)
  }
}
</script>

<style lang="css" scoped>
</style>
