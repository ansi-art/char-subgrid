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

const quadToChars = function(quad, map){
    /**
     * Generate threshold maps as dual quads base class
     * @module @ansi-art/char-subgrid/src/double-char
     */
    // a braille quad is 2 side by side chars 4x4
    // | 1 5 |
    // | 2 6 |
    // | 3 7 |
    // | 4 8 |
    var bitsOne = [
        quad[0][0],
        quad[1][0],
        quad[2][0],
        quad[3][0],
        quad[0][1],
        quad[1][1],
        quad[2][1],
        quad[3][1]
    ];
    var bitsTwo = [
        quad[0][2],
        quad[1][2],
        quad[2][2],
        quad[3][2],
        quad[0][3],
        quad[1][3],
        quad[2][3],
        quad[3][3]
    ];
    return mapBitsToChar(boolArr2DToIndexes(bitsOne).join(''), map)+
        mapBitsToChar(boolArr2DToIndexes(bitsTwo).join(''), map);
};

/**
 * UTF Block based SubGridTransformer
 * @class AsciiCharDoubleCharTransformer
 * @classdesc This transformer converts a threshold map into 4x2 compact character matrices so each 4x4 is 2 chars. 
 *    | 1 5 | 9  13 |
 *    | 2 6 | 10 14 |
 *    | 3 7 | 11 15 |
 *    | 4 8 | 12 16 |
 * @extends SubGridTransformer
 */
export const Transformer = TransformerBase.extend({
    mapTo : function(value, map){
        return quadToChars(value, map);
    }
});