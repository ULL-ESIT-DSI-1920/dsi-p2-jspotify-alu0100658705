parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Fc7X":[function(require,module,exports) {
module.exports="/dsi-p2-jspotify-alu0100658705/song1.d8d6511f.mp3";
},{}],"M1ZE":[function(require,module,exports) {
module.exports="/dsi-p2-jspotify-alu0100658705/song2.87c00b5c.mp3";
},{}],"A9N2":[function(require,module,exports) {
module.exports="/dsi-p2-jspotify-alu0100658705/song3.7fa7c43e.mp3";
},{}],"kwRw":[function(require,module,exports) {
module.exports={song1:require("./song1.mp3"),song2:require("./song2.mp3"),song3:require("./song3.mp3")};
},{"./song1.mp3":"Fc7X","./song2.mp3":"M1ZE","./song3.mp3":"A9N2"}],"pKdB":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.reproducir=o,exports.default=void 0;var t=function t(o,i,n){e(this,t),this.audio=new Audio(o),this.element=document.querySelector(n),this.btn=document.querySelector(i),this.active=!0};function o(e){e.btn.onclick=function(){e.active?(e.element.classList.add("open"),e.audio.play(),e.active=!1):(e.element.classList.remove("open"),e.audio.pause(),e.active=!0)}}exports.default=t;
},{}],"ERFn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./Song.js"));function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function t(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}return n.default=e,t&&t.set(e,n),n}function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var o=function r(t){n(this,r);var o=1;for(var a in t){var u=".v".concat(o),f=new e.default(t[a],a,u);(0,e.reproducir)(f),o++}};exports.default=o;
},{"./Song.js":"pKdB"}],"QvaY":[function(require,module,exports) {
"use strict";var e=a(require("../assets/audio/*.mp3")),r=a(require("./Player.js"));function a(e){return e&&e.__esModule?e:{default:e}}var t={},u=0;for(var l in e.default)t[".item-".concat(++u)]=e.default[l];var o=new r.default(t);console.log(o);
},{"../assets/audio/*.mp3":"kwRw","./Player.js":"ERFn"}]},{},["QvaY"], null)
//# sourceMappingURL=/dsi-p2-jspotify-alu0100658705/js.92419931.js.map