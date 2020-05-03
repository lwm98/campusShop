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
      <el-table-column prop="userId" label="发表人" width="75"> </el-table-column>
      <el-table-column prop="store_id" label="所属商铺" width="120"> </el-table-column>
      <el-table-column prop="title" label="资讯标题" width="200">
        <template slot-scope="scope">
          <el-tooltip
            effect="dark"
            :content="scope.row.title"
            placement="bottom"
          >
            <div style="text-overflow: ellipsis;white-space: nowrap">
              <span>{{ scope.row.title }}</span>
            </div>
          </el-tooltip>
        </template>
      </el-table-column>
       <el-table-column prop="desc" label="资讯内容" width="200">
        <template slot-scope="scope">
          <el-tooltip
            effect="dark"
            :content="scope.row.desc"
            placement="bottom"
          >
            <div style="text-overflow: ellipsis;white-space: nowrap">
              <span>{{ scope.row.desc }}</span>
            </div>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="created_at" label="发表时间" width="200">
      </el-table-column>
      
    </el-table>
  </div>
</template>

<script>
import { getAllNewsList } from "../../http/news";
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
    this.getAllNewsList();
  },
  mounted() {},

  methods: {
    getAllNewsList() {
      this.userDataLoading = true;
      getAllNewsList()
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
