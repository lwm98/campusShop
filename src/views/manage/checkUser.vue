<!-- 所有用户 -->
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
      <el-table-column prop="information_state" label="公开状态" width="">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.information_state"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="0"
          ></el-switch>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getAllUserList } from "../../http/login";
export default {
  data() {
    return {
      userDataLoading: true,
      userData: []
    };
  },

  components: {},

  computed: {},

  created() {
    this.getAllUserList();
  },
  mounted() {},

  methods: {
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
