(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ea95b3a2"],{"0fae":function(t,e,a){},"1f4f":function(t,e,a){"use strict";a("8e6e"),a("ac6a"),a("456d");var s=a("bd86"),i=(a("c5f6"),a("8b37"),a("80d2")),n=a("7560"),c=a("58df");function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){Object(s["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}e["a"]=Object(c["a"])(n["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return r({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(i["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"6a75":function(t,e,a){"use strict";a("0fae")},"8b37":function(t,e,a){},a381:function(t,e,a){"use strict";a.r(e);var s=a("8336"),i=a("b0af"),n=a("99d9"),c=a("a523"),o=a("1f4f"),r=a("2fa4"),l=function(){var t=this,e=t._self._c;return e("div",[e(i["a"],{staticClass:"mx-auto"},[e(c["a"],[e(n["c"],[e("div",{staticClass:"font-size-lg text-capitalize font-weight-normal"},[e("i",{staticClass:"fi flaticon-audio mr-3 text-muted opacity-6"}),t._v("\n          Package Manager\n        ")]),e(r["a"]),e("div",{attrs:{"data-app":""}},[e("CreatePackage",{on:{"creates-package":function(e){return t.getPackages()}}})],1)],1),e(n["b"],{staticClass:"text-h5 font-weight-bold"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[""!=t.packages?e(o["a"],[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("S/N")]),e("th",{staticClass:"text-left"},[t._v("Package Name")]),e("th",{staticClass:"text-left"},[t._v("Package Price")]),e("th",{staticClass:"text-left"},[t._v("Status")]),e("th",{staticClass:"text-left"},[t._v("Action")])])]),e("tbody",t._l(t.packages,(function(a,i){return e("tr",{key:i},[e("td",[t._v(t._s(i+1))]),e("td",[t._v(t._s(a.package_name))]),e("td",[e("sup",[t._v("₦")]),t._v(t._s(a.package_price))]),e("td",[e("span",{staticClass:"badge text-capitalize py-2 px-2",class:{"bg-success":"active"==a.status,"bg-danger":"inactive"==a.status}},[t._v("\n                      "+t._s(a.status)+"\n                    ")])]),e("td",[e("div",{staticClass:"text-capitalize actions-icon-btn"},[e("b-dropdown",{attrs:{"toggle-class":"btn-icon btn-icon-only",variant:"link",right:""}},[e("span",{attrs:{slot:"button-content"},slot:"button-content"},[e("i",{staticClass:"fa fa-th"})]),e("div",[e("EditPackage",{attrs:{package:a},on:{"edit-package":function(e){return t.getPackages()}}}),e(s["a"],{attrs:{type:"button",tabindex:"0",text:""},on:{click:function(e){return t.deleteCurrent(a.id)}}},[e("i",{staticClass:"pe-7s-note icon-gradient bg-grow-early mr-2"}),e("span",[t._v("Delete Package")])]),e("AttachService",{attrs:{package:a},on:{"attach-service":function(e){return t.getPackages()}}})],1)])],1)])])})),0)]):e("div",{staticClass:"alert alert-primary text-center",attrs:{role:"alert"}},[e("h4",[t._v("No Record Found !!!")])])],1)])])],1)],1),e("b-modal",{attrs:{id:"edit-package",size:"md","hide-footer":"",title:"Edit Package"}})],1)},u=[],d=(a("4506"),a("62ad")),g=a("169a"),p=a("132d"),h=a("0fd9"),f=a("b974"),m=a("8654"),v=function(){var t=this,e=t._self._c;return e(g["a"],{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on,n=a.attrs;return[e(s["a"],t._g(t._b({staticClass:"mx-2",attrs:{fab:"",small:"",color:"#3f50b5",outlined:""}},"v-btn",n,!1),i),[e(p["a"],{attrs:{dark:""}},[t._v(" mdi-format-list-bulleted-square ")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(i["a"],[e(n["c"],[e("span",{staticClass:"text-h5"},[t._v("Create Package")])]),e(n["b"],[e(c["a"],[e("div",{},[e("form",[e("VueElementLoading",{attrs:{active:t.loading,spinner:"line-scale",color:"var(--primary)"}}),e(c["a"],[e(h["a"],[e(d["a"],{attrs:{cols:"12"}},[e(m["a"],{attrs:{label:"Package Name",required:""},model:{value:t.form.package_name,callback:function(e){t.$set(t.form,"package_name",e)},expression:"form.package_name"}})],1),e(d["a"],{attrs:{cols:"12"}},[e(m["a"],{attrs:{label:"Price",required:""},model:{value:t.form.package_price,callback:function(e){t.$set(t.form,"package_price",e)},expression:"form.package_price"}})],1),e(d["a"],{attrs:{cols:"12"}},[e(f["a"],{attrs:{items:t.items,label:"Status"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)],1)],1),e(n["a"],[e(r["a"]),e(s["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeMe()}}},[t._v("\n                Close\n              ")]),e(s["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.createPackage()}}},[t._v("\n                Create Package\n              ")])],1)],1)])])],1)],1)],1)},k=[],b=a("6ad0"),_=a.n(b),x={props:{},data:function(){return{errors:null,loading:!1,form:{},dialog:!1,items:["active","inactive"],rules:[function(t){return!!t||"Required."},function(t){return t&&t.length>=3||"Min 3 characters"}]}},components:{VueElementLoading:_.a},methods:{createPackage:function(){var t=this;this.loading=!0,this.$api.post(this.dynamic_route("pacakges"),this.form).then((function(e){201==e.status&&(t.loading=!1,t.$emit("creates-package"),t.closeMe(),t.$toast.success(e.data.message,{position:"top-right",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1}),t.form={})})).catch((function(e){t.loading=!1,t.$toast.error(e.data.message,{position:"top-right",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1})}))},closeMe:function(){this.dialog=!this.dialog}},mounted:function(){}},C=x,O=a("2877"),P=Object(O["a"])(C,v,k,!1,null,"830c5a40",null),y=P.exports,w=function(){var t=this,e=t._self._c;return e(g["a"],{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on,n=a.attrs;return[e(s["a"],t._g(t._b({staticClass:"mx-2",attrs:{color:"blue darken-1",text:""}},"v-btn",n,!1),i),[t._v("\n      Edit Package\n    ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(i["a"],[e(n["c"],[e("span",{staticClass:"text-h5"},[t._v("Edit Package")])]),e(n["b"],[e(c["a"],[e("div",{},[e("form",{on:{submit:function(e){return e.preventDefault(),t.UpdateService.apply(null,arguments)}}},[e("VueElementLoading",{attrs:{active:t.loading,spinner:"line-scale",color:"var(--primary)"}}),e("div",[e(m["a"],{attrs:{label:"Service Name",rules:t.rules,"hide-details":"auto"},model:{value:t.form.package_name,callback:function(e){t.$set(t.form,"package_name",e)},expression:"form.package_name"}}),e(m["a"],{staticClass:"mt-5",attrs:{label:"Price ","hide-details":"auto",rules:t.rules},model:{value:t.form.package_price,callback:function(e){t.$set(t.form,"package_price",e)},expression:"form.package_price"}}),e(f["a"],{staticClass:"mt-5",attrs:{items:t.items,label:"Status"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1),e("div",{staticClass:"d-block text-right mt-4"},[e(s["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeMe()}}},[t._v("\n                Close\n              ")]),e(s["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.UpdatePackage()}}},[t._v("\n                Update Package\n              ")])],1)],1)])])],1)],1)],1)},$=[],j={props:{my_modal:Object,package:Object},data:function(){return{errors:null,loading:!1,form:this.package,dialog:!1,items:["active","inactive"],rules:[function(t){return!!t||"Required."},function(t){return t&&t.length>=3||"Min 3 characters"}]}},components:{VueElementLoading:_.a},methods:{UpdatePackage:function(){var t=this;this.loading=!0,this.$api.put(this.dynamic_route("pacakges/"+this.form.id),this.form).then((function(e){if(1!=e.data.status)return t.loading=!1,t.$emit("edit-package"),t.closeMe(),t.$toast.error(e.data.message,{position:"top-right",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1});t.loading=!1,t.$emit("edit-package"),t.closeMe(),t.$toast.success(e.data.message,{position:"top-right",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1})})).catch((function(e){t.loading=!1}))},closeMe:function(){this.dialog=!this.dialog}},mounted:function(){}},S=j,B=Object(O["a"])(S,w,$,!1,null,null,null),E=B.exports,H=a("ce7e6"),L=a("bd86"),M=function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center"},[e(g["a"],{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on,n=a.attrs;return[e(s["a"],t._g(t._b({staticClass:"mx-2",attrs:{color:"blue darken-1",text:""},on:{click:t.getPackageServices}},"v-btn",n,!1),i),[t._v("\n        Attach Service\n      ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(i["a"],[e("VueElementLoading",{attrs:{active:t.loading,spinner:"line-scale",color:"var(--primary)"}}),e(n["c"],{staticClass:"text-h5 grey lighten-2"},[t._v("\n        Attach Service\n      ")]),e(n["b"],[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("label",{staticClass:"form-check-label",attrs:{for:"flexCheckIndeterminate"}},[t._v("\n              Services:\n            ")]),e("div",{staticClass:"row"},t._l(t.packagewithservice,(function(a,s){return e("div",{key:s,staticClass:"form-check col-md-4 ml-5 mt-3"},["active"==a.status?e("label",{staticClass:"form-check-label",attrs:{for:"flexCheckIndeterminate"+s+1}},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.is_attached,expression:"service.is_attached"}],staticClass:"form-check-input",attrs:{id:"flexCheckIndeterminate"+s+1,type:"checkbox"},domProps:Object(L["a"])({checked:a.is_attached},"checked",Array.isArray(a.is_attached)?t._i(a.is_attached,null)>-1:a.is_attached),on:{change:function(e){var s=a.is_attached,i=e.target,n=!!i.checked;if(Array.isArray(s)){var c=null,o=t._i(s,c);i.checked?o<0&&t.$set(a,"is_attached",s.concat([c])):o>-1&&t.$set(a,"is_attached",s.slice(0,o).concat(s.slice(o+1)))}else t.$set(a,"is_attached",n)}}}),t._v("\n                "+t._s(a.service_name)+"\n              ")]):t._e()])})),0)])])]),e(H["a"]),e(n["a"],[e(s["a"],{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")]),e(r["a"]),e(s["a"],{attrs:{color:"primary",text:""},on:{click:function(e){return t.attachService()}}},[t._v(" Attach ")])],1)],1)],1)],1)},A=[],F={props:{package:Object},data:function(){return{dialog:!1,loading:!1,packagewithservice:[],servicepackage:[],form:{}}},components:{VueElementLoading:_.a},methods:{getPackageServices:function(){var t=this;this.$api.get(this.dynamic_route("services/package_has_service/".concat(this.package.id))).then((function(e){t.packagewithservice=e.data.packagehaservice})).catch((function(t){console.log(t)})).finally((function(){t.loading=!1,t.text=""}))},attachService:function(){var t=this;this.loading=!0,this.$api.post(this.dynamic_route("pacakges/attach-service/".concat(this.form.package_id)),{data:this.packagewithservice}).then((function(e){t.loading=!1,t.closeMe(),t.$toast.success(e.data.message,{position:"top-right",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1})})).catch((function(t){console.log(t)}))},closeMe:function(){this.dialog=!this.dialog}},mounted:function(){this.form.package_id=this.package.id}},N=F,D=Object(O["a"])(N,M,A,!1,null,null,null),V=D.exports,q=(a("bc3a"),{data:function(){return{headers:[{text:"Name",align:"start",sortable:!1,value:"name"},{text:"File",value:"file"},{text:"Duration",value:"duration"},{text:"Timestamp",value:"timestamp"}],data:[],packages:{},current:{}}},components:{CreatePackage:y,EditPackage:E,AttachService:V},computed:{},methods:{getPackages:function(){var t=this;this.$api.get(this.dynamic_route("pacakges")).then((function(e){t.packages=e.data.packages})).catch((function(t){})).finally((function(){t.loading=!1,t.text=""}))},setCurrent:function(t){this.current=t},deleteCurrent:function(t){var e=this;this.$api.delete(this.dynamic_route("pacakges/"+t)).then((function(t){e.$toast.error(t.data.message,{position:"top-right",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1}),e.getPackages()})).catch((function(t){})).finally((function(){e.loading=!1}))}},mounted:function(){this.getPackages()}}),z=q,U=(a("6a75"),Object(O["a"])(z,l,u,!1,null,"5c74088f",null));e["default"]=U.exports}}]);