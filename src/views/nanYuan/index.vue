<template>
  <div id="content">
    <el-dialog title="公告" :visible.sync="noticeVisible" width="70%" center>
      <span>{{ shopInfo.notice }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="noticeVisible = false">取 消</el-button>
        <el-button type="primary" @click="noticeVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <header class="page-head">
      <div class="header-wrapper">
        <div class="container">
          <el-row>
            <el-col :span="24">
              <ol class="breadcrumb">
                <li><span class="title">南苑</span></li>
                <li><span class="desc">这里是南苑</span></li>
              </ol>
              <!-- end of /.breadcrumb -->
            </el-col>
          </el-row>
        </div>
        <!-- /.container -->
      </div>
      <!-- /.header-wrapper -->
    </header>
    <div class="middle">
      <div class="left">
        <h4><i class="el-icon-position"></i>选择这里</h4>
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      </div>
      <div class="right">
        <el-tabs v-model="activeName" @tab-click="handleClick" v-if="shopInfo != ''">
          <el-tab-pane label="店铺详情" name="first">
            <el-carousel :interval="4000" type="card" height="300px">
              <el-carousel-item v-for="(item,index) in shopInfo.img" :key="index">
                <el-image :src="item" style="width: 100%;height: 100%"></el-image>
              </el-carousel-item>
            </el-carousel>
            <div>
              <h3 class="text-capitalize">{{ shopInfo.name }}</h3>
              <span class="date">{{ shopInfo.date }}</span>
              <span>{{ shopInfo.comments }} comments</span>
            </div>
            <div class="desc">
              <p>{{ shopInfo.desc }}</p>
            </div>
            <div class="info">
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
              <el-image v-for="(item, index) in shopInfo.menu" :key="index" :src="item" style="width: 200px;height: 200px;" :preview-src-list="shopInfo.menu"></el-image>
            </div>
            <div class="voucher">
              <h3>营业执照</h3>
              <el-image v-for="(item, index) in shopInfo.voucher" :key="index" :src="item" style="width: 200px;height: 200px;" :preview-src-list="shopInfo.voucher"></el-image>
            </div>
          </el-tab-pane>
          <el-tab-pane label="最新活动" name="second">
            <el-collapse v-model="activeNames" @change="handleChange" style="background-color: #333;">
              <el-collapse-item v-for="(item, index) in activityInfo" :key="index" :title="item.title" :name="index"  style="background-color: #000;">
                <div>{{ item.details }}</div>
              </el-collapse-item>
            </el-collapse>
          </el-tab-pane>
          <el-tab-pane label="店铺资讯" name="third">
            <ul class="rank-list">
              <li class="rank-item" v-for="(item,index) in newsInfo" :key="index">
                <div class="num">{{index+1}}</div>
                <div class="content">
                  <div class="img">
                    <router-link :to="'/comment/'+item.newsId">
                      <div class="lazy-img cover">
                        <img
                          :alt="item.title"
                          :src="item.img"
                        />
                      </div>
                    </router-link>
                    <div class="watch-later-trigger w-later"></div>
                  </div>
                  <div class="info">
                    <a :href="item.href" target="_blank" class="title">{{item.title}}</a>
                    <!---->
                    <div class="detail">
                      <span class="data-box">
                        <i class="el-icon-edit-outline"></i>
                        {{item.comments}}
                      </span>
                      <span class="data-box">
                        <i class="el-icon-view"></i>
                        {{item.watch}}
                      </span>
                      <a target="_blank" href="//space.bilibili.com/32172331">
                        <span class="data-box">
                          <i class="el-icon-s-custom"></i>
                          {{item.userId}}
                        </span>
                      </a>
                    </div>
                    <div class="pts">
                      <div>{{item.date}}</div>
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
          <router-view></router-view>
      </div>
    </div>
    <!--      <my-footer></my-footer>-->
  </div>
</template>

<script>
  export default {
    name: 'index.vue',
    data() {
      return {
        activeNames: [''],
        activeName: 'first',
        noticeVisible: false,

        shopInfo: '',
        activityInfo: [
          {
            title: '[无门槛] 点击可得6元无门槛优惠券',
            watch: '567',
            endTime: '2020/12/31',
            details: '点击此处即可获得6元无门槛优惠券，可在美图app使用'
          },
          {
            title: '[新人优享] 新用户下单立减5元',
            watch: '567',
            endTime: '2020/12/31',
            details: '新用户立减5元（本优惠与新人首单红包不可同享）,首次使用美团支付最高再减3元(在线支付专享)'
          },
          {
            title: '[新人优享] 本店新用户立减1元',
            watch: '567',
            endTime: '2020/12/31',
            details: '本店新用户在线支付下单专享，立减1元'
          }
        ],
        newsInfo: [
          {
            newsId:'',
            img: '',
            title: '',
            desc:'',
            userId: '',
            watch: '',
            comments: '',
            date: ''
          },{
            newsId:2,
            img: '/static/img/new/commentImg1.jpg',
            title: '今天的鸡翅也非常不错！你们吃了吗',
            desc:'你们吃过吗 今天那个薯条特别特别好吃！强烈推荐啊啊啊',
            userId: '电音之王克里斯吴',
            watch: '7000',
            comments: '788',
            date: '2019/12/20 17:11'
          }
        ],

        data: [
          {
            label: '爱时尚',
            children: [
              {
                label: 'Q堡堡',
                value:'3001'
              },
              {
                label:'张亮麻辣烫'
              },
              {
                label:'正新鸡排'
              },{
                label:'书亦烧仙草'
              },{
                label:'牛杂'
              },{
                label:'益合堂'
              },{
                label:'关东煮'
              },{
                label:'主恩美食'
              }
            ]
          },
          {
            label: '学生超市',
            children: [
              {
                label: '二级 2-1',
                children: [
                  {
                    label: '三级 2-1-1'
                  }
                ]
              },
              {
                label: '美食每刻',
                children: [
                  {
                    label: '三级 2-2-1'
                  }
                ]
              }
            ]
          },
          {
            label: '杏林春',
            children: [
              {
                label: '二级 3-1',
                children: [
                  {
                    label: '三级 3-1-1'
                  }
                ]
              },
              {
                label: '二级 3-2',
                children: [
                  {
                    label: '三级 3-2-1'
                  }
                ]
              }
            ]
          },
          {
            label: '杏林春',
            children: [
              {
                label: '二级 3-1',
                children: [
                  {
                    label: '三级 3-1-1'
                  }
                ]
              },
              {
                label: '二级 3-2',
                children: [
                  {
                    label: '三级 3-2-1'
                  }
                ]
              }
            ]
          }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleChange() {
        console.log('a');
      },
      handleClick() {
        console.log('a');
      },
      handleNodeClick(data) {
        console.log(data);
        this.$api("/api/getAllStoreInfo","POST",{
          id:data.value
        }).then(res=>{
          console.log(res)
          if (res.code == 0){
            this.shopInfo = res.data[0];
            this.shopInfo.img = [];
            this.shopInfo.menu = [];
            this.shopInfo.voucher = [];
            for (let i = 1; i <= 5; i++) {
              if (res.data[0]['banner'+i]){
                this.shopInfo.img.push(res.data[0]['banner'+i]);
              }
              if (res.data[0]['menu'+i]){
                this.shopInfo.menu.push(res.data[0]['menu'+i]);
              }
              if (res.data[0]['voucher'+i]) {
                this.shopInfo.voucher.push(res.data[0]['voucher'+i]);
              }
            }
          }
        })

      }
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
    .middle {
      /*padding: 15px;*/
      height: 100%;
      width: 100%;
      display: flex;

      .right {
        padding: 15px;
        width: 80%;
        color: #333;
        .rank-list {
          .rank-item:hover {
            box-shadow: 0 2px 5px #ccc;
            transition: 2s all ease ;
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
              img{
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
    background: url('/static/img/multiple_blog-bg.jpg');
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
