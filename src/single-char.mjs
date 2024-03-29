import { Transformer as TransformerBase } from './transform.mjs';
const mapBitsToChar = function(code, map){
    if(map[code]) return map[code];
    console.log('CODE NOT FOUND:'+code);
    return ' ';
};

const boolArr2DToIndexes = function(arr){
    return arr.map(function(val, index){
        return val?(index+1)+'':'';
    });
};

const doubleToBlocks = function(mini, map){
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
    var bits = [
        mini[0][0],
        mini[0][1],
        mini[1][0],
        mini[1][1]
    ]; //*/
    return mapBitsToChar(boolArr2DToIndexes(bits).join(''), map);
};

/**
 * UTF Block based SubGridTransformer
 * @class AsciiCharSingleCharTransformer
 * @classdesc This transformer converts a threshold map into 2x2 compact character matrices
 * @extends SubGridTransformer
 */
export const Transformer = TransformerBase.extend({
    mapTo : function(value, map){
        return doubleToBlocks(value, map);
    }
});