// Spec: https://heycam.github.io/webidl/#es-dictionary

(function(global, binding, v8) {
  'use strict';
  const undefined = global.undefined;

  binding.webIDL.dictionaries.DOMRectInit = jsObj => {
    if (jsObj !== undefined && typeof jsObj !== 'object') {
      throw new TypeError('Cannot convert non-object, non-undefined, non-null to a DOMRectInit dictionary');
    }

    const dict = {
      __proto__: null,
      x: undefined,
      y: undefined,
      width: undefined,
      height: undefined
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

    const value_width = jsObj === undefined || jsObj === null ? undefined : jsObj.width;
    if (value_width !== undefined) {
      dict.width = binding.webIDL.conversions['unrestricted double'](value_width);
    } else {
      dict.width = 0;
    }

    const value_height = jsObj === undefined || jsObj === null ? undefined : jsObj.height;
    if (value_height !== undefined) {
      dict.height = binding.webIDL.conversions['unrestricted double'](value_height);
    } else {
      dict.height = 0;
    }

    return dict;
  };
});
