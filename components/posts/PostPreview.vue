<template lang="html">
  <BaseCard>
    <v-img class="align-end" :src="post.img">
      <v-card-title class="headline justify-center">
        {{post.title}}
      </v-card-title>
    </v-img>
    {{post.description}}
    <template #actions>
      <v-btn color="info" text nuxt :to="{ path: `/posts/${post.id}`, params: {post} }">
        View
      </v-btn>
      <v-btn v-if="admin" color="error" text nuxt :to="{ path: `/admin/${post.id}`, params: {post} }">
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
