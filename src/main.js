// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

import router from "./router";
import store from "./store/index";

Vue.config.productionTip = false;

/**
 * elementUI
 */
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "element-ui/lib/theme-chalk/display.css";
Vue.use(ElementUI);

/**
 * animate 动画
 */
import "../static/css/animate.min.css";

/**
 * 我的组件
 */
import myfooter from "./components/footer";
Vue.component("my-footer", myfooter);
import mineTitle from "./components/mineTitle";
Vue.component("mineTitle", mineTitle);

import "./promission"; //control promission

/**
 * vue实例
 */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
