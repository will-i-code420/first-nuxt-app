<template lang="html">
  <v-form>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field v-model="title" required>
          </v-text-field>
          <v-file-input
    label="Upload image"
    filled
    prepend-icon="mdi-camera"
  ></v-file-input>
  <v-textarea
      clearable
      clear-icon="mdi-close-circle"
      label="Post"
      v-model="post"
    ></v-textarea>
    <BaseButton color="primary" @click="submitPost">
      Submit Post
    </BaseButton>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      post: ''
    }
  },
  methods: {
    submitPost () {
      const id = Math.random().toString(16).slice(2)
      const newPost = {
        id,
        title: this.title,
        post:  this.post
      }
      console.log(newPost)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
