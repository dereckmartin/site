import Vue from "vue";
import Router from "vue-router";
import Posts from "./statics/data/posts.json";

Vue.use(Router);

export default new Router({
  //mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        default: () => import("@/views/Home.vue")
      },
      meta: {
        title: "Home"
      },
      props: {
        default: true
      }
    },
    {
      path: "/contact",
      name: "contact",
      components: {
        default: () => import("./views/Contact.vue")
      },
      meta: {
        title: "Contact"
      },
      props: {
        default: true
      }
    },

    /**
     * Generates post routes based on static post json data
     */
    ...Posts.map(entry => ({
      path: `/${entry.id}`,
      name: entry.id,
      component: () =>
        import(/* webpackChunkName: "posts" */ `./markdowns/posts/
          ${entry.id}
        .md`)
    }))
  ]
});
