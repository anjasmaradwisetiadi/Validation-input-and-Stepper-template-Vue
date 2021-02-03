import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import router from './router';
import store from './store';
import App from './App.vue';
import {digitOnly} from './Directive/Validation/digitsOnly'
import {textOnly} from './Directive/Validation/textOnly';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.directive('digitsonly',digitOnly);
Vue.directive('textonly',textOnly)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
