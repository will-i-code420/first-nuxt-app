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
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style lang="css" scoped>
</style>
