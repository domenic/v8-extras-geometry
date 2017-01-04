"use strict";
const binding = {};
const v8 = {
  createPrivateSymbol: Symbol,
  InternalPackedArray: Array
};

//
// web-idl-setup.js
//

(function(global, binding, v8) {
  'use strict';

  binding.webIDL = {
    brandsSymbol: v8.createPrivateSymbol('WebIDL interface brands'),
    implSymbol: v8.createPrivateSymbol('WebIDL implementation'),
    implsToWrappers: global.Object.create(null),
    dictionaries: global.Object.create(null),
    conversions: {
      'unrestricted double'(x) {
        return +x;
      },
      boolean(x) {
        return !!x;
      }
    }
  };
})(window, binding, v8);

//
// DOMMatrixInit-generated.js
//

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
})(window, binding, v8);

//
// DOMMatrixReadOnly-impl.js: modified to not use `class extends null` due to the V8 bug
//

(function(global, binding, v8) {
  "use strict";

  // See DOMPointReadOnly-impl.js for more explanatory comments.

  const min = global.Math.min;
  const max = global.Math.max;

  binding.DOMMatrixReadOnlyImpl = class {
    static __constructor1__() {
      // TODO
    }

    static __constructor2__(transformList) {
      // TODO
    }

    static __constructor3__(numberSequence) {
      if (numberSequence.length === 6) {
        return create2DMatrix(numberSequence);
      }

      if (numberSequence.length === 16) {
        return create3DMatrix(numberSequence);
      }

      throw new TypeError("The given number sequence must have exactly 6 or 16 elements");
    }

    static fromMatrix(other) {
      // TODO
    }

    static fromFloat32Array(array32) {
      // TODO
    }

    static fromFloat64Array(array64) {
      // TODO
    }

    translate(tx, ty, tz) {
      // TODO
    }

    scale(scaleX, scaleY, scaleZ, originX, originY, originZ) {
      // TODO
    }

    scale3d(scale, originX, originY, originZ) {
      // TODO
    }

    rotate(rotX, rotY, rotZ) {
      // TODO
    }

    rotateFromVector(x, y) {
      // TODO
    }

    rotateAxisAngle(x, y, z, angle) {
      // TODO
    }

    skewX(sx) {
      // TODO
    }

    skewY(sy) {
      // TODO
    }

    multiply(other) {
      const thisArray = this._matrix;
      const otherArray = validateAndFixupDOMMatrixInitIntoArray(other);

      const length = 4;
      const resultArray = new v8.InternalPackedArray(16);
      for (let i = 0; i < length; ++i) {
        for (let j = 0; j < length; ++j) {
          let value = 0;
          for (let k = 0; k < length; ++k) {
            value += thisArray[j + k * length] * otherArray[i * length + k];
          }
          resultArray[i * length + j] = value;
        }
      }

      const matrixResult = create3DMatrix(resultArray);
      matrixResult.is2D = other.is2D;
      return matrixResult;
    }

    flipX() {
      // TODO
    }

    flipY() {
      // TODO
    }

    inverse() {
      // TODO
    }

    transformPoint(point) {
      // TODO
    }

    toFloat32Array() {
      // TODO
    }

    toFloat64Array() {
      // TODO
    }

    toString() {
      // TODO
    }

    get a() {
      return this.m11;
    }

    get b() {
      return this.m12;
    }

    get c() {
      return this.m21;
    }

    get d() {
      return this.m22;
    }

    get e() {
      return this.m41;
    }

    get f() {
      return this.m42;
    }

    get isIdentity() {
      return this.m11 === 1 && this.m12 === 0 && this.m13 === 0 && this.m14 === 0 &&
             this.m21 === 0 && this.m22 === 1 && this.m23 === 0 && this.m24 === 0 &&
             this.m31 === 0 && this.m32 === 0 && this.m33 === 1 && this.m34 === 0 &&
             this.m41 === 0 && this.m42 === 0 && this.m43 === 0 && this.m44 === 1;
    }
  };

  // function createMatrixFromDictionary(other) {
  //   validateAndFixupDOMMatrixInit(other);

  //   if (other.is2D) {
  //     return create2DMatrix(new v8.InternalPackedArray(
  //       other.m11, other.m12,
  //       other.m21, other.m22,
  //       other.m41, other.m42
  //     ));
  //   } else {
  //     return create3DMatrix(new v8.InternalPackedArray(
  //       other.m11, other.m12, other.m13, other.m14,
  //       other.m21, other.m22, other.m33, other.m34,
  //       other.m31, other.m32, other.m33, other.m34,
  //       other.m41, other.m42, other.m43, other.m44
  //     ));
  //   }
  // }

  function create2DMatrix(numberSequence) {
    const matrix = new binding.DOMMatrixReadOnlyImpl();
    matrix.m11 = numberSequence[0];
    matrix.m12 = numberSequence[1];
    matrix.m21 = numberSequence[2];
    matrix.m22 = numberSequence[3];
    matrix.m41 = numberSequence[4];
    matrix.m42 = numberSequence[5];

    matrix.m31 = matrix.m32 = matrix.m13 = matrix.m23 = matrix.m43 = matrix.m14 = matrix.m24 = matrix.m34 = 0;

    matrix.m33 = matrix.m44 = 1;

    matrix._matrix = v8.InternalPackedArray(
      numberSequence[0], numberSequence[1], 0, 0,
      numberSequence[2], numberSequence[3], 0, 0,
      0, 0, 1, 0,
      numberSequence[4], numberSequence[5], 0, 1
    );

    matrix.is2D = true;

    return matrix;
  }

  function create3DMatrix(numberSequence) {
    const matrix = new binding.DOMMatrixReadOnlyImpl();
    matrix.m11 = numberSequence[0];
    matrix.m12 = numberSequence[1];
    matrix.m13 = numberSequence[2];
    matrix.m14 = numberSequence[3];
    matrix.m21 = numberSequence[4];
    matrix.m22 = numberSequence[5];
    matrix.m23 = numberSequence[6];
    matrix.m24 = numberSequence[7];
    matrix.m31 = numberSequence[8];
    matrix.m32 = numberSequence[9];
    matrix.m33 = numberSequence[10];
    matrix.m34 = numberSequence[11];
    matrix.m41 = numberSequence[12];
    matrix.m42 = numberSequence[13];
    matrix.m43 = numberSequence[14];
    matrix.m44 = numberSequence[15];

    matrix.is2D = false;

    matrix._matrix = numberSequence;

    return matrix;
  }

  // const twoDeeOnly = new v8.InternalPackedArray(
  //   { propName1: "a", propName2: "m11", defaultValue: 1 },
  //   { propName1: "b", propName2: "m12", defaultValue: 0 },
  //   { propName1: "c", propName2: "m21", defaultValue: 0 },
  //   { propName1: "d", propName2: "m22", defaultValue: 1 },
  //   { propName1: "e", propName2: "m41", defaultValue: 0 },
  //   { propName1: "f", propName2: "m42", defaultValue: 0 }
  // );

  // const threeDeeOnly = new v8.InternalPackedArray(
  //   { propName: "m31", twoDeeValue: 0 },
  //   { propName: "m32", twoDeeValue: 0 },
  //   { propName: "m13", twoDeeValue: 0 },
  //   { propName: "m23", twoDeeValue: 0 },
  //   { propName: "m43", twoDeeValue: 0 },
  //   { propName: "m14", twoDeeValue: 0 },
  //   { propName: "m24", twoDeeValue: 0 },
  //   { propName: "m34", twoDeeValue: 0 },
  //   { propName: "m33", twoDeeValue: 1 },
  //   { propName: "m44", twoDeeValue: 1 }
  // );

  // function validateAndFixupDOMMatrixInit(dict) {
  //   for (let i = 0; i < twoDeeOnly.length; ++i) {
  //     const { propName1, propName2, propName3 } = twoDeeOnly[i];

  //     if (dict[propName1] !== undefined && dict[propName2] !== undefined && dict[propName1] !== dict[propName2]) {
  //       throw new TypeError(`The ${propName1} and ${propName2} values, if both present, must match`);
  //     }

  //     if (dict[propName1] === undefined) {
  //       if (dict[propName2] !== undefined) {
  //         dict[propName1] = dict[propName2];
  //       } else {
  //         dict[propName1] = defaultValue;
  //       }
  //     }
  //   }

  //   for (let i = 0; i < threeDeeOnly.length; ++i) {
  //     const { propName, twoDeeValue } = threeDeeOnly[i];

  //     if (dict[propName] !== twoDeeValue) {
  //       if (dict.is2D) {
  //         throw new TypeError(`The ${propName} value must be ${twoDeeValue} if is2D is set to true`);
  //       } else {
  //         dict.is2D = false;
  //       }
  //     }
  //   }

  //   if (dict.is2D === undefined) {
  //     dict.is2D = true;
  //   }
  // }

  // This both mutates its argument's is2D, and returns the fixed-up version in array form. Not great practice, but
  // seems optimized.
  function validateAndFixupDOMMatrixInitIntoArray(dict) {
    if (dict.a !== undefined && dict.m11 !== undefined && dict.a !== dict.m11) {
      throw new TypeError("The a and m11 values, if both present, must match");
    }
    if (dict.b !== undefined && dict.m12 !== undefined && dict.b !== dict.m12) {
      throw new TypeError("The b and m12 values, if both present, must match");
    }
    if (dict.c !== undefined && dict.m21 !== undefined && dict.c !== dict.m21) {
      throw new TypeError("The c and m21 values, if both present, must match");
    }
    if (dict.d !== undefined && dict.m22 !== undefined && dict.d !== dict.m22) {
      throw new TypeError("The d and m22 values, if both present, must match");
    }
    if (dict.e !== undefined && dict.m41 !== undefined && dict.e !== dict.m41) {
      throw new TypeError("The e and m41 values, if both present, must match");
    }
    if (dict.f !== undefined && dict.m42 !== undefined && dict.f !== dict.m42) {
      throw new TypeError("The f and m42 values, if both present, must match");
    }

    if (dict.is2D) {
      if (dict.m31 !== 0) {
        throw new TypeError("The m31 value must be 0 if is2D is set to true");
      }
      if (dict.m32 !== 0) {
        throw new TypeError("The m32 value must be 0 if is2D is set to true");
      }
      if (dict.m13 !== 0) {
        throw new TypeError("The m13 value must be 0 if is2D is set to true");
      }
      if (dict.m23 !== 0) {
        throw new TypeError("The m23 value must be 0 if is2D is set to true");
      }
      if (dict.m43 !== 0) {
        throw new TypeError("The m43 value must be 0 if is2D is set to true");
      }
      if (dict.m14 !== 0) {
        throw new TypeError("The m14 value must be 0 if is2D is set to true");
      }
      if (dict.m24 !== 0) {
        throw new TypeError("The m24 value must be 0 if is2D is set to true");
      }
      if (dict.m34 !== 0) {
        throw new TypeError("The m34 value must be 0 if is2D is set to true");
      }
      if (dict.m33 !== 1) {
        throw new TypeError("The m33 value must be 1 if is2D is set to true");
      }
      if (dict.m44 !== 1) {
        throw new TypeError("The m44 value must be 1 if is2D is set to true");
      }
    }

    if (dict.is2D === undefined) {
      dict.is2D = dict.m31 === 0 && dict.m32 === 0 && dict.m13 === 0 &&
                  dict.m23 === 0 && dict.m43 === 0 && dict.m14 === 0 &&
                  dict.m24 === 0 && dict.m34 === 0 && dict.m33 === 1 &&
                  dict.m44 === 1;
    }

    return new v8.InternalPackedArray(
      dict.m11 === undefined ? dict.a === undefined ? 1 : dict.a : dict.m11,
      dict.m12 === undefined ? dict.b === undefined ? 0 : dict.b : dict.m12,
      dict.m13,
      dict.m14,
      dict.m21 === undefined ? dict.c === undefined ? 0 : dict.c : dict.m21,
      dict.m22 === undefined ? dict.d === undefined ? 1 : dict.d : dict.m22,
      dict.m23,
      dict.m24,
      dict.m31,
      dict.m32,
      dict.m33,
      dict.m34,
      dict.m41 === undefined ? dict.e === undefined ? 0 : dict.e : dict.m41,
      dict.m42 === undefined ? dict.f === undefined ? 0 : dict.f : dict.m42,
      dict.m43,
      dict.m44,
    );
  }
})(window, binding, v8);

//
// DOMMatrixReadOnly-generated.js: modified to use the global _DOMMatrixReadOnly
//

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

  Object_defineProperty(global, '_DOMMatrixReadOnly', {
    writable: true,
    enumerable: false,
    configurable: true,
    value: DOMMatrixReadOnly
  });
})(window, binding, v8);
