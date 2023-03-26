(function (root, factory){
    if(typeof define === 'function' && define.amd){
        // AMD. Register as an anonymous module.
        define([
            './src/blocks', 
            './src/braille', 
            './src/slants'
        ], factory);
    }else if (typeof module === 'object' && module.exports){
        module.exports = factory(
            require('./src/blocks'), 
            require('./src/braille'), 
            require('./src/slants')
        );
    }else{
        // Browser globals (root is window)
        if(!root.Ascii) root.Ascii = {};
        if(!root.Ascii.Char) root.Ascii.Char = {};
        root.Ascii.Char.Grid = factory(
            root.Ascii.Char.BlocksTransformer, 
            root.Ascii.Char.BrailleTransformer,
            root.Ascii.Char.SlantsTransformer
        );
    }
}(this, function(Blocks, Braille, Slants){
    const blocks = new Blocks();
    const braille = new Braille();
    const slants = new Slants();
    return {
        Blocks, Braille, Slants,
        blocks : (str)=>{
            return blocks.transform(str);
        },
        braille : (str)=>{
            return braille.transform(str);
        },
        slants : (str)=>{
            return slants.transform(str);
        },
    };
}));