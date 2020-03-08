<template>
  <div id="content">
    <!--    <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>-->
    <div class="headline text-center title">
      <el-row>
        <el-col :span="12" :offset="6">
          <h2 class="section-title">请选择商区</h2>
          <p class="section-sub-title">
            本学校共有如下几个商区
          </p>
          <!-- /.section-sub-title -->
        </el-col>
      </el-row>
    </div>
    <div class="portfolio-item-list choose">
      <el-row :gutter="0">
        <el-col
          :xs="24"
          :sm="24"
          :md="12"
          :lg="8"
          v-for="(item, index) in areaList"
          :key="index"
          @click.native="toTotal(++index)"
        >
          <div style="width: 100%;margin:0 auto;max-width:37rem">
            <router-link :to="item.index">
              <div class="portfolio-item">
                <div class="item-image" id="item-image">
                  <div class="mask animated fadeInRight">
                    <div class="mySearch">
                      <i class="el-icon-zoom-in animated bounce"></i>
                    </div>
                  </div>
                  <a href="#">
                    <img
                      :src="item.img"
                      class="img-responsive center-block"
                      alt="portfolio1"
                      style="width:100%;height:26.1rem;"
                    />
                    <div
                      style="display: none; left: 0; top: 100%; transition: all 300ms ease 0s;"
                    >
                      <span><i class="fa fa-plus"></i></span>
                    </div>
                  </a>
                </div>

                <div class="item-description">
                  <el-row>
                    <el-col :span="12">
                      <span class="item-name">
                        {{ item.name }}
                      </span>
                      <span class="decoration">
                        {{ item.describe }}
                      </span>
                    </el-col>
                    <el-col :span="12">
                      <span class="like">
                        <i class="el-icon-thumb"></i>
                        {{ item.clicks }}
                      </span>
                    </el-col>
                  </el-row>
                </div>
                <!-- end of /.item-description -->
              </div>
              <!-- end of /.portfolio-item -->
            </router-link>
          </div>
        </el-col>
      </el-row>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  name: "content",
  data() {
    return {
      areaList: []
    };
  },
  created() {
    // this.$api('','GET',{
    // })
    this.initArea();
  },
  mounted() {},
  methods: {
    initArea() {
      this.$api("/api/getAreaInfo", "GET", {}).then(res => {
        console.log(res);
        this.areaList = res.data;
        console.log(this.areaList);
      });
    },
    toTotal(i) {
      console.log(i);
      this.$api("/api/clicksAddInfo", "post", {
        id: i
      }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style scoped lang="scss">
/*.-webkit-scrollbar{*/
/*  width: 10px;     !*高宽分别对应横竖滚动条的尺寸*!*/
/*  height: 1px;*/
/*}*/
/*.-webkit-scrollbar-thumb {*/
/*  border-radius: 10px;*/
/*  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);*/
/*  background: #535353;*/
/*}*/
/*.-webkit-scrollbar-track {*/
/*  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);*/
/*  border-radius: 10px;*/
/*  background: #EDEDED;*/
/*}*/

/**
  这里是动画
 */
.portfolio-item:hover .mask {
  display: flex;
  align-items: center;
  justify-content: center;
}
.mask {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  align-items: center;
  .mySearch {
    .bounce {
      animation-delay: 0.8s;
      -webkit-animation-delay: 0.8s; /* Safari 和 Chrome */
    }
    /*margin: auto auto;*/
    font-size: 3em;
    color: white;
    i {
      /*transition: 1s all ease-in 3s;*/
    }
  }
}
span {
  display: block;
}
#content {
  height: 100%;
  width: 100%;
  .title {
    min-height: 20%;
  }
  .choose {
    min-height: 70%;
  }
  .portfolio-item {
    box-sizing: border-box;
    width: 100%;
    padding: 1.5rem;
    overflow: hidden;
    .item-image {
      position: relative;
    }
  }
  .portfolio-item:hover {
    border-radius: 0.5rem;
    box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.1);
    transition: 1s all ease;
  }
  .item-description {
    padding: 1.5rem 0;
    .item-name {
      text-align: left;
      margin-bottom: 0.2rem;
      font-size: 1.6rem;
      color: #474747;
    }
    .like {
      color: #969595;
      text-align: right;
    }
    .decoration {
      color: #969595;
      text-align: left;
      font-size: 1.2rem;
    }
  }
}
.section-title {
  font-size: 3rem;
  margin-top: 3rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  font-weight: 400;
}
.section-sub-title {
  color: #969595;
  margin-bottom: 0;
  text-transform: capitalize;
  word-spacing: 0.1rem;
}
/*.page-component__scroll .el-scrollbar__wrap{*/
/*  overflow-x: hidden;*/
/*}*/
</style>
