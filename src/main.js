import Vue from 'vue'
import './css/mui.css'
import './css/yixingxiao.css'
import './css/Customer.css'
import App from './App.vue'
import router from './router/router.js'
import store from './store/store.js'

let vm = new Vue({
	router,
	store,
  el: '#app',
  render: h => h(App)
})




