(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07930144"],{"52fd":function(t,e,i){"use strict";i("c8aa")},bf83:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header-tab card-header"},[e("div",{staticClass:"float-right text-capitalize actions-icon-btn"},[e("b-dropdown",{attrs:{"toggle-class":"btn-icon btn-icon-only",variant:"link",right:""}},[e("span",{attrs:{slot:"button-content"},slot:"button-content"},[e("i",{staticClass:"fa fa-th"})]),e("div",[e("button",{staticClass:"dropdown-item",attrs:{type:"button",tabindex:"0"},on:{click:function(e){return t.$bvModal.show("creates-service")}}},[e("i",{staticClass:"pe-7s-note icon-gradient bg-grow-early mr-2"}),e("span",[t._v("Create Service")])])])])],1)]),e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"table-responsive"},[""!=t.services?e("table",{staticClass:"table table-bordered table-hover"},[t._m(0),e("tbody",t._l(t.services,(function(i,n){return e("tr",{key:n},[e("td",[t._v(t._s(n+1))]),e("td",[t._v(t._s(i.service_name))]),e("td",[t._v(t._s(i.description))]),e("td",[e("div",{staticClass:"text-capitalize actions-icon-btn"},[e("b-dropdown",{attrs:{"toggle-class":"btn-icon btn-icon-only",variant:"link",right:""}},[e("span",{attrs:{slot:"button-content"},slot:"button-content"},[e("i",{staticClass:"fa fa-th"})]),e("div",[e("button",{staticClass:"dropdown-item",attrs:{type:"button",tabindex:"0"},on:{click:function(e){t.setCurrent(i),t.$bvModal.show("edit-service")}}},[e("i",{staticClass:"pe-7s-note icon-gradient bg-grow-early mr-2"}),e("span",[t._v("Edit Service")])]),e("button",{staticClass:"dropdown-item",attrs:{type:"button",tabindex:"0"},on:{click:function(e){return t.deleteCurrent(i.id)}}},[e("i",{staticClass:"pe-7s-note icon-gradient bg-grow-early mr-2"}),e("span",[t._v("Delete Service")])])])])],1)])])})),0)]):t._e(),""==t.services?e("div",{staticClass:"alert text-center font-weight-bold alert-info"},[t._v("No Record Found")]):t._e()])])])])]),e("b-modal",{attrs:{id:"creates-service",size:"lg","hide-footer":"",title:"Create Service"}},[e("CreateService",{attrs:{my_modal:this.$bvModal},on:{"creates-service":function(e){return t.getServices()}}})],1),e("b-modal",{attrs:{id:"edit-service",size:"lg","hide-footer":"",title:"Edit Service"}},[e("EditService",{attrs:{my_modal:this.$bvModal,currentservice:t.setCurrentService},on:{"edit-service":function(e){return t.getServices()}}})],1)],1)},s=[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("td",[t._v("S/N")]),e("td",[t._v("Service Name")]),e("td",[t._v("Service Description")]),e("td",[t._v("Action")])])])}],r=(i("4506"),i("8654")),a=function(){var t=this,e=t._self._c;return e("div",{},[e("form",{on:{submit:function(e){return e.preventDefault(),t.createService.apply(null,arguments)}}},[e("VueElementLoading",{attrs:{active:t.loading,spinner:"line-scale",color:"var(--primary)"}}),e("div",[e(r["a"],{attrs:{label:"Service Name",rules:t.rules,"hide-details":"auto"},model:{value:t.form.service_name,callback:function(e){t.$set(t.form,"service_name",e)},expression:"form.service_name"}}),e(r["a"],{staticClass:"mt-3",attrs:{label:"Description ","hide-details":"auto"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),e("div",{staticClass:"d-block text-right mt-4"},[e("button",{staticClass:"mr-2 btn btn-link btn-sm",attrs:{type:"button"},on:{click:function(e){return t.closeMe()}}},[t._v("\n      Cancel\n    ")]),e("button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"submit"}},[t._v("\n      Create Service\n    ")])])],1)])},o=[],c=i("6ad0"),l=i.n(c),u={props:{my_modal:Object},data:function(){return{errors:null,loading:!1,form:{},rules:[function(t){return!!t||"Required."},function(t){return t&&t.length>=3||"Min 3 characters"}]}},components:{VueElementLoading:l.a},methods:{createService:function(){var t=this;this.loading="true",this.$api.post(this.dynamic_route("services"),this.form).then((function(){t.loading=!1,t.$emit("creates-service"),t.closeMe(),t.$toast.success("Service Created Successfully!",{position:"top-right",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1})})).catch((function(){t.loading=!1}))},closeMe:function(){this.my_modal.hide("creates-service")}},mounted:function(){}},d=u,v=i("2877"),m=Object(v["a"])(d,a,o,!1,null,null,null),b=m.exports,p=function(){var t=this,e=t._self._c;return e("div",{},[e("form",{on:{submit:function(e){return e.preventDefault(),t.UpdateService.apply(null,arguments)}}},[e("VueElementLoading",{attrs:{active:t.loading,spinner:"line-scale",color:"var(--primary)"}}),e("div",[e(r["a"],{attrs:{label:"Service Name",rules:t.rules,"hide-details":"auto"},model:{value:t.form.service_name,callback:function(e){t.$set(t.form,"service_name",e)},expression:"form.service_name"}}),e(r["a"],{staticClass:"mt-3",attrs:{label:"Description ","hide-details":"auto",rules:t.rules},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),e("div",{staticClass:"d-block text-right mt-4"},[e("button",{staticClass:"mr-2 btn btn-link btn-sm",attrs:{type:"button"},on:{click:function(e){return t.closeMe()}}},[t._v("\n        Cancel\n      ")]),e("button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"submit"}},[t._v("\n        Update Service\n      ")])])],1)])},f=[],h={props:{my_modal:Object,currentservice:Object},data:function(){return{errors:null,loading:!1,form:{service_name:this.currentservice.service_name,description:this.currentservice.description},rules:[function(t){return!!t||"Required."},function(t){return t&&t.length>=3||"Min 3 characters"}]}},components:{VueElementLoading:l.a},methods:{UpdateService:function(){var t=this;this.loading=!0;var e=this.currentservice.id;this.$api.put(this.dynamic_route("services/"+e),this.form).then((function(){t.loading=!1,t.closeMe(),t.$emit("edit-service"),t.$toast.success("Service Updated Successfully!",{position:"top-right",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1})})).catch((function(e){t.loading=!0,alert(e),t.my_modal.show("edit-service")}))},closeMe:function(){this.my_modal.hide("edit-service")}},mounted:function(){}},g=h,_=Object(v["a"])(g,p,f,!1,null,null,null),C=_.exports,y=(i("bc3a"),{data:function(){return{headers:[{text:"S/N",align:"start",sortable:!1,value:""},{text:"Package Name",value:""},{text:"Package Description",value:""}],services:{},data:[],setCurrentService:{}}},components:{CreateService:b,EditService:C},computed:{},methods:{getServices:function(){var t=this;this.$api.get(this.dynamic_route("services")).then((function(e){t.services=e.data.services})).catch((function(t){})).finally((function(){t.loading=!1,t.text=""}))},deleteCurrent:function(t){var e=this;this.$api.delete(this.dynamic_route("services/"+t)).then((function(t){e.$toast.success(t.data.message,{position:"top-right",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1}),e.getServices()})).catch((function(t){})).finally((function(){e.loading=!1}))},setCurrent:function(t){this.setCurrentService=t}},mounted:function(){this.getServices()}}),S=y,k=(i("52fd"),Object(v["a"])(S,n,s,!1,null,"7d76d88a",null));e["default"]=k.exports},c8aa:function(t,e,i){}}]);