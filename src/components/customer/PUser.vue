<template>
	<div id="PUser">
		<sort-list :username="username"></sort-list>
		<slide-search v-show="SearchShow">
			<form id="searchBox">
			<div id="selectWriting">
				<div class="table-view">
					<input type="text" placeholder="请输入受理日期" />
				</div>
				<div class="table-view">
					<a class="table-btn">查&nbsp;&nbsp;&nbsp;询</a>
				</div>
			</div>
			</form>
		</slide-search>
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
	props: ["PslideShow"],
	watch: {
		PslideShow(newVal){
			this.SearchShow = newVal;
		}
	}
}
</script>

<style type="text/css" scoped>

</style>