!function(n){var r={};function e(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=r,e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,r){if(1&r&&(n=e(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)e.d(t,o,function(r){return n[r]}.bind(null,o));return t},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},e.p="",e(e.s=0)}([function(n,r,e){"use strict";e.r(r);e(1);const t=document.querySelector(".sign-up .toggler__button"),o=document.querySelector(".sign-in .toggler__button");function i(n){n.preventDefault();const r=document.querySelector(".sign-up"),e=document.querySelector(".sign-in");r.classList.toggle("active"),e.classList.toggle("active")}t.addEventListener("click",i),o.addEventListener("click",i);const a=[],s={};document.querySelector(".sign__container .form__button").addEventListener("click",function(n){n.preventDefault();const r=document.querySelectorAll(".sign__container .field__input")[0],e=document.querySelectorAll(".sign__container .field__input")[1],t=document.querySelectorAll(".sign__container .field__input")[2],o=document.querySelectorAll(".sign__container .field__input")[3];s.name=r.value,s.email=e.value,s.password=t.value,s.rePassword=o.value,a.push(s),console.log(a)})},function(n,r,e){var t=e(2);"string"==typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(6)(t,o);t.locals&&(n.exports=t.locals)},function(n,r,e){r=n.exports=e(3)(!1);var t=e(4)(e(5));r.push([n.i,"/*************************************** HEADER *******************************************/\r\n/******************************************************************************************/\r\n\r\n.header {\r\n  background-image: url("+t+");\r\n  background-size: cover;\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.image {\r\n  max-width: 100%;\r\n}\r\n\r\n.navbar-logo {\r\n  width: 400px;\r\n}\r\n\r\n.link {\r\n  color: #ffffff;\r\n}\r\n\r\n.home-title {\r\n  font-size: 4rem;\r\n}\r\n\r\n.big-button {\r\n  margin-top: 1rem;\r\n  font-size: 1.2rem;\r\n  padding: 1rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\n/*************************************** SPINNER ******************************************/\r\n/******************************************************************************************/\r\n\r\n.spinner {\r\n  margin: 2rem auto;\r\n  width: 14rem;\r\n  height: 14rem;\r\n  background: #312520;\r\n  overflow: hidden;\r\n  animation: move 2s infinite linear;\r\n  border-radius: 50%;\r\n  position: relative;\r\n  box-shadow: 0 0 30px #222121b7; }\r\n\r\n.spinner__triangle {\r\n  width: 0;\r\n  height: 0;\r\n  border-right: 7rem solid transparent;\r\n  border-left: 7rem solid transparent;\r\n  border-top: 7rem solid rgba(97, 28, 177, 0.924); }\r\n\r\n.spinner__inner {\r\n  width: 10rem;\r\n  height: 10rem;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  top: 2rem;\r\n  left: 2rem;\r\n  background-color: #fff;\r\n  box-shadow: 0 0 30px #222121b7 inset; }\r\n\r\n@keyframes move {\r\n  to {\r\n    transform: rotate(360deg); \r\n  } \r\n}\r\n\r\n/**************************************** FORM ********************************************/\r\n/******************************************************************************************/\r\n\r\n.sign {\r\n  width: 100%;\r\n}\r\n\r\n.sign__title {\r\n  text-align: center;\r\n  font-size: 1.5rem;\r\n  color: #ffffff;\r\n}\r\n\r\n.sign__container {\r\n  display: none;\r\n  margin: 0 auto;\r\n  padding: 2rem;\r\n  border-radius: 10px;\r\n  width: 40%;\r\n  background-color: #ffc88c;\r\n}\r\n\r\n.field {\r\n  padding: .5rem 0;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.form__item:last-of-type {\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.field__name {\r\n  display: block;\r\n  padding: 0.5rem 0;\r\n}\r\n\r\n.field__input {\r\n  margin-left: 3rem;\r\n  font-size: 1.5rem;\r\n  border: none;\r\n  border-bottom: 2px solid cornflowerblue;\r\n  height: 2rem;\r\n  display: block;\r\n  background-color: #ffc88c;\r\n  outline:none;\r\n}\r\n\r\n.form__button {\r\n  padding: 1rem 2rem 1rem;\r\n  border: 1px solid dodgerblue;\r\n  border-radius: 1.5rem;\r\n  margin: 1rem auto;\r\n  display: block;\r\n  background-color: #c9c7ff;\r\n  cursor: pointer;\r\n  outline:none;\r\n}\r\n\r\n.sign__container {\r\n  display: none;\r\n  margin: 0 auto;\r\n  padding: 2rem;\r\n  border-radius: 10px;\r\n  width: 40%;\r\n  background-color: #ffc88c;\r\n}\r\n\r\n.active {\r\n  display: block;\r\n}\r\n\r\n/*************************************** SECTION-1 ****************************************/\r\n/******************************************************************************************/\r\n\r\n.circle {\r\n  border: 3px solid #FFDD57;\r\n  margin: 0 auto;\r\n  padding: 2rem;\r\n  width: 5rem;\r\n  height: 5rem;\r\n  background-color: white;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 50%;\r\n}\r\n\r\n.sport-icon {\r\n  padding-left: 1.4rem;\r\n}\r\n\r\n.kinds {\r\n  padding: 5rem 0;\r\n}\r\n\r\n.kind {\r\n  text-align: left;\r\n  padding: 1rem 0;\r\n}\r\n\r\n.kind-title {\r\n  padding: 1.5rem 0;\r\n  font-size: 1.5rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.kind-description {\r\n  text-align: left;\r\n}\r\n\r\n/*************************************** SECTION-2 ****************************************/\r\n/******************************************************************************************/\r\n\r\n.bikes-type {\r\n  position: relative;\r\n}\r\n\r\n.left-arrow {\r\n  position: absolute;\r\n  left: 5;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.right-arrow {\r\n  position: absolute;\r\n  right: 5%;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.bike-title {\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  padding: 2rem 0;\r\n}\r\n\r\n/*************************************** SECTION-3 ****************************************/\r\n/******************************************************************************************/\r\n\r\n.competition-title {\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n/************************************** FOOTER *****************************************/\r\n/***************************************************************************************/\r\n\r\n.custom-footer {\r\n  padding: 2rem;\r\n  width: 100vw;\r\n  flex: 0 0 auto;\r\n  color: #b7b7b7;\r\n  background-color: #4a4a4a;\r\n}\r\n\r\n.social-item {\r\n  padding: .8rem;\r\n}\r\n\r\n/*********************************** CYCLE SECTION *************************************/\r\n/***************************************************************************************/\r\n\r\n.custom-cycle-body {\r\n  padding: 5rem 1rem;\r\n  background-image: linear-gradient(#a5a2a2, #e4e0e0);\r\n}\r\n\r\n.cycle-heading {\r\n  font-size: 3rem;\r\n  padding: 4rem;\r\n}\r\n\r\n.cycle-text {\r\n  padding: 4rem;\r\n}\r\n\r\n.competition-description p {\r\n    font-size: 1rem;\r\n    padding: 1.1rem 0;\r\n  }\r\n\r\n  .competition-description .big-button {\r\n    background-color: #ffdd57;\r\n    border-color: transparent;\r\n    color: rgba(0, 0, 0, 0.7);\r\n    border-radius: 290486px;\r\n    padding-left: 1em;\r\n    padding-right: 1em;\r\n    cursor: pointer;\r\n    justify-content: center;\r\n    white-space: nowrap; }\r\n  \r\n  .custom-footer {\r\n    display: flex;\r\n    justify-content: space-around;\r\n}",""])},function(n,r,e){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map(function(r){var e=function(n,r){var e=n[1]||"",t=n[3];if(!t)return e;if(r&&"function"==typeof btoa){var o=(a=t,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=t.sources.map(function(n){return"/*# sourceURL=".concat(t.sourceRoot).concat(n," */")});return[e].concat(i).concat([o]).join("\n")}var a,s,c;return[e].join("\n")}(r,n);return r[2]?"@media ".concat(r[2],"{").concat(e,"}"):e}).join("")},r.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var t={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(t[i]=!0)}for(var a=0;a<n.length;a++){var s=n[a];null!=s[0]&&t[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="(".concat(s[2],") and (").concat(e,")")),r.push(s))}},r}},function(n,r,e){"use strict";n.exports=function(n,r){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)||r?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,r,e){n.exports=e.p+"64776dda7db978204a9d0e9bc7ac640e.jpg"},function(n,r,e){var t,o,i={},a=(t=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=t.apply(this,arguments)),o}),s=function(n){var r={};return function(n,e){if("function"==typeof n)return n();if(void 0===r[n]){var t=function(n,r){return r?r.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}r[n]=t}return r[n]}}(),c=null,l=0,u=[],d=e(7);function f(n,r){for(var e=0;e<n.length;e++){var t=n[e],o=i[t.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](t.parts[a]);for(;a<t.parts.length;a++)o.parts.push(v(t.parts[a],r))}else{var s=[];for(a=0;a<t.parts.length;a++)s.push(v(t.parts[a],r));i[t.id]={id:t.id,refs:1,parts:s}}}}function p(n,r){for(var e=[],t={},o=0;o<n.length;o++){var i=n[o],a=r.base?i[0]+r.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};t[a]?t[a].parts.push(s):e.push(t[a]={id:a,parts:[s]})}return e}function m(n,r){var e=s(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var t=u[u.length-1];if("top"===n.insertAt)t?t.nextSibling?e.insertBefore(r,t.nextSibling):e.appendChild(r):e.insertBefore(r,e.firstChild),u.push(r);else if("bottom"===n.insertAt)e.appendChild(r);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(n.insertAt.before,e);e.insertBefore(r,o)}}function g(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var r=u.indexOf(n);r>=0&&u.splice(r,1)}function b(n){var r=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var t=function(){0;return e.nc}();t&&(n.attrs.nonce=t)}return h(r,n.attrs),m(n,r),r}function h(n,r){Object.keys(r).forEach(function(e){n.setAttribute(e,r[e])})}function v(n,r){var e,t,o,i;if(r.transform&&n.css){if(!(i="function"==typeof r.transform?r.transform(n.css):r.transform.default(n.css)))return function(){};n.css=i}if(r.singleton){var a=l++;e=c||(c=b(r)),t=_.bind(null,e,a,!1),o=_.bind(null,e,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var r=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",h(r,n.attrs),m(n,r),r}(r),t=function(n,r,e){var t=e.css,o=e.sourceMap,i=void 0===r.convertToAbsoluteUrls&&o;(r.convertToAbsoluteUrls||i)&&(t=d(t));o&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([t],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,e,r),o=function(){g(e),e.href&&URL.revokeObjectURL(e.href)}):(e=b(r),t=function(n,r){var e=r.css,t=r.media;t&&n.setAttribute("media",t);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),o=function(){g(e)});return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else o()}}n.exports=function(n,r){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(r=r||{}).attrs="object"==typeof r.attrs?r.attrs:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=a()),r.insertInto||(r.insertInto="head"),r.insertAt||(r.insertAt="bottom");var e=p(n,r);return f(e,r),function(n){for(var t=[],o=0;o<e.length;o++){var a=e[o];(s=i[a.id]).refs--,t.push(s)}n&&f(p(n,r),r);for(o=0;o<t.length;o++){var s;if(0===(s=t[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var y,w=(y=[],function(n,r){return y[n]=r,y.filter(Boolean).join("\n")});function _(n,r,e,t){var o=e?"":t.css;if(n.styleSheet)n.styleSheet.cssText=w(r,o);else{var i=document.createTextNode(o),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}},function(n,r){n.exports=function(n){var r="undefined"!=typeof window&&window.location;if(!r)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=r.protocol+"//"+r.host,t=e+r.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,r){var o,i=r.trim().replace(/^"(.*)"$/,function(n,r){return r}).replace(/^'(.*)'$/,function(n,r){return r});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:t+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]);