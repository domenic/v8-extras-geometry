// Assumptions:
// - Array.prototype.includes gets copied over to v8.InternalArray.prototype

(function(global, binding, v8) {
  'use strict';

  const DOMRectReadOnlyImpl = binding.DOMRectReadOnlyImpl;

  const TypeError = global.TypeError;
  const Object_defineProperty = global.Object.defineProperty;
  const Object_create = global.Object.create;
  const toStringTag = global.Symbol.toStringTag;

  const _impl = binding.webIDL.implSymbol;
  const _brands = binding.webIDL.brandsSymbol;

  class DOMRectReadOnly {
    constructor(x = 0, y = 0, width = 0, height = 0) {
      x = binding.webIDL.conversions['unrestricted double'](x);
      y = binding.webIDL.conversions['unrestricted double'](y);
      width = binding.webIDL.conversions['unrestricted double'](width);
      height = binding.webIDL.conversions['unrestricted double'](height);

      this[_brands] = new v8.InternalPackedArray('DOMRectReadOnly');
      this[_impl] = new DOMRectReadOnlyImpl(x, y, width, height);
    }

    static fromRect(other) {
      other = binding.webIDL.dictionaries.DOMRectInit(other);

      const implReturnValue = DOMRectReadOnlyImpl.fromRect(other);
      return binding.webIDL.implsToWrappers.DOMRectReadOnly(implReturnValue);
    }

    get x() {
      if (!this[_brands].includes('DOMRectReadOnly')) {
        throw new TypeError('Illegal invocation');
      }

      return this[_impl].x;
    }

    get y() {
      if (!this[_brands].includes('DOMRectReadOnly')) {
        throw new TypeError('Illegal invocation');
      }

      return this[_impl].y;
    }

    get width() {
      if (!this[_brands].includes('DOMRectReadOnly')) {
        throw new TypeError('Illegal invocation');
      }

      return this[_impl].width;
    }

    get height() {
      if (!this[_brands].includes('DOMRectReadOnly')) {
        throw new TypeError('Illegal invocation');
      }

      return this[_impl].height;
    }

    get top() {
      if (!this[_brands].includes('DOMRectReadOnly')) {
        throw new TypeError('Illegal invocation');
      }

      return this[_impl].top;
    }

    get right() {
      if (!this[_brands].includes('DOMRectReadOnly')) {
        throw new TypeError('Illegal invocation');
      }

      return this[_impl].right;
    }

    get bottom() {
      if (!this[_brands].includes('DOMRectReadOnly')) {
        throw new TypeError('Illegal invocation');
      }

      return this[_impl].bottom;
    }

    get left() {
      if (!this[_brands].includes('DOMRectReadOnly')) {
        throw new TypeError('Illegal invocation');
      }

      return this[_impl].left;
    }

    toJSON() {
      if (!this[_brands].includes('DOMRectReadOnly')) {
        throw new TypeError('Illegal invocation');
      }

      return {
        x: this[_impl].x,
        y: this[_impl].y,
        width: this[_impl].width,
        height: this[_impl].height,
        top: this[_impl].top,
        right: this[_impl].right,
        bottom: this[_impl].bottom,
        left: this[_impl].left
      };
    }
  }

  Object_defineProperty(DOMRectReadOnly.prototype, toStringTag, {
    writable: false,
    enumerable: false,
    configurable: true,
    value: 'DOMRectReadOnly'
  });

  const prototype = DOMRectReadOnly.prototype;
  binding.webIDL.implsToWrappers.DOMRectReadOnly = impl => {
    const instance = Object_create(prototype);
    instance[_brands] = new v8.InternalPackedArray('DOMRectReadOnly');
    instance[_impl] = impl;
    return instance;
  };

  Object_defineProperty(DOMRectReadOnly, 'fromRect', { enumerable: true });
  Object_defineProperty(DOMRectReadOnly.prototype, 'x', { enumerable: true });
  Object_defineProperty(DOMRectReadOnly.prototype, 'y', { enumerable: true });
  Object_defineProperty(DOMRectReadOnly.prototype, 'width', { enumerable: true });
  Object_defineProperty(DOMRectReadOnly.prototype, 'height', { enumerable: true });
  Object_defineProperty(DOMRectReadOnly.prototype, 'top', { enumerable: true });
  Object_defineProperty(DOMRectReadOnly.prototype, 'right', { enumerable: true });
  Object_defineProperty(DOMRectReadOnly.prototype, 'bottom', { enumerable: true });
  Object_defineProperty(DOMRectReadOnly.prototype, 'left', { enumerable: true });
  Object_defineProperty(DOMRectReadOnly.prototype, 'toJSON', { enumerable: true });

  Object_defineProperty(global, 'DOMRectReadOnly', {
    writable: true,
    enumerable: false,
    configurable: true,
    value: DOMRectReadOnly
  });
});
