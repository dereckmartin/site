/**
 * Route Module
 *
 * @author Dereck Martin <contact@dereckmartin.com>
 * @license BSD 3-Clause "New" or "Revised" License
 * @copyright Dereck Martin 2019
 */

const routeName = "contact";
const route = {
  path: "/" + routeName,
  name: routeName,
  components: {
    default: () => import("@/views/ContactView.vue")
  },
  meta: {
    title: "Contact"
  },
  props: {
    default: true
  }
};

export default route;
