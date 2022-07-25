<template>
  <span class="tuiv-screenfull" :class="isFullscreen ? 'exit-fullscreen' : 'fullscreen'" @click="click">
    <slot :isFullscreen = "isFullscreen"></slot>
    {{isFullscreen ? exitText:normalText}}
  </span>
</template>
<script>
import screenfull from "screenfull";
export default {
  name: "TuivScreenfull",
  props: {
    exitText: {
      type: String,
      default: "退出全屏",
    },
    normalText: {
      type: String,
      default: "全屏",
    },
  },
  data() {
    return {
      isFullscreen: false, //是否全屏
    };
  },
  created() {
    if (screenfull.isEnabled) {
      screenfull.on("change", this.change);
    }
    window.addEventListener("keydown",this.keyDown);
  },
  beforeDestroy() {
    if (screenfull.isEnabled) {
      screenfull.off("change", this.change);
    }
    window.removeEventListener("keydown",this.keyDown);
  },
  methods: {
    click() {
      if (!screenfull.isEnabled) {
        return false;
      }
      screenfull.toggle();
    },
    change() {
      this.isFullscreen = screenfull.isFullscreen;
    },
    keyDown(event){
      //禁用F11全屏
      if(event.keyCode===122){
        event.preventDefault();
        event.returnValue = false;
      }
    }
  },
};
</script>
