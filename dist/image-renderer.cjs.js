"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("core-js/modules/es.array.filter.js");var _regeneratorRuntime=require("@babel/runtime/regenerator");require("core-js/modules/es.symbol.js"),require("core-js/modules/es.symbol.description.js"),require("core-js/modules/es.symbol.async-iterator.js"),require("core-js/modules/es.symbol.iterator.js"),require("core-js/modules/es.symbol.to-string-tag.js"),require("core-js/modules/es.array.for-each.js"),require("core-js/modules/es.array.iterator.js"),require("core-js/modules/es.array.slice.js"),require("core-js/modules/es.function.name.js"),require("core-js/modules/es.json.to-string-tag.js"),require("core-js/modules/es.math.to-string-tag.js"),require("core-js/modules/es.object.get-prototype-of.js"),require("core-js/modules/es.object.set-prototype-of.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.promise.js"),require("core-js/modules/es.regexp.to-string.js"),require("core-js/modules/es.string.iterator.js"),require("core-js/modules/web.dom-collections.for-each.js"),require("core-js/modules/web.dom-collections.iterator.js");var _typeof=require("@babel/runtime/helpers/typeof"),_asyncToGenerator=require("@babel/runtime/helpers/asyncToGenerator"),_classCallCheck=require("@babel/runtime/helpers/classCallCheck"),_createClass=require("@babel/runtime/helpers/createClass"),_defineProperty=require("@babel/runtime/helpers/defineProperty");require("core-js/modules/es.object.assign.js"),require("core-js/modules/es.array.concat.js"),require("core-js/modules/es.regexp.exec.js"),require("core-js/modules/es.string.split.js");var _assertThisInitialized=require("@babel/runtime/helpers/assertThisInitialized"),_inherits=require("@babel/runtime/helpers/inherits"),_possibleConstructorReturn=require("@babel/runtime/helpers/possibleConstructorReturn"),_getPrototypeOf=require("@babel/runtime/helpers/getPrototypeOf");function _interopDefaultLegacy(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var _regeneratorRuntime__default=_interopDefaultLegacy(_regeneratorRuntime),_typeof__default=_interopDefaultLegacy(_typeof),_asyncToGenerator__default=_interopDefaultLegacy(_asyncToGenerator),_classCallCheck__default=_interopDefaultLegacy(_classCallCheck),_createClass__default=_interopDefaultLegacy(_createClass),_defineProperty__default=_interopDefaultLegacy(_defineProperty),_assertThisInitialized__default=_interopDefaultLegacy(_assertThisInitialized),_inherits__default=_interopDefaultLegacy(_inherits),_possibleConstructorReturn__default=_interopDefaultLegacy(_possibleConstructorReturn),_getPrototypeOf__default=_interopDefaultLegacy(_getPrototypeOf);function createCommonjsModule(e){var t={exports:{}};return e(t,t.exports),t.exports}var runtime_1=createCommonjsModule(function(e){var t=function(o){var s,e=Object.prototype,l=e.hasOwnProperty,t="function"==typeof Symbol?Symbol:{},n=t.iterator||"@@iterator",r=t.asyncIterator||"@@asyncIterator",i=t.toStringTag||"@@toStringTag";function a(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{a({},"")}catch(e){a=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var i,a,o,u,t=t&&t.prototype instanceof y?t:y,t=Object.create(t.prototype),n=new k(n||[]);return t._invoke=(i=e,a=r,o=n,u=c,function(e,t){if(u===h)throw new Error("Generator is already running");if(u===_){if("throw"===e)throw t;return T()}for(o.method=e,o.arg=t;;){var r=o.delegate;if(r){var n=function e(t,r){var n=t.iterator[r.method];if(n===s){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=s,e(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}n=f(n,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,p;var n=n.arg;if(!n)return r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p;{if(!n.done)return n;r[t.resultName]=n.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=s)}r.delegate=null;return p}(r,o);if(n){if(n===p)continue;return n}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(u===c)throw u=_,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);u=h;n=f(i,a,o);if("normal"===n.type){if(u=o.done?_:d,n.arg!==p)return{value:n.arg,done:o.done}}else"throw"===n.type&&(u=_,o.method="throw",o.arg=n.arg)}}),t}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}o.wrap=u;var c="suspendedStart",d="suspendedYield",h="executing",_="completed",p={};function y(){}function g(){}function v(){}var m={};m[n]=function(){return this};t=Object.getPrototypeOf,t=t&&t(t(C([])));t&&t!==e&&l.call(t,n)&&(m=t);var b=v.prototype=y.prototype=Object.create(m);function w(e){["next","throw","return"].forEach(function(t){a(e,t,function(e){return this._invoke(t,e)})})}function x(o,u){var t;this._invoke=function(r,n){function e(){return new u(function(e,t){!function t(e,r,n,i){e=f(o[e],o,r);if("throw"!==e.type){var a=e.arg,r=a.value;return r&&"object"===_typeof__default.default(r)&&l.call(r,"__await")?u.resolve(r.__await).then(function(e){t("next",e,n,i)},function(e){t("throw",e,n,i)}):u.resolve(r).then(function(e){a.value=e,n(a)},function(e){return t("throw",e,n,i)})}i(e.arg)}(r,n,e,t)})}return t=t?t.then(e,e):e()}}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function C(t){if(t){var e=t[n];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,e=function e(){for(;++r<t.length;)if(l.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=s,e.done=!0,e};return e.next=e}}return{next:T}}function T(){return{value:s,done:!0}}return((g.prototype=b.constructor=v).constructor=g).displayName=a(v,i,"GeneratorFunction"),o.isGeneratorFunction=function(e){e="function"==typeof e&&e.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},o.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,a(e,i,"GeneratorFunction")),e.prototype=Object.create(b),e},o.awrap=function(e){return{__await:e}},w(x.prototype),x.prototype[r]=function(){return this},o.AsyncIterator=x,o.async=function(e,t,r,n,i){void 0===i&&(i=Promise);var a=new x(u(e,t,r,n),i);return o.isGeneratorFunction(t)?a:a.next().then(function(e){return e.done?e.value:a.next()})},w(b),a(b,i,"Generator"),b[n]=function(){return this},b.toString=function(){return"[object Generator]"},o.keys=function(r){var e,n=[];for(e in r)n.push(e);return n.reverse(),function e(){for(;n.length;){var t=n.pop();if(t in r)return e.value=t,e.done=!1,e}return e.done=!0,e}},o.values=C,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=s,this.done=!1,this.delegate=null,this.method="next",this.arg=s,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&l.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=s)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function e(e,t){return a.type="throw",a.arg=r,n.next=e,t&&(n.method="next",n.arg=s),!!t}for(var t=this.tryEntries.length-1;0<=t;--t){var i=this.tryEntries[t],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var o=l.call(i,"catchLoc"),u=l.call(i,"finallyLoc");if(o&&u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(o){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&l.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n,i=r.completion;return"throw"===i.type&&(n=i.arg,j(r)),n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:C(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=s),p}},o}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}});function isUndef(e){return null==e}function isType(t){return function(e){return Object.prototype.toString.call(e)==="[object ".concat(t,"]")}}var isString=isType("String"),isArray=Array.isArray||isType("Array");function loadImage(n,i){return new Promise(function(e,t){var r=new Image;i&&r.setAttribute("crossOrigin","anonymous"),r.onload=function(){e(r)},r.onerror=function(e){console.error("loadImage fail",n,e),t(e)},r.src=n})}function binarySearch(e,t,r){return _binarySearch.apply(this,arguments)}function _binarySearch(){return(_binarySearch=_asyncToGenerator__default.default(_regeneratorRuntime__default.default.mark(function e(t,r,n){var i,a,o,u,s,l,f;return _regeneratorRuntime__default.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:i=[];case 1:if(!(0<r.length)){e.next=16;break}if(t.measureText(r).width<=n)return i.push(r),e.abrupt("break",16);e.next=6;break;case 6:for(o=0,u=(a=r).length-1,s=Math.floor((u+o)/2),l=n;1<u-o;)f=t.measureText(a.substring(o,s)).width,l<f?(u=s,s=Math.floor((u+o)/2)):(o=s,s=Math.floor((u+o)/2),l-=f);i.push(r.substr(0,s)),r=r.substr(s),e.next=1;break;case 16:return e.abrupt("return",i);case 17:case"end":return e.stop()}},e)}))).apply(this,arguments)}var defaultOptions={filter:void 0,alpha:1},BasePart=function e(t){_classCallCheck__default.default(this,e),_defineProperty__default.default(this,"renderer",null),_defineProperty__default.default(this,"key",void 0),_defineProperty__default.default(this,"alpha",void 0),_defineProperty__default.default(this,"filter",void 0);t=Object.assign({},defaultOptions,t);this.alpha=t.alpha,this.filter=t.filter,this.key=t.key},Size=function(){function a(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:e;_classCallCheck__default.default(this,a),_defineProperty__default.default(this,"width",void 0),_defineProperty__default.default(this,"height",void 0),this.width=e,this.height=t}return _createClass__default.default(a,[{key:"scaleMode",value:function(e,t){var r=this.width/this.height,n=t.width/t.height,i=new a(0,0);return"fill"===e?n<r?(i.height=t.height,i.width=t.height*r):(i.width=t.width,i.height=t.width/r):n<r?(i.width=t.width,i.height=t.width/r):(i.height=t.height,i.width=t.height*r),i}},{key:"scale",value:function(e){return new a(this.width*e,this.height*e)}}]),a}(),Point=function(){function r(e,t){_classCallCheck__default.default(this,r),_defineProperty__default.default(this,"x",void 0),_defineProperty__default.default(this,"y",void 0),this.x=e,this.y=t}return _createClass__default.default(r,[{key:"scale",value:function(e){return new r(this.x*e,this.y*e)}}]),r}(),Rect=function(){function r(e,t){_classCallCheck__default.default(this,r),_defineProperty__default.default(this,"origin",void 0),_defineProperty__default.default(this,"size",void 0),this.origin=e,this.size=t}return _createClass__default.default(r,[{key:"scale",value:function(e){return new r(this.origin.scale(e),this.size.scale(e))}}]),r}();function _createSuper(r){var n=_isNativeReflectConstruct();return function(){var e,t=_getPrototypeOf__default.default(r);return t=n?(e=_getPrototypeOf__default.default(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),_possibleConstructorReturn__default.default(this,t)}}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var defaultOptions$1={origin:new Point(0,0),fontSize:14,font:"sans-serif",singleLine:!1,color:"000000",textAlign:"left",orientation:"horizontal"},TextPart=function(){_inherits__default.default(n,BasePart);var t,r=_createSuper(n);function n(e){var t;_classCallCheck__default.default(this,n),t=r.call(this,e||{}),_defineProperty__default.default(_assertThisInitialized__default.default(t),"type","text"),_defineProperty__default.default(_assertThisInitialized__default.default(t),"value",void 0),_defineProperty__default.default(_assertThisInitialized__default.default(t),"origin",void 0),_defineProperty__default.default(_assertThisInitialized__default.default(t),"width",void 0),_defineProperty__default.default(_assertThisInitialized__default.default(t),"fontSize",void 0),_defineProperty__default.default(_assertThisInitialized__default.default(t),"lineHeight",void 0),_defineProperty__default.default(_assertThisInitialized__default.default(t),"singleLine",void 0),_defineProperty__default.default(_assertThisInitialized__default.default(t),"color",void 0),_defineProperty__default.default(_assertThisInitialized__default.default(t),"font",void 0),_defineProperty__default.default(_assertThisInitialized__default.default(t),"textAlign",void 0),_defineProperty__default.default(_assertThisInitialized__default.default(t),"orientation",void 0);e=Object.assign({},defaultOptions$1,e);return t.value=e.value,t.origin=e.origin,t.width=e.width,t.fontSize=e.fontSize,t.lineHeight=isUndef(e.lineHeight)?Math.round(1.5*e.fontSize):e.lineHeight,t.singleLine=e.singleLine,t.color=e.color,t.font=e.font,t.textAlign=e.textAlign,t.orientation=e.orientation,t}return _createClass__default.default(n,[{key:"drawCanvas",value:(t=_asyncToGenerator__default.default(_regeneratorRuntime__default.default.mark(function e(t){var r,n,i,a,o,u,s;return _regeneratorRuntime__default.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(isUndef(this.value)||""===this.value||0===this.value.length)return e.abrupt("return");e.next=2;break;case 2:if(t.fillStyle="#"+this.color,this.fontSize&&this.font&&(t.font="".concat(this.fontSize,"px ").concat(this.font)),t.textAlign=this.textAlign,"vertical"!==this.orientation){e.next=11;break}for(r=[],isString(this.value)&&(r=this.value.split("")),n=0,i=r.length;n<i;n++)t.fillText(r[n],this.origin.x,this.origin.y+n*this.lineHeight);e.next=19;break;case 11:if(this.width&&this.lineHeight)return e.next=14,binarySearch(t,this.value,this.width);e.next=18;break;case 14:if(a=e.sent,this.singleLine)s=1<a.length?a[0].substr(0,a[0].length-1)+"..":a[0],t.fillText(s,this.origin.x,this.origin.y);else for(o=0,u=a.length;o<u;o++)t.fillText(a[o],this.origin.x,this.origin.y+o*this.lineHeight);e.next=19;break;case 18:t.fillText(this.value,this.origin.x,this.origin.y);case 19:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})}]),n}();function _createSuper$1(r){var n=_isNativeReflectConstruct$1();return function(){var e,t=_getPrototypeOf__default.default(r);return t=n?(e=_getPrototypeOf__default.default(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),_possibleConstructorReturn__default.default(this,t)}}function _isNativeReflectConstruct$1(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var defaultOptions$2={value:"",origin:new Point(0,0),size:new Size(0,0),clip:void 0},ImagePart=function(){_inherits__default.default(n,BasePart);var t,r=_createSuper$1(n);function n(e){var t;_classCallCheck__default.default(this,n),t=r.call(this,e||{}),_defineProperty__default.default(_assertThisInitialized__default.default(t),"type","image"),_defineProperty__default.default(_assertThisInitialized__default.default(t),"value",void 0),_defineProperty__default.default(_assertThisInitialized__default.default(t),"origin",void 0),_defineProperty__default.default(_assertThisInitialized__default.default(t),"size",void 0),_defineProperty__default.default(_assertThisInitialized__default.default(t),"clip",void 0);e=Object.assign({},defaultOptions$2,e);return t.value=e.value,t.origin=e.origin,t.size=e.size,t.clip=e.clip,t}return _createClass__default.default(n,[{key:"drawCanvas",value:(t=_asyncToGenerator__default.default(_regeneratorRuntime__default.default.mark(function e(t){var r,n,i,a;return _regeneratorRuntime__default.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(isUndef(this.value))return e.abrupt("return");e.next=2;break;case 2:if(this.renderer){e.next=4;break}throw new Error("Cannot find renderer.");case 4:if(this.renderer.options){e.next=6;break}throw new Error("Cannot find renderer.options, use renderer.generate function first.");case 6:if(r=null,isString(this.value))return e.next=10,loadImage(this.value,!0);e.next=13;break;case 10:r=e.sent,e.next=14;break;case 13:r=this.value;case 14:n=this.origin,i=this.size,(a=this.clip)?t.drawImage(r,a.origin.x,a.origin.y,a.size.width,a.size.height,n.x,n.y,i.width,i.height):t.drawImage(r,n.x,n.y,i.width,i.height);case 18:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})},{key:"circleClip",value:function(e){e.beginPath(),e.moveTo(this.origin.x+this.size.width,this.origin.y+this.size.height/2),e.arc(this.origin.x+this.size.width/2,this.origin.y+this.size.height/2,this.size.width/2,0,2*Math.PI,!0),e.clip(),e.closePath()}}]),n}();function _createSuper$2(r){var n=_isNativeReflectConstruct$2();return function(){var e,t=_getPrototypeOf__default.default(r);return t=n?(e=_getPrototypeOf__default.default(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),_possibleConstructorReturn__default.default(this,t)}}function _isNativeReflectConstruct$2(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var defaultOptions$3={backgroundColor:"000000",origin:new Point(0,0),size:new Size(0,0)},RectPart=function(){_inherits__default.default(n,BasePart);var t,r=_createSuper$2(n);function n(e){var t;_classCallCheck__default.default(this,n),t=r.call(this,e||{}),_defineProperty__default.default(_assertThisInitialized__default.default(t),"type","rect"),_defineProperty__default.default(_assertThisInitialized__default.default(t),"backgroundColor",void 0),_defineProperty__default.default(_assertThisInitialized__default.default(t),"origin",void 0),_defineProperty__default.default(_assertThisInitialized__default.default(t),"size",void 0);e=Object.assign({},defaultOptions$3,e);return t.backgroundColor=e.backgroundColor,t.origin=e.origin,t.size=e.size,t}return _createClass__default.default(n,[{key:"drawCanvas",value:(t=_asyncToGenerator__default.default(_regeneratorRuntime__default.default.mark(function e(t){return _regeneratorRuntime__default.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.fillStyle="#"+this.backgroundColor,t.fillRect(this.origin.x,this.origin.y,this.size.width,this.size.height);case 2:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})}]),n}();function _createForOfIteratorHelper(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,t=function(){};return{s:t,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,o=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){o=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(o)throw i}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _createSuper$3(r){var n=_isNativeReflectConstruct$3();return function(){var e,t=_getPrototypeOf__default.default(r);return t=n?(e=_getPrototypeOf__default.default(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),_possibleConstructorReturn__default.default(this,t)}}function _isNativeReflectConstruct$3(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var defaultOptions$4={stop:[],start:new Point(0,0),end:new Point(0,0),rect:{x:0,y:0,width:0,height:0}},LinearGradientPart=function(){_inherits__default.default(n,BasePart);var t,r=_createSuper$3(n);function n(e){var t;_classCallCheck__default.default(this,n),t=r.call(this,e||{}),_defineProperty__default.default(_assertThisInitialized__default.default(t),"type","linearGradient"),_defineProperty__default.default(_assertThisInitialized__default.default(t),"stop",void 0),_defineProperty__default.default(_assertThisInitialized__default.default(t),"start",void 0),_defineProperty__default.default(_assertThisInitialized__default.default(t),"end",void 0),_defineProperty__default.default(_assertThisInitialized__default.default(t),"rect",void 0);e=Object.assign({},defaultOptions$4,e);return t.stop=e.stop,t.start=e.start,t.end=e.end,t.rect=e.rect,t}return _createClass__default.default(n,[{key:"drawCanvas",value:(t=_asyncToGenerator__default.default(_regeneratorRuntime__default.default.mark(function e(t){var r,n,i;return _regeneratorRuntime__default.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=t.createLinearGradient(this.start.x,this.start.y,this.end.x,this.end.y),n=_createForOfIteratorHelper(this.stop);try{for(n.s();!(i=n.n()).done;)i=i.value,r.addColorStop(i.pos,i.color)}catch(e){n.e(e)}finally{n.f()}t.fillStyle=r,t.fillRect(this.rect.x,this.rect.y,this.rect.width,this.rect.height);case 5:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})}]),n}();function _createForOfIteratorHelper$1(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=_unsupportedIterableToArray$1(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,t=function(){};return{s:t,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,o=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){o=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(o)throw i}}}}function _unsupportedIterableToArray$1(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray$1(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray$1(e,t):void 0}}function _arrayLikeToArray$1(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Renderer=function(){function e(){_classCallCheck__default.default(this,e),_defineProperty__default.default(this,"parts",[]),_defineProperty__default.default(this,"options",null)}var t,r,n;return _createClass__default.default(e,[{key:"draw",value:function(e){this.parts.push(e)}},{key:"reset",value:function(){this.parts=[]}},{key:"getOptions",value:function(e){return{createCanvas:e&&e.createCanvas?e.createCanvas:document.createElement.bind(document,"canvas"),createImage:e&&e.createImage?e.createImage:document.createElement.bind(document,"img"),width:e&&e.width?e.width:300,height:e&&e.height?e.height:300}}},{key:"generate",value:(n=_asyncToGenerator__default.default(_regeneratorRuntime__default.default.mark(function e(t){var r,n,i,a,o,u,s,l;return _regeneratorRuntime__default.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.options=this.getOptions(t),(r=this.options.createCanvas()).width=this.options.width,r.height=this.options.height,n=r.getContext("2d")){e.next=7;break}return e.abrupt("return",!1);case 7:i=_createForOfIteratorHelper$1(this.parts),e.prev=8,i.s();case 10:if((a=i.n()).done){e.next=28;break}l=a.value,o=isArray(l)?l:[l],u=0,s=o.length;case 14:if(u<s)return(l=o[u]).renderer=this,n.save(),isUndef(l.alpha)||(n.globalAlpha=l.alpha),l.filter&&(n.filter="blur(20px)"),e.next=22,l.drawCanvas(n);e.next=26;break;case 22:n.restore();case 23:u++,e.next=14;break;case 26:e.next=10;break;case 28:e.next=33;break;case 30:e.prev=30,e.t0=e.catch(8),i.e(e.t0);case 33:return e.prev=33,i.f(),e.finish(33);case 36:return e.abrupt("return",r);case 37:case"end":return e.stop()}},e,this,[[8,30,33,36]])})),function(e){return n.apply(this,arguments)})},{key:"generateSrc",value:(r=_asyncToGenerator__default.default(_regeneratorRuntime__default.default.mark(function e(t){var r;return _regeneratorRuntime__default.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.getOptions(t),e.next=3,this.generate(t);case 3:if(r=e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.abrupt("return",r.toDataURL());case 7:case"end":return e.stop()}},e,this)})),function(e){return r.apply(this,arguments)})},{key:"generateImage",value:(t=_asyncToGenerator__default.default(_regeneratorRuntime__default.default.mark(function e(t){var r,n;return _regeneratorRuntime__default.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.generateSrc(t);case 2:if(r=e.sent){e.next=5;break}return e.abrupt("return",!1);case 5:return(n=t.createImage()).src=r,e.abrupt("return",n);case 8:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})}]),e}();exports.BasePart=BasePart,exports.ImagePart=ImagePart,exports.LinearGradientPart=LinearGradientPart,exports.Point=Point,exports.Rect=Rect,exports.RectPart=RectPart,exports.Renderer=Renderer,exports.Size=Size,exports.TextPart=TextPart;
