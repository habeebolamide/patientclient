(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2af4c88c"],{"1f4f":function(t,e,a){"use strict";a("8e6e"),a("ac6a"),a("456d");var n=a("bd86"),i=(a("c5f6"),a("8b37"),a("80d2")),s=a("7560"),r=a("58df");function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}e["a"]=Object(r["a"])(s["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return l({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(i["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},7211:function(t,e){t.exports=function(t){var e={};function a(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}return a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s="fb15")}({f6fd:function(t,e){(function(t){var e="currentScript",a=t.getElementsByTagName("script");e in t||Object.defineProperty(t,e,{get:function(){try{throw new Error}catch(n){var t,e=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(n.stack)||[!1])[1];for(t in a)if(a[t].src==e||"interactive"==a[t].readyState)return a[t];return null}}})})(document)},fb15:function(t,e,a){"use strict";var n;(a.r(e),"undefined"!==typeof window)&&(a("f6fd"),(n=window.document.currentScript)&&(n=n.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(a.p=n[1]));var i,s,r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("renderless-laravel-vue-pagination",{attrs:{data:t.data,limit:t.limit,"show-disabled":t.showDisabled,size:t.size,align:t.align},on:{"pagination-change-page":t.onPaginationChangePage},scopedSlots:t._u([{key:"default",fn:function(e){e.data,e.limit;var n=e.showDisabled,i=e.size,s=e.align,r=e.computed,o=e.prevButtonEvents,l=e.nextButtonEvents,c=e.pageButtonEvents;return r.total>r.perPage?a("ul",{staticClass:"pagination",class:{"pagination-sm":"small"==i,"pagination-lg":"large"==i,"justify-content-center":"center"==s,"justify-content-end":"right"==s}},[r.prevPageUrl||n?a("li",{staticClass:"page-item pagination-prev-nav",class:{disabled:!r.prevPageUrl}},[a("a",t._g({staticClass:"page-link",attrs:{href:"#","aria-label":"Previous",tabindex:!r.prevPageUrl&&-1}},o),[t._t("prev-nav",[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")]),a("span",{staticClass:"sr-only"},[t._v("Previous")])])],2)]):t._e(),t._l(r.pageRange,(function(e,n){return a("li",{key:n,staticClass:"page-item pagination-page-nav",class:{active:e==r.currentPage}},[a("a",t._g({staticClass:"page-link",attrs:{href:"#"}},c(e)),[t._v("\n                "+t._s(e)+"\n                "),e==r.currentPage?a("span",{staticClass:"sr-only"},[t._v("(current)")]):t._e()])])})),r.nextPageUrl||n?a("li",{staticClass:"page-item pagination-next-nav",class:{disabled:!r.nextPageUrl}},[a("a",t._g({staticClass:"page-link",attrs:{href:"#","aria-label":"Next",tabindex:!r.nextPageUrl&&-1}},l),[t._t("next-nav",[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")]),a("span",{staticClass:"sr-only"},[t._v("Next")])])],2)]):t._e()],2):t._e()}}],null,!0)})},o=[],l={props:{data:{type:Object,default:function(){}},limit:{type:Number,default:0},showDisabled:{type:Boolean,default:!1},size:{type:String,default:"default",validator:function(t){return-1!==["small","default","large"].indexOf(t)}},align:{type:String,default:"left",validator:function(t){return-1!==["left","center","right"].indexOf(t)}}},computed:{isApiResource:function(){return!!this.data.meta},currentPage:function(){return this.isApiResource?this.data.meta.current_page:this.data.current_page},firstPageUrl:function(){return this.isApiResource?this.data.links.first:null},from:function(){return this.isApiResource?this.data.meta.from:this.data.from},lastPage:function(){return this.isApiResource?this.data.meta.last_page:this.data.last_page},lastPageUrl:function(){return this.isApiResource?this.data.links.last:null},nextPageUrl:function(){return this.isApiResource?this.data.links.next:this.data.next_page_url},perPage:function(){return this.isApiResource?this.data.meta.per_page:this.data.per_page},prevPageUrl:function(){return this.isApiResource?this.data.links.prev:this.data.prev_page_url},to:function(){return this.isApiResource?this.data.meta.to:this.data.to},total:function(){return this.isApiResource?this.data.meta.total:this.data.total},pageRange:function(){if(-1===this.limit)return 0;if(0===this.limit)return this.lastPage;for(var t,e=this.currentPage,a=this.lastPage,n=this.limit,i=e-n,s=e+n+1,r=[],o=[],l=1;l<=a;l++)(1===l||l===a||l>=i&&l<s)&&r.push(l);return r.forEach((function(e){t&&(e-t===2?o.push(t+1):e-t!==1&&o.push("...")),o.push(e),t=e})),o}},methods:{previousPage:function(){this.selectPage(this.currentPage-1)},nextPage:function(){this.selectPage(this.currentPage+1)},selectPage:function(t){"..."!==t&&this.$emit("pagination-change-page",t)}},render:function(){var t=this;return this.$scopedSlots.default({data:this.data,limit:this.limit,showDisabled:this.showDisabled,size:this.size,align:this.align,computed:{isApiResource:this.isApiResource,currentPage:this.currentPage,firstPageUrl:this.firstPageUrl,from:this.from,lastPage:this.lastPage,lastPageUrl:this.lastPageUrl,nextPageUrl:this.nextPageUrl,perPage:this.perPage,prevPageUrl:this.prevPageUrl,to:this.to,total:this.total,pageRange:this.pageRange},prevButtonEvents:{click:function(e){e.preventDefault(),t.previousPage()}},nextButtonEvents:{click:function(e){e.preventDefault(),t.nextPage()}},pageButtonEvents:function(e){return{click:function(a){a.preventDefault(),t.selectPage(e)}}}})}},c=l;function u(t,e,a,n,i,s,r,o){var l,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=a,c._compiled=!0),n&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),r?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=l):i&&(l=o?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}var d=u(c,i,s,!1,null,null,null),f=d.exports,p={props:{data:{type:Object,default:function(){}},limit:{type:Number,default:0},showDisabled:{type:Boolean,default:!1},size:{type:String,default:"default",validator:function(t){return-1!==["small","default","large"].indexOf(t)}},align:{type:String,default:"left",validator:function(t){return-1!==["left","center","right"].indexOf(t)}}},methods:{onPaginationChangePage:function(t){this.$emit("pagination-change-page",t)}},components:{RenderlessLaravelVuePagination:f}},g=p,h=u(g,r,o,!1,null,null,null),v=h.exports;e["default"]=v}})["default"]},"731b":function(t,e,a){"use strict";a.r(e);var n=a("8336"),i=a("b0af"),s=a("99d9"),r=a("a523"),o=a("1f4f"),l=a("2fa4"),c=function(){var t=this,e=t._self._c;return e("div",[e(i["a"],{staticClass:"mx-auto"},[e(r["a"],[e(s["c"],[e("div",{staticClass:"font-size-lg text-capitalize font-weight-normal"},[e("i",{staticClass:"fi flaticon-audio mr-3 text-muted opacity-6"}),t._v("\n          Transaction Manager\n        ")]),e(l["a"]),e("div",{attrs:{"data-app":""}})],1),e(s["b"],{staticClass:"text-h5 font-weight-bold"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[""!=t.transactions?e(o["a"],[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("S/N")]),e("th",{staticClass:"text-left"},[t._v("Package Name")]),e("th",{staticClass:"text-left"},[t._v("Amount")]),e("th",{staticClass:"text-left"},[t._v("Expected Amount")]),e("th",{staticClass:"text-left"},[t._v("Status")]),e("th",{staticClass:"text-left"},[t._v("Action")])])]),e("tbody",t._l(t.transactions.data,(function(a,i){return e("tr",{key:i},[e("td",[t._v(t._s(i+1))]),e("td",[t._v(t._s(a.transaction_reference))]),e("td",[e("sup",[t._v("$")]),t._v(t._s(a.amount))]),e("td",[e("sup",[t._v("$")]),t._v(t._s(a.expected_amount))]),e("td",[e("span",{staticClass:"badge text-capitalize py-2 px-2",class:{"bg-success":"success"==a.status,"bg-warning":"pending"==a.status,"bg-danger":"declined"==a.status}},[t._v("\n                      "+t._s(a.status)+"\n                    ")])]),e("td",[e(n["a"],{staticClass:"mx-2",attrs:{small:"",color:"#3f50b5",outlined:""},on:{click:function(e){return t.checkStatus(a.transaction_reference)}}},[t._v("\n                        Check Status\n                    ")])],1)])})),0)]):e("div",{staticClass:"alert alert-primary text-center",attrs:{role:"alert"}},[e("h4",[t._v("No Record Found !!!")])]),e("div",{staticClass:"col-md-12"},[e("laravelVuePagination",{attrs:{data:t.transactions},on:{"pagination-change-page":t.getTransaction}})],1)],1)])])],1)],1)],1)},u=[],d=(a("4506"),a("bc3a"),a("6ad0")),f=a.n(d),p=a("7211"),g=a.n(p),h={data:function(){return{data:[],transactions:{},current:{}}},components:{laravelVuePagination:g.a,VueElementLoading:f.a},computed:{},methods:{getTransaction:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$api.get(this.dynamic_route("transaction/all?page=".concat(e))).then((function(e){t.transactions=e.data})).catch((function(t){})).finally((function(){t.loading=!1,t.text=""}))},checkStatus:function(t){this.$api.get(this.dynamic_route("transaction/payments/".concat(t))).then((function(t){console.log(t)}))}},mounted:function(){this.getTransaction()}},v=h,m=(a("bfd4"),a("2877")),_=Object(m["a"])(v,c,u,!1,null,"08818c38",null);e["default"]=_.exports},"8b37":function(t,e,a){},bfd4:function(t,e,a){"use strict";a("e3a1")},e3a1:function(t,e,a){}}]);