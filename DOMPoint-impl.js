(function(global, binding, v8) {
  "use strict";

  const DOMPointReadOnlyImpl = binding.DOMPointReadOnlyImpl;

  // See DOMPointReadOnly-impl.js for more explanatory comments.

  // The extends here is not necessary, but is useful, as it allows us to automatically get matrixTransform
  binding.DOMPointImpl = class extends DOMPointReadOnlyImpl {
    constructor(x, y, z, w) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.w = w;
    }

    static fromPoint(other) {
      return new binding.DOMPointImpl(other.x, other.y, other.z, other.w);
    }
  }
});
