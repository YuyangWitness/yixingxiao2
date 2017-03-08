<template>
	<div id="PUser">
		<sort-list :username="username"></sort-list>
	</div>
</template>

<script type="text/javascript">
import sortList from './../common/SortContact.vue'
export default{
	data(){
		return{
			username : ["王者荣耀", "Angularjs", "beats", "成昆", "赵小刀", "1111风云", "Lol", "helloworld", "五杀", "团灭", "发型", "文件"]
		}
		
	},
	components: {
		'sort-list': sortList
	}
}
</script>

<style type="text/css" scoped>

</style>