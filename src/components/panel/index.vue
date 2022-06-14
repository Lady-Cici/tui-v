<template>
  <div class="panel">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="content">
       <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TuivPanel',
}
</script>

<style>
  .panel{
    box-shadow:0 2px 12px 0 rgb(0 0 0 / 10%);
    transition: .3s;
    padding:20px;
  }
  .header{
    font-weight: bold;
  }

</style>