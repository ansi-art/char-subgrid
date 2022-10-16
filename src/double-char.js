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
	
(function (root, factory){
	if(typeof define === 'function' && define.amd){
		// AMD. Register as an anonymous module.
		define(['./transform'], factory);
	}else if (typeof module === 'object' && module.exports){
		module.exports = factory(require('./transform'));
	}else{
		// Browser globals (root is window)
		if(!root.Ascii) root.Ascii = {};
		if(!root.Ascii.Char) root.Ascii.Char = {};
		root.Ascii.Char.DoubleCharTransformer = factory(root.Ascii.Char.Transformer);
	}
}(this, function(Transformer){
	return Transformer.extend({
		mapTo : function(value, map){
			return quadToChars(value, map);
		}
	});
}));