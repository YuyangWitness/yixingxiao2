import Vue from 'vue'
import VueRouter from 'vue-router'
import './../../css/mui.css'
import Customer from './../../components/customer/Customer.vue'
import PUser from './../../components/customer/PUser.vue'
import User from './../../components/customer/User.vue'

Vue.use(VueRouter);
const routes= [
	{ path: "/", component: PUser },
	{ path: "/puser", component: PUser },
	{ path: '/user', component: User }
];

const router = new VueRouter({
	routes
});

new Vue({
	el: "#customer",
	render: h=>h(Customer),
	router
})