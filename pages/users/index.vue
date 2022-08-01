<template>
  <div>
    <Header />
    <p>Input User ID to get more info</p>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
export default {
  layout: "users",
  components: { Header },
};
</script>