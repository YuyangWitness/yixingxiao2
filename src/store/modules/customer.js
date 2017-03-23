import { customer } from './../types.js'
import { removeClass, addClass } from './../../js/common/yixingxiao.js'

const state = {
	addContactIcon: false
}

const actions = {
	[customer.c_actions.changeActive]({commit}, playload){
		commit(customer.c_mutations.changeActive,playload);
		
	}
}

const mutations = {
	[customer.c_mutations.changeActive](state,playload){
		let active = document.getElementsByClassName("active");

		if(active[0] !== playload.e.srcElement){
			//改变样式
			removeClass(active[0],"active");
			addClass(playload.e.srcElement,"active");

			//显示隐藏添加联系人的标签
			if(playload.msg === 3){
				state.addContactIcon = true;
			}else{
				state.addContactIcon = false;
			}
		}


		
	}
}

const getters = {
	//以CUS为开头表示customer的变量名，防止命名冲突
	[customer.c_getters.addContactIcon](){
		return state.addContactIcon;
	}
}

export default{
	state,
	actions,
	mutations,
	getters
}