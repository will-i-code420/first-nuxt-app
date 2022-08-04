<template lang="html">
  <v-app-bar app>
    <v-toolbar-title>{{title}}</v-toolbar-title>
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
  data() {
    return {
      searchInput: ''
    }
  },
  methods: {
    searchPosts() {
      console.log(this.searchInput)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
