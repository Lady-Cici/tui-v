<template>
  <div class="header-item" ref="item">{{ label }}</div>
</template>
<script>
export default {
  name: "TuivTableColumn",
  props: {
    label: String,
    prop: String,
    width: {},
  },
  mounted() {
    if (this.width) {
      this.$refs.item.style.width = `${this.width}px`;
      this.$refs.item.style.flex = "none";
    }
  },
};
</script>