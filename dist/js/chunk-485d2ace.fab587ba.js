(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-485d2ace"],{"0c84":function(t,a,e){"use strict";e.r(a);var n=e("2fa4"),i=function(){var t=this,a=t._self._c;return a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("div",[a("div",{staticClass:"pt-4"},[a("tabs",{attrs:{tabs:t.tabs,currentTab:t.currentTab,"wrapper-class":"body-tabs shadow-tabs","tab-class":"tab-item","tab-active-class":"tab-item-active","line-class":"tab-item-line"},on:{onClick:t.handleClick}})],1),"tab1"===t.currentTab?a("div",{staticClass:"col-md-12"},[a("b-card",{attrs:{"no-body":""},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Upload \n          "),a("b-badge",{attrs:{href:"#",variant:"info",id:"rolePerm",pill:""}},[a("i",{staticClass:"fa fa-question",attrs:{"aria-hidden":"true"}})])]},proxy:!0}],null,!1,2765026431)},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("Upload")],1)])])],1):t._e(),a(n["a"]),"tab2"===t.currentTab?a("div",{staticClass:"col-md-12"},[a("b-card",{staticClass:"mb-3",attrs:{"no-body":""},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Manage\n          "),a("b-badge",{attrs:{href:"#",variant:"info",id:"manageRolePerm",pill:""}},[a("i",{staticClass:"fa fa-question",attrs:{"aria-hidden":"true"}})])]},proxy:!0}],null,!1,3349182844)},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("Manage")],1)])])],1):t._e()],1)])},o=[],s=(e("a481"),e("6ad0")),r=e.n(s),c=e("63d0"),l=e("7496"),d=e("a844"),u=function(){var t=this,a=t._self._c;return a(l["a"],{staticClass:"p-4"},[a("VueElementLoading",{attrs:{active:t.loading,spinner:"line-scale",color:"var(--primary)"}}),a("div",{staticClass:"pb-3",staticStyle:{"border-bottom":"2px solid lightgrey"}},[a("h2",{staticClass:"page-title mb-0"},[t._v("Paraphrase")]),a("Export",{attrs:{text:this.form.text},on:{"export-text":t.handleExportText}})],1),a("div",{staticClass:"mt-5"},[a("form",[a(d["a"],{attrs:{placeholder:"Input Text",label:"Upload Text",outlined:""},scopedSlots:t._u([{key:"append-outer",fn:function(){return[a("button",{staticClass:"btn btn-primary btn-lg mt-5",attrs:{type:"button"},on:{click:function(a){return t.Paraphrase()}}},[t._v("Go")])]},proxy:!0}]),model:{value:t.form.text,callback:function(a){t.$set(t.form,"text",a)},expression:"form.text"}}),a("div",{staticStyle:{"margin-top":"80px"}},[""!=t.paraphrase?a(d["a"],{attrs:{outlined:"",name:"input-7-4",label:"Field",value:t.paraphrase},scopedSlots:t._u([{key:"append-outer",fn:function(){return[a("button",{staticClass:"btn btn-primary btn-lg mt-5",attrs:{type:"button"},on:{click:function(a){return t.copyContent()}}},[a("span",{attrs:{id:"output_url"}},[t._v("\n                      "+t._s(t.copyTextString)+"\n              ")])])]},proxy:!0}],null,!1,1874228036)}):t._e()],1)],1)])],1)},p=[],h=e("66c4"),v={data:function(){return{form:{text:""},paraphrase:"",loading:!1,copyTextString:"Copy"}},components:{VueElementLoading:r.a,Export:h["a"]},computed:{},mounted:function(){},methods:{Paraphrase:function(){var t=this;this.loading=!0,this.$api.post(this.dynamic_route("service/paraphrase"),this.form).then((function(a){t.loading=!1,t.paraphrase=a.data.paraphrase.paraphrase}))},copyContent:function(){var t=document.createElement("textarea");t.value=this.paraphrase,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),this.copyTextString="Copied!"},handleExportText:function(t){this.form.text="hi",this.form.text=t.text}}},f=v,g=(e("db6b"),e("2877")),m=Object(g["a"])(f,u,p,!1,null,"0a4cbe1c",null),b=m.exports,x=e("8336"),_=e("b0af"),y=e("99d9"),C=e("a523"),M=e("1f4f"),k=function(){var t=this,a=t._self._c;return a(l["a"],{staticClass:"p-4 mx-0"},[a(_["a"],[a("VueElementLoading",{attrs:{active:t.loading,spinner:"line-scale",color:"var(--primary)"}}),a(y["c"],[a(x["a"],{staticClass:"mx-2",attrs:{small:"",color:"#3f50b5",outlined:""},on:{click:function(a){return t.exportToCsv()}}},[a("span",[t._v("Export To Csv")])])],1),a(C["a"],[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a(M["a"],[a("thead",[a("tr",[a("th",{staticClass:"text-left",attrs:{width:"10%"}},[t._v("S/N")]),a("th",{staticClass:"text-left",attrs:{width:"45%"}},[t._v("Uploaded Text")]),a("th",{staticClass:"text-left",attrs:{width:"45%"}},[t._v("Paraphrase")])])]),a("tbody",t._l(t.text.data,(function(e,n){return a("tr",{key:n},[a("td",{attrs:{width:"1%"}},[t._v(t._s(n+1))]),a("td",{attrs:{width:"30%"}},[t.readMoreActivated!==n?a("span",[t._v(t._s(e.text.slice(0,100))+"\n                  ")]):t._e(),t.readMoreActivated!==n?a("a",{attrs:{href:"#"},on:{click:function(a){return t.activateReadMore(n)}}},[t._v("\n                    Read more...\n                  ")]):t._e(),t.readMoreActivated===n?a("span",{domProps:{innerHTML:t._s(e.text)}}):t._e(),t.readMoreActivated===n?a("a",{attrs:{href:"#"},on:{click:t.deactivateReadMore}},[t._v("\n                    Read less...\n                  ")]):t._e()]),a("td",{attrs:{widgh:"50%"}},[t.readMore!==n?a("span",[t._v(t._s(e.paraphrase.slice(0,50))+"\n                  ")]):t._e(),t.readMore!==n?a("a",{attrs:{href:"#"},on:{click:function(a){return t.activate(n)}}},[t._v("\n                    Read more...\n                  ")]):t._e(),t.readMore===n?a("span",{domProps:{innerHTML:t._s(e.paraphrase)}}):t._e(),t.readMore===n?a("a",{attrs:{href:"#"},on:{click:t.deactivate}},[t._v("\n                    Read less...\n                  ")]):t._e()])])})),0)])],1),a("div",{staticClass:"col-md-12"},[a("laravelVuePagination",{attrs:{data:t.text},on:{"pagination-change-page":t.getText}})],1)])])],1)],1)},T=[],w=e("7211"),A=e.n(w),P=e("369b"),E=e.n(P),S={props:["my_model"],components:{VueElementLoading:r.a,laravelVuePagination:A.a},data:function(){return{text:{},textcsv:{},readMoreActivated:null,readMore:null,loading:!1}},computed:{},methods:{closeMe:function(){this.$bvModal.hide("create")},getText:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.loading=!0,this.$api.get(this.dynamic_route("service/paraphrase/getparaphrase?page=".concat(a))).then((function(a){t.loading=!1,t.text=a.data}))},getTextcsv:function(){var t=this;this.loading=!0,this.$api.get(this.dynamic_route("service/paraphrase/getcsvtext")).then((function(a){t.loading=!1,t.textcsv=a.data}))},activateReadMore:function(t){this.readMoreActivated=t},deactivateReadMore:function(){this.readMoreActivated=null},activate:function(t){this.readMore=t},deactivate:function(){this.readMore=null},exportToCsv:function(){var t=E.a.unparse(this.textcsv),a=document.createElement("a");a.href="data:text/csv;charset=utf-8,"+encodeURI(t),a.download="data.csv",a.click()}},mounted:function(){this.getText(),this.getTextcsv()}},R=S,V=(e("30ea"),Object(g["a"])(R,k,T,!1,null,null,null)),L=V.exports,U=[{title:'<span class = "mr-5"><i class="badge badge-pill badge-primary">1</i> Upload.</span> ',value:"tab1",disabled:!1},{title:' <i class="badge badge-pill badge-primary">2</i> Manage ',value:"tab2",disabled:!1}],$={props:{},components:{VueElementLoading:r.a,Tabs:c["a"],Upload:b,Manage:L},data:function(){return{heading:"Configuration",subheading:"Configuration.",icon:"pe-7s-lock icon-gradient bg-tempting-azure",tabs:U,currentTab:"tab1"}},methods:{handleClick:function(t){var a=t.replace("tab","");"1"==a&&(this.currentTab=t),"2"==a&&(this.currentTab=t)}}},j=$,O=Object(g["a"])(j,i,o,!1,null,null,null);a["default"]=O.exports},"30ea":function(t,a,e){"use strict";e("d335")},3550:function(t,a,e){},"66c4":function(t,a,e){"use strict";var n=e("8336"),i=e("b0af"),o=e("99d9"),s=e("a523"),r=e("169a"),c=e("ce7e"),l=e("1f4f"),d=e("2fa4"),u=function(){var t=this,a=t._self._c;return a(r["a"],{attrs:{persistent:"","max-width":"1000px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,o=e.attrs;return[a(n["a"],t._g(t._b({staticClass:"mx-2",staticStyle:{float:"right"},attrs:{small:"",color:"#3f50b5",outlined:""},on:{click:function(a){return t.getAudio()}}},"v-btn",o,!1),i),[a("span",[t._v("Import Text")])])]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[a(i["a"],[a("VueElementLoading",{attrs:{active:t.loading,spinner:"line-scale",color:"var(--primary)"}}),a(o["c"],[a("span",{staticClass:"text-h5"},[t._v("Export Text")])]),a(o["b"],[a(s["a"],[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a(l["a"],[a("thead",[a("tr",[a("th",{staticClass:"text-center",attrs:{width:"1%"}},[t._v("S/N")]),a("th",{staticClass:"text-center",attrs:{width:"10%"}},[t._v("Text")]),a("th",{staticClass:"text-center",attrs:{width:"4%"}},[t._v("Keywords")]),a("th",{staticClass:"text-center",attrs:{width:"2%"}},[t._v("Action")])])]),a("tbody",t._l(t.audio.data,(function(e,i){return a("tr",{key:i},[a("td",[t._v(t._s(i+1))]),a("td",[t.readMoreActivated!==i?a("span",[t._v(t._s(e.text.slice(0,200))+"\n                ")]):t._e(),t.readMoreActivated!==i?a("a",{attrs:{href:"#"},on:{click:function(a){return t.activateReadMore(i)}}},[t._v("\n                  Read more...\n                ")]):t._e(),t.readMoreActivated===i?a("span",{domProps:{innerHTML:t._s(e.text)}}):t._e(),t.readMoreActivated===i?a("a",{attrs:{href:"#"},on:{click:t.deactivateReadMore}},[t._v("\n                  Read less...\n                ")]):t._e()]),a("td",[t._v("\n                "+t._s(e.keywords)+"\n              ")]),a("td",[a(n["a"],{staticClass:"mx-2",staticStyle:{float:"right"},attrs:{small:"",color:"#3f50b5",outlined:""},on:{click:function(a){return t.Export(e)}}},[a("span",[t._v("Export Text")])])],1)])})),0)])],1),a("div",{staticClass:"col-md-12"},[a("laravelVuePagination",{attrs:{data:t.audio},on:{"pagination-change-page":t.getAudio}})],1)])]),a(c["a"]),a(o["a"],[a(d["a"]),a(n["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(a){return t.closeMe()}}},[t._v(" Close ")])],1)],1)],1)],1)},p=[],h=(e("4506"),e("6ad0")),v=e.n(h),f=e("7211"),g=e.n(f),m={props:{text:String},data:function(){return{errors:null,loading:!1,form:{},dialog:!1,audio:{},filters:{},currentPage:1,pageCount:5,readMoreActivated:null}},components:{VueElementLoading:v.a,laravelVuePagination:g.a},methods:{getAudio:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.loading=!0,this.$api.get(this.dynamic_route("service/uploadaudio/getaudio?page=".concat(a))).then((function(a){t.loading=!1,t.audio=a.data}))},getPaginatedSession:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.loading=!0;var n=e||this.dynamic_route("service/uploadaudio/getaudio");axios.post(n,{filters:a}).then((function(a){t.logs=a.data.data,t.loading=!1})).catch((function(a){console.log(a),t.loading=!1})).finally((function(){t.loading=!1}))},getNextPage:function(t){this.getPaginatedSession(this.filters,t)},Export:function(t){this.$emit("export-text",t),this.closeMe()},changePage:function(t){this.currentPage=t},activateReadMore:function(t){this.readMoreActivated=t},deactivateReadMore:function(){this.readMoreActivated=null},closeMe:function(){this.dialog=!this.dialog}},mounted:function(){}},b=m,x=e("2877"),_=Object(x["a"])(b,u,p,!1,null,"6c43b65e",null);a["a"]=_.exports},d335:function(t,a,e){},db6b:function(t,a,e){"use strict";e("3550")}}]);