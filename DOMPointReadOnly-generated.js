// Assumptions:
// - Array.prototype.includes gets copied over to v8.InternalArray.prototype

(function(global, binding, v8) {
  'use strict';

  const DOMPointReadOnlyImpl = binding.DOMPointReadOnlyImpl;

  const TypeError = global.TypeError;
  const Object_defineProperty = global.Object.defineProperty;
  const Object_create = global.Object.create;

  const _impl = binding.webIDL.implSymbol;
  const _brands = binding.webIDL.brandsSymbol;

  const _x = v8.createPrivateSymbol('[[x]]');
  const _y = v8.createPrivateSymbol('[[y]]');
  const _z = v8.createPrivateSymbol('[[z]]');
  const _w = v8.createPrivateSymbol('[[w]]');

  class DOMPointReadOnly {
    constructor(x = 0, y = 0, z = 0, w = 1) {
      x = binding.webIDL.conversions['unrestricted double'](x);
      y = binding.webIDL.conversions['unrestricted double'](y);
      z = binding.webIDL.conversions['unrestricted double'](z);
      w = binding.webIDL.conversions['unrestricted double'](w);

      this[_brands] = new v8.InternalPackedArray('DOMPointReadOnly');
      this[_impl] = new DOMPointReadOnlyImpl(x, y, z, w);
    }

    static fromPoint(other) {
      other = binding.webIDL.dictionaries.DOMPointInit(other);
      const implReturnValue = DOMPointReadOnlyImpl.fromPoint(other);
      return binding.webIDL.implsToWrappers.DOMPointReadOnly(implReturnValue);
    }

    get x() {
      if (!this[_brands].includes('DOMPointReadOnly')) {
        throw new TypeError('Illegal invocation');
      }

      return this[_impl].x;
    }

    get y() {
      if (!this[_brands].includes('DOMPointReadOnly')) {
        throw new TypeError('Illegal invocation');
      }

      return this[_impl].y;
    }

    get z() {
      if (!this[_brands].includes('DOMPointReadOnly')) {
        throw new TypeError('Illegal invocation');
      }

      return this[_impl].z;
    }

    get w() {
      if (!this[_brands].includes('DOMPointReadOnly')) {
        throw new TypeError('Illegal invocation');
      }

      return this[_impl].w;
    }

    matrixTransform(matrix) {
      if (!this[_brands].includes('DOMPointReadOnly')) {
        throw new TypeError('Illegal invocation');
      }

      matrix = binding.webIDL.dictionaries.DOMMatrixInit(other);

      return binding.webIDL.implsToWrappers.DOMPoint(this[_impl].matrixTransform(matrix));
    }

    toJSON() {
      if (!this[_brands].includes('DOMPointReadOnly')) {
        throw new TypeError('Illegal invocation');
      }

      return {
        x: this[_impl].x,
        y: this[_impl].y,
        z: this[_impl].z,
        w: this[_impl].w
      };
    }
  }

  const prototype = DOMPointReadOnly.prototype;
  binding.webIDL.implsToWrappers.DOMPointReadOnly = impl => {
    const instance = Object_create(prototype);
    instance[_brands] = new v8.InternalPackedArray('DOMPointReadOnly');
    instance[_impl] = impl;
    return instance;
  };

  Object_defineProperty(DOMPointReadOnly, 'fromPoint', { enumerable: true });
  Object_defineProperty(DOMPointReadOnly.prototype, 'x', { enumerable: true });
  Object_defineProperty(DOMPointReadOnly.prototype, 'y', { enumerable: true });
  Object_defineProperty(DOMPointReadOnly.prototype, 'z', { enumerable: true });
  Object_defineProperty(DOMPointReadOnly.prototype, 'w', { enumerable: true });
  Object_defineProperty(DOMPointReadOnly.prototype, 'matrixTransform', { enumerable: true });
  Object_defineProperty(DOMPointReadOnly.prototype, 'toJSON', { enumerable: true });

  Object_defineProperty(global, 'DOMPointReadOnly', {
    writable: true,
    enumerable: false,
    configurable: true,
    value: DOMPointReadOnly
  });
});
