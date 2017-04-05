import VueRouter from 'vue-router'
import Vue from 'vue'
import index from './../components/index/Index.vue'
import customer from './../components/customer/Customer.vue'
import plan from './../components/plan/Plan.vue'
import schedule from './../components/schedule/Schedule.vue'
import addcustomer from './../components/customer/AddCustomer.vue'
import puser from './../components/customer/PUser.vue'
import user from './../components/customer/User.vue'
import baseinfo from './../components/customer/BaseInfo.vue'
import businessIn from './../components/customer/BusinessIntention.vue'
import acontact from './../components/customer/Acontact.vue'

Vue.use(VueRouter);




export default new VueRouter({
	routes:[
		{
			path: "/",
			redirect: "/index"
		},
		{
			path: "/index",
			component: index
		},
		{
			path: "/customer",
			component: customer,
			children: [
				{ path: "", component: puser },
				{ path: "user", component: user }

			]
		},
		{
			path: "/addcustomer",
			component: addcustomer,
			children: [
				{ path: "", component: baseinfo },
				{ path: "business", component: businessIn },
				{ path: "contact", component: acontact }
			]
		},
		{
			path: "/plan",
			component: plan
		},
		{
			path: "/schedule",
			component: schedule
		}
		
    ]
})