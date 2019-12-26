<template>
    <div>
      <mineTitle></mineTitle>
      <div style="padding: 15px">
        <div style="margin-bottom: 25px">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <el-form ref="form" :model="userInfo" label-width="80px">
          <el-form-item label="账户ID">
            <el-input v-model="userInfo.id"></el-input>
          </el-form-item>
          <el-form-item label="账户名称">
            <el-input v-model="userInfo.name"></el-input>
          </el-form-item>
          <el-form-item label="账户密码">
            <el-input v-model="userInfo.password"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-input v-model="userInfo.sex"></el-input>
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input v-model="userInfo.tel"></el-input>
          </el-form-item>
          <el-form-item label="真实姓名">
            <el-input v-model="userInfo.real_name"></el-input>
          </el-form-item>
          <el-form-item label="联系地址">
            <el-input v-model="userInfo.address"></el-input>
          </el-form-item>
          <el-form-item label="公开状态">
            <el-input v-model="userInfo.information_state"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">修改</el-button>
            <el-button>取消</el-button>
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
          userInfo:'',
          imageUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4628233,3300773211&fm=26&gp=0.jpg',
          routerName:'',
        }
      },
      created(){
        this.routerName = this.$route.name;
        this.userInfo = this.$userInfo;
      },
      methods: {
        handleAvatarSuccess(res, file) {
          this.imageUrl = URL.createObjectURL(file.raw);
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
          console.log('submit!');
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
