(function(t){function e(e){for(var n,s,l=e[0],i=e[1],c=e[2],u=0,m=[];u<l.length;u++)s=l[u],o[s]&&m.push(o[s][0]),o[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);p&&p(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,l=1;l<a.length;l++){var i=a[l];0!==o[i]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},o={app:0},r=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var p=i;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),o=a.n(n);o.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),o=a("bc3a"),r=a.n(o),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("section",{staticClass:"home"},[a("header",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/",href:"javascript:;"}},[t._v("JNU ORM")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavDropdown"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item active"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/",href:"javascript:;"}},[t._v("Home "),a("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/about",href:"javascript:;"}},[t._v("About Us")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/login",href:"javascript:;"}},[t._v("Login")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/register",href:"javascript:;"}},[t._v("Register")])],1),t._m(1)]),t._m(2)])],1)]),a("aside",[t._v("Left Aside")]),a("section",[a("transition",{attrs:{name:"router-anim","enter-active-class":"animated fadeIn"}},[a("router-view")],1)],1),a("aside",[t._v("Right Aside")]),a("footer",[t._v("Footer For Front End")])])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"javascript:;",id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n\t\t\t\t\t\t\t\tDropdown link\n\t\t\t\t\t\t\t")]),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdownMenuLink"}},[a("a",{staticClass:"dropdown-item",attrs:{href:"javascript:;"}},[t._v("Action")]),a("a",{staticClass:"dropdown-item",attrs:{href:"javascript:;"}},[t._v("Another action")]),a("a",{staticClass:"dropdown-item",attrs:{href:"javascript:;"}},[t._v("Something else here")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"form-inline"},[a("input",{staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Search","aria-label":"Search"}}),a("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{type:"submit"}},[t._v("Search")])])}],i={mounted:function(){localStorage.setItem("csrf",Laravel.csrfToken),localStorage.setItem("val",localStorage.getItem("val"))}},c=i,p=(a("034f"),a("2877")),u=Object(p["a"])(c,s,l,!1,null,null,null),m=u.exports,v=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("h1",[t._v(t._s(t.$route.meta.title))])])},f=[],g={name:"home",components:{},mounted:function(){alert(localStorage.getItem("val"))}},h=g,b=Object(p["a"])(h,d,f,!1,null,null,null),_=b.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v(t._s(t.$route.meta.title))])])},x=[],y={},C=Object(p["a"])(y,w,x,!1,null,null,null),E=C.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact"},[a("h1",[t._v(t._s(t.$route.meta.title))])])},j=[],P={},A=Object(p["a"])(P,S,j,!1,null,null,null),$=A.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"services"},[a("h1",[t._v(t._s(t.$route.meta.title))])])},I=[],O={},N=Object(p["a"])(O,k,I,!1,null,null,null),L=N.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("h1",[t._v(t._s(t.$route.meta.title))]),a("form",{on:{submit:t.aaa}},[a("input",{attrs:{type:"text",id:"email"}}),a("input",{attrs:{type:"text",id:"password"}}),a("button",{attrs:{type:"submit"}},[t._v("Login")])])])},M=[],T={name:"login",methods:{aaa:function(t){t.preventDefault();document.getElementById("email").value,document.getElementById("password").value;axios.post("");var e=document.getElementById("val").value;1==e?localStorage.setItem("val",1):2==e?localStorage.setItem("val",2):localStorage.setItem("val",3),window.location.href=""}}},F=T,R=Object(p["a"])(F,D,M,!1,null,null,null),B=R.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"register"},[a("h1",[t._v(t._s(t.$route.meta.title))]),a("form",{attrs:{method:"post"}},[a("input",{attrs:{type:"text",name:"_token",id:"csrf"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.name,expression:"input.name"}],attrs:{type:"text",name:"name",placeholder:"Name"},domProps:{value:t.input.name},on:{input:function(e){e.target.composing||t.$set(t.input,"name",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.email,expression:"input.email"}],attrs:{type:"text",name:"email",placeholder:"Email"},domProps:{value:t.input.email},on:{input:function(e){e.target.composing||t.$set(t.input,"email",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.password,expression:"input.password"}],attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:t.input.password},on:{input:function(e){e.target.composing||t.$set(t.input,"password",e.target.value)}}}),a("button",{attrs:{type:"button"},on:{click:function(e){return t.register()}}},[t._v("Login")])])])},H=[],U={name:"register",data:function(){return{input:{name:"",email:"",password:""},api:api,csrf:localStorage.setItem("csrf",Laravel.csrfToken)}},methods:{register:function(t){axios.post(api+"home",{name:1,email:2,password:3}).then(function(t){console.log(t.data)})}},mounted:function(){document.getElementById("csrf").value=localStorage.getItem("csrf")}},q=U,z=Object(p["a"])(q,J,H,!1,null,null,null),G=z.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"not-found"},[a("h1",[t._v(t._s(t.$route.meta.title))])])},Q=[],V={},W=Object(p["a"])(V,K,Q,!1,null,null,null),X=W.exports;n["a"].use(v["a"]);var Y=localStorage.getItem("user");if(window.axios=r.a,1==Y){Y=localStorage.setItem("user",localStorage.getItem("user"));var Z=[{path:"/",name:"home",component:_,meta:{title:"Home Page - Example App"}},{path:"/about",name:"about",component:E,meta:{title:"About Page - Example App"}},{path:"/contact-us",name:"contact",component:$,meta:{title:"Contact Page - Example App"}},{path:"/services",name:"services",component:L,meta:{title:"Services Page - Example App"}},{path:"/login",name:"login",component:B,meta:{title:"Login Page - Example App"}},{path:"/register",name:"register",component:G,meta:{title:"Register Page - Example App"}},{path:"*",name:"not-found",component:X,meta:{title:"NotFound Page - Example App"}}]}else if(2==Y){Y=localStorage.setItem("user",localStorage.getItem("user"));Z=[{path:"/about",name:"about",component:E,meta:{title:"About Page - Example App"}},{path:"/login",name:"login",component:B,meta:{title:"Login Page - Example App"}},{path:"/register",name:"register",component:G,meta:{title:"Register Page - Example App"}},{path:"*",name:"not-found",component:X,meta:{title:"NotFound Page - Example App"}}]}else{Y=localStorage.setItem("user",localStorage.getItem("user"));Z=[{path:"/contact-us",name:"contact",component:$,meta:{title:"Contact Page - Example App"}},{path:"/login",name:"login",component:B,meta:{title:"Login Page - Example App"}},{path:"/register",name:"register",component:G,meta:{title:"Register Page - Example App"}},{path:"*",name:"not-found",component:X,meta:{title:"NotFound Page - Example App"}}]}var tt=new v["a"]({mode:"history",base:"/",routes:Z});n["a"].config.productionTip=!1,window.axios=r.a,window.api="http://127.0.0.1:8000/api/",tt.afterEach(function(t,e){n["a"].nextTick(function(){document.title=t.meta.title?t.meta.title:"Default Application Name"})}),new n["a"]({router:tt,render:function(t){return t(m)}}).$mount("#app")},"64a9":function(t,e,a){}});
//# sourceMappingURL=app.f10d111a.js.map