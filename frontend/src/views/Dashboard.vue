<template>
	<div class="dashboard">
		<h1>{{ $route.meta.title }}</h1>
	</div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'dashboard',
	components: {
		//HelloWorld
	},

	mounted() {
		alert(localStorage.getItem('val'));


	}
}
</script>
