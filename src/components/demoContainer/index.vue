<template>
  <div class="demo-container">
      <div class="title">{{title}}</div>
      <div class="subtitle" v-if="subtitle">{{subtitle}}</div>
      <div class="content"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name:"DemoContainer",
  props: {
    title: { 
      type: String,
      required:true
    },
    subtitle: { 
      type:String
    }
  }, 
}
</script>
<style lang="scss" scoped>
  .demo-container{
    margin-bottom: 40px;
    .title{
      font-size: 18px;
      font-weight: 700;
      color: #515a6e;
      margin-bottom: 10px;
    }
    .subtitle{
      font-size: 14px;
      color: #5e6d82;
      margin-bottom: 12px;
    }
    .content{
      position: relative;
      background-color: #00032E;
      overflow: hidden;
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 150px;
      padding: 30px;
      box-sizing: border-box;
    }
  }
</style>