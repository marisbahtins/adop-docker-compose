(this.webpackJsonp=this.webpackJsonp||[]).push([[69],{1039:function(t,e,n){n(42),n(110),t.exports=n(1040)},1040:function(t,e,n){"use strict";n.r(e);var r=n(472),a=n(473),o=n(285);document.addEventListener("DOMContentLoaded",function(){r.a.initAll(),new a.a,Object(o.a)()})},110:function(t,e,n){"use strict";n.r(e);var r=n(36),a=n(38);document.addEventListener("DOMContentLoaded",function(){var t,e=document.body.dataset.page;["groups:clusters:new","groups:clusters:create_gcp","groups:clusters:create_user"].indexOf(e)>-1&&((t=document.querySelector(".gcp-signup-offer"))&&new r.a(t),Object(a.a)())})},285:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(0),a=n.n(r);function o(){a()(".js-choose-group-avatar-button").on("click",function(){return a()(this).closest("form").find(".js-group-avatar-input").click()}),a()(".js-group-avatar-input").on("change",function(){var t=a()(this).closest("form"),e=a()(this).val().replace(/^.*[\\\/]/,"");return t.find(".js-avatar-filename").text(e)})}},473:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(0),a=n.n(r),o=n(51);function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.groupPath=a()("#group_path"),this.groupName=a()("#group_name"),this.updateHandler=this.update.bind(this),this.resetHandler=this.reset.bind(this),""===this.groupName.val()&&(this.groupName.on("keyup",this.updateHandler),this.groupPath.on("keydown",this.resetHandler))}var e,n,r;return e=t,(n=[{key:"update",value:function(){var t=Object(o.j)(this.groupName.val());this.groupPath.val(t)}},{key:"reset",value:function(){this.groupName.off("keyup",this.updateHandler),this.groupPath.off("keydown",this.resetHandler)}}])&&u(e.prototype,n),r&&u(e,r),t}()}},[[1039,1,0,2]]]);
//# sourceMappingURL=pages.groups.new.d4262ef3.chunk.js.map