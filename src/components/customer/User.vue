<template>
	<div id="User">
		<sort-list :username="username"></sort-list>
	</div>
</template>

<script type="text/javascript">
import sortList from './../common/SortContact.vue'
export default{
	data(){
		return{
			username : ["服务", "小涨", "happy", "鱼鱼", "小朋友", "123321是事实", "看书", "腾讯", "BAT", "百度", "阿里巴巴", "五四"]
		}
		
	},
	components: {
		'sort-list': sortList
	}
}
</script>