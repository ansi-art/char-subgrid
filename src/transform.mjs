import { extend as extendInterface } from 'extend-interface/extend-interface.mjs';
/**
 * Generate threshold maps base class
 * @module @ansi-art/char-subgrid/src/transform
 */
/**
 * The default constructor for SubGridTransformer
 * @class SubGridTransformer
 * @classdesc This provides an abstraction for grid based editing and compositing
 */
export const Transformer = function(){ };

/**
 * The map implementation (provided by implementations)
 * @function mapTo
 * @param {string} value
 * @param {function} mapFunction
 * @returns {object} mappedValue
 */
Transformer.prototype.mapTo = function(value, map){
    throw new Error('.mapTo() not implemented!');
};

/**
 * The map implementation (provided by implementations)
 * @function transform
 * @param {string} chunk
 * @returns {object} transformedValue
 */
Transformer.prototype.transform = function(chunk){
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
Transformer.extend = function(cls, cns){
    var cons = cns || function(){
        Transformer.apply(this, arguments);
        return this;
    };
    return extendInterface(cls, cons, Transformer);
};
