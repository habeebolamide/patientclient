(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a8690f2e"],{1681:function(t,e,n){},"56ef":function(t,e,n){"use strict";n.r(e);var o=n("7496"),a=n("a844"),r=function(){var t=this,e=t._self._c;return e(o["a"],{staticClass:"p-4"},[e("VueElementLoading",{attrs:{active:t.loading,spinner:"line-scale",color:"var(--primary)"}}),e("div",{staticClass:"pb-3",staticStyle:{"border-bottom":"2px solid lightgrey"}},[e("h2",{staticClass:"page-title mb-0"},[t._v("Text Excerpt")])]),e("div",{staticClass:"mt-5"},[e("form",[e(a["a"],{attrs:{placeholder:"Input Text",label:"Upload Text"},scopedSlots:t._u([{key:"append-outer",fn:function(){return[e("button",{staticClass:"btn btn-primary btn-lg mt-5",attrs:{type:"button"},on:{click:function(e){return t.Summarize()}}},[t._v("Go")])]},proxy:!0}]),model:{value:t.form.textuploaded,callback:function(e){t.$set(t.form,"textuploaded",e)},expression:"form.textuploaded"}}),e("div",{staticStyle:{"margin-top":"80px"}},[e(a["a"],{attrs:{outlined:"",name:"input-7-4",label:"Field",value:t.summary},scopedSlots:t._u([{key:"append-outer",fn:function(){return[e("button",{staticClass:"btn btn-primary btn-lg mt-5",attrs:{type:"button"},on:{click:function(e){return t.copyContent()}}},[e("span",{attrs:{id:"output_url"}},[e("span",[t._v("\n                      "+t._s(t.copyTextString)+"\n                  ")])])])]},proxy:!0}])})],1)],1)])],1)},i=[],s=n("6ad0"),u=n.n(s),c={data:function(){return{form:{},loading:!1,summary:"",copyTextString:"Copy"}},components:{VueElementLoading:u.a},computed:{},mounted:function(){},methods:{Summarize:function(){var t=this;this.loading=!0,this.$api.post(this.dynamic_route("service/textexcerpt"),this.form).then((function(e){t.loading=!1,t.summary=e.data.summary.summarizedtext}))},copyContent:function(){var t=document.createElement("textarea");t.value=res.data.summary.summarizedtext,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),this.copyTextString="Copied!"}}},l=c,p=(n("ed38"),n("2877")),d=Object(p["a"])(l,r,i,!1,null,"27a2cfe8",null);e["default"]=d.exports},a844:function(t,e,n){"use strict";n("8e6e"),n("ac6a"),n("456d");var o=n("bd86"),a=(n("c5f6"),n("1681"),n("8654")),r=n("58df");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u=Object(r["a"])(a["a"]);e["a"]=u.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return s({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},a["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(t){var e=this;this.$nextTick((function(){var n;t?e.calculateInputHeight():null===(n=e.$refs.input)||void 0===n||n.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,n=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(n,e)+"px"}},genInput:function(){var t=a["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){a["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},d84b:function(t,e,n){},ed38:function(t,e,n){"use strict";n("d84b")}}]);