(this.webpackJsonp=this.webpackJsonp||[]).push([[48],{1002:function(t,e,n){n(42),t.exports=n(599)},183:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var i=n(0),r=n.n(i),a=n(5),o=n.n(a),s=n(6);function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var c=function(){function t(e,n,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"filter_groups";!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.filterForm=e,this.listFilterElement=n,this.listHolderElement=i,this.filterInputField=r,this.isBusy=!1}var e,n,i;return e=t,(n=[{key:"getFilterEndpoint",value:function(){return"".concat(this.filterForm.getAttribute("action"),"?").concat(r()(this.filterForm).serialize())}},{key:"getPagePath",value:function(){return this.getFilterEndpoint()}},{key:"initSearch",value:function(){this.debounceFilter=o.a.debounce(this.onFilterInput.bind(this),500),this.unbindEvents(),this.bindEvents()}},{key:"onFilterInput",value:function(){var t={},e=r()(this.filterForm).find('[name="'.concat(this.filterInputField,'"]')).val();e&&(t[this.filterInputField]=e),this.filterResults(t),this.setDefaultFilterOption&&this.setDefaultFilterOption()}},{key:"bindEvents",value:function(){this.listFilterElement.addEventListener("input",this.debounceFilter)}},{key:"unbindEvents",value:function(){this.listFilterElement.removeEventListener("input",this.debounceFilter)}},{key:"filterResults",value:function(t){var e=this;return!this.isBusy&&(r()(this.listHolderElement).fadeTo(250,.5),this.isBusy=!0,s.a.get(this.getFilterEndpoint(),{params:t}).then(function(n){e.onFilterSuccess(n,t),e.onFilterComplete()}).catch(function(){return e.onFilterComplete()}))}},{key:"onFilterSuccess",value:function(t,e){t.data.html&&(this.listHolderElement.innerHTML=t.data.html);var n=this.getPagePath(e);return window.history.replaceState({page:n},document.title,n)}},{key:"onFilterComplete",value:function(){this.isBusy=!1,r()(this.listHolderElement).fadeTo(250,1)}}])&&l(e.prototype,n),i&&l(e,i),t}()},209:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n(183);var r=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var e=document.querySelector("form#project-filter-form"),n=document.querySelector(".js-projects-list-filter"),r=document.querySelector(".js-projects-list-holder");e&&n&&r&&new i.a(e,n,r).initSearch()}},356:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var i=n(0),r=n.n(i),a=n(7),o=n(1),s=n(13),l=n(6);var c=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".project-home-panel";!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r()("".concat(e," .toggle-star")).on("click",function(){var t=r()(this),e=t.find("span"),n=t.find("svg"),i=n.attr("class").split(" ");l.a.post(t.data("endpoint")).then(function(r){var a=r.data,l=e.hasClass("starred");t.parent().find(".star-count").text(a.star_count),l?(e.removeClass("starred").text(Object(o.e)("StarProject|Star")),n.remove(),t.prepend(Object(s.J)("star-o",i))):(e.addClass("starred").text(Object(o.a)("Unstar")),n.remove(),t.prepend(Object(s.J)("star",i)))}).catch(function(){return Object(a.a)("Star toggle failed. Try again later.")})})}},599:function(t,e,n){"use strict";n.r(e);var i=n(209),r=n(356);document.addEventListener("DOMContentLoaded",function(){new i.a,new r.a(".project-row")})}},[[1002,1,0]]]);
//# sourceMappingURL=pages.dashboard.projects.6a1db92d.chunk.js.map