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
    </template>
  </BaseCard>
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
