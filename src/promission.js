
import router from "./router";
import store from "./store/index";
/**
 * 页面进度条 nprogress
 */
import nprogress from "nprogress";
import "nprogress/nprogress.css";

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
