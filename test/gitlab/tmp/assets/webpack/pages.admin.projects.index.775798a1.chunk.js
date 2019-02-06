(this.webpackJsonp=this.webpackJsonp||[]).push([[38],{128:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i={name:"DeprecatedModal",props:{id:{type:String,required:!1},title:{type:String,required:!1},text:{type:String,required:!1},hideFooter:{type:Boolean,required:!1,default:!1},kind:{type:String,required:!1,default:"primary"},modalDialogClass:{type:String,required:!1,default:""},closeKind:{type:String,required:!1,default:"default"},closeButtonLabel:{type:String,required:!1,default:"Cancel"},primaryButtonLabel:{type:String,required:!1,default:""},secondaryButtonLabel:{type:String,required:!1,default:""},submitDisabled:{type:Boolean,required:!1,default:!1}},computed:{btnKindClass:function(){return r({},"btn-".concat(this.kind),!0)},btnCancelKindClass:function(){return r({},"btn-".concat(this.closeKind),!0)}},methods:{emitCancel:function(e){this.$emit("cancel",e)},emitSubmit:function(e){this.$emit("submit",e)}}},o=n(3),a=Object(o.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal-open"},[n("div",{staticClass:"modal",class:e.id?"":"d-block",attrs:{id:e.id,role:"dialog",tabindex:"-1"}},[n("div",{staticClass:"modal-dialog",class:e.modalDialogClass,attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[e._t("header",[n("h4",{staticClass:"modal-title float-left"},[e._v(e._s(e.title))]),e._v(" "),n("button",{staticClass:"close float-right",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(t){e.emitCancel(t)}}},[n("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])],2),e._v(" "),n("div",{staticClass:"modal-body"},[e._t("body",[n("p",[e._v(e._s(e.text))])],{text:e.text})],2),e._v(" "),e.hideFooter?e._e():n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn",class:e.btnCancelKindClass,attrs:{type:"button","data-dismiss":"modal"},on:{click:function(t){e.emitCancel(t)}}},[e._v("\n            "+e._s(e.closeButtonLabel)+"\n          ")]),e._v(" "),e.secondaryButtonLabel?e._t("secondary-button",[e.secondaryButtonLabel?n("button",{staticClass:"btn",attrs:{type:"button","data-dismiss":"modal"}},[e._v("\n              "+e._s(e.secondaryButtonLabel)+"\n            ")]):e._e()]):e._e(),e._v(" "),e.primaryButtonLabel?n("button",{staticClass:"btn js-primary-button",class:e.btnKindClass,attrs:{disabled:e.submitDisabled,type:"button","data-dismiss":"modal"},on:{click:function(t){e.emitSubmit(t)}}},[e._v("\n            "+e._s(e.primaryButtonLabel)+"\n          ")]):e._e()],2)])])]),e._v(" "),e.id?e._e():n("div",{staticClass:"modal-backdrop fade show"})])},[],!1,null,null,null);a.options.__file="deprecated_modal.vue";t.a=a.exports},129:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(19);function a(){"file"===i()('input[name="blacklist_type"]:checked').val()?(i()(".blacklist-file").show(),i()(".blacklist-raw").hide()):(i()(".blacklist-file").hide(),i()(".blacklist-raw").show())}var l=n(1),s=Object(l.a)("Regex pattern"),c=Object(l.a)("To define internal users, first enable new users set to external");function d(e){var t=document.getElementById("application_setting_user_default_internal_regex");e&&t&&(e.checked?(t.readOnly=!1,t.placeholder=s):(t.readOnly=!0,t.placeholder=c))}document.addEventListener("DOMContentLoaded",function(){var e,t;e=i()(".change-owner-holder"),i()("input#user_force_random_password").on("change",function(){var e=i()("#user_password, #user_password_confirmation");i()(this).attr("checked")?e.val("").prop("disabled",!0):e.prop("disabled",!1)}),i()("body").on("click",".js-toggle-colors-link",function(e){e.preventDefault(),i()(".js-toggle-colors-container").toggleClass("hide")}),i()(".log-tabs a").on("click",function(e){e.preventDefault(),i()(this).tab("show")}),i()(".log-bottom").on("click",function(e){e.preventDefault();var t=i()(".file-content:visible");t.animate({scrollTop:t.find("ol").height()},"fast")}),i()(".change-owner-link").on("click",function(t){t.preventDefault(),i()(this).hide(),e.show()}),i()(".change-owner-cancel-link").on("click",function(t){t.preventDefault(),e.hide(),i()(".change-owner-link").show()}),i()("li.project_member, li.group_member").on("ajax:success",o.e),i()("input[name='blacklist_type']").on("click",a),a(),d(t=document.getElementById("application_setting_user_default_external")),t.addEventListener("change",function(){d(t)})})},1418:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(11),a=n(78),l=n(75),s=n(5),c=n.n(s),d=n(128),u=n(1),f={components:{DeprecatedModal:d.a},props:{deleteProjectUrl:{type:String,required:!1,default:""},projectName:{type:String,required:!1,default:""},csrfToken:{type:String,required:!1,default:""}},data:function(){return{enteredProjectName:""}},computed:{title:function(){return Object(u.f)(Object(u.e)("AdminProjects|Delete Project %{projectName}?"),{projectName:"'".concat(c.a.escape(this.projectName),"'")},!1)},text:function(){return Object(u.f)(Object(u.e)("AdminProjects|\n          You’re about to permanently delete the project %{projectName}, its repository,\n          and all related resources including issues, merge requests, etc..  Once you confirm and press\n          %{strong_start}Delete project%{strong_end}, it cannot be undone or recovered."),{projectName:"<strong>".concat(c.a.escape(this.projectName),"</strong>"),strong_start:"<strong>",strong_end:"</strong>"},!1)},confirmationTextLabel:function(){return Object(u.f)(Object(u.e)("AdminUsers|To confirm, type %{projectName}"),{projectName:"<code>".concat(c.a.escape(this.projectName),"</code>")},!1)},primaryButtonLabel:function(){return Object(u.e)("AdminProjects|Delete project")},canSubmit:function(){return this.enteredProjectName===this.projectName}},methods:{onCancel:function(){this.enteredProjectName=""},onSubmit:function(){this.$refs.form.submit(),this.enteredProjectName=""}}},p=n(3),m=Object(p.a)(f,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("deprecated-modal",{attrs:{id:"delete-project-modal",title:e.title,text:e.text,"primary-button-label":e.primaryButtonLabel,"submit-disabled":!e.canSubmit,kind:"danger"},on:{submit:e.onSubmit,cancel:e.onCancel},scopedSlots:e._u([{key:"body",fn:function(t){return[n("p",{domProps:{innerHTML:e._s(t.text)}}),e._v(" "),n("p",{domProps:{innerHTML:e._s(e.confirmationTextLabel)}}),e._v(" "),n("form",{ref:"form",attrs:{action:e.deleteProjectUrl,method:"post"}},[n("input",{ref:"method",attrs:{type:"hidden",name:"_method",value:"delete"}}),e._v(" "),n("input",{attrs:{type:"hidden",name:"authenticity_token"},domProps:{value:e.csrfToken}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.enteredProjectName,expression:"enteredProjectName"}],staticClass:"form-control",attrs:{name:"projectName",type:"text","aria-labelledby":"input-label",autocomplete:"off"},domProps:{value:e.enteredProjectName},on:{input:function(t){t.target.composing||(e.enteredProjectName=t.target.value)}}})])]}}])})},[],!1,null,null,null);m.options.__file="delete_project_modal.vue";var h=m.exports;document.addEventListener("DOMContentLoaded",function(){o.default.use(a.a);var e=document.getElementById("delete-project-modal"),t=new o.default({el:e,data:{deleteProjectUrl:"",projectName:""},render:function(e){return e(h,{props:{deleteProjectUrl:this.deleteProjectUrl,projectName:this.projectName,csrfToken:l.a.token}})}});i()(document).on("shown.bs.modal",function(e){if(e.relatedTarget.classList.contains("delete-project-button")){var n=e.relatedTarget.dataset;t.deleteProjectUrl=n.deleteProjectUrl,t.projectName=n.projectName}})})},183:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(0),i=n.n(r),o=n(5),a=n.n(o),l=n(6);function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"filter_groups";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.filterForm=t,this.listFilterElement=n,this.listHolderElement=r,this.filterInputField=i,this.isBusy=!1}var t,n,r;return t=e,(n=[{key:"getFilterEndpoint",value:function(){return"".concat(this.filterForm.getAttribute("action"),"?").concat(i()(this.filterForm).serialize())}},{key:"getPagePath",value:function(){return this.getFilterEndpoint()}},{key:"initSearch",value:function(){this.debounceFilter=a.a.debounce(this.onFilterInput.bind(this),500),this.unbindEvents(),this.bindEvents()}},{key:"onFilterInput",value:function(){var e={},t=i()(this.filterForm).find('[name="'.concat(this.filterInputField,'"]')).val();t&&(e[this.filterInputField]=t),this.filterResults(e),this.setDefaultFilterOption&&this.setDefaultFilterOption()}},{key:"bindEvents",value:function(){this.listFilterElement.addEventListener("input",this.debounceFilter)}},{key:"unbindEvents",value:function(){this.listFilterElement.removeEventListener("input",this.debounceFilter)}},{key:"filterResults",value:function(e){var t=this;return!this.isBusy&&(i()(this.listHolderElement).fadeTo(250,.5),this.isBusy=!0,l.a.get(this.getFilterEndpoint(),{params:e}).then(function(n){t.onFilterSuccess(n,e),t.onFilterComplete()}).catch(function(){return t.onFilterComplete()}))}},{key:"onFilterSuccess",value:function(e,t){e.data.html&&(this.listHolderElement.innerHTML=e.data.html);var n=this.getPagePath(t);return window.history.replaceState({page:n},document.title,n)}},{key:"onFilterComplete",value:function(){this.isBusy=!1,i()(this.listHolderElement).fadeTo(250,1)}}])&&s(t.prototype,n),r&&s(t,r),e}()},209:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(183);var i=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t=document.querySelector("form#project-filter-form"),n=document.querySelector(".js-projects-list-filter"),i=document.querySelector(".js-projects-list-holder");t&&n&&i&&new r.a(t,n,i).initSearch()}},707:function(e,t,n){"use strict";n.r(t);var r=n(209),i=n(0),o=n.n(i),a=n(12),l=n(19),s=n(13);var c=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=Object(s.A)(t.dropdown.dataset.isFilter),r=t.dropdown.dataset.fieldName||"namespace_id";o()(t.dropdown).glDropdown({filterable:!0,selectable:!0,filterRemote:!0,search:{fields:["path"]},fieldName:r,toggleLabel:function(e){return null==e.id?e.text:e.kind+": "+e.full_path},data:function(e,t){return a.a.namespaces(e,function(e){if(n){e.unshift({text:"Any namespace",id:null}),e.splice(1,0,"divider")}return t(e)})},text:function(e){return null==e.id?e.text:e.kind+": "+e.full_path},renderRow:this.renderRow,clicked:function(e){n||e.e.preventDefault()},url:function(e){return Object(l.c)((t={},n=r,i=e.id,n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t),window.location.href);var t,n,i}})};document.addEventListener("DOMContentLoaded",function(){new r.a,document.querySelectorAll(".js-namespace-select").forEach(function(e){return new c({dropdown:e})})})},985:function(e,t,n){n(42),n(129),n(707),e.exports=n(1418)}},[[985,1,0]]]);
//# sourceMappingURL=pages.admin.projects.index.775798a1.chunk.js.map