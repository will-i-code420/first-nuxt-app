<template>
  <v-container>
  <v-row justify="center" align="center" class="mb-5">
    <v-col cols="16" sm="12" md="10">
      <Hero />
    </v-col>
  </v-row>
  <v-card class="mb-5">
    <v-card-title class="headline justify-center">
      Latest Posts
    </v-card-title>
    <PostList :posts="loadedPosts" />
</v-card>
</v-container>
</template>

<script>
export default {
  name: "IndexPage",
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
};
</script>

<style scoped>

</style>
