<template>
  <div class="tuiv-scrollbar">
    <div
      class="v-scrollbar__wrap"
      ref="wrap"
      @scroll="handleScroll"
      :style="renderWrapStyle()"
    >
      <div class="v-scrollbar__view" ref="view">
        <slot></slot>
      </div>
    </div>
    <div class="v-scrollbar__bar is-vertical" ref="bar" v-if="!disabled">
      <div
        class="v-scrollbar__thumb"
        @mousedown="clickThumbHandler"
        :style="renderThumbStyle()"
        ref="thumb"
      ></div>
    </div>
  </div>
</template>

<script>
import ResizeObserver from "resize-observer-polyfill";
export default {
  name: "TuivScrollbar",
  props: {
    height: {
      type: Number,
      default: 0,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      baraxisY: 0,
      sizeHeight: "0",
      moveY: 0,
      ro: null,
    };
  },
  mounted() {
    this.addResizeEvent(this.$refs.wrap);
  },
  beforeDestroy() {
    if (this.ro) {
      this.ro.disconnect();
    }
    document.removeEventListener("mouseup", this.mouseUpDocumentHandler);
  },
  methods: {
    addResizeEvent(target) {
      this.ro = new ResizeObserver(() => {
        const wrap = this.$refs.wrap;
        let heightPercentage = (wrap.clientHeight * 100) / wrap.scrollHeight;
        this.sizeHeight = heightPercentage < 100 ? heightPercentage + "%" : "";
      });
      this.ro.observe(target);
    },
    handleScroll() {
      const wrap = this.$refs.wrap;
      this.moveY = (wrap.scrollTop * 100) / wrap.clientHeight;
    },
    clickThumbHandler(e) {
      // prevent click event of right button
      if (e.ctrlKey || e.button === 2) {
        return;
      }
      this.startDrag(e);
      this.baraxisY =
        e.currentTarget["offsetHeight"] -
        (e["clientY"] - e.currentTarget.getBoundingClientRect()["top"]);
    },
    startDrag(e) {
      e.stopImmediatePropagation();
      this.cursorDown = true;
      document.addEventListener("mousemove", this.mouseMoveDocumentHandler);
      document.addEventListener("mouseup", this.mouseUpDocumentHandler);
      document.onselectstart = () => false;
    },
    mouseMoveDocumentHandler(e) {
      if (this.cursorDown === false) return;
      const prevPage = this.baraxisY;
      if (!prevPage) return;
      const offset =
        (this.$refs.bar.getBoundingClientRect()["top"] - e["clientY"]) * -1;
      const thumbClickPosition = this.$refs.thumb["offsetHeight"] - prevPage;
      const thumbPositionPercentage =
        ((offset - thumbClickPosition) * 100) / this.$refs.bar["offsetHeight"];

      this.$refs.wrap.scrollTop =
        (thumbPositionPercentage * this.$refs.wrap.scrollHeight) / 100;
    },
    mouseUpDocumentHandler() {
      this.cursorDown = false;
      this.baraxisY = 0;
      document.addEventListener("mousemove", this.mouseMoveDocumentHandler);
      document.addEventListener("mouseup", this.mouseUpDocumentHandler);
      document.onselectstart = null;
    },
    renderWrapStyle() {
      const style = {};
      if (this.height > 0) {
        style.maxHeight = this.height + 17 + "px";
        if (this.disabled) {
          style.height = style.maxHeight;
        }
      }
      if (this.disabled) {
        style.overflow = "hidden";
      }
      return style;
    },
    renderThumbStyle() {
      const style = {};
      const translate = `translateY(${this.moveY}%)`;
      style.height = this.sizeHeight;
      style.transform = translate;
      style.msTransform = translate;
      style.webkitTransform = translate;
      return style;
    },
  },
};
</script>