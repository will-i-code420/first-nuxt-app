<template lang="html">
  <BaseCard>
    <v-img class="align-end" :src="post.img">
      <v-card-title class="headline justify-center">
        {{post.title}}
      </v-card-title>
    </v-img>
    {{post.content.slice(0,17)}}...
    <template #actions>
      <BaseButton color="info" text nuxt :to="{ path: `/posts/${post.id}`}">
        View
      </BaseButton>
      <BaseButton v-if="admin" color="error" text nuxt :to="{ path: `/admin/${post.id}`}">
        Edit
      </BaseButton>
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
      required: true
    }
  }
}
</script>

<style lang="css" scoped>
</style>
