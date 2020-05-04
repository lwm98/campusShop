<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data: {
    userConData: {
      img: "/static/img/new/menu1.jpg"
    }
  }
};
</script>

<style>
#app {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", sans-serif;
  height: 100%;
  width: 100%;
  font-weight: 400;
}
ul,
ol {
  list-style: none;
}
a {
  text-decoration: none;
}
i {
  font-style: normal;
}
.el-table {
  border: 1px solid #e8e8e8;
  border-radius: 3px;
}
.el-table td,
.el-table th {
  padding: 0px;
}
.el-table td{
  padding: 10px 0;
}
.el-table thead tr {
  height: 46px;
  line-height: 46px;
}
.el-form-item__content {
  text-align: left;
}
.el-dialog__body,
.el-dialog--center .el-dialog__body {
  padding: 2rem 7rem;
}
.el-collapse-item__header {
  color: #409eff;
  /*background-color: #f9f9f9 !important;*/
  /*min-height: 80px;*/
}
.el-collapse-item__wrap,
.el-collapse-item__header,
.el-collapse-item__content {
  /* background-color: #f9f9f9 !important; */
}
.el-tree-node__label {
  font-size: 2.1rem;
}
.el-tree-node__content {
  height: 3rem;
  line-height: 3rem;
}
.el-tree-node__expand-icon {
  font-size: 2.1rem;
}
.el-drawer {
  outline: 0;
}
.el-drawer__header > :first-child {
  outline: 0;
}
.el-dialog__footer {
  padding-top: 0;
  margin-top: -2rem;
}
</style>
