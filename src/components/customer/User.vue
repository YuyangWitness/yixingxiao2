<template>
	<div id="User">
		<sort-list :username="username"></sort-list>
		<slide-search v-show="SearchShow">
			<form id="searchBox">
			<div id="selectWriting">
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
	</div>
</template>

<script type="text/javascript">
import sortList from './../common/SortContact.vue'
import slideSearch from './../common/SlideSearch.vue'
import './../../css/drag.css'
export default{
	data(){
		return{
			username : ["服务", "小涨", "happy", "鱼鱼", "小朋友", "123321是事实", "看书", "腾讯", "BAT", "百度", "阿里巴巴", "五四"],
			SearchShow: false
		}
		
	},
	props: ["UslideShow"],
	watch: {
		UslideShow(newVal){
			this.SearchShow = newVal;
		}
	},
	components: {
		'sort-list': sortList,
		'slide-search': slideSearch
	}
}
</script>