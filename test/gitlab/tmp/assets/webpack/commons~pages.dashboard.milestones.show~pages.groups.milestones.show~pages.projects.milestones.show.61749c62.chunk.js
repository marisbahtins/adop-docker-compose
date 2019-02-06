(this.webpackJsonp=this.webpackJsonp||[]).push([[14],{159:function(t,e,a){"use strict";var i=a(0),n=a.n(i),s=a(5),o=a.n(s),r=a(14),l=a.n(r),d=a(7),c=a(6),m=a(1);function p(t){this.toggleTodo=this.toggleTodo.bind(this),this.sidebar=n()("aside"),this.removeListeners(),this.addEventListeners()}p.initialize=function(t){this.instance||(this.instance=new p(t))},p.prototype.removeListeners=function(){this.sidebar.off("click",".sidebar-collapsed-icon"),this.sidebar.off("hidden.gl.dropdown"),n()(".dropdown").off("loading.gl.dropdown"),n()(".dropdown").off("loaded.gl.dropdown"),n()(document).off("click",".js-sidebar-toggle")},p.prototype.addEventListeners=function(){var t=n()(document);return this.sidebar.on("click",".sidebar-collapsed-icon",this,this.sidebarCollapseClicked),this.sidebar.on("hidden.gl.dropdown",this,this.onSidebarDropdownHidden),n()(".dropdown").on("loading.gl.dropdown",this.sidebarDropdownLoading),n()(".dropdown").on("loaded.gl.dropdown",this.sidebarDropdownLoaded),t.on("click",".js-sidebar-toggle",this.sidebarToggleClicked),n()(document).off("click",".js-issuable-todo").on("click",".js-issuable-todo",this.toggleTodo)},p.prototype.sidebarToggleClicked=function(t,e){var a,i,s,o;t.preventDefault(),o=(s=(i=n()(this)).find("i").hasClass("fa-angle-double-right"))?Object(m.a)("Expand sidebar"):Object(m.a)("Collapse sidebar"),a=n()(".js-sidebar-toggle i"),s?(a.removeClass("fa-angle-double-right").addClass("fa-angle-double-left"),n()("aside.right-sidebar").removeClass("right-sidebar-expanded").addClass("right-sidebar-collapsed"),n()(".layout-page").removeClass("right-sidebar-expanded").addClass("right-sidebar-collapsed")):(a.removeClass("fa-angle-double-left").addClass("fa-angle-double-right"),n()("aside.right-sidebar").removeClass("right-sidebar-collapsed").addClass("right-sidebar-expanded"),n()(".layout-page").removeClass("right-sidebar-collapsed").addClass("right-sidebar-expanded")),i.attr("data-original-title",o),e||l.a.set("collapsed_gutter",n()(".right-sidebar").hasClass("right-sidebar-collapsed"))},p.prototype.toggleTodo=function(t){var e,a,i,s=this;e=n()(t.currentTarget),a=e.data("deletePath")?"delete":"post",i=e.data("deletePath")?""+e.data("deletePath"):""+e.data("createPath"),e.tooltip("hide"),n()(".js-issuable-todo").disable().addClass("is-loading"),c.a[a](i,{issuable_id:e.data("issuableId"),issuable_type:e.data("issuableType")}).then(function(t){var e=t.data;s.todoUpdateDone(e)}).catch(function(){return Object(d.a)("There was an error ".concat("post"===a?"adding a":"deleting the"," todo."))})},p.prototype.todoUpdateDone=function(t){var e=t.delete_path?t.delete_path:null,a=e?"mark":"todo",i=n()(".js-issuable-todo");n()(document).trigger("todo:toggle",t.count),i.each(function(t,i){var s=n()(i),o=s.find(".js-issuable-todo-inner");s.removeClass("is-loading").enable().attr("aria-label",s.data("".concat(a,"Text"))).attr("title",s.data("".concat(a,"Text"))).data("deletePath",e),s.hasClass("has-tooltip")&&s.tooltip("_fixTitle"),void 0!==s.data("isCollapsed")?o.html(s.data("".concat(a,"Icon"))):o.text(s.data("".concat(a,"Text")))})},p.prototype.sidebarDropdownLoading=function(t){var e,a,i,s;return s=(a=n()(this).closest(".block").find(".sidebar-collapsed-icon")).find("img"),i=a.find("i"),e=n()('<i class="fa fa-spinner fa-spin"></i>'),s.length?(s.before(e),s.hide()):i.length?(i.before(e),i.hide()):void 0},p.prototype.sidebarDropdownLoaded=function(t){var e,a,i;return i=(e=n()(this).closest(".block").find(".sidebar-collapsed-icon")).find("img"),e.find("i.fa-spin").remove(),a=e.find("i"),i.length?i.show():a.show()},p.prototype.sidebarCollapseClicked=function(t){var e,a;if(!n()(t.currentTarget).hasClass("dont-change-state"))return a=t.data,t.preventDefault(),e=n()(this).closest(".block"),a.openDropdown(e)},p.prototype.openDropdown=function(t){var e;e=o.a.isString(t)?this.getBlock(t):t,this.isOpen()||(this.setCollapseAfterUpdate(e),this.toggleSidebar("open")),setTimeout(function(){e.find(".js-sidebar-dropdown-toggle").trigger("click")})},p.prototype.setCollapseAfterUpdate=function(t){return t.addClass("collapse-after-update"),n()(".layout-page").addClass("with-overlay")},p.prototype.onSidebarDropdownHidden=function(t){var e,a;return a=t.data,t.preventDefault(),e=n()(t.target).closest(".block"),a.sidebarDropdownHidden(e)},p.prototype.sidebarDropdownHidden=function(t){if(t.hasClass("collapse-after-update"))return t.removeClass("collapse-after-update"),n()(".layout-page").removeClass("with-overlay"),this.toggleSidebar("hide")},p.prototype.triggerOpenSidebar=function(){return this.sidebar.find(".js-sidebar-toggle").trigger("click")},p.prototype.toggleSidebar=function(t){if(null==t&&(t="toggle"),"toggle"===t&&this.triggerOpenSidebar(),"open"===t&&(this.isOpen()||this.triggerOpenSidebar()),"hide"===t&&this.isOpen())return this.triggerOpenSidebar()},p.prototype.isOpen=function(){return this.sidebar.is(".right-sidebar-expanded")},p.prototype.getBlock=function(t){return this.sidebar.find(".block."+t)},e.a=p},299:function(t,e,a){"use strict";var i=a(1),n={name:"TimeTrackingHelpState",props:{rootPath:{type:String,required:!0}},computed:{href:function(){return"".concat(this.rootPath,"help/workflow/time_tracking.md")},estimateText:function(){return Object(i.f)(Object(i.e)("estimateCommand|%{slash_command} will update the estimated time with the latest command."),{slash_command:"<code>/estimate</code>"},!1)},spendText:function(){return Object(i.f)(Object(i.e)("spendCommand|%{slash_command} will update the sum of the time spent."),{slash_command:"<code>/spend</code>"},!1)}}},s=a(3),o=Object(s.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"time-tracking-help-state"},[a("div",{staticClass:"time-tracking-info"},[a("h4",[t._v(t._s(t.__("Track time with quick actions")))]),t._v(" "),a("p",[t._v(t._s(t.__("Quick actions can be used in the issues description and comment boxes.")))]),t._v(" "),a("p",{domProps:{innerHTML:t._s(t.estimateText)}}),t._v(" "),a("p",{domProps:{innerHTML:t._s(t.spendText)}}),t._v(" "),a("a",{staticClass:"btn btn-default learn-more-button",attrs:{href:t.href}},[t._v(" "+t._s(t.__("Learn more"))+" ")])])])},[],!1,null,null,null);o.options.__file="help_state.vue";var r=o.exports,l=a(20),d=a(15),c=a(41),m={name:"TimeTrackingCollapsedState",components:{icon:d.a},directives:{tooltip:c.a},props:{showComparisonState:{type:Boolean,required:!0},showSpentOnlyState:{type:Boolean,required:!0},showEstimateOnlyState:{type:Boolean,required:!0},showNoTimeTrackingState:{type:Boolean,required:!0},timeSpentHumanReadable:{type:String,required:!1,default:""},timeEstimateHumanReadable:{type:String,required:!1,default:""}},computed:{timeSpent:function(){return this.abbreviateTime(this.timeSpentHumanReadable)},timeEstimate:function(){return this.abbreviateTime(this.timeEstimateHumanReadable)},divClass:function(){return this.showComparisonState?"compare":this.showEstimateOnlyState?"estimate-only":this.showSpentOnlyState?"spend-only":this.showNoTimeTrackingState?"no-tracking":""},spanClass:function(){return this.showComparisonState?"":this.showEstimateOnlyState||this.showSpentOnlyState?"bold":this.showNoTimeTrackingState?"no-value":""},text:function(){return this.showComparisonState?"".concat(this.timeSpent," / ").concat(this.timeEstimate):this.showEstimateOnlyState?"-- / ".concat(this.timeEstimate):this.showSpentOnlyState?"".concat(this.timeSpent," / --"):this.showNoTimeTrackingState?"None":""},timeTrackedTooltipText:function(){var t;return this.showComparisonState?t=Object(i.a)("Time remaining"):this.showEstimateOnlyState?t=Object(i.a)("Estimated"):this.showSpentOnlyState&&(t=Object(i.a)("Time spent")),Object(i.f)("%{title}: %{text}",{title:t,text:this.text})},tooltipText:function(){return this.showNoTimeTrackingState?Object(i.a)("Time tracking"):this.timeTrackedTooltipText}},methods:{abbreviateTime:function(t){return Object(l.a)(t)}}},p=Object(s.a)(m,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"tooltip",rawName:"v-tooltip"}],staticClass:"sidebar-collapsed-icon",attrs:{title:this.tooltipText,"data-container":"body","data-placement":"left","data-boundary":"viewport"}},[e("icon",{attrs:{name:"timer"}}),this._v(" "),e("div",{staticClass:"time-tracking-collapsed-summary"},[e("div",{class:this.divClass},[e("span",{class:this.spanClass},[this._v(" "+this._s(this.text)+" ")])])])],1)},[],!1,null,null,null);p.options.__file="collapsed_state.vue";var u=p.exports,h={name:"TimeTrackingSpentOnlyPane",props:{timeSpentHumanReadable:{type:String,required:!0}}},g=Object(s.a)(h,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"time-tracking-spend-only-pane"},[e("span",{staticClass:"bold"},[this._v("Spent:")]),this._v(" "+this._s(this.timeSpentHumanReadable)+"\n")])},[],!1,null,null,null);g.options.__file="spent_only_pane.vue";var f=g.exports,b={name:"TimeTrackingNoTrackingPane"},v=Object(s.a)(b,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"time-tracking-no-tracking-pane"},[e("span",{staticClass:"no-value"},[this._v(" "+this._s(this.__("No estimate or time spent"))+" ")])])},[],!1,null,null,null);v.options.__file="no_tracking_pane.vue";var T=v.exports,_={name:"TimeTrackingEstimateOnlyPane",props:{timeEstimateHumanReadable:{type:String,required:!0}}},S=Object(s.a)(_,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"time-tracking-estimate-only-pane"},[e("span",{staticClass:"bold"},[this._v(" "+this._s(this.s__("TimeTracking|Estimated:"))+" ")]),this._v(" "+this._s(this.timeEstimateHumanReadable)+"\n")])},[],!1,null,null,null);S.options.__file="estimate_only_pane.vue";var w=S.exports,y={name:"TimeTrackingComparisonPane",components:{GlProgressBar:a(10).j},directives:{tooltip:c.a},props:{timeSpent:{type:Number,required:!0},timeEstimate:{type:Number,required:!0},timeSpentHumanReadable:{type:String,required:!0},timeEstimateHumanReadable:{type:String,required:!0}},computed:{parsedTimeRemaining:function(){var t=this.timeEstimate-this.timeSpent;return Object(l.k)(t)},timeRemainingHumanReadable:function(){return Object(l.m)(this.parsedTimeRemaining)},timeRemainingTooltip:function(){var t=this.timeRemainingMinutes<0?"Over by":"Time remaining:";return"".concat(t," ").concat(this.timeRemainingHumanReadable)},timeRemainingMinutes:function(){return this.timeEstimate-this.timeSpent},timeRemainingPercent:function(){return Math.floor(this.timeSpent/this.timeEstimate*100)},timeRemainingStatusClass:function(){return this.timeEstimate>=this.timeSpent?"within_estimate":"over_estimate"},progressBarVariant:function(){return this.timeRemainingPercent>100?"danger":"primary"}}},k=Object(s.a)(y,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"time-tracking-comparison-pane"},[a("div",{directives:[{name:"tooltip",rawName:"v-tooltip"}],staticClass:"compare-meter",class:t.timeRemainingStatusClass,attrs:{title:t.timeRemainingTooltip,"data-toggle":"tooltip","data-placement":"top",role:"timeRemainingDisplay"}},[a("gl-progress-bar",{attrs:{value:t.timeRemainingPercent,variant:t.progressBarVariant}}),t._v(" "),a("div",{staticClass:"compare-display-container"},[a("div",{staticClass:"compare-display float-left"},[a("span",{staticClass:"compare-label"},[t._v(" "+t._s(t.s__("TimeTracking|Spent"))+" ")]),t._v(" "),a("span",{staticClass:"compare-value spent"},[t._v(" "+t._s(t.timeSpentHumanReadable)+" ")])]),t._v(" "),a("div",{staticClass:"compare-display estimated float-right"},[a("span",{staticClass:"compare-label"},[t._v(" "+t._s(t.s__("TimeTrackingEstimated|Est"))+" ")]),t._v(" "),a("span",{staticClass:"compare-value"},[t._v(" "+t._s(t.timeEstimateHumanReadable)+" ")])])])],1)])},[],!1,null,null,null);k.options.__file="comparison_pane.vue";var C=k.exports,E=a(57),O={name:"IssuableTimeTracker",components:{TimeTrackingCollapsedState:u,TimeTrackingEstimateOnlyPane:w,TimeTrackingSpentOnlyPane:f,TimeTrackingNoTrackingPane:T,TimeTrackingComparisonPane:C,TimeTrackingHelpState:r},props:{timeEstimate:{type:Number,required:!0},timeSpent:{type:Number,required:!0},humanTimeEstimate:{type:String,required:!1,default:""},humanTimeSpent:{type:String,required:!1,default:""},rootPath:{type:String,required:!0}},data:function(){return{showHelp:!1}},computed:{hasTimeSpent:function(){return!!this.timeSpent},hasTimeEstimate:function(){return!!this.timeEstimate},showComparisonState:function(){return this.hasTimeEstimate&&this.hasTimeSpent},showEstimateOnlyState:function(){return this.hasTimeEstimate&&!this.hasTimeSpent},showSpentOnlyState:function(){return this.hasTimeSpent&&!this.hasTimeEstimate},showNoTimeTrackingState:function(){return!this.hasTimeEstimate&&!this.hasTimeSpent},showHelpState:function(){return!!this.showHelp}},created:function(){E.a.$on("timeTracker:updateData",this.update)},methods:{toggleHelpState:function(t){this.showHelp=t},update:function(t){var e=t.timeEstimate,a=t.timeSpent,i=t.humanTimeEstimate,n=t.humanTimeSpent;this.timeEstimate=e,this.timeSpent=a,this.humanTimeEstimate=i,this.humanTimeSpent=n}}},j=Object(s.a)(O,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"time_tracker time-tracking-component-wrap"},[a("time-tracking-collapsed-state",{attrs:{"show-comparison-state":t.showComparisonState,"show-no-time-tracking-state":t.showNoTimeTrackingState,"show-help-state":t.showHelpState,"show-spent-only-state":t.showSpentOnlyState,"show-estimate-only-state":t.showEstimateOnlyState,"time-spent-human-readable":t.humanTimeSpent,"time-estimate-human-readable":t.humanTimeEstimate}}),t._v(" "),a("div",{staticClass:"title hide-collapsed"},[t._v("\n    "+t._s(t.__("Time tracking"))+"\n    "),t.showHelpState?t._e():a("div",{staticClass:"help-button float-right",on:{click:function(e){t.toggleHelpState(!0)}}},[a("i",{staticClass:"fa fa-question-circle",attrs:{"aria-hidden":"true"}})]),t._v(" "),t.showHelpState?a("div",{staticClass:"close-help-button float-right",on:{click:function(e){t.toggleHelpState(!1)}}},[a("i",{staticClass:"fa fa-close",attrs:{"aria-hidden":"true"}})]):t._e()]),t._v(" "),a("div",{staticClass:"time-tracking-content hide-collapsed"},[t.showEstimateOnlyState?a("time-tracking-estimate-only-pane",{attrs:{"time-estimate-human-readable":t.humanTimeEstimate}}):t._e(),t._v(" "),t.showSpentOnlyState?a("time-tracking-spent-only-pane",{attrs:{"time-spent-human-readable":t.humanTimeSpent}}):t._e(),t._v(" "),t.showNoTimeTrackingState?a("time-tracking-no-tracking-pane"):t._e(),t._v(" "),t.showComparisonState?a("time-tracking-comparison-pane",{attrs:{"time-estimate":t.timeEstimate,"time-spent":t.timeSpent,"time-spent-human-readable":t.humanTimeSpent,"time-estimate-human-readable":t.humanTimeEstimate}}):t._e(),t._v(" "),a("transition",{attrs:{name:"help-state-toggle"}},[t.showHelpState?a("time-tracking-help-state",{attrs:{"root-path":t.rootPath}}):t._e()],1)],1)],1)},[],!1,null,null,null);j.options.__file="time_tracker.vue";e.a=j.exports},341:function(t,e,a){"use strict";a.d(e,"a",function(){return d});var i=a(0),n=a.n(i),s=a(6),o=a(7),r=a(255);function l(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var d=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.bindTabsSwitching(),this.loadTab(n()(".js-milestone-tabs .active a")),this.loadInitialTab()}var e,a,i;return e=t,i=[{key:"initDeprecationMessage",value:function(){var t=document.querySelector(".js-milestone-deprecation-message");if(t){var e=t.querySelector(".js-milestone-deprecation-message-template").innerHTML,a=n()(".js-popover-link",t),i=r.c.bind(a,!1);a.popover({content:e,html:!0,placement:"bottom"}).on("mouseenter",r.b).on("mouseleave",Object(r.a)()).on("show.bs.popover",function(){window.addEventListener("scroll",i,{once:!0})})}}}],(a=[{key:"bindTabsSwitching",value:function(){var t=this;return n()('a[data-toggle="tab"]').on("show.bs.tab",function(e){var a=n()(e.target);window.location.hash=a.attr("href"),t.loadTab(a)})}},{key:"loadInitialTab",value:function(){var t=n()('.js-milestone-tabs a[href="'.concat(window.location.hash,'"]'));t.length&&t.tab("show")}},{key:"loadTab",value:function(t){var e=t.data("endpoint"),a=t.attr("href");e&&!t.hasClass("is-loaded")&&s.a.get(e).then(function(e){var i=e.data;n()(a).html(i.html),t.addClass("is-loaded")}).catch(function(){return Object(o.a)("Error loading milestone tab")})}}])&&l(e.prototype,a),i&&l(e,i),t}()},41:function(t,e,a){"use strict";var i=a(0),n=a.n(i);e.a={bind:function(t){n()(t).tooltip({trigger:"hover"})},componentUpdated:function(t){n()(t).tooltip("_fixTitle");var e=n()(t).data("bs.tooltip"),a=e.getTipElement();e.setElementContent(n()(a.querySelectorAll(".tooltip-inner")),e.getTitle())},unbind:function(t){n()(t).tooltip("dispose")}}},416:function(t,e,a){"use strict";a.d(e,"a",function(){return s});var i=a(11),n=a(299);var s=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var e=document.getElementById("issuable-time-tracker");if(e){var a=e.dataset,s=a.timeEstimate,o=a.timeSpent,r=a.humanTimeEstimate,l=a.humanTimeSpent;new i.default({el:e,components:{timeTracker:n.a},render:function(t){return t("timeTracker",{props:{timeEstimate:parseInt(s,10),timeSpent:parseInt(o,10),humanTimeEstimate:r,humanTimeSpent:l,rootPath:"/"}})}})}}},57:function(t,e,a){"use strict";var i=new(a(11).default);window.emitSidebarEvent=function(){return i.$emit.apply(i,arguments)},e.a=i}}]);
//# sourceMappingURL=commons~pages.dashboard.milestones.show~pages.groups.milestones.show~pages.projects.milestones.show.61749c62.chunk.js.map