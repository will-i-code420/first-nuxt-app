<template>
  <h1>User ID: {{ $route.params.id }}</h1>
</template>

<script>
export default {
  // nuxt executes prior to loading route
  validate(data) {
    return /^\d+$/.test(data.params.id);
  },
  layout: "users",
};
</script>