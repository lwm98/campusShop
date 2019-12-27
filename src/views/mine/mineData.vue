<template>
    <div>
      <mineTitle></mineTitle>
      <div style="padding: 15px">
        <div style="margin-bottom: 25px">
          <el-upload
            class="avatar-uploader"
            action="http://localhost:8080/api/upUserImage"
            :show-file-list="false"
            :auto-upload="true"
            name="fileName"
            :data="imagedata"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="userInfo.image" :src="userInfo.image" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <el-form ref="form"  label-width="80px">
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
            <el-switch v-model="state"></el-switch>
          </el-form-item>
          <el-form-item>
            <div style="text-align: center">
              <el-button type="primary" @click="onSubmit">修改</el-button>
              <el-button>取消</el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
    export default {
        name: "mineData",
      data() {
        return {
          userInfo:{
            image:''
          },
          state: false, //存放公开状态 false 对应 0 ，true 对应 1
          routerName:'',
          imagedata:{
            type:1
          }
        }
      },
      created(){
        this.routerName = this.$route.name;
        this.userInfo = JSON.parse(window.localStorage.getItem('userData'))
        if (this.userInfo.information_state == 1) {
          this.state = true
        }else {
          this.state = false
        }
      },
      methods: {
        handleAvatarSuccess(res, file) {
          console.log(URL.createObjectURL(file.raw));
          console.log(res);
          if (res.code == 0){
            this.userInfo.image = res.msg;
            console.log(this.$root.userConData)
          }
        },
        beforeAvatarUpload(file) {
          const isJPG = file.type === 'image/jpeg';
          const isLt2M = file.size / 1024 / 1024 < 2;

          if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
          }
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
          }
          return isJPG && isLt2M;
        },
        onSubmit() {
          if (this.state) {
            this.userInfo.information_state = 1;
          }else {
            this.userInfo.information_state = 0;
          }
          this.$api('/api/updateUserInfo','POST',{
            id:this.userInfo.id,
            name:this.userInfo.name,
            image:this.userInfo.image,
            password:this.userInfo.password,
          address:this.userInfo.address,
          sex:this.userInfo.sex,
          phone:this.userInfo.phone,
          Information_state:this.userInfo.information_state,
          autograph:this.userInfo.autograph,
          real_name:this.userInfo.real_name
          }).then(res=>{
            console.log(res);
            if (res.updateUser == 'true'){
              window.localStorage.setItem('userData', JSON.stringify(this.userInfo));
              this.$notify({
                title: '修改成功',
                message: '已成功修改',
                type: 'success'
              });
            }
          })
        }
      }
    }
</script>

<style scoped lang="scss">

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
