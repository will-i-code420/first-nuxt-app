<template lang="html">
  <v-btn :class="styles" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name: "BaseButton",
  inheritAttrs: false,
  props: {
    styles: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style lang="css" scoped>
</style>
