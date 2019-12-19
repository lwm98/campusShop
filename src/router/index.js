import Vue from 'vue'
import Router from 'vue-router'
import indexFrame from '../views/index/indexFrame'
import indexContent from '../views/index/indexContent'
import yaYuan from '../views/yaYuan/index'
import boYuan from '../views/boYuan/index'
import nanYuan from '../views/nanYuan/index'
Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/index',
      name: '首页框架',
      component: indexFrame,
      children:[
        {
          path: 'index',
          name: '首页内容',
          component: indexContent
        },
        {
          path: 'yaYuan',
          name: '雅苑',
          component: yaYuan
        },
        {
          path: 'boYuan',
          name: '博苑',
          component: boYuan
        },
        {
          path: 'nanYuan',
          name: '南苑',
          component: nanYuan
        },
      ]
    },
  ]
})
