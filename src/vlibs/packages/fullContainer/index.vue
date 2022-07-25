<template>
  <div class="tuiv-full-container">
    <tuiv-scrollbar>
      <div class="blockBd" ref="blockBd">
        <slot></slot>
      </div>
    </tuiv-scrollbar>
  </div>
</template>

<script>
import ResizeObserver from 'resize-observer-polyfill';
export default {
  name:"TuivFullContainer",
  data() {
    return {
      ro:null
    }
  },
  mounted() {
    this.addResizeEvent(document.body);
  },
  beforeDestroy() {
    if(this.ro){
      this.ro.disconnect();
    }
  },
  methods: {
    addResizeEvent(target){
      this.ro = new ResizeObserver(() => {
        let cw = document.documentElement.clientWidth;
        let initW = 1920;
        let scalew = cw/initW;
        let myscale = scalew;
        let blockBd = this.$refs.blockBd;
        blockBd.style.transform = `scale(${myscale})`; 
      });
      this.ro.observe(target);
    },
  },
}
</script>