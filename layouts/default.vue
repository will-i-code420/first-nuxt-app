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
  components: {
    TopNav,
    Footer
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Home",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "About",
          to: "/about",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
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
