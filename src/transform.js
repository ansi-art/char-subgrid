(function (root, factory){
    if(typeof define === 'function' && define.amd){
        // AMD. Register as an anonymous module.
        define(['extend-interface'], factory);
    }else if (typeof module === 'object' && module.exports){
        module.exports = factory(require('extend-interface'));
    }else{
        // Browser globals (root is window)
        if(!root.Ascii) root.Ascii = {};
        if(!root.Ascii.Char) root.Ascii.Char = {};
        root.Ascii.Char.Transformer = factory(root.extendInterface);
    }
}(this, function(extendInterface){
    /**
     * The default constructor for SubGridTransformer
     * @class SubGridTransformer
     * @classdesc This provides an abstraction for grid based editing and compositing
     */
    let SubGridTransformer = function(){ };
    
    /**
     * The map implementation (provided by implementations)
     * @function mapTo
     * @param {string} value
     * @param {function} mapFunction
     * @returns {object} mappedValue
     */
    SubGridTransformer.prototype.mapTo = function(value, map){
        throw new Error('.mapTo() not implemented!');
    };
    
    /**
     * The map implementation (provided by implementations)
     * @function transform
     * @param {string} chunk
     * @returns {object} transformedValue
     */
    SubGridTransformer.prototype.transform = function(chunk){
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
    SubGridTransformer.extend = function(cls, cns){
        var cons = cns || function(){
            SubGridTransformer.apply(this, arguments);
            return this;
        };
        return extendInterface(cls, cons, SubGridTransformer);
    };
    return SubGridTransformer;
}));