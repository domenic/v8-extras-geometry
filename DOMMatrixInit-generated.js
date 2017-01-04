(function(global, binding, v8) {
  'use strict';
  const undefined = global.undefined;

  binding.webIDL.dictionaries.DOMMatrixInit = jsObj => {
    if (jsObj !== undefined && typeof jsObj !== 'object') {
      throw new TypeError('Cannot convert non-object, non-undefined, non-null to a DOMMatrixInit dictionary');
    }

    const dict = {
      __proto__: null,
      a: undefined,
      b: undefined,
      c: undefined,
      d: undefined,
      e: undefined,
      f: undefined,
      m11: undefined,
      m12: undefined,
      m13: undefined,
      m14: undefined,
      m21: undefined,
      m22: undefined,
      m23: undefined,
      m24: undefined,
      m31: undefined,
      m32: undefined,
      m33: undefined,
      m34: undefined,
      m41: undefined,
      m42: undefined,
      m43: undefined,
      m44: undefined,
      is2D: undefined,
    };


    const value_a = jsObj === undefined || jsObj === null ? undefined : jsObj.a;
    if (value_a !== undefined) {
      dict.a = binding.webIDL.conversions['unrestricted double'](value_a);
    }

    const value_b = jsObj === undefined || jsObj === null ? undefined : jsObj.b;
    if (value_b !== undefined) {
      dict.b = binding.webIDL.conversions['unrestricted double'](value_b);
    }

    const value_c = jsObj === undefined || jsObj === null ? undefined : jsObj.c;
    if (value_c !== undefined) {
      dict.c = binding.webIDL.conversions['unrestricted double'](value_c);
    }

    const value_d = jsObj === undefined || jsObj === null ? undefined : jsObj.d;
    if (value_d !== undefined) {
      dict.d = binding.webIDL.conversions['unrestricted double'](value_d);
    }

    const value_e = jsObj === undefined || jsObj === null ? undefined : jsObj.e;
    if (value_e !== undefined) {
      dict.e = binding.webIDL.conversions['unrestricted double'](value_e);
    }

    const value_f = jsObj === undefined || jsObj === null ? undefined : jsObj.f;
    if (value_f !== undefined) {
      dict.f = binding.webIDL.conversions['unrestricted double'](value_f);
    }

    const value_m11 = jsObj === undefined || jsObj === null ? undefined : jsObj.m11;
    if (value_m11 !== undefined) {
      dict.m11 = binding.webIDL.conversions['unrestricted double'](value_m11);
    }

    const value_m12 = jsObj === undefined || jsObj === null ? undefined : jsObj.m12;
    if (value_m12 !== undefined) {
      dict.m12 = binding.webIDL.conversions['unrestricted double'](value_m12);
    }

    const value_m13 = jsObj === undefined || jsObj === null ? undefined : jsObj.m13;
    if (value_m13 !== undefined) {
      dict.m13 = binding.webIDL.conversions['unrestricted double'](value_m13);
    } else {
      dict.m13 = 0;
    }

    const value_m14 = jsObj === undefined || jsObj === null ? undefined : jsObj.m14;
    if (value_m14 !== undefined) {
      dict.m14 = binding.webIDL.conversions['unrestricted double'](value_m14);
    } else {
      dict.m14 = 0;
    }

    const value_m21 = jsObj === undefined || jsObj === null ? undefined : jsObj.m21;
    if (value_m21 !== undefined) {
      dict.m21 = binding.webIDL.conversions['unrestricted double'](value_m21);
    }

    const value_m22 = jsObj === undefined || jsObj === null ? undefined : jsObj.m22;
    if (value_m22 !== undefined) {
      dict.m22 = binding.webIDL.conversions['unrestricted double'](value_m22);
    }

    const value_m23 = jsObj === undefined || jsObj === null ? undefined : jsObj.m23;
    if (value_m23 !== undefined) {
      dict.m23 = binding.webIDL.conversions['unrestricted double'](value_m23);
    } else {
      dict.m23 = 0;
    }

    const value_m24 = jsObj === undefined || jsObj === null ? undefined : jsObj.m24;
    if (value_m24 !== undefined) {
      dict.m24 = binding.webIDL.conversions['unrestricted double'](value_m24);
    } else {
      dict.m24 = 0;
    }

    const value_m31 = jsObj === undefined || jsObj === null ? undefined : jsObj.m31;
    if (value_m31 !== undefined) {
      dict.m31 = binding.webIDL.conversions['unrestricted double'](value_m31);
    } else {
      dict.m31 = 0;
    }

    const value_m32 = jsObj === undefined || jsObj === null ? undefined : jsObj.m32;
    if (value_m32 !== undefined) {
      dict.m32 = binding.webIDL.conversions['unrestricted double'](value_m32);
    } else {
      dict.m32 = 0;
    }

    const value_m33 = jsObj === undefined || jsObj === null ? undefined : jsObj.m33;
    if (value_m33 !== undefined) {
      dict.m33 = binding.webIDL.conversions['unrestricted double'](value_m33);
    } else {
      dict.m33 = 1;
    }

    const value_m34 = jsObj === undefined || jsObj === null ? undefined : jsObj.m34;
    if (value_m34 !== undefined) {
      dict.m34 = binding.webIDL.conversions['unrestricted double'](value_m34);
    } else {
      dict.m34 = 0;
    }

    const value_m41 = jsObj === undefined || jsObj === null ? undefined : jsObj.m41;
    if (value_m41 !== undefined) {
      dict.m41 = binding.webIDL.conversions['unrestricted double'](value_m41);
    }

    const value_m42 = jsObj === undefined || jsObj === null ? undefined : jsObj.m42;
    if (value_m42 !== undefined) {
      dict.m42 = binding.webIDL.conversions['unrestricted double'](value_m42);
    }

    const value_m43 = jsObj === undefined || jsObj === null ? undefined : jsObj.m43;
    if (value_m43 !== undefined) {
      dict.m43 = binding.webIDL.conversions['unrestricted double'](value_m43);
    } else {
      dict.m43 = 0;
    }

    const value_m44 = jsObj === undefined || jsObj === null ? undefined : jsObj.m44;
    if (value_m44 !== undefined) {
      dict.m44 = binding.webIDL.conversions['unrestricted double'](value_m44);
    } else {
      dict.m44 = 1;
    }

    const value_is2D = jsObj === undefined || jsObj === null ? undefined : jsObj.is2D;
    if (value_is2D !== undefined) {
      dict.is2D = binding.webIDL.conversions['boolean'](value_is2D);
    }

    return dict;
  };
});
