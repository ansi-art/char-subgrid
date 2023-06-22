(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "extend-interface/extend-interface.cjs"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("extend-interface/extend-interface.cjs"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.extendInterface);
    global.transform = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _extendInterface) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Transformer = void 0;
  /**
   * Generate threshold maps base class
   * @module @ansi-art/char-subgrid/src/transform
   */
  /**
   * The default constructor for SubGridTransformer
   * @class SubGridTransformer
   * @classdesc This provides an abstraction for grid based editing and compositing
   */
  const Transformer = function () {};

  /**
   * The map implementation (provided by implementations)
   * @function mapTo
   * @param {string} value
   * @param {function} mapFunction
   * @returns {object} mappedValue
   */
  _exports.Transformer = Transformer;
  Transformer.prototype.mapTo = function (value, map) {
    throw new Error('.mapTo() not implemented!');
  };

  /**
   * The map implementation (provided by implementations)
   * @function transform
   * @param {string} chunk
   * @returns {object} transformedValue
   */
  Transformer.prototype.transform = function (chunk) {
    if (!this.map) throw new Error('No map available');
    return this.mapTo(chunk, this.map);
  };

  /**
   * The map implementation (provided by implementations)
   * @function extend
   * @param {object} memberFunctions
   * @param {function} constructor
   * @returns {Class} extendedSubGridTransformer
   */
  Transformer.extend = function (cls, cns) {
    var cons = cns || function () {
      Transformer.apply(this, arguments);
      return this;
    };
    return (0, _extendInterface.extend)(cls, cons, Transformer);
  };
});