<template>
  <v-row justify="center" align="center">
    <v-col cols="16" sm="12" md="10">
      <v-card class="logo py-4 justify-center">
        <v-img class="align-end" src="/maxim-hopman-IayKLkmz6g0-unsplash.jpg">
          <v-card-title class="headline">
            Get the latest tech news
          </v-card-title>
        </v-img>
        <v-card-text>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="info" text nuxt to="/posts">All Posts</v-btn>
          <v-spacer />
          <v-btn color="primary" nuxt to="/about"> About </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style scoped>

</style>
