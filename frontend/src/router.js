import Vue from 'vue'
import axios from 'axios'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Services from './views/Services.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router);
//Vue.prototype.$axios = axios

var bbb = localStorage.getItem('user')


// define your static routes
window.axios = axios
if(bbb == 1){
  // window.axios.defaults.headers.common = {
  //   'X-Requested-With': 'XMLHttpRequest'
  // };

  bbb = localStorage.setItem('user', localStorage.getItem('user'));
  var route = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Home Page - Example App',

      // metaTags: [
      // {
      //   name: 'description',
      //   content: 'The home page of our example app.'
      // },
      // {
      //   property: 'og:description',
      //   content: 'The home page of our example app.'
      // }
      // ]
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: 'About Page - Example App',
    }
  },
  {
    path: '/contact-us',
    name: 'contact',
    component: Contact,
    meta: {
      title: 'Contact Page - Example App',
    }
  },
  {
    path: '/services',
    name: 'services',
    component: Services,
    meta: {
      title: 'Services Page - Example App',
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: 'Login Page - Example App',
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      title: 'Register Page - Example App',
    }
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound,
    meta: {
      title: 'NotFound Page - Example App',
    }
  }
  ];
}else if(bbb == 2){
  // window.axios.defaults.headers.common = {
  //   'X-Requested-With': 'XMLHttpRequest'
  // };
  bbb = localStorage.setItem('user', localStorage.getItem('user'));
  var route = [
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: 'About Page - Example App',
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: 'Login Page - Example App',
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      title: 'Register Page - Example App',
    }
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound,
    meta: {
      title: 'NotFound Page - Example App',
    }
  }
  ];
}else{
  // window.axios.defaults.headers.common = {
  //   'X-Requested-With': 'XMLHttpRequest'
  // };
  bbb = localStorage.setItem('user', localStorage.getItem('user'));
  var route = [
  {
    path: '/contact-us',
    name: 'contact',
    component: Contact,
    meta: {
      title: 'Contact Page - Example App',
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: 'Login Page - Example App',
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      title: 'Register Page - Example App',
    }
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound,
    meta: {
      title: 'NotFound Page - Example App',
    }
  },
  ];
}









export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: route
})





