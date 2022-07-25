<template>
  <div class="tuiv-ring">
    <slot></slot>
    <div v-if="ifShow">vif vif</div>
  </div>
</template>
<script>
export default {
  name:"TuivRing",
  data() {
    return {
      ifShow:false,
    }
  },
  mounted() {
  }
}
</script>