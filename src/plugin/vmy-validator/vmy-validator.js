import Validation from './validation.vue'

export default{

	install(Vue,options){

		let AllValidate = {};
		let ValidateAttr = {};

		let rules = {
			required(el,binding,vnode,judge){
				let Root = searchClassName(el,"validator");

				let RootName = Root.getAttribute("name");
				if(judge){
					if(el.value === ""){

						let val = vnode.context.$data[RootName][binding.arg].message.required;
						mui.toast(val);
					}
				}
			},
				
			maxlength(el,binding,vnode,judge){
				let Root = searchClassName(el,"validator");

				let RootName = Root.getAttribute("name");
				if(el.value.length > judge){
					let val = vnode.context.$data[RootName][binding.arg].message.maxlength;
					mui.toast(val);
				}
			}
		}


		 Vue.component("validation",Validation);
		 
		 Vue.directive("validator",{  
		 	inserted(el,binding,vnode){
				//vnode.context.$data.validate.customerName.requried = true;
				//console.log(vnode.elm.parentNode.tagName);
				//console.log(searchClassName(vnode.elm,"validator"));
				
				//获取绑定该指令的验证单元

				let Root = searchClassName(el,"validator");

				let RootName = Root.getAttribute("name");

				//绑定该指令的验证
				let arg = binding.arg;
				let value = binding.value;
				if(ValidateAttr[RootName] == undefined){
					ValidateAttr[RootName] =  {};
				}
				if(ValidateAttr[RootName][arg] == undefined){
					ValidateAttr[RootName][arg] = value;
				}else{
					throw (arg + "已经被注册");
				}
				
				
		 	},
		 	update(el,binding,vnode){
		 		let active = document.activeElement;
		 		if(el.oldValue !== el.value && el === active ){
		 			let validateVal = binding.value;
			 		for(var key in validateVal){
			 			
			 			rules[key](el,binding,vnode,validateVal[key]);
			 			
			 		}
		 		}
		 		
	
			}
		 });


		 function searchClassName(el,name){
		 	let res = null;
		 	if(el.parentNode){
		 		if(el.parentNode.className !== name){
		 			//console.log(el.parentNode.className);
		 			res = searchClassName(el.parentNode,name);
		 		}else{
		 			//console.log(el.parentNode.className);
		 			res = el.parentNode;
		 		}
		 	}

		 	return res;
		 	
		 }


	}

}