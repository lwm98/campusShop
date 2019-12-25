// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import api from './components/api'
Vue.prototype.$api = api.MyRequest;
Vue.prototype.$userInfo = '';

Vue.config.productionTip = false;
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
/* eslint-disable no-new */
import '../static/css/animate.min.css'
import myfooter from './components/footer'
Vue.component('my-footer',myfooter);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
