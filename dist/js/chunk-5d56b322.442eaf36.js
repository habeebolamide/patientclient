(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d56b322"],{"1f4f":function(t,e,s){"use strict";s("8e6e"),s("ac6a"),s("456d");var a=s("bd86"),i=(s("c5f6"),s("8b37"),s("80d2")),r=s("7560"),o=s("58df");function n(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function c(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?n(Object(s),!0).forEach((function(e){Object(a["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}e["a"]=Object(o["a"])(r["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return c({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(i["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"672e":function(t,e,s){"use strict";s("6c6d")},"6c6d":function(t,e,s){},"8b37":function(t,e,s){},bf83:function(t,e,s){"use strict";s.r(e);var a=s("8336"),i=s("b0af"),r=s("99d9"),o=s("a523"),n=s("0fd9"),c=s("1f4f"),l=s("2fa4"),u=function(){var t=this,e=t._self._c;return e("div",[e(i["a"],{staticClass:"mx-auto",attrs:{"max-height":"auto"}},[e(o["a"],[e(r["c"],[e("div",{staticClass:"font-size-lg text-capitalize font-weight-normal"},[e("i",{staticClass:"fi flaticon-audio mr-3 text-muted opacity-6"}),t._v("\n          Service Manager\n        ")]),e(l["a"]),e("div",{attrs:{"data-app":""}},[e(n["a"],{attrs:{justify:"center"}},[e("CreateService",{on:{"creates-service":function(e){return t.getServices()}}})],1)],1)],1),e(r["b"],{staticClass:"text-h5 font-weight-bold"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[""!=t.services?e(c["a"],[e("thead",[e("tr",[e("th",[t._v("S/N")]),e("th",[t._v("Service Name")]),e("th",[t._v("Service Description")]),e("th",[t._v("Status")]),e("th",[t._v("Action")])])]),e("tbody",t._l(t.services,(function(s,i){return e("tr",{key:i},[e("td",[t._v(t._s(i+1))]),e("td",[t._v(t._s(s.service_name))]),e("td",[t._v(t._s(s.description))]),e("td",[e("span",{staticClass:"badge text-capitalize py-2 px-2",class:{"bg-success":"active"==s.status,"bg-danger":"inactive"==s.status}},[t._v("\n                    "+t._s(s.status)+"\n                  ")])]),e("td",[e("div",{staticClass:"text-capitalize actions-icon-btn"},[e("b-dropdown",{attrs:{"toggle-class":"btn-icon btn-icon-only",variant:"link",right:""}},[e("span",{attrs:{slot:"button-content"},slot:"button-content"},[e("i",{staticClass:"fa fa-th"})]),e("div",[e("EditService",{attrs:{currentservice:s},on:{"edit-service":function(e){return t.getServices()}}}),e(a["a"],{attrs:{tabindex:"0",color:"blue darken-1",text:""},on:{click:function(e){return t.deleteCurrent(s.id)}}},[e("i",{staticClass:"pe-7s-note icon-gradient bg-grow-early mr-2"}),e("span",[t._v("Delete Service")])])],1)])],1)])])})),0)]):e("div",{staticClass:"alert alert-primary text-center mt-5",attrs:{role:"alert"}},[e("h4",[t._v("No Record Found !!!")])])],1)])])],1)],1),e("b-modal",{attrs:{id:"edit-service",size:"lg","hide-footer":"",title:"Edit Service"}},[e("EditService",{attrs:{my_modal:this.$bvModal,currentservice:t.setCurrentService},on:{"edit-service":function(e){return t.getServices()}}})],1)],1)},d=[],v=(s("4506"),s("62ad")),f=s("169a"),p=s("132d"),m=s("b974"),g=s("8654"),h=function(){var t=this,e=t._self._c;return e(f["a"],{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(s){var i=s.on,r=s.attrs;return[e(a["a"],t._g(t._b({staticClass:"mx-2",attrs:{fab:"",small:"",color:"#3f50b5",outlined:""}},"v-btn",r,!1),i),[e(p["a"],{attrs:{dark:""}},[t._v(" mdi-format-list-bulleted-square ")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(i["a"],[e(r["c"],[e("span",{staticClass:"text-h5"},[t._v("Create Service")])]),e(r["b"],[e(o["a"],[e("div",{},[e("form",[e("VueElementLoading",{attrs:{active:t.loading,spinner:"line-scale",color:"var(--primary)"}}),e(o["a"],[e(n["a"],[e(v["a"],{attrs:{cols:"12"}},[e(g["a"],{attrs:{label:"Service Name",required:""},model:{value:t.form.service_name,callback:function(e){t.$set(t.form,"service_name",e)},expression:"form.service_name"}})],1),e(v["a"],{attrs:{cols:"12"}},[e(g["a"],{attrs:{label:"Service Description",type:"text",required:""},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),e(v["a"],{attrs:{cols:"12"}},[e(m["a"],{attrs:{items:t.items,label:"Status"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)],1)],1),e(r["a"],[e(l["a"]),e(a["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeMe()}}},[t._v("\n                Close\n              ")]),e(a["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.createService()}}},[t._v("\n                Create Service\n              ")])],1)],1)])])],1)],1)],1)},b=[],_=(s("ea7f"),s("6ad0")),O=s.n(_),x={props:{my_modal:Object},data:function(){return{errors:null,loading:!1,form:{},dialog:!1,items:["active","inactive"],rules:[function(t){return!!t||"Required."},function(t){return t&&t.length>=3||"Min 3 characters"}]}},components:{VueElementLoading:O.a},methods:{createService:function(){var t=this;this.loading=!0,this.$api.post(this.dynamic_route("services"),this.form).then((function(e){201==e.status?(t.loading=!1,t.closeMe(),t.$emit("creates-service"),t.$toast.success(e.data.message,{position:"top-right",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1}),t.form={}):(t.loading=!1,t.toggleModal(),t.$toast.success(e.data.message,{position:"top-right",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1}),t.$emit("creates-service"))})).catch((function(e){t.loading=!1}))},closeMe:function(){this.dialog=!this.dialog}},mounted:function(){}},C=x,S=s("2877"),k=Object(S["a"])(C,h,b,!1,null,null,null),y=k.exports,$=function(){var t=this,e=t._self._c;return e(f["a"],{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(s){var i=s.on,r=s.attrs;return[e(a["a"],t._g(t._b({staticClass:"mx-2",attrs:{color:"blue darken-1",text:""}},"v-btn",r,!1),i),[t._v(" Edit Service ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(i["a"],[e(r["c"],[e("span",{staticClass:"text-h5"},[t._v("Edit Service")])]),e(r["b"],[e(o["a"],[e("div",{},[e("form",{on:{submit:function(e){return e.preventDefault(),t.UpdateService.apply(null,arguments)}}},[e("VueElementLoading",{attrs:{active:t.loading,spinner:"line-scale",color:"var(--primary)"}}),e("div",[e(g["a"],{attrs:{label:"Service Name",rules:t.rules,"hide-details":"auto"},model:{value:t.form.service_name,callback:function(e){t.$set(t.form,"service_name",e)},expression:"form.service_name"}}),e(g["a"],{staticClass:"mt-5",attrs:{label:"Description ","hide-details":"auto",rules:t.rules},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}}),e(m["a"],{staticClass:"mt-5",attrs:{items:t.items,label:"Status"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1),e("div",{staticClass:"d-block text-right mt-4"},[e(a["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeMe()}}},[t._v("\n                Close\n              ")]),e(a["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.UpdateService()}}},[t._v("\n                Update Service\n              ")])],1)],1)])])],1)],1)],1)},w=[],P={props:{my_modal:Object,currentservice:Object},data:function(){return{errors:null,loading:!1,items:["active","inactive"],form:this.currentservice,dialog:!1,rules:[function(t){return!!t||"Required."}]}},components:{VueElementLoading:O.a},methods:{UpdateService:function(){var t=this;this.loading=!0,this.$api.put(this.dynamic_route("services/"+this.form.id),this.form).then((function(e){if(console.log(e),e.data.status)t.loading=!1,t.closeMe(),t.$emit("edit-service"),t.$toast.success(e.data.message,{position:"top-right",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1});else if(!e.data.status)return console.log(e),t.loading=!1,t.closeMe(),t.$emit("edit-service"),t.$toast.error(e.data.message,{position:"top-right",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1})})).catch((function(e){t.loading=!0,t.closeMe()}))},closeMe:function(){this.dialog=!this.dialog}},mounted:function(){}},j=P,B=Object(S["a"])(j,$,w,!1,null,null,null),H=B.exports,E=(s("bc3a"),{data:function(){return{headers:[{text:"S/N",align:"start",sortable:!1,value:""},{text:"Package Name",value:""},{text:"Package Description",value:""}],services:{},data:[],setCurrentService:{}}},components:{CreateService:y,EditService:H},computed:{},methods:{closeDialog:function(){this.$emit("input")},getServices:function(){var t=this;this.$api.get(this.dynamic_route("services")).then((function(e){t.services=e.data.services})).catch((function(t){})).finally((function(){t.loading=!1,t.text=""}))},deleteCurrent:function(t){var e=this;this.$api.delete(this.dynamic_route("services/"+t)).then((function(t){e.$toast.success(t.data.message,{position:"top-right",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1}),e.getServices()})).catch((function(t){e.$toast.error(t.data.message,{position:"top-right",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1})})).finally((function(){e.loading=!1}))},setCurrent:function(t){this.setCurrentService=t}},mounted:function(){this.getServices()}}),M=E,D=(s("672e"),Object(S["a"])(M,u,d,!1,null,"dddec8d0",null));e["default"]=D.exports}}]);