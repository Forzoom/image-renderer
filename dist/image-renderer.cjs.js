'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('core-js/modules/es.array.filter.js');
require('core-js/modules/es.object.to-string.js');
require('core-js/modules/es.promise.js');
require('core-js/modules/es.regexp.to-string.js');

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

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
var isArray = Array.isArray || isType('Array');

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
      return _objectSpread2({
        createCanvas: document.createElement.bind(document, 'canvas'),
        createImage: document.createElement.bind(document, 'img'),
        width: 300,
        height: 300
      }, options);
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

      var _iterator = _createForOfIteratorHelper(this.parts),
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

exports.Renderer = Renderer;
exports.drawParts = drawParts;
