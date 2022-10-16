const should = require('chai').should();

const mapper = require('../grid.js');

// make samples visually grokable
const O = false;
const X = true;

describe('char-subgrid', ()=>{
	it('can do a braille transformation', ()=>{
		let twoChars = mapper.braille([
			[X, O, O, X],
			[X, O, X, O],
			[O, O, X, X],
			[X, X, X, X]
		]);
		twoChars.should.equal("⣃⣮");
	});
	it('can do a block transformation', ()=>{
		let char = mapper.blocks([
			[X, O],
			[O, X]
		]);
		char.should.equal("▚");
	});
	it('can do a slant transformation', ()=>{
		let char = mapper.slants([
			[X, O],
			[X, X]
		]);
		char.should.equal("◣");
	});
});