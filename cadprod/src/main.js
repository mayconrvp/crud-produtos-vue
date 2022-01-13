import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import { routes } from "./routes";
import bootstrap from "./bootstrap";

import "jquery/dist/jquery.js";

import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

Vue.use(VueRouter);
Vue.use(bootstrap);
Vue.use(VueResource);

Vue.http.options.root = "http://localhost:3000";

const router = new VueRouter({
  routes
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
