<template>
  <div class="mineIndex">
    <div data-v-10e3258d="" class="home-head">
      <el-image :src="userInfo.image"></el-image>
    </div>
    <div><span class="home-top-msg-name">{{userInfo.name}}</span><span class="home-userstatus">正式会员</span></div>
    <div style="margin-top: 75px">
      <router-link to="/mine/data" tag="span" class="home-to-update">修改资料</router-link>
      <a href="#" class="home-to-space">
      个人空间
      <i class="el-icon-arrow-right"></i></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mineIndex',
    data(){
      return{
        userInfo:''
      }
    },
    created() {
      this.userInfo = JSON.parse(window.localStorage.getItem('userData'));
    }
  };
</script>

<style scoped lang="scss">
  .mineIndex{
    padding: 50px 15px 0 15px;
    .security-right-title{
      height: 50px;
      padding-left: 30px;
      border-bottom: 1px solid #ddd;
    }
  }
  .home-to-space,.home-to-update{
    width: 70px;
    height: 22px;
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #ced3db;
    color: #6d757a;
    text-align: center;
    cursor: pointer;
    line-height: 24px;
  }
  .home-userstatus{
    border: 1px solid #99a2aa;
    margin: 0 8px;
    color: #99a2aa;
    border-radius: 4px;
    font-size: 12px;
    cursor: default;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 2px 4px;
  }
  .home-top-msg-name{
    font-size: 18px;
    font-weight: 700;
    color: #222;
    margin-right: 8px;
    cursor: default;
  }
  .home-head {
    display: inline-block;
    vertical-align: top;
    position: relative;
    cursor: pointer;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    overflow: hidden;
    line-height: 64px;
    margin-bottom: 15px;
    img{
      width: 64px;
      height: 64px;
    }
  }
</style>
