<template>
  <div class="ring">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:"TuivRing"
}
</script>
<style>
  .ring{
    width:100px;
    height:100px;
    line-height: 100px;
    border:10px solid black;
    border-radius:50%;
  }
</style>