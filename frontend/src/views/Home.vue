<template>
	<div class="home">
		<h1>{{ $route.meta.title }}</h1>
	</div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'home',
	components: {
		//HelloWorld
	},

	mounted() {
		alert(localStorage.getItem('val'));


	}
}
</script>
