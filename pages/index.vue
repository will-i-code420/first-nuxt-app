<template>
  <v-container>
  <v-row justify="center" align="center" class="mb-5">
    <v-col cols="16" sm="12" md="10">
      <BaseCard>
        <v-img class="align-end" src="/maxim-hopman-IayKLkmz6g0-unsplash.jpg">
          <v-card-title class="headline">
            Get the latest tech news
          </v-card-title>
        </v-img>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <template #actions>
          <v-btn color="info" text nuxt to="/posts">All Posts</v-btn>
          <v-spacer />
          <v-btn color="primary" nuxt to="/about"> About </v-btn>
        </template>
      </BaseCard>
    </v-col>
  </v-row>
  <v-card class="mb-5">
    <v-card-title class="headline justify-center">
      Latest Posts
    </v-card-title>
    <v-row justify="center" align="center">
    <v-col v-for="post in posts" :key="post.id">
      <BaseCard>
        <template #title>
          {{post.title}}
        </template>
        {{post.description}}
        <template #actions>
          <v-btn color="info" text nuxt :to="`/posts/${post.id}`">
            View
          </v-btn>
        </template>
      </BaseCard>
    </v-col>
  </v-row>
</v-card>
</v-container>
</template>

<script>
export default {
  name: "IndexPage",
  data () {
    return {
      posts: [
        {id: 1, title: 'New Vue News', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id: 2, title: 'ECMA News', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id: 3, title: 'Got Node?', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      ]
    }
  }
};
</script>

<style scoped>

</style>
