import Vue from 'vue'
import './css/mui.css'
import './css/yixingxiao.css'
import './css/Customer.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/router.js'
import store from './store/store.js'

Vue.use(VueRouter)

const router = new VueRouter({
	routes
})

new Vue({
	router,
	store,
  el: '#app',
  render: h => h(App)
})
