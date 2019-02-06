(this.webpackJsonp=this.webpackJsonp||[]).push([[83],{106:function(e,t,n){"use strict";var a=n(0),o=n.n(a),s=["danger","primary","success","warning"],r=["sm","md","lg","xl"],i={name:"GlModal",props:{id:{type:String,required:!1,default:null},modalSize:{type:String,required:!1,default:"md",validator:function(e){return r.includes(e)}},headerTitleText:{type:String,required:!1,default:""},footerPrimaryButtonVariant:{type:String,required:!1,default:"primary",validator:function(e){return s.includes(e)}},footerPrimaryButtonText:{type:String,required:!1,default:""}},computed:{modalSizeClass:function(){return"md"===this.modalSize?"":"modal-".concat(this.modalSize)}},mounted:function(){o()(this.$el).on("shown.bs.modal",this.opened).on("hidden.bs.modal",this.closed)},beforeDestroy:function(){o()(this.$el).off("shown.bs.modal",this.opened).off("hidden.bs.modal",this.closed)},methods:{emitCancel:function(e){this.$emit("cancel",e)},emitSubmit:function(e){this.$emit("submit",e)},opened:function(){this.$emit("open")},closed:function(){this.$emit("closed")}}},l=n(3),d=Object(l.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal fade",attrs:{id:e.id,tabindex:"-1",role:"dialog"}},[n("div",{staticClass:"modal-dialog",class:e.modalSizeClass,attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[e._t("header",[n("h4",{staticClass:"modal-title"},[e._t("title",[e._v(" "+e._s(e.headerTitleText)+" ")])],2),e._v(" "),n("button",{staticClass:"close js-modal-close-action",attrs:{"aria-label":e.s__("Modal|Close"),type:"button","data-dismiss":"modal"},on:{click:function(t){e.emitCancel(t)}}},[n("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])],2),e._v(" "),n("div",{staticClass:"modal-body"},[e._t("default")],2),e._v(" "),n("div",{staticClass:"modal-footer"},[e._t("footer",[n("button",{staticClass:"btn js-modal-cancel-action qa-modal-cancel-button",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(t){e.emitCancel(t)}}},[e._v("\n            "+e._s(e.s__("Modal|Cancel"))+"\n          ")]),e._v(" "),n("button",{staticClass:"btn js-modal-primary-action qa-modal-primary-button",class:"btn-"+e.footerPrimaryButtonVariant,attrs:{type:"button","data-dismiss":"modal"},on:{click:function(t){e.emitSubmit(t)}}},[e._v("\n            "+e._s(e.footerPrimaryButtonText)+"\n          ")])])],2)])])])},[],!1,null,null,null);d.options.__file="gl_modal.vue";t.a=d.exports},1192:function(e,t,n){n(42),n(354),e.exports=n(1407)},128:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o={name:"DeprecatedModal",props:{id:{type:String,required:!1},title:{type:String,required:!1},text:{type:String,required:!1},hideFooter:{type:Boolean,required:!1,default:!1},kind:{type:String,required:!1,default:"primary"},modalDialogClass:{type:String,required:!1,default:""},closeKind:{type:String,required:!1,default:"default"},closeButtonLabel:{type:String,required:!1,default:"Cancel"},primaryButtonLabel:{type:String,required:!1,default:""},secondaryButtonLabel:{type:String,required:!1,default:""},submitDisabled:{type:Boolean,required:!1,default:!1}},computed:{btnKindClass:function(){return a({},"btn-".concat(this.kind),!0)},btnCancelKindClass:function(){return a({},"btn-".concat(this.closeKind),!0)}},methods:{emitCancel:function(e){this.$emit("cancel",e)},emitSubmit:function(e){this.$emit("submit",e)}}},s=n(3),r=Object(s.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal-open"},[n("div",{staticClass:"modal",class:e.id?"":"d-block",attrs:{id:e.id,role:"dialog",tabindex:"-1"}},[n("div",{staticClass:"modal-dialog",class:e.modalDialogClass,attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[e._t("header",[n("h4",{staticClass:"modal-title float-left"},[e._v(e._s(e.title))]),e._v(" "),n("button",{staticClass:"close float-right",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(t){e.emitCancel(t)}}},[n("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])],2),e._v(" "),n("div",{staticClass:"modal-body"},[e._t("body",[n("p",[e._v(e._s(e.text))])],{text:e.text})],2),e._v(" "),e.hideFooter?e._e():n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn",class:e.btnCancelKindClass,attrs:{type:"button","data-dismiss":"modal"},on:{click:function(t){e.emitCancel(t)}}},[e._v("\n            "+e._s(e.closeButtonLabel)+"\n          ")]),e._v(" "),e.secondaryButtonLabel?e._t("secondary-button",[e.secondaryButtonLabel?n("button",{staticClass:"btn",attrs:{type:"button","data-dismiss":"modal"}},[e._v("\n              "+e._s(e.secondaryButtonLabel)+"\n            ")]):e._e()]):e._e(),e._v(" "),e.primaryButtonLabel?n("button",{staticClass:"btn js-primary-button",class:e.btnKindClass,attrs:{disabled:e.submitDisabled,type:"button","data-dismiss":"modal"},on:{click:function(t){e.emitSubmit(t)}}},[e._v("\n            "+e._s(e.primaryButtonLabel)+"\n          ")]):e._e()],2)])])]),e._v(" "),e.id?e._e():n("div",{staticClass:"modal-backdrop fade show"})])},[],!1,null,null,null);r.options.__file="deprecated_modal.vue";t.a=r.exports},1407:function(e,t,n){"use strict";n.r(t);var a=n(11),o=n(78),s=n(5),r=n.n(s),i=n(6),l=n(106),d=n(1),u=n(7),c={components:{GlModal:l.a},props:{actionUrl:{type:String,required:!0},rootUrl:{type:String,required:!0},initialUsername:{type:String,required:!0}},data:function(){return{isRequestPending:!1,username:this.initialUsername,newUsername:this.initialUsername}},computed:{path:function(){return Object(d.f)(Object(d.e)("Profiles|Current path: %{path}"),{path:"".concat(this.rootUrl).concat(this.username)})},modalText:function(){return Object(d.f)(Object(d.e)("Profiles|\nYou are going to change the username %{currentUsernameBold} to %{newUsernameBold}.\nProfile and projects will be redirected to the %{newUsername} namespace but this redirect will expire once the %{currentUsername} namespace is registered by another user or group.\nPlease update your Git repository remotes as soon as possible."),{currentUsernameBold:"<strong>".concat(r.a.escape(this.username),"</strong>"),newUsernameBold:"<strong>".concat(r.a.escape(this.newUsername),"</strong>"),currentUsername:r.a.escape(this.username),newUsername:r.a.escape(this.newUsername)},!1)}},methods:{onConfirm:function(){var e=this;this.isRequestPending=!0;var t=this.newUsername,n={user:{username:t}};return i.a.put(this.actionUrl,n).then(function(n){Object(u.a)(n.data.message,"notice"),e.username=t,e.isRequestPending=!1}).catch(function(t){throw Object(u.a)(t.response.data.message),e.isRequestPending=!1,t})}},modalId:"username-change-confirmation-modal",inputId:"username-change-input",buttonText:Object(d.e)("Profiles|Update username")},m=n(3),p=Object(m.a)(c,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:e.$options.inputId}},[e._v(e._s(e.s__("Profiles|Path")))]),e._v(" "),n("div",{staticClass:"input-group"},[n("div",{staticClass:"input-group-prepend"},[n("div",{staticClass:"input-group-text"},[e._v(e._s(e.rootUrl))])]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newUsername,expression:"newUsername"}],staticClass:"form-control",attrs:{id:e.$options.inputId,disabled:e.isRequestPending,required:"required"},domProps:{value:e.newUsername},on:{input:function(t){t.target.composing||(e.newUsername=t.target.value)}}})]),e._v(" "),n("p",{staticClass:"form-text text-muted"},[e._v(e._s(e.path))])]),e._v(" "),n("button",{staticClass:"btn btn-warning",attrs:{"data-target":"#"+e.$options.modalId,disabled:e.isRequestPending||e.newUsername===e.username,type:"button","data-toggle":"modal"}},[e._v("\n    "+e._s(e.$options.buttonText)+"\n  ")]),e._v(" "),n("gl-modal",{attrs:{id:e.$options.modalId,"header-title-text":e.s__("Profiles|Change username")+"?","footer-primary-button-text":e.$options.buttonText,"footer-primary-button-variant":"warning"},on:{submit:e.onConfirm}},[n("span",{domProps:{innerHTML:e._s(e.modalText)}})])],1)},[],!1,null,null,null);p.options.__file="update_username.vue";var f=p.exports,b=n(128),v=n(75),h={components:{DeprecatedModal:b.a},props:{actionUrl:{type:String,required:!0},confirmWithPassword:{type:Boolean,required:!0},username:{type:String,required:!0}},data:function(){return{enteredPassword:"",enteredUsername:""}},computed:{csrfToken:function(){return v.a.token},inputLabel:function(){var e;return e=this.confirmWithPassword?Object(d.a)("password"):Object(d.a)("username"),e="<code>".concat(e,"</code>"),Object(d.f)(Object(d.e)("Profiles|Type your %{confirmationValue} to confirm:"),{confirmationValue:e},!1)},text:function(){return Object(d.f)(Object(d.e)("Profiles|\nYou are about to permanently delete %{yourAccount}, and all of the issues, merge requests, and groups linked to your account.\nOnce you confirm %{deleteAccount}, it cannot be undone or recovered."),{yourAccount:"<strong>".concat(Object(d.e)("Profiles|your account"),"</strong>"),deleteAccount:"<strong>".concat(Object(d.e)("Profiles|Delete Account"),"</strong>")},!1)}},methods:{canSubmit:function(){return this.confirmWithPassword?""!==this.enteredPassword:this.enteredUsername===this.username},onSubmit:function(){this.$refs.form.submit()}}},_=Object(m.a)(h,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("deprecated-modal",{attrs:{id:"delete-account-modal",title:e.s__("Profiles|Delete your account?"),text:e.text,"primary-button-label":e.s__("Profiles|Delete account"),"submit-disabled":!e.canSubmit(),kind:"danger"},on:{submit:e.onSubmit},scopedSlots:e._u([{key:"body",fn:function(t){return[n("p",{domProps:{innerHTML:e._s(t.text)}}),e._v(" "),n("form",{ref:"form",attrs:{action:e.actionUrl,method:"post"}},[n("input",{attrs:{type:"hidden",name:"_method",value:"delete"}}),e._v(" "),n("input",{attrs:{type:"hidden",name:"authenticity_token"},domProps:{value:e.csrfToken}}),e._v(" "),n("p",{attrs:{id:"input-label"},domProps:{innerHTML:e._s(e.inputLabel)}}),e._v(" "),e.confirmWithPassword?n("input",{directives:[{name:"model",rawName:"v-model",value:e.enteredPassword,expression:"enteredPassword"}],staticClass:"form-control",attrs:{name:"password",type:"password","aria-labelledby":"input-label"},domProps:{value:e.enteredPassword},on:{input:function(t){t.target.composing||(e.enteredPassword=t.target.value)}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.enteredUsername,expression:"enteredUsername"}],staticClass:"form-control",attrs:{name:"username",type:"text","aria-labelledby":"input-label"},domProps:{value:e.enteredUsername},on:{input:function(t){t.target.composing||(e.enteredUsername=t.target.value)}}})])]}}])})},[],!1,null,null,null);_.options.__file="delete_account_modal.vue";var y=_.exports;function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}document.addEventListener("DOMContentLoaded",function(){a.default.use(o.a);var e=document.getElementById("update-username");new a.default({el:e,components:{UpdateUsername:f},render:function(t){return t("update-username",{props:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){g(e,t,n[t])})}return e}({},e.dataset)})}});var t=document.getElementById("delete-account-button"),n=document.getElementById("delete-account-modal");new a.default({el:n,components:{deleteAccountModal:y},mounted:function(){t.classList.remove("disabled")},render:function(e){return e("delete-account-modal",{props:{actionUrl:n.dataset.actionUrl,confirmWithPassword:!!n.dataset.confirmWithPassword,username:n.dataset.username}})}})})}},[[1192,1,0,5]]]);
//# sourceMappingURL=pages.profiles.accounts.show.c9c28c48.chunk.js.map