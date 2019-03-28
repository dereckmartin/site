import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import "./styles/app.scss";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

router.beforeEach((to, from, next) => {
  var title = "Dereck Martin";
  if (to.meta.title != null) {
    title = title + " | " + to.meta.title;
  }

  document.title = title;
  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
