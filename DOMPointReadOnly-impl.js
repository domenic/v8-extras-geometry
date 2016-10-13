(function(global, binding, v8) {
  "use strict";

  // `extends null` is important so the constructor doesn't trigger setters
  // But this needs https://bugs.chromium.org/p/v8/issues/detail?id=5115 to be fixed first
  binding.DOMPointReadOnlyImpl = class extends null {
    constructor(x, y, z, w) {
      // All conversions and defaulting has been taken care of for us.

      this.x = x;
      this.y = y;
      this.z = z;
      this.w = w;
    }

    static fromPoint(other) {
      // The generated code will wrap this up for us. Impl code should never/rarely need to deal with wrappers.
      return new binding.DOMPointReadOnlyImpl(other.x, other.y, other.z, other.w);
    }

    matrixTransform(matrix) {
      // TODO
      // Would require doing DOMPoint and DOMMatrixInit, not just DOMPointReadOnly
      // But it's basically a bunch of math; nothing tricky about it.
    }

    // No need for x/y/z/w getters; setting them as data properties in the constructor is enough.
    // The wrapper will have getters which delegate to the impl class's data properties.
  }
});
