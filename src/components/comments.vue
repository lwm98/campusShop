<template>
    <div class="mycomment">
      <el-row>
        <el-col :span="24" class="breadcrumb">
          <ol>
            <li><span class="title">评论</span></li>
            <li><span class="desc">查看评论</span></li>
          </ol>
        </el-col>
      </el-row>
      <div id="details" class="box">
        <div id="comments">
          <div class="commentDetails">
            <el-row>
              <el-col :span="8">
                <div class="commentUser">
                  <div class="headImg">                  <div class="flag"></div>
                    <el-image :src="userInfo.userHead"></el-image></div>
                </div>
                <h5 style="font-weight: 400;font-size: 20px;margin: 0;margin-top: 16px;color:#2d64b3;">{{userInfo.userName}}
                  ( {{userInfo.userId}} )
                  <i v-if="userInfo.sex=='男'" class="el-icon-male" style="color:blue"></i>
                  <i v-if="userInfo.sex=='女'" class="el-icon-female" style="color:deeppink"></i>
                </h5>
              </el-col>
              <el-col :span="16" style="padding: 0px 15px; padding-bottom: 15px;">
                <h4> {{newsInfo.title}}</h4>
                <h5>{{newsInfo.date}}</h5>
                <el-divider></el-divider>
                <div class="newsDetail">
                  <p>{{newsInfo.desc}}</p>
                </div>
                <div class="btnGroup">
                  <el-button-group>
                    <el-button icon="el-icon-thumb" type="success" @click="toGood">点赞</el-button>
                    <el-button icon="el-icon-tickets" plain @click="commentMethod">评论</el-button>
                    <el-button icon="el-icon-share" type="info" @click="toShare">分享</el-button>
                  </el-button-group>
                </div>
              </el-col>
            </el-row>
          </div>
          <el-dialog
            title="请输入评论"
            :visible.sync="commentDialog"
            width="50%"
            center>
            <span>需要注意的是内容是默认不居中的</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="centerDialogVisible = false">评 论</el-button>
              <el-button type="primary" @click="commentDialog = false">取 消</el-button>
            </span>
          </el-dialog>
          <h4> 评 论 {{comment.length}} 条</h4>
          <el-divider></el-divider>
          <el-row class="comment" style="margin-top:20px;"
                  v-for="(item,index) in comment" :key="index">
            <!-- 头像 -->
            <el-col :span="20" :offset="2" style="text-align: right;">
              <el-col :span="6" style="padding-right: 15px;">
                <p><img :src="item.image" alt="" class="img-fluid rounded-circle"
                        style="height:100px;"></p>
              </el-col>
              <el-col :span="18" style="text-align: left;padding-right: 50px;">
                <!-- 姓名，性别，账号 -->
                <h5 style="font-weight: 400;font-size: 20px;margin: 0;margin-top: 16px;color:#2d64b3;">{{item.real_name}}
                  ( {{item.name}} )
                  <i v-if="item.sex=='男'" class="el-icon-male" style="color:blue"></i>
                  <i v-if="item.sex=='女'" class="el-icon-female" style="color:deeppink"></i>
                  </h5>
                <!-- 回复时间 -->
                <p class="posted"><i class="el-icon-alarm-clock"></i> {{item.create_time}}</p>
                <!-- 评价内容 -->
                <p>{{item.content}}。</p>
                <!-- ------------------- -->
                <el-collapse v-model="activeNames">
                  <el-collapse-item :title="'回复 '+item.commentExts.length+'条 点击查看'" :name="item.id" style="color: blue">
                    <div v-for="(it,ix) in item.commentExts" :key="ix" style="display:flex;align-items: center;margin-top: 10px">
                      <el-avatar size="large" :src="it.image"></el-avatar>
                      <span style="margin-left:10px;width:70%;"> <i style="color:#2d64b3;">{{it.real_name}}</i> : {{it.content}}</span>
                      <span style="color:grey">{{it.create_time}}</span>
                    </div>
                  </el-collapse-item>
                </el-collapse>
                <!-- ----------------------- -->
                <div>
                  <el-input  size="small"  placeholder="请输入回复内容" v-model="content"
                             style="width:200px;margin-top:10px;">
                  </el-input>
                  <el-button icon="el-icon-edit" style="padding: 5px;height: 20px;line-height: 20px" type="warning">回复</el-button>
                </div>
              </el-col>
            </el-col>
          </el-row>
          <!-- /.comment-->
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "comments",
      data(){
          return{
            commentDialog:false,
            content:'', //回复
            activeNames:[''],//
            newsId:'',
            userInfo:{
              userId:1,
              userName:'lwm',
              sex:'男',
              userHead:'http://pics.sc.chinaz.com/files/pic/pic9/201903/bpic10784.jpg',
            },
            newsInfo:{
              newsId:1,
              img: '/static/img/new/commentImg.jpg',
              title: '实名推荐这个薯条 十分好吃！！不吃血亏！！！',
              desc:'你们吃过吗 今天那个薯条特别特别好吃！强烈推荐啊啊啊',
              userId: '电音之王克里斯吴',
              watch: '7000',
              comments: '788',
              date: '2019/12/20 17:11'
            },
            comment:[{
              id: 4,
              name: "k",
              real_name: "锴哥",
              sex: "男",
              image:'http://pics.sc.chinaz.com/files/pic/pic9/201903/bpic10784.jpg',
              create_time:'2019-11-20 00:28:59',
              content:'我是你儿子',
              commentExts:[{
                content: "我是你儿子",
                create_time: "2019-11-20 00:28:59",
                image: "http://pics.sc.chinaz.com/files/pic/pic9/201903/bpic10784.jpg",
                real_name: "狗杰松",
                reply_id: 13,
                reply_image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576221579762&di=00ed9cc3bbb29c4c7693c8d0be8ad3ae&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201402%2F07%2F20140207132418_RztHk.thumb.1600_0.jpeg",
                reply_real_name: "锴哥"
              }]
            }],
          }
    },
      created() {
          this.newsId = this.$route.params.id;

      },
      methods:{
          toGood(){
            this.$notify({
              title: '点赞成功',
              message: '这是一条成功的提示消息',
              type: 'success'
            });
          },
        commentMethod(){
            this.commentDialog = true;
        },
        toShare(){
          this.$notify({
            title: '分享成功',
            message: '这是一条成功的提示消息',
            type: 'success'
          });
        }
      }
    }
</script>

<style scoped lang="scss">

  .mycomment{
    background-color: #f9f9f9;
    .breadcrumb{
      ol{
        margin: 0;
        padding: 0;
        list-style: none;
      }
      .title {
        font-weight: 400;
        font-size: 36px;
        color: white;
      }

      .desc {
        font-size: 15px;
        color: #c7c4c0;
      }
      background: url('/static/img/multiple_blog-bg.jpg');
      padding: 15px;
    }
  }
  .commentDetails{
    .flag{
      z-index: 555555;
      position: absolute;
      width: 36px;
      height: 36px;
      top: 2px;
      right: 82px;
      background: url(//tb2.bdstatic.com/tb/static-user/widget/pb_author/images/louzhu_b77db49.png) no-repeat -44px 0;
      border: 0 solid red;
    }
    .commentUser{
      padding: 10px 50px;
      .headImg{
        position: relative;
        .el-image{
          padding: 15px;
          border: 2px solid black;
          width: 200px;
          height: 200px;
        }
      }
    }
    h5{
      margin: 0;
      font-size: 12px;
      font-weight: 300;
    }
    .btnGroup{
      width: 100%;
    }
    .newsDetail{
      min-height: 160px;
    }
  }
  /**
  评论css
   */
  .box {
    #comments{
      h4{
        margin: 5px 0;
        font-weight: 400;
        font-size: 26px;
        margin-top: 10px;
      }
    }
    .el-collapse-item__header{
      min-height: 0!important;
    }
    .rounded-circle{
      border-radius: 50% ;
      width: 100px;
      height: 100px;
    }
    /*background: #fff;*/
    margin: 0 0 30px;
    border: solid 1px #e6e6e6;
    padding: 20px;
    -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  }
  .box .box-header {
    clear: both;
    background: #f7f7f7;
    margin: -20px -20px 20px;
    padding: 20px;
    border-bottom: solid 1px #eee;
  }
  .box .box-footer {
    clear: both;
    background: #f7f7f7;
    margin: 30px -20px -20px;
    padding: 20px;
    border-top: solid 1px #eee;
  }
  @media (max-width: 767.98px) {
    .box .box-footer .btn {
      margin-bottom: 20px;
    }
  }
  .box.slideshow {
    padding: 20px 0 0 0;
    text-align: center;
  }
  .box.slideshow h3 {
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 700;
  }
</style>
