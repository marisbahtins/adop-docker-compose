(this.webpackJsonp=this.webpackJsonp||[]).push([[233],{1547:function(t,e,n){var o=n(1913);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(74).default)("fba6cbe2",o,!0,{})},1548:function(t,e,n){var o=n(1915);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(74).default)("bfe85076",o,!0,{})},1549:function(t,e,n){var o=n(1920);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(74).default)("0c52272e",o,!0,{})},1550:function(t,e,n){var o=n(1922);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(74).default)("455108d6",o,!0,{})},1912:function(t,e,n){"use strict";var o=n(1547);n.n(o).a},1913:function(t,e,n){(t.exports=n(73)(!1)).push([t.i,"\n.prompt[data-v-a351f7d4] {\n  padding: 0 10px;\n  min-width: 7em;\n  font-family: monospace;\n}\n",""])},1914:function(t,e,n){"use strict";var o=n(1548);n.n(o).a},1915:function(t,e,n){(t.exports=n(73)(!1)).push([t.i,"\n.markdown .katex {\n  display: block;\n  text-align: center;\n}\n.markdown .inline-katex .katex {\n  display: inline;\n  text-align: initial;\n}\n",""])},1919:function(t,e,n){"use strict";var o=n(1549);n.n(o).a},1920:function(t,e,n){(t.exports=n(73)(!1)).push([t.i,"\n.cell[data-v-6db133f0] {\n  flex-direction: column;\n}\n",""])},1921:function(t,e,n){"use strict";var o=n(1550);n.n(o).a},1922:function(t,e,n){(t.exports=n(73)(!1)).push([t.i,"\n.cell,\n.input,\n.output {\n  display: flex;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.cell pre {\n  margin: 0;\n  width: 100%;\n}\n",""])},438:function(t,e,n){"use strict";n.r(e);var o=n(11),s=n(6),r=n(1911),i=n.n(r),a=n(738),l=n.n(a),u={props:{type:{type:String,required:!1,default:""},count:{type:Number,required:!1,default:0}},computed:{hasKeys:function(){return""!==this.type&&this.count}}},c=(n(1912),n(3)),p=Object(c.a)(u,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"prompt"},[this.hasKeys?e("span",[this._v(" "+this._s(this.type)+" ["+this._s(this.count)+"]: ")]):this._e()])},[],!1,null,"a351f7d4",null);p.options.__file="prompt.vue";var d=p.exports,f=new i.a.Renderer,h="(\n    ^\\\\begin{[a-zA-Z]+}\\s\n    |\n    ^\\$\\$\n    |\n    \\s\\$(?!\\$)\n  )\n    ((.|\\n)+?)\n  (\n    \\s\\\\end{[a-zA-Z]+}$\n    |\n    \\$\\$$\n    |\n    \\$\n  )\n  ".replace(/\s/g,"").trim();f.paragraph=function(t){var e=t,n=!1;if("undefined"!=typeof katex){var o=e.replace(/&amp;/g,"&").replace(/&=&/g,"\\space=\\space").replace(/<(\/?)em>/g,"_"),s=new RegExp(h,"gi"),r=o.search(s),i=o.match(s);if(i&&0!==i.length)if(r>0){var a=s.exec(o);for(n=!0;null!==a;){var l=katex.renderToString(a[0].replace(/\$/g,""));e="".concat(e.replace(a[0]," ".concat(l))),a=s.exec(o)}}else{var u=s.exec(o);e=katex.renderToString(u[2])}}return'<p class="'.concat(n?"inline-katex":"",'">').concat(e,"</p>")},i.a.setOptions({sanitize:!0,renderer:f});var m={components:{prompt:d},props:{cell:{type:Object,required:!0}},computed:{markdown:function(){return l()(i()(this.cell.source.join("").replace(/\\/g,"\\\\")),{allowedTags:!1,allowedAttributes:{"*":["class"]}})}}},v=(n(1914),Object(c.a)(m,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cell text-cell"},[e("prompt"),this._v(" "),e("div",{staticClass:"markdown",domProps:{innerHTML:this._s(this.markdown)}})],1)},[],!1,null,null,null));v.options.__file="markdown.vue";var g=v.exports,y=n(1916),b=n.n(y);n(1917),n(1918);b.a.plugins.customClass.map({comment:"c",error:"err",operator:"o",constant:"kc",namespace:"kn",keyword:"k",string:"s",number:"m","attr-name":"na",builtin:"nb",entity:"ni",function:"nf",tag:"nt",variable:"nv"});var _=b.a,x={components:{prompt:d},props:{count:{type:Number,required:!1,default:0},codeCssClass:{type:String,required:!1,default:""},type:{type:String,required:!0},rawCode:{type:String,required:!0}},computed:{code:function(){return this.rawCode},promptType:function(){var t=this.type.split("put")[0];return t.charAt(0).toUpperCase()+t.slice(1)}},mounted:function(){_.highlightElement(this.$refs.code)}},k=Object(c.a)(x,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:this.type},[e("prompt",{attrs:{type:this.promptType,count:this.count}}),this._v(" "),e("pre",{ref:"code",staticClass:"language-python",class:this.codeCssClass,domProps:{textContent:this._s(this.code)}})],1)},[],!1,null,null,null);k.options.__file="index.vue";var C=k.exports,w={components:{prompt:d},props:{rawCode:{type:String,required:!0}},computed:{sanitizedOutput:function(){return l()(this.rawCode,{allowedTags:l.a.defaults.allowedTags.concat(["img","svg"]),allowedAttributes:{img:["src"]}})}}},j=Object(c.a)(w,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"output"},[e("prompt"),this._v(" "),e("div",{domProps:{innerHTML:this._s(this.sanitizedOutput)}})],1)},[],!1,null,null,null);j.options.__file="html.vue";var $=j.exports,O={components:{prompt:d},props:{outputType:{type:String,required:!0},rawCode:{type:String,required:!0}}},T=Object(c.a)(O,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"output"},[e("prompt"),this._v(" "),e("img",{attrs:{src:"data:"+this.outputType+";base64,"+this.rawCode}})],1)},[],!1,null,null,null);function q(t){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}T.options.__file="image.vue";var E={components:{"code-cell":C,"html-output":$,"image-output":T.exports},props:{codeCssClass:{type:String,required:!1,default:""},count:{type:Number,required:!1,default:0},output:{type:Object,required:!0,default:function(){return{}}}},computed:{componentName:function(){return this.output.text?"code-cell":this.output.data["image/png"]?"image-output":this.output.data["text/html"]?"html-output":this.output.data["image/svg+xml"]?"html-output":"code-cell"},rawCode:function(){return this.output.text?this.output.text.join(""):this.dataForType(this.outputType)},outputType:function(){return this.output.text?"":this.output.data["image/png"]?"image/png":this.output.data["text/html"]?"text/html":this.output.data["image/svg+xml"]?"image/svg+xml":"text/plain"}},methods:{dataForType:function(t){var e=this.output.data[t];return"object"===q(e)&&(e=e.join("")),e}}},S=Object(c.a)(E,function(){var t=this.$createElement;return(this._self._c||t)(this.componentName,{tag:"component",attrs:{"output-type":this.outputType,count:this.count,"raw-code":this.rawCode,"code-css-class":this.codeCssClass,type:"output"}})},[],!1,null,null,null);S.options.__file="index.vue";var A={components:{"code-cell":C,"output-cell":S.exports},props:{cell:{type:Object,required:!0},codeCssClass:{type:String,required:!1,default:""}},computed:{rawInputCode:function(){return this.cell.source?this.cell.source.join(""):""},hasOutput:function(){return this.cell.outputs.length},output:function(){return this.cell.outputs[0]}}},N=(n(1919),Object(c.a)(A,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cell"},[n("code-cell",{attrs:{"raw-code":t.rawInputCode,count:t.cell.execution_count,"code-css-class":t.codeCssClass,type:"input"}}),t._v(" "),t.hasOutput?n("output-cell",{attrs:{count:t.cell.execution_count,output:t.output,"code-css-class":t.codeCssClass}}):t._e()],1)},[],!1,null,"6db133f0",null));N.options.__file="code.vue";var z={components:{"code-cell":N.exports,"markdown-cell":g},props:{notebook:{type:Object,required:!0},codeCssClass:{type:String,required:!1,default:""}},computed:{cells:function(){if(this.notebook.worksheets){return this.notebook.worksheets.reduce(function(t,e){var n=t;return n.cells=n.cells.concat(e.cells),n},{cells:[]}).cells}return this.notebook.cells},hasNotebook:function(){return Object.keys(this.notebook).length}},methods:{cellType:function(t){return"".concat(t,"-cell")}}},F=(n(1921),Object(c.a)(z,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.hasNotebook?n("div",t._l(t.cells,function(e,o){return n(t.cellType(e.cell_type),{key:o,tag:"component",attrs:{cell:e,"code-css-class":t.codeCssClass}})}),1):t._e()},[],!1,null,null,null));F.options.__file="index.vue";var P=F.exports;e.default=function(){var t=document.getElementById("js-notebook-viewer");new o.default({el:t,components:{notebookLab:P},data:function(){return{error:!1,loadError:!1,loading:!0,json:{}}},mounted:function(){var t=this;if(gon.katex_css_url){var e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href",gon.katex_css_url),document.head.appendChild(e)}if(gon.katex_js_url){var n=document.createElement("script");n.addEventListener("load",function(){t.loadFile()}),n.setAttribute("src",gon.katex_js_url),document.head.appendChild(n)}else this.loadFile()},methods:{loadFile:function(){var e=this;s.a.get(t.dataset.endpoint).then(function(t){return t.data}).then(function(t){e.json=t,e.loading=!1}).catch(function(t){200!==t.status&&(e.loadError=!0),e.error=!0})}},template:'\n      <div class="container-fluid md prepend-top-default append-bottom-default">\n        <div\n          class="text-center loading"\n          v-if="loading && !error">\n          <i\n            class="fa fa-spinner fa-spin"\n            aria-hidden="true"\n            aria-label="iPython notebook loading">\n          </i>\n        </div>\n        <notebook-lab\n          v-if="!loading && !error"\n          :notebook="json"\n          code-css-class="code white" />\n        <p\n          class="text-center"\n          v-if="error">\n          <span v-if="loadError">\n            An error occurred whilst loading the file. Please try again later.\n          </span>\n          <span v-else>\n            An error occurred whilst parsing the file.\n          </span>\n        </p>\n      </div>\n    '})}},725:function(t,e){},822:function(t,e){},847:function(t,e){},856:function(t,e){}}]);
//# sourceMappingURL=notebook_viewer.ac5cf833.chunk.js.map