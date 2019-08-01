import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
window.axios = axios

//window.('head'). append( '<meta name="csrf-token" content="{{ csrf_token() }}">' );

//window.axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');


// window.axios.defaults.headers.common = {
// 	'X-Requested-With': 'XMLHttpRequest'
// };

window.api = 'http://127.0.0.1:8000/api/'

//const baseURL = window.App.base_url;
// const headers = {
// 	'X-CSRF-TOKEN'    : window.Laravel.csrfToken,
// 	'X-Requested-With': 'XMLHttpRequest',
// };

// const Parent = axios.create({
// 	headers,
// });



// window.axios.defaults.headers.common = {
// 	'X-Requested-With': 'XMLHttpRequest',
// 	'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
// };

// window.axios.defaults.xsrfHeaderName = "X-CSRFToken"
// window.axios.defaults.xsrfCookieName = 'csrftoken'


router.afterEach((to, from) => {
	Vue.nextTick( () => {
		document.title = to.meta.title ? to.meta.title : 'Default Application Name';
	});
})
new Vue({
	router,
	render: h => h(App)

}).$mount('#app')