<template>
  <div id="content">
    <el-dialog title="公告" :visible.sync="noticeVisible" width="70%" center>
      <span>{{ shopInfo.notice }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="noticeVisible = false">取 消</el-button>
        <el-button type="primary" @click="noticeVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <header class="page-head">
      <div class="header-wrapper">
        <div class="container">
          <el-row>
            <el-col :span="24">
              <ol class="breadcrumb">
                <li>
                  <span class="title">{{ $route.params.name }}</span>
                </li>
                <li>
                  <span class="desc">这里是{{ $route.params.name }}</span>
                </li>
              </ol>
              <!-- end of /.breadcrumb -->
            </el-col>
          </el-row>
        </div>
        <!-- /.container -->
      </div>
      <!-- /.header-wrapper -->
    </header>
    <el-drawer
      title="从这里开始"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
      :modal="true"
      size="20%"
    >
      <el-tree
        :data="data"
        :props="defaultProps"
        @node-click="handleNodeClick"
      ></el-tree>
    </el-drawer>
    <div class="handle" @click="drawer = !drawer">
      <i :class="drawer ? 'el-icon-s-fold' : 'el-icon-s-unfold'"></i>
    </div>

    <div class="middle">
      <div class="right">
        <el-tabs
          v-model="activeName"
          @tab-click="handleClick"
          v-if="shopInfo != ''"
        >
          <el-tab-pane label="店铺详情" name="first">
            <el-carousel
              :interval="4000"
              type="card"
              height="300px"
              class="wow fadeInUp animated"
            >
              <el-carousel-item
                v-for="(item, index) in shopInfo.img"
                :key="index"
              >
                <el-image
                  :src="item"
                  style="width: 100%;height: 100%"
                ></el-image>
              </el-carousel-item>
            </el-carousel>
            <div>
              <h3 class="text-capitalize wow fadeInUp animated">
                {{ shopInfo.name }}
              </h3>
              <span class="date wow fadeInUp animated">{{
                shopInfo.date
              }}</span>
              <span class="wow fadeInUp animated"
                >{{ shopInfo.comments }} comments</span
              >
            </div>
            <div class="desc wow fadeInUp animated">
              <p>{{ shopInfo.desc }}</p>
            </div>
            <div class="info wow fadeInUp animated">
              <ul>
                <li>联系人：{{ shopInfo.contact }}</li>
                <li>联系方式：{{ shopInfo.tel }}</li>
                <li>地址：{{ shopInfo.address }}</li>
                <li>经营时间：{{ shopInfo.serviceTime }}</li>
              </ul>
            </div>
            <el-divider></el-divider>
            <div class="voucher">
              <h3>菜单</h3>
              <el-image
                v-for="(item, index) in shopInfo.menu"
                :key="index"
                :src="item"
                style="width: 200px;height: 200px;"
                :preview-src-list="shopInfo.menu"
              ></el-image>
            </div>
            <div class="voucher" data-wow-offset="10">
              <h3>营业执照</h3>
              <el-image
                v-for="(item, index) in shopInfo.voucher"
                :key="index"
                :src="item"
                style="width: 200px;height: 200px;"
                :preview-src-list="shopInfo.voucher"
              ></el-image>
            </div>
          </el-tab-pane>
          <el-tab-pane label="最新活动" name="second">
            <el-collapse
              v-model="activeNames"
              @change="handleChange"
              style="background-color: #333;"
            >
              <el-collapse-item
                v-for="(item, index) in activityInfo"
                :key="index"
                :title="item.title"
                :name="index"
                style="background-color: #000;"
              >
                <div>{{ item.details }}</div>
              </el-collapse-item>
            </el-collapse>
          </el-tab-pane>
          <el-tab-pane label="店铺资讯" name="third">
            <ul class="rank-list">
              <li
                class="rank-item wow fadeInUp animated"
                v-for="(item, index) in newsInfo"
                :key="index"
              >
                <div class="num">{{ index + 1 }}</div>
                <div class="content">
                  <div class="img">
                    <router-link :to="'/comment/' + item.id">
                      <div class="lazy-img cover">
                        <img :alt="item.title" :src="item.img" />
                      </div>
                    </router-link>
                    <div class="watch-later-trigger w-later"></div>
                  </div>
                  <div class="info">
                    <a :href="item.href" target="_blank" class="title">{{
                      item.title
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
                          {{ item.userId }}
                        </span>
                      </a>
                    </div>
                    <div class="pts">
                      <div>{{ item.created_at }}</div>
                      发表时间
                    </div>
                  </div>
                  <!---->
                </div>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="联系我们" name="fourth">联系我们</el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <!--      <my-footer></my-footer>-->
  </div>
</template>

<script>
import { WOW } from "../../../static/js/wow.min.js";
export default {
  name: "index.vue",
  data() {
    return {
      store_id: "",
      drawer: false,
      direction: "ltr",
      activeNames: [""],
      activeName: "first",
      noticeVisible: false,

      shopInfo: "",
      activityInfo: "",
      newsInfo: "",
      data: [],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    initStore(area_id) {
      this.$api("/api/getStoreByArea", "GET", {
        id: area_id
      }).then(res => {
        console.log(res);

        res.data.forEach(element => {
          console.log(element);
          let obj = {};
          obj.label = element.name;
          obj.value = element.id;
          this.data.push(obj);
        });
      });
    },
    getActsList(store_id) {
      this.$api("/api/getActsList", "GET", {
        store_id: store_id
      }).then(res => {
        this.activityInfo = res.data;
      });
    },
    getNewsList(store_id) {
      this.$api("/api/getNewsList", "GET", {
        store_id: store_id
      }).then(res => {
        this.newsInfo = res.data;
      });
    },
    handleClose() {
      this.drawer = false;
    },
    handleChange() {
      //活动内的列表
      // console.log("aa");
    },
    handleClick(e) {
      switch (e.index) {
        case "1":
          this.getActsList(this.store_id);
          break;
        case "2":
          this.getNewsList(this.store_id);
          break;
        case "3":
          break;
      }
    },
    handleNodeClick(data) {
      console.log(data);
      this.store_id = data.value;
      this.$api("/api/getStoreByid", "get", {
        id: data.value
      }).then(res => {
        console.log(res);
        if (res.code == 0) {
          this.shopInfo = res.data[0];
          this.shopInfo.img = [];
          this.shopInfo.menu = [];
          this.shopInfo.voucher = [];
          for (let i = 1; i <= 5; i++) {
            if (res.data[0]["banner" + i]) {
              this.shopInfo.img.push(res.data[0]["banner" + i]);
            }
            if (res.data[0]["menu" + i]) {
              this.shopInfo.menu.push(res.data[0]["menu" + i]);
            }
            if (res.data[0]["voucher" + i]) {
              this.shopInfo.voucher.push(res.data[0]["voucher" + i]);
            }
          }
        }
      });
    }
  },
  created() {
    /**
     * 这里开始初始化商区数据
     */
    this.data = [];
    this.shopInfo = '';
    this.initStore(this.$route.params.id);
    console.log("进来");
  },
  mounted() {
    setTimeout(() => {
      this.drawer = true;
    }, 800);
    let wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: true
    });
    wow.init();
  }
};
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
}
.el-dialog {
  transition: opacity 8s;

  .el-dialog__body {
    span {
      text-align: justify;
      text-indent: 2em !important;
      color: #969595;
      line-height: 1.62em;
      margin-bottom: 1.3em;
    }
  }
}

ul {
  list-style: none;
  padding-left: 0;
}

.el-tree-node {
  height: 50px;
}

.text-capitalize {
  text-transform: capitalize;
  font-size: 34.8px;
  color: #333;
}

#content {
  .handle {
    z-index: 2000;
    cursor: pointer;
    position: absolute;
    // right: 38px;
    top: 30%;
    margin-top: -19px;
    width: 38px;
    height: 38px;
    border: 1px solid white;
    color: white;
    background-color: rgba(31, 45, 61, 0.11);
    line-height: 38px;
    border-radius: 50%;
  }
  .middle {
    /*padding: 15px;*/
    height: 100%;
    width: 100%;
    display: flex;

    .right {
      width: 100%;
      padding: 15px;
      color: #333;
      .el-tabs {
        margin: 0 auto;
      }
      .rank-list {
        .rank-item:hover {
          box-shadow: 0 2px 5px #ccc;
          transition: 2s all ease;
        }
        .rank-item {
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
              margin-left: 150px;
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
      .voucher {
        .el-image {
          padding: 15px;
        }

        text-align: center;

        h3 {
          line-height: 1.62em;
          font-weight: 300;
          font-size: 24.8px;
        }
      }

      .info {
        text-align: left;

        ul {
          li {
            line-height: 1.62em;
            font-weight: 300;
            font-size: 24.8px;
          }
        }
      }

      .desc {
        p {
          text-align: justify;
          text-indent: 2em;
          color: #969595;
          line-height: 1.62em;
          margin-bottom: 1.3em;
        }
      }

      h3 {
        margin-top: 0;
        margin-bottom: 5px;
      }

      span {
        color: #969595;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
      }

      .text-capitalize {
        font-weight: 300;
        font-size: 44.8px;
      }
    }

    .left {
      width: 20%;
      padding-left: 25px;

      .el-tree {
        background-color: #f9f9f9;
        border: 1px solid transparent;
        color: #969595;
        cursor: pointer;
        font-size: 14px;
        padding: 12px;

        .el-tree-node__content {
          height: 60px;
        }

        .el-tree-node__label {
          font-size: 28px;
        }
      }

      h4 {
        font-size: 1.333em;
        font-weight: 400;
        text-align: left;
        margin-bottom: 9px;
      }
    }
  }
}

.page-head {
  background: url("/static/img/multiple_blog-bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .header-wrapper {
    background-color: rgba(0, 0, 0, 0.45);
    position: relative;
    padding: 65px 0px;
  }

  .breadcrumb {
    .title {
      font-weight: 400;
      font-size: 36px;
      color: white;
    }

    .desc {
      font-size: 15px;
      color: #c7c4c0;
    }
  }
}
</style>
