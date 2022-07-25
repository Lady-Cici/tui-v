<template>
  <div>
    <demo-container title="基础用法">
      <tuiv-number :value="450012301"></tuiv-number>
    </demo-container>
    <demo-container title="千分位分隔符">
      <tuiv-number :value="450012301" thousand></tuiv-number>
    </demo-container>
    <demo-container title="浮点数">
      <tuiv-number :value="45001.3298" :toFixed=2></tuiv-number>
    </demo-container> 
  </div>
</template>
<script>
export default {
  name: "ViewNumber",
};
</script>

<style>
</style>