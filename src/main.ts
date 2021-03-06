import '@babel/polyfill';
// Import Component hooks before component definitions
import './component-hooks';
import Vue from 'vue';
import './plugins/vuetify';
import './plugins/vee-validate';
import App from './App.vue';
import router from './router';
import store from '@/store';
import './registerServiceWorker';
import 'vuetify/dist/vuetify.min.css';
import i18n from '@/plugins/i18n';
import vuetify from './plugins/vuetify';
import VueLodash from 'vue-lodash';
import lodash from 'lodash';

Vue.config.productionTip = false;
Vue.use(VueLodash, { name: 'custom', lodash  });

new Vue({
  i18n,
  router,
  store,
  // @ts-ignore
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
