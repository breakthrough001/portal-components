// src/main.js
import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

new Vue({
  render: (h) => h(App),
  vuetify: new Vuetify(),
}).$mount("#app");
