<template lang="html">
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="16" sm="12" md="10" class="new-post-page">
        <PostForm :post="loadedPost"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      loadedPost: {id: 1, title: 'New Vue News', author: 'Bob Dole', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', img: 'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'}
    }
  }
}
</script>

<style lang="css" scoped>
</style>
