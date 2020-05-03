<template>
  <div id="container">
    <el-dialog
      title="请登录"
      :visible.sync="loginDialogVisible"
      width="30%"
      center
    >
      <el-form :model="loginFormData">
        <el-form-item>
          <el-input
            v-model="loginFormData.id"
            :required="true"
            autofocus
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="loginFormData.password"
            :required="true"
            clearable
            show-password
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="sendLogin" style="width:100%;"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog
      title="请注册"
      :visible.sync="registerDialogVisible"
      width="30%"
      center
    >
      <el-form label-width="4.5rem" :model="registerFormData">
        <el-form-item label="账号">
          <el-input v-model="registerFormData.name" required></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="registerFormData.password" required></el-input>
        </el-form-item>
        <el-form-item label="公开">
          <el-switch v-model="registerFormData.Information_state"></el-switch>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="sendRegister">注册</el-button>
        <el-button @click="registerDialogVisible = false">取消</el-button>
      </span>
    </el-dialog>
    <el-container>
      <el-header class="xcenter">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          :router="true"
        >
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/news">资讯</el-menu-item>
          <el-submenu index="2">
            <template slot="title">选择商区</template>
            <el-menu-item index="/area/1/雅苑" @click.native="toTotal(1)"
              >雅苑区</el-menu-item
            >
            <el-menu-item index="/area/2/博苑" @click.native="toTotal(2)"
              >博苑区</el-menu-item
            >
            <el-menu-item index="/area/3/南苑" @click.native="toTotal(3)"
              >南苑区</el-menu-item
            >
          </el-submenu>
          <el-input
            type="primary"
            placeholder="请输入你想查询的店铺"
            style="width: 20rem;margin-right: 2rem;margin-left: 1rem;"
          ></el-input>
          <el-button icon="el-icon-search" circle></el-button>
          <el-menu-item
            index="/manage"
            v-if="userInfo !== null && userInfo.role == 'admin'"
            >管理</el-menu-item
          >
          <el-menu-item index="/manage">租赁商铺</el-menu-item>
          <el-button
            type="primary"
            plain
            @click="toLogin"
            v-if="userInfo == null || userInfo.id == undefined"
            >登录</el-button
          >
          <el-button
            type="primary"
            plain
            @click="toRegister"
            v-if="userInfo == null || userInfo.id == undefined"
            >注册</el-button
          >
          <el-submenu index v-else>
            <template slot="title">
              <el-avatar
                :size="30"
                :src="userInfo.image"
                v-if="userInfo.image"
              ></el-avatar>
              <el-avatar
                :size="30"
                :src="
                  'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
                "
                v-else
              ></el-avatar>
            </template>
            <el-menu-item index="/mine">个人资料</el-menu-item>
            <el-menu-item index="4-2">管理信息</el-menu-item>
            <el-menu-item @click="sendLoginOut" index>退出登录</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>
      <el-container>
        <el-main>
          <transition
            enter-active-class="animated fadeIn"
            leave-active-class
            mode="out-in"
          >
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { clicksAddInfo } from "../../http/store";
import { loginInfo, registerInfo ,loginOut} from "../../http/login";

export default {
  name: "index",
  data() {
    return {
      registerFormData: {
        password: "",
        name: "",
        Information_state: true
      },
      loginFormData: {
        id: "",
        password: ""
      },
      registerDialogVisible: false,
      loginDialogVisible: false,
      activeIndex: "/"
    };
  },
  methods: {
    toTotal(i) {
      console.log(i);

      clicksAddInfo({
        id: i
      })
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
      // this.$api("/api/clicksAddInfo", "post", {
      //   id: i
      // }).then(res => {
      //   console.log(res);
      // });
    },
    sendLoginOut() {
      loginOut()
        .then(res => {
          console.log(res);
          this.$store.commit("user/CLEAR_USER");
          this.$router.push({ path: "/" });
          this.$notify({
            title: "成功",
            message: "已成功退出登录",
            type: "success"
          });
        })
        .catch(error => {
          console.log(error);
        });
      // this.$api("/api/loginOut", "POST", {}).then(res => {
      //   console.log(res);
      //   // window.localStorage.removeItem('userData');
      //   // this.userInfo = '';
      //   this.$store.commit("user/CLEAR_USER");
      //   this.$router.push({ path: "/" });
      //   this.$notify({
      //     title: "成功",
      //     message: "已成功退出登录",
      //     type: "success"
      //   });
      // });
    },
    sendRegister() {
      let state = "";
      if (this.registerFormData.Information_state) {
        state = 1;
      } else {
        state = 0;
      }
      registerInfo({
        password: this.registerFormData.password,
        name: this.registerFormData.name,
        Information_state: state
      })
        .then(res => {
          console.log(res);
          if (res.data.register == "true") {
            this.userInfo = res.data.User;
            // window.localStorage.setItem('userData', JSON.stringify(res.User));
            this.$store.commit("user/INIT_USER", res.data.User);
            this.registerDialogVisible = false;
            this.$notify({
              title: "注册成功",
              message: "已成功注册",
              type: "success"
            });
          }
        })
        .catch(error => {
          console.log(error);
        });

      // this.$api("/api/registerInfo", "POST", {
      //   password: this.registerFormData.password,
      //   name: this.registerFormData.name,
      //   Information_state: state
      // }).then(res => {
      //   console.log(res);
      //   if (res.register == "true") {
      //     this.userInfo = res.User;
      //     // window.localStorage.setItem('userData', JSON.stringify(res.User));
      //     this.$store.commit("user/INIT_USER", res.User);
      //     this.registerDialogVisible = false;
      //     this.$notify({
      //       title: "注册成功",
      //       message: "已成功注册",
      //       type: "success"
      //     });
      //   }
      // });
    },
    sendLogin() {
      loginInfo({
        name: this.loginFormData.id,
        password: this.loginFormData.password
      })
        .then(res => {
          if (res.data.login == "true") {
            this.$store.commit("user/INIT_USER", res.data.User);
            // this.userInfo = res.User;
            // window.localStorage.setItem('userData', JSON.stringify(res.User));
            // console.log(res);
            this.loginDialogVisible = false;
            this.$notify({
              title: "登录成功",
              message: "已成功登录",
              type: "success"
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
      // this.$api("/api/loginInfo", "post", {
      //   name: this.loginFormData.id,
      //   password: this.loginFormData.password
      // }).then(res => {
      //   if (res.login == "true") {
      //     this.$store.commit("user/INIT_USER", res.User);
      //     // this.userInfo = res.User;
      //     // window.localStorage.setItem('userData', JSON.stringify(res.User));
      //     // console.log(res);
      //     this.loginDialogVisible = false;
      //     this.$notify({
      //       title: "登录成功",
      //       message: "已成功登录",
      //       type: "success"
      //     });
      //   }
      // });
    },
    toLogin() {
      this.loginFormData.id = "";
      this.loginFormData.password = "";
      this.loginDialogVisible = true;
    },
    toRegister() {
      this.registerFormData.name = "";
      this.registerFormData.password = "";
      this.registerDialogVisible = true;
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  },
  created() {
    let u = window.localStorage.getItem("user");
    this.$store.commit("user/INIT_USER", JSON.parse(u));
  }
};
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
  width: 15rem;
}

#container {
  .el-form-item {
    .el-input {
      /*width: 100%;*/
    }
  }
  height: 100%;
  width: 100%;
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
      background-color: #d3dce6;
      color: #333;
      text-align: center;
      height: 100%;
    }

    .el-main {
      background-color: #f9f9f9;
      color: #333;
      text-align: center;
      height: 100%;
      width: 100%;
      padding: 0;
      #content {
        height: 100%;
      }
    }
  }
}
</style>
