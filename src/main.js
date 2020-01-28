import Vue from 'vue';
import VueSuperagent from 'vue-superagent';
import VueLodash from 'vue-lodash';

import App from './App.vue';
import store from './store';

Vue.use(VueSuperagent);
Vue.use(VueLodash, {
  name: '$_',
});
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
