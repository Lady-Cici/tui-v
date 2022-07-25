<template>
  <div class="tuiv-scroll-table">
    <div class="header-wrapper" v-if="!noHead">
      <slot></slot>
    </div>
    <div class="body-wrapper">
      <tuiv-scrollbar :height="getBodyHeight()" :disabled="scrollHeight==0" ref="scrollbar">
        <div class="row-item" v-for="(item, index) in showData" :key="index" :style="gerRowStyle()">
          <span
            class="cell"
            v-for="(vnode, sindex) in $slots.default"
            :key="sindex"
            :style="getCellStyle(vnode)"
            >{{ item[vnode.componentOptions.propsData.prop] }}</span
          >
        </div>
       </tuiv-scrollbar>
    </div>
  </div>
</template>
<script>
export default {
  name: "TuivTable",
  props: {
    data: {
      type: Array,
      default: function () {
        return [];
      },
    },
    noHead:{
      type:Boolean,
      default:false
    },
    rowNum: {
      type: Number,
      default: 5,
    },
    rowHeight: {
      type: Number,
      default: 30,
    },
    scrollHeight:{
      type:Number,
      default:0   
    },
    waitTime: {
      type: Number,
      default: 2000,
    },
  },
  data() {
    return {
      showData: [],
      animationIndex: 0,
      animationHandler: null,
    };
  },
  mounted() {
    this.initData();
  },
  beforeDestroy() {
    this.stopAnimation();
  },
  methods: {
    getCellStyle(vnode) {
      if (vnode.componentOptions.propsData.width) {
        return `width :${vnode.componentOptions.propsData.width}px; flex:none`;
      } else {
        return ``;
      }
    },
    gerRowStyle(){
      return `height :${this.rowHeight}px;line-height:${this.rowHeight}px;`;
    },
    getBodyHeight() {
      let bodyHeight = 0;
      if(this.scrollHeight>0){
        bodyHeight = this.scrollHeight;
      }else{
        bodyHeight = this.rowNum * this.rowHeight;
      }
      return bodyHeight;
    },
    initData(){
      this.stopAnimation();
      if(this.scrollHeight>0){
        this.showData = this.data;
        return;
      }
      let rowLength = this.data.length;
      if (this.rowNum >= rowLength){
        this.showData = this.data.slice(0, rowLength);
        return;
      } 
      this.showData = this.data.slice(0, this.rowNum + 1);
      this.animationHandler = setTimeout(this.animation, this.waitTime);
    },
    async animation() {
      this.$refs.scrollbar.$refs.view.childNodes[0].classList.add("hide");
      await new Promise((resolve) => setTimeout(resolve, 300));
      this.$refs.scrollbar.$refs.view.childNodes[0].classList.remove("hide");

      let rowLength = this.data.length;
      this.animationIndex++;
      if(this.animationIndex>=rowLength){
        this.animationIndex = 0;
      }
      //填充当前显示的数据列表
      let rows = this.data.slice(this.animationIndex);
      rows.push(...this.data.slice(0, this.animationIndex));
      this.showData = rows.slice(0, this.rowNum + 1);
      this.animationHandler = setTimeout(this.animation, this.waitTime);
    },
    stopAnimation() {
      if (this.animationHandler) {
        clearTimeout(this.animationHandler);
      }
    },
  },
};
</script>