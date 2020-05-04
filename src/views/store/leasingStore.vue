<!-- 租赁 -->
<template>
  <div class="leasingStore">
    <el-tabs v-model="activeName">
      <el-tab-pane label="可租赁" name="first">
        <div>
          <ul class="rank-list">
            <li
              class="rank-item wow fadeInUp animated"
              v-for="(item, index) in storeList"
              :key="index"
              @click="toleasingStore()"
            >
              <div class="num">{{ index + 1 }}</div>
              <div class="content">
                <div class="img">
                  <router-link :to="'/comment/' + item.id">
                    <div class="lazy-img cover">
                      <img alt="图片" :src="item.showImg" />
                    </div>
                  </router-link>
                  <div class="watch-later-trigger w-later"></div>
                </div>
                <div class="info">
                  <a :href="item.href" target="_blank" class="title">{{
                    item.address
                  }}</a>
                  <!---->
                  <div class="detail">
                    <span class="data-box">
                      <i class="el-icon-edit-outline"></i>
                      {{ item.comments }}
                    </span>
                    <span class="data-box">
                      <i class="el-icon-view"></i>
                      {{ item.watch }}
                    </span>
                    <a target="_blank" href="//space.bilibili.com/32172331">
                      <span class="data-box">
                        <i class="el-icon-s-custom"></i>
                        {{ item.contact }}
                      </span>
                    </a>
                  </div>
                  <div class="pts">
                    <div>{{ item.serviceTime }}</div>
                    发表时间
                  </div>
                </div>
                <!---->
              </div>
            </li>
          </ul>
        </div>
      </el-tab-pane>
      <el-tab-pane label="已租赁" name="second">
        <ul class="rank-list">
          <li
            class="rank-item wow fadeInUp animated"
            v-for="(item, index) in storeList1"
            :key="index"
            @click="test1"
          >
            <div class="num">{{ index + 1 }}</div>
            <div class="content">
              <div class="img">
                <router-link :to="'/comment/' + item.id">
                  <div class="lazy-img cover">
                    <img alt="图片" :src="item.showImg" />
                  </div>
                </router-link>
                <div class="watch-later-trigger w-later"></div>
              </div>
              <div class="info">
                <a :href="item.href" target="_blank" class="title">{{
                  item.address
                }}</a>
                <!---->
                <div class="detail">
                  <span class="data-box">
                    <i class="el-icon-edit-outline"></i>
                    {{ item.comments }}
                  </span>
                  <span class="data-box">
                    <i class="el-icon-view"></i>
                    {{ item.watch }}
                  </span>
                  <a target="_blank" href="//space.bilibili.com/32172331">
                    <span class="data-box">
                      <i class="el-icon-s-custom"></i>
                      {{ item.contact }}
                    </span>
                  </a>
                </div>
                <div class="pts">
                  <div>{{ item.serviceTime }}</div>
                  发表时间
                </div>
              </div>
              <!---->
            </div>
          </li>
        </ul>
      </el-tab-pane>
    </el-tabs>
    <el-dialog
      title="请填写您的联系方式"
      :visible.sync="dialogVisible"
      width="50"
    >
      <el-form :model="form">
        <el-form-item label="联系方式：" label-width="120">
          <el-input v-model="form.contact"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="(dialogVisible = false), test()"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getAllwzlStore, getAllzlStore } from "../../http/store";
export default {
  data() {
    return {
      activeName: "first",
      dialogVisible: false,
      storeList: [], // 未租赁
      storeList1: [], // 已租赁
      form: {
        contact: ""
      }
    };
  },

  components: {},

  computed: {},

  watch: {
    activeName: function(val) {
      if (val == "first") {
        this.getAllwzlStore();
      } else {
        this.getAllzlStore();
      }
    }
  },
  mounted() {
    this.getAllwzlStore();
  },

  methods: {
    test1(){
      this.$message({
        type: "error",
        message: "该商铺已租赁!"
      });
    },
    test() {
      this.$message({
        type: "success",
        message: "稍后会有专人与您联系!"
      });
    },
    toleasingStore() {
      this.$confirm("您有意向租赁此商铺吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.dialogVisible = true;
          // this.$message({
          //   type: "success",
          //   message: "删除成功!"
          // });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
    },
    getAllwzlStore() {
      getAllwzlStore()
        .then(res => {
          console.log(res);
          this.storeList = res.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    getAllzlStore() {
      getAllzlStore()
        .then(res => {
          console.log(res);
          this.storeList1 = res.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.leasingStore {
  margin: 0 auto;
  width: 60%;
  height: 100vh;
  padding: 15px;
}

.rank-list {
  padding-left: 0;
  .rank-item:hover {
    box-shadow: 0 2px 5px #ccc;
    transition: 2s all ease;
  }
  .rank-item {
    cursor: pointer;
    transition: 0.2s;
    overflow: hidden;
    border-bottom: 1px solid #e5e9ef;
    position: relative;
    min-height: 110px;
    .num {
      width: 70px;
      height: 70px;
      position: absolute;
      top: 20px;
      left: 0;
      line-height: 70px;
      text-align: center;
      font-size: 36px;
      font-weight: 700;
      color: #b8c0cc;
      font-family: simhei;
    }
    .content {
      padding: 20px 0 0 70px;
      overflow: hidden;
      img {
        border-radius: 4px;
        width: 114px;
        height: 70px;
      }
      .cover {
        display: inline-block;
      }
      .info {
        padding-bottom: 20px;
        margin-left: 85px;
        height: 70px;
        position: relative;
        .title {
          height: 20px;
          line-height: 20px;
          font-size: 14px;
          font-weight: 400;
          color: #333;
        }
        .pts {
          height: 20px;
          color: #b8c0cc;
          line-height: 20px;
          position: absolute;
          bottom: 40px;
          right: 20px;
          text-align: center;
          div {
            color: #00a1d6;
            font-weight: 700;
            font-size: 16px;
            margin-bottom: 12px;
          }
        }
        .detail {
          margin-top: 20px;
          color: #99a2aa;
          .b-icon {
            width: 12px;
            height: 12px;
            margin-right: 5px;
            display: inline-block;
            vertical-align: text-top;
          }
          .b-icon.play {
            background-position: -282px -90px;
          }
          .data-box {
            width: 80px;
            margin-right: 20px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
      }
      .img {
        position: relative;
        float: left;
      }
    }
  }
}
</style>
