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
	let SubGridTransformer = function(){ };
	
	SubGridTransformer.prototype.mapTo = function(value, map){
		throw new Error(".mapTo() not implemented!");
	};
	
	SubGridTransformer.prototype.transform = function(chunk){
		if (!this.map) throw new Error("No map available");
		return this.mapTo(chunk, this.map);
	};
	SubGridTransformer.extend = function(cls, cns){
		var cons = cns || function(){
			MyClass.apply(this, arguments);
			return this;
		};
		return extendInterface(cls, cons, SubGridTransformer);
	};
	return SubGridTransformer;
}));