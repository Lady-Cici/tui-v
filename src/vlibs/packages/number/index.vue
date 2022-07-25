<!--
  支持  整数滚动，小数滚动。负整数，负小数，
  以上这些，并带（千分位格式化滚动）
-->
<template>
  <span class="tuiv-running-number">
    <template v-if = "picture">
      <span class="pic-char">
        <span class="char" v-for ="(char, index) in  runNum" :key="index">{{char}}</span>
      </span>
    </template>
    <template v-else>{{runNum}}</template>
  </span>
</template>
<script>
export default {
  name: 'TuivNumber',
  props: {
    value: { 
      type: Number,
      default: 0,
    },
    thousand: { //是否开启千分位分隔符
      type: Boolean,
      default: false,
    },  
    toFixed:{ //小数位数
      type: Number,
      default: 0,
    },
    picture: { //是否图形化显示
      type: Boolean,
      default: false,
    },  
  },
  data() {
    return {
      totalTime: 1000, // 滚动需要的总时间 1S
      runNum: "0"
    }
  },
  created () {
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.runNum = "0";
        clearInterval(this.timer);
        if (val != 0){
          if(this.toFixed!=0){
            val = val.toFixed(this.toFixed);
          }
          var s = this.totalTime /30;
          var dotIndex = val.toString().indexOf(".");
          var e =0;
          var pernum = 1;
          if(dotIndex >= 0){
              //将小数传化为整数
              e = val.toString().length - dotIndex - 1;
              pernum =  Math.round(val*Math.pow(10, e)/s);
          }else{
              pernum = Math.round(val/s);
          }
          if (pernum==0){
            pernum=1;
          }
          var n = 0; 
          this.timer =setInterval(() => {
            n += pernum;
            let currN = n;
            if(dotIndex >= 0){
              //整数还原为小数
               currN = n/ Math.pow(10, e);
            }
            this.runNum = this.getFormatNum(currN);
            if (Math.abs(currN)>Math.abs(val)){
              clearInterval(this.timer);
              this.runNum =this.getFormatNum(val);
            }
          }, 30)
        }
      }
    }
  },
  methods: {
    getFormatNum(num){ //转换千分位格式
      if(this.thousand){
        return (+num || 0)
          .toString()
          .replace(/^-?\d+/g, (m) => m.replace(/(?=(?!\b)(\d{3})+$)/g, ","));
      }else{
        return num.toString();
      }
    },
  }
}
</script>
