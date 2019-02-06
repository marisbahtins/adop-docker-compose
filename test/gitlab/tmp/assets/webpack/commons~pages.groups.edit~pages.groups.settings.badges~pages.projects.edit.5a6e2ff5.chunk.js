(this.webpackJsonp=this.webpackJsonp||[]).push([[15],{106:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=["danger","primary","success","warning"],s=["sm","md","lg","xl"],d={name:"GlModal",props:{id:{type:String,required:!1,default:null},modalSize:{type:String,required:!1,default:"md",validator:function(e){return s.includes(e)}},headerTitleText:{type:String,required:!1,default:""},footerPrimaryButtonVariant:{type:String,required:!1,default:"primary",validator:function(e){return r.includes(e)}},footerPrimaryButtonText:{type:String,required:!1,default:""}},computed:{modalSizeClass:function(){return"md"===this.modalSize?"":"modal-".concat(this.modalSize)}},mounted:function(){i()(this.$el).on("shown.bs.modal",this.opened).on("hidden.bs.modal",this.closed)},beforeDestroy:function(){i()(this.$el).off("shown.bs.modal",this.opened).off("hidden.bs.modal",this.closed)},methods:{emitCancel:function(e){this.$emit("cancel",e)},emitSubmit:function(e){this.$emit("submit",e)},opened:function(){this.$emit("open")},closed:function(){this.$emit("closed")}}},o=n(3),l=Object(o.a)(d,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal fade",attrs:{id:e.id,tabindex:"-1",role:"dialog"}},[n("div",{staticClass:"modal-dialog",class:e.modalSizeClass,attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[e._t("header",[n("h4",{staticClass:"modal-title"},[e._t("title",[e._v(" "+e._s(e.headerTitleText)+" ")])],2),e._v(" "),n("button",{staticClass:"close js-modal-close-action",attrs:{"aria-label":e.s__("Modal|Close"),type:"button","data-dismiss":"modal"},on:{click:function(t){e.emitCancel(t)}}},[n("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])],2),e._v(" "),n("div",{staticClass:"modal-body"},[e._t("default")],2),e._v(" "),n("div",{staticClass:"modal-footer"},[e._t("footer",[n("button",{staticClass:"btn js-modal-cancel-action qa-modal-cancel-button",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(t){e.emitCancel(t)}}},[e._v("\n            "+e._s(e.s__("Modal|Cancel"))+"\n          ")]),e._v(" "),n("button",{staticClass:"btn js-modal-primary-action qa-modal-primary-button",class:"btn-"+e.footerPrimaryButtonVariant,attrs:{type:"button","data-dismiss":"modal"},on:{click:function(t){e.emitSubmit(t)}}},[e._v("\n            "+e._s(e.footerPrimaryButtonText)+"\n          ")])])],2)])])])},[],!1,null,null,null);l.options.__file="gl_modal.vue";t.a=l.exports},108:function(e,t,n){"use strict";var a={components:{GlLoadingIcon:n(10).e},props:{loading:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1},containerClass:{type:[String,Array,Object],required:!1,default:"btn btn-align-content"}},methods:{onClick:function(e){this.$emit("click",e)}}},i=n(3),r=Object(i.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{class:e.containerClass,attrs:{disabled:e.loading||e.disabled,type:"button"},on:{click:e.onClick}},[n("transition",{attrs:{name:"fade"}},[e.loading?n("gl-loading-icon",{staticClass:"js-loading-button-icon",class:{"append-right-5":e.label},attrs:{inline:!0}}):e._e()],1),e._v(" "),n("transition",{attrs:{name:"fade"}},[e._t("default",[e.label?n("span",{staticClass:"js-loading-button-label"},[e._v(" "+e._s(e.label)+" ")]):e._e()])],2)],1)},[],!1,null,null,null);r.options.__file="loading_button.vue";t.a=r.exports},276:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i});var a="group",i="project"},425:function(e,t,n){"use strict";var a=n(11),i=n(18),r=n(7),s=n(1),d=n(106),o=n(15),l=n(10),c={name:"Badge",components:{Icon:o.a,GlLoadingIcon:l.e},directives:{GlTooltip:l.n},props:{imageUrl:{type:String,required:!0},linkUrl:{type:String,required:!0}},data:function(){return{hasError:!1,isLoading:!0,numRetries:0}},computed:{imageUrlWithRetries:function(){return 0===this.numRetries?this.imageUrl:"".concat(this.imageUrl,"#retries=").concat(this.numRetries)}},watch:{imageUrl:function(){this.hasError=!1,this.isLoading=!0,this.numRetries=0}},methods:{onError:function(){this.isLoading=!1,this.hasError=!0},onLoad:function(){this.isLoading=!1},reloadImage:function(){this.hasError=!1,this.isLoading=!0,this.numRetries+=1}}},g=n(3),u=Object(g.a)(c,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("a",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading&&!e.hasError,expression:"!isLoading && !hasError"}],attrs:{href:e.linkUrl,target:"_blank",rel:"noopener noreferrer"}},[n("img",{staticClass:"project-badge",attrs:{src:e.imageUrlWithRetries,"aria-hidden":"true"},on:{load:e.onLoad,error:e.onError}})]),e._v(" "),n("gl-loading-icon",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}],attrs:{inline:!0}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.hasError,expression:"hasError"}],staticClass:"btn-group"},[n("div",{staticClass:"btn btn-default btn-sm disabled"},[n("icon",{staticClass:"prepend-left-8 append-right-8",attrs:{size:16,name:"doc-image","aria-hidden":"true"}})],1),e._v(" "),n("div",{staticClass:"btn btn-default btn-sm disabled"},[n("span",{staticClass:"prepend-left-8 append-right-8"},[e._v(e._s(e.s__("Badges|No badge image")))])])]),e._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:e.hasError,expression:"hasError"},{name:"gl-tooltip",rawName:"v-gl-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-transparent btn-sm text-primary",attrs:{title:e.s__("Badges|Reload badge image"),type:"button"},on:{click:e.reloadImage}},[n("icon",{attrs:{size:16,name:"retry"}})],1)],1)},[],!1,null,null,null);u.options.__file="badge.vue";var b=u.exports,m=n(5),p=n.n(m);function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){v(e,t,n[t])})}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _={name:"BadgeForm",components:{Badge:b,LoadingButton:n(108).a,GlLoadingIcon:l.e},props:{isEditing:{type:Boolean,required:!0}},data:function(){return{wasValidated:!1}},computed:f({},Object(i.d)(["badgeInAddForm","badgeInEditForm","docsUrl","isRendering","isSaving","renderedBadge"]),{badge:function(){return this.isEditing?this.badgeInEditForm:this.badgeInAddForm},helpText:function(){var e=["project_path","project_id","default_branch","commit_sha"].map(function(e){return"<code>%{".concat(e,"}</code>")}).join(", ");return Object(s.f)(Object(s.e)("Badges|The %{docsLinkStart}variables%{docsLinkEnd} GitLab supports: %{placeholders}"),{docsLinkEnd:"</a>",docsLinkStart:'<a href="'.concat(p.a.escape(this.docsUrl),'">'),placeholders:e},!1)},renderedImageUrl:function(){return this.renderedBadge?this.renderedBadge.renderedImageUrl:""},renderedLinkUrl:function(){return this.renderedBadge?this.renderedBadge.renderedLinkUrl:""},imageUrl:{get:function(){return this.badge?this.badge.imageUrl:""},set:function(e){var t=this.badge||{imageUrl:"",isDeleting:!1,linkUrl:"",renderedImageUrl:"",renderedLinkUrl:""};this.updateBadgeInForm(f({},t,{imageUrl:e}))}},linkUrl:{get:function(){return this.badge?this.badge.linkUrl:""},set:function(e){var t=this.badge||{imageUrl:"",isDeleting:!1,linkUrl:"",renderedImageUrl:"",renderedLinkUrl:""};this.updateBadgeInForm(f({},t,{linkUrl:e}))}},badgeImageUrlExample:function(){return Object(s.f)(Object(s.e)("Badges|e.g. %{exampleUrl}"),{exampleUrl:"https://example.gitlab.com/%{project_path}/badges/%{default_branch}/badge.svg"})},badgeLinkUrlExample:function(){return Object(s.f)(Object(s.e)("Badges|e.g. %{exampleUrl}"),{exampleUrl:"https://example.gitlab.com/%{project_path}"})}}),methods:f({},Object(i.b)(["addBadge","renderBadge","saveBadge","stopEditing","updateBadgeInForm"]),{debouncedPreview:p.a.debounce(function(){this.renderBadge()},1500),onCancel:function(){this.stopEditing()},onSubmit:function(){var e=this;return this.$el.checkValidity()?this.isEditing?this.saveBadge().then(function(){Object(r.a)(Object(s.e)("Badges|The badge was saved."),"notice"),e.wasValidated=!1}).catch(function(e){throw Object(r.a)(Object(s.e)("Badges|Saving the badge failed, please check the entered URLs and try again.")),e}):this.addBadge().then(function(){Object(r.a)(Object(s.e)("Badges|A new badge was added."),"notice"),e.wasValidated=!1}).catch(function(e){throw Object(r.a)(Object(s.e)("Badges|Adding the badge failed, please check the entered URLs and try again.")),e}):(this.wasValidated=!0,Promise.resolve())}})},h=Object(g.a)(_,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"prepend-top-default append-bottom-default needs-validation",class:{"was-validated":e.wasValidated},attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.onSubmit(t)}}},[n("div",{staticClass:"form-group"},[n("label",{staticClass:"label-bold",attrs:{for:"badge-link-url"}},[e._v(e._s(e.s__("Badges|Link")))]),e._v(" "),n("p",{domProps:{innerHTML:e._s(e.helpText)}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.linkUrl,expression:"linkUrl"}],staticClass:"form-control",attrs:{id:"badge-link-url",type:"URL",required:""},domProps:{value:e.linkUrl},on:{input:[function(t){t.target.composing||(e.linkUrl=t.target.value)},e.debouncedPreview]}}),e._v(" "),n("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.s__("Badges|Please fill in a valid URL")))]),e._v(" "),n("span",{staticClass:"form-text text-muted"},[e._v(" "+e._s(e.badgeLinkUrlExample)+" ")])]),e._v(" "),n("div",{staticClass:"form-group"},[n("label",{staticClass:"label-bold",attrs:{for:"badge-image-url"}},[e._v(e._s(e.s__("Badges|Badge image URL")))]),e._v(" "),n("p",{domProps:{innerHTML:e._s(e.helpText)}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.imageUrl,expression:"imageUrl"}],staticClass:"form-control",attrs:{id:"badge-image-url",type:"URL",required:""},domProps:{value:e.imageUrl},on:{input:[function(t){t.target.composing||(e.imageUrl=t.target.value)},e.debouncedPreview]}}),e._v(" "),n("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.s__("Badges|Please fill in a valid URL")))]),e._v(" "),n("span",{staticClass:"form-text text-muted"},[e._v(" "+e._s(e.badgeImageUrlExample)+" ")])]),e._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"badge-preview"}},[e._v(e._s(e.s__("Badges|Badge image preview")))]),e._v(" "),n("badge",{directives:[{name:"show",rawName:"v-show",value:e.renderedBadge&&!e.isRendering,expression:"renderedBadge && !isRendering"}],attrs:{id:"badge-preview","image-url":e.renderedImageUrl,"link-url":e.renderedLinkUrl}}),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:e.isRendering,expression:"isRendering"}]},[n("gl-loading-icon",{attrs:{inline:!0}})],1),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:!e.renderedBadge&&!e.isRendering,expression:"!renderedBadge && !isRendering"}],staticClass:"disabled-content"},[e._v("\n      "+e._s(e.s__("Badges|No image to preview"))+"\n    ")])],1),e._v(" "),e.isEditing?n("div",{staticClass:"row-content-block"},[n("loading-button",{attrs:{loading:e.isSaving,label:e.s__("Badges|Save changes"),type:"submit","container-class":"btn btn-success"}}),e._v(" "),n("button",{staticClass:"btn btn-cancel",attrs:{type:"button"},on:{click:e.onCancel}},[e._v(e._s(e.__("Cancel")))])],1):n("div",{staticClass:"form-group"},[n("loading-button",{attrs:{loading:e.isSaving,label:e.s__("Badges|Add badge"),type:"submit","container-class":"btn btn-success"}})],1)])},[],!1,null,null,null);h.options.__file="badge_form.vue";var E=h.exports,B=n(276);function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){O(e,t,n[t])})}return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var U={name:"BadgeListRow",components:{Badge:b,Icon:o.a,GlLoadingIcon:l.e},props:{badge:{type:Object,required:!0}},computed:w({},Object(i.d)(["kind"]),{badgeKindText:function(){return this.badge.kind===B.b?Object(s.e)("Badges|Project Badge"):Object(s.e)("Badges|Group Badge")},canEditBadge:function(){return this.badge.kind===this.kind}}),methods:w({},Object(i.b)(["editBadge","updateBadgeInModal"]))},j=Object(g.a)(U,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"gl-responsive-table-row-layout gl-responsive-table-row"},[n("badge",{staticClass:"table-section section-40",attrs:{"image-url":e.badge.renderedImageUrl,"link-url":e.badge.renderedLinkUrl}}),e._v(" "),n("span",{staticClass:"table-section section-30 str-truncated"},[e._v(e._s(e.badge.linkUrl))]),e._v(" "),n("div",{staticClass:"table-section section-15"},[n("span",{staticClass:"badge badge-pill"},[e._v(e._s(e.badgeKindText))])]),e._v(" "),n("div",{staticClass:"table-section section-15 table-button-footer"},[e.canEditBadge?n("div",{staticClass:"table-action-buttons"},[n("button",{staticClass:"btn btn-default append-right-8",attrs:{disabled:e.badge.isDeleting,type:"button"},on:{click:function(t){e.editBadge(e.badge)}}},[n("icon",{attrs:{size:16,"aria-label":e.__("Edit"),name:"pencil"}})],1),e._v(" "),n("button",{staticClass:"btn btn-danger",attrs:{disabled:e.badge.isDeleting,type:"button","data-toggle":"modal","data-target":"#delete-badge-modal"},on:{click:function(t){e.updateBadgeInModal(e.badge)}}},[n("icon",{attrs:{size:16,"aria-label":e.__("Delete"),name:"remove"}})],1),e._v(" "),n("gl-loading-icon",{directives:[{name:"show",rawName:"v-show",value:e.badge.isDeleting,expression:"badge.isDeleting"}],attrs:{inline:!0}})],1):e._e()])],1)},[],!1,null,null,null);function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}j.options.__file="badge_list_row.vue";var k={name:"BadgeList",components:{BadgeListRow:j.exports,GlLoadingIcon:l.e},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){y(e,t,n[t])})}return e}({},Object(i.d)(["badges","isLoading","kind"]),{hasNoBadges:function(){return!(this.isLoading||this.badges&&this.badges.length)},isGroupBadge:function(){return this.kind===B.a}})},C=Object(g.a)(k,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[e._v("\n    "+e._s(e.s__("Badges|Your badges"))+"\n    "),n("span",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading,expression:"!isLoading"}],staticClass:"badge badge-pill"},[e._v(e._s(e.badges.length))])]),e._v(" "),n("gl-loading-icon",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}],staticClass:"card-body",attrs:{size:2}}),e._v(" "),e.hasNoBadges?n("div",{staticClass:"card-body"},[e.isGroupBadge?n("span",[e._v(e._s(e.s__("Badges|This group has no badges")))]):n("span",[e._v(e._s(e.s__("Badges|This project has no badges")))])]):n("div",{staticClass:"card-body"},e._l(e.badges,function(e){return n("badge-list-row",{key:e.id,attrs:{badge:e}})}),1)],1)},[],!1,null,null,null);function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){L(e,t,n[t])})}return e}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}C.options.__file="badge_list.vue";var I={name:"BadgeSettings",components:{Badge:b,BadgeForm:E,BadgeList:C.exports,GlModal:d.a},computed:R({},Object(i.d)(["badgeInModal","isEditing"]),{deleteModalText:function(){return Object(s.e)("Badges|You are going to delete this badge. Deleted badges <strong>cannot</strong> be restored.")}}),methods:R({},Object(i.b)(["deleteBadge"]),{onSubmitModal:function(){this.deleteBadge(this.badgeInModal).then(function(){Object(r.a)(Object(s.e)("Badges|The badge was deleted."),"notice")}).catch(function(e){throw Object(r.a)(Object(s.e)("Badges|Deleting the badge failed, please try again.")),e})}})},D=Object(g.a)(I,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"badge-settings"},[n("gl-modal",{attrs:{id:"delete-badge-modal","header-title-text":e.s__("Badges|Delete badge?"),"footer-primary-button-text":e.s__("Badges|Delete badge"),"footer-primary-button-variant":"danger"},on:{submit:e.onSubmitModal}},[n("div",{staticClass:"well"},[n("badge",{attrs:{"image-url":e.badgeInModal?e.badgeInModal.renderedImageUrl:"","link-url":e.badgeInModal?e.badgeInModal.renderedLinkUrl:""}})],1),e._v(" "),n("p",{domProps:{innerHTML:e._s(e.deleteModalText)}})]),e._v(" "),n("badge-form",{directives:[{name:"show",rawName:"v-show",value:e.isEditing,expression:"isEditing"}],attrs:{"is-editing":!0}}),e._v(" "),n("badge-form",{directives:[{name:"show",rawName:"v-show",value:!e.isEditing,expression:"!isEditing"}],attrs:{"is-editing":!1}}),e._v(" "),n("badge-list",{directives:[{name:"show",rawName:"v-show",value:!e.isEditing,expression:"!isEditing"}]})],1)},[],!1,null,null,null);D.options.__file="badge_settings.vue";var S,x=D.exports,P=n(6),T="RECEIVE_DELETE_BADGE",A="RECEIVE_DELETE_BADGE_ERROR",N="RECEIVE_LOAD_BADGES",G="RECEIVE_LOAD_BADGES_ERROR",q="RECEIVE_NEW_BADGE",M="RECEIVE_NEW_BADGE_ERROR",F="RECEIVE_RENDERED_BADGE",V="RECEIVE_RENDERED_BADGE_ERROR",$="RECEIVE_UPDATED_BADGE",z="RECEIVE_UPDATED_BADGE_ERROR",Q="REQUEST_DELETE_BADGE",W="REQUEST_LOAD_BADGES",H="REQUEST_NEW_BADGE",J="REQUEST_RENDERED_BADGE",K="REQUEST_UPDATED_BADGE",Y="START_EDITING",X="STOP_EDITING",Z="UPDATE_BADGE_IN_FORM",ee="UPDATE_BADGE_IN_MODAL",te=function(e){return{id:e.id,imageUrl:e.image_url,kind:e.kind,linkUrl:e.link_url,renderedImageUrl:e.rendered_image_url,renderedLinkUrl:e.rendered_link_url,isDeleting:!1}},ne={requestNewBadge:function(e){(0,e.commit)(H)},receiveNewBadge:function(e,t){(0,e.commit)(q,t)},receiveNewBadgeError:function(e){(0,e.commit)(M)},addBadge:function(e){var t=e.dispatch,n=e.state,a=n.badgeInAddForm,i=n.apiEndpointUrl;return t("requestNewBadge"),P.a.post(i,{image_url:a.imageUrl,link_url:a.linkUrl}).catch(function(e){throw t("receiveNewBadgeError"),e}).then(function(e){t("receiveNewBadge",te(e.data))})},requestDeleteBadge:function(e,t){(0,e.commit)(Q,t)},receiveDeleteBadge:function(e,t){(0,e.commit)(T,t)},receiveDeleteBadgeError:function(e,t){(0,e.commit)(A,t)},deleteBadge:function(e,t){var n=e.dispatch,a=e.state,i=t.id;n("requestDeleteBadge",i);var r="".concat(a.apiEndpointUrl,"/").concat(i);return P.a.delete(r).catch(function(e){throw n("receiveDeleteBadgeError",i),e}).then(function(){n("receiveDeleteBadge",i)})},editBadge:function(e,t){(0,e.commit)(Y,t)},requestLoadBadges:function(e,t){(0,e.commit)(W,t)},receiveLoadBadges:function(e,t){(0,e.commit)(N,t)},receiveLoadBadgesError:function(e){(0,e.commit)(G)},loadBadges:function(e,t){var n=e.dispatch,a=e.state;n("requestLoadBadges",t);var i=a.apiEndpointUrl;return P.a.get(i).catch(function(e){throw n("receiveLoadBadgesError"),e}).then(function(e){n("receiveLoadBadges",e.data.map(te))})},requestRenderedBadge:function(e){(0,e.commit)(J)},receiveRenderedBadge:function(e,t){(0,e.commit)(F,t)},receiveRenderedBadgeError:function(e){(0,e.commit)(V)},renderBadge:function(e){var t=e.dispatch,n=e.state,a=n.isEditing?n.badgeInEditForm:n.badgeInAddForm,i=a.linkUrl,r=a.imageUrl;if(!i||""===i.trim()||!r||""===r.trim())return Promise.resolve(a);t("requestRenderedBadge");var s=["link_url=".concat(encodeURIComponent(i)),"image_url=".concat(encodeURIComponent(r))].join("&"),d="".concat(n.apiEndpointUrl,"/render?").concat(s);return P.a.get(d).catch(function(e){throw t("receiveRenderedBadgeError"),e}).then(function(e){t("receiveRenderedBadge",te(e.data))})},requestUpdatedBadge:function(e){(0,e.commit)(K)},receiveUpdatedBadge:function(e,t){(0,e.commit)($,t)},receiveUpdatedBadgeError:function(e){(0,e.commit)(z)},saveBadge:function(e){var t=e.dispatch,n=e.state,a=n.badgeInEditForm,i="".concat(n.apiEndpointUrl,"/").concat(a.id);return t("requestUpdatedBadge"),P.a.put(i,{image_url:a.imageUrl,link_url:a.linkUrl}).catch(function(e){throw t("receiveUpdatedBadgeError"),e}).then(function(e){t("receiveUpdatedBadge",te(e.data))})},stopEditing:function(e){(0,e.commit)(X)},updateBadgeInForm:function(e,t){(0,e.commit)(Z,t)},updateBadgeInModal:function(e,t){(0,e.commit)(ee,t)}};function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){ie(e,t,n[t])})}return e}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var re=function(e){return e.sort(function(e,t){return e.kind!==t.kind?e.kind===B.b?1:-1:e.id-t.id})},se=(ie(S={},q,function(e,t){Object.assign(e,{badgeInAddForm:null,badges:re(e.badges.concat(t)),isSaving:!1,renderedBadge:null})}),ie(S,M,function(e){Object.assign(e,{isSaving:!1})}),ie(S,H,function(e){Object.assign(e,{isSaving:!0})}),ie(S,$,function(e,t){var n=e.badges.map(function(e){return e.id===t.id?t:e});Object.assign(e,{badgeInEditForm:null,badges:n,isEditing:!1,isSaving:!1,renderedBadge:null})}),ie(S,z,function(e){Object.assign(e,{isSaving:!1})}),ie(S,K,function(e){Object.assign(e,{isSaving:!0})}),ie(S,N,function(e,t){Object.assign(e,{badges:re(t),isLoading:!1})}),ie(S,G,function(e){Object.assign(e,{isLoading:!1})}),ie(S,W,function(e,t){Object.assign(e,{kind:t.kind,apiEndpointUrl:t.apiEndpointUrl,docsUrl:t.docsUrl,isLoading:!0})}),ie(S,T,function(e,t){var n=e.badges.filter(function(e){return e.id!==t});Object.assign(e,{badges:n})}),ie(S,A,function(e,t){var n=e.badges.map(function(e){return e.id===t?ae({},e,{isDeleting:!1}):e});Object.assign(e,{badges:n})}),ie(S,Q,function(e,t){var n=e.badges.map(function(e){return e.id===t?ae({},e,{isDeleting:!0}):e});Object.assign(e,{badges:n})}),ie(S,F,function(e,t){Object.assign(e,{isRendering:!1,renderedBadge:t})}),ie(S,V,function(e){Object.assign(e,{isRendering:!1})}),ie(S,J,function(e){Object.assign(e,{isRendering:!0})}),ie(S,Y,function(e,t){Object.assign(e,{badgeInEditForm:ae({},t),isEditing:!0,renderedBadge:ae({},t)})}),ie(S,X,function(e){Object.assign(e,{badgeInEditForm:null,isEditing:!1,renderedBadge:null})}),ie(S,Z,function(e,t){e.isEditing?Object.assign(e,{badgeInEditForm:t}):Object.assign(e,{badgeInAddForm:t})}),ie(S,ee,function(e,t){Object.assign(e,{badgeInModal:t})}),S);a.default.use(i.a);var de=new i.a.Store({state:{apiEndpointUrl:null,badgeInAddForm:null,badgeInEditForm:null,badgeInModal:null,badges:[],docsUrl:null,renderedBadge:null,isEditing:!1,isLoading:!1,isRendering:!1,isSaving:!1},actions:ne,mutations:se});t.a=function(e){var t=document.getElementById("badge-settings");return de.dispatch("loadBadges",{kind:e,apiEndpointUrl:t.dataset.apiEndpointUrl,docsUrl:t.dataset.docsUrl}),new a.default({el:t,store:de,components:{BadgeSettings:x},render:function(e){return e(x)}})}}}]);
//# sourceMappingURL=commons~pages.groups.edit~pages.groups.settings.badges~pages.projects.edit.5a6e2ff5.chunk.js.map