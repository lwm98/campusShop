<!-- 所有商铺 -->
<template>
  <div class="alluser">
    <el-table
      :data="userData"
      style="width: 100%;"
      stripe
      v-loading="userDataLoading"
    >
      <el-table-column prop="id" label="ID" width="75"> </el-table-column>
      <el-table-column prop="name" label="店铺名称" width="width">
      </el-table-column>
      <el-table-column prop="contact" label="联系人" width="width">
      </el-table-column>
      <el-table-column prop="tel" label="联系方式" width="120">
      </el-table-column>
      <el-table-column prop="address" label="地址" width="100">
        <template slot-scope="scope">
          <el-tooltip
            effect="dark"
            :content="scope.row.address"
            placement="bottom"
          >
            <div style="text-overflow: ellipsis;white-space: nowrap">
              <span>{{ scope.row.address }}</span>
            </div>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="serviceTime" label="营业时间" width="120">
      </el-table-column>
      <el-table-column label="菜单" width="100">
        <template slot-scope="scope">
          <el-image
            style="width: 36px; height: 36px"
            :src="scope.row.menu1"
            fit="fit"
          ></el-image>
          <el-image
            style="width: 36px; height: 36px"
            :src="scope.row.menu2"
            fit="fit"
          ></el-image>
        </template>
      </el-table-column>
      <el-table-column label="营业执照" width="100">
        <template slot-scope="scope">
          <el-image
            style="width: 36px; height: 36px"
            :src="scope.row.voucher1"
            fit="fit"
          ></el-image>
          <el-image
            style="width: 36px; height: 36px"
            :src="scope.row.voucher2"
            fit="fit"
          ></el-image>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getAllStoreList } from "../../http/store";
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
    this.getAllStoreList();
  },
  mounted() {},

  methods: {
    getAllStoreList() {
      this.userDataLoading = true;
      getAllStoreList()
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
