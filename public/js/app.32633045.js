(function(t){function a(a){for(var n,i,l=a[0],o=a[1],c=a[2],v=0,u=[];v<l.length;v++)i=l[v],s[i]&&u.push(s[i][0]),s[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);d&&d(a);while(u.length)u.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],n=!0,l=1;l<e.length;l++){var o=e[l];0!==s[o]&&(n=!1)}n&&(r.splice(a--,1),t=i(i.s=e[0]))}return t}var n={},s={app:0},r=[];function i(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=n,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)i.d(e,n,function(a){return t[a]}.bind(null,n));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=a,l=l.slice();for(var c=0;c<l.length;c++)a(l[c]);var d=o;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var n=e("64a9"),s=e.n(n);s.a},"199c":function(t,a){var e=document.getElementById("myChart");new Chart(e,{type:"line",data:{labels:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],datasets:[{data:[15339,21345,18483,24003,23489,24092,12034],lineTension:0,backgroundColor:"transparent",borderColor:"#007bff",borderWidth:4,pointBackgroundColor:"#007bff"}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!1}}]},legend:{display:!1}}})},"23be":function(t,a,e){"use strict";var n=e("199c"),s=e.n(n);a["default"]=s.a},"3dfd":function(t,a,e){"use strict";var n=e("e81a"),s=e("23be"),r=(e("034f"),e("2877")),i=Object(r["a"])(s["default"],n["a"],n["b"],!1,null,null,null);a["default"]=i.exports},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var n=e("2b0e"),s=e("3dfd"),r=e("8c4f"),i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"home"},[n("h1",[t._v(t._s(t.$route.meta.title))]),n("img",{attrs:{src:e("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},l=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.msg))])])},c=[],d={name:"HelloWorld",data:function(){return{msg:""}},created:function(){var t=this;fetch("/api/mock").then(function(t){return t.json()}).then(function(a){var e=a.msg;t.msg=e})}},v=d,u=(e("5f43"),e("2877")),_=Object(u["a"])(v,o,c,!1,null,"5e21abe0",null),f=_.exports,p={name:"home",components:{HelloWorld:f}},m=p,h=Object(u["a"])(m,i,l,!1,null,null,null),b=h.exports,C=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"about"},[e("h1",[t._v("This is an about page")])])}],y={},x=Object(u["a"])(y,C,g,!1,null,null,null),k=x.exports,w=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"contact"},[e("h1",[t._v("This is an contact page")])])}],E={},S=Object(u["a"])(E,w,j,!1,null,null,null),O=S.exports,P=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"services"},[e("h1",[t._v("This is an services page")])])}],T={},A=Object(u["a"])(T,P,$,!1,null,null,null),H=A.exports;n["a"].use(r["a"]);var M=new r["a"]({mode:"history",routes:[{path:"/",name:"home",component:b,meta:{title:"Home Page - Example App"}},{path:"/about",name:"about",component:k,meta:{title:"About Page - Example App"}},{path:"/contact-us",name:"contact",component:O,meta:{title:"Contact Page - Example App"}},{path:"/services",name:"services",component:H,meta:{title:"Services Page - Example App"}}]});n["a"].config.productionTip=!1,M.afterEach(function(t,a){n["a"].nextTick(function(){document.title=t.meta.title?t.meta.title:"Default Application Name"})}),new n["a"]({router:M,render:function(t){return t(s["default"])}}).$mount("#app")},"5f43":function(t,a,e){"use strict";var n=e("9a82"),s=e.n(n);s.a},"64a9":function(t,a,e){},"9a82":function(t,a,e){},cf05:function(t,a,e){t.exports=e.p+"img/logo.82b9c7a5.png"},e81a:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"nav"}},[e("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n"),e("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" |\n"),e("router-link",{attrs:{to:"/contact-us"}},[t._v("Contact Us")]),t._v(" |\n"),e("router-link",{attrs:{to:"/services"}},[t._v("Services")])],1),t._m(0),t._m(1),e("router-view")],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0"},[e("a",{staticClass:"navbar-brand col-sm-3 col-md-2 mr-0",attrs:{href:"#"}},[t._v("Company name")]),e("input",{staticClass:"form-control form-control-dark w-100",attrs:{type:"text",placeholder:"Search","aria-label":"Search"}}),e("ul",{staticClass:"navbar-nav px-3"},[e("li",{staticClass:"nav-item text-nowrap"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Sign out")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("nav",{staticClass:"col-md-2 d-none d-md-block bg-light sidebar"},[e("div",{staticClass:"sidebar-sticky"},[e("ul",{staticClass:"nav flex-column"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link active",attrs:{href:"#"}},[e("span",{attrs:{"data-feather":"home"}}),t._v("\nDashboard "),e("span",{staticClass:"sr-only"},[t._v("(current)")])])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[e("span",{attrs:{"data-feather":"file"}}),t._v("\nOrders\n")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[e("span",{attrs:{"data-feather":"shopping-cart"}}),t._v("\nProducts\n")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[e("span",{attrs:{"data-feather":"users"}}),t._v("\nCustomers\n")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[e("span",{attrs:{"data-feather":"bar-chart-2"}}),t._v("\nReports\n")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[e("span",{attrs:{"data-feather":"layers"}}),t._v("\nIntegrations\n")])])]),e("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[e("span",[t._v("Saved reports")]),e("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}},[e("span",{attrs:{"data-feather":"plus-circle"}})])]),e("ul",{staticClass:"nav flex-column mb-2"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[e("span",{attrs:{"data-feather":"file-text"}}),t._v("\nCurrent month\n")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[e("span",{attrs:{"data-feather":"file-text"}}),t._v("\nLast quarter\n")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[e("span",{attrs:{"data-feather":"file-text"}}),t._v("\nSocial engagement\n")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[e("span",{attrs:{"data-feather":"file-text"}}),t._v("\nYear-end sale\n")])])])])]),e("main",{staticClass:"col-md-9 ml-sm-auto col-lg-10 pt-3 px-4",attrs:{role:"main"}},[e("div",{staticClass:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom"},[e("h1",{staticClass:"h2"},[t._v("Dashboard")]),e("div",{staticClass:"btn-toolbar mb-2 mb-md-0"},[e("div",{staticClass:"btn-group mr-2"},[e("button",{staticClass:"btn btn-sm btn-outline-secondary"},[t._v("Share")]),e("button",{staticClass:"btn btn-sm btn-outline-secondary"},[t._v("Export")])]),e("button",{staticClass:"btn btn-sm btn-outline-secondary dropdown-toggle"},[e("span",{attrs:{"data-feather":"calendar"}}),t._v("\nThis week\n")])])]),e("canvas",{staticClass:"my-4",attrs:{id:"myChart",width:"900",height:"380"}}),e("h2",[t._v("Section title")]),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-striped table-sm"},[e("thead",[e("tr",[e("th",[t._v("#")]),e("th",[t._v("Header")]),e("th",[t._v("Header")]),e("th",[t._v("Header")]),e("th",[t._v("Header")])])]),e("tbody",[e("tr",[e("td",[t._v("1,001")]),e("td",[t._v("Lorem")]),e("td",[t._v("ipsum")]),e("td",[t._v("dolor")]),e("td",[t._v("sit")])]),e("tr",[e("td",[t._v("1,002")]),e("td",[t._v("amet")]),e("td",[t._v("consectetur")]),e("td",[t._v("adipiscing")]),e("td",[t._v("elit")])]),e("tr",[e("td",[t._v("1,003")]),e("td",[t._v("Integer")]),e("td",[t._v("nec")]),e("td",[t._v("odio")]),e("td",[t._v("Praesent")])]),e("tr",[e("td",[t._v("1,003")]),e("td",[t._v("libero")]),e("td",[t._v("Sed")]),e("td",[t._v("cursus")]),e("td",[t._v("ante")])]),e("tr",[e("td",[t._v("1,004")]),e("td",[t._v("dapibus")]),e("td",[t._v("diam")]),e("td",[t._v("Sed")]),e("td",[t._v("nisi")])]),e("tr",[e("td",[t._v("1,005")]),e("td",[t._v("Nulla")]),e("td",[t._v("quis")]),e("td",[t._v("sem")]),e("td",[t._v("at")])]),e("tr",[e("td",[t._v("1,006")]),e("td",[t._v("nibh")]),e("td",[t._v("elementum")]),e("td",[t._v("imperdiet")]),e("td",[t._v("Duis")])]),e("tr",[e("td",[t._v("1,007")]),e("td",[t._v("sagittis")]),e("td",[t._v("ipsum")]),e("td",[t._v("Praesent")]),e("td",[t._v("mauris")])]),e("tr",[e("td",[t._v("1,008")]),e("td",[t._v("Fusce")]),e("td",[t._v("nec")]),e("td",[t._v("tellus")]),e("td",[t._v("sed")])]),e("tr",[e("td",[t._v("1,009")]),e("td",[t._v("augue")]),e("td",[t._v("semper")]),e("td",[t._v("porta")]),e("td",[t._v("Mauris")])]),e("tr",[e("td",[t._v("1,010")]),e("td",[t._v("massa")]),e("td",[t._v("Vestibulum")]),e("td",[t._v("lacinia")]),e("td",[t._v("arcu")])]),e("tr",[e("td",[t._v("1,011")]),e("td",[t._v("eget")]),e("td",[t._v("nulla")]),e("td",[t._v("Class")]),e("td",[t._v("aptent")])]),e("tr",[e("td",[t._v("1,012")]),e("td",[t._v("taciti")]),e("td",[t._v("sociosqu")]),e("td",[t._v("ad")]),e("td",[t._v("litora")])]),e("tr",[e("td",[t._v("1,013")]),e("td",[t._v("torquent")]),e("td",[t._v("per")]),e("td",[t._v("conubia")]),e("td",[t._v("nostra")])]),e("tr",[e("td",[t._v("1,014")]),e("td",[t._v("per")]),e("td",[t._v("inceptos")]),e("td",[t._v("himenaeos")]),e("td",[t._v("Curabitur")])]),e("tr",[e("td",[t._v("1,015")]),e("td",[t._v("sodales")]),e("td",[t._v("ligula")]),e("td",[t._v("in")]),e("td",[t._v("libero")])])])])])])])])}];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return s})}});
//# sourceMappingURL=app.32633045.js.map