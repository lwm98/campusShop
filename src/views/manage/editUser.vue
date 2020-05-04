<!-- 编辑用户 -->
<template>
  <div class="alluser">
    <el-table
      :data="userData"
      style="width: 100%;"
      stripe
      v-loading="userDataLoading"
    >
      <el-table-column prop="id" label="ID" width="width"> </el-table-column>
      <el-table-column prop="name" label="用户名" width="width">
      </el-table-column>
      <el-table-column prop="image" label="头像" width="width">
        <template slot-scope="scope">
          <el-avatar size="small" :src="scope.row.image"></el-avatar>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="地址" width="width">
      </el-table-column>
      <el-table-column prop="sex" label="性别" width="width"> </el-table-column>
      <el-table-column prop="real_name" label="真实姓名" width="">
      </el-table-column>
      <el-table-column label="操作" width="">
        <template slot-scope="scope">
          <el-button type="text" @click="edit(scope.row)">编辑</el-button>
          <el-button type="text" @click="delUser(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="" :visible.sync="dialogVisible" width="50%">
      <div style="padding: 15px">
        <div style="margin-bottom: 25px">
          <el-upload
            class="avatar-uploader"
            :action="uploadIMGurl"
            :show-file-list="false"
            :auto-upload="true"
            name="fileName"
            :data="imagedata"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="userInfo.image" :src="userInfo.image" class="avatar" style="width:200px;height:200px"/>
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <el-form ref="form" label-width="80px">
          <el-form-item label="账户ID">
            <el-input v-model="userInfo.id" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="账户名称">
            <el-input v-model="userInfo.name"></el-input>
          </el-form-item>
          <el-form-item label="账户密码">
            <el-input v-model="userInfo.password"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="userInfo.sex">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input v-model="userInfo.phone"></el-input>
          </el-form-item>
          <el-form-item label="真实姓名">
            <el-input v-model="userInfo.real_name"></el-input>
          </el-form-item>
          <el-form-item label="联系地址">
            <el-input v-model="userInfo.address"></el-input>
          </el-form-item>
          <el-form-item label="公开状态">
            <el-switch
              v-model="userInfo.information_state"
              :inactive-value="0"
              :active-value="1"
            ></el-switch>
          </el-form-item>
          <el-form-item>
            <div style="text-align: center">
              <el-button type="primary" @click="updateUserInfo()"
                >修改</el-button
              >
              <el-button>取消</el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getAllUserList, updateUserInfo, delUserById } from "../../http/login";
export default {
  data() {
    return {
      userDataLoading: true,
      userData: [],
      dialogVisible: false,
      imagedata: {
        type: 1
      },
      userInfo: {
        image: ""
      }
    };
  },

  components: {},

  computed: {
    uploadIMGurl: () => {
      console.log(app.apiUrl + "/api/upUserImage");
      return app.apiUrl + "/api/upUserImage";
    }
  },

  created() {
    this.getAllUserList();
  },
  mounted() {},

  methods: {
    handleAvatarSuccess(res, file) {
      console.log(URL.createObjectURL(file.raw));
      console.log(res);
      if (res.code == 0) {
        this.userInfo.image = res.msg;
        // console.log(this.$root.userConData)
      }
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    delUser(id) {
        console.log(id);
      this.$confirm("您确定要删除此用户?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          delUserById(id)
            .then(res => {
              console.log(res);
              this.getAllUserList();
            })
            .catch(error => {
              console.log(error);
            });
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    edit(row) {
        console.log(row);
      this.userInfo = row;
      this.dialogVisible = true;
    },
    updateUserInfo() {
      updateUserInfo({
        id: this.userInfo.id,
        name: this.userInfo.name,
        image: this.userInfo.image,
        password: this.userInfo.password,
        address: this.userInfo.address,
        sex: this.userInfo.sex,
        phone: this.userInfo.phone,
        Information_state: this.userInfo.information_state,
        autograph: this.userInfo.autograph,
        real_name: this.userInfo.real_name
      })
        .then(res => {
          console.log(res);
          if (res.data.updateUser == "true") {
            // window.localStorage.setItem('userData', JSON.stringify(this.userInfo));
            this.$store.commit("user/INIT_USER", this.userInfo);
            this.dialogVisible = false;

            this.$notify({
              title: "修改成功",
              message: "已成功修改",
              type: "success"
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    getAllUserList() {
      this.userDataLoading = true;
      getAllUserList()
        .then(res => {
          console.log(res);
          this.userData = res.data.data;
          this.userDataLoading = false;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.alluser {
  padding: 15px;
}
</style>
