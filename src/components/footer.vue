<template>
  <el-footer style="height:6rem" class="hidden-md-and-down">
      <div class="mycenter">
        <div class="headerBrand">
          <ul>
            <li class="hidden-md-and-down">©LWM-GK-2019</li>
            <li>广东科技学院</li>
            <li
              style="color: #333;font-size: 1.8rem"
              class="hidden-md-and-down"
            >
              i have a gream
            </li>
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
</template>

<script>
export default {
  name: "footer"
};
</script>

<style scoped lang="scss">
.el-footer {
  position: fixed;
  bottom: 0;
  background-color: #2d2d2d;
  color: #6b6b6b;
  min-height: 8%;
  width: 100%;
  .el-row {
  }
  .mycenter {
    margin: 0 auto;
    padding: 0 1.5rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .headerBrand {
      display: flex;
      align-items: center;
      font-size: 1.2rem;
      ul {
        line-height: 100%;
        margin: 0;
        display: flex;
        list-style: none;
        align-items: center;
        li {
          padding: 0 1.5rem;
        }
      }
    }
  }
}
</style>
