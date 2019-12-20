<template>
    <div class="mycomment">
      <div class="">

      </div>
      <div id="details" class="box">
        <div id="comments">
          <div class="commentDetails">
            <el-row>
              <el-col :span="8">
aa
              </el-col>
              <el-col :span="16">
                <h4> {{newsInfo.title}}</h4>
                <el-divider></el-divider>
                <div class="newsDetail">
                  <p>{{newsInfo.desc}}</p>
                </div>
                <div class="btnGroup">
                  <el-button>aa</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
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
                <el-input  size="small"  placeholder="请输入回复内容" v-model="content"
                           style="width:200px;margin-top:10px;">
                </el-input><a href="javascript:;" @click="SetGoodComment(item)"><i class="el-icon-top-left"></i> 回复</a>
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
            content:'', //回复
            activeNames:[''],//
            newsId:'',
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
      }
    }
</script>

<style scoped lang="scss">
  .mycomment{
    background-color: #f9f9f9;
  }
  .commentDetails{
    .btnGroup{
      width: 100%;
    }
    background-color: white;
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
