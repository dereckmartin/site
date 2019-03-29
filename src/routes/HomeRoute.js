/**
 * Route Module
 *
 * @author Dereck Martin <contact@dereckmartin.com>
 * @license BSD 3-Clause "New" or "Revised" License
 * @copyright Dereck Martin 2019
 */

const routeName = "home";
const route = {
  path: "/",
  name: routeName,
  components: {
    default: () => import("@/views/HomeView.vue")
  },
  meta: {
    title: "Home"
  },
  props: {
    default: true
  }
};

export default route;
