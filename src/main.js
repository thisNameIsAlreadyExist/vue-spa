import Vue from 'vue';
import router from "./router/index";
import Mint from "mint-ui";
import "mint-ui/lib/style.css";

Vue.use(Mint);

import app from './App.vue';
import footer from "./components/footer/index.vue";

new Vue({
  el: '#app',
  router,
  render: h => h(app)
});
