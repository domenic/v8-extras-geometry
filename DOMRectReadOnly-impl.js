(function(global, binding, v8) {
  "use strict";

  // See DOMPointReadOnly-impl.js for more explanatory comments.

  const min = global.Math.min;
  const max = global.Math.max;

  binding.DOMRectReadOnlyImpl = class extends null {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }

    get top() {
      return min(this.y, this.y + this.height);
    }

    get right() {
      return max(this.x, this.x + this.width);
    }

    get bottom() {
      return max(this.y, this.y + this.height);
    }

    get left() {
      return min(this.x, this.x + this.width);
    }

    fromRect(other) {
      return new binding.DOMRectReadOnlyImpl(other.x, other.y, other.width, other.height);
    }
  };
});
