(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b9869b6"],{"0c18":function(t,e,a){},"23a7":function(t,e,a){"use strict";a("8e6e"),a("456d");var s=a("75fc"),n=(a("ac6a"),a("7f7f"),a("bd86")),o=a("7618"),i=(a("6762"),a("2fdb"),a("c5f6"),a("5803"),a("2677")),r=a("cc20"),l=a("80d2"),c=a("d9bd"),u=a("d9f7");function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}e["a"]=i["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"===typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return Object(l["y"])(t).every((function(t){return null!=t&&"object"===Object(o["a"])(t)}))}}},computed:{classes:function(){return p(p({},i["a"].options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var a=e.size,s=void 0===a?0:a;return t+s}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(l["q"])(e,1024===this.base))},internalArrayValue:function(){return Object(l["y"])(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},text:function(){var t=this;return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(e){var a=e.name,s=void 0===a?"":a,n=e.size,o=void 0===n?0:n,i=t.truncateText(s);return t.showSize?"".concat(i," (").concat(Object(l["q"])(o,1024===t.base),")"):i})):[this.placeholder]},base:function(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(c["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.multiple?t:t?[t]:[];Object(l["i"])(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(e,a){return t.$createElement(r["a"],{props:{small:t.smallChips},on:{"click:close":function(){var e=t.internalValue;e.splice(a,1),t.internalValue=e}}},[e])})):[]},genControl:function(){var t=i["a"].options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(u["b"])(t.data.style,{display:"none"})),t},genInput:function(){var t=i["a"].options.methods.genInput.call(this);return t.data.attrs.multiple=this.multiple,delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(a,s){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[s],file:a,index:s}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=i["a"].options.methods.genTextFieldSlot.call(this);return e.data.on=p(p({},e.data.on||{}),{},{click:function(e){e.target&&"LABEL"===e.target.nodeName||t.$refs.input.click()}}),e},onInput:function(t){var e=Object(s["a"])(t.target.files||[]);this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}})},2677:function(t,e,a){"use strict";var s=a("8654");e["a"]=s["a"]},5803:function(t,e,a){},"61ce":function(t,e,a){"use strict";a("8ee6")},"61d5":function(t,e,a){"use strict";a("c2ea")},"811e":function(t,e,a){"use strict";a.r(e);var s=a("7496"),n=a("8336"),o=a("b0af"),i=a("99d9"),r=a("62ad"),l=a("169a"),c=a("0fd9"),u=a("2fa4"),d=a("8654"),p=a("a844"),h=function(){var t=this,e=t._self._c;return e(s["a"],{staticClass:"p-4"},[e("h2",{staticClass:"page-title mb-0"},[t._v("Settings")]),e("b-row",{staticClass:"mt-4"},[e("b-col",[e("Widget",{attrs:{title:"",customHeader:""}},[e("h5",{staticClass:"d-inline-block"},[t._v("Manage  "),e("span",{staticClass:"fw-semi-bold"},[t._v("Settings")])]),e("VueElementLoading",{attrs:{active:t.loading,spinner:"bar-fade-scale",color:"var(--primary)",text:"Loading..",duration:"0.6"}}),e("div",{staticClass:"mt-3"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row bg-isnfo"},[e("div",{staticClass:"border-right col-md-9 col-12"},[e(c["a"],[e(r["a"],{attrs:{cols:"12",md:"6"}},[e(d["a"],{attrs:{label:"Name",placeholder:"Placeholder",outlined:""}})],1),e(r["a"],{attrs:{cols:"12",md:"6"}},[e(d["a"],{attrs:{label:"Display Name",placeholder:"Placeholder",outlined:""}})],1),e(r["a"],{attrs:{cols:"12",md:"12"}},[e(d["a"],{attrs:{label:"Email",placeholder:"Placeholder",outlined:""}})],1),e(r["a"],{attrs:{cols:"12",md:"6"}},[e(d["a"],{attrs:{label:"Role",placeholder:"Placeholder",outlined:""}})],1),e(r["a"],{attrs:{cols:"12",md:"6"}},[e(d["a"],{attrs:{label:"Address ",placeholder:"Placeholder",outlined:""}})],1),e(r["a"],{attrs:{cols:"12",sm:"12"}},[e(p["a"],{attrs:{outlined:"",name:"input-7-4",label:"Bio. ",value:"Lorem ipsum dolor sit amt"}})],1),e(r["a"],{staticClass:"text-center",attrs:{cols:"12",sm:"6"}},[e("button",{staticClass:"btn btn-lg btn-block btn-outline-danger"},[t._v("Cancel")])]),e(r["a"],{staticClass:"text-center",attrs:{cols:"12",sm:"6"}},[e("button",{staticClass:"btn btn-lg btn-block btn-outline-success"},[t._v("Save")])])],1)],1)])])])]),e("div",{staticClass:"col-md-12"},[e("laravelVuePagination",{attrs:{data:t.properties},on:{"pagination-change-page":t.fetchData}})],1)],1)],1)],1),e("b-modal",{staticStyle:{background:"white"},attrs:{size:"lg",title:"Create Property",id:"create","hide-footer":""}},[e("create",{attrs:{my_model:t.$bvModal,auth_token:t.authToken},on:{submitted:function(e){return t.fetchData()}}})],1),e("b-modal",{staticStyle:{background:"white"},attrs:{size:"lg",title:"View Property",id:"view","hide-footer":""}},[e("viewModal",{attrs:{my_model:t.$bvModal,data:t.current}})],1),e("b-modal",{staticStyle:{background:"white"},attrs:{size:"lg",title:"Edit Property",id:"edit","hide-footer":""}},[e("edit",{attrs:{my_model:t.$bvModal,data:t.current,auth_token:t.authToken},on:{updated:function(e){return t.fetchData()}}})],1),e(l["a"],{attrs:{"max-width":"390"},model:{value:t.openConfirm,callback:function(e){t.openConfirm=e},expression:"openConfirm"}},[e(o["a"],[e(i["c"],{staticClass:"text-h5"},[t._v("\n            Change property status to "+t._s(t.dynamic_status)+"\n            ")]),e(i["b"],[t._v("\n            Are you sure you want to perform this operation ?\n            ")]),e(i["a"],[e(u["a"]),e(n["a"],{attrs:{color:" darken-1",text:""},on:{click:function(e){t.openConfirm=!1}}},[t._v("\n                No, exit\n            ")]),e(n["a"],{attrs:{color:"primary darken-1",text:""},on:{click:function(e){t.toggle_status(t.status_id,t.dynamic_status),t.openConfirm=!1}}},[t._v("\n                Yes, continue\n            ")])],1)],1)],1),e(l["a"],{attrs:{"max-width":"390"},model:{value:t.openConfirm2,callback:function(e){t.openConfirm2=e},expression:"openConfirm2"}},[e(o["a"],[e(i["c"],{staticClass:"text-h5"},[t._v("\n            Delete property\n            ")]),e(i["b"],[t._v("\n            Are you sure you want to perform this operation ?\n            ")]),e(i["a"],[e(u["a"]),e(n["a"],{attrs:{color:" darken-1",text:""},on:{click:function(e){t.openConfirm2=!1}}},[t._v("\n                No, exit\n            ")]),e(n["a"],{attrs:{color:"primary darken-1",text:""},on:{click:function(e){t.deleteProperty(t.del_id),t.openConfirm2=!1}}},[t._v("\n                Yes, continue\n            ")])],1)],1)],1)],1)},f=[],m=a("4506"),b=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),g=(a("6762"),a("2fdb"),a("0c18"),a("10d2")),v=a("afdd"),y=a("9d26"),C=a("f2e7"),_=a("7560"),O=a("2b0e"),x=O["default"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),k=a("58df"),S=a("d9bd");function $(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function w(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?$(Object(a),!0).forEach((function(e){Object(b["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):$(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var B=Object(k["a"])(g["a"],C["a"],x).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(b["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(v["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(y["a"],{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(y["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=w(w({},g["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||_["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(S["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}}),P=a("a523"),j=a("23a7"),E=a("b974"),D=(a("7f7f"),function(){var t=this,e=t._self._c;return e(s["a"],{staticClass:"p-4 mx-0"},[e("div",{staticClass:"_body"},[e("h2",{staticClass:"page-title"},[t._v("Create Product")]),e("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.save.apply(null,arguments)}}},[e("div",{staticClass:"row",staticStyle:{"margin-bottom":"100px"}},[e("div",{staticClass:"col-md-6 mb-2",staticStyle:{"margin-bottom":"50px"}},[e("div",{staticClass:"card border-0",staticStyle:{height:"auto"}},[e("div",{staticClass:"card-header py-3 custom-bg"},[e("h5",[e("strong",[t._v("General")])])]),e("div",{staticClass:"card-body"},[e("VueElementLoading",{attrs:{active:t.loading,spinner:"bar-fade-scale",color:"var(--primary)",text:"Loading..",duration:"0.6"}}),e(i["b"],[e(P["a"],{staticClass:"px-0"},[e(c["a"],[e(r["a"],{attrs:{cols:"12",sm:"6",md:"6"}},[e(d["a"],{attrs:{label:"Name*",rules:t.nameRules,required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),e(r["a"],{attrs:{cols:"12",sm:"6",md:"6"}},[e(E["a"],{attrs:{items:["active","inactive"],label:"Status*",rules:t.statusRules},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1),e(r["a"],{attrs:{cols:"12",sm:"6",md:"6"}},[e(d["a"],{attrs:{label:"Category*",rules:t.nameRules,required:""},model:{value:t.form.category,callback:function(e){t.$set(t.form,"category",e)},expression:"form.category"}})],1),e(r["a"],{attrs:{cols:"12",sm:"6",md:"6"}},[e(d["a"],{attrs:{label:"Quantity*",rules:t.nameRules,type:"number",required:""},model:{value:t.form.quantity,callback:function(e){t.$set(t.form,"quantity",e)},expression:"form.quantity"}})],1),e(r["a"],{attrs:{cols:"12",sm:"4",md:"4"}},[e(d["a"],{attrs:{label:"General Price*",rules:t.nameRules,type:"number",required:""},model:{value:t.form.gprice,callback:function(e){t.$set(t.form,"gprice",e)},expression:"form.gprice"}})],1),e(r["a"],[e(d["a"],{attrs:{label:"Product Sale Price*",rules:t.nameRules,type:"number",required:""},model:{value:t.form.psprice,callback:function(e){t.$set(t.form,"psprice",e)},expression:"form.psprice"}})],1),e(r["a"],{attrs:{cols:"12",sm:"12",md:"12"}},[e("quillEditor",{ref:"myQuillEditor",staticStyle:{height:"200px"},attrs:{options:t.editorOption,required:""},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)],1)],1)],1)],1)])]),e("div",{staticClass:"col-md-6 mb-2"},[e("div",{staticClass:"card border-0 shadow-sm"},[e("div",{staticClass:"card-header py-3 custom-bg"},[e("h5",[e("strong",[t._v("Product Image")])])]),e("div",{staticClass:"card-body"},[e(B,{attrs:{outlined:"",type:"warning",prominent:"",border:"left"}},[t._v("\n                            Supported file formats are . "+t._s(t.fileFormats.join("*"))+"\n                        ")]),t.errorImage?e(B,{staticClass:"mb-3",attrs:{type:"error"}},[t._v("\n                         Invalid image format uploaded\n                        ")]):t._e(),e("div",{staticClass:"row"},t._l(t.images,(function(t,a){return e("div",{key:a,staticClass:"col-md-4"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("img",{staticStyle:{width:"100%"},attrs:{src:t.src}})])])])})),0),e(j["a"],{attrs:{"show-size":"",counter:"",multiple:"",label:"File input"},on:{change:t.handleImage},model:{value:t.files,callback:function(e){t.files=e},expression:"files"}})],1)])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"text-center col-md-4 mb-2"},[e("button",{staticClass:"btn btn-outline-secondary btn-lg btn-block",attrs:{text:""}},[t._v("\n                        Back\n                    ")])]),e("div",{staticClass:"text-center col-md-4 mb-2"},[e("button",{staticClass:"btn-outline-primary btn btn-lg btn-block",attrs:{text:""}},[t._v("\n                        Cancel\n                    ")])]),e("div",{staticClass:"text-center col-md-4 mb-2"},[e("button",{staticClass:"btn btn-outline-success btn-lg btn-block",attrs:{type:"submit",disabled:t.errorImage}},[t._v("\n                        Save\n                    ")])])])])])])}),z=[],V=(a("8096"),a("953d")),L=a("6ad0"),I=a.n(L),q=a("bc3a"),T=a.n(q),A={props:["my_model","auth_token"],components:{quillEditor:V["quillEditor"],VueElementLoading:I.a},data:function(){return{loading:!1,dialog_modal:this.dialog,nameRules:[function(t){return!!t||"This is a required field"}],statusRules:[function(t){return!!t||"Status is required"}],editorOption:{debug:"info",placeholder:"Contents..",readOnly:!0,theme:"snow"},delta:void 0,form:{},files:[],images:[],fileFormats:["image/jpg","image/png","image/jpeg","image/gif"],errorImage:!1}},watch:{"form.description":function(){this.delta=this.$refs.myQuillEditor.quill.getContents()}},methods:{closeMe:function(){this.$bvModal.hide("create")},handleImage:function(){var t=this;console.log(this.files);for(var e=function(e){var a=t.fileFormats.some((function(a){return a==t.files[e].type}));if(!a)return t.errorImage=!0,"break";var s={file:t.files[e],src:URL.createObjectURL(t.files[e])};t.errorImage=!1,t.images.push(s)},a=0;a<this.files.length;a++){var s=e(a);if("break"===s)break}},save:function(){var t=this;this.loading=!0,T.a.post(this.dynamic_route("/properties/create"),this.form,{headers:{authorization:"Bearer ".concat(this.auth_token)}}).then((function(){t.loading=!1,delete t.form.name,delete t.form.status,delete t.form.description,t.closeMe(),t.$emit("submitted"),t.$toast.success("Added successfully successfully!",{position:"top-center",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1})})).catch((function(e){if(t.loading=!1,401==e.response.status&&"Unauthorized"==e.response.statusText)return t.logoutUser();t.$toast.error(e.response.data.data,{position:"top-center",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1})})).finally((function(){t.loading=!1}))}}},H=A,M=(a("61d5"),a("2877")),F=Object(M["a"])(H,D,z,!1,null,null,null),R=F.exports,U=function(){var t=this,e=t._self._c;return e("div",{staticClass:"_body"},[e("form",{attrs:{action:""}},[e(i["b"],{staticClass:"_body"},[e(P["a"],{staticClass:"px-0"},[e(c["a"],[e(r["a"],{attrs:{cols:"12",sm:"6",md:"6"}},[e(d["a"],{attrs:{label:"Name*",disabled:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),e(r["a"],{attrs:{cols:"12",sm:"6",md:"6"}},[e(E["a"],{attrs:{items:["active","inactive"],label:"Status*",disabled:""},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1),e(r["a"],{attrs:{cols:"12",sm:"12",md:"12"}},[e("div",{staticStyle:{height:"400px"},domProps:{innerHTML:t._s(t.form.description)}})])],1)],1)],1),e(i["a"],{staticStyle:{"margin-top":"100px"}},[e(u["a"]),e("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.closeMe()}}},[t._v("\n                Cancel\n            ")])],1)],1)])},N=[],Q={props:["my_model","data"],data:function(){return{form:this.data}},methods:{closeMe:function(){this.$bvModal.hide("view")}}},W=Q,G=Object(M["a"])(W,U,N,!1,null,null,null),J=G.exports,Y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"_body"},[e("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.update.apply(null,arguments)}}},[e("VueElementLoading",{attrs:{active:t.loading,spinner:"bar-fade-scale",color:"var(--primary)",text:"Loading..",duration:"0.6"}}),e(i["b"],{staticClass:"_body"},[e(P["a"],{staticClass:"px-0"},[e(c["a"],[e(r["a"],{attrs:{cols:"12",sm:"6",md:"6"}},[e(d["a"],{attrs:{label:"Name*",rules:t.nameRules,required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),e(r["a"],{attrs:{cols:"12",sm:"6",md:"6"}},[e(E["a"],{attrs:{items:["active","inactive"],label:"Status*",rules:t.statusRules},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1),e(r["a"],{attrs:{cols:"12",sm:"12",md:"12"}},[e("quillEditor",{ref:"myQuillEditor",staticStyle:{height:"150px"},attrs:{options:t.editorOption,required:""},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)],1)],1)],1),e(i["a"],{staticStyle:{"margin-top":"100px"}},[e(u["a"]),e(n["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeMe()}}},[t._v("\n                Close\n            ")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("\n                Update\n            ")])],1)],1)])},K=[],X={props:["my_model","data","auth_token"],components:{quillEditor:V["quillEditor"],VueElementLoading:I.a},data:function(){return{form:this.data,nameRules:[function(t){return!!t||"Name is required"}],statusRules:[function(t){return!!t||"Status is required"}],editorOption:{debug:"info",placeholder:"Contents..",readOnly:!0,theme:"snow"},delta:void 0,loading:!1}},watch:{"form.description":function(){this.delta=this.$refs.myQuillEditor.quill.getContents()}},methods:{closeMe:function(){this.$bvModal.hide("edit")},update:function(){var t=this;this.loading=!0,T.a.post(this.dynamic_route("/properties/update/".concat(this.form.id)),this.form,{headers:{authorization:"Bearer ".concat(this.auth_token)}}).then((function(){t.loading=!1,t.closeMe(),t.$emit("updated"),t.$toast.success("Updated successfully successfully!",{position:"top-center",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1})})).catch((function(e){if(t.loading=!1,401==e.response.status&&"Unauthorized"==e.response.statusText)return t.logoutUser();t.$toast.error("An error occurred, try again later!",{position:"top-center",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1})})).finally((function(){t.loading=!1}))}}},Z=X,tt=Object(M["a"])(Z,Y,K,!1,null,null,null),et=tt.exports,at=a("7211"),st=a.n(at),nt={components:{Widget:m["a"],create:R,edit:et,viewModal:J,VueElementLoading:I.a,laravelVuePagination:st.a},data:function(){return{status_id:0,del_id:0,dynamic_status:"",openConfirm:!1,openConfirm2:!1,dialog:!1,current:{},properties:{data:[]},filters:{},loading:!1,isDialogVisible:!1,closeOnContentClick:!0,authToken:""}},computed:{},mounted:function(){},methods:{pass_current:function(t){this.current=t},fetchData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.loading=!0,T.a.post(this.dynamic_route("/properties/all?page"+e),{filters:this.filters},{headers:{authorization:"Bearer ".concat(this.authToken)}}).then((function(e){t.loading=!1,t.properties=e.data.data,t.loading=!1})).catch((function(e){if(401==e.response.status&&"Unauthorized"==e.response.statusText)return t.logoutUser()})).finally((function(){t.loading=!1}))},toggle_status:function(t,e){var a=this;this.loading=!0,T.a.put(this.dynamic_route("/properties/toggle-status/".concat(t)),{id:t,status:e},{headers:{authorization:"Bearer ".concat(this.authToken)}}).then((function(){a.fetchData(),a.$toast.success("Status updated successfully!",{position:"top-center",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1})})).catch((function(t){if(a.loading=!1,401==t.response.status&&"Unauthorized"==t.response.statusText)return a.logoutUser();a.$toast.error("An error occurred please try again!",{position:"top-center",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1})})).finally((function(){a.loading=!1}))},deleteProperty:function(t){var e=this;this.loading=!0,T.a.delete(this.dynamic_route("/properties/".concat(t)),{headers:{authorization:"Bearer ".concat(this.authToken)}}).then((function(){e.fetchData(),e.$toast.success("Deleted successfully!",{position:"top-center",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1})})).catch((function(t){return e.loading=!1,401==t.response.status&&"Unauthorized"==t.response.statusText?e.logoutUser():500==t.response.status?e.$toast.error("Unable to delete property  it has been used in many places!",{position:"top-center",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1}):void 0})).finally((function(){e.loading=!1}))},linkPage:function(){this.$router.push({name:"CreateProduct"})}}},ot=nt,it=(a("61ce"),Object(M["a"])(ot,h,f,!1,null,"68cb5226",null));e["default"]=it.exports},"8ee6":function(t,e,a){},afdd:function(t,e,a){"use strict";var s=a("8336");e["a"]=s["a"]},c2ea:function(t,e,a){}}]);