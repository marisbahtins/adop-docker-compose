(this.webpackJsonp=this.webpackJsonp||[]).push([[156],{1348:function(n,t,e){e(42),e(44),n.exports=e(1349)},1349:function(n,t,e){"use strict";e.r(t);var i=e(0),r=e.n(i),a=e(483),c=e(324);document.addEventListener("DOMContentLoaded",function(){new a.a(r()(".js-new-pipeline-form")),Object(c.a)({container:r()(".js-ci-variable-list-section"),formField:"variables_attributes"})})},359:function(n,t,e){"use strict";var i=e(0),r=e.n(i);t.a=function n(t,e){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var i=e||JSON.parse(document.getElementById("availableRefs").innerHTML);t.glDropdown({data:i,filterable:!0,filterByText:!0,remote:!1,fieldName:t.data("fieldName"),filterInput:'input[type="search"]',selectable:!0,isSelectable:function(n,t){return!t.hasClass("is-active")},text:function(n){return n},id:function(n){return n},toggleLabel:function(n){return n}});var a=t.closest(".dropdown"),c=r()('input[name="'.concat(t.data("fieldName"),'"]'),a),o=r()('input[type="search"]',a);o.on("keyup",function(n){if(13===(n.keyCode||n.which)){var e=o.val().trim();""!==e&&(c.val(e),r()(".dropdown-toggle-text",t).text(e),a.removeClass("open"))}})}},483:function(n,t,e){"use strict";e.d(t,"a",function(){return o});var i=e(0),r=e.n(i),a=e(359);function c(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}var o=function(){function n(t,e){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.validate=this.validate.bind(this),this.branchNameError=t.find(".js-branch-name-error"),this.name=t.find(".js-branch-name"),this.ref=t.find("#ref"),new a.a(r()(".js-branch-select"),e),this.setupRestrictions(),this.addBinding(),this.init()}var t,e,i;return t=n,(e=[{key:"addBinding",value:function(){return this.name.on("blur",this.validate)}},{key:"init",value:function(){if(this.name.length&&this.name.val().length>0)return this.name.trigger("blur")}},{key:"setupRestrictions",value:function(){var n,t,e,i;return i={pattern:/^(\/|\.)/g,prefix:"can't start with",conjunction:"or"},n={pattern:/(\/|\.|\.lock)$/g,prefix:"can't end in",conjunction:"or"},t={pattern:/(\s|~|\^|:|\?|\*|\[|\\|\.\.|@\{|\/{2,}){1}/g,prefix:"can't contain",conjunction:", "},e={pattern:/^@+$/g,prefix:"can't be",conjunction:"or"},this.restrictions=[i,t,n,e]}},{key:"validate",value:function(){var n,t,e,i,a,c,o=[].indexOf;if(this.branchNameError.empty(),i=function(n,t){return-1===o.call(n,t)&&n.push(t),n},e=function(n,t){var e;return e=n.map(function(n){switch(!1){case!/\s/.test(n):return"spaces";case!/\/{2,}/g.test(n):return"consecutive slashes";default:return"'"+n+"'"}}),t.prefix+" "+e.join(t.conjunction)},c=this,a=function(n,t){var r;return(r=c.name.val().match(t.pattern))?n.concat(e(r.reduce(i,[]),t)):n},(t=this.restrictions.reduce(a,[])).length>0)return n=r()("<span/>").text(t.join(", ")),this.branchNameError.append(n)}}])&&c(t.prototype,e),i&&c(t,i),n}()}},[[1348,1,0,2,9]]]);
//# sourceMappingURL=pages.projects.pipelines.new.3a5f08b8.chunk.js.map