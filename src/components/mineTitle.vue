<template>
  <div class="security-right-title">
    <span class="security-right-title-icon"></span>
    <span class="security-right-title-text">{{ routerName }}</span>
  </div>
</template>

<script>
export default {
  name: "mineTitle",
  data() {
    return {
      routerName: ""
    };
  },
  created() {
    this.routerName = this.$route.name;
  }
};
</script>

<style scoped lang="scss">
.security-right-title {
  height: 50px;
  padding-left: 30px;
  border-bottom: 1px solid #ddd;
  .security-right-title-icon {
    float: left;
    width: 4px;
    height: 16px;
    margin-top: 18px;
    background-color: #00a1d6;
    border-radius: 4px;
  }
  .security-right-title-text {
    float: left;
    margin: 15px 0 0 5px;
    color: #00a1d6;
    font-size: 14px;
    cursor: default;
  }
}
</style>
