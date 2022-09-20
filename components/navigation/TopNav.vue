<template lang="html">
  <v-app-bar app>
    <v-toolbar-title><v-btn color="grey"
        plain text nuxt to="/">{{title}}</v-btn></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn class="ma-2"  nuxt to="/posts">
      <span>All Posts</span>
      <v-icon right aria-label="All Posts" role="img" aria-hidden="false">mdi-newspaper
      </v-icon>
    </v-btn>
    <v-btn class="ma-2" nuxt to="/about">
      <span>About</span>
      <v-icon right aria-label="About" role="img" aria-hidden="false">
        mdi-information
      </v-icon>
    </v-btn>
    <v-btn class="ma-2" nuxt to="/admin">
      <span>Admin</span>
      <v-icon right aria-label="Admin" role="img" aria-hidden="false">
        mdi-cog
      </v-icon>
    </v-btn>
    <v-btn v-if="isAuth" class="ma-2" nuxt @click="logout">
      <span>Logout</span>
      <v-icon right aria-label="Admin" role="img" aria-hidden="false">
        mdi-log-out
      </v-icon>
    </v-btn>
    <v-form>
      <v-container>
        <v-row>
          <v-col>
            <v-text-field v-model="searchInput">
              <template v-slot:append>
                <v-btn icon @click.stop="searchPosts">
                  <v-icon aria-label="Search" role="img" aria-hidden="false">
                    mdi-magnify
                  </v-icon>
                </v-btn>
              </template>
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TopNav',
  props: {
    title: String
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuth
    }
  }
  data() {
    return {
      searchInput: ''
    }
  },
  methods: {
    searchPosts() {
      console.log(this.searchInput)
    },
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
