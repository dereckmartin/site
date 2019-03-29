/**
 * Route Module
 *
 * @author Dereck Martin <contact@dereckmartin.com>
 * @license BSD 3-Clause "New" or "Revised" License
 * @copyright Dereck Martin 2019
 */

import Posts from "@/statics/data/posts.json";

const children = Posts.map(entry => ({
  path: "/" + entry.id,
  name: entry.id,
  components: {
    default: () =>
      import(/* webpackChunkName: "posts" */ "@/markdowns/posts/" +
        entry.id +
        ".md")
  }
}));

const route = {
  path: "/p",
  name: "posts",
  components: {
    default: () => import("@/views/PostView.vue")
  },
  children
};

export default route;
