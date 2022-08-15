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
      required: false,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="css" scoped>
</style>
