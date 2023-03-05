<a name="module_@ansi-art/char-subgrid/src/double-char"></a>

## @ansi-art/char-subgrid/src/double-char
Generate threshold maps as dual quads base class


* [@ansi-art/char-subgrid/src/double-char](#module_@ansi-art/char-subgrid/src/double-char)
    * [~AsciiCharDoubleCharTransformer](#module_@ansi-art/char-subgrid/src/double-char..AsciiCharDoubleCharTransformer) ⇐ <code>SubGridTransformer</code>
        * [new AsciiCharDoubleCharTransformer()](#new_module_@ansi-art/char-subgrid/src/double-char..AsciiCharDoubleCharTransformer_new)

<a name="module_@ansi-art/char-subgrid/src/double-char..AsciiCharDoubleCharTransformer"></a>

### @ansi-art/char-subgrid/src/double-char~AsciiCharDoubleCharTransformer ⇐ <code>SubGridTransformer</code>
This transformer converts a threshold map into 4x2 compact character matrices so each 4x4 is 2 chars. 
   | 1 5 | 9  13 |
   | 2 6 | 10 14 |
   | 3 7 | 11 15 |
   | 4 8 | 12 16 |

**Kind**: inner class of [<code>@ansi-art/char-subgrid/src/double-char</code>](#module_@ansi-art/char-subgrid/src/double-char)  
**Extends**: <code>SubGridTransformer</code>  
<a name="new_module_@ansi-art/char-subgrid/src/double-char..AsciiCharDoubleCharTransformer_new"></a>

#### new AsciiCharDoubleCharTransformer()
UTF Block based SubGridTransformer

