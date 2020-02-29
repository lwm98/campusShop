import Vue from 'vue'
import vuex from 'vuex';
Vue.use(vuex);

import user from './module/userInfo'

const store = new vuex.Store({
  modules:{
    user
  }
});

export default store;
