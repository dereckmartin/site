<template>
  <article :id="getRouteName"></article>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

export default {
  computed: {
    getRouteName() {
      return "v-" + this.$route.name;
    }
  },
  components: {}
};
</script>
