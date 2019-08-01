<template>
	<div class="login">
		<h1>{{ $route.meta.title }}</h1>
		<form v-on:submit="aaa">
			<input type="text" id="email">
			<input type="text" id="password">
			<button type="submit">Login</button>
		</form>
	</div>
</template>

<script src="../node_modules/jquery/dist/jquery.min.js"></script>
<script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="../node_modules/axios/dist/axios.min.js"></script>

<script>
	export default {
		name: 'login',
		methods:{
			aaa: (e) => {
				e.preventDefault();
				let email = document.getElementById('email').value;
				let password = document.getElementById('password').value;

				axios.post('')

				let val = document.getElementById('val').value;

				if(val == 1){
					localStorage.setItem('val', 1);
					//alert(val);
				}else if(val == 2){
					localStorage.setItem('val', 2);
					//alert(val);
				}else{
					localStorage.setItem('val', 3);
					//alert(val);
				}

				window.location.href = '';
			}
		}
	}
</script>
