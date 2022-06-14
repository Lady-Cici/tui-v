import Vue from 'vue'
import App from './App.vue'

import panel from './components/panel'
import ring from './components/ring'
Vue.component(panel.name,panel);
Vue.component(ring.name,ring);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
