<template id="listComponent">
	<ul class="List active-list">
		<li class="title">
			<p v-html="title"></p>
		</li>
		
		<li v-for="(x,y) in features" :id="ids[y]" :key="y">
			<router-link :to="openPageVals[y]">
				<span class="mui-icon iconfont" :class="icon[y]"></span>
				<p>{{x}}</p>
			</router-link>
		</li>
		
	</ul>
</template>

<script type="text/javascript">

export default{
	props: ['title', 'features', 'icon', 'ids', 'openPageVals'],
	data(){
		return{
			
		}
	},
	methods: {
		
	}
}
</script>

<style type="text/css">

</style>