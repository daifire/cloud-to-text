import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import "./plugins/element.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMicrophone, faMicrophoneSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faMicrophone, faMicrophoneSlash );
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.directive("uppercase", {
  update: function (el) {
      el = el.toUpperCase()
  }})
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
