(this.webpackJsonp=this.webpackJsonp||[]).push([[124],{1289:function(e,t,n){n(42),e.exports=n(44)},27:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n(2),o=n.n(r),a=n(4),c=n(43);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e=s(this,u(t).call(this)),o.a.bind("g p",function(){return Object(a.a)(".shortcuts-project")}),o.a.bind("g v",function(){return Object(a.a)(".shortcuts-project-activity")}),o.a.bind("g r",function(){return Object(a.a)(".shortcuts-project-releases")}),o.a.bind("g f",function(){return Object(a.a)(".shortcuts-tree")}),o.a.bind("g c",function(){return Object(a.a)(".shortcuts-commits")}),o.a.bind("g j",function(){return Object(a.a)(".shortcuts-builds")}),o.a.bind("g n",function(){return Object(a.a)(".shortcuts-network")}),o.a.bind("g d",function(){return Object(a.a)(".shortcuts-repository-charts")}),o.a.bind("g i",function(){return Object(a.a)(".shortcuts-issues")}),o.a.bind("g b",function(){return Object(a.a)(".shortcuts-issue-boards")}),o.a.bind("g m",function(){return Object(a.a)(".shortcuts-merge_requests")}),o.a.bind("g w",function(){return Object(a.a)(".shortcuts-wiki")}),o.a.bind("g s",function(){return Object(a.a)(".shortcuts-snippets")}),o.a.bind("g k",function(){return Object(a.a)(".shortcuts-kubernetes")}),o.a.bind("g e",function(){return Object(a.a)(".shortcuts-environments")}),o.a.bind("g l",function(){return Object(a.a)(".shortcuts-metrics")}),o.a.bind("i",function(){return Object(a.a)(".shortcuts-new-issue")}),e.enabledHelp.push(".hidden-shortcut.project"),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,c["a"]),t}()},28:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(12),c=n(31);function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.projectSelectInput=o()(t),this.newItemBtn=o()(".new-project-item-link"),this.resourceType=this.newItemBtn.data("type"),this.resourceLabel=this.newItemBtn.data("label"),this.formattedText=this.deriveTextVariants(),this.groupId=this.projectSelectInput.data("groupId"),this.bindEvents(),this.initLocalStorage()}var t,n,r;return t=e,(n=[{key:"bindEvents",value:function(){var e=this;this.projectSelectInput.siblings(".new-project-item-select-button").on("click",function(t){return e.openDropdown(t)}),this.newItemBtn.on("click",function(t){e.getProjectFromLocalStorage()||(t.preventDefault(),e.openDropdown(t))}),this.projectSelectInput.on("change",function(){return e.selectProject()})}},{key:"initLocalStorage",value:function(){c.a.isLocalStorageAccessSafe()&&(this.localStorageKey=["group",this.groupId,this.formattedText.localStorageItemType,"recent-project"].join("-"),this.setBtnTextFromLocalStorage())}},{key:"openDropdown",value:function(e){o()(e.currentTarget).siblings(".project-item-select").select2("open")}},{key:"selectProject",value:function(){var e=JSON.parse(this.projectSelectInput.val()),t={url:"".concat(e.url,"/").concat(this.projectSelectInput.data("relativePath")),name:e.name};this.setNewItemBtnAttributes(t),this.setProjectInLocalStorage(t)}},{key:"setBtnTextFromLocalStorage",value:function(){var e=this.getProjectFromLocalStorage();this.setNewItemBtnAttributes(e)}},{key:"setNewItemBtnAttributes",value:function(e){e?(this.newItemBtn.attr("href",e.url),this.newItemBtn.text("".concat(this.formattedText.defaultTextPrefix," in ").concat(e.name))):this.newItemBtn.text("Select project to create ".concat(this.formattedText.presetTextSuffix))}},{key:"getProjectFromLocalStorage",value:function(){var e=localStorage.getItem(this.localStorageKey);return JSON.parse(e)}},{key:"setProjectInLocalStorage",value:function(e){var t=JSON.stringify(e);localStorage.setItem(this.localStorageKey,t)}},{key:"deriveTextVariants",value:function(){var e=this.resourceLabel;return{localStorageItemType:"new-".concat(this.resourceType.split("_").join("-").slice(0,-1)),defaultTextPrefix:e,presetTextSuffix:this.resourceType.split("_").join(" ").slice(0,-1)}}}])&&i(t.prototype,n),r&&i(t,r),e}();function u(){o()(".ajax-project-select").each(function(e,t){var n,r,c=o()(t).data("simpleFilter")||!1;return this.groupId=o()(t).data("groupId"),this.includeGroups=o()(t).data("includeGroups"),this.allProjects=o()(t).data("allProjects")||!1,this.orderBy=o()(t).data("orderBy")||"id",this.withIssuesEnabled=o()(t).data("withIssuesEnabled"),this.withMergeRequestsEnabled=o()(t).data("withMergeRequestsEnabled"),this.withShared=void 0===o()(t).data("withShared")||o()(t).data("withShared"),this.includeProjectsInSubgroups=o()(t).data("includeProjectsInSubgroups")||!1,this.allowClear=o()(t).data("allowClear")||!1,n="Search for project",this.includeGroups&&(n+=" or group"),o()(t).select2({placeholder:n,minimumInputLength:0,query:(r=this,function(e){var t,n;return t=function(t){var n;return n={results:t},e.callback(n)},n=r.includeGroups?function(n){var r;return r=function(e){var r;return r=e.concat(n),t(r)},a.a.groups(e.term,{},r)}:t,r.groupId?a.a.groupProjects(r.groupId,e.term,{with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,with_shared:r.withShared,include_subgroups:r.includeProjectsInSubgroups},n):a.a.projects(e.term,{order_by:r.orderBy,with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,membership:!r.allProjects},n)}),id:function(e){return c?e.id:JSON.stringify({name:e.name,url:e.web_url})},text:function(e){return e.name_with_namespace||e.name},initSelection:function(e,t){return a.a.project(e.val()).then(function(e){var n=e.data;return t(n)})},allowClear:this.allowClear,dropdownCssClass:"ajax-project-dropdown"}),c?t:new s(t)})}n.d(t,"a",function(){return u})},29:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var r=n(0),o=n.n(r),a=n(14),c=n.n(a),i=n(1),s=n(19),u=n(6),l=n(7),d=n(28);function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t=o()("ul.clone-options-dropdown"),n=o()("#project_clone"),r=o()(".js-git-clone-holder .js-clone-dropdown-label"),a=document.querySelector(".js-mobile-git-clone .js-clone-dropdown-label"),i=r.text().trim();i.length>0&&o()("a:contains('".concat(i,"')"),t).addClass("is-active"),o()("a",t).on("click",function(e){e.preventDefault();var r=o()(e.currentTarget),c=r.attr("href"),i=r.data("cloneType");o()(".is-active",t).removeClass("is-active"),o()('a[data-clone-type="'.concat(i,'"]')).each(function(){var e=o()(this),t=e.find(".dropdown-menu-inner-title").text(),n=e.closest(".project-clone-holder").find(".js-clone-dropdown-label");e.toggleClass("is-active"),n.text(t)}),a?a.dataset.clipboardText=c:n.val(c),o()(".js-git-empty .js-clone").text(c)}),e.initRefSwitcher(),o()(".project-refs-select").on("change",function(){return o()(this).parents("form").submit()}),o()(".hide-no-ssh-message").on("click",function(e){return c.a.set("hide_no_ssh_message","false"),o()(this).parents(".no-ssh-key-message").remove(),e.preventDefault()}),o()(".hide-no-password-message").on("click",function(e){return c.a.set("hide_no_password_message","false"),o()(this).parents(".no-password-message").remove(),e.preventDefault()}),o()(".hide-auto-devops-implicitly-enabled-banner").on("click",function(e){var t=o()(this).data("project-id"),n="hide_auto_devops_implicitly_enabled_banner_".concat(t);return c.a.set(n,"false"),o()(this).parents(".auto-devops-implicitly-enabled-banner").remove(),e.preventDefault()}),e.projectSelectDropdown()}var t,n,r;return t=e,r=[{key:"projectSelectDropdown",value:function(){Object(d.a)(),o()(".project-item-select").on("click",function(t){return e.changeProject(o()(t.currentTarget).val())})}},{key:"changeProject",value:function(e){return window.location=e}},{key:"initRefSwitcher",value:function(){var e=document.createElement("li"),t=document.createElement("a");return t.href="#",o()(".js-project-refs-dropdown").each(function(){var n,r;return n=o()(this),r=n.data("selected"),n.glDropdown({data:function(e,t){u.a.get(n.data("refsUrl"),{params:{ref:n.data("ref"),search:e}}).then(function(e){var n=e.data;return t(n)}).catch(function(){return Object(l.a)(Object(i.a)("An error occurred while getting projects"))})},selectable:!0,filterable:!0,filterRemote:!0,filterByText:!0,inputFieldName:n.data("inputFieldName"),fieldName:n.data("fieldName"),renderRow:function(n){var o=e.cloneNode(!1);if(null!=n.header)o.className="dropdown-header",o.textContent=n.header;else{var a=t.cloneNode(!1);n===r&&(a.className="is-active"),a.textContent=n,a.dataset.ref=n,o.appendChild(a)}return o},id:function(e,t){return t.attr("data-ref")},toggleLabel:function(e,t){return t.text().trim()},clicked:function(e){if(e.e.preventDefault(),o()('input[name="ref"]').length){var t=n.closest("form"),r=n.data("visit"),a=!!r||r,c=t.attr("action"),i=-1===c.indexOf("?")?"?":"&";a&&Object(s.g)("".concat(c).concat(i).concat(t.serialize()))}}})})}}],(n=null)&&f(t.prototype,n),r&&f(t,r),e}()},44:function(e,t,n){"use strict";n.r(t);var r=n(38),o=n(36),a=n(29),c=n(27);document.addEventListener("DOMContentLoaded",function(){var e=document.body.dataset.page;if(["projects:clusters:new","projects:clusters:create_gcp","projects:clusters:create_user"].indexOf(e)>-1){var t=document.querySelector(".gcp-signup-offer");t&&new o.a(t),Object(r.a)()}new a.a,new c.a})}},[[1289,1,0,2]]]);
//# sourceMappingURL=pages.projects.3db23169.chunk.js.map