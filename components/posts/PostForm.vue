<template lang="html">
  <v-form>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field v-model="newPost.title" required>
          </v-text-field>
          <v-text-field v-model="newPost.author" required>
          </v-text-field>
          <v-file-input
            inputType="file"
            label="Upload image"
            filled
            prepend-icon="mdi-camera"
            >
          </v-file-input>
          <v-textarea
            inputType="area"
            clearable
            clear-icon="mdi-close-circle"
            label="Post"
            v-model="newPost.content"
          >
          </v-textarea>
    <BaseButton color="primary" @click="submitPost">
      Submit Post
    </BaseButton>
    <BaseButton color="error" @click="$router.push('/admin')">
      Cancel
    </BaseButton>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      newPost: this.post ? { ...this.post } : {
        title: '',
        author: '',
        content: ''
      }
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
