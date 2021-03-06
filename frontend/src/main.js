
import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import { rtdbPlugin } from 'vuefire';



Vue.config.productionTip = false
Vue.use(rtdbPlugin);

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
