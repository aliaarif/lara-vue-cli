<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
</style>
<template>
	<div id="app">
		<section class="home">
			<header>
				<nav class="navbar navbar-expand-lg navbar-light bg-light">
					<router-link to="/" class="navbar-brand" href="javascript:;">JNU ORM</router-link>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarNavDropdown">
						<ul class="navbar-nav">
							<li class="nav-item active">
								<router-link to="/" class="nav-link" href="javascript:;">Home <span class="sr-only">(current)</span></router-link>
							</li>
							<li class="nav-item">
								<router-link to="/about" class="nav-link" href="javascript:;">About Us</router-link>
							</li>
							
							<li class="nav-item">
								<router-link to="/login"  class="nav-link" href="javascript:;">Login</router-link>
							</li>
							<li class="nav-item">
								<router-link to="/register"  class="nav-link" href="javascript:;">Register</router-link>
							</li>

							


							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle" href="javascript:;" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Dropdown link
								</a>
								<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<a class="dropdown-item" href="javascript:;">Action</a>
									<a class="dropdown-item" href="javascript:;">Another action</a>
									<a class="dropdown-item" href="javascript:;">Something else here</a>
								</div>
							</li>
						</ul>
						<form class="form-inline">
							<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
							<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
						</form>
					</div>

					

				</nav>
			</header>
			<aside>Left Aside</aside>
			<section>
				<transition name="router-anim" enter-active-class="animated fadeIn">
					<router-view/>
				</transition>
			</section>
			<aside>Right Aside</aside>
			<footer>Footer For Front End</footer>
		</section>


	</div>
</template>

<script src="../node_modules/jquery/dist/jquery.min.js"></script>
<script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="../node_modules/axios/dist/axios.min.js"></script>
<script>


	export default {
		mounted() {
			//localStorage.setItem('csrf', Laravel.csrfToken);
			localStorage.setItem('val', localStorage.getItem('val'));
		}
	}

	
</script>


