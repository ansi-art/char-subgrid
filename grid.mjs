import { Blocks } from './src/blocks.mjs';
import { Braille } from './src/braille.mjs';
import { Slants } from './src/slants.mjs';

const someblocks = new Blocks();
const somebraille = new Braille();
const someslants = new Slants();

export const blocks = (str)=>{
    return someblocks.transform(str);
};
export const braille = (str)=>{
    return somebraille.transform(str);
};
export const slants = (str)=>{
    return someslants.transform(str);
};

export { Blocks, Braille, Slants };