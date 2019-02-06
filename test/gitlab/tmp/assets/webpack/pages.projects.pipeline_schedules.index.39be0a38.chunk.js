(this.webpackJsonp=this.webpackJsonp||[]).push([[149],{1336:function(e,t,r){r(42),r(44),e.exports=r(1415)},1415:function(e,t,r){"use strict";r.r(t);var n=r(11),i=r(14),a=r.n(i),o=r(78),s=r(809),c=r.n(s),l=r(13);n.default.use(o.a);var u="pipeline_schedules_callout_dismissed",d={name:"PipelineSchedulesCallout",data:function(){return{docsUrl:document.getElementById("pipeline-schedules-callout").dataset.docsUrl,calloutDismissed:Object(l.A)(a.a.get(u))}},created:function(){this.illustrationSvg=c.a},methods:{dismissCallout:function(){this.calloutDismissed=!0,a.a.set(u,this.calloutDismissed,{expires:365})}}},h=r(3),f=Object(h.a)(d,function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.calloutDismissed?e._e():r("div",{staticClass:"pipeline-schedules-user-callout user-callout"},[r("div",{staticClass:"bordered-box landing content-block"},[r("button",{staticClass:"btn btn-default close",attrs:{id:"dismiss-callout-btn"},on:{click:e.dismissCallout}},[r("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]),e._v(" "),r("div",{staticClass:"svg-container",domProps:{innerHTML:e._s(e.illustrationSvg)}}),e._v(" "),r("div",{staticClass:"user-callout-copy"},[r("h4",[e._v(e._s(e.__("Scheduling Pipelines")))]),e._v(" "),r("p",[e._v("\n          "+e._s(e.__("The pipelines schedule runs pipelines in the future,\nrepeatedly, for specific branches or tags.\nThose scheduled pipelines will inherit limited project access based on their associated user."))+"\n        ")]),e._v(" "),r("p",[e._v("\n          "+e._s(e.__("Learn more in the"))+"\n          "),r("a",{attrs:{href:e.docsUrl,target:"_blank",rel:"nofollow"}},[e._v("\n            "+e._s(e.s__("Learn more in the|pipeline schedules documentation")))]),e._v(".\n          ")])])])])},[],!1,null,null,null);f.options.__file="pipeline_schedules_callout.vue";var p=f.exports;document.addEventListener("DOMContentLoaded",function(){return new n.default({el:"#pipeline-schedules-callout",components:{"pipeline-schedules-callout":p},render:function(e){return e("pipeline-schedules-callout")}})})},27:function(e,t,r){"use strict";r.d(t,"a",function(){return d});var n=r(2),i=r.n(n),a=r(4),o=r(43);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e=c(this,l(t).call(this)),i.a.bind("g p",function(){return Object(a.a)(".shortcuts-project")}),i.a.bind("g v",function(){return Object(a.a)(".shortcuts-project-activity")}),i.a.bind("g r",function(){return Object(a.a)(".shortcuts-project-releases")}),i.a.bind("g f",function(){return Object(a.a)(".shortcuts-tree")}),i.a.bind("g c",function(){return Object(a.a)(".shortcuts-commits")}),i.a.bind("g j",function(){return Object(a.a)(".shortcuts-builds")}),i.a.bind("g n",function(){return Object(a.a)(".shortcuts-network")}),i.a.bind("g d",function(){return Object(a.a)(".shortcuts-repository-charts")}),i.a.bind("g i",function(){return Object(a.a)(".shortcuts-issues")}),i.a.bind("g b",function(){return Object(a.a)(".shortcuts-issue-boards")}),i.a.bind("g m",function(){return Object(a.a)(".shortcuts-merge_requests")}),i.a.bind("g w",function(){return Object(a.a)(".shortcuts-wiki")}),i.a.bind("g s",function(){return Object(a.a)(".shortcuts-snippets")}),i.a.bind("g k",function(){return Object(a.a)(".shortcuts-kubernetes")}),i.a.bind("g e",function(){return Object(a.a)(".shortcuts-environments")}),i.a.bind("g l",function(){return Object(a.a)(".shortcuts-metrics")}),i.a.bind("i",function(){return Object(a.a)(".shortcuts-new-issue")}),e.enabledHelp.push(".hidden-shortcut.project"),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,o["a"]),t}()},28:function(e,t,r){"use strict";var n=r(0),i=r.n(n),a=r(12),o=r(31);function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.projectSelectInput=i()(t),this.newItemBtn=i()(".new-project-item-link"),this.resourceType=this.newItemBtn.data("type"),this.resourceLabel=this.newItemBtn.data("label"),this.formattedText=this.deriveTextVariants(),this.groupId=this.projectSelectInput.data("groupId"),this.bindEvents(),this.initLocalStorage()}var t,r,n;return t=e,(r=[{key:"bindEvents",value:function(){var e=this;this.projectSelectInput.siblings(".new-project-item-select-button").on("click",function(t){return e.openDropdown(t)}),this.newItemBtn.on("click",function(t){e.getProjectFromLocalStorage()||(t.preventDefault(),e.openDropdown(t))}),this.projectSelectInput.on("change",function(){return e.selectProject()})}},{key:"initLocalStorage",value:function(){o.a.isLocalStorageAccessSafe()&&(this.localStorageKey=["group",this.groupId,this.formattedText.localStorageItemType,"recent-project"].join("-"),this.setBtnTextFromLocalStorage())}},{key:"openDropdown",value:function(e){i()(e.currentTarget).siblings(".project-item-select").select2("open")}},{key:"selectProject",value:function(){var e=JSON.parse(this.projectSelectInput.val()),t={url:"".concat(e.url,"/").concat(this.projectSelectInput.data("relativePath")),name:e.name};this.setNewItemBtnAttributes(t),this.setProjectInLocalStorage(t)}},{key:"setBtnTextFromLocalStorage",value:function(){var e=this.getProjectFromLocalStorage();this.setNewItemBtnAttributes(e)}},{key:"setNewItemBtnAttributes",value:function(e){e?(this.newItemBtn.attr("href",e.url),this.newItemBtn.text("".concat(this.formattedText.defaultTextPrefix," in ").concat(e.name))):this.newItemBtn.text("Select project to create ".concat(this.formattedText.presetTextSuffix))}},{key:"getProjectFromLocalStorage",value:function(){var e=localStorage.getItem(this.localStorageKey);return JSON.parse(e)}},{key:"setProjectInLocalStorage",value:function(e){var t=JSON.stringify(e);localStorage.setItem(this.localStorageKey,t)}},{key:"deriveTextVariants",value:function(){var e=this.resourceLabel;return{localStorageItemType:"new-".concat(this.resourceType.split("_").join("-").slice(0,-1)),defaultTextPrefix:e,presetTextSuffix:this.resourceType.split("_").join(" ").slice(0,-1)}}}])&&s(t.prototype,r),n&&s(t,n),e}();function l(){i()(".ajax-project-select").each(function(e,t){var r,n,o=i()(t).data("simpleFilter")||!1;return this.groupId=i()(t).data("groupId"),this.includeGroups=i()(t).data("includeGroups"),this.allProjects=i()(t).data("allProjects")||!1,this.orderBy=i()(t).data("orderBy")||"id",this.withIssuesEnabled=i()(t).data("withIssuesEnabled"),this.withMergeRequestsEnabled=i()(t).data("withMergeRequestsEnabled"),this.withShared=void 0===i()(t).data("withShared")||i()(t).data("withShared"),this.includeProjectsInSubgroups=i()(t).data("includeProjectsInSubgroups")||!1,this.allowClear=i()(t).data("allowClear")||!1,r="Search for project",this.includeGroups&&(r+=" or group"),i()(t).select2({placeholder:r,minimumInputLength:0,query:(n=this,function(e){var t,r;return t=function(t){var r;return r={results:t},e.callback(r)},r=n.includeGroups?function(r){var n;return n=function(e){var n;return n=e.concat(r),t(n)},a.a.groups(e.term,{},n)}:t,n.groupId?a.a.groupProjects(n.groupId,e.term,{with_issues_enabled:n.withIssuesEnabled,with_merge_requests_enabled:n.withMergeRequestsEnabled,with_shared:n.withShared,include_subgroups:n.includeProjectsInSubgroups},r):a.a.projects(e.term,{order_by:n.orderBy,with_issues_enabled:n.withIssuesEnabled,with_merge_requests_enabled:n.withMergeRequestsEnabled,membership:!n.allProjects},r)}),id:function(e){return o?e.id:JSON.stringify({name:e.name,url:e.web_url})},text:function(e){return e.name_with_namespace||e.name},initSelection:function(e,t){return a.a.project(e.val()).then(function(e){var r=e.data;return t(r)})},allowClear:this.allowClear,dropdownCssClass:"ajax-project-dropdown"}),o?t:new c(t)})}r.d(t,"a",function(){return l})},29:function(e,t,r){"use strict";r.d(t,"a",function(){return f});var n=r(0),i=r.n(n),a=r(14),o=r.n(a),s=r(1),c=r(19),l=r(6),u=r(7),d=r(28);function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t=i()("ul.clone-options-dropdown"),r=i()("#project_clone"),n=i()(".js-git-clone-holder .js-clone-dropdown-label"),a=document.querySelector(".js-mobile-git-clone .js-clone-dropdown-label"),s=n.text().trim();s.length>0&&i()("a:contains('".concat(s,"')"),t).addClass("is-active"),i()("a",t).on("click",function(e){e.preventDefault();var n=i()(e.currentTarget),o=n.attr("href"),s=n.data("cloneType");i()(".is-active",t).removeClass("is-active"),i()('a[data-clone-type="'.concat(s,'"]')).each(function(){var e=i()(this),t=e.find(".dropdown-menu-inner-title").text(),r=e.closest(".project-clone-holder").find(".js-clone-dropdown-label");e.toggleClass("is-active"),r.text(t)}),a?a.dataset.clipboardText=o:r.val(o),i()(".js-git-empty .js-clone").text(o)}),e.initRefSwitcher(),i()(".project-refs-select").on("change",function(){return i()(this).parents("form").submit()}),i()(".hide-no-ssh-message").on("click",function(e){return o.a.set("hide_no_ssh_message","false"),i()(this).parents(".no-ssh-key-message").remove(),e.preventDefault()}),i()(".hide-no-password-message").on("click",function(e){return o.a.set("hide_no_password_message","false"),i()(this).parents(".no-password-message").remove(),e.preventDefault()}),i()(".hide-auto-devops-implicitly-enabled-banner").on("click",function(e){var t=i()(this).data("project-id"),r="hide_auto_devops_implicitly_enabled_banner_".concat(t);return o.a.set(r,"false"),i()(this).parents(".auto-devops-implicitly-enabled-banner").remove(),e.preventDefault()}),e.projectSelectDropdown()}var t,r,n;return t=e,n=[{key:"projectSelectDropdown",value:function(){Object(d.a)(),i()(".project-item-select").on("click",function(t){return e.changeProject(i()(t.currentTarget).val())})}},{key:"changeProject",value:function(e){return window.location=e}},{key:"initRefSwitcher",value:function(){var e=document.createElement("li"),t=document.createElement("a");return t.href="#",i()(".js-project-refs-dropdown").each(function(){var r,n;return r=i()(this),n=r.data("selected"),r.glDropdown({data:function(e,t){l.a.get(r.data("refsUrl"),{params:{ref:r.data("ref"),search:e}}).then(function(e){var r=e.data;return t(r)}).catch(function(){return Object(u.a)(Object(s.a)("An error occurred while getting projects"))})},selectable:!0,filterable:!0,filterRemote:!0,filterByText:!0,inputFieldName:r.data("inputFieldName"),fieldName:r.data("fieldName"),renderRow:function(r){var i=e.cloneNode(!1);if(null!=r.header)i.className="dropdown-header",i.textContent=r.header;else{var a=t.cloneNode(!1);r===n&&(a.className="is-active"),a.textContent=r,a.dataset.ref=r,i.appendChild(a)}return i},id:function(e,t){return t.attr("data-ref")},toggleLabel:function(e,t){return t.text().trim()},clicked:function(e){if(e.e.preventDefault(),i()('input[name="ref"]').length){var t=r.closest("form"),n=r.data("visit"),a=!!n||n,o=t.attr("action"),s=-1===o.indexOf("?")?"?":"&";a&&Object(c.g)("".concat(o).concat(s).concat(t.serialize()))}}})})}}],(r=null)&&h(t.prototype,r),n&&h(t,n),e}()},44:function(e,t,r){"use strict";r.r(t);var n=r(38),i=r(36),a=r(29),o=r(27);document.addEventListener("DOMContentLoaded",function(){var e=document.body.dataset.page;if(["projects:clusters:new","projects:clusters:create_gcp","projects:clusters:create_user"].indexOf(e)>-1){var t=document.querySelector(".gcp-signup-offer");t&&new i.a(t),Object(n.a)()}new a.a,new o.a})},809:function(e,t){e.exports='<svg width="140" height="102" viewBox="0 0 140 102" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>illustration</title><defs><rect id="a" width="12.033" height="40.197" rx="3"/><rect id="b" width="12.033" height="40.197" rx="3"/></defs><g fill="none" fill-rule="evenodd"><g transform="translate(-.446)"><path d="M91.747 35.675v-6.039a2.996 2.996 0 0 0-2.999-3.005H54.635a2.997 2.997 0 0 0-2.999 3.005v6.039H40.092a3.007 3.007 0 0 0-2.996 3.005v34.187a2.995 2.995 0 0 0 2.996 3.005h11.544V79.9a2.996 2.996 0 0 0 2.999 3.005h34.113a2.997 2.997 0 0 0 2.999-3.005v-4.03h11.544a3.007 3.007 0 0 0 2.996-3.004V38.68a2.995 2.995 0 0 0-2.996-3.005H91.747z" stroke="#B5A7DD" stroke-width="2"/><rect stroke="#E5E5E5" stroke-width="2" fill="#FFF" x="21.556" y="38.69" width="98.27" height="34.167" rx="3"/><path d="M121.325 38.19c.55 0 .995.444.995 1.002 0 .554-.453 1.003-.995 1.003h-4.039a1.004 1.004 0 0 1 0-2.006h4.039zm9.044 0c.55 0 .996.444.996 1.002 0 .554-.454 1.003-.996 1.003h-4.038a1.004 1.004 0 0 1 0-2.006h4.038zm9.044 0c.55 0 .996.444.996 1.002 0 .554-.453 1.003-.996 1.003h-4.038a1.004 1.004 0 0 1 0-2.006h4.038zM121.325 71.854a1.004 1.004 0 0 1 0 2.006h-4.039a1.004 1.004 0 0 1 0-2.006h4.039zm9.044 0a1.004 1.004 0 0 1 0 2.006h-4.038a1.004 1.004 0 0 1 0-2.006h4.038zm9.044 0a1.004 1.004 0 0 1 0 2.006h-4.038a1.004 1.004 0 0 1 0-2.006h4.038z" fill="#E5E5E5"/><g transform="translate(110.3 35.675)"><use fill="#FFF" xlink:href="#a"/><rect stroke="#FDE5D8" stroke-width="2" x="1" y="1" width="10.033" height="38.197" rx="3"/><ellipse fill="#FC8A51" cx="6.017" cy="9.547" rx="1.504" ry="1.507"/><ellipse fill="#FC8A51" cx="6.017" cy="20.099" rx="1.504" ry="1.507"/><ellipse fill="#FC8A51" cx="6.017" cy="30.65" rx="1.504" ry="1.507"/></g><path d="M6.008 38.19c.55 0 .996.444.996 1.002 0 .554-.454 1.003-.996 1.003H1.97a1.004 1.004 0 0 1 0-2.006h4.038zm9.044 0c.55 0 .996.444.996 1.002 0 .554-.453 1.003-.996 1.003h-4.038a1.004 1.004 0 0 1 0-2.006h4.038zm9.045 0c.55 0 .995.444.995 1.002 0 .554-.453 1.003-.995 1.003h-4.039a1.004 1.004 0 0 1 0-2.006h4.039zM6.008 71.854a1.004 1.004 0 0 1 0 2.006H1.97a1.004 1.004 0 0 1 0-2.006h4.038zm9.044 0a1.004 1.004 0 0 1 0 2.006h-4.038a1.004 1.004 0 0 1 0-2.006h4.038zm9.045 0a1.004 1.004 0 0 1 0 2.006h-4.039a1.004 1.004 0 0 1 0-2.006h4.039z" fill="#E5E5E5"/><g transform="translate(19.05 35.675)"><use fill="#FFF" xlink:href="#b"/><rect stroke="#FDE5D8" stroke-width="2" x="1" y="1" width="10.033" height="38.197" rx="3"/><ellipse fill="#FC8A51" cx="6.017" cy="10.049" rx="1.504" ry="1.507"/><ellipse fill="#FC8A51" cx="6.017" cy="20.601" rx="1.504" ry="1.507"/><ellipse fill="#FC8A51" cx="6.017" cy="31.153" rx="1.504" ry="1.507"/></g><g transform="translate(47.096)"><g transform="translate(7.05)"><ellipse fill="#FC8A51" cx="17.548" cy="5.025" rx="4.512" ry="4.522"/><rect stroke="#B5A7DD" stroke-width="2" fill="#FFF" x="13.036" y="4.02" width="9.025" height="20.099" rx="1.5"/><rect stroke="#FDE5D8" stroke-width="2" fill="#FFF" y="4.02" width="35.096" height="4.02" rx="2.01"/><rect stroke="#6B4FBB" stroke-width="2" fill="#FFF" x="4.512" y="18.089" width="26.072" height="17.084" rx="1.5"/></g><rect stroke="#6B4FBB" stroke-width="2" fill="#FFF" transform="rotate(-45 43.117 35.117)" x="38.168" y="31.416" width="9.899" height="7.403" rx="3.702"/><ellipse stroke="#6B4FBB" stroke-width="2" fill="#FFF" cx="25" cy="55" rx="25" ry="25"/><ellipse stroke="#6B4FBB" stroke-width="2" fill="#FFF" cx="25" cy="55" rx="21" ry="21"/><rect stroke="#6B4FBB" stroke-width="2" fill="#FFF" x="43.05" y="53.281" width="2.95" height="1.538" rx=".769"/><rect stroke="#6B4FBB" stroke-width="2" fill="#FFF" x="4.305" y="53.281" width="2.95" height="1.538" rx=".769"/><rect stroke="#6B4FBB" stroke-width="2" fill="#FFF" transform="rotate(90 25.153 74.422)" x="23.677" y="73.653" width="2.95" height="1.538" rx=".769"/><rect stroke="#6B4FBB" stroke-width="2" fill="#FFF" transform="rotate(90 25.153 35.51)" x="23.844" y="34.742" width="2.616" height="1.538" rx=".769"/><path d="M13.362 42.502c-.124-.543.198-.854.74-.69l2.321.704c.533.161.643.592.235.972l-.22.206 7.06 7.572a1.002 1.002 0 1 1-1.467 1.368l-7.06-7.573-.118.11c-.402.375-.826.248-.952-.304l-.54-2.365zM21.606 67.576c-.408.38-.84.255-.968-.295l-.551-2.363c-.127-.542.191-.852.725-.69l.288.089 3.027-9.901a1.002 1.002 0 1 1 1.918.586l-3.027 9.901.154.047c.525.16.627.592.213.977l-1.779 1.65z" fill="#FC8A51"/><ellipse stroke="#6B4FBB" stroke-width="2" fill="#FFF" cx="25.099" cy="54.768" rx="2.507" ry="2.512"/></g></g><path d="M52.697 96.966a1.004 1.004 0 0 1 2.006 0v4.038a1.004 1.004 0 0 1-2.006 0v-4.038zm0-9.044a1.004 1.004 0 0 1 2.006 0v4.038a1.004 1.004 0 0 1-2.006 0v-4.038zM86.29 96.966c0-.55.444-.996 1.002-.996.554 0 1.003.454 1.003.996v4.038a1.004 1.004 0 0 1-2.006 0v-4.038zm0-9.044c0-.55.444-.996 1.002-.996.554 0 1.003.453 1.003.996v4.038a1.004 1.004 0 0 1-2.006 0v-4.038z" fill="#E5E5E5"/></g></svg>'}},[[1336,1,0,2]]]);
//# sourceMappingURL=pages.projects.pipeline_schedules.index.39be0a38.chunk.js.map