import { INIT_USER } from "../mutation-types";
import { CLEAR_USER } from "../mutation-types";

const state = {
  userInfo: {}
};
const getters = {};
const actions = {};
const mutations = {
  [INIT_USER](state,user){
    console.log(user);
    window.localStorage.setItem('user',JSON.stringify(user));
    state.userInfo = user;
  },
  [CLEAR_USER](state){
    window.localStorage.removeItem('user');
    state.userInfo = {};
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
