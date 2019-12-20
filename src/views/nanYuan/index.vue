<template>
    <div id="content">
      <header class="page-head">
        <div class="header-wrapper">
          <div class="container">
            <el-row>
              <el-col :span="24">
                <ol class="breadcrumb">
                  <li><span class="title">南苑</span></li>
                  <li><span class="desc">这里是南苑</span></li>
                </ol> <!-- end of /.breadcrumb -->
              </el-col>
            </el-row>
          </div> <!-- /.container -->
        </div> <!-- /.header-wrapper -->
      </header>
      <div class="middle">
        <div class="left">
          <h4>选择这里</h4>
          <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </div>
        <div class="right">
          <el-carousel :interval="4000" type="card" height="300px">
            <el-carousel-item v-for="(item,index) in shopInfo.img" :key="index">
              <el-image
              :src="item"
              style="width: 100%;height: 100%">
              </el-image>
            </el-carousel-item>
          </el-carousel>
          <div>
            <h3 class="text-capitalize">{{shopInfo.name}}</h3>
            <span class="date">{{shopInfo.date}}</span>
            <span>{{shopInfo.comment}} comments</span>
          </div>
          <div class="desc">
            <p>{{shopInfo.desc}}</p>
          </div>
          <div class="info">
            <ul>
              <li>联系人：{{shopInfo.contact}}</li>
              <li>联系方式：{{shopInfo.tel}}</li>
              <li>地址：{{shopInfo.address}}</li>
            </ul>
          </div>
        </div>
      </div>
<!--      <my-footer></my-footer>-->
    </div>
</template>

<script>
    export default {
        name: "index.vue",
      data(){
          return{
            shopInfo:{
              img:['/static/img/blog-item1.jpg','/static/img/blog-item1.jpg','/static/img/blog-item1.jpg'],
              name:'Q宝宝',
              date:'MAY 24,2015',
              comment:99,
              desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and ...',
              contact:'陈老师',
              tel:'13192563375',
              address:'南苑6栋楼下爱时尚内'
            },
            data: [
              {
              label: '一级 1',
              children: [{
                label: '二级 1-1',
                children: [{
                  label: '三级 1-1-1'
                }]
              }]
            },{
              label: '一级 2',
              children: [{
                label: '二级 2-1',
                children: [{
                  label: '三级 2-1-1'
                }]
              }, {
                label: '二级 2-2',
                children: [{
                  label: '三级 2-2-1'
                }]
              }]
            }, {
              label: '一级 3',
              children: [{
                label: '二级 3-1',
                children: [{
                  label: '三级 3-1-1'
                }]
              }, {
                label: '二级 3-2',
                children: [{
                  label: '三级 3-2-1'
                }]
              }]
            }],
            defaultProps: {
              children: 'children',
              label: 'label'
            }
          }
      },
      methods:{
        handleNodeClick(){
          console.log("a")
        }
      }
    }
</script>

<style scoped lang="scss">
  ul{
    list-style: none;
    padding-left: 0;
  }
  .el-tree-node{
    height: 50px;
  }
  .text-capitalize{
    text-transform: capitalize;
    font-size: 34.8px;
    color: #333;
  }
  #content{
    .middle{
      /*padding: 15px;*/
      height: 100%;
      width: 100%;
      display: flex;
      .right{
        padding: 15px;
        width: 80%;
        color: #333;
        .info{
          text-align: left;
          ul{
            li{
              line-height: 1.62em;
              font-weight: 300;
              font-size: 24.8px;
            }
          }
        }
        .desc{
          p{
            text-align: justify;
            text-indent: 2em;
            color: #969595;
            line-height: 1.62em;
            margin-bottom: 1.3em
          }
        }
        h3{
          margin-top: 0;
          margin-bottom: 5px;
        }
        span{
          color: #969595;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
        }
        .text-capitalize{
          font-weight: 300;
          font-size: 44.8px;
        }
      }
      .left{
        width: 20%;
        padding-left: 25px;
        .el-tree{
          background-color: #f9f9f9;
          border: 1px solid transparent;
          color: #969595;
          cursor: pointer;
          font-size: 14px;
          padding: 12px;
        }
        h4{
          font-size: 1.333em;
          font-weight: 400;
          text-align: left;
          margin-bottom: 9px;
        }
      }
    }
  }
.page-head{
  background: url('/static/img/multiple_blog-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  .header-wrapper{
    background-color: rgba(0,0,0,0.45);
    position: relative;
    padding: 65px 0px;
  }
  .breadcrumb{
    .title{
        font-weight: 400;
        font-size: 36px;
        color: white;
    }
    .desc{
      font-size: 15px;
      color: #C7C4C0;
    }
  }
}
</style>
