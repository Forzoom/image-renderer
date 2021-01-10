import 'core-js/modules/es.array.filter.js';
import _regeneratorRuntime from '@babel/runtime/regenerator';
import 'core-js/modules/es.symbol.js';
import 'core-js/modules/es.symbol.description.js';
import 'core-js/modules/es.symbol.async-iterator.js';
import 'core-js/modules/es.symbol.iterator.js';
import 'core-js/modules/es.symbol.to-string-tag.js';
import 'core-js/modules/es.array.for-each.js';
import 'core-js/modules/es.array.iterator.js';
import 'core-js/modules/es.array.slice.js';
import 'core-js/modules/es.function.name.js';
import 'core-js/modules/es.json.to-string-tag.js';
import 'core-js/modules/es.math.to-string-tag.js';
import 'core-js/modules/es.object.get-prototype-of.js';
import 'core-js/modules/es.object.set-prototype-of.js';
import 'core-js/modules/es.object.to-string.js';
import 'core-js/modules/es.promise.js';
import 'core-js/modules/es.regexp.to-string.js';
import 'core-js/modules/es.string.iterator.js';
import 'core-js/modules/web.dom-collections.for-each.js';
import 'core-js/modules/web.dom-collections.iterator.js';
import _typeof from '@babel/runtime/helpers/typeof';
import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import 'core-js/modules/es.object.assign.js';
import 'core-js/modules/es.array.concat.js';
import 'core-js/modules/es.regexp.exec.js';
import 'core-js/modules/es.string.split.js';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/inherits';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
  var runtime = function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.

    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }

    try {
      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
      define({}, "");
    } catch (err) {
      define = function define(obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.

      generator._invoke = makeInvokeMethod(innerFn, self, context);
      return generator;
    }

    exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.

    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.

    var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.


    var IteratorPrototype = {};

    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.

    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }

    exports.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };

    exports.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }

      genFun.prototype = Object.create(Gp);
      return genFun;
    }; // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.


    exports.awrap = function (arg) {
      return {
        __await: arg
      };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);

        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;

          if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function (unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function (error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
        // invocations of the iterator.
        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      } // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).


      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);

    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };

    exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.

    exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          } // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;
          var record = tryCatch(innerFn, self, context);

          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted; // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.

            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    } // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.


    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];

      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

        context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.

        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }
      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      } // The delegate iterator is finished, so forget it and continue with
      // the outer generator.


      context.delegate = null;
      return ContinueSentinel;
    } // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.


    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.

    Gp[iteratorSymbol] = function () {
      return this;
    };

    Gp.toString = function () {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function (object) {
      var keys = [];

      for (var key in object) {
        keys.push(key);
      }

      keys.reverse(); // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.

      return function next() {
        while (keys.length) {
          var key = keys.pop();

          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        } // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.


        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];

        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;
            return next;
          };

          return next.next = next;
        }
      } // Return an iterator with no values.


      return {
        next: doneResult
      };
    }

    exports.values = values;

    function doneResult() {
      return {
        value: undefined$1,
        done: true
      };
    }

    Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        this.prev = 0;
        this.next = 0; // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.

        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined$1;
        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },
      stop: function stop() {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;

        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;

        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },
      complete: function complete(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;

            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }

            return thrown;
          }
        } // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.


        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    }; // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.

    return exports;
  }( // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports );

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }
});

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
function binarySearch(_x, _x2, _x3) {
  return _binarySearch.apply(this, arguments);
}

function _binarySearch() {
  _binarySearch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(ctx, text, maxWidth) {
    var result, metrics, str, left, right, anchor, _maxWidth, width;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = [];

          case 1:
            if (!(text.length > 0)) {
              _context.next = 16;
              break;
            }

            metrics = ctx.measureText(text); // 如果宽度较小

            if (!(metrics.width <= maxWidth)) {
              _context.next = 6;
              break;
            }

            result.push(text);
            return _context.abrupt("break", 16);

          case 6:
            // 宽度较大
            str = text;
            left = 0;
            right = str.length - 1;
            anchor = Math.floor((right + left) / 2);
            _maxWidth = maxWidth;

            while (right - left > 1) {
              width = ctx.measureText(str.substring(left, anchor)).width;

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
            _context.next = 1;
            break;

          case 16:
            return _context.abrupt("return", result);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _binarySearch.apply(this, arguments);
}

var defaultOptions = {
  filter: undefined,
  alpha: 1
};
var BasePart =
/** 渲染器，在渲染前将配置 */
function BasePart(options) {
  _classCallCheck(this, BasePart);

  _defineProperty(this, "renderer", null);

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
  font: 'sans-serif',
  singleLine: false,
  color: '000000',
  textAlign: 'left',
  orientation: 'horizontal'
};
var TextPart = /*#__PURE__*/function (_BasePart) {
  _inherits(TextPart, _BasePart);

  var _super = _createSuper(TextPart);

  /** 将自动折行 */

  /** 字体大小 */

  /** 需要手动指定行高 */

  /** 使用字体 */

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
    value: function () {
      var _drawCanvas = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(ctx) {
        var list, i, len, result, _i, _len, str;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(isUndef(this.value) || this.value === '' || this.value.length === 0)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                ctx.fillStyle = '#' + this.color;

                if (this.fontSize && this.font) {
                  // tip: 根据文档，ctx.font要求fontFamily和fontSize一起设置，并且一定要有两者
                  ctx.font = "".concat(this.fontSize, "px ").concat(this.font);
                }

                ctx.textAlign = this.textAlign; // 对于宽度有限制要求

                if (!(this.orientation === 'vertical')) {
                  _context.next = 11;
                  break;
                }

                list = [];

                if (isString(this.value)) {
                  list = this.value.split('');
                }

                for (i = 0, len = list.length; i < len; i++) {
                  ctx.fillText(list[i], this.origin.x, this.origin.y + i * this.lineHeight);
                }

                _context.next = 19;
                break;

              case 11:
                if (!(this.width && this.lineHeight)) {
                  _context.next = 18;
                  break;
                }

                _context.next = 14;
                return binarySearch(ctx, this.value, this.width);

              case 14:
                result = _context.sent;

                if (!this.singleLine) {
                  for (_i = 0, _len = result.length; _i < _len; _i++) {
                    ctx.fillText(result[_i], this.origin.x, this.origin.y + _i * this.lineHeight);
                  }
                } else {
                  str = result.length > 1 ? result[0].substr(0, result[0].length - 1) + '..' : result[0];
                  ctx.fillText(str, this.origin.x, this.origin.y);
                }

                _context.next = 19;
                break;

              case 18:
                ctx.fillText(this.value, this.origin.x, this.origin.y);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function drawCanvas(_x) {
        return _drawCanvas.apply(this, arguments);
      }

      return drawCanvas;
    }()
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
    value: function () {
      var _drawCanvas = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(ctx) {
        var elm, origin, size, clip;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!isUndef(this.value)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                if (this.renderer) {
                  _context.next = 4;
                  break;
                }

                throw new Error('Cannot find renderer.');

              case 4:
                if (this.renderer.options) {
                  _context.next = 6;
                  break;
                }

                throw new Error('Cannot find renderer.options, use renderer.generate function first.');

              case 6:
                elm = null;

                if (!isString(this.value)) {
                  _context.next = 13;
                  break;
                }

                _context.next = 10;
                return loadImage(this.value, true);

              case 10:
                elm = _context.sent;
                _context.next = 14;
                break;

              case 13:
                elm = this.value;

              case 14:
                origin = this.origin;
                size = this.size;
                clip = this.clip;

                if (!clip) {
                  ctx.drawImage(elm, origin.x, origin.y, size.width, size.height);
                } else {
                  ctx.drawImage(elm, clip.origin.x, clip.origin.y, clip.size.width, clip.size.height, origin.x, origin.y, size.width, size.height);
                }

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function drawCanvas(_x) {
        return _drawCanvas.apply(this, arguments);
      }

      return drawCanvas;
    }()
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
    value: function () {
      var _drawCanvas = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(ctx) {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ctx.fillStyle = '#' + this.backgroundColor;
                ctx.fillRect(this.origin.x, this.origin.y, this.size.width, this.size.height);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function drawCanvas(_x) {
        return _drawCanvas.apply(this, arguments);
      }

      return drawCanvas;
    }()
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
    value: function () {
      var _drawCanvas = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(ctx) {
        var gradient, _iterator, _step, stop;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                gradient = ctx.createLinearGradient(this.start.x, this.start.y, this.end.x, this.end.y);
                _iterator = _createForOfIteratorHelper(this.stop);

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    stop = _step.value;
                    gradient.addColorStop(stop.pos, stop.color);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                ctx.fillStyle = gradient;
                ctx.fillRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function drawCanvas(_x) {
        return _drawCanvas.apply(this, arguments);
      }

      return drawCanvas;
    }()
  }]);

  return LinearGradientPart;
}(BasePart);

function _createForOfIteratorHelper$1(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var Renderer = /*#__PURE__*/function () {
  function Renderer() {
    _classCallCheck(this, Renderer);

    _defineProperty(this, "parts", []);

    _defineProperty(this, "options", null);
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
    value: function () {
      var _generate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(options) {
        var canvasElm, ctx, _iterator, _step, part, parts, i, len, _part;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.options = this.getOptions(options);
                canvasElm = this.options.createCanvas();
                canvasElm.width = this.options.width;
                canvasElm.height = this.options.height;
                ctx = canvasElm.getContext('2d');

                if (ctx) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", false);

              case 7:
                _iterator = _createForOfIteratorHelper$1(this.parts);
                _context.prev = 8;

                _iterator.s();

              case 10:
                if ((_step = _iterator.n()).done) {
                  _context.next = 28;
                  break;
                }

                part = _step.value;
                parts = isArray(part) ? part : [part];
                i = 0, len = parts.length;

              case 14:
                if (!(i < len)) {
                  _context.next = 26;
                  break;
                }

                _part = parts[i];
                _part.renderer = this;
                ctx.save();

                if (!isUndef(_part.alpha)) {
                  ctx.globalAlpha = _part.alpha;
                }

                if (_part.filter) {
                  // image.style.filter = 'blur(20px)';
                  ctx.filter = 'blur(20px)';
                }

                _context.next = 22;
                return _part.drawCanvas(ctx);

              case 22:
                ctx.restore();

              case 23:
                i++;
                _context.next = 14;
                break;

              case 26:
                _context.next = 10;
                break;

              case 28:
                _context.next = 33;
                break;

              case 30:
                _context.prev = 30;
                _context.t0 = _context["catch"](8);

                _iterator.e(_context.t0);

              case 33:
                _context.prev = 33;

                _iterator.f();

                return _context.finish(33);

              case 36:
                return _context.abrupt("return", canvasElm);

              case 37:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[8, 30, 33, 36]]);
      }));

      function generate(_x) {
        return _generate.apply(this, arguments);
      }

      return generate;
    }()
  }, {
    key: "generateSrc",
    value: function () {
      var _generateSrc = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(options) {
        var canvasElm;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                options = this.getOptions(options);
                _context2.next = 3;
                return this.generate(options);

              case 3:
                canvasElm = _context2.sent;

                if (canvasElm) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", false);

              case 6:
                return _context2.abrupt("return", canvasElm.toDataURL());

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function generateSrc(_x2) {
        return _generateSrc.apply(this, arguments);
      }

      return generateSrc;
    }()
  }, {
    key: "generateImage",
    value: function () {
      var _generateImage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(options) {
        var src, imageElm;
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.generateSrc(options);

              case 2:
                src = _context3.sent;

                if (src) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return", false);

              case 5:
                imageElm = options.createImage();
                imageElm.src = src;
                return _context3.abrupt("return", imageElm);

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function generateImage(_x3) {
        return _generateImage.apply(this, arguments);
      }

      return generateImage;
    }()
  }]);

  return Renderer;
}();

export { BasePart, ImagePart, LinearGradientPart, Point, Rect, RectPart, Renderer, Size, TextPart };
