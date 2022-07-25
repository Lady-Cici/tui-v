<template>
  <div class="tuiv-panel">
    <div v-if="isGrid" class="grid-layer" ref="layer">
      <div class="grid-layer-l-t" ref="lt"></div>
      <div class="grid-layer-t" ref="t"></div>
      <div class="grid-layer-r-t" ref="rt"></div>
      <div class="grid-layer-l" ref="l"></div>
      <div class="grid-layer-c" ref="c"></div>
      <div class="grid-layer-r" ref="r"></div>
      <div class="grid-layer-l-b" ref="lb"></div>
      <div class="grid-layer-b" ref="b"></div>
      <div class="grid-layer-r-b" ref="rb"></div>
    </div>
    <div class="header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TuivPanel",
  /**
   * src 背景图片的资源地址（图片设尽量设置大)
   * grid 9宫格
   */
  props: {
    src: {
      type: String,
      default: "",
    },
    grid: {
      type: Array,
      default: () => {
        return [50, 50, 50, 50];
      },
    },
  },
  computed: {
    isGrid() {
      return this.src == "" ? false : true;
    },
  },
  mounted() {
    let posT = this.grid[0];
    let posR = this.grid[1];
    let posB = this.grid[2];
    let posL = this.grid[3];
    if (posT + posB > this.$el.offsetHeight) {
      posT = posB = this.$el.offsetHeight / 2;
    }
    if (posL + posR > this.$el.offsetWidth) {
      posL = posR = this.$el.offsetWidth / 2;
    }
    for (let i = 0; i < this.$refs.layer.childNodes.length; i++) {
      this.$refs.layer.childNodes[i].style.backgroundImage =
        "url(" + this.src + ")";
    }
    this.$refs.lt.style.width = posL + "px";
    this.$refs.lt.style.height = posT + "px";
    this.$refs.rt.style.width = posR + "px";
    this.$refs.rt.style.height = posT + "px";
    this.$refs.t.style.height = posT + "px";
    this.$refs.t.style.left = posL + "px";
    this.$refs.t.style.right = posR + "px";
    this.$refs.l.style.top = posT + "px";
    this.$refs.l.style.width = posL + "px";
    this.$refs.l.style.bottom = posB + "px";
    this.$refs.c.style.left = posL + "px";
    this.$refs.c.style.right = posR + "px";
    this.$refs.c.style.top = posT + "px";
    this.$refs.c.style.bottom = posB + "px";
    this.$refs.r.style.top = posT + "px";
    this.$refs.r.style.width = posR + "px";
    this.$refs.r.style.bottom = posB + "px";
    this.$refs.lb.style.width = posL + "px";
    this.$refs.lb.style.height = posB + "px";
    this.$refs.rb.style.width = posR + "px";
    this.$refs.rb.style.height = posB + "px";
    this.$refs.b.style.height = posB + "px";
    this.$refs.b.style.left = posL + "px";
    this.$refs.b.style.right = posR + "px";
  },
};
</script>