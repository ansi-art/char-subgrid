(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./transform.cjs"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./transform.cjs"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.transform);
    global.singleChar = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Transformer = void 0;
  const mapBitsToChar = function (code, map) {
    if (map[code]) return map[code];
    console.log('CODE NOT FOUND:' + code);
    return ' ';
  };
  const boolArr2DToIndexes = function (arr) {
    return arr.map(function (val, index) {
      return val ? index + 1 + '' : '';
    });
  };
  const doubleToBlocks = function (mini, map) {
    /**
     * Generate threshold maps as mini-quads base class
     * @module @ansi-art/char-subgrid/src/single-char
     */
    // a mini quad is 1 char, 2x2
    // | 1 3 |
    // | 2 4 |
    /*
    var bits = [
        mini[0][0],
        mini[1][0],
        mini[0][1],
        mini[1][1]
    ];//*/
    //*
    var bits = [mini[0][0], mini[0][1], mini[1][0], mini[1][1]]; //*/
    return mapBitsToChar(boolArr2DToIndexes(bits).join(''), map);
  };

  /**
   * UTF Block based SubGridTransformer
   * @class AsciiCharSingleCharTransformer
   * @classdesc This transformer converts a threshold map into 2x2 compact character matrices
   * @extends SubGridTransformer
   */
  const Transformer = _transform.Transformer.extend({
    mapTo: function (value, map) {
      return doubleToBlocks(value, map);
    }
  });
  _exports.Transformer = Transformer;
});