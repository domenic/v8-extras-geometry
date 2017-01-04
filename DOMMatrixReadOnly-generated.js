// Assumptions:
// - Array.prototype.includes gets copied over to v8.InternalArray.prototype
// - Not sure the constructor is great; the overload resolution algorithm is complicated and I'm not convinced we could
//   generate it in such a straightforward way.

(function(global, binding, v8) {
  'use strict';

  const DOMMatrixReadOnlyImpl = binding.DOMMatrixReadOnlyImpl;

  const TypeError = global.TypeError;
  const Object_defineProperty = global.Object.defineProperty;
  const Object_create = global.Object.create;
  const toStringTag = global.Symbol.toStringTag;

  const _impl = binding.webIDL.implSymbol;
  const _brands = binding.webIDL.brandsSymbol;

  class DOMMatrixReadOnly {
    constructor() {
      let impl;
      if (arguments.length === 0) {
        impl = DOMMatrixReadOnlyImpl.__constructor1__();
      }

      let arg0 = arguments[0];
      if (typeof arg0 === "object" && arg0 !== null) {
        arg0 = new v8.InternalPackedArray(...arg0);
        impl = DOMMatrixReadOnlyImpl.__constructor3__(arg0);
      } else {
        arg0 = binding.webIDL.conversions['DOMString'](arg0);
        impl = DOMMatrixReadOnlyImpl.__constructor2__(arg1);
      }

      this[_brands] = new v8.InternalPackedArray('DOMMatrixReadOnly');
      this[_impl] = impl;
    }

    // Omitting almost everything just to get a test up and running.
    multiply(other) {
      other = binding.webIDL.dictionaries.DOMMatrixInit(other);

      const implReturnValue = this[_impl].multiply(other);
      // This is wrong; should be DOMMatrix. Hopefully good enough for now.
      return binding.webIDL.implsToWrappers.DOMMatrixReadOnly(implReturnValue);
    }
  }

  Object_defineProperty(DOMMatrixReadOnly.prototype, toStringTag, {
    writable: false,
    enumerable: false,
    configurable: true,
    value: 'DOMMatrixReadOnly'
  });

  const prototype = DOMMatrixReadOnly.prototype;
  binding.webIDL.implsToWrappers.DOMMatrixReadOnly = impl => {
    const instance = Object_create(prototype);
    instance[_brands] = new v8.InternalPackedArray('DOMMatrixReadOnly');
    instance[_impl] = impl;
    return instance;
  };

  Object_defineProperty(DOMMatrixReadOnly.prototype, 'multiply', { enumerable: true });

  Object_defineProperty(global, 'DOMMatrixReadOnly', {
    writable: true,
    enumerable: false,
    configurable: true,
    value: DOMMatrixReadOnly
  });
});
