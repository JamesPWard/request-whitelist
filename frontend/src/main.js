import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import { rtdbPlugin } from 'vuefire';

import { db } from './db';

Vue.config.productionTip = false
Vue.use(rtdbPlugin);

new Vue({
  router: router,
  firestore: {
    requests: db.ref('requests'),
  },
  render: h => h(App),
}).$mount('#app')
