(this.webpackJsonp=this.webpackJsonp||[]).push([[25],{129:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(19);function i(){"file"===o()('input[name="blacklist_type"]:checked').val()?(o()(".blacklist-file").show(),o()(".blacklist-raw").hide()):(o()(".blacklist-file").hide(),o()(".blacklist-raw").show())}var r=n(1),s=Object(r.a)("Regex pattern"),l=Object(r.a)("To define internal users, first enable new users set to external");function u(e){var t=document.getElementById("application_setting_user_default_internal_regex");e&&t&&(e.checked?(t.readOnly=!1,t.placeholder=s):(t.readOnly=!0,t.placeholder=l))}document.addEventListener("DOMContentLoaded",function(){var e,t;e=o()(".change-owner-holder"),o()("input#user_force_random_password").on("change",function(){var e=o()("#user_password, #user_password_confirmation");o()(this).attr("checked")?e.val("").prop("disabled",!0):e.prop("disabled",!1)}),o()("body").on("click",".js-toggle-colors-link",function(e){e.preventDefault(),o()(".js-toggle-colors-container").toggleClass("hide")}),o()(".log-tabs a").on("click",function(e){e.preventDefault(),o()(this).tab("show")}),o()(".log-bottom").on("click",function(e){e.preventDefault();var t=o()(".file-content:visible");t.animate({scrollTop:t.find("ol").height()},"fast")}),o()(".change-owner-link").on("click",function(t){t.preventDefault(),o()(this).hide(),e.show()}),o()(".change-owner-cancel-link").on("click",function(t){t.preventDefault(),e.hide(),o()(".change-owner-link").show()}),o()("li.project_member, li.group_member").on("ajax:success",c.e),o()("input[name='blacklist_type']").on("click",i),i(),u(t=document.getElementById("application_setting_user_default_external")),t.addEventListener("change",function(){u(t)})})},1443:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(51),i=n(13);function r(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var s=".abuse-reports .message",l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o()(s).each(this.truncateLongMessage),o()(document).off("click",s).on("click",s,this.toggleMessageTruncation)}var t,n,a;return t=e,(n=[{key:"truncateLongMessage",value:function(){var e=o()(this),t=e.text();t.length>500&&(e.data("originalMessage",t),e.data("messageTruncated","true"),e.text(Object(c.m)(t,500)))}},{key:"toggleMessageTruncation",value:function(){var e=o()(this),t=e.data("originalMessage");t&&(Object(i.A)(e.data("messageTruncated"))?(e.data("messageTruncated","false"),e.text(t)):(e.data("messageTruncated","true"),e.text("".concat(t.substr(0,497),"..."))))}}])&&r(t.prototype,n),a&&r(t,a),e}();document.addEventListener("DOMContentLoaded",function(){return new l})},966:function(e,t,n){n(42),n(129),e.exports=n(1443)}},[[966,1,0]]]);
//# sourceMappingURL=pages.admin.abuse_reports.81b2b6fd.chunk.js.map