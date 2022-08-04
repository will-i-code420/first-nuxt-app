<template lang="html">
  <v-card
  class="flex"
  flat
  tile
>
  <v-card-title>
    <strong class="subheading">Get connected with us!</strong>

    <v-spacer></v-spacer>

    <v-btn
      v-for="icon in icons"
      :key="icon"
      class="mx-4"
      dark
      icon
    >
      <v-icon size="24px">
        {{ icon }}
      </v-icon>
    </v-btn>
  </v-card-title>

  <v-card-text class="py-2 white--text text-center">
    {{ new Date().getFullYear() }} — <strong>{{title}}</strong>
  </v-card-text>
</v-card>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    title: String
  },
  data() {
    return {
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram'
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
