(this.webpackJsonp=this.webpackJsonp||[]).push([[162],{1359:function(t,e,n){n(42),n(44),t.exports=n(1403)},1360:function(t,e,n){"use strict";var r=n(545);n.n(r).a},1361:function(t,e,n){(t.exports=n(73)(!1)).push([t.i,"\n.top-area {\n  border-bottom: 0;\n}\n.function-element {\n  border-bottom: 1px solid #e5e5e5;\n  border-bottom-color: rgb(229, 229, 229);\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n}\n",""])},1403:function(t,e,n){"use strict";n.r(e);var r=n(69),i=n.n(r),a=n(11),s=n(1),o=n(7),c=n(96);function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.state={functions:[],hasFunctionData:!0,loadingData:!0,installed:e,clustersPath:n,helpPath:r}}var e,n,r;return e=t,(n=[{key:"updateFunctionsFromServer",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.state.functions=t}},{key:"updateLoadingState",value:function(t){this.state.loadingData=t}},{key:"toggleNoFunctionData",value:function(){this.state.hasFunctionData=!1}}])&&u(e.prototype,n),r&&u(e,r),t}(),d=n(6);function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var h=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.endpoint=e}var e,n,r;return e=t,(n=[{key:"fetchData",value:function(){return d.a.get(this.endpoint)}}])&&f(e.prototype,n),r&&f(e,r),t}(),p=n(10),v={components:{Timeago:n(93).a},props:{func:{type:Object,required:!0}},computed:{name:function(){return this.func.name},url:function(){return this.func.url},image:function(){return this.func.image},timestamp:function(){return this.func.created_at}}},b=n(3),m=Object(b.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gl-responsive-table-row"},[n("div",{staticClass:"table-section section-20"},[t._v(t._s(t.name))]),t._v(" "),n("div",{staticClass:"table-section section-50"},[n("a",{attrs:{href:t.url}},[t._v(t._s(t.url))])]),t._v(" "),n("div",{staticClass:"table-section section-20"},[t._v(t._s(t.image))]),t._v(" "),n("div",{staticClass:"table-section section-10"},[n("timeago",{attrs:{time:t.timestamp}})],1)])},[],!1,null,null,null);m.options.__file="function_row.vue";var _=m.exports,g={props:{clustersPath:{type:String,required:!0},helpPath:{type:String,required:!0}}},y=Object(b.a)(g,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row empty-state js-empty-state"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"text-content"},[n("h4",{staticClass:"state-title text-center"},[t._v("\n        "+t._s(t.s__("Serverless|Getting started with serverless"))+"\n      ")]),t._v(" "),n("p",{staticClass:"state-description"},[t._v("\n        "+t._s(t.s__("Serverless| In order to start using functions as a service,\n               you must first install Knative on your Kubernetes cluster."))+"\n\n        "),n("a",{attrs:{href:t.helpPath}},[t._v(" "+t._s(t.__("More information"))+" ")])]),t._v(" "),n("div",{staticClass:"text-center"},[n("a",{staticClass:"btn btn-success",attrs:{href:t.clustersPath}},[t._v("\n          "+t._s(t.s__("Serverless|Install Knative"))+"\n        ")])])])])])},[],!1,null,null,null);y.options.__file="empty_state.vue";var w={components:{FunctionRow:_,EmptyState:y.exports,GlSkeletonLoading:p.k},props:{functions:{type:Array,required:!0,default:function(){return[]}},installed:{type:Boolean,required:!0},clustersPath:{type:String,required:!0},helpPath:{type:String,required:!0},loadingData:{type:Boolean,required:!1,default:!0},hasFunctionData:{type:Boolean,required:!1,default:!0}}},j=(n(1360),Object(b.a)(w,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"serverless-functions"}},[t.installed?n("div",[t.hasFunctionData?n("div",[n("div",{staticClass:"ci-table js-services-list function-element"},[n("div",{staticClass:"gl-responsive-table-row table-row-header",attrs:{role:"row"}},[n("div",{staticClass:"table-section section-20",attrs:{role:"rowheader"}},[t._v("\n            "+t._s(t.s__("Serverless|Function"))+"\n          ")]),t._v(" "),n("div",{staticClass:"table-section section-50",attrs:{role:"rowheader"}},[t._v("\n            "+t._s(t.s__("Serverless|Domain"))+"\n          ")]),t._v(" "),n("div",{staticClass:"table-section section-20",attrs:{role:"rowheader"}},[t._v("\n            "+t._s(t.s__("Serverless|Runtime"))+"\n          ")]),t._v(" "),n("div",{staticClass:"table-section section-10",attrs:{role:"rowheader"}},[t._v("\n            "+t._s(t.s__("Serverless|Last Update"))+"\n          ")])]),t._v(" "),t.loadingData?t._l(3,function(t){return n("div",{key:t,staticClass:"gl-responsive-table-row"},[n("gl-skeleton-loading")],1)}):t._l(t.functions,function(t){return n("function-row",{key:t.name,attrs:{func:t}})})],2)]):n("div",{staticClass:"empty-state js-empty-state"},[n("div",{staticClass:"text-content"},[n("h4",{staticClass:"state-title text-center"},[t._v(t._s(t.s__("Serverless|No functions available")))]),t._v(" "),n("p",{staticClass:"state-description"},[t._v("\n          "+t._s(t.s__("Serverless|There is currently no function data available from Knative.\n                 This could be for a variety of reasons including:"))+"\n        ")]),t._v(" "),t._m(0),t._v(" "),n("p",[t._v("\n          "+t._s(t.s__("Serverless|If you believe none of these apply, please check\n                 back later as the function data may be in the process of becoming\n                 available."))+"\n        ")]),t._v(" "),n("div",{staticClass:"text-center"},[n("a",{staticClass:"btn btn-success",attrs:{href:t.helpPath}},[t._v("\n            "+t._s(t.s__("Serverless|Learn more about Serverless"))+"\n          ")])])])])]):n("empty-state",{attrs:{"clusters-path":t.clustersPath,"help-path":t.helpPath}})],1)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("Your repository does not have a corresponding "),n("code",[t._v("serverless.yml")]),t._v(" file.")]),t._v(" "),n("li",[t._v("Your "),n("code",[t._v(".gitlab-ci.yml")]),t._v(" file is not properly configured.")]),t._v(" "),n("li",[t._v("\n            The functions listed in the "),n("code",[t._v("serverless.yml")]),t._v(" file don't match the namespace\n            of your cluster.\n          ")]),t._v(" "),n("li",[t._v("The deploy job has not finished.")])])}],!1,null,null,null));j.options.__file="functions.vue";var S=j.exports;function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var C=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var e=document.querySelector(".js-serverless-functions-page").dataset,n=e.statusPath,r=e.clustersPath,i=e.helpPath,a=e.installed;this.service=new h(n),this.knativeInstalled=void 0!==a,this.store=new l(this.knativeInstalled,r,i),this.initServerless(),this.functionLoadCount=0,n&&this.knativeInstalled&&this.initPolling()}var e,n,r;return e=t,r=[{key:"handleError",value:function(){Object(o.a)(Object(s.e)("Serverless|An error occurred while retrieving serverless components"))}}],(n=[{key:"initServerless",value:function(){var t=this.store,e=document.querySelector("#js-serverless-functions");this.functions=new a.default({el:e,data:function(){return{state:t.state}},render:function(t){return t(S,{props:{functions:this.state.functions,installed:this.state.installed,clustersPath:this.state.clustersPath,helpPath:this.state.helpPath,loadingData:this.state.loadingData,hasFunctionData:this.state.hasFunctionData}})}})}},{key:"initPolling",value:function(){var t=this;this.poll=new c.a({resource:this.service,method:"fetchData",successCallback:function(e){return t.handleSuccess(e)},errorCallback:function(){return t.handleError()}}),i.a.hidden()?this.service.fetchData().then(function(e){return t.handleSuccess(e)}).catch(function(){return t.handleError()}):this.poll.makeRequest(),i.a.change(function(){i.a.hidden()||t.destroyed?t.poll.stop():t.poll.restart()})}},{key:"handleSuccess",value:function(t){200===t.status?(this.store.updateFunctionsFromServer(t.data),this.store.updateLoadingState(!1)):204===t.status&&(this.functionLoadCount+=1,3===this.functionLoadCount&&(this.poll.stop(),this.store.toggleNoFunctionData()))}},{key:"destroy",value:function(){this.destroyed=!0,this.poll&&this.poll.stop(),this.functions.$destroy()}}])&&T(e.prototype,n),r&&T(e,r),t}();document.addEventListener("DOMContentLoaded",function(){new C})},193:function(t,e,n){!function(e){"use strict";var r=-1,i=function(t){return t.every=function(e,n,i){t._time(),i||(i=n,n=null);var a=r+=1;return t._timers[a]={visible:e,hidden:n,callback:i},t._run(a,!1),t.isSupported()&&t._listen(),a},t.stop=function(e){return!!t._timers[e]&&(t._stop(e),delete t._timers[e],!0)},t._timers={},t._time=function(){t._timed||(t._timed=!0,t._wasHidden=t.hidden(),t.change(function(){t._stopRun(),t._wasHidden=t.hidden()}))},t._run=function(n,r){var i,a=t._timers[n];if(t.hidden()){if(null===a.hidden)return;i=a.hidden}else i=a.visible;var s=function(){a.last=new Date,a.callback.call(e)};if(r){var o=new Date-a.last;i>o?a.delay=setTimeout(function(){a.id=setInterval(s,i),s()},i-o):(a.id=setInterval(s,i),s())}else a.id=setInterval(s,i)},t._stop=function(e){var n=t._timers[e];clearInterval(n.id),clearTimeout(n.delay),delete n.id,delete n.delay},t._stopRun=function(e){var n=t.hidden(),r=t._wasHidden;if(n&&!r||!n&&r)for(var i in t._timers)t._stop(i),t._run(i,!n)},t};void 0!==t&&t.exports?t.exports=i(n(194)):i(e.Visibility)}(window)},194:function(t,e){!function(e){"use strict";var n=-1,r={onVisible:function(t){var e=r.isSupported();if(!e||!r.hidden())return t(),e;var n=r.change(function(e,i){r.hidden()||(r.unbind(n),t())});return n},change:function(t){if(!r.isSupported())return!1;var e=n+=1;return r._callbacks[e]=t,r._listen(),e},unbind:function(t){delete r._callbacks[t]},afterPrerendering:function(t){var e=r.isSupported();if(!e||"prerender"!=r.state())return t(),e;var n=r.change(function(e,i){"prerender"!=i&&(r.unbind(n),t())});return n},hidden:function(){return!(!r._doc.hidden&&!r._doc.webkitHidden)},state:function(){return r._doc.visibilityState||r._doc.webkitVisibilityState||"visible"},isSupported:function(){return!(!r._doc.visibilityState&&!r._doc.webkitVisibilityState)},_doc:document||{},_callbacks:{},_change:function(t){var e=r.state();for(var n in r._callbacks)r._callbacks[n].call(r._doc,t,e)},_listen:function(){if(!r._init){var t="visibilitychange";r._doc.webkitVisibilityState&&(t="webkit"+t);var e=function(){r._change.apply(r,arguments)};r._doc.addEventListener?r._doc.addEventListener(t,e):r._doc.attachEvent(t,e),r._init=!0}}};void 0!==t&&t.exports?t.exports=r:e.Visibility=r}(this)},27:function(t,e,n){"use strict";n.d(e,"a",function(){return d});var r=n(2),i=n.n(r),a=n(4),s=n(43);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var d=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t=c(this,u(e).call(this)),i.a.bind("g p",function(){return Object(a.a)(".shortcuts-project")}),i.a.bind("g v",function(){return Object(a.a)(".shortcuts-project-activity")}),i.a.bind("g r",function(){return Object(a.a)(".shortcuts-project-releases")}),i.a.bind("g f",function(){return Object(a.a)(".shortcuts-tree")}),i.a.bind("g c",function(){return Object(a.a)(".shortcuts-commits")}),i.a.bind("g j",function(){return Object(a.a)(".shortcuts-builds")}),i.a.bind("g n",function(){return Object(a.a)(".shortcuts-network")}),i.a.bind("g d",function(){return Object(a.a)(".shortcuts-repository-charts")}),i.a.bind("g i",function(){return Object(a.a)(".shortcuts-issues")}),i.a.bind("g b",function(){return Object(a.a)(".shortcuts-issue-boards")}),i.a.bind("g m",function(){return Object(a.a)(".shortcuts-merge_requests")}),i.a.bind("g w",function(){return Object(a.a)(".shortcuts-wiki")}),i.a.bind("g s",function(){return Object(a.a)(".shortcuts-snippets")}),i.a.bind("g k",function(){return Object(a.a)(".shortcuts-kubernetes")}),i.a.bind("g e",function(){return Object(a.a)(".shortcuts-environments")}),i.a.bind("g l",function(){return Object(a.a)(".shortcuts-metrics")}),i.a.bind("i",function(){return Object(a.a)(".shortcuts-new-issue")}),t.enabledHelp.push(".hidden-shortcut.project"),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(e,s["a"]),e}()},28:function(t,e,n){"use strict";var r=n(0),i=n.n(r),a=n(12),s=n(31);function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.projectSelectInput=i()(e),this.newItemBtn=i()(".new-project-item-link"),this.resourceType=this.newItemBtn.data("type"),this.resourceLabel=this.newItemBtn.data("label"),this.formattedText=this.deriveTextVariants(),this.groupId=this.projectSelectInput.data("groupId"),this.bindEvents(),this.initLocalStorage()}var e,n,r;return e=t,(n=[{key:"bindEvents",value:function(){var t=this;this.projectSelectInput.siblings(".new-project-item-select-button").on("click",function(e){return t.openDropdown(e)}),this.newItemBtn.on("click",function(e){t.getProjectFromLocalStorage()||(e.preventDefault(),t.openDropdown(e))}),this.projectSelectInput.on("change",function(){return t.selectProject()})}},{key:"initLocalStorage",value:function(){s.a.isLocalStorageAccessSafe()&&(this.localStorageKey=["group",this.groupId,this.formattedText.localStorageItemType,"recent-project"].join("-"),this.setBtnTextFromLocalStorage())}},{key:"openDropdown",value:function(t){i()(t.currentTarget).siblings(".project-item-select").select2("open")}},{key:"selectProject",value:function(){var t=JSON.parse(this.projectSelectInput.val()),e={url:"".concat(t.url,"/").concat(this.projectSelectInput.data("relativePath")),name:t.name};this.setNewItemBtnAttributes(e),this.setProjectInLocalStorage(e)}},{key:"setBtnTextFromLocalStorage",value:function(){var t=this.getProjectFromLocalStorage();this.setNewItemBtnAttributes(t)}},{key:"setNewItemBtnAttributes",value:function(t){t?(this.newItemBtn.attr("href",t.url),this.newItemBtn.text("".concat(this.formattedText.defaultTextPrefix," in ").concat(t.name))):this.newItemBtn.text("Select project to create ".concat(this.formattedText.presetTextSuffix))}},{key:"getProjectFromLocalStorage",value:function(){var t=localStorage.getItem(this.localStorageKey);return JSON.parse(t)}},{key:"setProjectInLocalStorage",value:function(t){var e=JSON.stringify(t);localStorage.setItem(this.localStorageKey,e)}},{key:"deriveTextVariants",value:function(){var t=this.resourceLabel;return{localStorageItemType:"new-".concat(this.resourceType.split("_").join("-").slice(0,-1)),defaultTextPrefix:t,presetTextSuffix:this.resourceType.split("_").join(" ").slice(0,-1)}}}])&&o(e.prototype,n),r&&o(e,r),t}();function u(){i()(".ajax-project-select").each(function(t,e){var n,r,s=i()(e).data("simpleFilter")||!1;return this.groupId=i()(e).data("groupId"),this.includeGroups=i()(e).data("includeGroups"),this.allProjects=i()(e).data("allProjects")||!1,this.orderBy=i()(e).data("orderBy")||"id",this.withIssuesEnabled=i()(e).data("withIssuesEnabled"),this.withMergeRequestsEnabled=i()(e).data("withMergeRequestsEnabled"),this.withShared=void 0===i()(e).data("withShared")||i()(e).data("withShared"),this.includeProjectsInSubgroups=i()(e).data("includeProjectsInSubgroups")||!1,this.allowClear=i()(e).data("allowClear")||!1,n="Search for project",this.includeGroups&&(n+=" or group"),i()(e).select2({placeholder:n,minimumInputLength:0,query:(r=this,function(t){var e,n;return e=function(e){var n;return n={results:e},t.callback(n)},n=r.includeGroups?function(n){var r;return r=function(t){var r;return r=t.concat(n),e(r)},a.a.groups(t.term,{},r)}:e,r.groupId?a.a.groupProjects(r.groupId,t.term,{with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,with_shared:r.withShared,include_subgroups:r.includeProjectsInSubgroups},n):a.a.projects(t.term,{order_by:r.orderBy,with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,membership:!r.allProjects},n)}),id:function(t){return s?t.id:JSON.stringify({name:t.name,url:t.web_url})},text:function(t){return t.name_with_namespace||t.name},initSelection:function(t,e){return a.a.project(t.val()).then(function(t){var n=t.data;return e(n)})},allowClear:this.allowClear,dropdownCssClass:"ajax-project-dropdown"}),s?e:new c(e)})}n.d(e,"a",function(){return u})},29:function(t,e,n){"use strict";n.d(e,"a",function(){return h});var r=n(0),i=n.n(r),a=n(14),s=n.n(a),o=n(1),c=n(19),u=n(6),l=n(7),d=n(28);function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var h=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var e=i()("ul.clone-options-dropdown"),n=i()("#project_clone"),r=i()(".js-git-clone-holder .js-clone-dropdown-label"),a=document.querySelector(".js-mobile-git-clone .js-clone-dropdown-label"),o=r.text().trim();o.length>0&&i()("a:contains('".concat(o,"')"),e).addClass("is-active"),i()("a",e).on("click",function(t){t.preventDefault();var r=i()(t.currentTarget),s=r.attr("href"),o=r.data("cloneType");i()(".is-active",e).removeClass("is-active"),i()('a[data-clone-type="'.concat(o,'"]')).each(function(){var t=i()(this),e=t.find(".dropdown-menu-inner-title").text(),n=t.closest(".project-clone-holder").find(".js-clone-dropdown-label");t.toggleClass("is-active"),n.text(e)}),a?a.dataset.clipboardText=s:n.val(s),i()(".js-git-empty .js-clone").text(s)}),t.initRefSwitcher(),i()(".project-refs-select").on("change",function(){return i()(this).parents("form").submit()}),i()(".hide-no-ssh-message").on("click",function(t){return s.a.set("hide_no_ssh_message","false"),i()(this).parents(".no-ssh-key-message").remove(),t.preventDefault()}),i()(".hide-no-password-message").on("click",function(t){return s.a.set("hide_no_password_message","false"),i()(this).parents(".no-password-message").remove(),t.preventDefault()}),i()(".hide-auto-devops-implicitly-enabled-banner").on("click",function(t){var e=i()(this).data("project-id"),n="hide_auto_devops_implicitly_enabled_banner_".concat(e);return s.a.set(n,"false"),i()(this).parents(".auto-devops-implicitly-enabled-banner").remove(),t.preventDefault()}),t.projectSelectDropdown()}var e,n,r;return e=t,r=[{key:"projectSelectDropdown",value:function(){Object(d.a)(),i()(".project-item-select").on("click",function(e){return t.changeProject(i()(e.currentTarget).val())})}},{key:"changeProject",value:function(t){return window.location=t}},{key:"initRefSwitcher",value:function(){var t=document.createElement("li"),e=document.createElement("a");return e.href="#",i()(".js-project-refs-dropdown").each(function(){var n,r;return n=i()(this),r=n.data("selected"),n.glDropdown({data:function(t,e){u.a.get(n.data("refsUrl"),{params:{ref:n.data("ref"),search:t}}).then(function(t){var n=t.data;return e(n)}).catch(function(){return Object(l.a)(Object(o.a)("An error occurred while getting projects"))})},selectable:!0,filterable:!0,filterRemote:!0,filterByText:!0,inputFieldName:n.data("inputFieldName"),fieldName:n.data("fieldName"),renderRow:function(n){var i=t.cloneNode(!1);if(null!=n.header)i.className="dropdown-header",i.textContent=n.header;else{var a=e.cloneNode(!1);n===r&&(a.className="is-active"),a.textContent=n,a.dataset.ref=n,i.appendChild(a)}return i},id:function(t,e){return e.attr("data-ref")},toggleLabel:function(t,e){return e.text().trim()},clicked:function(t){if(t.e.preventDefault(),i()('input[name="ref"]').length){var e=n.closest("form"),r=n.data("visit"),a=!!r||r,s=e.attr("action"),o=-1===s.indexOf("?")?"?":"&";a&&Object(c.g)("".concat(s).concat(o).concat(e.serialize()))}}})})}}],(n=null)&&f(e.prototype,n),r&&f(e,r),t}()},44:function(t,e,n){"use strict";n.r(e);var r=n(38),i=n(36),a=n(29),s=n(27);document.addEventListener("DOMContentLoaded",function(){var t=document.body.dataset.page;if(["projects:clusters:new","projects:clusters:create_gcp","projects:clusters:create_user"].indexOf(t)>-1){var e=document.querySelector(".gcp-signup-offer");e&&new i.a(e),Object(r.a)()}new a.a,new s.a})},545:function(t,e,n){var r=n(1361);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(74).default)("6c3a1cfe",r,!0,{})},69:function(t,e,n){t.exports=n(193)},73:function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),a=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(a).concat([i]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(r[a]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},74:function(t,e,n){"use strict";function r(t,e){for(var n=[],r={},i=0;i<e.length;i++){var a=e[i],s=a[0],o={id:t+":"+i,css:a[1],media:a[2],sourceMap:a[3]};r[s]?r[s].parts.push(o):n.push(r[s]={id:s,parts:[o]})}return n}n.r(e),n.d(e,"default",function(){return p});var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},s=i&&(document.head||document.getElementsByTagName("head")[0]),o=null,c=0,u=!1,l=function(){},d=null,f="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(t,e,n,i){u=n,d=i||{};var s=r(t,e);return v(s),function(e){for(var n=[],i=0;i<s.length;i++){var o=s[i];(c=a[o.id]).refs--,n.push(c)}e?v(s=r(t,e)):s=[];for(i=0;i<n.length;i++){var c;if(0===(c=n[i]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete a[c.id]}}}}function v(t){for(var e=0;e<t.length;e++){var n=t[e],r=a[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(m(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var s=[];for(i=0;i<n.parts.length;i++)s.push(m(n.parts[i]));a[n.id]={id:n.id,refs:1,parts:s}}}}function b(){var t=document.createElement("style");return t.type="text/css",s.appendChild(t),t}function m(t){var e,n,r=document.querySelector("style["+f+'~="'+t.id+'"]');if(r){if(u)return l;r.parentNode.removeChild(r)}if(h){var i=c++;r=o||(o=b()),e=y.bind(null,r,i,!1),n=y.bind(null,r,i,!0)}else r=b(),e=function(t,e){var n=e.css,r=e.media,i=e.sourceMap;r&&t.setAttribute("media",r);d.ssrId&&t.setAttribute(f,e.id);i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}var _,g=(_=[],function(t,e){return _[t]=e,_.filter(Boolean).join("\n")});function y(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,i);else{var a=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(a,s[e]):t.appendChild(a)}}},83:function(t,e,n){"use strict";n.d(e,"b",function(){return i});var r={ABORTED:0,OK:200,CREATED:201,ACCEPTED:202,NON_AUTHORITATIVE_INFORMATION:203,NO_CONTENT:204,RESET_CONTENT:205,PARTIAL_CONTENT:206,MULTI_STATUS:207,ALREADY_REPORTED:208,IM_USED:226,MULTIPLE_CHOICES:300,BAD_REQUEST:400,FORBIDDEN:403,NOT_FOUND:404,UNPROCESSABLE_ENTITY:422},i=[r.OK,r.CREATED,r.ACCEPTED,r.NON_AUTHORITATIVE_INFORMATION,r.NO_CONTENT,r.RESET_CONTENT,r.PARTIAL_CONTENT,r.MULTI_STATUS,r.ALREADY_REPORTED,r.IM_USED];e.a=r},84:function(t,e,n){"use strict";var r=n(20);e.a={methods:{timeFormated:function(t){return Object(r.h)().format(t)},tooltipTitle:function(t){return Object(r.d)(t)}}}},93:function(t,e,n){"use strict";var r=n(10),i=n(84),a=(n(20),{directives:{GlTooltip:r.n},mixins:[i.a],props:{time:{type:String,required:!0},tooltipPlacement:{type:String,required:!1,default:"top"},cssClass:{type:String,required:!1,default:""}}}),s=n(3),o=Object(s.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("time",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip",value:{placement:this.tooltipPlacement},expression:"{ placement: tooltipPlacement }"}],class:this.cssClass,attrs:{title:this.tooltipTitle(this.time)},domProps:{textContent:this._s(this.timeFormated(this.time))}})},[],!1,null,null,null);o.options.__file="time_ago_tooltip.vue";e.a=o.exports},96:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(83),i=n(13);function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var s=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=e,this.options.data=e.data||{},this.options.notificationCallback=e.notificationCallback||function(){},this.intervalHeader="POLL-INTERVAL",this.timeoutID=null,this.canPoll=!0}var e,n,s;return e=t,(n=[{key:"checkConditions",value:function(t){var e=this,n=Object(i.y)(t.headers),a=parseInt(n[this.intervalHeader],10);a>0&&-1!==r.b.indexOf(t.status)&&this.canPoll&&(this.timeoutID=setTimeout(function(){e.makeRequest()},a)),this.options.successCallback(t)}},{key:"makeRequest",value:function(){var t=this,e=this.options,n=e.resource,i=e.method,a=e.data,s=e.errorCallback,o=e.notificationCallback;return o(!0),n[i](a).then(function(e){t.checkConditions(e),o(!1)}).catch(function(t){o(!1),t.status!==r.a.ABORTED&&s(t)})}},{key:"stop",value:function(){this.canPoll=!1,clearTimeout(this.timeoutID)}},{key:"restart",value:function(t){t&&t.data&&(this.options.data=t.data),this.canPoll=!0,this.makeRequest()}}])&&a(e.prototype,n),s&&a(e,s),t}()}},[[1359,1,0,2]]]);
//# sourceMappingURL=pages.projects.serverless.2d2d317b.chunk.js.map