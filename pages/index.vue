<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <Header />
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <VuetifyLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-text>
          <p>Welcome Home</p>
          <!--  using a tag loads new page from server  -->
          <a href="/inspire">Learn More</a>
          <!--  using nuxt-link tag keeps it SPA  -->
          <nuxt-link to="/inspire"> Continue </nuxt-link>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <!-- in Vuetify using to and nuxt keywords makes it nuxt-link -->
          <v-btn color="primary" nuxt to="/users"> View Users </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
