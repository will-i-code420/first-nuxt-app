<template lang="html">
  <BaseCard>
    <v-img class="align-end" :src="require('~/assets/images/maxim-hopman-IayKLkmz6g0-unsplash.jpg')">
      <v-card-title class="headline">
        Get the latest tech news
      </v-card-title>
    </v-img>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    <template #actions>
      <BaseButton color="info" text nuxt to="/posts">
        All Posts
      </BaseButton>
      <v-spacer />
      <BaseButton color="primary" nuxt to="/about">
        About
      </BaseButton>
    </template>
  </BaseCard>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
