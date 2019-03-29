<!--
  Main Application View

  @author Dereck Martin <contact@dereckmartin.com>
  @copyright Dereck Martin 2019
  @license BSD 3-Clause "New" or "Revised" License
-->
<template>
  <div id="app">
    <HeaderContainer></HeaderContainer>
    <MainContainer></MainContainer>
    <FooterContainer></FooterContainer>
  </div>
</template>

<script>
import HeaderContainer from "@/components/elements/HeaderContainer.vue";
import MainContainer from "@/components/elements/MainContainer.vue";
import FooterContainer from "@/components/elements/FooterContainer.vue";

export default {
  components: {
    HeaderContainer,
    MainContainer,
    FooterContainer
  }
};
</script>
