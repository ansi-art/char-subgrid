import { Transformer } from './single-char.mjs';

/**
 * Generate threshold maps as block characters
 * @module @ansi-art/char-subgrid/src/blocks
 */
var blocksMap = {
    '1':'▘',
    '2':'▝',
    '3':'▖',
    '4':'▗',
    '12':'▀',
    '13':'▌',
    '14':'▚',
    '23':'▐',
    '24':'▞',
    '34':'▄',
    '134':'▙',
    '124':'▜',
    '123':'▛',
    '234':'▟',
    '1234':'█',
    '':' '
};
/**
 * UTF Block based SubGridTransformer
 * @class AsciiCharBlocksTransformer
 * @classdesc This transformer takes a threshold map and converts them to binary values using 4 bits per character
 * @extends AsciiCharSingleCharTransformer
 */
export const Blocks = Transformer.extend({}, function(){
    this.map = blocksMap;
});