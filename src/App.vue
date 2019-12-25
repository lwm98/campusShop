<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  height: 100%;
  font-weight: 400;
}
a{
  text-decoration: none;
}
i{
  font-style: normal;
}

.el-dialog__body,.el-dialog--center .el-dialog__body{
  padding: 20px 70px;
}
.el-collapse-item__header {
  color: #409EFF;
  /*background-color: #f9f9f9 !important;*/
  /*min-height: 80px;*/
}
.el-collapse-item__wrap,.el-collapse-item__header,.el-collapse-item__content{

  background-color: #f9f9f9 !important;
}
  /*.el-collapse-item__content{*/
  /*  background-color: #f9f9f9 !important;*/
  /*  !*min-height: 120px;*!*/
  /*}*/

  .el-tree-node__label{
    font-size: 21px;
  }
  .el-tree-node__content{
    height: 30px;
    line-height: 30px;
  }
  .el-tree-node__expand-icon{
   font-size: 21px;
  }
</style>
