(this.webpackJsonp=this.webpackJsonp||[]).push([[13],{121:function(t,e,i){"use strict";i.d(e,"j",function(){return r}),i.d(e,"c",function(){return o}),i.d(e,"b",function(){return a}),i.d(e,"a",function(){return s}),i.d(e,"g",function(){return u}),i.d(e,"f",function(){return l}),i.d(e,"e",function(){return c}),i.d(e,"d",function(){return p}),i.d(e,"i",function(){return d}),i.d(e,"h",function(){return h}),i.d(e,"k",function(){return f}),i.d(e,"l",function(){return g});var n=i(1),r=20,o="subgroups_and_projects",a="shared",s="archived",u=".js-groups-list-holder",l=".js-group-filter-form",c=".content-list",p={FAILURE:Object(n.a)("An error occurred. Please try again."),LEAVE_FORBIDDEN:Object(n.e)("GroupsTree|Failed to leave the group. Please make sure you are not the only owner."),LEAVE_BTN_TITLE:Object(n.e)("GroupsTree|Leave this group"),EDIT_BTN_TITLE:Object(n.e)("GroupsTree|Edit group"),GROUP_SEARCH_EMPTY:Object(n.e)("GroupsTree|No groups matched your search"),GROUP_PROJECT_SEARCH_EMPTY:Object(n.e)("GroupsTree|No groups or projects matched your search")},d={PROJECT:"project",GROUP:"group"},h={public:Object(n.a)("Public - The group and any public projects can be viewed without any authentication."),internal:Object(n.a)("Internal - The group and any internal projects can be viewed by any logged in user."),private:Object(n.a)("Private - The group and its projects can only be viewed by members.")},f={public:Object(n.a)("Public - The project can be accessed without any authentication."),internal:Object(n.a)("Internal - The project can be accessed by any logged in user."),private:Object(n.a)("Private - Project access must be granted explicitly to each user.")},g={public:"earth",internal:"shield",private:"lock"}},128:function(t,e,i){"use strict";function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var r={name:"DeprecatedModal",props:{id:{type:String,required:!1},title:{type:String,required:!1},text:{type:String,required:!1},hideFooter:{type:Boolean,required:!1,default:!1},kind:{type:String,required:!1,default:"primary"},modalDialogClass:{type:String,required:!1,default:""},closeKind:{type:String,required:!1,default:"default"},closeButtonLabel:{type:String,required:!1,default:"Cancel"},primaryButtonLabel:{type:String,required:!1,default:""},secondaryButtonLabel:{type:String,required:!1,default:""},submitDisabled:{type:Boolean,required:!1,default:!1}},computed:{btnKindClass:function(){return n({},"btn-".concat(this.kind),!0)},btnCancelKindClass:function(){return n({},"btn-".concat(this.closeKind),!0)}},methods:{emitCancel:function(t){this.$emit("cancel",t)},emitSubmit:function(t){this.$emit("submit",t)}}},o=i(3),a=Object(o.a)(r,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal-open"},[i("div",{staticClass:"modal",class:t.id?"":"d-block",attrs:{id:t.id,role:"dialog",tabindex:"-1"}},[i("div",{staticClass:"modal-dialog",class:t.modalDialogClass,attrs:{role:"document"}},[i("div",{staticClass:"modal-content"},[i("div",{staticClass:"modal-header"},[t._t("header",[i("h4",{staticClass:"modal-title float-left"},[t._v(t._s(t.title))]),t._v(" "),i("button",{staticClass:"close float-right",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){t.emitCancel(e)}}},[i("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])],2),t._v(" "),i("div",{staticClass:"modal-body"},[t._t("body",[i("p",[t._v(t._s(t.text))])],{text:t.text})],2),t._v(" "),t.hideFooter?t._e():i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn",class:t.btnCancelKindClass,attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){t.emitCancel(e)}}},[t._v("\n            "+t._s(t.closeButtonLabel)+"\n          ")]),t._v(" "),t.secondaryButtonLabel?t._t("secondary-button",[t.secondaryButtonLabel?i("button",{staticClass:"btn",attrs:{type:"button","data-dismiss":"modal"}},[t._v("\n              "+t._s(t.secondaryButtonLabel)+"\n            ")]):t._e()]):t._e(),t._v(" "),t.primaryButtonLabel?i("button",{staticClass:"btn js-primary-button",class:t.btnKindClass,attrs:{disabled:t.submitDisabled,type:"button","data-dismiss":"modal"},on:{click:function(e){t.emitSubmit(e)}}},[t._v("\n            "+t._s(t.primaryButtonLabel)+"\n          ")]):t._e()],2)])])]),t._v(" "),t.id?t._e():i("div",{staticClass:"modal-backdrop fade show"})])},[],!1,null,null,null);a.options.__file="deprecated_modal.vue";e.a=a.exports},183:function(t,e,i){"use strict";i.d(e,"a",function(){return l});var n=i(0),r=i.n(n),o=i(5),a=i.n(o),s=i(6);function u(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var l=function(){function t(e,i,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"filter_groups";!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.filterForm=e,this.listFilterElement=i,this.listHolderElement=n,this.filterInputField=r,this.isBusy=!1}var e,i,n;return e=t,(i=[{key:"getFilterEndpoint",value:function(){return"".concat(this.filterForm.getAttribute("action"),"?").concat(r()(this.filterForm).serialize())}},{key:"getPagePath",value:function(){return this.getFilterEndpoint()}},{key:"initSearch",value:function(){this.debounceFilter=a.a.debounce(this.onFilterInput.bind(this),500),this.unbindEvents(),this.bindEvents()}},{key:"onFilterInput",value:function(){var t={},e=r()(this.filterForm).find('[name="'.concat(this.filterInputField,'"]')).val();e&&(t[this.filterInputField]=e),this.filterResults(t),this.setDefaultFilterOption&&this.setDefaultFilterOption()}},{key:"bindEvents",value:function(){this.listFilterElement.addEventListener("input",this.debounceFilter)}},{key:"unbindEvents",value:function(){this.listFilterElement.removeEventListener("input",this.debounceFilter)}},{key:"filterResults",value:function(t){var e=this;return!this.isBusy&&(r()(this.listHolderElement).fadeTo(250,.5),this.isBusy=!0,s.a.get(this.getFilterEndpoint(),{params:t}).then(function(i){e.onFilterSuccess(i,t),e.onFilterComplete()}).catch(function(){return e.onFilterComplete()}))}},{key:"onFilterSuccess",value:function(t,e){t.data.html&&(this.listHolderElement.innerHTML=t.data.html);var i=this.getPagePath(e);return window.history.replaceState({page:i},document.title,i)}},{key:"onFilterComplete",value:function(){this.isBusy=!1,r()(this.listHolderElement).fadeTo(250,1)}}])&&u(e.prototype,i),n&&u(e,n),t}()},191:function(t,e,i){"use strict";var n=i(11);e.a=new n.default},41:function(t,e,i){"use strict";var n=i(0),r=i.n(n);e.a={bind:function(t){r()(t).tooltip({trigger:"hover"})},componentUpdated:function(t){r()(t).tooltip("_fixTitle");var e=r()(t).data("bs.tooltip"),i=e.getTipElement();e.setElementContent(r()(i.querySelectorAll(".tooltip-inner")),e.getTitle())},unbind:function(t){r()(t).tooltip("dispose")}}},424:function(t,e,i){"use strict";var n=i(11),r=i(13),o=i(78),a=i(548);function s(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var u=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.state={},this.state.groups=[],this.state.pageInfo={},this.hideProjects=e}var e,i,n;return e=t,(i=[{key:"setGroups",value:function(t){var e=this;t&&t.length?this.state.groups=t.map(function(t){return e.formatGroupItem(t)}):this.state.groups=[]}},{key:"setSearchedGroups",value:function(t){var e=this;t&&t.length?this.state.groups=function t(i){return i.map(function(i){var n=e.formatGroupItem(i);return n.children&&n.children.length&&(n.children=t(n.children)),n})}(t):this.state.groups=[]}},{key:"setGroupChildren",value:function(t,e){var i=this,n=t;n.children=e.map(function(t){return i.formatGroupItem(t)}),n.isOpen=!0,n.isChildrenLoading=!1}},{key:"getGroups",value:function(){return this.state.groups}},{key:"setPaginationInfo",value:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(Object.keys(e).length){var i=Object(r.y)(e);t=Object(r.B)(i)}else t=e;this.state.pageInfo=t}},{key:"getPaginationInfo",value:function(){return this.state.pageInfo}},{key:"formatGroupItem",value:function(t){var e=t.children||[],i=e.length>0||!1,n=this.hideProjects?t.subgroup_count:t.children_count;return{id:t.id,name:t.name,fullName:t.full_name,description:t.markdown_description,visibility:t.visibility,avatarUrl:t.avatar_url,relativePath:t.relative_path,editPath:t.edit_path,leavePath:t.leave_path,canEdit:t.can_edit,canLeave:t.can_leave,type:t.type,permission:t.permission,children:e,isOpen:i,isChildrenLoading:!1,isBeingRemoved:!1,parentId:t.parent_id,childrenCount:n,projectCount:t.project_count,subgroupCount:t.subgroup_count,memberCount:t.number_users_with_delimiter,starCount:t.star_count,updatedAt:t.updated_at}}},{key:"removeGroup",value:function(t,e){var i=e;i.children&&i.children.length?i.children=e.children.filter(function(e){return t.id!==e.id}):this.state.groups=this.state.groups.filter(function(e){return t.id!==e.id})}}])&&s(e.prototype,i),n&&s(e,n),t}();i(412);function l(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.groups=n.default.resource(e)}var e,i,r;return e=t,(i=[{key:"getGroups",value:function(t,e,i,n,r){var o={};return t?o.parent_id=t:(e&&(o.page=e),i&&(o.filter=i),n&&(o.sort=n),r&&(o.archived=r)),this.groups.get(o)}},{key:"leaveGroup",value:function(t){return n.default.http.delete(t)}}])&&l(e.prototype,i),r&&l(e,r),t}(),p=i(0),d=i.n(p),h=i(1),f=i(128),g=i(50),m=i(19),v=i(10),b=i(191),y=i(121),_={components:{GlPagination:v.h},props:{change:{type:Function,required:!0},pageInfo:{type:Object,required:!0}},firstText:Object(h.e)("Pagination|« First"),prevText:Object(h.e)("Pagination|Prev"),nextText:Object(h.e)("Pagination|Next"),lastText:Object(h.e)("Pagination|Last »")},C=i(3),j=Object(C.a)(_,function(){var t=this,e=t.$createElement;return(t._self._c||e)("gl-pagination",t._b({attrs:{change:t.change,page:t.pageInfo.page,"per-page":t.pageInfo.perPage,"total-items":t.pageInfo.total,"first-text":t.$options.firstText,"prev-text":t.$options.prevText,"next-text":t.$options.nextText,"last-text":t.$options.lastText}},"gl-pagination",t.$attrs,!1))},[],!1,null,null,null);j.options.__file="pagination_links.vue";var O={components:{PaginationLinks:j.exports},props:{groups:{type:Array,required:!0},pageInfo:{type:Object,required:!0},searchEmpty:{type:Boolean,required:!0},searchEmptyMessage:{type:String,required:!0},action:{type:String,required:!1,default:""}},methods:{change:function(t){var e=Object(r.i)("filter_groups"),i=Object(r.i)("sort"),n=Object(r.i)("archived");b.a.$emit("".concat(this.action,"fetchPage"),t,e,i,n)}}},P=Object(C.a)(O,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"groups-list-tree-container qa-groups-list-tree-container"},[t.searchEmpty?i("div",{staticClass:"has-no-search-results"},[t._v(t._s(t.searchEmptyMessage))]):[i("group-folder",{attrs:{groups:t.groups,action:t.action}}),t._v(" "),i("pagination-links",{staticClass:"d-flex justify-content-center prepend-top-default",attrs:{change:t.change,"page-info":t.pageInfo}})]],2)},[],!1,null,null,null);P.options.__file="groups.vue";var w=P.exports,G={components:{DeprecatedModal:f.a,groupsComponent:w,GlLoadingIcon:v.e},props:{action:{type:String,required:!1,default:""},containerId:{type:String,required:!1,default:""},store:{type:Object,required:!0},service:{type:Object,required:!0},hideProjects:{type:Boolean,required:!0}},data:function(){return{isLoading:!0,isSearchEmpty:!1,searchEmptyMessage:"",showModal:!1,groupLeaveConfirmationMessage:"",targetGroup:null,targetParentGroup:null}},computed:{groups:function(){return this.store.getGroups()},pageInfo:function(){return this.store.getPaginationInfo()}},created:function(){this.searchEmptyMessage=this.hideProjects?y.d.GROUP_SEARCH_EMPTY:y.d.GROUP_PROJECT_SEARCH_EMPTY,b.a.$on("".concat(this.action,"fetchPage"),this.fetchPage),b.a.$on("".concat(this.action,"toggleChildren"),this.toggleChildren),b.a.$on("".concat(this.action,"showLeaveGroupModal"),this.showLeaveGroupModal),b.a.$on("".concat(this.action,"updatePagination"),this.updatePagination),b.a.$on("".concat(this.action,"updateGroups"),this.updateGroups)},mounted:function(){this.fetchAllGroups(),this.containerId&&(this.containerEl=document.getElementById(this.containerId))},beforeDestroy:function(){b.a.$off("".concat(this.action,"fetchPage"),this.fetchPage),b.a.$off("".concat(this.action,"toggleChildren"),this.toggleChildren),b.a.$off("".concat(this.action,"showLeaveGroupModal"),this.showLeaveGroupModal),b.a.$off("".concat(this.action,"updatePagination"),this.updatePagination),b.a.$off("".concat(this.action,"updateGroups"),this.updateGroups)},methods:{fetchGroups:function(t){var e=this,i=t.parentId,n=t.page,r=t.filterGroupsBy,o=t.sortBy,a=t.archived,s=t.updatePagination;return this.service.getGroups(i,n,r,o,a).then(function(t){return s&&e.updatePagination(t.headers),t}).then(function(t){return t.json()}).catch(function(){e.isLoading=!1,d.a.scrollTo(0),Flash(y.d.FAILURE)})},fetchAllGroups:function(){var t=this,e=Object(r.i)("page")||null,i=Object(r.i)("sort")||null,n=Object(r.i)("archived")||null,o=Object(r.i)("filter")||null;this.isLoading=!0,this.fetchGroups({page:e,filterGroupsBy:o,sortBy:i,archived:n,updatePagination:!0}).then(function(e){t.isLoading=!1,t.updateGroups(e,Boolean(o))})},fetchPage:function(t,e,i,n){var r=this;this.isLoading=!0,this.fetchGroups({page:t,filterGroupsBy:e,sortBy:i,archived:n,updatePagination:!0}).then(function(e){r.isLoading=!1,d.a.scrollTo(0);var i=Object(m.c)({page:t},window.location.href);window.history.replaceState({page:i},document.title,i),r.updateGroups(e)})},toggleChildren:function(t){var e=this,i=t;i.isOpen?i.isOpen=!1:0===i.children.length?(i.isChildrenLoading=!0,this.fetchGroups({parentId:i.id}).then(function(t){e.store.setGroupChildren(i,t)}).catch(function(){i.isChildrenLoading=!1})):i.isOpen=!0},showLeaveGroupModal:function(t,e){var i=t.fullName;this.targetGroup=t,this.targetParentGroup=e,this.showModal=!0,this.groupLeaveConfirmationMessage=Object(h.f)(Object(h.e)('GroupsTree|Are you sure you want to leave the "%{fullName}" group?'),{fullName:i})},hideLeaveGroupModal:function(){this.showModal=!1},leaveGroup:function(){var t=this;this.showModal=!1,this.targetGroup.isBeingRemoved=!0,this.service.leaveGroup(this.targetGroup.leavePath).then(function(t){return t.json()}).then(function(e){d.a.scrollTo(0),t.store.removeGroup(t.targetGroup,t.targetParentGroup),Flash(e.notice,"notice")}).catch(function(e){var i=y.d.FAILURE;403===e.status&&(i=y.d.LEAVE_FORBIDDEN),Flash(i),t.targetGroup.isBeingRemoved=!1})},showEmptyState:function(){var t=this.containerEl,e=t.querySelector(y.e),i=t.querySelector(".empty-state");e&&e.remove(),i&&i.classList.remove(g.b)},updatePagination:function(t){this.store.setPaginationInfo(t)},updateGroups:function(t,e){var i=t&&t.length>0;this.isSearchEmpty=!i,e?this.store.setSearchedGroups(t):this.store.setGroups(t),!this.action||i||e||this.showEmptyState()}}},E=Object(C.a)(G,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.isLoading?i("gl-loading-icon",{staticClass:"loading-animation prepend-top-20",attrs:{label:t.s__("GroupsTree|Loading groups"),size:2}}):t._e(),t._v(" "),t.isLoading?t._e():i("groups-component",{attrs:{groups:t.groups,"search-empty":t.isSearchEmpty,"search-empty-message":t.searchEmptyMessage,"page-info":t.pageInfo,action:t.action}}),t._v(" "),i("deprecated-modal",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],attrs:{"primary-button-label":t.__("Leave"),title:t.__("Are you sure?"),text:t.groupLeaveConfirmationMessage,kind:"warning"},on:{cancel:t.hideLeaveGroupModal,submit:t.leaveGroup}})],1)},[],!1,null,null,null);E.options.__file="app.vue";var T=E.exports,S={props:{parentGroup:{type:Object,required:!1,default:function(){return{}}},groups:{type:Array,required:!0},action:{type:String,required:!1,default:""}},computed:{hasMoreChildren:function(){return this.parentGroup.childrenCount>y.j},moreChildrenStats:function(){return Object(h.d)("One more item","%d more items",this.parentGroup.childrenCount-this.parentGroup.children.length)}}},k=Object(C.a)(S,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"content-list group-list-tree"},[t._l(t.groups,function(e,n){return i("group-item",{key:n,attrs:{group:e,"parent-group":t.parentGroup,action:t.action}})}),t._v(" "),t.hasMoreChildren?i("li",{staticClass:"group-row"},[i("a",{staticClass:"group-row-contents has-more-items",attrs:{href:t.parentGroup.relativePath}},[i("i",{staticClass:"fa fa-external-link",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.moreChildrenStats)+"\n    ")])]):t._e()],2)},[],!1,null,null,null);k.options.__file="group_folder.vue";var I=k.exports,L=i(41),x=i(372),F=i(15),q={components:{icon:F.a},props:{isGroupOpen:{type:Boolean,required:!0,default:!1}},computed:{iconClass:function(){return this.isGroupOpen?"angle-down":"angle-right"}}},B=Object(C.a)(q,function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"folder-caret"},[e("icon",{attrs:{size:12,name:this.iconClass}})],1)},[],!1,null,null,null);B.options.__file="item_caret.vue";var $=B.exports,R={components:{icon:F.a},props:{itemType:{type:String,required:!0},isGroupOpen:{type:Boolean,required:!0,default:!1}},computed:{iconClass:function(){return this.itemType===y.i.GROUP?this.isGroupOpen?"folder-open":"folder":"bookmark"}}},M=Object(C.a)(R,function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"item-type-icon"},[e("icon",{attrs:{name:this.iconClass}})],1)},[],!1,null,null,null);M.options.__file="item_type_icon.vue";var A=M.exports,D=i(93),N={components:{icon:F.a},directives:{tooltip:L.a},props:{title:{type:String,required:!1,default:""},cssClass:{type:String,required:!1,default:""},iconName:{type:String,required:!0},tooltipPlacement:{type:String,required:!1,default:"bottom"},value:{type:[Number,String],required:!1,default:""}},computed:{isValuePresent:function(){return""!==this.value}}},U=Object(C.a)(N,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{directives:[{name:"tooltip",rawName:"v-tooltip"}],class:t.cssClass,attrs:{"data-placement":t.tooltipPlacement,title:t.title,"data-container":"body"}},[i("icon",{attrs:{name:t.iconName}}),t._v(" "),t.isValuePresent?i("span",{staticClass:"stat-value"},[t._v(" "+t._s(t.value)+" ")]):t._e()],1)},[],!1,null,null,null);U.options.__file="item_stats_value.vue";var H=U.exports,V={components:{icon:F.a,timeAgoTooltip:D.a,itemStatsValue:H},props:{item:{type:Object,required:!0}},computed:{visibilityIcon:function(){return y.l[this.item.visibility]},visibilityTooltip:function(){return this.item.type===y.i.GROUP?y.h[this.item.visibility]:y.k[this.item.visibility]},isProject:function(){return this.item.type===y.i.PROJECT},isGroup:function(){return this.item.type===y.i.GROUP}}},J=Object(C.a)(V,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"stats"},[t.isGroup?i("item-stats-value",{attrs:{title:t.__("Subgroups"),value:t.item.subgroupCount,"css-class":"number-subgroups","icon-name":"folder"}}):t._e(),t._v(" "),t.isGroup?i("item-stats-value",{attrs:{title:t.__("Projects"),value:t.item.projectCount,"css-class":"number-projects","icon-name":"bookmark"}}):t._e(),t._v(" "),t.isGroup?i("item-stats-value",{attrs:{title:t.__("Members"),value:t.item.memberCount,"css-class":"number-users","icon-name":"users"}}):t._e(),t._v(" "),t.isProject?i("item-stats-value",{attrs:{value:t.item.starCount,"css-class":"project-stars","icon-name":"star"}}):t._e(),t._v(" "),i("item-stats-value",{attrs:{"icon-name":t.visibilityIcon,title:t.visibilityTooltip,"css-class":"item-visibility","tooltip-placement":"left"}}),t._v(" "),t.isProject?i("div",{staticClass:"last-updated"},[i("time-ago-tooltip",{attrs:{time:t.item.updatedAt,"tooltip-placement":"bottom"}})],1):t._e()],1)},[],!1,null,null,null);J.options.__file="item_stats.vue";var K=J.exports,z={components:{icon:F.a},directives:{tooltip:L.a},props:{parentGroup:{type:Object,required:!1,default:function(){return{}}},group:{type:Object,required:!0},action:{type:String,required:!1,default:""}},computed:{leaveBtnTitle:function(){return y.d.LEAVE_BTN_TITLE},editBtnTitle:function(){return y.d.EDIT_BTN_TITLE}},methods:{onLeaveGroup:function(){b.a.$emit("".concat(this.action,"showLeaveGroupModal"),this.group,this.parentGroup)}}},Y=Object(C.a)(z,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"controls"},[t.group.canEdit?i("a",{directives:[{name:"tooltip",rawName:"v-tooltip"}],staticClass:"edit-group btn no-expand",attrs:{href:t.group.editPath,title:t.editBtnTitle,"aria-label":t.editBtnTitle,"data-container":"body","data-placement":"bottom"}},[i("icon",{attrs:{name:"settings"}})],1):t._e(),t._v(" "),t.group.canLeave?i("a",{directives:[{name:"tooltip",rawName:"v-tooltip"}],staticClass:"leave-group btn no-expand",attrs:{href:t.group.leavePath,title:t.leaveBtnTitle,"aria-label":t.leaveBtnTitle,"data-container":"body","data-placement":"bottom"},on:{click:function(e){return e.preventDefault(),t.onLeaveGroup(e)}}},[i("icon",{attrs:{name:"leave"}})],1):t._e()])},[],!1,null,null,null);Y.options.__file="item_actions.vue";var W=Y.exports,Q={directives:{tooltip:L.a},components:{identicon:x.a,itemCaret:$,itemTypeIcon:A,itemStats:K,itemActions:W},props:{parentGroup:{type:Object,required:!1,default:function(){return{}}},group:{type:Object,required:!0},action:{type:String,required:!1,default:""}},computed:{groupDomId:function(){return"group-".concat(this.group.id)},rowClass:function(){return{"is-open":this.group.isOpen,"has-children":this.hasChildren,"has-description":this.group.description,"being-removed":this.group.isBeingRemoved}},hasChildren:function(){return this.group.childrenCount>0},hasAvatar:function(){return null!==this.group.avatarUrl},isGroup:function(){return"group"===this.group.type}},methods:{onClickRowGroup:function(t){var e=t.target.classList,i=t.target.parentElement.classList;e.contains("no-expand")||i.contains("no-expand")||(this.hasChildren?b.a.$emit("".concat(this.action,"toggleChildren"),this.group):Object(m.g)(this.group.relativePath))}}},X=Object(C.a)(Q,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"group-row",class:t.rowClass,attrs:{id:t.groupDomId},on:{click:function(e){return e.stopPropagation(),t.onClickRowGroup(e)}}},[i("div",{staticClass:"group-row-contents d-flex justify-content-end align-items-center",class:{"project-row-contents":!t.isGroup}},[i("div",{staticClass:"folder-toggle-wrap append-right-4 d-flex align-items-center"},[i("item-caret",{attrs:{"is-group-open":t.group.isOpen}}),t._v(" "),i("item-type-icon",{attrs:{"item-type":t.group.type,"is-group-open":t.group.isOpen}})],1),t._v(" "),i("div",{staticClass:"avatar-container s24 d-none d-sm-flex",class:{"content-loading":t.group.isChildrenLoading}},[i("a",{staticClass:"no-expand",attrs:{href:t.group.relativePath}},[t.hasAvatar?i("img",{staticClass:"avatar s24",attrs:{src:t.group.avatarUrl}}):i("identicon",{attrs:{"entity-id":t.group.id,"entity-name":t.group.name,"size-class":"s24"}})],1)]),t._v(" "),i("div",{staticClass:"group-text flex-grow"},[i("div",{staticClass:"title namespace-title append-right-8"},[i("a",{directives:[{name:"tooltip",rawName:"v-tooltip"}],staticClass:"no-expand",attrs:{href:t.group.relativePath,title:t.group.fullName,"data-placement":"bottom"}},[t._v(t._s(t.group.name))]),t._v(" "),t.group.permission?i("span",{staticClass:"user-access-role"},[t._v(" "+t._s(t.group.permission)+" ")]):t._e()]),t._v(" "),t.group.description?i("div",{staticClass:"description"},[i("span",{domProps:{innerHTML:t._s(t.group.description)}})]):t._e()]),t._v(" "),i("item-stats",{staticClass:"group-stats prepend-top-2",attrs:{item:t.group}}),t._v(" "),t.isGroup?i("item-actions",{attrs:{group:t.group,"parent-group":t.parentGroup}}):t._e()],1),t._v(" "),t.group.isOpen&&t.hasChildren?i("group-folder",{attrs:{"parent-group":t.group,groups:t.group.children,action:t.action}}):t._e()],1)},[],!1,null,null,null);X.options.__file="group_item.vue";var Z=X.exports;n.default.use(o.a);e.a=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"js-groups-tree",i=arguments.length>1?arguments[1]:void 0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=document.getElementById(e);if(s){var l=o?s.querySelector(y.g):s;o&&(t=s.querySelector(y.e)),n.default.component("group-folder",I),n.default.component("group-item",Z),new n.default({el:l,components:{groupsApp:T},data:function(){var n=(t||this.$options.el).dataset,a=Object(r.A)(n.hideProjects),s=new c(i||n.endpoint),l=new u(a);return{action:o,store:l,service:s,hideProjects:a,loading:!0,containerId:e}},beforeMount:function(){if(!this.action){var e=(t||this.$options.el).dataset,n={form:document.querySelector(e.formSel),filter:document.querySelector(e.filterSel),holder:document.querySelector(e.holderSel),filterEndpoint:i||e.endpoint,pagePath:e.path,dropdownSel:e.dropdownSel,filterInputField:"filter",action:this.action};new a.a(n).initSearch()}},render:function(t){return t("groups-app",{props:{action:this.action,store:this.store,service:this.service,hideProjects:this.hideProjects,containerId:this.containerId}})}})}}},50:function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return r});var n=1024,r="hidden"},548:function(t,e,i){"use strict";i.d(e,"a",function(){return f});var n=i(0),r=i.n(n),o=i(183),a=i(191),s=i(13);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t,e,i){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,i){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}(t,e);if(n){var r=Object.getOwnPropertyDescriptor(n,e);return r.get?r.get.call(i):r.value}})(t,e,i||t)}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var f=function(t){function e(t){var i,n=t.form,o=t.filter,a=t.holder,s=t.filterEndpoint,u=t.pagePath,l=t.dropdownSel,p=t.filterInputField,h=t.action;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(i=c(this,d(e).call(this,n,o,a,p))).form=n,i.filterEndpoint=s,i.pagePath=u,i.filterInputField=p,i.$dropdown=r()(l),i.action=h,i}var i,n,u;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(e,o["a"]),i=e,(n=[{key:"getFilterEndpoint",value:function(){return this.filterEndpoint}},{key:"getPagePath",value:function(t){var e=t?r.a.param(t):"",i=e?"?".concat(e):"",n=this.pagePath||window.location.pathname;return"".concat(n).concat(i)}},{key:"bindEvents",value:function(){p(d(e.prototype),"bindEvents",this).call(this),this.onFilterOptionClickWrapper=this.onOptionClick.bind(this),this.$dropdown.on("click","a",this.onFilterOptionClickWrapper)}},{key:"onFilterInput",value:function(){var t={},e=r()(this.form),i=Object(s.i)("archived",window.location.href),n=e.find('[name="'.concat(this.filterInputField,'"]')).val();n&&(t[this.filterInputField]=n),i&&(t.archived=i),this.filterResults(t),this.setDefaultFilterOption&&this.setDefaultFilterOption()}},{key:"setDefaultFilterOption",value:function(){var t=r.a.trim(this.$dropdown.find(".dropdown-menu li.js-filter-sort-order a").first().text());this.$dropdown.find(".dropdown-label").text(t)}},{key:"onOptionClick",value:function(t){t.preventDefault();var e={},i=t.currentTarget.parentElement.classList,n=i.contains("js-filter-sort-order"),o=i.contains("js-filter-archived-projects"),a=Object(s.i)("sort",n?t.currentTarget.href:window.location.href),u=Object(s.i)("archived",o?t.currentTarget.href:window.location.href);a&&(e.sort=a),u&&(e.archived=u),this.filterResults(e),n?(this.$dropdown.find(".dropdown-label").text(r.a.trim(t.currentTarget.text)),this.$dropdown.find(".dropdown-menu li.js-filter-sort-order a").removeClass("is-active")):o&&this.$dropdown.find(".dropdown-menu li.js-filter-archived-projects a").removeClass("is-active"),r()(t.target).addClass("is-active"),this.form.querySelector('[name="'.concat(this.filterInputField,'"]')).value=""}},{key:"onFilterSuccess",value:function(t,e){var i=this.getPagePath(e);window.history.replaceState({page:i},document.title,i),a.a.$emit("".concat(this.action,"updateGroups"),t.data,Object.prototype.hasOwnProperty.call(e,this.filterInputField)),a.a.$emit("".concat(this.action,"updatePagination"),Object(s.y)(t.headers))}}])&&l(i.prototype,n),u&&l(i,u),e}()},84:function(t,e,i){"use strict";var n=i(20);e.a={methods:{timeFormated:function(t){return Object(n.h)().format(t)},tooltipTitle:function(t){return Object(n.d)(t)}}}},93:function(t,e,i){"use strict";var n=i(10),r=i(84),o=(i(20),{directives:{GlTooltip:n.n},mixins:[r.a],props:{time:{type:String,required:!0},tooltipPlacement:{type:String,required:!1,default:"top"},cssClass:{type:String,required:!1,default:""}}}),a=i(3),s=Object(a.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("time",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip",value:{placement:this.tooltipPlacement},expression:"{ placement: tooltipPlacement }"}],class:this.cssClass,attrs:{title:this.tooltipTitle(this.time)},domProps:{textContent:this._s(this.timeFormated(this.time))}})},[],!1,null,null,null);s.options.__file="time_ago_tooltip.vue";e.a=s.exports}}]);
//# sourceMappingURL=commons~pages.dashboard.groups.index~pages.explore.groups~pages.groups.show.7eceb043.chunk.js.map