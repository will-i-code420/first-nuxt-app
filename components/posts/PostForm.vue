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
    <BaseButton v-if="!edit" color="primary" type="submit">
      Submit Post
    </BaseButton>
    <BaseButton v-else color="primary" @click="editPost">
      Edit Post
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
  emits: ['submit-post', 'edit-post'],
  props: {
    post: {
      type: Object,
      required: false
    },
    edit: {
      type: Boolean,
      required: false,
      default: false
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
      const date = new Date()
      const completeForm = { date, ...this.postForm }
      this.$emit('submit-post', completeForm)
    },
    editPost() {
      this.$emit('edit-post', this.postForm)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
