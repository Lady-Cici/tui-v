<template>
  <div id="app">
    <div class="index_table">
      <div class="sidebar">
        <div div class="header"><span>TUI DataV</span></div>
        <div class="sidebarin">
          <div class="level" v-for="(data, index) in linkData" :key="index">
            <router-link class="title" :to="data.to">{{data.name}}</router-link>
          </div>
        </div>
      </div>
      <div class="index_table_r">
        <div class="view-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      linkData:[
        {name: "首页",to: "/"},
        {name: "九宫格卡片容器",to: "/panel"},
        {name: "数字翻牌器",to: "/number"},
        {name: "轮播表",to: "/table"},
        {name: "日期时间",to: "/date"},       
        {name: "切换全屏按钮",to: "/screenfull"},        
      ]
    };
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
.index_table{
  height: 100%;
  position: relative;
}
.sidebar {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 220px;
  left: 0px;
  background: #001529;
  .header {
    position: relative;
    height: 50px;
    line-height: 50px;
    padding-left: 25px;
    color: #fff;
    font-size: 20px;
    box-sizing: border-box;
    background: #1890ff;
  }
  .sidebarin{
    height: calc(100% - 50px);
  }
  .level {
    position: relative;
    &:hover .title {
      opacity: 1;
    }
    .title {
      display: block;
      padding-left: 25px;
      line-height: 44px;
      height: 44px;
      box-sizing: border-box;
      text-decoration: none;
      cursor: pointer;
      position: relative;
      color: #fff;
      border-left: 4px solid transparent;
      transition: all 0.3s linear;
      opacity: 0.7;
      overflow: hidden;
      white-space: nowrap;
    }
    .router-link-exact-active{
      opacity: 1;
      background-color: #073a6a;
      border-left: 4px solid #1890ff;
    }
  }
}
.index_table_r {
  position: absolute;
  left: 220px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 1;
  padding: 20px;
  overflow-y: auto;
  .view-content{
    width:700px;
    position: relative;
  }
}
</style>
