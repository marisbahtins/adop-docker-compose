(this.webpackJsonp=this.webpackJsonp||[]).push([[95],{1211:function(e,t,n){n(42),n(44),e.exports=n(1212)},1212:function(e,t,n){"use strict";n.r(t);var o=n(213);document.addEventListener("DOMContentLoaded",o.a)},137:function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.d(t,"a",function(){return r});var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.form=t,this.renderDestination=this.renderDestination.bind(this),this.branchName=t.find(".js-branch-name"),this.originalBranch=t.find(".js-original-branch"),this.createMergeRequest=t.find(".js-create-merge-request"),this.createMergeRequestContainer=t.find(".js-create-merge-request-container"),this.branchName.keyup(this.renderDestination),this.renderDestination()}var t,n,r;return t=e,(n=[{key:"renderDestination",value:function(){var e;return(e=this.branchName.val()!==this.originalBranch.val())?(this.createMergeRequestContainer.show(),this.wasDifferent||this.createMergeRequest.prop("checked",!0)):(this.createMergeRequestContainer.hide(),this.createMergeRequest.prop("checked",!1)),this.wasDifferent=e}}])&&o(t.prototype,n),r&&o(t,r),e}()},188:function(e,t,n){"use strict";function o(e){return ace.require("ace/ext/modelist").getModeForPath(e).mode}n.d(t,"a",function(){return o})},213:function(e,t,n){"use strict";var o=n(0),r=n.n(o),i=n(137),a=n(6),c=n(7),s=n(1),l=n(12);function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.mediator=t,this.$dropdown=null,this.$wrapper=null}var t,n,o;return t=e,(n=[{key:"init",value:function(){var e=this.config;this.$dropdown=r()(e.dropdown),this.$wrapper=r()(e.wrapper),this.$loadingIcon=this.$wrapper.find(".fa-chevron-down"),this.$dropdownToggleText=this.$wrapper.find(".dropdown-toggle-text"),this.initDropdown()}},{key:"show",value:function(){null===this.$dropdown&&this.init(),this.$wrapper.removeClass("hidden")}},{key:"hide",value:function(){null!==this.$dropdown&&this.$wrapper.addClass("hidden")}},{key:"isHidden",value:function(){return this.$wrapper.hasClass("hidden")}},{key:"getToggleText",value:function(){return this.$dropdownToggleText.text()}},{key:"setToggleText",value:function(e){this.$dropdownToggleText.text(e)}},{key:"renderLoading",value:function(){this.$loadingIcon.addClass("fa-spinner fa-spin").removeClass("fa-chevron-down")}},{key:"renderLoaded",value:function(){this.$loadingIcon.addClass("fa-chevron-down").removeClass("fa-spinner fa-spin")}},{key:"reportSelection",value:function(e){var t=e.query,n=e.e,o=e.data;return n.preventDefault(),this.mediator.selectTemplateFile(this,t,o)}},{key:"reportSelectionName",value:function(e){var t=e;t.query=e.selectedObj.name,this.reportSelection(t)}}])&&u(t.prototype,n),o&&u(t,o),e}();function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(e){var n,o=e.mediator,r=e.dropdownData;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=h(this,m(t).call(this,o))).mediator=o,n.config={dropdown:".js-template-type-selector",wrapper:".js-template-type-selector-wrap",dropdownData:r},n}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,f),n=t,(o=[{key:"initDropdown",value:function(){var e=this;this.$dropdown.glDropdown({data:this.config.dropdownData,filterable:!1,selectable:!0,toggleLabel:function(e){return e.name},clicked:function(t){return e.mediator.selectTemplateTypeOptions(t)},text:function(e){return e.name}})}}])&&p(n.prototype,o),r&&p(n,r),t}();function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function w(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var k=function(e){function t(e){var n,o=e.mediator;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=w(this,j(t).call(this,o))).config={key:"gitlab-ci-yaml",name:".gitlab-ci.yml",pattern:/(.gitlab-ci.yml)/,type:"gitlab_ci_ymls",dropdown:".js-gitlab-ci-yml-selector",wrapper:".js-gitlab-ci-yml-selector-wrap"},n}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,f),n=t,(o=[{key:"initDropdown",value:function(){var e=this;this.$dropdown.glDropdown({data:this.$dropdown.data("data"),filterable:!0,selectable:!0,toggleLabel:function(e){return e.name},search:{fields:["name"]},clicked:function(t){return e.reportSelectionName(t)},text:function(e){return e.name}})}}])&&v(n.prototype,o),r&&v(n,r),t}();function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var C=function(e){function t(e){var n,o=e.mediator;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=_(this,x(t).call(this,o))).config={key:"dockerfile",name:"Dockerfile",pattern:/(Dockerfile)/,type:"dockerfiles",dropdown:".js-dockerfile-selector",wrapper:".js-dockerfile-selector-wrap"},n}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,f),n=t,(o=[{key:"initDropdown",value:function(){var e=this;this.$dropdown.glDropdown({data:this.$dropdown.data("data"),filterable:!0,selectable:!0,toggleLabel:function(e){return e.name},search:{fields:["name"]},clicked:function(t){return e.reportSelectionName(t)},text:function(e){return e.name}})}}])&&O(n.prototype,o),r&&O(n,r),t}();function $(e){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function E(e,t){return!t||"object"!==$(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var F=function(e){function t(e){var n,o=e.mediator;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=E(this,M(t).call(this,o))).config={key:"gitignore",name:".gitignore",pattern:/(.gitignore)/,type:"gitignores",dropdown:".js-gitignore-selector",wrapper:".js-gitignore-selector-wrap"},n}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,f),n=t,(o=[{key:"initDropdown",value:function(){var e=this;this.$dropdown.glDropdown({data:this.$dropdown.data("data"),filterable:!0,selectable:!0,toggleLabel:function(e){return e.name},search:{fields:["name"]},clicked:function(t){return e.reportSelectionName(t)},text:function(e){return e.name}})}}])&&I(n.prototype,o),r&&I(n,r),t}();function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function q(e,t){return!t||"object"!==L(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var A=function(e){function t(e){var n,o=e.mediator;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=q(this,N(t).call(this,o))).config={key:"license",name:"LICENSE",pattern:/^(.+\/)?(licen[sc]e|copying)($|\.)/i,type:"licenses",dropdown:".js-license-selector",wrapper:".js-license-selector-wrap"},n}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(t,f),n=t,(o=[{key:"initDropdown",value:function(){var e=this;this.$dropdown.glDropdown({data:this.$dropdown.data("data"),filterable:!0,selectable:!0,toggleLabel:function(e){return e.name},search:{fields:["name"]},clicked:function(t){var n=t.e,o=t.$el,r=t.selectedObj,i={project:e.$dropdown.data("project"),fullname:e.$dropdown.data("fullname")};e.reportSelection({query:r.id,el:o,e:n,data:i})},text:function(e){return e.name}})}}])&&B(n.prototype,o),r&&B(n,r),t}();function z(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var U=function(){function e(t){var n=t.editor,o=t.currentAction,r=t.projectId;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.editor=n,this.currentAction=o,this.projectId=r,this.initTemplateSelectors(),this.initTemplateTypeSelector(),this.initDomElements(),this.initDropdowns(),this.initPageEvents()}var t,n,o;return t=e,(n=[{key:"initTemplateSelectors",value:function(){var e=this;this.templateSelectors=[F,k,C,A].map(function(t){return new t({mediator:e})})}},{key:"initTemplateTypeSelector",value:function(){this.typeSelector=new y({mediator:this,dropdownData:this.templateSelectors.map(function(e){var t=e.config;return{name:t.name,key:t.key}})})}},{key:"initDomElements",value:function(){var e=r()(".template-selectors-menu"),t=e.find(".template-selectors-undo-menu"),n=r()(".file-editor");this.$templatesMenu=e,this.$undoMenu=t,this.$undoBtn=t.find("button"),this.$templateSelectors=e.find(".template-selector-dropdowns-wrap"),this.$filenameInput=n.find(".js-file-path-name-input"),this.$fileContent=n.find("#file-content"),this.$commitForm=n.find("form"),this.$navLinks=n.find(".nav-links")}},{key:"initDropdowns",value:function(){"create"===this.currentAction?this.typeSelector.show():this.hideTemplateSelectorMenu(),this.displayMatchedTemplateSelector()}},{key:"initPageEvents",value:function(){this.listenForFilenameInput(),this.prepFileContentForSubmit(),this.listenForPreviewMode()}},{key:"listenForFilenameInput",value:function(){var e=this;this.$filenameInput.on("keyup blur",function(){e.displayMatchedTemplateSelector()})}},{key:"prepFileContentForSubmit",value:function(){var e=this;this.$commitForm.submit(function(){e.$fileContent.val(e.editor.getValue())})}},{key:"listenForPreviewMode",value:function(){var e=this;this.$navLinks.on("click","a",function(t){var n=t.target.href.split("#")[1];"preview"===n?e.hideTemplateSelectorMenu():"editor"!==n||e.typeSelector.isHidden()||e.showTemplateSelectorMenu()})}},{key:"selectTemplateType",value:function(e,t){t&&t.preventDefault(),this.templateSelectors.forEach(function(t){t.config.key===e.key?t.show():t.hide()}),this.typeSelector.setToggleText(e.name),this.cacheToggleText()}},{key:"selectTemplateTypeOptions",value:function(e){this.selectTemplateType(e.selectedObj,e.e)}},{key:"selectTemplateFile",value:function(e,t,n){var o=this;e.renderLoading(),this.destroyUndoMenu(),this.fetchFileTemplate(e.config.type,t,n).then(function(t){o.showUndoMenu(),o.setEditorContent(t),o.setFilename(e.config.name),e.renderLoaded()}).catch(function(e){return new c.a("An error occurred while fetching the template: ".concat(e))})}},{key:"displayMatchedTemplateSelector",value:function(){var e=this,t=this.getFilename();this.templateSelectors.forEach(function(n){n.config.pattern.test(t)&&(e.typeSelector.show(),e.selectTemplateType(n.config),e.showTemplateSelectorMenu())})}},{key:"fetchFileTemplate",value:function(e,t){var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(function(r){l.a.projectTemplate(n.projectId,e,t,o,function(e){return r(e)})})}},{key:"setEditorContent",value:function(e){if(e||""===e){var t=e.content||e;this.editor.setValue(t,1),this.editor.focus(),this.editor.navigateFileStart()}}},{key:"findTemplateSelectorByKey",value:function(e){return this.templateSelectors.find(function(t){return t.config.key===e})}},{key:"showUndoMenu",value:function(){var e=this;this.$undoMenu.removeClass("hidden"),this.$undoBtn.on("click",function(){e.restoreFromCache(),e.destroyUndoMenu()})}},{key:"destroyUndoMenu",value:function(){this.cacheFileContents(),this.cacheToggleText(),this.$undoMenu.addClass("hidden"),this.$undoBtn.off("click")}},{key:"hideTemplateSelectorMenu",value:function(){this.$templatesMenu.hide()}},{key:"showTemplateSelectorMenu",value:function(){this.$templatesMenu.show()}},{key:"cacheToggleText",value:function(){this.cachedToggleText=this.getTemplateSelectorToggleText()}},{key:"cacheFileContents",value:function(){this.cachedContent=this.editor.getValue(),this.cachedFilename=this.getFilename()}},{key:"restoreFromCache",value:function(){this.setEditorContent(this.cachedContent),this.setFilename(this.cachedFilename),this.setTemplateSelectorToggleText()}},{key:"getTemplateSelectorToggleText",value:function(){return this.$templateSelectors.find(".js-template-selector-wrap:visible .dropdown-toggle-text").text()}},{key:"setTemplateSelectorToggleText",value:function(){return this.$templateSelectors.find(".js-template-selector-wrap:visible .dropdown-toggle-text").text(this.cachedToggleText)}},{key:"getTypeSelectorToggleText",value:function(){return this.typeSelector.getToggleText()}},{key:"getFilename",value:function(){return this.$filenameInput.val()}},{key:"setFilename",value:function(e){this.$filenameInput.val(e).trigger("change")}},{key:"getSelected",value:function(){return this.templateSelectors.find(function(e){return e.selected})}}])&&z(t.prototype,n),o&&z(t,o),e}(),W=n(188),J=n(76);function V(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var G=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t,this.configureAceEditor(),this.initModePanesAndLinks(),this.initSoftWrap(),this.initFileSelectors()}var t,n,o;return t=e,(n=[{key:"configureAceEditor",value:function(){var e=this.options,t=e.filePath,n=e.assetsPath,o=e.isMarkdown;ace.config.set("modePath","".concat(n,"/ace")),ace.config.loadModule("ace/ext/searchbox"),ace.config.loadModule("ace/ext/modelist"),this.editor=ace.edit("editor"),o&&Object(J.a)(this.editor),this.editor.$blockScrolling=1/0,this.editor.focus(),t&&this.editor.getSession().setMode(Object(W.a)(t))}},{key:"initFileSelectors",value:function(){var e=this.options,t=e.currentAction,n=e.projectId;this.fileTemplateMediator=new U({currentAction:t,editor:this.editor,projectId:n})}},{key:"initModePanesAndLinks",value:function(){var e=this;this.$editModePanes=r()(".js-edit-mode-pane"),this.$editModeLinks=r()(".js-edit-mode a"),this.$editModeLinks.on("click",function(t){return e.editModeLinkClickHandler(t)})}},{key:"editModeLinkClickHandler",value:function(e){e.preventDefault();var t=r()(e.target),n=t.attr("href"),o=this.$editModePanes.filter(n);return this.$editModeLinks.parent().removeClass("active hover"),t.parent().addClass("active hover"),this.$editModePanes.hide(),o.fadeIn(200),"#preview"===n&&(this.$toggleButton.hide(),a.a.post(t.data("previewUrl"),{content:this.editor.getValue()}).then(function(e){var t=e.data;o.empty().append(t),o.renderGFM()}).catch(function(){return Object(c.a)(Object(s.a)("An error occurred previewing the blob"))})),this.$toggleButton.show(),this.editor.focus()}},{key:"initSoftWrap",value:function(){var e=this;this.isSoftWrapped=!1,this.$toggleButton=r()(".soft-wrap-toggle"),this.$toggleButton.on("click",function(){return e.toggleSoftWrap()})}},{key:"toggleSoftWrap",value:function(){this.isSoftWrapped=!this.isSoftWrapped,this.$toggleButton.toggleClass("soft-wrap-active",this.isSoftWrapped),this.editor.getSession().setUseWrapMode(this.isSoftWrapped)}}])&&V(t.prototype,n),o&&V(t,o),e}(),H=n(32),K=n.n(H),Q=n(19),X=n(50),Y=n(75);function Z(e,t,n){n?(e.disable(),t.removeClass(X.b)):(e.enable(),t.addClass(X.b))}K.a.autoDiscover=!1;var ee=function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var o=t.find(".dropzone"),i=t.find("#submit-all"),a=i.find(".js-loading-icon"),c=t.find(".dz-message");K.a.autoDiscover=!1;var s=o.dropzone({autoDiscover:!1,autoProcessQueue:!1,url:t.attr("action"),method:n,clickable:!0,uploadMultiple:!1,paramName:"file",maxFilesize:gon.max_file_size||10,parallelUploads:1,maxFiles:1,addRemoveLinks:!0,previewsContainer:".dropzone-previews",headers:Y.a.headers,init:function(){this.on("addedfile",function(){Z(i,a,!1),c.addClass(X.b),r()(".dropzone-alerts").html("").hide()}),this.on("removedfile",function(){Z(i,a,!1),c.removeClass(X.b)}),this.on("success",function(e,t){r()("#modal-upload-blob").modal("hide"),Object(Q.g)(t.filePath)}),this.on("maxfilesexceeded",function(e){c.addClass(X.b),this.removeFile(e)}),this.on("sending",function(e,n,o){o.append("branch_name",t.find(".js-branch-name").val()),o.append("create_merge_request",t.find(".js-create-merge-request").val()),o.append("commit_message",t.find(".js-commit-message").val())})},error:function(e,t){var n=r()("<div/>").html(t).text();r()(".dropzone-alerts").html('Error uploading file: "'.concat(n,'"')).show(),this.removeFile(e)}});i.on("click",function(e){return e.preventDefault(),e.stopPropagation(),0===s[0].dropzone.getQueuedFiles().length?(alert("Please select a file"),!1):(Z(i,a,!0),s[0].dropzone.processQueue(),!1)})};t.a=function(){var e=r()(".js-edit-blob-form"),t=r()(".js-upload-blob-form"),n=r()(".js-delete-blob-form");if(e.length){var o=e.data("relativeUrlRoot"),a=e.data("assetsPrefix"),c=e.data("blobFilename"),s=r()(".js-file-title").data("currentAction"),l=e.data("project-id"),u=e.data("is-markdown"),f=r()(".js-commit-button");r()(".btn.btn-cancel").on("click",function(){window.onbeforeunload=null}),f.on("click",function(){window.onbeforeunload=null}),new G({assetsPath:"".concat(o).concat(a),filePath:c,currentAction:s,projectId:l,isMarkdown:u}),new i.a(e),window.onbeforeunload=function(){return""}}if(t.length){var d=t.data("method");new ee(t,d),new i.a(t),window.gl.utils.disableButtonIfEmptyField(t.find(".js-commit-message"),".btn-upload-file")}n.length&&new i.a(n)}},27:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var o=n(2),r=n.n(o),i=n(4),a=n(43);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e=s(this,l(t).call(this)),r.a.bind("g p",function(){return Object(i.a)(".shortcuts-project")}),r.a.bind("g v",function(){return Object(i.a)(".shortcuts-project-activity")}),r.a.bind("g r",function(){return Object(i.a)(".shortcuts-project-releases")}),r.a.bind("g f",function(){return Object(i.a)(".shortcuts-tree")}),r.a.bind("g c",function(){return Object(i.a)(".shortcuts-commits")}),r.a.bind("g j",function(){return Object(i.a)(".shortcuts-builds")}),r.a.bind("g n",function(){return Object(i.a)(".shortcuts-network")}),r.a.bind("g d",function(){return Object(i.a)(".shortcuts-repository-charts")}),r.a.bind("g i",function(){return Object(i.a)(".shortcuts-issues")}),r.a.bind("g b",function(){return Object(i.a)(".shortcuts-issue-boards")}),r.a.bind("g m",function(){return Object(i.a)(".shortcuts-merge_requests")}),r.a.bind("g w",function(){return Object(i.a)(".shortcuts-wiki")}),r.a.bind("g s",function(){return Object(i.a)(".shortcuts-snippets")}),r.a.bind("g k",function(){return Object(i.a)(".shortcuts-kubernetes")}),r.a.bind("g e",function(){return Object(i.a)(".shortcuts-environments")}),r.a.bind("g l",function(){return Object(i.a)(".shortcuts-metrics")}),r.a.bind("i",function(){return Object(i.a)(".shortcuts-new-issue")}),e.enabledHelp.push(".hidden-shortcut.project"),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,a["a"]),t}()},28:function(e,t,n){"use strict";var o=n(0),r=n.n(o),i=n(12),a=n(31);function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.projectSelectInput=r()(t),this.newItemBtn=r()(".new-project-item-link"),this.resourceType=this.newItemBtn.data("type"),this.resourceLabel=this.newItemBtn.data("label"),this.formattedText=this.deriveTextVariants(),this.groupId=this.projectSelectInput.data("groupId"),this.bindEvents(),this.initLocalStorage()}var t,n,o;return t=e,(n=[{key:"bindEvents",value:function(){var e=this;this.projectSelectInput.siblings(".new-project-item-select-button").on("click",function(t){return e.openDropdown(t)}),this.newItemBtn.on("click",function(t){e.getProjectFromLocalStorage()||(t.preventDefault(),e.openDropdown(t))}),this.projectSelectInput.on("change",function(){return e.selectProject()})}},{key:"initLocalStorage",value:function(){a.a.isLocalStorageAccessSafe()&&(this.localStorageKey=["group",this.groupId,this.formattedText.localStorageItemType,"recent-project"].join("-"),this.setBtnTextFromLocalStorage())}},{key:"openDropdown",value:function(e){r()(e.currentTarget).siblings(".project-item-select").select2("open")}},{key:"selectProject",value:function(){var e=JSON.parse(this.projectSelectInput.val()),t={url:"".concat(e.url,"/").concat(this.projectSelectInput.data("relativePath")),name:e.name};this.setNewItemBtnAttributes(t),this.setProjectInLocalStorage(t)}},{key:"setBtnTextFromLocalStorage",value:function(){var e=this.getProjectFromLocalStorage();this.setNewItemBtnAttributes(e)}},{key:"setNewItemBtnAttributes",value:function(e){e?(this.newItemBtn.attr("href",e.url),this.newItemBtn.text("".concat(this.formattedText.defaultTextPrefix," in ").concat(e.name))):this.newItemBtn.text("Select project to create ".concat(this.formattedText.presetTextSuffix))}},{key:"getProjectFromLocalStorage",value:function(){var e=localStorage.getItem(this.localStorageKey);return JSON.parse(e)}},{key:"setProjectInLocalStorage",value:function(e){var t=JSON.stringify(e);localStorage.setItem(this.localStorageKey,t)}},{key:"deriveTextVariants",value:function(){var e=this.resourceLabel;return{localStorageItemType:"new-".concat(this.resourceType.split("_").join("-").slice(0,-1)),defaultTextPrefix:e,presetTextSuffix:this.resourceType.split("_").join(" ").slice(0,-1)}}}])&&c(t.prototype,n),o&&c(t,o),e}();function l(){r()(".ajax-project-select").each(function(e,t){var n,o,a=r()(t).data("simpleFilter")||!1;return this.groupId=r()(t).data("groupId"),this.includeGroups=r()(t).data("includeGroups"),this.allProjects=r()(t).data("allProjects")||!1,this.orderBy=r()(t).data("orderBy")||"id",this.withIssuesEnabled=r()(t).data("withIssuesEnabled"),this.withMergeRequestsEnabled=r()(t).data("withMergeRequestsEnabled"),this.withShared=void 0===r()(t).data("withShared")||r()(t).data("withShared"),this.includeProjectsInSubgroups=r()(t).data("includeProjectsInSubgroups")||!1,this.allowClear=r()(t).data("allowClear")||!1,n="Search for project",this.includeGroups&&(n+=" or group"),r()(t).select2({placeholder:n,minimumInputLength:0,query:(o=this,function(e){var t,n;return t=function(t){var n;return n={results:t},e.callback(n)},n=o.includeGroups?function(n){var o;return o=function(e){var o;return o=e.concat(n),t(o)},i.a.groups(e.term,{},o)}:t,o.groupId?i.a.groupProjects(o.groupId,e.term,{with_issues_enabled:o.withIssuesEnabled,with_merge_requests_enabled:o.withMergeRequestsEnabled,with_shared:o.withShared,include_subgroups:o.includeProjectsInSubgroups},n):i.a.projects(e.term,{order_by:o.orderBy,with_issues_enabled:o.withIssuesEnabled,with_merge_requests_enabled:o.withMergeRequestsEnabled,membership:!o.allProjects},n)}),id:function(e){return a?e.id:JSON.stringify({name:e.name,url:e.web_url})},text:function(e){return e.name_with_namespace||e.name},initSelection:function(e,t){return i.a.project(e.val()).then(function(e){var n=e.data;return t(n)})},allowClear:this.allowClear,dropdownCssClass:"ajax-project-dropdown"}),a?t:new s(t)})}n.d(t,"a",function(){return l})},29:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var o=n(0),r=n.n(o),i=n(14),a=n.n(i),c=n(1),s=n(19),l=n(6),u=n(7),f=n(28);function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var p=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t=r()("ul.clone-options-dropdown"),n=r()("#project_clone"),o=r()(".js-git-clone-holder .js-clone-dropdown-label"),i=document.querySelector(".js-mobile-git-clone .js-clone-dropdown-label"),c=o.text().trim();c.length>0&&r()("a:contains('".concat(c,"')"),t).addClass("is-active"),r()("a",t).on("click",function(e){e.preventDefault();var o=r()(e.currentTarget),a=o.attr("href"),c=o.data("cloneType");r()(".is-active",t).removeClass("is-active"),r()('a[data-clone-type="'.concat(c,'"]')).each(function(){var e=r()(this),t=e.find(".dropdown-menu-inner-title").text(),n=e.closest(".project-clone-holder").find(".js-clone-dropdown-label");e.toggleClass("is-active"),n.text(t)}),i?i.dataset.clipboardText=a:n.val(a),r()(".js-git-empty .js-clone").text(a)}),e.initRefSwitcher(),r()(".project-refs-select").on("change",function(){return r()(this).parents("form").submit()}),r()(".hide-no-ssh-message").on("click",function(e){return a.a.set("hide_no_ssh_message","false"),r()(this).parents(".no-ssh-key-message").remove(),e.preventDefault()}),r()(".hide-no-password-message").on("click",function(e){return a.a.set("hide_no_password_message","false"),r()(this).parents(".no-password-message").remove(),e.preventDefault()}),r()(".hide-auto-devops-implicitly-enabled-banner").on("click",function(e){var t=r()(this).data("project-id"),n="hide_auto_devops_implicitly_enabled_banner_".concat(t);return a.a.set(n,"false"),r()(this).parents(".auto-devops-implicitly-enabled-banner").remove(),e.preventDefault()}),e.projectSelectDropdown()}var t,n,o;return t=e,o=[{key:"projectSelectDropdown",value:function(){Object(f.a)(),r()(".project-item-select").on("click",function(t){return e.changeProject(r()(t.currentTarget).val())})}},{key:"changeProject",value:function(e){return window.location=e}},{key:"initRefSwitcher",value:function(){var e=document.createElement("li"),t=document.createElement("a");return t.href="#",r()(".js-project-refs-dropdown").each(function(){var n,o;return n=r()(this),o=n.data("selected"),n.glDropdown({data:function(e,t){l.a.get(n.data("refsUrl"),{params:{ref:n.data("ref"),search:e}}).then(function(e){var n=e.data;return t(n)}).catch(function(){return Object(u.a)(Object(c.a)("An error occurred while getting projects"))})},selectable:!0,filterable:!0,filterRemote:!0,filterByText:!0,inputFieldName:n.data("inputFieldName"),fieldName:n.data("fieldName"),renderRow:function(n){var r=e.cloneNode(!1);if(null!=n.header)r.className="dropdown-header",r.textContent=n.header;else{var i=t.cloneNode(!1);n===o&&(i.className="is-active"),i.textContent=n,i.dataset.ref=n,r.appendChild(i)}return r},id:function(e,t){return t.attr("data-ref")},toggleLabel:function(e,t){return t.text().trim()},clicked:function(e){if(e.e.preventDefault(),r()('input[name="ref"]').length){var t=n.closest("form"),o=n.data("visit"),i=!!o||o,a=t.attr("action"),c=-1===a.indexOf("?")?"?":"&";i&&Object(s.g)("".concat(a).concat(c).concat(t.serialize()))}}})})}}],(n=null)&&d(t.prototype,n),o&&d(t,o),e}()},44:function(e,t,n){"use strict";n.r(t);var o=n(38),r=n(36),i=n(29),a=n(27);document.addEventListener("DOMContentLoaded",function(){var e=document.body.dataset.page;if(["projects:clusters:new","projects:clusters:create_gcp","projects:clusters:create_user"].indexOf(e)>-1){var t=document.querySelector(".gcp-signup-offer");t&&new r.a(t),Object(o.a)()}new i.a,new a.a})},50:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r});var o=1024,r="hidden"}},[[1211,1,0,2,3]]]);
//# sourceMappingURL=pages.projects.blob.edit.4d804b06.chunk.js.map