(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e01da73e"],{1681:function(t,e,a){},1889:function(t,e,a){},"192b":function(t,e,a){"use strict";a.r(e);var n=a("7496"),o=a("b0af"),s=a("99d9"),r=a("a523"),i=a("1f4f"),c=a("a844"),l=function(){var t=this,e=t._self._c;return e(n["a"],{staticClass:"p-4"},[e("VueElementLoading",{attrs:{active:t.loading,spinner:"line-scale",color:"var(--primary)"}}),e("div",{staticClass:"pb-3",staticStyle:{"border-bottom":"2px solid lightgrey"}},[e("h2",{staticClass:"page-title mb-0"},[t._v("Transcript")])]),e("div",{staticClass:"mt-5"},[e("form",[e(c["a"],{attrs:{placeholder:"Input Text",label:"Upload Text"},scopedSlots:t._u([{key:"append-outer",fn:function(){return[e("button",{staticClass:"btn btn-primary btn-lg mt-5",attrs:{type:"button"},on:{click:function(e){return t.POS()}}},[t._v("Go")])]},proxy:!0}]),model:{value:t.form.text,callback:function(e){t.$set(t.form,"text",e)},expression:"form.text"}}),""!=this.pos?e(o["a"],{staticClass:"mx-auto"},[e(r["a"],[e(s["b"],{staticClass:"text-h5 font-weight-bold"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e(i["a"],[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("Part Speech ")]),e("th",{staticClass:"text-left"},[t._v("Words")])])]),e("tbody",t._l(t.pos,(function(a,n){return e("tr",{key:n},[e("td",[t._v(t._s(n))]),e("td",[e("h6",[t._v("\n                          "+t._s(a)+"\n                        ")])])])})),0)])],1)])])],1)],1):t._e()],1)])],1)},u=[],p=a("6ad0"),h=a.n(p),d={data:function(){return{form:{},pos:"",loading:!1}},components:{VueElementLoading:h.a},computed:{},mounted:function(){},methods:{POS:function(){var t=this;this.loading=!0,this.$api.post(this.dynamic_route("service/pos"),this.form).then((function(e){return t.loading=!1,t.pos=e.data.res,console.log(t.pos)}))}}},f=d,b=(a("c16b"),a("2877")),g=Object(b["a"])(f,l,u,!1,null,"6cc4c08b",null);e["default"]=g.exports},"1f4f":function(t,e,a){"use strict";a("8e6e"),a("ac6a"),a("456d");var n=a("bd86"),o=(a("c5f6"),a("8b37"),a("80d2")),s=a("7560"),r=a("58df");function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}e["a"]=Object(r["a"])(s["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return c({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(o["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"8b37":function(t,e,a){},a844:function(t,e,a){"use strict";a("8e6e"),a("ac6a"),a("456d");var n=a("bd86"),o=(a("c5f6"),a("1681"),a("8654")),s=a("58df");function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var c=Object(s["a"])(o["a"]);e["a"]=c.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return i({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},o["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(t){var e=this;this.$nextTick((function(){var a;t?e.calculateInputHeight():null===(a=e.$refs.input)||void 0===a||a.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=o["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){o["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},c16b:function(t,e,a){"use strict";a("1889")}}]);