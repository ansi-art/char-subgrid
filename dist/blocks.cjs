(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./single-char.cjs"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./single-char.cjs"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.singleChar);
    global.blocks = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _singleChar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Blocks = void 0;
  /**
   * Generate threshold maps as block characters
   * @module @ansi-art/char-subgrid/src/blocks
   */
  var blocksMap = {
    '1': '▘',
    '2': '▝',
    '3': '▖',
    '4': '▗',
    '12': '▀',
    '13': '▌',
    '14': '▚',
    '23': '▐',
    '24': '▞',
    '34': '▄',
    '134': '▙',
    '124': '▜',
    '123': '▛',
    '234': '▟',
    '1234': '█',
    '': ' '
  };
  /**
   * UTF Block based SubGridTransformer
   * @class AsciiCharBlocksTransformer
   * @classdesc This transformer takes a threshold map and converts them to binary values using 4 bits per character
   * @extends AsciiCharSingleCharTransformer
   */
  const Blocks = _singleChar.Transformer.extend({}, function () {
    this.map = blocksMap;
  });
  _exports.Blocks = Blocks;
});