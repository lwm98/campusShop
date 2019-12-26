<template>
  <div id="mine">
    <div class="security_content">
      <div class="security-left">
        <div class="security-title">个人中心</div>
        <ul id="ser-ul" class="security-ul">
          <router-link to="/mine/index" tag="li" class="security-list router-link-exact-active on"><i class="security-icon el-icon-house"></i> <span class="security-nav-name">首<b style="width:28px; display:inline-block"></b>页</span></router-link>
          <router-link to="/mine/data" tag="li" class="security-list"><i class="security-icon el-icon-s-custom"></i> <span class="security-nav-name"><span style="">个人资料</span></span></router-link>
          <router-link to="/mine/good" tag="li" class="security-list"><i class="security-icon el-icon-thumb"></i> <span class="security-nav-name">我<b style="width:7px; display:inline-block"></b>的<b style="width:7px; display:inline-block"></b>赞</span></router-link>
          <router-link to="/mine/comments" tag="li" class="security-list"><i class="security-icon el-icon-s-data"></i> <span class="security-nav-name">我的评论</span></router-link>
          <router-link to="/mine/reply" tag="li" class="security-list"><i class="security-icon el-icon-s-opportunity"></i> <span class="security-nav-name">回<b style="width:28px; display:inline-block"></b>复</span></router-link>
          <router-link to="/mine/remind" tag="li" class="security-list"><i class="security-icon el-icon-bell"></i> <span class="security-nav-name">提醒我的</span></router-link>
          <router-link to="/mine/security" tag="li" class="security-list"><i class="security-icon el-icon-warning-outline"></i> <span class="security-nav-name">账号安全</span></router-link>
        </ul>
      </div>
      <div class="security-right">
        <transition enter-active-class="animated fadeIn" leave-active-class="" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "index.vue"
    }
</script>

<style scoped lang="scss">
#mine{
  font: 12px/1.5 Microsoft YaHei,tahoma,\\5B8B\4F53,sans-serif;
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
    box-shadow: 0 2px 4px rgba(0,0,0,.14);
    background: #fafafa;
    border-radius: 4px;
    .security-left{
      float: left;
      width: 150px;
      height: 100%;
      overflow: hidden;
      ul,li{
        padding: 0;
      }

      .security-list:hover{
        color: white;
        transition: all 1s ease;
        background: #99a2aa;
      }
        .security-list{
        width: 150px;
        height: 48px;
        line-height: 48px;
        text-align: center;
          color: #222;
          cursor: pointer;
          .security-nav-name{
          margin-left: 12px;
          font-size: 14px;
        }
        .security-icon{
          vertical-align: middle;
          display: inline-block;
          width: 18px;
          height: 36px;
          margin-left: 33px;
          line-height: 33px;
        }
      }
      .security-ul{
        border-bottom: 1px solid #e1e2e5;
      }
      .security-title{
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
    .security-right{
      float: right;
      width: 829px;
      border-left: 1px solid #ddd;
      background: #fff;
      min-height: 890px!important;
    }
  }
</style>
