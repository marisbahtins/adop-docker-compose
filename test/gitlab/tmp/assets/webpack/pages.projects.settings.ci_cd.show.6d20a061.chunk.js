(this.webpackJsonp=this.webpackJsonp||[]).push([[164],{1363:function(e,t,n){n(42),n(44),e.exports=n(1364)},1364:function(e,t,n){"use strict";n.r(t);var r=n(155),a=n(319),o=n(478);document.addEventListener("DOMContentLoaded",function(){Object(r.a)();var e=document.querySelector(".js-secret-runner-token");e&&new a.a({container:e}).init();var t=document.querySelector(".js-ci-variable-list-section");new o.a({container:t,saveButton:t.querySelector(".js-ci-variables-save-button"),errorBox:t.querySelector(".js-ci-variable-error-box"),saveEndpoint:t.dataset.saveEndpoint});var n=document.querySelector(".js-extra-settings"),i=document.querySelector(".js-instance-default-badge");document.querySelector(".js-toggle-extra-settings").addEventListener("click",function(e){var t=e.target;i&&(i.style.display="none"),n.classList.toggle("hidden",!t.checked)})})},155:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(0),a=n.n(r),o=n(1);function i(e){e.find(".js-settings-toggle:not(.js-settings-toggle-trigger-only)").text(Object(o.a)("Collapse")),e.find(".settings-content").off("scroll.expandSection").scrollTop(0),e.addClass("expanded"),e.hasClass("no-animate")||e.addClass("animating").one("animationend.animateSection",function(){return e.removeClass("animating")})}function c(e){e.removeClass("no-animate"),e.hasClass("expanded")?function(e){e.find(".js-settings-toggle:not(.js-settings-toggle-trigger-only)").text(Object(o.a)("Expand")),e.find(".settings-content").on("scroll.expandSection",function(){return i(e)}),e.removeClass("expanded"),e.hasClass("no-animate")||e.addClass("animating").one("animationend.animateSection",function(){return e.removeClass("animating")})}(e):i(e)}function s(){if(a()(".settings").each(function(e,t){var n=a()(t);n.on("click.toggleSection",".js-settings-toggle",function(){return c(n)}),n.hasClass("expanded")||n.find(".settings-content").on("scroll.expandSection",function(){n.removeClass("no-animate"),i(n)})}),window.location.hash){var e=a()(window.location.hash);e.length&&e.hasClass("settings")&&i(e)}}},201:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(5),a=n.n(r);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.defaultToggleLabel=t.defaultToggleLabel,this.fieldName=t.fieldName,this.onSelect=t.onSelect||function(){},this.getDataOption=t.getData,this.getDataRemote=!!t.filterRemote,this.createNewItemFromValueOption=t.createNewItemFromValue,this.$dropdown=t.$dropdown,this.$dropdownContainer=this.$dropdown.parent(),this.$dropdownFooter=this.$dropdownContainer.find(".dropdown-footer"),this.$createButton=this.$dropdownContainer.find(".js-dropdown-create-new-item"),this.buildDropdown(),this.bindEvents(),this.toggleFooter(!0)}var t,n,r;return t=e,(n=[{key:"buildDropdown",value:function(){var e=this;this.$dropdown.glDropdown({data:this.getData.bind(this),filterable:!0,filterRemote:this.getDataRemote,search:{fields:["text"]},selectable:!0,toggleLabel:function(e){return e&&"id"in e?a.a.escape(e.title):this.defaultToggleLabel},fieldName:this.fieldName,text:function(e){return a.a.escape(e.text)},id:function(e){return a.a.escape(e.id)},onFilter:this.toggleCreateNewButton.bind(this),clicked:function(t){t.e.preventDefault(),e.onSelect()}})}},{key:"clearDropdown",value:function(){this.$dropdownContainer.find(".dropdown-content").html(""),this.$dropdownContainer.find(".dropdown-input-field").val("")}},{key:"bindEvents",value:function(){this.$createButton.on("click",this.onClickCreateWildcard.bind(this))}},{key:"onClickCreateWildcard",value:function(e){e.preventDefault(),this.refreshData(),this.$dropdown.data("glDropdown").selectRowAtIndex()}},{key:"refreshData",value:function(){this.$dropdown.data("glDropdown").remote.execute()}},{key:"getData",value:function(e,t){var n=this;this.getDataOption(e,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=e;n.selectedItem&&e.some(function(e){return e.id===n.selectedItem.id})||(r=e.concat(n.selectedItem||[])),t(r)})}},{key:"createNewItemFromValue",value:function(e){return this.createNewItemFromValueOption?this.createNewItemFromValueOption(e):{title:e,id:e,text:e}}},{key:"toggleCreateNewButton",value:function(e){e&&(this.selectedItem=this.createNewItemFromValue(e),this.$dropdownContainer.find(".js-dropdown-create-new-item code").text(e)),this.toggleFooter(!e)}},{key:"toggleFooter",value:function(e){this.$dropdownFooter.toggleClass("hidden",e)}}])&&o(t.prototype,n),r&&o(t,r),e}()},27:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n(2),a=n.n(r),o=n(4),i=n(43);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e=s(this,l(t).call(this)),a.a.bind("g p",function(){return Object(o.a)(".shortcuts-project")}),a.a.bind("g v",function(){return Object(o.a)(".shortcuts-project-activity")}),a.a.bind("g r",function(){return Object(o.a)(".shortcuts-project-releases")}),a.a.bind("g f",function(){return Object(o.a)(".shortcuts-tree")}),a.a.bind("g c",function(){return Object(o.a)(".shortcuts-commits")}),a.a.bind("g j",function(){return Object(o.a)(".shortcuts-builds")}),a.a.bind("g n",function(){return Object(o.a)(".shortcuts-network")}),a.a.bind("g d",function(){return Object(o.a)(".shortcuts-repository-charts")}),a.a.bind("g i",function(){return Object(o.a)(".shortcuts-issues")}),a.a.bind("g b",function(){return Object(o.a)(".shortcuts-issue-boards")}),a.a.bind("g m",function(){return Object(o.a)(".shortcuts-merge_requests")}),a.a.bind("g w",function(){return Object(o.a)(".shortcuts-wiki")}),a.a.bind("g s",function(){return Object(o.a)(".shortcuts-snippets")}),a.a.bind("g k",function(){return Object(o.a)(".shortcuts-kubernetes")}),a.a.bind("g e",function(){return Object(o.a)(".shortcuts-environments")}),a.a.bind("g l",function(){return Object(o.a)(".shortcuts-metrics")}),a.a.bind("i",function(){return Object(o.a)(".shortcuts-new-issue")}),e.enabledHelp.push(".hidden-shortcut.project"),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,i["a"]),t}()},28:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(12),i=n(31);function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.projectSelectInput=a()(t),this.newItemBtn=a()(".new-project-item-link"),this.resourceType=this.newItemBtn.data("type"),this.resourceLabel=this.newItemBtn.data("label"),this.formattedText=this.deriveTextVariants(),this.groupId=this.projectSelectInput.data("groupId"),this.bindEvents(),this.initLocalStorage()}var t,n,r;return t=e,(n=[{key:"bindEvents",value:function(){var e=this;this.projectSelectInput.siblings(".new-project-item-select-button").on("click",function(t){return e.openDropdown(t)}),this.newItemBtn.on("click",function(t){e.getProjectFromLocalStorage()||(t.preventDefault(),e.openDropdown(t))}),this.projectSelectInput.on("change",function(){return e.selectProject()})}},{key:"initLocalStorage",value:function(){i.a.isLocalStorageAccessSafe()&&(this.localStorageKey=["group",this.groupId,this.formattedText.localStorageItemType,"recent-project"].join("-"),this.setBtnTextFromLocalStorage())}},{key:"openDropdown",value:function(e){a()(e.currentTarget).siblings(".project-item-select").select2("open")}},{key:"selectProject",value:function(){var e=JSON.parse(this.projectSelectInput.val()),t={url:"".concat(e.url,"/").concat(this.projectSelectInput.data("relativePath")),name:e.name};this.setNewItemBtnAttributes(t),this.setProjectInLocalStorage(t)}},{key:"setBtnTextFromLocalStorage",value:function(){var e=this.getProjectFromLocalStorage();this.setNewItemBtnAttributes(e)}},{key:"setNewItemBtnAttributes",value:function(e){e?(this.newItemBtn.attr("href",e.url),this.newItemBtn.text("".concat(this.formattedText.defaultTextPrefix," in ").concat(e.name))):this.newItemBtn.text("Select project to create ".concat(this.formattedText.presetTextSuffix))}},{key:"getProjectFromLocalStorage",value:function(){var e=localStorage.getItem(this.localStorageKey);return JSON.parse(e)}},{key:"setProjectInLocalStorage",value:function(e){var t=JSON.stringify(e);localStorage.setItem(this.localStorageKey,t)}},{key:"deriveTextVariants",value:function(){var e=this.resourceLabel;return{localStorageItemType:"new-".concat(this.resourceType.split("_").join("-").slice(0,-1)),defaultTextPrefix:e,presetTextSuffix:this.resourceType.split("_").join(" ").slice(0,-1)}}}])&&c(t.prototype,n),r&&c(t,r),e}();function l(){a()(".ajax-project-select").each(function(e,t){var n,r,i=a()(t).data("simpleFilter")||!1;return this.groupId=a()(t).data("groupId"),this.includeGroups=a()(t).data("includeGroups"),this.allProjects=a()(t).data("allProjects")||!1,this.orderBy=a()(t).data("orderBy")||"id",this.withIssuesEnabled=a()(t).data("withIssuesEnabled"),this.withMergeRequestsEnabled=a()(t).data("withMergeRequestsEnabled"),this.withShared=void 0===a()(t).data("withShared")||a()(t).data("withShared"),this.includeProjectsInSubgroups=a()(t).data("includeProjectsInSubgroups")||!1,this.allowClear=a()(t).data("allowClear")||!1,n="Search for project",this.includeGroups&&(n+=" or group"),a()(t).select2({placeholder:n,minimumInputLength:0,query:(r=this,function(e){var t,n;return t=function(t){var n;return n={results:t},e.callback(n)},n=r.includeGroups?function(n){var r;return r=function(e){var r;return r=e.concat(n),t(r)},o.a.groups(e.term,{},r)}:t,r.groupId?o.a.groupProjects(r.groupId,e.term,{with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,with_shared:r.withShared,include_subgroups:r.includeProjectsInSubgroups},n):o.a.projects(e.term,{order_by:r.orderBy,with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,membership:!r.allProjects},n)}),id:function(e){return i?e.id:JSON.stringify({name:e.name,url:e.web_url})},text:function(e){return e.name_with_namespace||e.name},initSelection:function(e,t){return o.a.project(e.val()).then(function(e){var n=e.data;return t(n)})},allowClear:this.allowClear,dropdownCssClass:"ajax-project-dropdown"}),i?t:new s(t)})}n.d(t,"a",function(){return l})},286:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(0),a=n.n(r),o=n(7),i=n(1),c=n(13);function s(e,t){e.classList.toggle("is-checked",t)}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};e.querySelectorAll(".js-project-feature-toggle").forEach(function(e){var n=e.querySelector(".js-project-feature-toggle-input");s(e,Object(c.A)(n.value)),e.addEventListener("click",function(e,t,n){var r=Object(c.A)(t.value);s(e,!r),e.setAttribute("disabled",!0),e.classList.toggle("is-loading",!0),Promise.resolve(n(!r,e)).then(function(){t.setAttribute("value",!r)}).catch(function(){s(e,r)}).then(function(){e.removeAttribute("disabled"),e.classList.toggle("is-loading",!1),a()(t).trigger("trigger-change")}).catch(function(){Object(o.a)(Object(i.a)("Something went wrong when toggling the button"))})}.bind(null,e,n,t))})}},29:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var r=n(0),a=n.n(r),o=n(14),i=n.n(o),c=n(1),s=n(19),l=n(6),u=n(7),d=n(28);function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t=a()("ul.clone-options-dropdown"),n=a()("#project_clone"),r=a()(".js-git-clone-holder .js-clone-dropdown-label"),o=document.querySelector(".js-mobile-git-clone .js-clone-dropdown-label"),c=r.text().trim();c.length>0&&a()("a:contains('".concat(c,"')"),t).addClass("is-active"),a()("a",t).on("click",function(e){e.preventDefault();var r=a()(e.currentTarget),i=r.attr("href"),c=r.data("cloneType");a()(".is-active",t).removeClass("is-active"),a()('a[data-clone-type="'.concat(c,'"]')).each(function(){var e=a()(this),t=e.find(".dropdown-menu-inner-title").text(),n=e.closest(".project-clone-holder").find(".js-clone-dropdown-label");e.toggleClass("is-active"),n.text(t)}),o?o.dataset.clipboardText=i:n.val(i),a()(".js-git-empty .js-clone").text(i)}),e.initRefSwitcher(),a()(".project-refs-select").on("change",function(){return a()(this).parents("form").submit()}),a()(".hide-no-ssh-message").on("click",function(e){return i.a.set("hide_no_ssh_message","false"),a()(this).parents(".no-ssh-key-message").remove(),e.preventDefault()}),a()(".hide-no-password-message").on("click",function(e){return i.a.set("hide_no_password_message","false"),a()(this).parents(".no-password-message").remove(),e.preventDefault()}),a()(".hide-auto-devops-implicitly-enabled-banner").on("click",function(e){var t=a()(this).data("project-id"),n="hide_auto_devops_implicitly_enabled_banner_".concat(t);return i.a.set(n,"false"),a()(this).parents(".auto-devops-implicitly-enabled-banner").remove(),e.preventDefault()}),e.projectSelectDropdown()}var t,n,r;return t=e,r=[{key:"projectSelectDropdown",value:function(){Object(d.a)(),a()(".project-item-select").on("click",function(t){return e.changeProject(a()(t.currentTarget).val())})}},{key:"changeProject",value:function(e){return window.location=e}},{key:"initRefSwitcher",value:function(){var e=document.createElement("li"),t=document.createElement("a");return t.href="#",a()(".js-project-refs-dropdown").each(function(){var n,r;return n=a()(this),r=n.data("selected"),n.glDropdown({data:function(e,t){l.a.get(n.data("refsUrl"),{params:{ref:n.data("ref"),search:e}}).then(function(e){var n=e.data;return t(n)}).catch(function(){return Object(u.a)(Object(c.a)("An error occurred while getting projects"))})},selectable:!0,filterable:!0,filterRemote:!0,filterByText:!0,inputFieldName:n.data("inputFieldName"),fieldName:n.data("fieldName"),renderRow:function(n){var a=e.cloneNode(!1);if(null!=n.header)a.className="dropdown-header",a.textContent=n.header;else{var o=t.cloneNode(!1);n===r&&(o.className="is-active"),o.textContent=n,o.dataset.ref=n,a.appendChild(o)}return a},id:function(e,t){return t.attr("data-ref")},toggleLabel:function(e,t){return t.text().trim()},clicked:function(e){if(e.e.preventDefault(),a()('input[name="ref"]').length){var t=n.closest("form"),r=n.data("visit"),o=!!r||r,i=t.attr("action"),c=-1===i.indexOf("?")?"?":"&";o&&Object(s.g)("".concat(i).concat(c).concat(t.serialize()))}}})})}}],(n=null)&&f(t.prototype,n),r&&f(t,r),e}()},319:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(1),a=n(13);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){var n=t.container,r=t.valueSelector,a=void 0===r?".js-secret-value":r,o=t.placeholderSelector,i=void 0===o?".js-secret-value-placeholder":o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=n,this.valueSelector=a,this.placeholderSelector=i}var t,n,i;return t=e,(n=[{key:"init",value:function(){if(this.revealButton=this.container.querySelector(".js-secret-value-reveal-button"),this.revealButton){var e=Object(a.A)(this.revealButton.dataset.secretRevealStatus);this.updateDom(e),this.revealButton.addEventListener("click",this.onRevealButtonClicked.bind(this))}}},{key:"onRevealButtonClicked",value:function(){var e=Object(a.A)(this.revealButton.dataset.secretRevealStatus);this.updateDom(!e)}},{key:"updateDom",value:function(e){var t=this.container.querySelectorAll(this.valueSelector);t.forEach(function(t){t.classList.toggle("hide",!e)}),this.container.querySelectorAll(this.placeholderSelector).forEach(function(t){t.classList.toggle("hide",e)}),this.revealButton.textContent=e?Object(r.d)("Hide value","Hide values",t.length):Object(r.d)("Reveal value","Reveal values",t.length),this.revealButton.dataset.secretRevealStatus=e}}])&&o(t.prototype,n),i&&o(t,i),e}()},357:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var r=n(0),a=n.n(r),o=n(13),i=n(1),c=n(286),s=n(201),l=n(319);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=Object(i.e)("CiVariable|All environments");function h(e){return{title:"*"===e?f:e,id:e,text:"*"===e?Object(i.e)("CiVariable|* (All environments)"):e}}var p=function(){function e(t){var n=t.container,r=t.formField;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$container=a()(n),this.formField=r,this.environmentDropdownMap=new WeakMap,this.inputMap={id:{selector:".js-ci-variable-input-id",default:""},key:{selector:".js-ci-variable-input-key",default:""},secret_value:{selector:".js-ci-variable-input-value",default:""},protected:{selector:".js-ci-variable-input-protected",default:a()(".js-ci-variable-input-protected").attr("data-default")},environment_scope:{selector:'input[name="'.concat(this.formField,'[variables_attributes][][environment_scope]"]'),default:"*"},_destroy:{selector:".js-ci-variable-input-destroy",default:""}},this.secretValues=new l.a({container:this.$container[0],valueSelector:".js-row:not(:last-child) .js-secret-value",placeholderSelector:".js-row:not(:last-child) .js-secret-value-placeholder"})}var t,n,r;return t=e,(n=[{key:"init",value:function(){this.bindEvents(),this.secretValues.init()}},{key:"bindEvents",value:function(){var e=this;this.$container.find(".js-row").each(function(t,n){e.initRow(n)}),this.$container.on("click",".js-row-remove-button",function(t){t.preventDefault(),e.removeRow(a()(t.currentTarget).closest(".js-row"))});var t=Object.keys(this.inputMap).map(function(t){return e.inputMap[t].selector}).join(",");this.$container.on("blur",t,function(t){var n=a()(t.currentTarget).closest(".js-row");n.is(":not(:last-child)")&&!e.checkIfRowTouched(n)&&e.removeRow(n)}),this.$container.on("input trigger-change",t,function(){var t=e.$container.find(".js-row").last();e.checkIfRowTouched(t)&&e.insertRow(t)})}},{key:"initRow",value:function(e){var t=this,n=a()(e);Object(c.a)(n[0]),n.find(this.inputMap.secret_value.selector).css("height","");var r=n.find(".js-variable-environment-toggle");if(r.length){var o=new s.a({$dropdown:r,defaultToggleLabel:f,fieldName:"".concat(this.formField,"[variables_attributes][][environment_scope]"),getData:function(e,n){return n(t.getEnvironmentValues())},createNewItemFromValue:h,onSelect:function(){t.refreshDropdownData(),n.find(t.inputMap.environment_scope.selector).trigger("trigger-change")}});o.clearDropdown(),this.environmentDropdownMap.set(n[0],o)}}},{key:"insertRow",value:function(e){var t=this,n=e.clone();n.removeAttr("data-is-persisted"),Object.keys(this.inputMap).forEach(function(e){var r=t.inputMap[e];n.find(r.selector).val(r.default)}),n.find(".dropdown-menu.show").each(function(e,t){t.classList.remove("show")}),this.initRow(n),e.after(n)}},{key:"removeRow",value:function(e){var t=a()(e);Object(o.A)(t.attr("data-is-persisted"))?(t.hide(),t.find(this.inputMap._destroy.selector).val(!0)):t.remove(),this.refreshDropdownData()}},{key:"checkIfRowTouched",value:function(e){var t=this;return Object.keys(this.inputMap).some(function(n){var r=t.inputMap[n],a=e.find(r.selector);return a.length&&a.val()!==r.default})}},{key:"toggleEnableRow",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$container.find(this.inputMap.key.selector).attr("disabled",!e),this.$container.find(".js-row-remove-button").attr("disabled",!e)}},{key:"hideValues",value:function(){this.secretValues.updateDom(!1)}},{key:"getAllData",value:function(){var e=this;return this.$container.find(".js-row").toArray().slice(0,-1).map(function(t){var n={};return Object.keys(e.inputMap).forEach(function(r){var o=e.inputMap[r],i=a()(t).find(o.selector);i.length&&(n[r]=i.val())}),n})}},{key:"getEnvironmentValues",value:function(){var e=this.$container.find(this.inputMap.environment_scope.selector).toArray().reduce(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){u(e,t,n[t])})}return e}({},e,u({},t.value,t.value))},{});return Object.keys(e).map(h)}},{key:"refreshDropdownData",value:function(){var e=this;this.$container.find(".js-row").each(function(t,n){var r=e.environmentDropdownMap.get(n);r&&r.refreshData()})}}])&&d(t.prototype,n),r&&d(t,r),e}()},44:function(e,t,n){"use strict";n.r(t);var r=n(38),a=n(36),o=n(29),i=n(27);document.addEventListener("DOMContentLoaded",function(){var e=document.body.dataset.page;if(["projects:clusters:new","projects:clusters:create_gcp","projects:clusters:create_user"].indexOf(e)>-1){var t=document.querySelector(".gcp-signup-offer");t&&new a.a(t),Object(r.a)()}new o.a,new i.a})},478:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var r=n(5),a=n.n(r),o=n(6),i=n(1),c=n(7),s=n(13),l=n(83),u=n(357);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t){var n=t.container,r=t.saveButton,a=t.errorBox,o=t.formField,i=void 0===o?"variables":o,c=t.saveEndpoint;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=n,this.saveButton=r,this.errorBox=a,this.saveEndpoint=c,this.variableList=new u.a({container:this.container,formField:i}),this.bindEvents(),this.variableList.init()}var t,n,r;return t=e,(n=[{key:"bindEvents",value:function(){this.saveButton.addEventListener("click",this.onSaveClicked.bind(this))}},{key:"onSaveClicked",value:function(){var e=this,t=this.saveButton.querySelector(".js-ci-variables-save-loading-icon");return t.classList.toggle("hide",!1),this.errorBox.classList.toggle("hide",!0),this.variableList.toggleEnableRow(!1),o.a.patch(this.saveEndpoint,{variables_attributes:this.variableList.getAllData()},{validateStatus:function(e){return e>=l.a.OK&&e<l.a.MULTIPLE_CHOICES||e===l.a.BAD_REQUEST}}).then(function(n){var r,o;t.classList.toggle("hide",!0),e.variableList.toggleEnableRow(!0),n.status===l.a.OK&&n.data?(e.updateRowsWithPersistedVariables(n.data.variables),e.variableList.hideValues()):n.status===l.a.BAD_REQUEST&&(e.errorBox.innerHTML=(r=n.data,o=[].concat(r).map(function(e){return"\n    <li>\n      ".concat(a.a.escape(e),"\n    </li>\n  ")}),"\n    <p>\n      ".concat(Object(i.e)("CiVariable|Validation failed"),"\n    </p>\n    <ul>\n      ").concat(o.join(""),"\n    </ul>\n  ")),e.errorBox.classList.toggle("hide",!1))}).catch(function(){t.classList.toggle("hide",!0),e.variableList.toggleEnableRow(!0),Object(c.a)(Object(i.e)("CiVariable|Error occurred while saving variables"))})}},{key:"updateRowsWithPersistedVariables",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[].concat(e).reduce(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){d(e,t,n[t])})}return e}({},e,d({},t.key,t))},{});this.container.querySelectorAll(".js-row").forEach(function(e){var n=e.querySelector(".js-ci-variable-input-destroy");if(Object(s.A)(n.value))e.remove();else{var r=e.querySelector(".js-ci-variable-input-key").value,a=t[r];a&&(e.querySelector(".js-ci-variable-input-id").value=a.id,e.setAttribute("data-is-persisted","true"))}})}}])&&f(t.prototype,n),r&&f(t,r),e}()},83:function(e,t,n){"use strict";n.d(t,"b",function(){return a});var r={ABORTED:0,OK:200,CREATED:201,ACCEPTED:202,NON_AUTHORITATIVE_INFORMATION:203,NO_CONTENT:204,RESET_CONTENT:205,PARTIAL_CONTENT:206,MULTI_STATUS:207,ALREADY_REPORTED:208,IM_USED:226,MULTIPLE_CHOICES:300,BAD_REQUEST:400,FORBIDDEN:403,NOT_FOUND:404,UNPROCESSABLE_ENTITY:422},a=[r.OK,r.CREATED,r.ACCEPTED,r.NON_AUTHORITATIVE_INFORMATION,r.NO_CONTENT,r.RESET_CONTENT,r.PARTIAL_CONTENT,r.MULTI_STATUS,r.ALREADY_REPORTED,r.IM_USED];t.a=r}},[[1363,1,0,2]]]);
//# sourceMappingURL=pages.projects.settings.ci_cd.show.6d20a061.chunk.js.map