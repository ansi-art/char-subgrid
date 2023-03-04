/**
 * UTF Block based SubGridTransformer
 */
declare class AsciiCharBlocksTransformer extends AsciiCharSingleCharTransformer {
}

/**
 * UTF Block based SubGridTransformer
 */
declare class AsciiCharBlocksTransformer extends AsciiCharSingleCharTransformer {
}

/**
 * UTF Block based SubGridTransformer
 */
declare class AsciiCharSingleCharTransformer extends SubGridTransformer {
}

/**
 * UTF Block based SubGridTransformer
 */
declare class AsciiCharSlantsTransformer extends AsciiCharSingleCharTransformer {
}

/**
 * The default constructor for SubGridTransformer
 */
declare class SubGridTransformer {
}

/**
 * The map implementation (provided by implementations)
 * @returns mappedValue
 */
declare function mapTo(value: string, mapFunction: (...params: any[]) => any): any;

/**
 * The map implementation (provided by implementations)
 * @returns transformedValue
 */
declare function transform(chunk: string): any;

/**
 * The map implementation (provided by implementations)
 * @returns extendedSubGridTransformer
 */
declare function extend(memberFunctions: any, constructor: (...params: any[]) => any): Class;

