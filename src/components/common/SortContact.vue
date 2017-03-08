<template>
	<div id="sortList">
		<ul class="mui-table-view firstBlood" v-for="(x1,y1) in sortName">
			<li class="mui-table-view-cell" v-for="(x2,y2) in x1">
				<div class="UserName">
					<p>{{x2}}</p>
				</div>
				<div class="mui-pull-right xian">
					<img class="mui-pull-left" id="Imgl" src="" />
				</div>
			</li>
		</ul>

		<p id="word">
			
		</p>
		<div id="nav">
			<a v-for="(x,y) in navWord" @click="scrollWord($event)" :data-index='y'>{{x}}</a>
		</div>
	</div>
</template>

<script type="text/javascript">
import { sortPY } from './../../js/common/sortPin.js'
export default{
	props: {
		username : {
			type : Array,
			required : true
		}

	},
	data(){
		return{
			sortName : {},
			navWord : []
		}
		
	},
	mounted(){		
		//把姓名分类并且展示
		//let username = ["王者荣耀", "Angularjs", "beats", "成昆", "赵小刀", "1111风云", "Lol", "helloworld", "五杀", "团灭", "发型", "文件"];
		let word = ["#", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

		let tempName = sortPY(this.username);	
		
		//导航栏
		for(let i in tempName) { //遍历链表
			if(tempName[i].length !== 0){

				this.sortName[i] = tempName[i];
				if(i === 'other'){
					this.navWord.push("#");
				}else{
					this.navWord.push(i);
				}
				
			}

		}			
	},
	methods: {
		scrollWord(event){
			console.log(event.srcElement.getAttribute('data-index'));
			let scrollIndex = event.srcElement.getAttribute('data-index');
			let firstBlood = this.$el.getElementsByClassName('firstBlood');
			console.log(firstBlood[scrollIndex].offsetTop);
			window.scrollTo(0, firstBlood[scrollIndex].offsetTop - 79);
		}
	}
}
</script>

<style type="text/css" scoped>
#sortList{
	margin-top: 35px;
}
.mui-table-view-cell {
	background: #efeff4;
}
.mui-table-view-cell:after {
	left: 0;
}

#nav {
	height: 93%;
	width: 5%;
	position: fixed;
	right: 0px;
	top: 55px;
	text-align: center;
	z-index: 11;
}

#nav a {
	display: block;
	height: 3.6%;
	color: #007AFF;
}

#word {
	width: 70px;
	height: 70px;
	background: darkslategrey;
	opacity: 0.8;
	text-align: center;
	line-height: 70px;
	font-size: large;
	position: absolute;
	color: white;
	display: none;
}
</style>