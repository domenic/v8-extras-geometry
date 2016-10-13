// Assumptions:
// - The stupid RegExp check in the spec is removed, see https://github.com/heycam/webidl/issues/148
//   and https://github.com/heycam/webidl/issues/145
//
// Spec: https://heycam.github.io/webidl/#es-dictionary

(function(global, binding, v8) {
  'use strict';
  const undefined = global.undefined;

  binding.webIDL.dictionaries.DOMPointInit = jsObj => {
    if (jsObj !== undefined && typeof jsObj !== 'object') {
      throw new TypeError('Cannot convert non-object, non-undefined, non-null to a DOMPointInit dictionary');
    }

    const dict = {
      __proto__: null,
      x: undefined,
      y: undefined,
      z: undefined,
      w: undefined
    };

    const value_x = jsObj === undefined || jsObj === null ? undefined : jsObj.x;
    if (value_x !== undefined) {
      dict.x = binding.webIDL.conversions['unrestricted double'](value_x);
    } else {
      dict.x = 0;
    }

    const value_y = jsObj === undefined || jsObj === null ? undefined : jsObj.y;
    if (value_y !== undefined) {
      dict.y = binding.webIDL.conversions['unrestricted double'](value_y);
    } else {
      dict.y = 0;
    }

    const value_z = jsObj === undefined || jsObj === null ? undefined : jsObj.z;
    if (value_z !== undefined) {
      dict.z = binding.webIDL.conversions['unrestricted double'](value_z);
    } else {
      dict.z = 0;
    }

    const value_w = jsObj === undefined || jsObj === null ? undefined : jsObj.w;
    if (value_w !== undefined) {
      dict.w = binding.webIDL.conversions['unrestricted double'](value_w);
    } else {
      dict.w = 1;
    }

    return dict;
  };
});
