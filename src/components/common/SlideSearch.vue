<template>
	<transition name="slide">
		<div id="search">
			<slot></slot>		
		</div>
	</transition>	
</template>

<style type="text/css" scoped>
#search{
	width: 100%;
	background: #efeff4;
	position: fixed;
	z-index: 12;
	top: 44px;

}
.slide-enter, .slide-leave-active{
	transform: translateY(-300px);
	opacity: 0;
}
.slide-enter-active, .slide-leave-active {
  transition: all .5s
}

</style>