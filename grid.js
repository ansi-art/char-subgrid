const Blocks = require('./src/blocks');
const Braille = require('./src/braille');
const Slants = require('./src/slants');

const blocks = new Blocks();
const braille = new Braille();
const slants = new Slants();
module.exports = {
	blocks : (str)=>{
		return blocks.transform(str);
	},
	braille : (str)=>{
		return braille.transform(str);
	},
	slants : (str)=>{
		return slants.transform(str);
	},
}