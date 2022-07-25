<template>
  <div>
    <demo-container title="基础用法">
      <tuiv-screenfull></tuiv-screenfull>
    </demo-container>

    <demo-container title="设置显示文字">
      <tuiv-screenfull normal-text="点击全屏" exit-text="点击退出全屏"></tuiv-screenfull>
    </demo-container> 

    <demo-container title="设置图标">
      <tuiv-screenfull>
        <template slot-scope="scopedata">
          <span style="margin-right: 5px;vertical-align: middle;">
            <template v-if="scopedata.isFullscreen"><img src="@/assets/images/fullscreen2.png"/></template>
            <template v-else><img src="@/assets/images/fullscreen.png"/></template>
          </span>
        </template>
      </tuiv-screenfull>
    </demo-container> 
  </div>
</template>

<script>
export default {
  name: "ViewFullscreen",
};
</script>

<style>
</style>