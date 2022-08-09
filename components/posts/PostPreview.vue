<template lang="html">
  <BaseCard>
    <v-img class="align-end" :src="post.img">
      <v-card-title class="headline justify-center">
        {{post.title}}
      </v-card-title>
    </v-img>
    {{post.description}}
    <template #actions>
      <v-btn color="info" text nuxt :to="`/posts/${post.id}`">
        View
      </v-btn>
      <v-btn v-if="admin" color="error" text nuxt :to="`/admin/${post.id}`">
        Edit
      </v-btn>
    </template>
  </BaseCard>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    },
    admin: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="css" scoped>
</style>
