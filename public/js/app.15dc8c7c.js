(function(t){function e(e){for(var n,l,s=e[0],i=e[1],c=e[2],p=0,m=[];p<s.length;p++)l=s[p],r[l]&&m.push(r[l][0]),r[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var i=a[s];0!==r[i]&&(n=!1)}n&&(o.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},r={app:0},o=[];function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=i;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=a("bc3a"),o=a.n(r),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("section",{staticClass:"home"},[a("header",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/",href:"javascript:;"}},[t._v("JNU ORM")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavDropdown"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item active"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/",href:"javascript:;"}},[t._v("Home "),a("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/about",href:"javascript:;"}},[t._v("About Us")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/login",href:"javascript:;"}},[t._v("Login")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/register",href:"javascript:;"}},[t._v("Register")])],1),t._m(1)]),t._m(2)])],1)]),a("aside",[t._v("Left Aside")]),a("section",[a("transition",{attrs:{name:"router-anim","enter-active-class":"animated fadeIn"}},[a("router-view")],1)],1),a("aside",[t._v("Right Aside")]),a("footer",[t._v("Footer For Front End")])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"javascript:;",id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n\t\t\t\t\t\t\t\tDropdown link\n\t\t\t\t\t\t\t")]),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdownMenuLink"}},[a("a",{staticClass:"dropdown-item",attrs:{href:"javascript:;"}},[t._v("Action")]),a("a",{staticClass:"dropdown-item",attrs:{href:"javascript:;"}},[t._v("Another action")]),a("a",{staticClass:"dropdown-item",attrs:{href:"javascript:;"}},[t._v("Something else here")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"form-inline"},[a("input",{staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Search","aria-label":"Search"}}),a("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{type:"submit"}},[t._v("Search")])])}],i={mounted:function(){localStorage.setItem("val",localStorage.getItem("val"))}},c=i,u=(a("034f"),a("2877")),p=Object(u["a"])(c,l,s,!1,null,null,null),m=p.exports,v=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("h1",[t._v(t._s(t.$route.meta.title))])])},g=[],f={name:"home",components:{},mounted:function(){alert(localStorage.getItem("val"))}},h=f,b=Object(u["a"])(h,d,g,!1,null,null,null),_=b.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v(t._s(t.$route.meta.title))])])},w=[],y={},E=Object(u["a"])(y,x,w,!1,null,null,null),C=E.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact"},[a("h1",[t._v(t._s(t.$route.meta.title))])])},j=[],I={},A=Object(u["a"])(I,S,j,!1,null,null,null),P=A.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"services"},[a("h1",[t._v(t._s(t.$route.meta.title))])])},O=[],k={},D=Object(u["a"])(k,$,O,!1,null,null,null),L=D.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("h1",[t._v(t._s(t.$route.meta.title))]),a("form",{on:{submit:t.aaa}},[a("input",{attrs:{type:"text",id:"email"}}),a("input",{attrs:{type:"text",id:"password"}}),a("button",{attrs:{type:"submit"}},[t._v("Login")])])])},B=[],M={name:"login",methods:{aaa:function(t){t.preventDefault();document.getElementById("email").value,document.getElementById("password").value;axios.post("");var e=document.getElementById("val").value;1==e?localStorage.setItem("val",1):2==e?localStorage.setItem("val",2):localStorage.setItem("val",3),window.location.href=""}}},R=M,F=Object(u["a"])(R,N,B,!1,null,null,null),T=F.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"register"},[a("h1",[t._v(t._s(t.$route.meta.title))]),a("form",{on:{submit:t.register}},[a("input",{attrs:{type:"text",id:"name"}}),a("input",{attrs:{type:"text",id:"email"}}),a("input",{attrs:{type:"text",id:"password"}}),a("button",{attrs:{type:"submit"}},[t._v("Register")])])])},H=[],U={name:"register",methods:{register:function(t){t.preventDefault();document.getElementById("name").value,document.getElementById("email").value,document.getElementById("password").value;axios.get("http://127.0.0.1:8000/api/home").then(function(t){console.log(t.data)});var e=document.getElementById("val").value;1==e?localStorage.setItem("val",1):2==e?localStorage.setItem("val",2):localStorage.setItem("val",3),window.location.href=""}}},q=U,z=Object(u["a"])(q,J,H,!1,null,null,null),G=z.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"not-found"},[a("h1",[t._v(t._s(t.$route.meta.title))])])},Q=[],V={},W=Object(u["a"])(V,K,Q,!1,null,null,null),X=W.exports;n["a"].use(v["a"]);var Y=localStorage.getItem("user");if(1==Y){Y=localStorage.setItem("user",localStorage.getItem("user"));var Z=[{path:"/",name:"home",component:_,meta:{title:"Home Page - Example App"}},{path:"/about",name:"about",component:C,meta:{title:"About Page - Example App"}},{path:"/contact-us",name:"contact",component:P,meta:{title:"Contact Page - Example App"}},{path:"/services",name:"services",component:L,meta:{title:"Services Page - Example App"}},{path:"/login",name:"login",component:T,meta:{title:"Login Page - Example App"}},{path:"/register",name:"register",component:G,meta:{title:"Register Page - Example App"}},{path:"*",name:"not-found",component:X,meta:{title:"NotFound Page - Example App"}}]}else if(2==Y){Y=localStorage.setItem("user",localStorage.getItem("user"));Z=[{path:"/about",name:"about",component:C,meta:{title:"About Page - Example App"}},{path:"/login",name:"login",component:T,meta:{title:"Login Page - Example App"}},{path:"/register",name:"register",component:G,meta:{title:"Register Page - Example App"}},{path:"*",name:"not-found",component:X,meta:{title:"NotFound Page - Example App"}}]}else{Y=localStorage.setItem("user",localStorage.getItem("user"));Z=[{path:"/contact-us",name:"contact",component:P,meta:{title:"Contact Page - Example App"}},{path:"/login",name:"login",component:T,meta:{title:"Login Page - Example App"}},{path:"/register",name:"register",component:G,meta:{title:"Register Page - Example App"}},{path:"*",name:"not-found",component:X,meta:{title:"NotFound Page - Example App"}}]}var tt=new v["a"]({mode:"history",base:"/",routes:Z});n["a"].config.productionTip=!1,window.axios=o.a,window.api="http://127.0.0.1:8000/api/",tt.afterEach(function(t,e){n["a"].nextTick(function(){document.title=t.meta.title?t.meta.title:"Default Application Name"})}),new n["a"]({router:tt,render:function(t){return t(m)}}).$mount("#app")},"64a9":function(t,e,a){}});
//# sourceMappingURL=app.15dc8c7c.js.map