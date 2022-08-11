<template lang="html">
  <v-card>
    <v-card-title class="headline justify-center">
      <slot name="title"></slot>
    </v-card-title>
    <v-card-text>
      <slot></slot>
    </v-card-text>
    <v-card-actions class="justify-center">
      <slot name="actions"></slot>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'BaseCard'
}
</script>

<style lang="css" scoped>
</style>
