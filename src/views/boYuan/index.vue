<template>
    <div id="content">
      <header class="page-head">
        <div class="header-wrapper">
          <div class="container">
            <el-row>
              <el-col :span="24">
                <ol class="breadcrumb">
                  <li><span class="title">博苑</span></li>
                  <li><span class="desc">这里是博苑</span></li>
                </ol> <!-- end of /.breadcrumb -->
              </el-col>
            </el-row>
          </div> <!-- /.container -->
        </div> <!-- /.header-wrapper -->
      </header>

    <my-footer></my-footer>
    </div>
</template>

<script>
    export default {
        name: "index.vue"
    }
</script>

<style scoped lang="scss">
  #content{
    height: 100%;
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
