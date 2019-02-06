(this.webpackJsonp=this.webpackJsonp||[]).push([[236],{440:function(e,t,n){"use strict";n.r(t);var r=n(1745),i=n(1973),o=n.n(i),a=n(1974),s=n.n(a);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f={default:new r.MeshLambertMaterial({color:14828329}),wireframe:new r.MeshLambertMaterial({color:14828329,wireframe:!0})},p=function(e){function t(e){var n;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=u(this,l(t).call(this,e,f.default))).geometry.computeBoundingSphere(),n.rotation.set(-Math.PI/2,0,0),n.geometry.boundingSphere.radius>4){var i=4/n.geometry.boundingSphere.radius;n.geometry.applyMatrix((new r.Matrix4).makeScale(i,i,i)),n.geometry.computeBoundingSphere(),n.position.x=-n.geometry.boundingSphere.center.x,n.position.z=n.geometry.boundingSphere.center.y}return n}var n,i,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r["Mesh"]),n=t,(i=[{key:"changeMaterial",value:function(e){this.material=f[e]}}])&&h(n.prototype,i),o&&h(n,o),t}();function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=o()(r),b=s()(r),v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.renderWrapper=this.render.bind(this),this.objects=[],this.container=t,this.width=this.container.offsetWidth,this.height=500,this.loader=new y,this.fov=45,this.camera=new r.PerspectiveCamera(this.fov,this.width/this.height,1,1e3),this.scene=new r.Scene,this.scene.add(this.camera),this.setupRenderer(),this.setupGrid(),this.setupLight(),this.controls=new b(this.camera,this.renderer.domElement),this.controls.minDistance=5,this.controls.maxDistance=30,this.controls.enableKeys=!1,this.loadFile()}var t,n,i;return t=e,(n=[{key:"setupRenderer",value:function(){this.renderer=new r.WebGLRenderer({antialias:!0}),this.renderer.setClearColor(16777215),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.width,this.height)}},{key:"setupLight",value:function(){var e=new r.PointLight(16777215,2,0);e.castShadow=!0,this.camera.add(e);var t=new r.AmbientLight(16777215,1);this.scene.add(t)}},{key:"setupGrid",value:function(){this.grid=new r.GridHelper(20,20,0,0),this.scene.add(this.grid)}},{key:"loadFile",value:function(){var e=this;this.loader.load(this.container.dataset.endpoint,function(t){var n=new p(t);e.objects.push(n),e.scene.add(n),e.start(),e.setDefaultCameraPosition()})}},{key:"start",value:function(){this.container.innerHTML="",this.container.appendChild(this.renderer.domElement),this.container.parentNode.classList.remove("is-stl-loading"),this.render()}},{key:"render",value:function(){this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.renderWrapper)}},{key:"changeObjectMaterials",value:function(e){this.objects.forEach(function(t){t.changeMaterial(e)})}},{key:"setDefaultCameraPosition",value:function(){var e=this.objects[0].geometry.boundingSphere.radius/1.5/Math.sin(this.fov*(Math.PI/180)/2);this.camera.position.set(0,e+1,e),this.camera.lookAt(this.grid),this.controls.update()}}])&&m(t.prototype,n),i&&m(t,i),e}();t.default=function(){var e=new v(document.getElementById("js-stl-viewer"));[].slice.call(document.querySelectorAll(".js-material-changer")).forEach(function(t){t.addEventListener("click",function(t){var n=t.target;t.preventDefault(),document.querySelector(".js-material-changer.active").classList.remove("active"),n.classList.add("active"),n.blur(),e.changeObjectMaterials(n.dataset.type)})})}}}]);
//# sourceMappingURL=stl_viewer.96538329.chunk.js.map