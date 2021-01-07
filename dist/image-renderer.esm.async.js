import 'core-js/modules/es.array.filter.js';
import 'core-js/modules/es.object.to-string.js';
import 'core-js/modules/es.promise.js';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import 'core-js/modules/es.regexp.to-string.js';
import 'core-js/modules/es.object.assign.js';
import 'core-js/modules/es.regexp.exec.js';
import 'core-js/modules/es.string.split.js';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/inherits';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';

/**
 * 是否是null或者undefined
 *
 * @param {} v 参数
 *
 * @return {boolean}
 */
function isUndef(v) {
  return v === null || v === undefined;
}
/**
 * 是否是某种类型
 */

function isType(name) {
  return function (val) {
    return Object.prototype.toString.call(val) === "[object ".concat(name, "]");
  };
}
var isString = isType('String');
var isArray = Array.isArray || isType('Array');
/**
 * 加载图片
 */

function loadImage(src, anonymous) {
  return new Promise(function (resolve, reject) {
    var image = new Image();

    if (anonymous) {
      image.setAttribute('crossOrigin', 'anonymous');
    }

    image.onload = function () {
      resolve(image);
    };

    image.onerror = function (e) {
      console.error('loadImage fail', src, e);
      reject(e);
    };

    image.src = src;
  });
}
async function binarySearch(ctx, text, maxWidth) {
  var result = [];

  while (text.length > 0) {
    var metrics = ctx.measureText(text); // 如果宽度较小

    if (metrics.width <= maxWidth) {
      result.push(text);
      break;
    } // 宽度较大


    var str = text;
    var left = 0;
    var right = str.length - 1;
    var anchor = Math.floor((right + left) / 2);
    var _maxWidth = maxWidth;

    while (right - left > 1) {
      var width = ctx.measureText(str.substring(left, anchor)).width;

      if (width > _maxWidth) {
        right = anchor;
        anchor = Math.floor((right + left) / 2);
      } else {
        left = anchor;
        anchor = Math.floor((right + left) / 2);
        _maxWidth -= width;
      }
    }

    result.push(text.substr(0, anchor));
    text = text.substr(anchor);
  }

  return result;
}

var defaultOptions = {
  filter: undefined,
  alpha: 1
};
var BasePart = function BasePart(options) {
  _classCallCheck(this, BasePart);

  _defineProperty(this, "key", void 0);

  _defineProperty(this, "alpha", void 0);

  _defineProperty(this, "filter", void 0);

  var opt = Object.assign({}, defaultOptions, options);
  this.alpha = opt.alpha;
  this.filter = opt.filter;
  this.key = opt.key;
};

var Size = /*#__PURE__*/function () {
  function Size(width) {
    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : width;

    _classCallCheck(this, Size);

    _defineProperty(this, "width", void 0);

    _defineProperty(this, "height", void 0);

    this.width = width;
    this.height = height;
  }

  _createClass(Size, [{
    key: "scaleMode",
    value: function scaleMode(mode, fit) {
      var ratio = this.width / this.height;
      var fitRatio = fit.width / fit.height;
      var result = new Size(0, 0);

      if (mode === 'fill') {
        // 图片更宽
        if (ratio > fitRatio) {
          result.height = fit.height;
          result.width = fit.height * ratio;
        } else {
          result.width = fit.width;
          result.height = fit.width / ratio;
        }
      } else {
        // 图片更宽
        if (ratio > fitRatio) {
          result.width = fit.width;
          result.height = fit.width / ratio;
        } else {
          result.height = fit.height;
          result.width = fit.height * ratio;
        }
      }

      return result;
    }
  }, {
    key: "scale",
    value: function scale(ratio) {
      return new Size(this.width * ratio, this.height * ratio);
    }
  }]);

  return Size;
}();
var Point = /*#__PURE__*/function () {
  function Point(x, y) {
    _classCallCheck(this, Point);

    _defineProperty(this, "x", void 0);

    _defineProperty(this, "y", void 0);

    this.x = x;
    this.y = y;
  }

  _createClass(Point, [{
    key: "scale",
    value: function scale(ratio) {
      return new Point(this.x * ratio, this.y * ratio);
    }
  }]);

  return Point;
}();
var Rect = /*#__PURE__*/function () {
  function Rect(origin, size) {
    _classCallCheck(this, Rect);

    _defineProperty(this, "origin", void 0);

    _defineProperty(this, "size", void 0);

    this.origin = origin;
    this.size = size;
  }

  _createClass(Rect, [{
    key: "scale",
    value: function scale(ratio) {
      return new Rect(this.origin.scale(ratio), this.size.scale(ratio));
    }
  }]);

  return Rect;
}();

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var defaultOptions$1 = {
  origin: new Point(0, 0),
  fontSize: 14,
  singleLine: false,
  color: '000000',
  textAlign: 'left',
  orientation: 'horizontal'
};
var TextPart = /*#__PURE__*/function (_BasePart) {
  _inherits(TextPart, _BasePart);

  var _super = _createSuper(TextPart);

  /** 将自动折行 */

  /** 需要手动指定行高 */

  /** 为vertical时将主动value.split('') */
  function TextPart(options) {
    var _this;

    _classCallCheck(this, TextPart);

    _this = _super.call(this, options || {});

    _defineProperty(_assertThisInitialized(_this), "type", 'text');

    _defineProperty(_assertThisInitialized(_this), "value", void 0);

    _defineProperty(_assertThisInitialized(_this), "origin", void 0);

    _defineProperty(_assertThisInitialized(_this), "width", void 0);

    _defineProperty(_assertThisInitialized(_this), "fontSize", void 0);

    _defineProperty(_assertThisInitialized(_this), "lineHeight", void 0);

    _defineProperty(_assertThisInitialized(_this), "singleLine", void 0);

    _defineProperty(_assertThisInitialized(_this), "color", void 0);

    _defineProperty(_assertThisInitialized(_this), "font", void 0);

    _defineProperty(_assertThisInitialized(_this), "textAlign", void 0);

    _defineProperty(_assertThisInitialized(_this), "orientation", void 0);

    var opt = Object.assign({}, defaultOptions$1, options);
    _this.value = opt.value;
    _this.origin = opt.origin;
    /** 将自动折行 */

    _this.width = opt.width;
    _this.fontSize = opt.fontSize;
    /** 需要手动指定行高 */

    _this.lineHeight = isUndef(opt.lineHeight) ? Math.round(opt.fontSize * 1.5) : opt.lineHeight;
    _this.singleLine = opt.singleLine;
    _this.color = opt.color;
    _this.font = opt.font;
    _this.textAlign = opt.textAlign;
    _this.orientation = opt.orientation;
    return _this;
  }
  /**
   * 在canvas上绘图
   */


  _createClass(TextPart, [{
    key: "drawCanvas",
    value: async function drawCanvas(ctx) {
      if (isUndef(this.value) || this.value === '' || this.value.length === 0) {
        return;
      }

      ctx.fillStyle = '#' + this.color;

      if (this.font) {
        ctx.font = this.font;
      }

      ctx.textAlign = this.textAlign; // 对于宽度有限制要求

      if (this.orientation === 'vertical') {
        var list = [];

        if (isString(this.value)) {
          list = this.value.split('');
        }

        for (var i = 0, len = list.length; i < len; i++) {
          ctx.fillText(list[i], this.origin.x, this.origin.y + i * this.lineHeight);
        }
      } else {
        if (this.width && this.lineHeight) {
          var result = await binarySearch(ctx, this.value, this.width);

          if (!this.singleLine) {
            for (var _i = 0, _len = result.length; _i < _len; _i++) {
              ctx.fillText(result[_i], this.origin.x, this.origin.y + _i * this.lineHeight);
            }
          } else {
            var str = result.length > 1 ? result[0].substr(0, result[0].length - 1) + '..' : result[0];
            ctx.fillText(str, this.origin.x, this.origin.y);
          }
        } else {
          ctx.fillText(this.value, this.origin.x, this.origin.y);
        }
      }
    }
  }]);

  return TextPart;
}(BasePart);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var defaultOptions$2 = {
  value: '',
  origin: new Point(0, 0),
  size: new Size(0, 0),
  clip: undefined
};
var ImagePart = /*#__PURE__*/function (_BasePart) {
  _inherits(ImagePart, _BasePart);

  var _super = _createSuper$1(ImagePart);

  function ImagePart(options) {
    var _this;

    _classCallCheck(this, ImagePart);

    _this = _super.call(this, options || {});

    _defineProperty(_assertThisInitialized(_this), "type", 'image');

    _defineProperty(_assertThisInitialized(_this), "value", void 0);

    _defineProperty(_assertThisInitialized(_this), "origin", void 0);

    _defineProperty(_assertThisInitialized(_this), "size", void 0);

    _defineProperty(_assertThisInitialized(_this), "clip", void 0);

    var opt = Object.assign({}, defaultOptions$2, options);
    _this.value = opt.value;
    _this.origin = opt.origin;
    _this.size = opt.size;
    _this.clip = opt.clip;
    return _this;
  }
  /**
   * 在canvas上绘图
   */


  _createClass(ImagePart, [{
    key: "drawCanvas",
    value: async function drawCanvas(ctx) {
      if (isUndef(this.value)) {
        return;
      }

      var elm = null;

      if (isString(this.value)) {
        elm = await loadImage(this.value, true);
      } else {
        elm = this.value;
      }

      var origin = this.origin;
      var size = this.size;
      var clip = this.clip;

      if (!clip) {
        ctx.drawImage(elm, origin.x, origin.y, size.width, size.height);
      } else {
        ctx.drawImage(elm, clip.origin.x, clip.origin.y, clip.size.width, clip.size.height, origin.x, origin.y, size.width, size.height);
      }
    }
  }, {
    key: "circleClip",
    value: function circleClip(ctx) {
      ctx.beginPath();
      ctx.moveTo(this.origin.x + this.size.width, this.origin.y + this.size.height / 2);
      ctx.arc(this.origin.x + this.size.width / 2, this.origin.y + this.size.height / 2, this.size.width / 2, 0, Math.PI * 2, true);
      ctx.clip();
      ctx.closePath();
    }
  }]);

  return ImagePart;
}(BasePart);

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var defaultOptions$3 = {
  backgroundColor: '000000',
  origin: new Point(0, 0),
  size: new Size(0, 0)
};
var RectPart = /*#__PURE__*/function (_BasePart) {
  _inherits(RectPart, _BasePart);

  var _super = _createSuper$2(RectPart);

  function RectPart(options) {
    var _this;

    _classCallCheck(this, RectPart);

    _this = _super.call(this, options || {});

    _defineProperty(_assertThisInitialized(_this), "type", 'rect');

    _defineProperty(_assertThisInitialized(_this), "backgroundColor", void 0);

    _defineProperty(_assertThisInitialized(_this), "origin", void 0);

    _defineProperty(_assertThisInitialized(_this), "size", void 0);

    var opt = Object.assign({}, defaultOptions$3, options);
    _this.backgroundColor = opt.backgroundColor;
    _this.origin = opt.origin;
    _this.size = opt.size;
    return _this;
  }
  /**
   * 在canvas上绘图
   */


  _createClass(RectPart, [{
    key: "drawCanvas",
    value: async function drawCanvas(ctx) {
      ctx.fillStyle = '#' + this.backgroundColor;
      ctx.fillRect(this.origin.x, this.origin.y, this.size.width, this.size.height);
    }
  }]);

  return RectPart;
}(BasePart);

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var defaultOptions$4 = {
  stop: [],
  start: new Point(0, 0),
  end: new Point(0, 0),
  rect: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  }
};
var LinearGradientPart = /*#__PURE__*/function (_BasePart) {
  _inherits(LinearGradientPart, _BasePart);

  var _super = _createSuper$3(LinearGradientPart);

  function LinearGradientPart(options) {
    var _this;

    _classCallCheck(this, LinearGradientPart);

    _this = _super.call(this, options || {});

    _defineProperty(_assertThisInitialized(_this), "type", 'linearGradient');

    _defineProperty(_assertThisInitialized(_this), "stop", void 0);

    _defineProperty(_assertThisInitialized(_this), "start", void 0);

    _defineProperty(_assertThisInitialized(_this), "end", void 0);

    _defineProperty(_assertThisInitialized(_this), "rect", void 0);

    var opt = Object.assign({}, defaultOptions$4, options);
    _this.stop = opt.stop;
    _this.start = opt.start;
    _this.end = opt.end;
    _this.rect = opt.rect;
    return _this;
  }
  /**
   * 在canvas上绘图
   */


  _createClass(LinearGradientPart, [{
    key: "drawCanvas",
    value: async function drawCanvas(ctx) {
      var gradient = ctx.createLinearGradient(this.start.x, this.start.y, this.end.x, this.end.y);

      var _iterator = _createForOfIteratorHelper(this.stop),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var stop = _step.value;
          gradient.addColorStop(stop.pos, stop.color);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height);
    }
  }]);

  return LinearGradientPart;
}(BasePart);

function _createForOfIteratorHelper$1(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
/**
 * 渲染图片
 */

async function drawParts(ctx, parts) {
  for (var i = 0, len = parts.length; i < len; i++) {
    var part = parts[i];
    ctx.save();

    if (!isUndef(part.alpha)) {
      ctx.globalAlpha = part.alpha;
    }

    if (part.filter) {
      // image.style.filter = 'blur(20px)';
      ctx.filter = 'blur(20px)';
    }

    await part.drawCanvas(ctx);
    ctx.restore();
  }
}
var Renderer = /*#__PURE__*/function () {
  function Renderer() {
    _classCallCheck(this, Renderer);

    _defineProperty(this, "parts", []);
  }

  _createClass(Renderer, [{
    key: "draw",
    value: function draw(part) {
      this.parts.push(part);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.parts = [];
    }
  }, {
    key: "getOptions",
    value: function getOptions(options) {
      return {
        createCanvas: options && options.createCanvas ? options.createCanvas : document.createElement.bind(document, 'canvas'),
        createImage: options && options.createImage ? options.createImage : document.createElement.bind(document, 'img'),
        width: options && options.width ? options.width : 300,
        height: options && options.height ? options.height : 300
      };
    }
  }, {
    key: "generate",
    value: async function generate(options) {
      options = this.getOptions(options);
      var canvasElm = options.createCanvas();
      canvasElm.width = options.width;
      canvasElm.height = options.height;
      var ctx = canvasElm.getContext('2d');

      if (!ctx) {
        return false;
      }

      var _iterator = _createForOfIteratorHelper$1(this.parts),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var part = _step.value;
          await drawParts(ctx, isArray(part) ? part : [part]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return canvasElm;
    }
  }, {
    key: "generateSrc",
    value: async function generateSrc(options) {
      options = this.getOptions(options);
      var canvasElm = await this.generate(options);

      if (!canvasElm) {
        return false;
      }

      return canvasElm.toDataURL();
    }
  }, {
    key: "generateImage",
    value: async function generateImage(options) {
      var src = await this.generateSrc(options);

      if (!src) {
        return false;
      }

      var imageElm = options.createImage();
      imageElm.src = src;
      return imageElm;
    }
  }]);

  return Renderer;
}();

export { BasePart, ImagePart, LinearGradientPart, Point, Rect, RectPart, Renderer, Size, TextPart, drawParts };
