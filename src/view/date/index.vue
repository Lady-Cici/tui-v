<template>
  <div>
    <demo-container title="年月日 时分秒" subtitle="yyyy年MM月dd日  HH:mm:ss">
        <tuiv-date format="yyyy年MM月dd日  HH:mm:ss"></tuiv-date>
    </demo-container>

    <demo-container title="年-月-日 星期" subtitle="yyyy-MM-dd 星期dddd">
        <tuiv-date format="yyyy-MM-dd 星期dddd"></tuiv-date>
    </demo-container>

    <demo-container title="时间（12小时制） PM(AM)"  subtitle="hh:mm:ss TT">
        <tuiv-date format="hh:mm:ss TT"></tuiv-date>
    </demo-container>
  </div>
</template>

<script>
export default {
  name: "ViewDate",
};
</script>

<style>
</style>