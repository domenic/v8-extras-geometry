(function(global, binding, v8) {
  "use strict";

  // See DOMPointReadOnly-impl.js for more explanatory comments.

  const min = global.Math.min;
  const max = global.Math.max;

  binding.DOMMatrixReadOnlyImpl = class extends null {
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
});
