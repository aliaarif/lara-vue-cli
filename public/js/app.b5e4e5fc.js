(function(t){function e(e){for(var n,o,s=e[0],i=e[1],c=e[2],m=0,p=[];m<s.length;m++)o=s[m],r[o]&&p.push(r[o][0]),r[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(p.length)p.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],n=!0,s=1;s<a.length;s++){var i=a[s];0!==r[i]&&(n=!1)}n&&(l.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},l=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=i;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("section",{staticClass:"home"},[a("header",[a("nav",{staticClass:"navbar navbar-light",staticStyle:{"background-color":"#e3f2fd"}},[a("div",{staticClass:"nav-wrapper"},[a("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[t._v("Logo")]),t._v(" | \n\t\t\t\t\t\n\t\t\t\t\t"),t._m(0),t._m(1),t._m(2)],1)])]),a("aside",[t._v("Left Aside")]),a("section",[a("router-view")],1),a("aside",[t._v("Right Aside")]),a("footer",[t._v("Footer For Front End")])])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"button-collapse",attrs:{href:"#","data-activates":"mobile-demo"}},[a("i",{staticClass:"mdi-navigation-menu"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"right hide-on-med-and-down"},[a("li",[a("a",{attrs:{href:"login.html"}},[t._v("Login")])]),a("li",[a("a",{attrs:{href:"register.html"}},[t._v("Register")])]),a("li",[a("a",{attrs:{href:"cart.html"}},[t._v("Cart "),a("span",{staticClass:"nav-badge"},[a("span",{staticClass:"new badge"},[t._v("2")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"side-nav",attrs:{id:"mobile-demo"}},[a("li",[a("a",{attrs:{href:"login.html"}},[t._v("Login")])]),a("li",[a("a",{attrs:{href:"register.html"}},[t._v("Register")])]),a("li",[a("a",{attrs:{href:"mobile.html"}},[t._v("Cart"),a("span",{staticClass:"badge new nav-badge"},[t._v("1")])])])])}],o={mounted:function(){localStorage.setItem("val",1)}},s=o,i=a("2877"),c=Object(i["a"])(s,r,l,!1,null,null,null),u=c.exports,m=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("h1",[t._v(t._s(t.$route.meta.title))])])},f=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))])])},d=[],h={name:"HelloWorld",data:function(){return{msg:""}},created:function(){var t=this;fetch("/api/mock").then(function(t){return t.json()}).then(function(e){var a=e.msg;t.msg=a})}},g=h,_=(a("e16a"),Object(i["a"])(g,v,d,!1,null,"6214595a",null)),b=_.exports,x={name:"home",components:{HelloWorld:b}},y=x,C=Object(i["a"])(y,p,f,!1,null,null,null),E=C.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v(t._s(t.$route.meta.title))])])},w=[],O={},$=Object(i["a"])(O,j,w,!1,null,null,null),P=$.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact"},[a("h1",[t._v(t._s(t.$route.meta.title))])])},A=[],k={},H=Object(i["a"])(k,S,A,!1,null,null,null),I=H.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"services"},[a("h1",[t._v(t._s(t.$route.meta.title))])])},W=[],M={},T=Object(i["a"])(M,L,W,!1,null,null,null),F=T.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("h1",[t._v(t._s(t.$route.meta.title))]),n("img",{attrs:{src:a("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}}),n("input",{attrs:{type:"text",id:"val",value:"1"},on:{keyup:t.aaa}})],1)},J=[],B={name:"login",components:{HelloWorld:b},methods:{aaa:function(){var t=document.getElementById("val").value;1==t?(localStorage.setItem("val",1),alert(t)):2==t?(localStorage.setItem("val",2),alert(t)):(localStorage.setItem("val",3),alert(t))}}},D=B,N=Object(i["a"])(D,R,J,!1,null,null,null),V=N.exports;n["a"].use(m["a"]);var Y=new m["a"]({mode:"history",routes:[{path:"/",name:"home",component:E,meta:{title:"Home Page - Example App"}},{path:"/about",name:"about",component:P,meta:{title:"About Page - Example App"}},{path:"/contact-us",name:"contact",component:I,meta:{title:"Contact Page - Example App"}},{path:"/services",name:"services",component:F,meta:{title:"Services Page - Example App"}},{path:"/login",name:"login",component:V,meta:{title:"Login Page - Example App"}}]});n["a"].config.productionTip=!1,Y.afterEach(function(t,e){n["a"].nextTick(function(){document.title=t.meta.title?t.meta.title:"Default Application Name"})}),new n["a"]({router:Y,render:function(t){return t(u)}}).$mount("#app")},"9ac4":function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},e16a:function(t,e,a){"use strict";var n=a("9ac4"),r=a.n(n);r.a}});
//# sourceMappingURL=app.b5e4e5fc.js.map