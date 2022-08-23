<template lang="html">
  <div>
  <v-card class="logo py-4 d-flex justify-center">
    <v-img class="align-end" :src="post.img">
      <v-card-title class="headline justify-center">{{post.title}}</v-card-title>
    </v-img>
  </v-card>
  <v-card>
    <v-card-subtitle>{{post.author}} - Date: {{post.date | date}}</v-card-subtitle>
    <v-card-text>{{post.content}}</v-card-text>
    <v-card-actions>
    </v-card-actions>
  </v-card>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="css" scoped>
</style>
