<a name="module_@ansi-art/char-subgrid/src/transform"></a>

## @ansi-art/char-subgrid/src/transform
Generate threshold maps base class


* [@ansi-art/char-subgrid/src/transform](#module_@ansi-art/char-subgrid/src/transform)
    * [~SubGridTransformer](#module_@ansi-art/char-subgrid/src/transform..SubGridTransformer)
        * [new SubGridTransformer()](#new_module_@ansi-art/char-subgrid/src/transform..SubGridTransformer_new)
    * [~mapTo(value, mapFunction)](#module_@ansi-art/char-subgrid/src/transform..mapTo) ⇒ <code>object</code>
    * [~transform(chunk)](#module_@ansi-art/char-subgrid/src/transform..transform) ⇒ <code>object</code>
    * [~extend(memberFunctions, constructor)](#module_@ansi-art/char-subgrid/src/transform..extend) ⇒ <code>Class</code>

<a name="module_@ansi-art/char-subgrid/src/transform..SubGridTransformer"></a>

### @ansi-art/char-subgrid/src/transform~SubGridTransformer
This provides an abstraction for grid based editing and compositing

**Kind**: inner class of [<code>@ansi-art/char-subgrid/src/transform</code>](#module_@ansi-art/char-subgrid/src/transform)  
<a name="new_module_@ansi-art/char-subgrid/src/transform..SubGridTransformer_new"></a>

#### new SubGridTransformer()
The default constructor for SubGridTransformer

<a name="module_@ansi-art/char-subgrid/src/transform..mapTo"></a>

### @ansi-art/char-subgrid/src/transform~mapTo(value, mapFunction) ⇒ <code>object</code>
The map implementation (provided by implementations)

**Kind**: inner method of [<code>@ansi-art/char-subgrid/src/transform</code>](#module_@ansi-art/char-subgrid/src/transform)  
**Returns**: <code>object</code> - mappedValue  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 
| mapFunction | <code>function</code> | 

<a name="module_@ansi-art/char-subgrid/src/transform..transform"></a>

### @ansi-art/char-subgrid/src/transform~transform(chunk) ⇒ <code>object</code>
The map implementation (provided by implementations)

**Kind**: inner method of [<code>@ansi-art/char-subgrid/src/transform</code>](#module_@ansi-art/char-subgrid/src/transform)  
**Returns**: <code>object</code> - transformedValue  

| Param | Type |
| --- | --- |
| chunk | <code>string</code> | 

<a name="module_@ansi-art/char-subgrid/src/transform..extend"></a>

### @ansi-art/char-subgrid/src/transform~extend(memberFunctions, constructor) ⇒ <code>Class</code>
The map implementation (provided by implementations)

**Kind**: inner method of [<code>@ansi-art/char-subgrid/src/transform</code>](#module_@ansi-art/char-subgrid/src/transform)  
**Returns**: <code>Class</code> - extendedSubGridTransformer  

| Param | Type |
| --- | --- |
| memberFunctions | <code>object</code> | 
| constructor | <code>function</code> | 

