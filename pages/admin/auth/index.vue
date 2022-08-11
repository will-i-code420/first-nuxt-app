<template lang="html">
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="16" sm="12" md="10" class="new-post-page">
        <v-form>
          <v-container>
            <v-row>
              <v-col>
                <v-text-field type="email" v-model="email" required>
                </v-text-field>
                <v-text-field type="password" v-model="password" required>
                </v-text-field>
                <BaseButton color="primary" @click="login" >
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
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log(`logging ${this.email} in using ${this.password} as password`)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
