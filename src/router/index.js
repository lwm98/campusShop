import Vue from 'vue'
import Router from 'vue-router'
import indexFrame from '../views/index/indexFrame'
import indexContent from '../views/index/indexContent'
import yaYuan from '../views/yaYuan/index'
import boYuan from '../views/boYuan/index'
import nanYuan from '../views/nanYuan/index'
import comment from '../components/comments.vue'
import mine from '../views/mine/index'
import mineIndex from '../views/mine/mineIndex'
import mineData from "../views/mine/mineData";
import mineGood from "../views/mine/mineGood";
import mineComments from "../views/mine/mineComments";
import mineReply from "../views/mine/mineReply";
import mineRemind from "../views/mine/mineRemind";
import mineSecurity from "../views/mine/mineSecurity";
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
          path:'mine',
          name: '我的资料',
          component:mine,
          redirect: '/mine/index',
          children: [{
            path:'index',
            component:mineIndex,
            name:'首页'
          },
            {
              path:'data',
              name:'修改个人资料',
              component:mineData
            },
            {
              path:'good',
              component:mineGood,
              name:'我的赞'
            },
            {
              path:'comments',
              component:mineComments,
              name:'我的评论'

            },
            {
              path:'reply',
              component: mineReply,
              name:'我的回复'

            },
            {
              path:'remind',
              component: mineRemind,
              name:'我的提醒'

            },
            {
              path:'security',
              component: mineSecurity,
              name:'账号安全',
            }]
        },
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
          component: nanYuan,
        },
        {
          path: 'comment/:id',
          name: '评论',
          component: comment
        }
      ]
    },
  ]
})
