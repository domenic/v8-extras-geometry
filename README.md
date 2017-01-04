# V8 Extras Geometry

This is a proof-of-concept, untested implementation of some parts of the [Geometry](https://drafts.fxtf.org/geometry/) spec using [V8 extras](https://bit.ly/v8-extras).

It's specifically written in a fashion that might be amenable to code generation, with the `-generated.js` files being all something that a sufficiently-smart code generator could write, and the `-impl.js` files being something a human would write.

Inspiration for this type of "Web IDL bindings in JavaScript" can be seen in the [jsdom project](https://github.com/tmpvar/jsdom), and its [webidl2js](https://github.com/jsdom/webidl2js) library.

## What's missing

Web IDL mixins (e.g. `Element implements ChildNode`) are a bit tricky to do correctly as well, and might be worth exploring. The Geometry spec does not have any of those, however.

Classes that are not `[Exposed=(Window,Worker)]` need a bit more infrastructure in place to only expose in the appropriate globals. I'm not sure what that would look like yet.

## Miscellaneous notes

### File execution order

This would be coded into Chrome's `.gn` files, given that we have no other way of expressing dependencies for now, until JavaScript modules land and V8 extras support them:

- web-idl-setup.js
- DOMPointReadOnly-impl.js
- DOMPoint-impl.js
- DOMPointInit-generated.js
- DOMPointReadOnly-generated.js
- DOMPoint-generated.js

### Dictionaries

Dictionaries are represented as `Object.create(null)` objects. Absent dictionary entries are represented by `undefined` instead of having their properties be absent; there's no way in Web IDL for a dictionary entry to be present but `undefined`, and this route ensures a consistent object shape.

### Conversions

The Geometry spec is rather light on conversions, using `unrestricted double` everywhere, for which the conversion is just ToNumber(x) (i.e. `+x`). In the generated files, we use a more general framework:

```js
dict.x = binding.webIDL.conversions['unrestricted double'](value_x);
```

However, in cases like this (and others, such as various numeric types, `object`, `any`, etc.) it's probably wise to inline the conversion code directly:

```js
dict.x = +value_x;
```

### Brand checking

Brand checking is currently performed via an array that contains string brands:

```js
if (!this[_brands].includes('DOMPointReadOnly')) {
```

(The brands are installed by the constructor.) There are several possibly-better designs here, such as using a `Set`, or using numeric brands instead of string ones.

One rather different possibility, which jsdom uses, is consolidating the brand-checking mechanism with the backing implementation class; that is, something brand-checks as a `DOMPointReadOnly` if and only if it has a backing implementation that is `instanceof DOMPointReadOnlyImpl`. This can be slightly messy with inheritance and Web IDL mixins, however, so I did not include it here.
