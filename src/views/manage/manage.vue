<template>
  <div id="mine">
    <div class="security_content">
      <div class="security-left">
        <div class="security-title">管理中心</div>
        <ul id="ser-ul" class="security-ul">
          <li class="normalList" style="cursor:default">
            <i class="security-icon el-icon-user noMarginLeft"></i>
            <span class="security-nav-name"
              ><span style="">用户管理</span></span
            >
          </li>
          <router-link to="/manage/checkUser" tag="li" class="security-list"
            ><i class="security-icon el-icon-s-data"></i>
            <span class="security-nav-name">查看用户</span></router-link
          >
          <router-link to="/manage/editUser" tag="li" class="security-list"
            ><i class="security-icon el-icon-s-data"></i>
            <span class="security-nav-name">编辑用户</span></router-link
          >
          <router-link to="/manage/deleteUser" tag="li" class="security-list"
            ><i class="security-icon el-icon-s-data"></i>
            <span class="security-nav-name">删除用户</span></router-link
          >

          <li class="normalList" style="cursor:default">
            <i class="security-icon el-icon-shopping-bag-2 noMarginLeft"></i>
            <span class="security-nav-name"
              ><span style="">店铺管理</span></span
            >
          </li>
          <router-link to="/mine/comments" tag="li" class="security-list"
            ><i class="security-icon el-icon-s-data"></i>
            <span class="security-nav-name">查看店铺</span></router-link
          >
          <router-link to="/mine/comments" tag="li" class="security-list"
            ><i class="security-icon el-icon-s-data"></i>
            <span class="security-nav-name">编辑店铺</span></router-link
          >
          <router-link to="/mine/comments" tag="li" class="security-list"
            ><i class="security-icon el-icon-s-data"></i>
            <span class="security-nav-name">删除店铺</span></router-link
          >
          <li class="normalList" style="cursor:default">
            <i class="security-icon el-icon-tickets noMarginLeft"></i>
            <span class="security-nav-name"
              ><span style="">资讯管理</span></span
            >
          </li>
          <router-link to="/mine/comments" tag="li" class="security-list"
            ><i class="security-icon el-icon-s-data"></i>
            <span class="security-nav-name">查看资讯</span></router-link
          >
          <router-link to="/mine/comments" tag="li" class="security-list"
            ><i class="security-icon el-icon-s-data"></i>
            <span class="security-nav-name">编辑资讯</span></router-link
          >
          <router-link to="/mine/comments" tag="li" class="security-list"
            ><i class="security-icon el-icon-s-data"></i>
            <span class="security-nav-name">删除资讯</span></router-link
          >

          <li class="normalList" style="cursor:default">
            <i class="security-icon el-icon-chat-dot-round noMarginLeft"></i>
            <span class="security-nav-name"
              ><span style="">评论管理</span></span
            >
          </li>
          <router-link to="/mine/comments" tag="li" class="security-list"
            ><i class="security-icon el-icon-s-data"></i>
            <span class="security-nav-name">查看评论</span></router-link
          >
          <router-link to="/mine/comments" tag="li" class="security-list"
            ><i class="security-icon el-icon-s-data"></i>
            <span class="security-nav-name">编辑评论</span></router-link
          >
          <router-link to="/mine/comments" tag="li" class="security-list"
            ><i class="security-icon el-icon-s-data"></i>
            <span class="security-nav-name">删除评论</span></router-link
          >
        </ul>
      </div>
      <div class="security-right">
        欢迎您，尊敬的{{userInfo.role}}
        <transition
          enter-active-class="animated fadeIn"
          leave-active-class=""
          mode="out-in"
        >
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "index.vue",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  }
};
</script>

<style scoped lang="scss">
.noMarginLeft {
  margin-left: 0 !important;
}
#mine {
  font: 12px/1.5 Microsoft YaHei, tahoma, \\5b8b\4f53, sans-serif;
  color: #717171;
  font-size: 12px;
  font-family: MicrosoftYaHei;
}
.security_content {
  overflow: hidden;
  width: 980px;
  height: 100%;
  margin: 10px auto 100px;
  border: 1px solid #e1e2e5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.14);
  background: #fafafa;
  border-radius: 4px;
  .security-left {
    float: left;
    width: 150px;
    height: 100%;
    overflow: hidden;
    ul,
    li {
      padding: 0;
    }

    .security-list:hover {
      color: white;
      transition: all 1s ease;
      background: #99a2aa;
    }
    .security-list,
    .normalList {
      width: 150px;
      height: 48px;
      line-height: 48px;
      text-align: center;
      color: #222;
      cursor: pointer;
      .security-nav-name {
        margin-left: 12px;
        font-size: 14px;
      }
      .security-icon {
        vertical-align: middle;
        display: inline-block;
        width: 18px;
        height: 36px;
        margin-left: 33px;
        line-height: 33px;
      }
    }
    .security-ul {
      border-bottom: 1px solid #e1e2e5;
    }
    .security-title {
      display: block;
      width: 150px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      font-size: 16px;
      color: #99a2aa;
      cursor: default;
      border-bottom: 1px solid #e1e2e5;
    }
  }
  .security-right {
    float: right;
    width: 829px;
    border-left: 1px solid #ddd;
    background: #fff;
    min-height: 890px !important;
  }
}
</style>
