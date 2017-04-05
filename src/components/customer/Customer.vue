<template>
	<div id="customer">
		<header id="head" class="mui-bar mui-bar-nav">
			<router-link to="/" class="mui-icon mui-icon-left-nav mui-pull-left Aicon"></router-link>
			<h1 class="mui-title">客户</h1>

			<a class="mui-icon iconfont icon-chaxun mui-pull-right Aicon" id="PUserSearch" v-show="puserSearch" @click="slideSearch(1)"></a>
			<a class="mui-icon iconfont icon-chaxun mui-pull-right Aicon" id="UserSearch" v-show="userSearch" @click="slideSearch(2)"></a>
			<router-link to="/addcustomer" class="mui-icon mui-icon-plus mui-pull-right Aicon" style="margin-right: 2%;" id="addCustomer" v-show="addCustomer"></router-link>
		</header>
		<div id="SelectUser" class="Select">
			<div class="navDiv">
				<router-link to="/customer"><div id="PUser" class="SelectActive active" @click="changeActive(1,$event)">潜在客户</div></router-link>
				<router-link to="/customer/user"><div id="User" class="SelectNoActive" @click="changeActive(2,$event)">正式客户</div></router-link>
			</div>
			
		</div>
		<div class="mui-content">
			<router-view :PslideShow="PShow" :UslideShow="UShow"></router-view>
		</div>
		<Mask-show v-show="maskShow" @closeMask="closeMask()"></Mask-show>
	</div>
</template>

<script type="text/javascript">
import Mask from '../common/Mask.vue'
import { containClass, addClass, removeClass } from '../../js/common/yixingxiao.js'

export default{
	data(){
		return {
			puserSearch: true,
			userSearch: false,
			addCustomer: true,
			maskShow: false,
			PShow: false,
			UShow: false
		}
	},
	methods: {
		changeActive(index,event){ //改变active样式
			if(index == 1){
				
				let isActive = containClass(event.srcElement, 'active');

				if(!isActive){
					addClass(event.srcElement, 'active');
					removeClass(event.srcElement.parentElement.nextElementSibling.children[0], 'active');
				}
				if(this.userSearch){//改变小图标的显示隐藏

					this.puserSearch = true;
					this.userSearch = false;
					this.addCustomer = true;
				}
				

			}else if( index == 2 ){

				let isActive = containClass(event.srcElement, 'active');
				

				if(!isActive){
					addClass(event.srcElement, 'active');
					removeClass(event.srcElement.parentElement.previousElementSibling.children[0], 'active');
				}

				if(this.puserSearch){//改变小图标的显示隐藏

					this.puserSearch = false;
					this.userSearch = true;
					this.addCustomer = false;
				}

			}
		},
		slideSearch(msg){

			this.maskShow = !this.maskShow;

			//根据判断点击的是那个按钮来弹出框
			if(msg === 1){
				this.PShow = !this.PShow;
			}else if(msg === 2){
				this.UShow = !this.UShow;
			}
		},
		closeMask(msg){
			//所有都隐藏
			setTimeout(() => (this.maskShow = false),200);
			
			this.PShow = false;
			this.UShow = false;
		}
	},
	components: {
		'Mask-show': Mask
	}
}

</script>

<style type="text/css" scoped>
.Select div {
	width: 49%;
}
</style>