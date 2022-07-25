import Router from "vue-router";
import Home from '@/view/home/index.vue';
import Panel from '@/view/panel/index.vue';
import Number from '@/view/number/index.vue';
import Table from '@/view/table/index.vue';
import Date from '@/view/date/index.vue';
import Screenfull from '@/view/screenfull/index.vue';

const router = new Router({
	routes:[
		{
			path:'/',
			component:Home
		},
		{
			path:'/panel',
			component:Panel
		},
		{
			path:'/number',
			component:Number
		},
		{
			path:'/table',
			component:Table
		},
		{
			path:'/date',
			component:Date
		},				
		{
			path:'/screenfull',
			component:Screenfull
		}
	]
})
//暴露router
export default router