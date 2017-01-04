// Assumptions:
// - Array.prototype.includes gets copied over to v8.InternalArray.prototype

(function(global, binding, v8) {
  'use strict';

  const DOMPointImpl = binding.DOMPointImpl;

  const TypeError = global.TypeError;
  const Object_defineProperty = global.Object.defineProperty;
  const Object_create = global.Object.create;
  const toStringTag = global.Symbol.toStringTag;

  const _impl = binding.webIDL.implSymbol;
  const _brands = binding.webIDL.brandsSymbol;

  class DOMPoint extends global.DOMPointReadOnly {
    constructor(x = 0, y = 0, z = 0, w = 1) {
      x = binding.webIDL.conversions['unrestricted double'](x);
      y = binding.webIDL.conversions['unrestricted double'](y);
      z = binding.webIDL.conversions['unrestricted double'](z);
      w = binding.webIDL.conversions['unrestricted double'](w);

      this[_brands] = new v8.InternalPackedArray('DOMPoint', 'DOMPointReadOnly');
      this[_impl] = new DOMPointImpl(x, y, z, w);
    }

    static fromPoint(other) {
      other = binding.webIDL.dictionaries.DOMPointInit(other);

      const implReturnValue = DOMPointImpl.fromPoint(other);
      return binding.webIDL.implsToWrappers.DOMPoint(implReturnValue);
    }

    get x() {
      if (!this[_brands].includes('DOMPoint')) {
        throw new TypeError('Illegal invocation');
      }

      return this[_impl].x;
    }

    set x(value) {
      if (!this[_brands].includes('DOMPoint')) {
        throw new TypeError('Illegal invocation');
      }

      this[_impl].x = binding.webIDL.conversions['unrestricted double'](value);
    }

    get y() {
      if (!this[_brands].includes('DOMPoint')) {
        throw new TypeError('Illegal invocation');
      }

      return this[_impl].y;
    }

    set y(value) {
      if (!this[_brands].includes('DOMPoint')) {
        throw new TypeError('Illegal invocation');
      }

      this[_impl].y = binding.webIDL.conversions['unrestricted double'](value);
    }

    get z() {
      if (!this[_brands].includes('DOMPoint')) {
        throw new TypeError('Illegal invocation');
      }

      return this[_impl].z;
    }

    set z(value) {
      if (!this[_brands].includes('DOMPoint')) {
        throw new TypeError('Illegal invocation');
      }

      this[_impl].z = binding.webIDL.conversions['unrestricted double'](value);
    }

    get w() {
      if (!this[_brands].includes('DOMPoint')) {
        throw new TypeError('Illegal invocation');
      }

      return this[_impl].w;
    }

    set w(value) {
      if (!this[_brands].includes('DOMPoint')) {
        throw new TypeError('Illegal invocation');
      }

      this[_impl].w = binding.webIDL.conversions['unrestricted double'](value);
    }
  }

  Object_defineProperty(DOMPoint.prototype, toStringTag, {
    writable: false,
    enumerable: false,
    configurable: true,
    value: 'DOMPoint'
  });

  const prototype = DOMPoint.prototype;
  binding.webIDL.implsToWrappers.DOMPoint = impl => {
    const instance = Object_create(prototype);
    instance[_brands] = new v8.InternalPackedArray('DOMPoint', 'DOMPointReadOnly');
    instance[_impl] = impl;
    return instance;
  };

  Object_defineProperty(DOMPoint, 'fromPoint', { enumerable: true });
  Object_defineProperty(DOMPoint.prototype, 'x', { enumerable: true });
  Object_defineProperty(DOMPoint.prototype, 'y', { enumerable: true });
  Object_defineProperty(DOMPoint.prototype, 'z', { enumerable: true });
  Object_defineProperty(DOMPoint.prototype, 'w', { enumerable: true });

  Object_defineProperty(global, 'DOMPoint', {
    writable: true,
    enumerable: false,
    configurable: true,
    value: DOMPoint
  });
});
