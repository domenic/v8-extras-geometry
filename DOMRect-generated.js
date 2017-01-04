// Assumptions:
// - Array.prototype.includes gets copied over to v8.InternalArray.prototype

(function(global, binding, v8) {
  'use strict';

  const DOMRectImpl = binding.DOMRectImpl;

  const TypeError = global.TypeError;
  const Object_defineProperty = global.Object.defineProperty;
  const Object_create = global.Object.create;
  const toStringTag = global.Symbol.toStringTag;

  const _impl = binding.webIDL.implSymbol;
  const _brands = binding.webIDL.brandsSymbol;

  class DOMRect extends global.DOMRectReadOnly {
    constructor(x = 0, y = 0, width = 0, height = 0) {
      x = binding.webIDL.conversions['unrestricted double'](x);
      y = binding.webIDL.conversions['unrestricted double'](y);
      width = binding.webIDL.conversions['unrestricted double'](width);
      height = binding.webIDL.conversions['unrestricted double'](height);

      this[_brands] = new v8.InternalPackedArray('DOMRect', 'DOMRectReadOnly');
      this[_impl] = new DOMRectImpl(x, y, width, height);
    }

    static fromRect(other) {
      other = binding.webIDL.dictionaries.DOMRectInit(other);

      const implReturnValue = DOMRectImpl.fromRect(other);
      return binding.webIDL.implsToWrappers.DOMRect(implReturnValue);
    }

    get x() {
      if (!this[_brands].includes('DOMRect')) {
        throw new TypeError('Illegal invocation');
      }

      return this[_impl].x;
    }

    set x(value) {
      if (!this[_brands].includes('DOMRect')) {
        throw new TypeError('Illegal invocation');
      }

      this[_impl].x = binding.webIDL.conversions['unrestricted double'](value);
    }

    get y() {
      if (!this[_brands].includes('DOMRect')) {
        throw new TypeError('Illegal invocation');
      }

      return this[_impl].y;
    }

    set y(value) {
      if (!this[_brands].includes('DOMRect')) {
        throw new TypeError('Illegal invocation');
      }

      this[_impl].y = binding.webIDL.conversions['unrestricted double'](value);
    }

    get width() {
      if (!this[_brands].includes('DOMRect')) {
        throw new TypeError('Illegal invocation');
      }

      return this[_impl].width;
    }

    set width(value) {
      if (!this[_brands].includes('DOMRect')) {
        throw new TypeError('Illegal invocation');
      }

      this[_impl].width = binding.webIDL.conversions['unrestricted double'](value);
    }

    get height() {
      if (!this[_brands].includes('DOMRect')) {
        throw new TypeError('Illegal invocation');
      }

      return this[_impl].height;
    }

    set height(value) {
      if (!this[_brands].includes('DOMRect')) {
        throw new TypeError('Illegal invocation');
      }

      this[_impl].height = binding.webIDL.conversions['unrestricted double'](value);
    }
  }

  Object_defineProperty(DOMRect.prototype, toStringTag, {
    writable: false,
    enumerable: false,
    configurable: true,
    value: 'DOMRect'
  });

  const prototype = DOMRect.prototype;
  binding.webIDL.implsToWrappers.DOMRect = impl => {
    const instance = Object_create(prototype);
    instance[_brands] = new v8.InternalPackedArray('DOMRect', 'DOMRectReadOnly');
    instance[_impl] = impl;
    return instance;
  };

  Object_defineProperty(DOMRect, 'fromRect', { enumerable: true });
  Object_defineProperty(DOMRect.prototype, 'x', { enumerable: true });
  Object_defineProperty(DOMRect.prototype, 'y', { enumerable: true });
  Object_defineProperty(DOMRect.prototype, 'width', { enumerable: true });
  Object_defineProperty(DOMRect.prototype, 'height', { enumerable: true });

  Object_defineProperty(global, 'DOMRect', {
    writable: true,
    enumerable: false,
    configurable: true,
    value: DOMRect
  });

  Object_defineProperty(global, 'DOMRect', {
    writable: true,
    enumerable: false,
    configurable: true,
    value: SVGRect
  });
});
