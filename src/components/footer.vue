<template>
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
  .mycenter {
    margin: 0 auto;
    padding: 0 15px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .headerBrand {
      display: flex;
      align-items: center;
      font-size: 12px;
      ul {
        line-height: 100%;
        margin: 0;
        display: flex;
        list-style: none;
        li {
          padding: 0 15px;
        }
      }
    }
  }
}
</style>
