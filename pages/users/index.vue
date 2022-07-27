<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <input type="text" v-model="userId" />
      <v-btn color="primary" @click="loadUser">Load User</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      userId: "",
    };
  },
  methods: {
    loadUser() {
      this.$router.push(`/users/${this.userId}`);
    },
  },
};
</script>