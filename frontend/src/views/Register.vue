<template>
	<div class="register">
		<h1>{{ $route.meta.title }}</h1>
		<input type="text" name="_token" :value="csrf_token">
		<input type="text" name="name" v-model="input.name" placeholder="Name" />
		<input type="text" name="email" v-model="input.email" placeholder="Email" />
		<input type="password" name="password" v-model="input.password" placeholder="Password" />
		<button type="button" v-on:click="register()">Login</button>
	</div>
</template>

<!-- <script src="../node_modules/jquery/dist/jquery.min.js"></script>
	<script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script> -->
	<!-- <script src="../node_modules/axios/axios.min.js"></script> -->

	<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.min.js" integrity="sha256-S1J4GVHHDMiirir9qsXWc8ZWw74PHHafpsHp5PXtjTs=" crossorigin="anonymous"></script> -->


	<script>
		export default {
			name: 'register',
			data() {
				return {
					input: {
						name: "",
						email: "",
						password: ""
					},
					api:window.api,
					//csrf_token:document.querySelector('meta[name="csrf-token"]').getAttribute('content')
					//csrf:localStorage.setItem('csrf', Laravel.csrfToken),
					//csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),

				}

			},

			// computed:{
			// 	csrf_token = window.Laravel.csrfToken; 
			// },

			methods:{
				register: () => {




					// const headers = {
					// 	'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,

					// }

					window.axios.post(window.api+'home', {
						name:1,
						email:2,
						password:3
					})
					.then({});

				//window.location.href = '/about';



				//e.preventDefault();
				//let name = document.getElementById('name').value;
				//let email = document.getElementById('email').value;
				//let password = document.getElementById('password').value;

				

				// axios.get('http://127.0.0.1:8000/api/home').then((response) => {
				// 	console.log(response.data)
				// })

				// let val = document.getElementById('val').value;

				// if(val == 1){
				// 	localStorage.setItem('val', 1);
				// 	//alert(val);
				// }else if(val == 2){
				// 	localStorage.setItem('val', 2);
				// 	//alert(val);
				// }else{
				// 	localStorage.setItem('val', 3);
				// 	//alert(val);
				// }

				// window.location.href = '';
			},

		},

		mounted: function() {
			//alert(document.querySelector('meta[name="csrf-token"]').content);
			//document.getElementById('csrf').value = document.querySelector('meta[name="csrf-token"]').content;

			//document.querySelector('meta[name="csrf-token"]').content = this.csrf;
			//document.querySelector('input[name="_token"]').value = this.csrf;
		},


	}
</script>
