(function (root, factory){
    if(typeof define === 'function' && define.amd){
        // AMD. Register as an anonymous module.
        define(['./single-char'], factory);
    }else if (typeof module === 'object' && module.exports){
        module.exports = factory(require('./single-char'));
    }else{
        // Browser globals (root is window)
        if(!root.Ascii) root.Ascii = {};
        if(!root.Ascii.Char) root.Ascii.Char = {};
        root.Ascii.Char.SlantsTransformer = factory(root.Ascii.Char.SingleCharTransformer);
    }
}(this, function(Transformer){
    var slantsMap = {
        '1':'▘',
        '2':'▝',
        '3':'▖',
        '4':'▗',
        '12':'▀',
        '13':'▌',
        '14':'╲',
        '23':'▐',
        '24':'╱',
        '34':'▄',
        '134':'◣',
        '124':'◥',
        '123':'◤',
        '234':'◢',
        '1234':'█',
        '':' '
    };
    /**
     * UTF Block based SubGridTransformer
     * @class AsciiCharSlantsTransformer
     * @classdesc This transformer takes a threshold map and converts them to binary values using 4 bits per character
     * @extends AsciiCharSingleCharTransformer
     */
    return Transformer.extend({}, function(){
        this.map = slantsMap;
    });
}));