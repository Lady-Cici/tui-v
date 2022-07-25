<template>
  <div>
    <demo-container title="基础用法">
      <tuiv-table :data="tableData">
        <tuiv-table-column label="日期" prop="date" width="180"></tuiv-table-column>
        <tuiv-table-column label="姓名" prop="name" width="180"></tuiv-table-column>
        <tuiv-table-column label="地址" prop="address"></tuiv-table-column>
      </tuiv-table>
    </demo-container>
    <demo-container title="无表头">
      <tuiv-table :data="tableData" noHead>
        <tuiv-table-column prop="date" width="180"></tuiv-table-column>
        <tuiv-table-column prop="name" width="180"></tuiv-table-column>
        <tuiv-table-column prop="address"></tuiv-table-column>
      </tuiv-table>
    </demo-container>
    <demo-container title="使用滚动条">
      <tuiv-table :data="tableData" :scrollHeight=100>
        <tuiv-table-column label="日期" prop="date" width="180"></tuiv-table-column>
        <tuiv-table-column label="姓名" prop="name" width="180"></tuiv-table-column>
        <tuiv-table-column label="地址" prop="address"></tuiv-table-column>
      </tuiv-table>
    </demo-container>
  </div>
</template>

<script>
export default {
  name: "ViewTable",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎1",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎2",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎3",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎4",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎5",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎6",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎7",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ]
    };
  },
};
</script>

<style>
</style>