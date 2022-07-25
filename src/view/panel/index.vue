<template>
  <div>
    <demo-container title="基础用法">
      <tuiv-panel :src="panelurl">
        <div slot="header">
          <span>卡片名称</span>
        </div>
        <div>
          <div class="text item">列表内容 1</div>
          <div class="text item">列表内容 2</div>
          <div class="text item">列表内容 3</div>
        </div>
      </tuiv-panel>
    </demo-container>

    <demo-container title="简单卡片" subtitle="卡片只有内容区域">
      <tuiv-panel :src="panelurl">
        <div>
          <div class="text item">列表内容 1</div>
          <div class="text item">列表内容 2</div>
          <div class="text item">列表内容 3</div>
        </div>
      </tuiv-panel>
    </demo-container>
  </div>
</template>

<script>
export default {
  name: "ViewPanel",
  data() {
    return {
      panelurl: require(`@/assets/images/mypanel.png`),
    };
  },
};
</script>

<style>
</style>