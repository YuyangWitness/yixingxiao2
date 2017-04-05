<template>
	<div id="addcustomer">
		<header class="mui-bar mui-bar-nav" id="head">
			<router-link to="/customer"><p class="mui-pull-left" style="margin-left: 10px;" id="cancle">取消</p></router-link>
			<h1 class="mui-title">新增客户</h1>
			<p class="mui-pull-right" style="margin-right: 10px;" id="confirm">确定</p>
		</header>
		<div class="Select" id="addCustomer">
			<div class="navDiv">
				<div class="SelectActive active" @click="changeActive({e:$event,msg:1})">基本信息</div>
				<div class="" @click="changeActive({e:$event,msg:2})">业务意向</div>				
				<div class="SelectNoActive" @click="changeActive({e:$event,msg:3})">联系人</div>
			</div>
			<a class="mui-icon mui-icon-plus" id="addContact" v-show="addContactIcon"></a>
		</div>
		
		<div class="mui-content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script type="text/javascript">
import { mapActions, mapGetters } from 'vuex'
import { customer } from './../../store/types.js'
export default{
	data(){
		return {
			
		}
	},
	//这里的［customer］是一个数组，所以需要用[0]
	methods:{
		...mapActions({
	      changeActive: customer.c_actions.changeActive
	    })/*,
	    changeActive(){
	    	console.log(customer.c_actions.changeActive)
	    	console.log(Object.prototype.toString.apply(customer.c_actions.changeActive));
	    }*/
	},
	computed: mapGetters({
		addContactIcon: customer.c_getters.addContactIcon
	})
	    


}
</script>

<style type="text/css" scoped>
.Select .navDiv{
	width: 70%;
}
.Select .navDiv div {
	width: 33%;
}
</style>