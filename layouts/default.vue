<template>
  <v-app dark>
    <TopNav :title="title" />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app padless>
      <Footer :title="title" />
    </v-footer>
  </v-app>
</template>

<script>
import TopNav from '~/components/navigation/TopNav.vue'
import Footer from '~/components/navigation/Footer.vue'

export default {
  name: "DefaultLayout",
  middleware: 'log',
  components: {
    TopNav,
    Footer
  },
  data() {
    return {
      title: "Tech News",
    };
  }
};
</script>

<style>
  html {
    font-family: 'Roboto', sans-serif;
  }
</style>
