(this.webpackJsonp=this.webpackJsonp||[]).push([[99],{1219:function(e,t,n){n(42),n(44),e.exports=n(1425)},1425:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"init",value:function(){var t=a()(".js-ajax-loading-spinner");t.on("ajax:beforeSend",e.ajaxBeforeSend),t.on("ajax:complete",e.ajaxComplete)}},{key:"ajaxBeforeSend",value:function(t){t.target.setAttribute("disabled","");var n=t.target.querySelector("i"),r=n.className.match(/(fa-)([^\s]+)/g)[0];n.dataset.icon=r,e.toggleLoadingIcon(n),a()(t.target).off("ajax:beforeSend",e.ajaxBeforeSend)}},{key:"ajaxComplete",value:function(t){t.target.removeAttribute("disabled");var n=t.target.querySelector("i");e.toggleLoadingIcon(n),a()(t.target).off("ajax:complete",e.ajaxComplete)}},{key:"toggleLoadingIcon",value:function(e){var t=e.classList;t.toggle(e.dataset.icon),t.toggle("fa-spinner"),t.toggle("fa-spin")}}],(n=null)&&o(t.prototype,n),r&&o(t,r),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s="#modal-delete-branch",u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$modal=a()(s),this.$toggleBtns=a()('[data-target="'.concat(s,'"]')),this.$branchName=a()(".js-branch-name",this.$modal),this.$confirmInput=a()(".js-delete-branch-input",this.$modal),this.$deleteBtn=a()(".js-delete-branch",this.$modal),this.$notMerged=a()(".js-not-merged",this.$modal),this.bindEvents()}var t,n,r;return t=e,(n=[{key:"bindEvents",value:function(){this.$toggleBtns.on("click",this.setModalData.bind(this)),this.$confirmInput.on("input",this.setDeleteDisabled.bind(this)),this.$deleteBtn.on("click",this.setDisableDeleteButton.bind(this))}},{key:"setModalData",value:function(e){var t=e.currentTarget.dataset;this.branchName=t.branchName||"",this.deletePath=t.deletePath||"",this.isMerged=!!t.isMerged,this.updateModal()}},{key:"setDeleteDisabled",value:function(e){this.$deleteBtn.attr("disabled",e.currentTarget.value!==this.branchName)}},{key:"setDisableDeleteButton",value:function(e){return!this.$deleteBtn.is("[disabled]")||(e.preventDefault(),e.stopPropagation(),!1)}},{key:"updateModal",value:function(){this.$branchName.text(this.branchName),this.$confirmInput.val(""),this.$deleteBtn.attr("href",this.deletePath),this.$deleteBtn.attr("disabled",!0),this.$notMerged.toggleClass("hidden",this.isMerged)}}])&&c(t.prototype,n),r&&c(t,r),e}();document.addEventListener("DOMContentLoaded",function(){i.init(),new u})},27:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n(2),a=n.n(r),o=n(4),i=n(43);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e=s(this,u(t).call(this)),a.a.bind("g p",function(){return Object(o.a)(".shortcuts-project")}),a.a.bind("g v",function(){return Object(o.a)(".shortcuts-project-activity")}),a.a.bind("g r",function(){return Object(o.a)(".shortcuts-project-releases")}),a.a.bind("g f",function(){return Object(o.a)(".shortcuts-tree")}),a.a.bind("g c",function(){return Object(o.a)(".shortcuts-commits")}),a.a.bind("g j",function(){return Object(o.a)(".shortcuts-builds")}),a.a.bind("g n",function(){return Object(o.a)(".shortcuts-network")}),a.a.bind("g d",function(){return Object(o.a)(".shortcuts-repository-charts")}),a.a.bind("g i",function(){return Object(o.a)(".shortcuts-issues")}),a.a.bind("g b",function(){return Object(o.a)(".shortcuts-issue-boards")}),a.a.bind("g m",function(){return Object(o.a)(".shortcuts-merge_requests")}),a.a.bind("g w",function(){return Object(o.a)(".shortcuts-wiki")}),a.a.bind("g s",function(){return Object(o.a)(".shortcuts-snippets")}),a.a.bind("g k",function(){return Object(o.a)(".shortcuts-kubernetes")}),a.a.bind("g e",function(){return Object(o.a)(".shortcuts-environments")}),a.a.bind("g l",function(){return Object(o.a)(".shortcuts-metrics")}),a.a.bind("i",function(){return Object(o.a)(".shortcuts-new-issue")}),e.enabledHelp.push(".hidden-shortcut.project"),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,i["a"]),t}()},28:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(12),i=n(31);function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.projectSelectInput=a()(t),this.newItemBtn=a()(".new-project-item-link"),this.resourceType=this.newItemBtn.data("type"),this.resourceLabel=this.newItemBtn.data("label"),this.formattedText=this.deriveTextVariants(),this.groupId=this.projectSelectInput.data("groupId"),this.bindEvents(),this.initLocalStorage()}var t,n,r;return t=e,(n=[{key:"bindEvents",value:function(){var e=this;this.projectSelectInput.siblings(".new-project-item-select-button").on("click",function(t){return e.openDropdown(t)}),this.newItemBtn.on("click",function(t){e.getProjectFromLocalStorage()||(t.preventDefault(),e.openDropdown(t))}),this.projectSelectInput.on("change",function(){return e.selectProject()})}},{key:"initLocalStorage",value:function(){i.a.isLocalStorageAccessSafe()&&(this.localStorageKey=["group",this.groupId,this.formattedText.localStorageItemType,"recent-project"].join("-"),this.setBtnTextFromLocalStorage())}},{key:"openDropdown",value:function(e){a()(e.currentTarget).siblings(".project-item-select").select2("open")}},{key:"selectProject",value:function(){var e=JSON.parse(this.projectSelectInput.val()),t={url:"".concat(e.url,"/").concat(this.projectSelectInput.data("relativePath")),name:e.name};this.setNewItemBtnAttributes(t),this.setProjectInLocalStorage(t)}},{key:"setBtnTextFromLocalStorage",value:function(){var e=this.getProjectFromLocalStorage();this.setNewItemBtnAttributes(e)}},{key:"setNewItemBtnAttributes",value:function(e){e?(this.newItemBtn.attr("href",e.url),this.newItemBtn.text("".concat(this.formattedText.defaultTextPrefix," in ").concat(e.name))):this.newItemBtn.text("Select project to create ".concat(this.formattedText.presetTextSuffix))}},{key:"getProjectFromLocalStorage",value:function(){var e=localStorage.getItem(this.localStorageKey);return JSON.parse(e)}},{key:"setProjectInLocalStorage",value:function(e){var t=JSON.stringify(e);localStorage.setItem(this.localStorageKey,t)}},{key:"deriveTextVariants",value:function(){var e=this.resourceLabel;return{localStorageItemType:"new-".concat(this.resourceType.split("_").join("-").slice(0,-1)),defaultTextPrefix:e,presetTextSuffix:this.resourceType.split("_").join(" ").slice(0,-1)}}}])&&c(t.prototype,n),r&&c(t,r),e}();function u(){a()(".ajax-project-select").each(function(e,t){var n,r,i=a()(t).data("simpleFilter")||!1;return this.groupId=a()(t).data("groupId"),this.includeGroups=a()(t).data("includeGroups"),this.allProjects=a()(t).data("allProjects")||!1,this.orderBy=a()(t).data("orderBy")||"id",this.withIssuesEnabled=a()(t).data("withIssuesEnabled"),this.withMergeRequestsEnabled=a()(t).data("withMergeRequestsEnabled"),this.withShared=void 0===a()(t).data("withShared")||a()(t).data("withShared"),this.includeProjectsInSubgroups=a()(t).data("includeProjectsInSubgroups")||!1,this.allowClear=a()(t).data("allowClear")||!1,n="Search for project",this.includeGroups&&(n+=" or group"),a()(t).select2({placeholder:n,minimumInputLength:0,query:(r=this,function(e){var t,n;return t=function(t){var n;return n={results:t},e.callback(n)},n=r.includeGroups?function(n){var r;return r=function(e){var r;return r=e.concat(n),t(r)},o.a.groups(e.term,{},r)}:t,r.groupId?o.a.groupProjects(r.groupId,e.term,{with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,with_shared:r.withShared,include_subgroups:r.includeProjectsInSubgroups},n):o.a.projects(e.term,{order_by:r.orderBy,with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,membership:!r.allProjects},n)}),id:function(e){return i?e.id:JSON.stringify({name:e.name,url:e.web_url})},text:function(e){return e.name_with_namespace||e.name},initSelection:function(e,t){return o.a.project(e.val()).then(function(e){var n=e.data;return t(n)})},allowClear:this.allowClear,dropdownCssClass:"ajax-project-dropdown"}),i?t:new s(t)})}n.d(t,"a",function(){return u})},29:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var r=n(0),a=n.n(r),o=n(14),i=n.n(o),c=n(1),s=n(19),u=n(6),l=n(7),d=n(28);function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t=a()("ul.clone-options-dropdown"),n=a()("#project_clone"),r=a()(".js-git-clone-holder .js-clone-dropdown-label"),o=document.querySelector(".js-mobile-git-clone .js-clone-dropdown-label"),c=r.text().trim();c.length>0&&a()("a:contains('".concat(c,"')"),t).addClass("is-active"),a()("a",t).on("click",function(e){e.preventDefault();var r=a()(e.currentTarget),i=r.attr("href"),c=r.data("cloneType");a()(".is-active",t).removeClass("is-active"),a()('a[data-clone-type="'.concat(c,'"]')).each(function(){var e=a()(this),t=e.find(".dropdown-menu-inner-title").text(),n=e.closest(".project-clone-holder").find(".js-clone-dropdown-label");e.toggleClass("is-active"),n.text(t)}),o?o.dataset.clipboardText=i:n.val(i),a()(".js-git-empty .js-clone").text(i)}),e.initRefSwitcher(),a()(".project-refs-select").on("change",function(){return a()(this).parents("form").submit()}),a()(".hide-no-ssh-message").on("click",function(e){return i.a.set("hide_no_ssh_message","false"),a()(this).parents(".no-ssh-key-message").remove(),e.preventDefault()}),a()(".hide-no-password-message").on("click",function(e){return i.a.set("hide_no_password_message","false"),a()(this).parents(".no-password-message").remove(),e.preventDefault()}),a()(".hide-auto-devops-implicitly-enabled-banner").on("click",function(e){var t=a()(this).data("project-id"),n="hide_auto_devops_implicitly_enabled_banner_".concat(t);return i.a.set(n,"false"),a()(this).parents(".auto-devops-implicitly-enabled-banner").remove(),e.preventDefault()}),e.projectSelectDropdown()}var t,n,r;return t=e,r=[{key:"projectSelectDropdown",value:function(){Object(d.a)(),a()(".project-item-select").on("click",function(t){return e.changeProject(a()(t.currentTarget).val())})}},{key:"changeProject",value:function(e){return window.location=e}},{key:"initRefSwitcher",value:function(){var e=document.createElement("li"),t=document.createElement("a");return t.href="#",a()(".js-project-refs-dropdown").each(function(){var n,r;return n=a()(this),r=n.data("selected"),n.glDropdown({data:function(e,t){u.a.get(n.data("refsUrl"),{params:{ref:n.data("ref"),search:e}}).then(function(e){var n=e.data;return t(n)}).catch(function(){return Object(l.a)(Object(c.a)("An error occurred while getting projects"))})},selectable:!0,filterable:!0,filterRemote:!0,filterByText:!0,inputFieldName:n.data("inputFieldName"),fieldName:n.data("fieldName"),renderRow:function(n){var a=e.cloneNode(!1);if(null!=n.header)a.className="dropdown-header",a.textContent=n.header;else{var o=t.cloneNode(!1);n===r&&(o.className="is-active"),o.textContent=n,o.dataset.ref=n,a.appendChild(o)}return a},id:function(e,t){return t.attr("data-ref")},toggleLabel:function(e,t){return t.text().trim()},clicked:function(e){if(e.e.preventDefault(),a()('input[name="ref"]').length){var t=n.closest("form"),r=n.data("visit"),o=!!r||r,i=t.attr("action"),c=-1===i.indexOf("?")?"?":"&";o&&Object(s.g)("".concat(i).concat(c).concat(t.serialize()))}}})})}}],(n=null)&&f(t.prototype,n),r&&f(t,r),e}()},44:function(e,t,n){"use strict";n.r(t);var r=n(38),a=n(36),o=n(29),i=n(27);document.addEventListener("DOMContentLoaded",function(){var e=document.body.dataset.page;if(["projects:clusters:new","projects:clusters:create_gcp","projects:clusters:create_user"].indexOf(e)>-1){var t=document.querySelector(".gcp-signup-offer");t&&new a.a(t),Object(r.a)()}new o.a,new i.a})}},[[1219,1,0,2]]]);
//# sourceMappingURL=pages.projects.branches.index.42202aca.chunk.js.map