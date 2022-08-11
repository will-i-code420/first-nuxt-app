<template lang="html">
  <v-row justify="center" align="center">
  <v-col cols="4" v-for="post in posts" :key="post.id">
    <PostPreview :admin="admin" :post="post"/>
  </v-col>
</v-row>
</template>

<script>
export default {
  props: {
    admin: {
      type: Boolean,
      required: false
    }
  },
  data () {
    return {
      posts: [
        {id: 1, title: 'New Vue News', author: 'Bob Dole', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', img: 'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'},
        {id: 2, title: 'ECMA News', author: 'Bob Dole', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', img: 'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'},
        {id: 3, title: 'Got Node?', author: 'Bob Dole', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', img: 'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'},
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
