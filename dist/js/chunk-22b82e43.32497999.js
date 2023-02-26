(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22b82e43"],{"23a7":function(t,e,i){"use strict";i("8e6e"),i("456d");var a=i("75fc"),n=(i("ac6a"),i("7f7f"),i("bd86")),s=i("7618"),o=(i("6762"),i("2fdb"),i("c5f6"),i("5803"),i("2677")),r=i("cc20"),l=i("80d2"),c=i("d9bd"),u=i("d9f7");function d(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function h(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?d(Object(i),!0).forEach((function(e){Object(n["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}e["a"]=o["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"===typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return Object(l["y"])(t).every((function(t){return null!=t&&"object"===Object(s["a"])(t)}))}}},computed:{classes:function(){return h(h({},o["a"].options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var i=e.size,a=void 0===i?0:i;return t+a}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(l["q"])(e,1024===this.base))},internalArrayValue:function(){return Object(l["y"])(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},text:function(){var t=this;return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(e){var i=e.name,a=void 0===i?"":i,n=e.size,s=void 0===n?0:n,o=t.truncateText(a);return t.showSize?"".concat(o," (").concat(Object(l["q"])(s,1024===t.base),")"):o})):[this.placeholder]},base:function(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(c["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.multiple?t:t?[t]:[];Object(l["i"])(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(e,i){return t.$createElement(r["a"],{props:{small:t.smallChips},on:{"click:close":function(){var e=t.internalValue;e.splice(i,1),t.internalValue=e}}},[e])})):[]},genControl:function(){var t=o["a"].options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(u["b"])(t.data.style,{display:"none"})),t},genInput:function(){var t=o["a"].options.methods.genInput.call(this);return t.data.attrs.multiple=this.multiple,delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(i,a){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[a],file:i,index:a}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=o["a"].options.methods.genTextFieldSlot.call(this);return e.data.on=h(h({},e.data.on||{}),{},{click:function(e){e.target&&"LABEL"===e.target.nodeName||t.$refs.input.click()}}),e},onInput:function(t){var e=Object(a["a"])(t.target.files||[]);this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}})},2677:function(t,e,i){"use strict";var a=i("8654");e["a"]=a["a"]},5764:function(t,e,i){"use strict";i("e0f7")},5803:function(t,e,i){},"8adc":function(t,e,i){},"95fa":function(t,e,i){},c470:function(t,e,i){"use strict";i("95fa")},c6ab:function(t,e,i){"use strict";i.r(e);var a=i("2fa4"),n=function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("div",[e("div",{staticClass:"pt-4"},[e("tabs",{attrs:{tabs:t.tabs,currentTab:t.currentTab,"wrapper-class":"body-tabs shadow-tabs","tab-class":"tab-item","tab-active-class":"tab-item-active","line-class":"tab-item-line"},on:{onClick:t.handleClick}})],1),"tab1"===t.currentTab?e("div",{staticClass:"col-md-12"},[e("b-card",{attrs:{"no-body":""},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Upload \n          "),e("b-badge",{attrs:{href:"#",variant:"info",id:"rolePerm",pill:""}},[e("i",{staticClass:"fa fa-question",attrs:{"aria-hidden":"true"}})])]},proxy:!0}],null,!1,2765026431)},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("Upload")],1)])])],1):t._e(),e(a["a"]),"tab2"===t.currentTab?e("div",{staticClass:"col-md-12"},[e("b-card",{staticClass:"mb-3",attrs:{"no-body":""},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Manage\n          "),e("b-badge",{attrs:{href:"#",variant:"info",id:"manageRolePerm",pill:""}},[e("i",{staticClass:"fa fa-question",attrs:{"aria-hidden":"true"}})])]},proxy:!0}],null,!1,3349182844)},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("Manage")],1)])])],1):t._e()],1)])},s=[],o=(i("a481"),i("6ad0")),r=i.n(o),l=i("63d0"),c=i("7496"),u=i("23a7"),d=i("a844"),h=function(){var t=this,e=t._self._c;return e(c["a"],{staticClass:"p-4"},[e("VueElementLoading",{attrs:{active:t.loading,spinner:"line-scale",color:"var(--primary)"}}),e("div",{},[e("h2",{staticClass:"page-title"},[t._v("Record Audio")])]),e("form",{attrs:{enctype:"multipart/form-data"}},[e("div",{staticClass:"row pl-4 pb-2"},[e("div",{staticClass:"pb-5 mt-5 col-md-6 offset-3"},[e("div",{staticClass:"mb-4"},[e("div",{staticClass:"my-5"},[e(u["a"],{attrs:{accept:"audio/wav,audio/ogg,audio/mp3",placeholder:"Pick an audio","prepend-icon":"mdi-music-note-plus",label:"Upload audio"},on:{change:function(e){return t.onFileChange(e)}}})],1)]),e("div",{staticClass:"mx-auto",staticStyle:{width:"fit-content"}},[e("button",{staticClass:"btn btn-primary t mb-5",attrs:{type:"button"},on:{click:function(e){return t.Upload()}}},[t._v("\n            Upload\n          ")])])])])]),e("div",{staticStyle:{"margin-top":"80px"}},[""!=t.text?e(d["a"],{ref:"textarea",attrs:{outlined:"",name:"input-7-4",label:"Field",value:t.text},scopedSlots:t._u([{key:"append-outer",fn:function(){return[e("button",{staticClass:"btn btn-primary btn-lg mt-5",attrs:{type:"button"},on:{click:function(e){return t.getKeyword()}}},[e("span",{attrs:{id:"output_url"}},[e("p",[t._v(" Get KeyWords ")])])])]},proxy:!0}],null,!1,4082012540)}):t._e(),e("div",{ref:"display",staticClass:"display-text",attrs:{id:"display"}}),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"},[0!=this.sentiment.length?e("Barchart",{key:t.refreshKey,attrs:{sentiments:this.sentiment}}):t._e()],1)])],1)],1)},p=[],f=(i("3b2b"),i("ac6a"),i("1fca")),v={props:{sentiments:Array},extends:f["a"],mounted:function(){this.renderChart({labels:["Negative","Neutral","Postive"],datasets:[{label:"Sentiments",backgroundColor:["#FC6E51","#1ABC9C","#8E44AD"],borderColor:["#FC6E51","#1ABC9C","#8E44AD"],data:this.sentiments}]},{type:"bar",responsive:!0,maintainAspectRatio:!1})}},b={data:function(){return{form:{},loading:!1,text:"",filename:{},keywords:[],files:{},id:"",modifiedText:"",sentiment:[],current:{},refreshKey:0,pos:{}}},components:{VueElementLoading:r.a,Barchart:v},computed:{},mounted:function(){},methods:{Upload:function(){var t=this;this.loading=!0;var e={headers:{"content-type":"multipart/form-data"}},i=new FormData;i.append("audio_file",this.files),this.$api.post(this.dynamic_route("service/uploadaudio"),i,e).then((function(e){t.loading=!1,t.text=e.data.audio.text,t.id=e.data.audio.id,t.getSentiment()}))},onFileChange:function(t){this.files=t},getKeyword:function(){var t=this;this.loading=!0;var e=this.text;this.$api.post(this.dynamic_route("service/getkeyword"),{text:encodeURIComponent(e),id:this.id}).then((function(e){t.loading=!1,t.keywords.push(e.data.data.keywords),t.highlightKeywords(),t.POS()})).finally((function(){}))},POS:function(){var t=this;this.loading=!0,this.$api.post(this.dynamic_route("service/pos"),this.keywords).then((function(e){return t.loading=!1,console.log(e.data.res),t.pos=e.data.res,console.log(t.pos)}))},getSentiment:function(){var t=this;this.loading=!0;var e=this.text;this.$api.post(this.dynamic_route("service/sentiment"),{text:encodeURIComponent(e)}).then((function(e){t.loading=!1,t.sentiment[0]=e.data.data.sentiments.negative.replace("%",""),t.sentiment[1]=e.data.data.sentiments.neutral.replace("%",""),t.sentiment[2]=e.data.data.sentiments.positive.replace("%",""),t.refreshKey+=1})).finally((function(){t.loading=!1}))},highlightKeywords:function(){var t=this.$refs.textarea,e=document.getElementById("display"),i=t.value,a=this.keywords,n=i;a.forEach((function(t){t.forEach((function(t){var e=new RegExp("("+t+")","g");n=n.replace(e,"<span onclick=\"getPOS('".concat(t,'\')" class = "text-danger">').concat(t,"</span>"))}))})),e.innerHTML=n}}},g=b,m=(i("5764"),i("2877")),y=Object(m["a"])(g,h,p,!1,null,"7c9f2ab0",null),C=y.exports,x=i("8336"),_=i("b0af"),w=i("99d9"),O=i("a523"),S=i("1f4f"),k=function(){var t=this,e=t._self._c;return e(c["a"],{staticClass:"p-4 mx-0"},[e(_["a"],[e(w["c"],[e(x["a"],{staticClass:"mx-2",attrs:{small:"",color:"#3f50b5",outlined:""},on:{click:function(e){return t.exportToCsv()}}},[e("span",[t._v("Export To Csv")])])],1),e(O["a"],[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e(S["a"],[e("thead",[e("tr",[e("th",{staticClass:"text-left",attrs:{width:"1%"}},[t._v("S/N")]),e("th",{staticClass:"text-left",attrs:{width:"2%"}},[t._v("Audio")]),e("th",{staticClass:"text-left",attrs:{width:"10%"}},[t._v("Text")]),e("th",{staticClass:"text-left",attrs:{width:"4%"}},[t._v("Keywords")])])]),e("tbody",t._l(t.audio,(function(i,a){return e("tr",{key:a},[e("td",[t._v(t._s(a+1))]),e("td",[e("audio",{staticClass:"mt-3",attrs:{controls:""}},[e("source",{attrs:{src:i.audio_file}})])]),e("td",[t.readMoreActivated!==a?e("span",[t._v(t._s(i.text.slice(0,100))+"   ")]):t._e(),t.readMoreActivated!==a?e("a",{attrs:{href:"#"},on:{click:function(e){return t.activateReadMore(a)}}},[t._v("\n                    Read more...\n                  ")]):t._e(),t.readMoreActivated===a?e("span",{domProps:{innerHTML:t._s(i.text)}}):t._e(),t.readMoreActivated===a?e("a",{attrs:{href:"#"},on:{click:t.deactivateReadMore}},[t._v("\n                    Read less...\n                  ")]):t._e()]),e("td",[t._v("\n                 "+t._s(i.keywords)+"\n                ")])])})),0)])],1)])])],1),e("audio",{attrs:{src:""}})],1)},j=[],$=i("369b"),P=i.n($),A={props:["my_model"],components:{VueElementLoading:r.a},data:function(){return{audio:{},audiocsv:[],readMoreActivated:null}},computed:{},methods:{closeMe:function(){this.$bvModal.hide("create")},getAudio:function(){var t=this;this.loading=!0,this.$api.get(this.dynamic_route("service/uploadaudio/getaudio")).then((function(e){t.loading=!1,t.audio=e.data}))},activateReadMore:function(t){this.readMoreActivated=t},deactivateReadMore:function(){this.readMoreActivated=null},getAudiocsv:function(){var t=this;this.loading=!0,this.$api.get(this.dynamic_route("service/uploadaudio/getcsvaudio")).then((function(e){t.loading=!1,t.audiocsv=e.data}))},exportToCsv:function(){var t=P.a.unparse(this.audiocsv),e=document.createElement("a");e.href="data:text/csv;charset=utf-8,"+encodeURI(t),e.download="data.csv",e.click()}},mounted:function(){this.getAudio(),this.getAudiocsv()}},E=A,V=(i("c470"),Object(m["a"])(E,k,j,!1,null,null,null)),B=V.exports,T=[{title:'<span class = "mr-5"><i class="badge badge-pill badge-primary">1</i> Upload.</span> ',value:"tab1",disabled:!1},{title:' <i class="badge badge-pill badge-primary">2</i> Manage Audios',value:"tab2",disabled:!1}],z={props:{},components:{VueElementLoading:r.a,Tabs:l["a"],Upload:C,Manage:B},data:function(){return{heading:"Configuration",subheading:"Configuration.",icon:"pe-7s-lock icon-gradient bg-tempting-azure",tabs:T,currentTab:"tab1"}},methods:{handleClick:function(t){var e=t.replace("tab","");"1"==e&&(this.currentTab=t),"2"==e&&(this.currentTab=t)}}},D=z,M=Object(m["a"])(D,n,s,!1,null,null,null);e["default"]=M.exports},cc20:function(t,e,i){"use strict";i("8e6e"),i("ac6a"),i("456d");var a=i("768b"),n=i("bd86"),s=(i("8adc"),i("58df")),o=i("0789"),r=i("9d26"),l=i("a9ad"),c=i("4e82"),u=i("7560"),d=i("f2e7"),h=i("1c87"),p=i("af2b"),f=i("d9bd");function v(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function b(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?v(Object(i),!0).forEach((function(e){Object(n["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}e["a"]=Object(s["a"])(l["a"],p["a"],h["a"],u["a"],Object(c["a"])("chipGroup"),Object(d["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return b(b(b(b({"v-chip":!0},h["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(h["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var i=Object(a["a"])(e,2),n=i[0],s=i[1];t.$attrs.hasOwnProperty(n)&&Object(f["a"])(n,s,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(r["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(o["b"],t)},genClose:function(){var t=this;return this.$createElement(r["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],i=this.generateRouteLink(),a=i.tag,n=i.data;n.attrs=b(b({},n.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:n.attrs.tabindex}),n.directives.push({name:"show",value:this.active}),n=this.setBackgroundColor(this.color,n);var s=this.textColor||this.outlined&&this.color;return t(a,this.setTextColor(s,n),e)}})},e0f7:function(t,e,i){}}]);