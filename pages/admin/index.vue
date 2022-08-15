<template lang="html">
  <v-container>
  <v-row justify="center" align="center">
    <v-col cols="16" sm="12" md="10" class="admin-page">
      <h1 class="text-center">Admin Page</h1>
      <v-card class="mb-5">
        <v-card-title class="headline justify-center">
          Existing Posts
        </v-card-title>
        <PostList admin :posts="loadedPosts" />
        <v-card-actions class="my-3 justify-center">
          <BaseButton text nuxt to="/admin/new-post">
            <span>Create New Post</span>
            <v-icon right aria-label="New Post" role="img" aria-hidden="false">
              mdi-newspaper
            </v-icon>
          </BaseButton>
        </v-card-actions>
    </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
  name: "AdminPage",
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
