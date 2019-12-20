<template>
  <div id="content">
    <div class="headline text-center title">
      <el-row >
        <el-col :span="12" :offset="6">
          <h2 class="section-title">请选择商区</h2>
          <p class="section-sub-title">
            本学校有三大商区 分为雅苑、博苑（含东门）、南苑（爱时尚区域）
          </p> <!-- /.section-sub-title -->
        </el-col>
      </el-row>
    </div>
    <div class="portfolio-item-list choose">
      <el-row :gutter="20">
        <el-col :span="8" v-for="(item,index) in areaList" :key="index">
          <router-link :to="item.index">
          <div class="portfolio-item">
            <div class="item-image" id="item-image">
                <div class="mask animated fadeInRight">
                  <div class="mySearch">
                    <i class="el-icon-zoom-in animated bounce"></i>
                  </div>
                </div>
              <a href="#">
                <img src="/static/img/portfolio1.jpg" class="img-responsive center-block" alt="portfolio1">
                <div style="display: none; left: 0px; top: 100%; transition: all 300ms ease 0s;"><span><i class="fa fa-plus"></i></span></div>
              </a>
            </div>

            <div class="item-description">
              <el-row>
                <el-col :span="12">
                   <span class="item-name">
                      {{item.name}}
                  </span>
                  <span class="decoration">
                      {{item.hot}}
                  </span>
                </el-col>
                <el-col :span="12">
                  <span class="like">
                      <i class="el-icon-thumb"></i>
                      {{item.clickTime}}
                  </span>
                </el-col>
              </el-row>
            </div> <!-- end of /.item-description -->
          </div> <!-- end of /.portfolio-item -->
          </router-link>
        </el-col>
      </el-row>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
  export default {
    name: "content",
    data(){
      return{
        areaList:[
          {
            index:'yaYuan',
            name:'雅苑',
            hot:'雅滋味，四饭',
            clickTime: 666
          },
          {
            index:'boYuan',
            name:'博苑',
            hot:'一饭二楼，东门二楼，报刊亭，博苑超市',
            clickTime: 999

          },
          {
            index:'nanYuan',
            name:'南苑',
            hot:'爱时尚，学生超市，胃里果',
            clickTime: 857
          }
        ],
      }
    },
    mounted() {
      for (let i in document.getElementsByClassName('item-image')) {
        document.getElementsByClassName('item-image')[i].addEventListener('mousemove',function () {
          document.getElementsByClassName('mask')[i].style.display = 'flex';
        });
        document.getElementsByClassName('item-image')[i].addEventListener('mouseout',function () {
          document.getElementsByClassName('mask')[i].style.display = 'none';
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .mask{
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    display: none;
    align-items: center;
    .mySearch{
      .bounce{
        animation-delay:0.8s;
        -webkit-animation-delay:0.8s; /* Safari 和 Chrome */
      }
      margin: 0 auto;
      font-size: 3em;
      color: white;
      i{
        /*transition: 1s all ease-in 3s;*/
      }
    }
  }
    span{
    display: block;
  }
  #content{
    height: 100%;
    .title{
      min-height: 20%;
    }
    .choose{
      min-height: 70%;
      padding: 0 15px;
    }
    .portfolio-item{
      padding: 15px 15px;
      overflow: hidden;
      .item-image{
        position: relative;
      }
    }
    .portfolio-item:hover {
      border-radius: 5px;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      transition: 1s all ease;
    }
      .item-description{
      padding: 15px 0px;
      .item-name{
        text-align: left;
        margin-bottom: 2px;
        font-size: 16px;
        color: #474747;
      }
      .like{
        color: #969595;
        text-align: right;
      }
        .decoration{
          color: #969595;
          text-align: left;
          font-size: 12px;
        }
    }
  }
  .section-title {
    margin-top: 30px;
    margin-bottom: 5px;
    text-transform: uppercase;
  }
  .section-sub-title {
    color: #969595;
    margin-bottom: 0px;
    text-transform: capitalize;
    word-spacing: 1px;
  }
</style>
