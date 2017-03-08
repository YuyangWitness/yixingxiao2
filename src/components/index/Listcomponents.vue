<template id="listComponent">
	<ul class="List active-list">
		<li class="title">
			<p v-html="title"></p>
		</li>
		<li v-for="(x,y) in features" :id="ids[y]" @click='openPage(ids[y])' :key="y">
			<span class="mui-icon iconfont" :class="icon[y]"></span>
			<p>{{x}}</p>
		</li>
	</ul>
</template>

<script type="text/javascript">

export default{
	props: ['title', 'features', 'icon', 'ids'],
	methods: {
		openPage(msg){
			mui.openWindow('src/pages/customer/' + msg + '.html', msg);
			//console.log(this.key)
		}
	}
}
</script>

<style type="text/css">

</style>