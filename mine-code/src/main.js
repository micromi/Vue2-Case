import Vue from 'vue';
import axios from 'axios';
import App from './App';
import router from './router';
import '../static/css/reset.css';

axios.defaults.baseURL = '/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
