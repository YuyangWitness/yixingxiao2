<template>
	<div id="mask"  @click="closeMask()"></div>
</template>

<script type="text/javascript">
export default{
	methods: {
		closeMask(){
			this.$emit("closeMask");
		}
	}
}
</script>

<style type="text/css">
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