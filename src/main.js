// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

/**
 * http请求封装
 */
import api from "./http/api";
Vue.prototype.$api = api.MyRequest;

Vue.config.productionTip = false;

/**
 * elementUI
 */
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "element-ui/lib/theme-chalk/display.css";
Vue.use(ElementUI);
/* eslint-disable no-new */

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

/**
 * 页面进度条 nprogress
 */
import nprogress from "nprogress";
import "nprogress/nprogress.css";

/*
 * 引入vuex
 */
import store from "./store/index";

/**
 * 全局守卫
 */
router.beforeEach((to, from, next) => {
  nprogress.start();
  if (to.path === "/manage") {
    if (store.state.user.userInfo.role === to.meta.authority) {
      next();
    } else {
      nprogress.done();
      next({ path: "/403" });
    }
  }
  if (to.name) {
    document.title = to.name;
  }
  next();
});
router.afterEach((to, from, next) => {
  nprogress.done();
});

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
