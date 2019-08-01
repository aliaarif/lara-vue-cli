<template>
	<div class="login">
		<h1>{{ $route.meta.title }}</h1>
		<img src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App"/>
		<input type="text" id="val" value="1" v-on:keyup="aaa">
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'login',
	components: {
		HelloWorld
	},


	methods:{
		aaa: () => {
			let val = document.getElementById('val').value;
			
			if(val == 1){
				localStorage.setItem('val', 1);
				alert(val);
			}else if(val == 2){
				localStorage.setItem('val', 2);
				alert(val);
			}else{
				localStorage.setItem('val', 3);
				alert(val);
			}
		}
	}
}
</script>
