import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import "./plugins/element.js";
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
