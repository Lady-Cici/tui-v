import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

//使用路由器
import VueRouter from 'vue-router'	// 引入VueRouter
import router from './router'				// 引入路由器
Vue.use(VueRouter)	// 应用插件

//使用tui-v插件
import tuiv from './vlibs/index.js'
Vue.use(tuiv)

//全局组件注册
import demoContainer from './components/demoContainer'
Vue.component(demoContainer.name,demoContainer);

import "./styles/index.scss"; 
new Vue({
  render: h => h(App),
  router:router   // 指定路由配置项
}).$mount('#app')
