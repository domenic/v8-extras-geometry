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
});
