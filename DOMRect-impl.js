(function(global, binding, v8) {
  "use strict";

  // See DOMPointReadOnly-impl.js for more explanatory comments.

  const DOMRectReadOnlyImpl = binding.DOMRectReadOnlyImpl;

  binding.DOMRectImpl = class extends DOMRectReadOnlyImpl {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }

    fromRect(other) {
      return new binding.DOMRectImpl(other.x, other.y, other.width, other.height);
    }
  };
});
