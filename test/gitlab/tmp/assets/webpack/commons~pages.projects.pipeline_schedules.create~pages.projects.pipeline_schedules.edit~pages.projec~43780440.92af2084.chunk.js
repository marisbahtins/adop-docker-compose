(this.webpackJsonp=this.webpackJsonp||[]).push([[9],{201:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(5),o=n.n(r);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.defaultToggleLabel=t.defaultToggleLabel,this.fieldName=t.fieldName,this.onSelect=t.onSelect||function(){},this.getDataOption=t.getData,this.getDataRemote=!!t.filterRemote,this.createNewItemFromValueOption=t.createNewItemFromValue,this.$dropdown=t.$dropdown,this.$dropdownContainer=this.$dropdown.parent(),this.$dropdownFooter=this.$dropdownContainer.find(".dropdown-footer"),this.$createButton=this.$dropdownContainer.find(".js-dropdown-create-new-item"),this.buildDropdown(),this.bindEvents(),this.toggleFooter(!0)}var t,n,r;return t=e,(n=[{key:"buildDropdown",value:function(){var e=this;this.$dropdown.glDropdown({data:this.getData.bind(this),filterable:!0,filterRemote:this.getDataRemote,search:{fields:["text"]},selectable:!0,toggleLabel:function(e){return e&&"id"in e?o.a.escape(e.title):this.defaultToggleLabel},fieldName:this.fieldName,text:function(e){return o.a.escape(e.text)},id:function(e){return o.a.escape(e.id)},onFilter:this.toggleCreateNewButton.bind(this),clicked:function(t){t.e.preventDefault(),e.onSelect()}})}},{key:"clearDropdown",value:function(){this.$dropdownContainer.find(".dropdown-content").html(""),this.$dropdownContainer.find(".dropdown-input-field").val("")}},{key:"bindEvents",value:function(){this.$createButton.on("click",this.onClickCreateWildcard.bind(this))}},{key:"onClickCreateWildcard",value:function(e){e.preventDefault(),this.refreshData(),this.$dropdown.data("glDropdown").selectRowAtIndex()}},{key:"refreshData",value:function(){this.$dropdown.data("glDropdown").remote.execute()}},{key:"getData",value:function(e,t){var n=this;this.getDataOption(e,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=e;n.selectedItem&&e.some(function(e){return e.id===n.selectedItem.id})||(r=e.concat(n.selectedItem||[])),t(r)})}},{key:"createNewItemFromValue",value:function(e){return this.createNewItemFromValueOption?this.createNewItemFromValueOption(e):{title:e,id:e,text:e}}},{key:"toggleCreateNewButton",value:function(e){e&&(this.selectedItem=this.createNewItemFromValue(e),this.$dropdownContainer.find(".js-dropdown-create-new-item code").text(e)),this.toggleFooter(!e)}},{key:"toggleFooter",value:function(e){this.$dropdownFooter.toggleClass("hidden",e)}}])&&a(t.prototype,n),r&&a(t,r),e}()},27:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n(2),o=n.n(r),a=n(4),i=n(43);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e=s(this,u(t).call(this)),o.a.bind("g p",function(){return Object(a.a)(".shortcuts-project")}),o.a.bind("g v",function(){return Object(a.a)(".shortcuts-project-activity")}),o.a.bind("g r",function(){return Object(a.a)(".shortcuts-project-releases")}),o.a.bind("g f",function(){return Object(a.a)(".shortcuts-tree")}),o.a.bind("g c",function(){return Object(a.a)(".shortcuts-commits")}),o.a.bind("g j",function(){return Object(a.a)(".shortcuts-builds")}),o.a.bind("g n",function(){return Object(a.a)(".shortcuts-network")}),o.a.bind("g d",function(){return Object(a.a)(".shortcuts-repository-charts")}),o.a.bind("g i",function(){return Object(a.a)(".shortcuts-issues")}),o.a.bind("g b",function(){return Object(a.a)(".shortcuts-issue-boards")}),o.a.bind("g m",function(){return Object(a.a)(".shortcuts-merge_requests")}),o.a.bind("g w",function(){return Object(a.a)(".shortcuts-wiki")}),o.a.bind("g s",function(){return Object(a.a)(".shortcuts-snippets")}),o.a.bind("g k",function(){return Object(a.a)(".shortcuts-kubernetes")}),o.a.bind("g e",function(){return Object(a.a)(".shortcuts-environments")}),o.a.bind("g l",function(){return Object(a.a)(".shortcuts-metrics")}),o.a.bind("i",function(){return Object(a.a)(".shortcuts-new-issue")}),e.enabledHelp.push(".hidden-shortcut.project"),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,i["a"]),t}()},28:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(12),i=n(31);function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.projectSelectInput=o()(t),this.newItemBtn=o()(".new-project-item-link"),this.resourceType=this.newItemBtn.data("type"),this.resourceLabel=this.newItemBtn.data("label"),this.formattedText=this.deriveTextVariants(),this.groupId=this.projectSelectInput.data("groupId"),this.bindEvents(),this.initLocalStorage()}var t,n,r;return t=e,(n=[{key:"bindEvents",value:function(){var e=this;this.projectSelectInput.siblings(".new-project-item-select-button").on("click",function(t){return e.openDropdown(t)}),this.newItemBtn.on("click",function(t){e.getProjectFromLocalStorage()||(t.preventDefault(),e.openDropdown(t))}),this.projectSelectInput.on("change",function(){return e.selectProject()})}},{key:"initLocalStorage",value:function(){i.a.isLocalStorageAccessSafe()&&(this.localStorageKey=["group",this.groupId,this.formattedText.localStorageItemType,"recent-project"].join("-"),this.setBtnTextFromLocalStorage())}},{key:"openDropdown",value:function(e){o()(e.currentTarget).siblings(".project-item-select").select2("open")}},{key:"selectProject",value:function(){var e=JSON.parse(this.projectSelectInput.val()),t={url:"".concat(e.url,"/").concat(this.projectSelectInput.data("relativePath")),name:e.name};this.setNewItemBtnAttributes(t),this.setProjectInLocalStorage(t)}},{key:"setBtnTextFromLocalStorage",value:function(){var e=this.getProjectFromLocalStorage();this.setNewItemBtnAttributes(e)}},{key:"setNewItemBtnAttributes",value:function(e){e?(this.newItemBtn.attr("href",e.url),this.newItemBtn.text("".concat(this.formattedText.defaultTextPrefix," in ").concat(e.name))):this.newItemBtn.text("Select project to create ".concat(this.formattedText.presetTextSuffix))}},{key:"getProjectFromLocalStorage",value:function(){var e=localStorage.getItem(this.localStorageKey);return JSON.parse(e)}},{key:"setProjectInLocalStorage",value:function(e){var t=JSON.stringify(e);localStorage.setItem(this.localStorageKey,t)}},{key:"deriveTextVariants",value:function(){var e=this.resourceLabel;return{localStorageItemType:"new-".concat(this.resourceType.split("_").join("-").slice(0,-1)),defaultTextPrefix:e,presetTextSuffix:this.resourceType.split("_").join(" ").slice(0,-1)}}}])&&c(t.prototype,n),r&&c(t,r),e}();function u(){o()(".ajax-project-select").each(function(e,t){var n,r,i=o()(t).data("simpleFilter")||!1;return this.groupId=o()(t).data("groupId"),this.includeGroups=o()(t).data("includeGroups"),this.allProjects=o()(t).data("allProjects")||!1,this.orderBy=o()(t).data("orderBy")||"id",this.withIssuesEnabled=o()(t).data("withIssuesEnabled"),this.withMergeRequestsEnabled=o()(t).data("withMergeRequestsEnabled"),this.withShared=void 0===o()(t).data("withShared")||o()(t).data("withShared"),this.includeProjectsInSubgroups=o()(t).data("includeProjectsInSubgroups")||!1,this.allowClear=o()(t).data("allowClear")||!1,n="Search for project",this.includeGroups&&(n+=" or group"),o()(t).select2({placeholder:n,minimumInputLength:0,query:(r=this,function(e){var t,n;return t=function(t){var n;return n={results:t},e.callback(n)},n=r.includeGroups?function(n){var r;return r=function(e){var r;return r=e.concat(n),t(r)},a.a.groups(e.term,{},r)}:t,r.groupId?a.a.groupProjects(r.groupId,e.term,{with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,with_shared:r.withShared,include_subgroups:r.includeProjectsInSubgroups},n):a.a.projects(e.term,{order_by:r.orderBy,with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,membership:!r.allProjects},n)}),id:function(e){return i?e.id:JSON.stringify({name:e.name,url:e.web_url})},text:function(e){return e.name_with_namespace||e.name},initSelection:function(e,t){return a.a.project(e.val()).then(function(e){var n=e.data;return t(n)})},allowClear:this.allowClear,dropdownCssClass:"ajax-project-dropdown"}),i?t:new s(t)})}n.d(t,"a",function(){return u})},286:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(0),o=n.n(r),a=n(7),i=n(1),c=n(13);function s(e,t){e.classList.toggle("is-checked",t)}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};e.querySelectorAll(".js-project-feature-toggle").forEach(function(e){var n=e.querySelector(".js-project-feature-toggle-input");s(e,Object(c.A)(n.value)),e.addEventListener("click",function(e,t,n){var r=Object(c.A)(t.value);s(e,!r),e.setAttribute("disabled",!0),e.classList.toggle("is-loading",!0),Promise.resolve(n(!r,e)).then(function(){t.setAttribute("value",!r)}).catch(function(){s(e,r)}).then(function(){e.removeAttribute("disabled"),e.classList.toggle("is-loading",!1),o()(t).trigger("trigger-change")}).catch(function(){Object(a.a)(Object(i.a)("Something went wrong when toggling the button"))})}.bind(null,e,n,t))})}},29:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var r=n(0),o=n.n(r),a=n(14),i=n.n(a),c=n(1),s=n(19),u=n(6),l=n(7),d=n(28);function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t=o()("ul.clone-options-dropdown"),n=o()("#project_clone"),r=o()(".js-git-clone-holder .js-clone-dropdown-label"),a=document.querySelector(".js-mobile-git-clone .js-clone-dropdown-label"),c=r.text().trim();c.length>0&&o()("a:contains('".concat(c,"')"),t).addClass("is-active"),o()("a",t).on("click",function(e){e.preventDefault();var r=o()(e.currentTarget),i=r.attr("href"),c=r.data("cloneType");o()(".is-active",t).removeClass("is-active"),o()('a[data-clone-type="'.concat(c,'"]')).each(function(){var e=o()(this),t=e.find(".dropdown-menu-inner-title").text(),n=e.closest(".project-clone-holder").find(".js-clone-dropdown-label");e.toggleClass("is-active"),n.text(t)}),a?a.dataset.clipboardText=i:n.val(i),o()(".js-git-empty .js-clone").text(i)}),e.initRefSwitcher(),o()(".project-refs-select").on("change",function(){return o()(this).parents("form").submit()}),o()(".hide-no-ssh-message").on("click",function(e){return i.a.set("hide_no_ssh_message","false"),o()(this).parents(".no-ssh-key-message").remove(),e.preventDefault()}),o()(".hide-no-password-message").on("click",function(e){return i.a.set("hide_no_password_message","false"),o()(this).parents(".no-password-message").remove(),e.preventDefault()}),o()(".hide-auto-devops-implicitly-enabled-banner").on("click",function(e){var t=o()(this).data("project-id"),n="hide_auto_devops_implicitly_enabled_banner_".concat(t);return i.a.set(n,"false"),o()(this).parents(".auto-devops-implicitly-enabled-banner").remove(),e.preventDefault()}),e.projectSelectDropdown()}var t,n,r;return t=e,r=[{key:"projectSelectDropdown",value:function(){Object(d.a)(),o()(".project-item-select").on("click",function(t){return e.changeProject(o()(t.currentTarget).val())})}},{key:"changeProject",value:function(e){return window.location=e}},{key:"initRefSwitcher",value:function(){var e=document.createElement("li"),t=document.createElement("a");return t.href="#",o()(".js-project-refs-dropdown").each(function(){var n,r;return n=o()(this),r=n.data("selected"),n.glDropdown({data:function(e,t){u.a.get(n.data("refsUrl"),{params:{ref:n.data("ref"),search:e}}).then(function(e){var n=e.data;return t(n)}).catch(function(){return Object(l.a)(Object(c.a)("An error occurred while getting projects"))})},selectable:!0,filterable:!0,filterRemote:!0,filterByText:!0,inputFieldName:n.data("inputFieldName"),fieldName:n.data("fieldName"),renderRow:function(n){var o=e.cloneNode(!1);if(null!=n.header)o.className="dropdown-header",o.textContent=n.header;else{var a=t.cloneNode(!1);n===r&&(a.className="is-active"),a.textContent=n,a.dataset.ref=n,o.appendChild(a)}return o},id:function(e,t){return t.attr("data-ref")},toggleLabel:function(e,t){return t.text().trim()},clicked:function(e){if(e.e.preventDefault(),o()('input[name="ref"]').length){var t=n.closest("form"),r=n.data("visit"),a=!!r||r,i=t.attr("action"),c=-1===i.indexOf("?")?"?":"&";a&&Object(s.g)("".concat(i).concat(c).concat(t.serialize()))}}})})}}],(n=null)&&f(t.prototype,n),r&&f(t,r),e}()},319:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(1),o=n(13);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){var n=t.container,r=t.valueSelector,o=void 0===r?".js-secret-value":r,a=t.placeholderSelector,i=void 0===a?".js-secret-value-placeholder":a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=n,this.valueSelector=o,this.placeholderSelector=i}var t,n,i;return t=e,(n=[{key:"init",value:function(){if(this.revealButton=this.container.querySelector(".js-secret-value-reveal-button"),this.revealButton){var e=Object(o.A)(this.revealButton.dataset.secretRevealStatus);this.updateDom(e),this.revealButton.addEventListener("click",this.onRevealButtonClicked.bind(this))}}},{key:"onRevealButtonClicked",value:function(){var e=Object(o.A)(this.revealButton.dataset.secretRevealStatus);this.updateDom(!e)}},{key:"updateDom",value:function(e){var t=this.container.querySelectorAll(this.valueSelector);t.forEach(function(t){t.classList.toggle("hide",!e)}),this.container.querySelectorAll(this.placeholderSelector).forEach(function(t){t.classList.toggle("hide",e)}),this.revealButton.textContent=e?Object(r.d)("Hide value","Hide values",t.length):Object(r.d)("Reveal value","Reveal values",t.length),this.revealButton.dataset.secretRevealStatus=e}}])&&a(t.prototype,n),i&&a(t,i),e}()},324:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(0),o=n.n(r),a=n(357);function i(e){var t=e.container,n=e.formField,r=void 0===n?"variables":n,i=o()(t),c=new a.a({container:i,formField:r});c.init(),i.closest("form").on("submit trigger-submit",function(){var e=i.find(".js-row").last();c.checkIfRowTouched(e)||e.find("input, textarea").attr("name","")})}},357:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var r=n(0),o=n.n(r),a=n(13),i=n(1),c=n(286),s=n(201),u=n(319);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=Object(i.e)("CiVariable|All environments");function h(e){return{title:"*"===e?f:e,id:e,text:"*"===e?Object(i.e)("CiVariable|* (All environments)"):e}}var p=function(){function e(t){var n=t.container,r=t.formField;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$container=o()(n),this.formField=r,this.environmentDropdownMap=new WeakMap,this.inputMap={id:{selector:".js-ci-variable-input-id",default:""},key:{selector:".js-ci-variable-input-key",default:""},secret_value:{selector:".js-ci-variable-input-value",default:""},protected:{selector:".js-ci-variable-input-protected",default:o()(".js-ci-variable-input-protected").attr("data-default")},environment_scope:{selector:'input[name="'.concat(this.formField,'[variables_attributes][][environment_scope]"]'),default:"*"},_destroy:{selector:".js-ci-variable-input-destroy",default:""}},this.secretValues=new u.a({container:this.$container[0],valueSelector:".js-row:not(:last-child) .js-secret-value",placeholderSelector:".js-row:not(:last-child) .js-secret-value-placeholder"})}var t,n,r;return t=e,(n=[{key:"init",value:function(){this.bindEvents(),this.secretValues.init()}},{key:"bindEvents",value:function(){var e=this;this.$container.find(".js-row").each(function(t,n){e.initRow(n)}),this.$container.on("click",".js-row-remove-button",function(t){t.preventDefault(),e.removeRow(o()(t.currentTarget).closest(".js-row"))});var t=Object.keys(this.inputMap).map(function(t){return e.inputMap[t].selector}).join(",");this.$container.on("blur",t,function(t){var n=o()(t.currentTarget).closest(".js-row");n.is(":not(:last-child)")&&!e.checkIfRowTouched(n)&&e.removeRow(n)}),this.$container.on("input trigger-change",t,function(){var t=e.$container.find(".js-row").last();e.checkIfRowTouched(t)&&e.insertRow(t)})}},{key:"initRow",value:function(e){var t=this,n=o()(e);Object(c.a)(n[0]),n.find(this.inputMap.secret_value.selector).css("height","");var r=n.find(".js-variable-environment-toggle");if(r.length){var a=new s.a({$dropdown:r,defaultToggleLabel:f,fieldName:"".concat(this.formField,"[variables_attributes][][environment_scope]"),getData:function(e,n){return n(t.getEnvironmentValues())},createNewItemFromValue:h,onSelect:function(){t.refreshDropdownData(),n.find(t.inputMap.environment_scope.selector).trigger("trigger-change")}});a.clearDropdown(),this.environmentDropdownMap.set(n[0],a)}}},{key:"insertRow",value:function(e){var t=this,n=e.clone();n.removeAttr("data-is-persisted"),Object.keys(this.inputMap).forEach(function(e){var r=t.inputMap[e];n.find(r.selector).val(r.default)}),n.find(".dropdown-menu.show").each(function(e,t){t.classList.remove("show")}),this.initRow(n),e.after(n)}},{key:"removeRow",value:function(e){var t=o()(e);Object(a.A)(t.attr("data-is-persisted"))?(t.hide(),t.find(this.inputMap._destroy.selector).val(!0)):t.remove(),this.refreshDropdownData()}},{key:"checkIfRowTouched",value:function(e){var t=this;return Object.keys(this.inputMap).some(function(n){var r=t.inputMap[n],o=e.find(r.selector);return o.length&&o.val()!==r.default})}},{key:"toggleEnableRow",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$container.find(this.inputMap.key.selector).attr("disabled",!e),this.$container.find(".js-row-remove-button").attr("disabled",!e)}},{key:"hideValues",value:function(){this.secretValues.updateDom(!1)}},{key:"getAllData",value:function(){var e=this;return this.$container.find(".js-row").toArray().slice(0,-1).map(function(t){var n={};return Object.keys(e.inputMap).forEach(function(r){var a=e.inputMap[r],i=o()(t).find(a.selector);i.length&&(n[r]=i.val())}),n})}},{key:"getEnvironmentValues",value:function(){var e=this.$container.find(this.inputMap.environment_scope.selector).toArray().reduce(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){l(e,t,n[t])})}return e}({},e,l({},t.value,t.value))},{});return Object.keys(e).map(h)}},{key:"refreshDropdownData",value:function(){var e=this;this.$container.find(".js-row").each(function(t,n){var r=e.environmentDropdownMap.get(n);r&&r.refreshData()})}}])&&d(t.prototype,n),r&&d(t,r),e}()},44:function(e,t,n){"use strict";n.r(t);var r=n(38),o=n(36),a=n(29),i=n(27);document.addEventListener("DOMContentLoaded",function(){var e=document.body.dataset.page;if(["projects:clusters:new","projects:clusters:create_gcp","projects:clusters:create_user"].indexOf(e)>-1){var t=document.querySelector(".gcp-signup-offer");t&&new o.a(t),Object(r.a)()}new a.a,new i.a})}}]);
//# sourceMappingURL=commons~pages.projects.pipeline_schedules.create~pages.projects.pipeline_schedules.edit~pages.projec~43780440.92af2084.chunk.js.map