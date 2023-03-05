AsciiArt.CharSubGrid
====================
Bridging the gap between 1 dimensional strings + control characters and 2 dimensional canvases

Blocks
------
This class works in single character 4x4 unicode square grids to convert 2d data to grids of characters

[AsciiCharBlocksTransformer](docs/blocks.md)is an instance of [AsciiCharSingleCharTransformer](docs/single-char.md)

Braille
-------
This class works in double character 8x8 unicode square grids to convert 2d data to grids of characters

[AsciiCharBrailleTransformer](docs/braille.md)is an instance of [AsciiCharDoubleCharTransformer](docs/double-char.md)

Slants
------
This class works in single character 4x4 unicode square grids to convert 2d data to grids of characters
    
[AsciiCharSlantsTransformer](docs/slants.md)is an instance of [AsciiCharSingleCharTransformer](docs/single-char.md)

Testing
-------

just run `npm run test` or `npm run container-test`

Contribution
------------

Please PR contributions against `develop` with [jsdoc](https://jsdoc.app/) and [mocha](https://mochajs.org/) [tests](https://github.com/ansi-art/char-subgrid/blob/master/test/test.js) for the new functionality in place.

The project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) and the [Fork + PR](https://gist.github.com/Chaser324/ce0505fbed06b947d962) development model.

All activities in the project are available as npm actions.


Enjoy,

Abbey Hawk Sparrow

