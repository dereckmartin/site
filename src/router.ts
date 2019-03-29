/**
 * Router Module
 *
 * @author Dereck Martin <contact@dereckmartin.com>
 * @license BSD 3-Clause "New" or "Revised" License
 * @copyright Dereck Martin 2019
 */

import Vue from "vue";
import Router from "vue-router";
import HomeRoute from "@/routes/HomeRoute";
import ContactRoute from "@/routes/ContactRoute";
import PostsRoute from "@/routes/PostsRoute";

Vue.use(Router);

// @note Using hash mode for app to work with gh-pages
export default new Router({
  base: process.env.BASE_URL,
  routes: [HomeRoute, ContactRoute, PostsRoute]
});
