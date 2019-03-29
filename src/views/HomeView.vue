<!--
  Home View
  
  @author Dereck Martin <contact@dereckmartin.com>
  @copyright Dereck Martin 2019
  @license BSD 3-Clause "New" or "Revised" License
-->
<template>
  <article :id="getRouteName"></article>
</template>

<script>
export default {
  computed: {
    getRouteName() {
      return "v-" + this.$route.name;
    }
  },
  components: {}
};
</script>

<style lang="scss"></style>
