import Vue from "vue";
import Router from "vue-router";
import indexFrame from "../views/index/indexFrame";
import indexContent from "../views/index/indexContent";
import nanYuan from "../views/store/index";
import comment from "../components/comments.vue";
import mine from "../views/mine/index";
import mineIndex from "../views/mine/mineIndex";
import mineData from "../views/mine/mineData";
import mineGood from "../views/mine/mineGood";
import mineComments from "../views/mine/mineComments";
import mineReply from "../views/mine/mineReply";
import mineRemind from "../views/mine/mineRemind";
import mineSecurity from "../views/mine/mineSecurity";
import manage from "../views/manage/manage.vue";
import haveNoAuth from '../views/error/403.vue';
import news from "../views/news";
import checkUser from '@/views/manage/checkUser';
import editUser from '@/views/manage/editUser';
import deleteUser from '@/views/manage/deleteUser';
import checkStore from '@/views/manage/checkStore';
import editStore from '@/views/manage/editStore';
import deleteStore from '@/views/manage/deleteStore';
import checkNews from '@/views/manage/checkNews';
import editNews from '@/views/manage/editNews';
import deleteNews from '@/views/manage/deleteNews';
import checkComment from '@/views/manage/checkComment';
import editComment from '@/views/manage/editComment';
import deleteComment from '@/views/manage/deleteComment';
import leasingStore from '@/views/store/leasingStore';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/index",
      name: "首页框架",
      component: indexFrame,
      children: [
        {
          path: "mine",
          name: "我的资料",
          component: mine,
          redirect: "/mine/index",
          children: [
            {
              path: "index",
              component: mineIndex,
              name: "个人资料"
            },
            {
              path: "data",
              name: "修改个人资料",
              component: mineData
            },
            {
              path: "good",
              component: mineGood,
              name: "我的赞"
            },
            {
              path: "comments",
              component: mineComments,
              name: "我的评论"
            },
            {
              path: "reply",
              component: mineReply,
              name: "我的回复"
            },
            {
              path: "remind",
              component: mineRemind,
              name: "我的提醒"
            },
            {
              path: "security",
              component: mineSecurity,
              name: "账号安全"
            }
          ]
        },
        {
          path: "index",
          name: "首页",
          component: indexContent
        },
        {
          path: "news",
          name: "所有资讯",
          component: news
        },
        {path:'leasingStore',name:'租赁商铺',component:()=>import('../views/store/leasingStore.vue')},
        {
          path: "manage",
          name: "管理",
          meta: { authority: "admin" },
          component: manage,
          children:[
            {
              path:'checkUser',
              name: '查看用户',
              component: checkUser
            },
            {
              path:'editUser',
              name: '编辑用户',
              component:()=>import('../views/manage/editUser.vue')
            },
            {
              path:'checkStore',
              name: '查看商铺',
              component: checkStore
            },
            
            {
              path:'checkNews',
              name: '查看资讯',
              component: checkNews
            },
          ]
        },
        {
          path: '403',
          name: "出错了，您没有权限",
          component: haveNoAuth
        },
        {
          path: "area/:id/:name",
          name: "商区",
          component: nanYuan
        },
        {
          path: "comment/:id",
          name: "评论",
          component: comment
        }
      ]
    }
  ]
});
