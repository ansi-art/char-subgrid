(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./dist/blocks.cjs", "./dist/braille.cjs", "./dist/slants.cjs"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./dist/blocks.cjs"), require("./dist/braille.cjs"), require("./dist/slants.cjs"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.blocks, global.braille, global.slants);
    global.grid = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _blocks, _braille, _slants) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "Blocks", {
    enumerable: true,
    get: function () {
      return _blocks.Blocks;
    }
  });
  Object.defineProperty(_exports, "Braille", {
    enumerable: true,
    get: function () {
      return _braille.Braille;
    }
  });
  Object.defineProperty(_exports, "Slants", {
    enumerable: true,
    get: function () {
      return _slants.Slants;
    }
  });
  _exports.slants = _exports.braille = _exports.blocks = void 0;
  const someblocks = new _blocks.Blocks();
  const somebraille = new _braille.Braille();
  const someslants = new _slants.Slants();
  const blocks = str => {
    return someblocks.transform(str);
  };
  _exports.blocks = blocks;
  const braille = str => {
    return somebraille.transform(str);
  };
  _exports.braille = braille;
  const slants = str => {
    return someslants.transform(str);
  };
  _exports.slants = slants;
});

