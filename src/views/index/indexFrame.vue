<template>
  <div id="container">
    <el-container>
      <el-header class="xcenter">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
            <el-menu-item index="/">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">选择商区</template>
              <el-menu-item index="yaYuan">雅苑区</el-menu-item>
              <el-menu-item index="boYuan">博苑区</el-menu-item>
            <el-menu-item index="nanYuan">南苑区</el-menu-item>
          </el-submenu>
          <el-input type="primary" placeholder="请输入你想查询的店铺" style="width: 200px;margin-right: 20px;margin-left: 10px;"></el-input>
          <el-button icon="el-icon-search" circle></el-button>
          <el-submenu index="4">
            <template slot="title">
              <el-avatar :size="30" :src="'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'"></el-avatar>
            </template>
            <el-menu-item index="4-1">选项1</el-menu-item>
            <el-menu-item index="4-2">选项2</el-menu-item>
            <el-menu-item index="4-3">退出登录</el-menu-item>
          </el-submenu>
          <el-menu-item index="5">
            <el-button type="primary" plain>登录</el-button>
          </el-menu-item>
          <el-menu-item index="5">
            <el-button type="primary" plain>注册</el-button>
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <el-main>
          <transition enter-active-class="animated fadeIn" leave-active-class="" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        activeIndex: '1',
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped lang="scss">
  a {
    text-decoration: none;
  }

  .textcenter {
    text-align: center;
  }

  .xcenter {
    margin: 0 auto;
  }

  .xycenter {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .el-menu--popup {
    width: 150px;
  }

  #container {
    height: 100%;
    /*布局*/
    .el-container {
      height: 100%;


      .el-header {
        color: #333;
        text-align: center;

        .el-menu {
          display: flex;
          align-items: center;
        }

        .el-menu-item {
          text-align: center;
        }
      }

      .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        height: 100%;
      }

      .el-main {
        background-color: #f9f9f9;
        color: #333;
        text-align: center;
        height: 100%;
        padding: 0;
        #content{
          height: 100%;
        }
      }
    }
  }

</style>
