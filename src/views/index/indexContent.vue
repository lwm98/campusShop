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
        <el-col :span="8">
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
                      Oliver a Note
                  </span>
                  <span class="decoration">
                      Fashion
                  </span>
                </el-col>
                <el-col :span="12">
                  <span class="like">
                      <i class="el-icon-thumb"></i>
                      576
                  </span>
                </el-col>
              </el-row>
            </div> <!-- end of /.item-description -->
          </div> <!-- end of /.portfolio-item -->

        </el-col>
        <el-col :span="8">
          <div class="portfolio-item">
            <div class="item-image">
              <div class="mask animated fadeInRight">
                <div class="mySearch">
                  <i class="el-icon-zoom-in animated bounce"></i>
                </div>
              </div>
              <a href="#">
                <img src="/static/img/portfolio3.jpg" class="img-responsive center-block" alt="portfolio1">
                <div style="display: none; left: 0px; top: 100%; transition: all 300ms ease 0s;"><span><i class="fa fa-plus"></i></span></div>
              </a>
            </div>

            <div class="item-description">
              <el-row>
                <el-col :span="12">
                   <span class="item-name">
                      Oliver a Note
                  </span>
                  <span class="decoration">
                      Fashion
                  </span>
                </el-col>
                <el-col :span="12">
                  <span class="like">
                      <i class="el-icon-thumb"></i>
                      576
                  </span>
                </el-col>
              </el-row>
            </div> <!-- end of /.item-description -->
          </div> <!-- end of /.portfolio-item -->

        </el-col>
        <el-col :span="8">
          <div class="portfolio-item">
            <div class="item-image">
              <div class="mask animated fadeInRight">
                <div class="mySearch">
                  <i class="el-icon-zoom-in animated bounce"></i>
                </div>
              </div>
              <a href="#">
                <img src="/static/img/portfolio2.jpg" class="img-responsive center-block" alt="portfolio1">
                <div style="display: none; left: 0px; top: 100%; transition: all 300ms ease 0s;"><span><i class="fa fa-plus"></i></span></div>
              </a>
            </div>

            <div class="item-description">
              <el-row>
                <el-col :span="12">
                   <span class="item-name">
                      Oliver a Note
                  </span>
                  <span class="decoration">
                      Fashion
                  </span>
                </el-col>
                <el-col :span="12">
                  <span class="like">
                      <i class="el-icon-thumb"></i>
                      576
                  </span>
                </el-col>
              </el-row>
            </div> <!-- end of /.item-description -->
          </div> <!-- end of /.portfolio-item -->

        </el-col>
      </el-row>
    </div>
    <el-footer>
      <div class="mycenter">
        <div class="headerBrand">
          <ul>
            <li>©LWM-GK-2019</li>
            <li>广东科技学院</li>
            <li style="color: #333;font-size: 18px">i have a gream</li>
            <li>梁维明-毕业设计</li>
          </ul>
        </div>
        <div class="headerBrand">
          <ul>
            <li>联系我</li>
            <li>关于我</li>
            <li>点个赞吧</li>
          </ul>
        </div>
      </div>
    </el-footer>
  </div>
</template>

<script>
  export default {
    name: "content",
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
      padding: 15px 0;
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
        margin-bottom: 2px;
        font-size: 16px;
        color: #474747;
      }
      .like,.decoration{
        color: #969595;
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
  .el-footer{
    background-color: #2d2d2d;
    color: #6B6B6B;
    min-height: 10%;
    .mycenter{
      margin: 0 auto;
      padding: 0 15px;
      height: 100%;
      display: flex;
      justify-content: space-between;
      .headerBrand{
        display: flex;
        align-items: center;
        font-size: 12px;
        ul{
          line-height: 100%;
          margin: 0;
          display: flex;
          list-style: none;
          li{
            padding: 0 15px;
          }
        }
      }
    }
  }
</style>
