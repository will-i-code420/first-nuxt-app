<template lang="html">
<v-container>
  <v-row justify="center" align="center">
    <v-col cols="16" sm="12" md="10" class="new-post-page">
      <PostForm @submit-post="savePost" />
    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
  middleware: ['check-auth', 'auth'],
  methods: {
    async savePost(postData) {
      try {
        await this.$store.dispatch('addPost', postData)
        this.$router.push('/admin')
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
