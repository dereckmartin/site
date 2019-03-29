<!--
  Primary Nav

  @author     Dereck Martin <contact@dereckmartin.com>
  @copyright  Dereck Martin 2019
  @license BSD 3-Clause "New" or "Revised" License
!-->
<template>
  <div>
    <!-- navbar component -->
    <b-navbar variant="faded" type="light">
      <!-- navbar brand -->
      <b-navbar-brand href="/">
        DM
      </b-navbar-brand>

      <!-- navbar links right aligned -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/blog">Blog</b-nav-item>
        <b-nav-item to="/contact">Contact</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
