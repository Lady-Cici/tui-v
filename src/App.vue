<template>
  <div id="app">
    <tuiv-panel>
      <template v-slot:header>
        <div>头部文字</div>
      </template>
      <div>同容内容</div>
    </tuiv-panel>
    <tuiv-ring>sssssssssss</tuiv-ring>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
