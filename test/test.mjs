/* global describe:false, it:false */
import { chai } from 'environment-safe-chai';
import { braille, blocks, slants } from '../grid.mjs';
const should = chai.should();

// make samples visually grokable
const O = false;
const X = true;

describe('char-subgrid', ()=>{
    it('can do a braille transformation', ()=>{
        should.exist(braille);
        let twoChars = braille([
            [X, O, O, X],
            [X, O, X, O],
            [O, O, X, X],
            [X, X, X, X]
        ]);
        twoChars.should.equal('⣃⣮');
    });
    it('can do a block transformation', ()=>{
        should.exist(blocks);
        let char = blocks([
            [X, O],
            [O, X]
        ]);
        char.should.equal('▚');
    });
    it('can do a slant transformation', ()=>{
        should.exist(slants);
        let char = slants([
            [X, O],
            [X, X]
        ]);
        char.should.equal('◣');
    });
});