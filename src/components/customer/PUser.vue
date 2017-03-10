<template>
	<div id="PUser">
		<sort-list :username="username"></sort-list>
		<slide-search v-show="SearchShow">
			<form id="searchBox">
			<div id="selectWriting">
				<div class="table-view" id="selectProject">
					<span class="mui-icon mui-icon-arrowright mui-pull-right"></span>
					<span class="state mui-pull-right"></span>
					<label>保全项目</label>
				</div>
				<div class="table-view" id="selectState">
					<span class="mui-icon mui-icon-arrowright mui-pull-right"></span>
					<span class="state mui-pull-right">全部</span>
					<label>保全状态</label>
				</div>
				<div class="table-view">
					<input type="text" placeholder="请输入受理日期" />
				</div>
				<div class="table-view">
					<a class="table-btn">查&nbsp;&nbsp;&nbsp;询</a>
				</div>
			</div>
			</form>
		</slide-search>
		<div id="mask" v-show="SearchShow" @click="closeMask()"></div>
	</div>
</template>

<script type="text/javascript">
import sortList from './../common/SortContact.vue'
import slidSearch from './../common/SlideSearch.vue'
import './../../css/drag.css'
export default{
	data(){
		return{
			username : ["王者荣耀", "Angularjs", "beats", "成昆", "赵小刀", "1111风云", "Lol", "helloworld", "五杀", "团灭", "发型", "文件"],
			SearchShow: false
		}
		
	},
	components: {
		'sort-list': sortList,
		'slide-search': slidSearch
	},
	props: ['puserSearchShow'],
	methods: {
		closeMask(){
			this.SearchShow = false;
			this.$emit("closeSearch",1);
		}
	},
	watch: {
		puserSearchShow(newVal){
			this.SearchShow = newVal;
		}
	}
}
</script>

<style type="text/css" scoped>
#mask{
	width: 100%;
	height: 100%;
	position: fixed;
	top: 44px;
	left: 0;
	z-index: 11;
    background-color: rgba(0,0,0,.3);
}
</style>