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
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style lang="css" scoped>
</style>
