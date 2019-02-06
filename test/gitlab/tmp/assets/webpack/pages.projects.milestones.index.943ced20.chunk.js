(this.webpackJsonp=this.webpackJsonp||[]).push([[142],{106:function(e,t,n){"use strict";var o=n(0),r=n.n(o),i=["danger","primary","success","warning"],s=["sm","md","lg","xl"],a={name:"GlModal",props:{id:{type:String,required:!1,default:null},modalSize:{type:String,required:!1,default:"md",validator:function(e){return s.includes(e)}},headerTitleText:{type:String,required:!1,default:""},footerPrimaryButtonVariant:{type:String,required:!1,default:"primary",validator:function(e){return i.includes(e)}},footerPrimaryButtonText:{type:String,required:!1,default:""}},computed:{modalSizeClass:function(){return"md"===this.modalSize?"":"modal-".concat(this.modalSize)}},mounted:function(){r()(this.$el).on("shown.bs.modal",this.opened).on("hidden.bs.modal",this.closed)},beforeDestroy:function(){r()(this.$el).off("shown.bs.modal",this.opened).off("hidden.bs.modal",this.closed)},methods:{emitCancel:function(e){this.$emit("cancel",e)},emitSubmit:function(e){this.$emit("submit",e)},opened:function(){this.$emit("open")},closed:function(){this.$emit("closed")}}},l=n(3),c=Object(l.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal fade",attrs:{id:e.id,tabindex:"-1",role:"dialog"}},[n("div",{staticClass:"modal-dialog",class:e.modalSizeClass,attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[e._t("header",[n("h4",{staticClass:"modal-title"},[e._t("title",[e._v(" "+e._s(e.headerTitleText)+" ")])],2),e._v(" "),n("button",{staticClass:"close js-modal-close-action",attrs:{"aria-label":e.s__("Modal|Close"),type:"button","data-dismiss":"modal"},on:{click:function(t){e.emitCancel(t)}}},[n("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])],2),e._v(" "),n("div",{staticClass:"modal-body"},[e._t("default")],2),e._v(" "),n("div",{staticClass:"modal-footer"},[e._t("footer",[n("button",{staticClass:"btn js-modal-cancel-action qa-modal-cancel-button",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(t){e.emitCancel(t)}}},[e._v("\n            "+e._s(e.s__("Modal|Cancel"))+"\n          ")]),e._v(" "),n("button",{staticClass:"btn js-modal-primary-action qa-modal-primary-button",class:"btn-"+e.footerPrimaryButtonVariant,attrs:{type:"button","data-dismiss":"modal"},on:{click:function(t){e.emitSubmit(t)}}},[e._v("\n            "+e._s(e.footerPrimaryButtonText)+"\n          ")])])],2)])])])},[],!1,null,null,null);c.options.__file="gl_modal.vue";t.a=c.exports},128:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r={name:"DeprecatedModal",props:{id:{type:String,required:!1},title:{type:String,required:!1},text:{type:String,required:!1},hideFooter:{type:Boolean,required:!1,default:!1},kind:{type:String,required:!1,default:"primary"},modalDialogClass:{type:String,required:!1,default:""},closeKind:{type:String,required:!1,default:"default"},closeButtonLabel:{type:String,required:!1,default:"Cancel"},primaryButtonLabel:{type:String,required:!1,default:""},secondaryButtonLabel:{type:String,required:!1,default:""},submitDisabled:{type:Boolean,required:!1,default:!1}},computed:{btnKindClass:function(){return o({},"btn-".concat(this.kind),!0)},btnCancelKindClass:function(){return o({},"btn-".concat(this.closeKind),!0)}},methods:{emitCancel:function(e){this.$emit("cancel",e)},emitSubmit:function(e){this.$emit("submit",e)}}},i=n(3),s=Object(i.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal-open"},[n("div",{staticClass:"modal",class:e.id?"":"d-block",attrs:{id:e.id,role:"dialog",tabindex:"-1"}},[n("div",{staticClass:"modal-dialog",class:e.modalDialogClass,attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[e._t("header",[n("h4",{staticClass:"modal-title float-left"},[e._v(e._s(e.title))]),e._v(" "),n("button",{staticClass:"close float-right",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(t){e.emitCancel(t)}}},[n("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])],2),e._v(" "),n("div",{staticClass:"modal-body"},[e._t("body",[n("p",[e._v(e._s(e.text))])],{text:e.text})],2),e._v(" "),e.hideFooter?e._e():n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn",class:e.btnCancelKindClass,attrs:{type:"button","data-dismiss":"modal"},on:{click:function(t){e.emitCancel(t)}}},[e._v("\n            "+e._s(e.closeButtonLabel)+"\n          ")]),e._v(" "),e.secondaryButtonLabel?e._t("secondary-button",[e.secondaryButtonLabel?n("button",{staticClass:"btn",attrs:{type:"button","data-dismiss":"modal"}},[e._v("\n              "+e._s(e.secondaryButtonLabel)+"\n            ")]):e._e()]):e._e(),e._v(" "),e.primaryButtonLabel?n("button",{staticClass:"btn js-primary-button",class:e.btnKindClass,attrs:{disabled:e.submitDisabled,type:"button","data-dismiss":"modal"},on:{click:function(t){e.emitSubmit(t)}}},[e._v("\n            "+e._s(e.primaryButtonLabel)+"\n          ")]):e._e()],2)])])]),e._v(" "),e.id?e._e():n("div",{staticClass:"modal-backdrop fade show"})])},[],!1,null,null,null);s.options.__file="deprecated_modal.vue";t.a=s.exports},1324:function(e,t,n){n(42),n(44),e.exports=n(1325)},1325:function(e,t,n){"use strict";n.r(t);var o=n(391);document.addEventListener("DOMContentLoaded",o.default)},27:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var o=n(2),r=n.n(o),i=n(4),s=n(43);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e=l(this,c(t).call(this)),r.a.bind("g p",function(){return Object(i.a)(".shortcuts-project")}),r.a.bind("g v",function(){return Object(i.a)(".shortcuts-project-activity")}),r.a.bind("g r",function(){return Object(i.a)(".shortcuts-project-releases")}),r.a.bind("g f",function(){return Object(i.a)(".shortcuts-tree")}),r.a.bind("g c",function(){return Object(i.a)(".shortcuts-commits")}),r.a.bind("g j",function(){return Object(i.a)(".shortcuts-builds")}),r.a.bind("g n",function(){return Object(i.a)(".shortcuts-network")}),r.a.bind("g d",function(){return Object(i.a)(".shortcuts-repository-charts")}),r.a.bind("g i",function(){return Object(i.a)(".shortcuts-issues")}),r.a.bind("g b",function(){return Object(i.a)(".shortcuts-issue-boards")}),r.a.bind("g m",function(){return Object(i.a)(".shortcuts-merge_requests")}),r.a.bind("g w",function(){return Object(i.a)(".shortcuts-wiki")}),r.a.bind("g s",function(){return Object(i.a)(".shortcuts-snippets")}),r.a.bind("g k",function(){return Object(i.a)(".shortcuts-kubernetes")}),r.a.bind("g e",function(){return Object(i.a)(".shortcuts-environments")}),r.a.bind("g l",function(){return Object(i.a)(".shortcuts-metrics")}),r.a.bind("i",function(){return Object(i.a)(".shortcuts-new-issue")}),e.enabledHelp.push(".hidden-shortcut.project"),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,s["a"]),t}()},28:function(e,t,n){"use strict";var o=n(0),r=n.n(o),i=n(12),s=n(31);function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.projectSelectInput=r()(t),this.newItemBtn=r()(".new-project-item-link"),this.resourceType=this.newItemBtn.data("type"),this.resourceLabel=this.newItemBtn.data("label"),this.formattedText=this.deriveTextVariants(),this.groupId=this.projectSelectInput.data("groupId"),this.bindEvents(),this.initLocalStorage()}var t,n,o;return t=e,(n=[{key:"bindEvents",value:function(){var e=this;this.projectSelectInput.siblings(".new-project-item-select-button").on("click",function(t){return e.openDropdown(t)}),this.newItemBtn.on("click",function(t){e.getProjectFromLocalStorage()||(t.preventDefault(),e.openDropdown(t))}),this.projectSelectInput.on("change",function(){return e.selectProject()})}},{key:"initLocalStorage",value:function(){s.a.isLocalStorageAccessSafe()&&(this.localStorageKey=["group",this.groupId,this.formattedText.localStorageItemType,"recent-project"].join("-"),this.setBtnTextFromLocalStorage())}},{key:"openDropdown",value:function(e){r()(e.currentTarget).siblings(".project-item-select").select2("open")}},{key:"selectProject",value:function(){var e=JSON.parse(this.projectSelectInput.val()),t={url:"".concat(e.url,"/").concat(this.projectSelectInput.data("relativePath")),name:e.name};this.setNewItemBtnAttributes(t),this.setProjectInLocalStorage(t)}},{key:"setBtnTextFromLocalStorage",value:function(){var e=this.getProjectFromLocalStorage();this.setNewItemBtnAttributes(e)}},{key:"setNewItemBtnAttributes",value:function(e){e?(this.newItemBtn.attr("href",e.url),this.newItemBtn.text("".concat(this.formattedText.defaultTextPrefix," in ").concat(e.name))):this.newItemBtn.text("Select project to create ".concat(this.formattedText.presetTextSuffix))}},{key:"getProjectFromLocalStorage",value:function(){var e=localStorage.getItem(this.localStorageKey);return JSON.parse(e)}},{key:"setProjectInLocalStorage",value:function(e){var t=JSON.stringify(e);localStorage.setItem(this.localStorageKey,t)}},{key:"deriveTextVariants",value:function(){var e=this.resourceLabel;return{localStorageItemType:"new-".concat(this.resourceType.split("_").join("-").slice(0,-1)),defaultTextPrefix:e,presetTextSuffix:this.resourceType.split("_").join(" ").slice(0,-1)}}}])&&a(t.prototype,n),o&&a(t,o),e}();function c(){r()(".ajax-project-select").each(function(e,t){var n,o,s=r()(t).data("simpleFilter")||!1;return this.groupId=r()(t).data("groupId"),this.includeGroups=r()(t).data("includeGroups"),this.allProjects=r()(t).data("allProjects")||!1,this.orderBy=r()(t).data("orderBy")||"id",this.withIssuesEnabled=r()(t).data("withIssuesEnabled"),this.withMergeRequestsEnabled=r()(t).data("withMergeRequestsEnabled"),this.withShared=void 0===r()(t).data("withShared")||r()(t).data("withShared"),this.includeProjectsInSubgroups=r()(t).data("includeProjectsInSubgroups")||!1,this.allowClear=r()(t).data("allowClear")||!1,n="Search for project",this.includeGroups&&(n+=" or group"),r()(t).select2({placeholder:n,minimumInputLength:0,query:(o=this,function(e){var t,n;return t=function(t){var n;return n={results:t},e.callback(n)},n=o.includeGroups?function(n){var o;return o=function(e){var o;return o=e.concat(n),t(o)},i.a.groups(e.term,{},o)}:t,o.groupId?i.a.groupProjects(o.groupId,e.term,{with_issues_enabled:o.withIssuesEnabled,with_merge_requests_enabled:o.withMergeRequestsEnabled,with_shared:o.withShared,include_subgroups:o.includeProjectsInSubgroups},n):i.a.projects(e.term,{order_by:o.orderBy,with_issues_enabled:o.withIssuesEnabled,with_merge_requests_enabled:o.withMergeRequestsEnabled,membership:!o.allProjects},n)}),id:function(e){return s?e.id:JSON.stringify({name:e.name,url:e.web_url})},text:function(e){return e.name_with_namespace||e.name},initSelection:function(e,t){return i.a.project(e.val()).then(function(e){var n=e.data;return t(n)})},allowClear:this.allowClear,dropdownCssClass:"ajax-project-dropdown"}),s?t:new l(t)})}n.d(t,"a",function(){return c})},29:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var o=n(0),r=n.n(o),i=n(14),s=n.n(i),a=n(1),l=n(19),c=n(6),u=n(7),d=n(28);function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var p=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t=r()("ul.clone-options-dropdown"),n=r()("#project_clone"),o=r()(".js-git-clone-holder .js-clone-dropdown-label"),i=document.querySelector(".js-mobile-git-clone .js-clone-dropdown-label"),a=o.text().trim();a.length>0&&r()("a:contains('".concat(a,"')"),t).addClass("is-active"),r()("a",t).on("click",function(e){e.preventDefault();var o=r()(e.currentTarget),s=o.attr("href"),a=o.data("cloneType");r()(".is-active",t).removeClass("is-active"),r()('a[data-clone-type="'.concat(a,'"]')).each(function(){var e=r()(this),t=e.find(".dropdown-menu-inner-title").text(),n=e.closest(".project-clone-holder").find(".js-clone-dropdown-label");e.toggleClass("is-active"),n.text(t)}),i?i.dataset.clipboardText=s:n.val(s),r()(".js-git-empty .js-clone").text(s)}),e.initRefSwitcher(),r()(".project-refs-select").on("change",function(){return r()(this).parents("form").submit()}),r()(".hide-no-ssh-message").on("click",function(e){return s.a.set("hide_no_ssh_message","false"),r()(this).parents(".no-ssh-key-message").remove(),e.preventDefault()}),r()(".hide-no-password-message").on("click",function(e){return s.a.set("hide_no_password_message","false"),r()(this).parents(".no-password-message").remove(),e.preventDefault()}),r()(".hide-auto-devops-implicitly-enabled-banner").on("click",function(e){var t=r()(this).data("project-id"),n="hide_auto_devops_implicitly_enabled_banner_".concat(t);return s.a.set(n,"false"),r()(this).parents(".auto-devops-implicitly-enabled-banner").remove(),e.preventDefault()}),e.projectSelectDropdown()}var t,n,o;return t=e,o=[{key:"projectSelectDropdown",value:function(){Object(d.a)(),r()(".project-item-select").on("click",function(t){return e.changeProject(r()(t.currentTarget).val())})}},{key:"changeProject",value:function(e){return window.location=e}},{key:"initRefSwitcher",value:function(){var e=document.createElement("li"),t=document.createElement("a");return t.href="#",r()(".js-project-refs-dropdown").each(function(){var n,o;return n=r()(this),o=n.data("selected"),n.glDropdown({data:function(e,t){c.a.get(n.data("refsUrl"),{params:{ref:n.data("ref"),search:e}}).then(function(e){var n=e.data;return t(n)}).catch(function(){return Object(u.a)(Object(a.a)("An error occurred while getting projects"))})},selectable:!0,filterable:!0,filterRemote:!0,filterByText:!0,inputFieldName:n.data("inputFieldName"),fieldName:n.data("fieldName"),renderRow:function(n){var r=e.cloneNode(!1);if(null!=n.header)r.className="dropdown-header",r.textContent=n.header;else{var i=t.cloneNode(!1);n===o&&(i.className="is-active"),i.textContent=n,i.dataset.ref=n,r.appendChild(i)}return r},id:function(e,t){return t.attr("data-ref")},toggleLabel:function(e,t){return t.text().trim()},clicked:function(e){if(e.e.preventDefault(),r()('input[name="ref"]').length){var t=n.closest("form"),o=n.data("visit"),i=!!o||o,s=t.attr("action"),a=-1===s.indexOf("?")?"?":"&";i&&Object(l.g)("".concat(s).concat(a).concat(t.serialize()))}}})})}}],(n=null)&&m(t.prototype,n),o&&m(t,o),e}()},301:function(e,t,n){"use strict";var o=n(11),r=n(78),i=n(6),s=n(7),a=n(128),l=n(1),c=n(19),u=n(68),d={components:{DeprecatedModal:a.a},props:{issueCount:{type:Number,required:!0},mergeRequestCount:{type:Number,required:!0},milestoneId:{type:Number,required:!0},milestoneTitle:{type:String,required:!0},milestoneUrl:{type:String,required:!0}},computed:{text:function(){var e=Object(l.f)("<strong>%{milestoneTitle}</strong>",{milestoneTitle:this.milestoneTitle});return 0===this.issueCount&&0===this.mergeRequestCount?Object(l.f)(Object(l.e)("Milestones|\nYou’re about to permanently delete the milestone %{milestoneTitle}.\nThis milestone is not currently used in any issues or merge requests."),{milestoneTitle:e},!1):Object(l.f)(Object(l.e)("Milestones|\nYou’re about to permanently delete the milestone %{milestoneTitle} and remove it from %{issuesWithCount} and %{mergeRequestsWithCount}.\nOnce deleted, it cannot be undone or recovered."),{milestoneTitle:e,issuesWithCount:Object(l.d)("%d issue","%d issues",this.issueCount),mergeRequestsWithCount:Object(l.d)("%d merge request","%d merge requests",this.mergeRequestCount)},!1)},title:function(){return Object(l.f)(Object(l.e)("Milestones|Delete milestone %{milestoneTitle}?"),{milestoneTitle:this.milestoneTitle})}},methods:{onSubmit:function(){var e=this;return u.a.$emit("deleteMilestoneModal.requestStarted",this.milestoneUrl),i.a.delete(this.milestoneUrl).then(function(t){u.a.$emit("deleteMilestoneModal.requestFinished",{milestoneUrl:e.milestoneUrl,successful:!0}),Object(c.d)(t.request.responseURL)}).catch(function(t){throw u.a.$emit("deleteMilestoneModal.requestFinished",{milestoneUrl:e.milestoneUrl,successful:!1}),t.response&&404===t.response.status?Object(s.a)(Object(l.f)(Object(l.e)("Milestones|Milestone %{milestoneTitle} was not found"),{milestoneTitle:e.milestoneTitle})):Object(s.a)(Object(l.f)(Object(l.e)("Milestones|Failed to delete milestone %{milestoneTitle}"),{milestoneTitle:e.milestoneTitle})),t})}}},m=n(3),p=Object(m.a)(d,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("deprecated-modal",{attrs:{id:"delete-milestone-modal",title:e.title,text:e.text,"primary-button-label":e.s__("Milestones|Delete milestone"),kind:"danger"},on:{submit:e.onSubmit},scopedSlots:e._u([{key:"body",fn:function(t){return[n("p",{domProps:{innerHTML:e._s(t.text)}})]}}])})},[],!1,null,null,null);p.options.__file="delete_milestone_modal.vue";var f=p.exports;t.a=function(){o.default.use(r.a);var e=function(e){var t=e.milestoneUrl,n=e.successful,o=document.querySelector('.js-delete-milestone-button[data-milestone-url="'.concat(t,'"]'));n||o.removeAttribute("disabled"),o.querySelector(".js-loading-icon").classList.add("hidden")},t=function(t){var n=document.querySelector('.js-delete-milestone-button[data-milestone-url="'.concat(t,'"]'));n.setAttribute("disabled",""),n.querySelector(".js-loading-icon").classList.remove("hidden"),u.a.$once("deleteMilestoneModal.requestFinished",e)},n=function(e){var n=e.currentTarget,o={milestoneId:parseInt(n.dataset.milestoneId,10),milestoneTitle:n.dataset.milestoneTitle,milestoneUrl:n.dataset.milestoneUrl,issueCount:parseInt(n.dataset.milestoneIssueCount,10),mergeRequestCount:parseInt(n.dataset.milestoneMergeRequestCount,10)};u.a.$once("deleteMilestoneModal.requestStarted",t),u.a.$emit("deleteMilestoneModal.props",o)},i=document.querySelectorAll(".js-delete-milestone-button");return i.forEach(function(e){e.addEventListener("click",n)}),u.a.$once("deleteMilestoneModal.mounted",function(){i.forEach(function(e){e.removeAttribute("disabled")})}),new o.default({el:"#delete-milestone-modal",components:{deleteMilestoneModal:f},data:function(){return{modalProps:{milestoneId:-1,milestoneTitle:"",milestoneUrl:"",issueCount:-1,mergeRequestCount:-1}}},mounted:function(){u.a.$on("deleteMilestoneModal.props",this.setModalProps),u.a.$emit("deleteMilestoneModal.mounted")},beforeDestroy:function(){u.a.$off("deleteMilestoneModal.props",this.setModalProps)},methods:{setModalProps:function(e){this.modalProps=e}},render:function(e){return e(f,{props:this.modalProps})}})}},391:function(e,t,n){"use strict";n.r(t);var o=n(301),r=n(11),i=n(78),s=n(6),a=n(7),l=n(106),c=n(1),u=n(19),d=n(68),m={components:{GlModal:l.a},props:{milestoneTitle:{type:String,required:!0},url:{type:String,required:!0},groupName:{type:String,required:!0}},computed:{title:function(){return Object(c.f)(Object(c.e)("Milestones|Promote %{milestoneTitle} to group milestone?"),{milestoneTitle:this.milestoneTitle})},text:function(){return Object(c.f)(Object(c.e)("Milestones|Promoting %{milestoneTitle} will make it available for all projects inside %{groupName}.\n        Existing project milestones with the same title will be merged.\n        This action cannot be reversed."),{milestoneTitle:this.milestoneTitle,groupName:this.groupName})}},methods:{onSubmit:function(){var e=this;return d.a.$emit("promoteMilestoneModal.requestStarted",this.url),s.a.post(this.url,{params:{format:"json"}}).then(function(t){d.a.$emit("promoteMilestoneModal.requestFinished",{milestoneUrl:e.url,successful:!0}),Object(u.g)(t.data.url)}).catch(function(t){d.a.$emit("promoteMilestoneModal.requestFinished",{milestoneUrl:e.url,successful:!1}),Object(a.a)(t)})}}},p=n(3),f=Object(p.a)(m,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("gl-modal",{attrs:{id:"promote-milestone-modal","footer-primary-button-text":e.s__("Milestones|Promote Milestone"),"footer-primary-button-variant":"warning"},on:{submit:e.onSubmit}},[n("template",{slot:"title"},[e._v("\n    "+e._s(e.title)+"\n  ")]),e._v("\n  "+e._s(e.text)+"\n")],2)},[],!1,null,null,null);f.options.__file="promote_milestone_modal.vue";var b=f.exports;r.default.use(i.a);t.default=function(){Object(o.a)(),function(){var e=function(e){var t=e.milestoneUrl,n=e.successful,o=document.querySelector('.js-promote-project-milestone-button[data-url="'.concat(t,'"]'));n||o.removeAttribute("disabled")},t=function(t){document.querySelector('.js-promote-project-milestone-button[data-url="'.concat(t,'"]')).setAttribute("disabled",""),d.a.$once("promoteMilestoneModal.requestFinished",e)},n=function(e){var n=e.currentTarget,o={milestoneTitle:n.dataset.milestoneTitle,url:n.dataset.url,groupName:n.dataset.groupName};d.a.$once("promoteMilestoneModal.requestStarted",t),d.a.$emit("promoteMilestoneModal.props",o)},o=document.querySelectorAll(".js-promote-project-milestone-button");o.forEach(function(e){e.addEventListener("click",n)}),d.a.$once("promoteMilestoneModal.mounted",function(){o.forEach(function(e){e.removeAttribute("disabled")})});var i,s=document.getElementById("promote-milestone-modal");s&&(i=new r.default({el:s,components:{PromoteMilestoneModal:b},data:function(){return{modalProps:{milestoneTitle:"",groupName:"",url:""}}},mounted:function(){d.a.$on("promoteMilestoneModal.props",this.setModalProps),d.a.$emit("promoteMilestoneModal.mounted")},beforeDestroy:function(){d.a.$off("promoteMilestoneModal.props",this.setModalProps)},methods:{setModalProps:function(e){this.modalProps=e}},render:function(e){return e("promote-milestone-modal",{props:this.modalProps})}}))}()}},44:function(e,t,n){"use strict";n.r(t);var o=n(38),r=n(36),i=n(29),s=n(27);document.addEventListener("DOMContentLoaded",function(){var e=document.body.dataset.page;if(["projects:clusters:new","projects:clusters:create_gcp","projects:clusters:create_user"].indexOf(e)>-1){var t=document.querySelector(".gcp-signup-offer");t&&new r.a(t),Object(o.a)()}new i.a,new s.a})},68:function(e,t,n){"use strict";var o=n(11);t.a=new o.default}},[[1324,1,0,2]]]);
//# sourceMappingURL=pages.projects.milestones.index.943ced20.chunk.js.map