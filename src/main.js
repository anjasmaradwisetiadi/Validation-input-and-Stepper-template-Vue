import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import router from './router';
import store from './store';
import App from './App.vue';
import { JustDigits } from './Directive/filter';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

JustDigits();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
