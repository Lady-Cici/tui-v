import "./styles/index.scss";

import fulllContainer from './packages/fullContainer'
import panel from './packages/panel'
import ring from './packages/ring'
import scrollbar from './packages/scrollBar'
import scrolltable from './packages/scrollTable'
import tablecolumn from './packages/scrollTable/tableColumn'
import runnumber from './packages/number'
import date from './packages/date'
import screenfull from './packages/screenfull'

const components = [
  fulllContainer,
  panel,
  ring,
  scrollbar,
  scrolltable,
  tablecolumn,
  runnumber,
  date,
  screenfull
];

// 批量组件注册
const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default install; 