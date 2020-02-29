import Vue from 'vue'
import vuex from 'vuex';
Vue.use(vuex);

import userInfo from './module/userInfo'

const store = new vuex.Store({
  modules:{
    userInfo
  }
});

export default store;
