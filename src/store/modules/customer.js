import { customer } from './../types.js'
import { removeClass, addClass } from './../../js/common/yixingxiao.js'
import router from './../../router/router.js'

const state = {
	addContactIcon: false,
	basicName: ""
}

const actions = {
	[customer.c_actions.changeActive]({commit,state}, playload){
		//router.push("/addcustomer/business")
		//commit(customer.c_mutations.changeActive,playload);
		if(state.basicName !== ""){
			//验证是否有相同用户名，跳过
			//更改样式
			let active = document.getElementsByClassName("active");
			if(active[0] !== playload.e.srcElement){
				//改变样式
				removeClass(active[0],"active");
				addClass(playload.e.srcElement,"active");

				//路由跳转
				if(playload.msg === 1){
					router.push("/addcustomer");
				}else if(playload.msg === 2){
					router.push("/addcustomer/business");
				}else if(playload.msg === 3){
					router.push("/addcustomer/contact");
					//commit修改Icon显示隐藏
					commit(customer.c_mutations.addContactIconShow,playload);
				}
				
			}


		}else{
			mui.toast("请填写用户名");
		}
		
	},
	[customer.c_actions.validateBaseInfo]({commit},playload){

		commit(customer.c_mutations.validateBaseInfo,playload)
	}
}

const mutations = {
	[customer.c_mutations.addContactIconShow](state,playload){
		
		//显示隐藏添加联系人的标签
		if(playload.msg === 3){
			state.addContactIcon = true;
		}else{
			state.addContactIcon = false;
		}
		
		
	},
	[customer.c_mutations.validateBaseInfo](state,playload){//验证表单
		let val = playload.e.srcElement.value;

		if(playload.msg === "customerName"){//验证用户名，即Text验证
			
			
			if(val.length > 30){
				mui.toast("客户名称最多三十个汉字");
				playload.e.srcElement.value = "";
			}else{
				state.basicName = playload.e.srcElement.value;
			}
		}

		if(playload.msg === "BasicNumber"){//验证数字

			//正则表达式把开头的多个0去掉
			let regVal = val.replace(/^[0]+/,"");
			playload.e.srcElement.value = regVal;

			//分割.
			let splitVal = regVal.split(".");

			//因为页面input设置为number，所以返回的时候是非法数字就会返回空
			if(splitVal[0] === ""){
				mui.toast("请输入有效数字");
				playload.e.srcElement.value = "";

			}else if(playload.Integer === 1 && regVal.indexOf(".") !== -1){//验证如果需要整数传入Integer:1
				mui.toast("请输入整数");
				playload.e.srcElement.value = "";

			}else if(playload.positive === 1 && regVal.indexOf("-") !== -1){//验证如果需要正数传入positive:1
				mui.toast("请输入正数");
				playload.e.srcElement.value = "";

			}else if(splitVal[1] && splitVal[1].length > 4){ //验证精确到小数点后四位

				mui.toast("只能精确到小数点后四位");
				let subVal = splitVal[1].substring(0,4);
				playload.e.srcElement.value = splitVal[0] + "." + subVal;
			}else if(val.length > 20){//验证最多只能传入20个数字
				mui.toast("最多只能20个数字");
				playload.e.srcElement.value = "";
			}

			
			
		}

		
	}
}

const getters = {
	//以CUS为开头表示customer的变量名，防止命名冲突
	[customer.c_getters.addContactIcon](){
		return state.addContactIcon;
	},
	[customer.c_getters.basicName](){
		return state.basicName;
	}
}

export default{
	state,
	actions,
	mutations,
	getters
}