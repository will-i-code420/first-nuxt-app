<template lang="html">
  <v-form @submit.prevent="submitPost">
    <v-container>
      <v-row>
        <v-col>
          <v-text-field v-model="postForm.title" required label="Post Title">
          </v-text-field>
          <v-text-field v-model="postForm.author" required label="Author">
          </v-text-field>
          <v-file-input
            inputType="file"
            label="Upload image or add link below"
            filled
            prepend-icon="mdi-camera"
            >
          </v-file-input>
          <v-text-field v-model="postForm.img" label="Image Url">
          </v-text-field>
          <v-textarea
            inputType="area"
            clearable
            clear-icon="mdi-close-circle"
            label="Post Content"
            v-model="postForm.content"
          >
          </v-textarea>
    <BaseButton color="primary" type="submit">
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
      postForm: this.post ? { ...this.post } : {
        title: '',
        author: '',
        content: '',
        img: null
      }
    }
  },
  methods: {
    submitPost () {
      const id = Math.random().toString(16).slice(2)
      const date = new Date()
      const completeForm = {id,date,...this.postForm}
      this.$emit('submit-post', completeForm)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
