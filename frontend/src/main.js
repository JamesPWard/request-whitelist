import './firebase';
import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import VueFire from 'vuefire';

Vue.config.productionTip = false
Vue.use(VueFire);

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
