<template>
	<div id="customer">
		<header id="head" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left Aicon"></a>
			<h1 class="mui-title">客户</h1>

			<a class="mui-icon iconfont icon-chaxun mui-pull-right Aicon" id="PUserSearch"></a>
			<a class="mui-icon iconfont icon-chaxun mui-pull-right Aicon" id="UserSearch" style="display: none;"></a>
			<a class="mui-icon mui-icon-plus mui-pull-right Aicon" style="margin-right: 2%;" id="addCustomer"></a>
		</header>
		<div id="SelectUser" class="Select">
			<p>
				<router-link to="/puser"><div id="PUser" class="SelectActive active" @click="changeActive(1,$event)">潜在客户</div></router-link>
				<router-link to="/user"><div id="User" class="SelectNoActive" @click="changeActive(2,$event)">正式客户</div></router-link>
			</p>
			
		</div>
		<div class="mui-content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script type="text/javascript">
import '../../css/yixingxiao.css'
import '../../css/Customer.css'
import { containClass, addClass, removeClass } from '../../js/common/yixingxiao.js'

export default{
	methods: {
		changeActive(index,event){ //改变active样式
			if(index == 1){
				
				let isActive = containClass(event.srcElement, 'active');

				if(!isActive){
					addClass(event.srcElement, 'active');
					removeClass(event.srcElement.parentElement.nextElementSibling.children[0], 'active');
				}

			}else if( index == 2 ){

				let isActive = containClass(event.srcElement, 'active');
				

				if(!isActive){
					addClass(event.srcElement, 'active');
					removeClass(event.srcElement.parentElement.previousElementSibling.children[0], 'active');
				}

			}
		}
	}
}
</script>

<style type="text/css" scoped>
.Select div {
	width: 49%;
}
</style>