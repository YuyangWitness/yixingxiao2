import Vue from 'vue'
import Vuex from 'vuex'
import customer from './modules/customer.js'
import index from './modules/index.js'




Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		index,
		customer
	}
});

