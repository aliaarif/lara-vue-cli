(function(e){function t(t){for(var r,c,i=t[0],s=t[1],u=t[2],p=0,f=[];p<i.length;p++)c=i[p],o[c]&&f.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n"),n("router-link",{attrs:{to:"/about"}},[e._v("About")]),n("router-link",{attrs:{to:"/contact-us"}},[e._v("Contact Us")]),n("router-link",{attrs:{to:"/services"}},[e._v("Services")])],1),n("router-view")],1)},a=[],c=(n("034f"),n("2877")),i={},s=Object(c["a"])(i,o,a,!1,null,null,null),u=s.exports,l=n("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},f=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))])])},v=[],h={name:"HelloWorld",data:function(){return{msg:""}},created:function(){var e=this;fetch("/api/mock").then(function(e){return e.json()}).then(function(t){var n=t.msg;e.msg=n})}},d=h,g=(n("5f43"),Object(c["a"])(d,m,v,!1,null,"5e21abe0",null)),_=g.exports,b={name:"home",components:{HelloWorld:_}},x=b,y=Object(c["a"])(x,p,f,!1,null,null,null),T=y.exports,j=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},O=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("This is an about page")])])}],E={},w=Object(c["a"])(E,j,O,!1,null,null,null),P=w.exports,$=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},k=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"contact"},[n("h1",[e._v("This is an contact page")])])}],A={},C=Object(c["a"])(A,$,k,!1,null,null,null),S=C.exports,H=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},M=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"services"},[n("h1",[e._v("This is an services page")])])}],W={},J=Object(c["a"])(W,H,M,!1,null,null,null),U=J.exports;r["a"].use(l["a"]);var V=new l["a"]({mode:"history",routes:[{path:"/",name:"home",component:T,meta:{title:"Home Page - Example App",metaTags:[{name:"description",content:"The home page of our example app."},{property:"og:description",content:"The home page of our example app."}]}},{path:"/about",name:"about",component:P,meta:{title:"About Page - Example App",metaTags:[{name:"description",content:"The about page of our example app."},{property:"og:description",content:"The about page of our example app."}]}},{path:"/contact-us",name:"contact",component:S,meta:{title:"Contact Page - Example App",metaTags:[{name:"description",content:"The contact page of our example app."},{property:"og:description",content:"The contact page of our example app."}]}},{path:"/services",name:"services",component:U,meta:{title:"Services Page - Example App",metaTags:[{name:"description",content:"The services page of our example app."},{property:"og:description",content:"The services page of our example app."}]}}]});r["a"].config.productionTip=!1,new r["a"]({router:V,render:function(e){return e(u)}}).$mount("#app")},"5f43":function(e,t,n){"use strict";var r=n("9a82"),o=n.n(r);o.a},"64a9":function(e,t,n){},"9a82":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.8edf6aea.js.map