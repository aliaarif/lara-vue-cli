(function(t){function a(a){for(var n,o,l=a[0],i=a[1],c=a[2],v=0,p=[];v<l.length;v++)o=l[v],r[o]&&p.push(r[o][0]),r[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(a);while(p.length)p.shift()();return s.push.apply(s,c||[]),e()}function e(){for(var t,a=0;a<s.length;a++){for(var e=s[a],n=!0,l=1;l<e.length;l++){var i=e[l];0!==r[i]&&(n=!1)}n&&(s.splice(a--,1),t=o(o.s=e[0]))}return t}var n={},r={app:0},s=[];function o(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=n,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)o.d(e,n,function(a){return t[a]}.bind(null,n));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=a,l=l.slice();for(var c=0;c<l.length;c++)a(l[c]);var u=i;s.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var n=e("64a9"),r=e.n(n);r.a},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var n=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("section",{staticClass:"home"},[e("header",[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:"/",href:"javascript:;"}},[t._v("JNU ORM")]),t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavDropdown"}},[e("ul",{staticClass:"navbar-nav"},[e("li",{staticClass:"nav-item active"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/",href:"javascript:;"}},[t._v("Home "),e("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/about",href:"javascript:;"}},[t._v("About Us")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/contact-us",href:"javascript:;"}},[t._v("Contact Us")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/services",href:"javascript:;"}},[t._v("Services")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/login",href:"javascript:;"}},[t._v("Login")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/register",href:"javascript:;"}},[t._v("Register")])],1),t._m(1)]),t._m(2)])],1)]),e("aside",[t._v("Left Aside")]),e("section",[e("transition",{attrs:{name:"router-anim","enter-active-class":"animated fadeIn"}},[e("router-view")],1)],1),e("aside",[t._v("Right Aside")]),e("footer",[t._v("Footer For Front End")])])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"javascript:;",id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n\t\t\t\t\t\t\t\tDropdown link\n\t\t\t\t\t\t\t")]),e("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdownMenuLink"}},[e("a",{staticClass:"dropdown-item",attrs:{href:"javascript:;"}},[t._v("Action")]),e("a",{staticClass:"dropdown-item",attrs:{href:"javascript:;"}},[t._v("Another action")]),e("a",{staticClass:"dropdown-item",attrs:{href:"javascript:;"}},[t._v("Something else here")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",{staticClass:"form-inline"},[e("input",{staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Search","aria-label":"Search"}}),e("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{type:"submit"}},[t._v("Search")])])}],o={mounted:function(){localStorage.setItem("val",1)}},l=o,i=(e("034f"),e("2877")),c=Object(i["a"])(l,r,s,!1,null,null,null),u=c.exports,v=e("8c4f"),p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("h1",[t._v(t._s(t.$route.meta.title))])])},m=[],f={name:"home",components:{},mounted:function(){alert(localStorage.getItem("val"))}},d=f,h=Object(i["a"])(d,p,m,!1,null,null,null),b=h.exports,g=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"about"},[e("h1",[t._v(t._s(t.$route.meta.title))])])},_=[],C={},y=Object(i["a"])(C,g,_,!1,null,null,null),j=y.exports,w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"contact"},[e("h1",[t._v(t._s(t.$route.meta.title))])])},x=[],k={},S=Object(i["a"])(k,w,x,!1,null,null,null),E=S.exports,O=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"services"},[e("h1",[t._v(t._s(t.$route.meta.title))])])},$=[],A={},P=Object(i["a"])(A,O,$,!1,null,null,null),I=P.exports,D=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"login"},[e("h1",[t._v(t._s(t.$route.meta.title))]),e("form",{on:{submit:t.aaa}},[e("input",{attrs:{type:"text",id:"val"}}),e("button",{attrs:{type:"submit"}},[t._v("Login")])])])},M=[],L={name:"login",methods:{aaa:function(t){t.preventDefault();var a=document.getElementById("val").value;1==a?localStorage.setItem("val",1):2==a?localStorage.setItem("val",2):localStorage.setItem("val",3)}}},N=L,T=Object(i["a"])(N,D,M,!1,null,null,null),F=T.exports;n["a"].use(v["a"]);var J=new v["a"]({mode:"history",routes:[{path:"/",name:"home",component:b,meta:{title:"Home Page - Example App"}},{path:"/about",name:"about",component:j,meta:{title:"About Page - Example App"}},{path:"/contact-us",name:"contact",component:E,meta:{title:"Contact Page - Example App"}},{path:"/services",name:"services",component:I,meta:{title:"Services Page - Example App"}},{path:"/login",name:"login",component:F,meta:{title:"Login Page - Example App"}}]});alert(localStorage.getItem("val")),n["a"].config.productionTip=!1,new n["a"]({router:J,render:function(t){return t(u)}}).$mount("#app")},"64a9":function(t,a,e){}});
//# sourceMappingURL=app.09a1e803.js.map