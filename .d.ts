/**
 * Generate threshold maps as block characters
 */
declare module "@ansi-art/char-subgrid/src/blocks" {
    /**
     * UTF Block based SubGridTransformer
     */
    class AsciiCharBlocksTransformer extends AsciiCharSingleCharTransformer {
    }
}

/**
 * Generate threshold maps as braille characters
 */
declare module "@ansi-art/char-subgrid/src/braille" {
    /**
     * UTF Block based SubGridTransformer
     */
    class AsciiCharBlocksTransformer extends AsciiCharDoubleCharTransformer {
    }
}

/**
 * Generate threshold maps as dual quads base class
 */
declare module "@ansi-art/char-subgrid/src/double-char" {
    /**
     * UTF Block based SubGridTransformer
     */
    class AsciiCharDoubleCharTransformer extends SubGridTransformer {
    }
}

/**
 * Generate threshold maps as mini-quads base class
 */
declare module "@ansi-art/char-subgrid/src/single-char" {
    /**
     * UTF Block based SubGridTransformer
     */
    class AsciiCharSingleCharTransformer extends SubGridTransformer {
    }
}

/**
 * Generate threshold maps as slanted characters
 */
declare module "@ansi-art/char-subgrid/src/slants" {
    /**
     * UTF Block based SubGridTransformer
     */
    class AsciiCharSlantsTransformer extends AsciiCharSingleCharTransformer {
    }
}

/**
 * Generate threshold maps base class
 */
declare module "@ansi-art/char-subgrid/src/transform" {
    /**
     * The default constructor for SubGridTransformer
     */
    class SubGridTransformer {
    }
    /**
     * The map implementation (provided by implementations)
     * @returns mappedValue
     */
    function mapTo(value: string, mapFunction: (...params: any[]) => any): any;
    /**
     * The map implementation (provided by implementations)
     * @returns transformedValue
     */
    function transform(chunk: string): any;
    /**
     * The map implementation (provided by implementations)
     * @returns extendedSubGridTransformer
     */
    function extend(memberFunctions: any, constructor: (...params: any[]) => any): Class;
}

