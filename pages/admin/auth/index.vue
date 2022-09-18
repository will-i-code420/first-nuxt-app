<template lang="html">
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="16" sm="12" md="10" class="new-post-page">
        <v-form @submit.prevent="login">
          <v-container>
            <v-row>
              <v-col>
                <v-text-field type="email" v-model="loginForm.email" required>
                </v-text-field>
                <v-text-field type="password" v-model="loginForm.password" required>
                </v-text-field>
                <BaseButton color="primary" type="submit" >
                  Login
                </BaseButton>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login () {
      try {
        await this.$store.dispatch('login', this.loginForm)
        this.$router.push('/admin')
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
