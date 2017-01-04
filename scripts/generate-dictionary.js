"use strict";
const fs = require("fs");
const path = require("path");
const webidl2 = require("webidl2");
const assert = require("assert");

const inputFilename = path.resolve(process.argv[2]);
const input = fs.readFileSync(inputFilename, { encoding: "utf-8" });

const idl = webidl2.parse(input);
assert.equal(idl.length, 1, "Input file must contain exactly 1 IDL construct");

const dictionary = idl[0];
assert.equal(dictionary.type, "dictionary", "Input file must contain a dictionary");

assert.equal(dictionary.partial, false, "Partial dictionaries are not yet supported");
assert.equal(dictionary.inheritance, null, "Inherited dictionaries are not yet supported");
assert.deepEqual(dictionary.extAttrs, [], "No extended attributes are supported on dictionaries yet");

const output = `(function(global, binding, v8) {
  'use strict';
  const undefined = global.undefined;

  binding.webIDL.dictionaries.${dictionary.name} = jsObj => {
    if (jsObj !== undefined && typeof jsObj !== 'object') {
      throw new TypeError('Cannot convert non-object, non-undefined, non-null to a ${dictionary.name} dictionary');
    }

    const dict = {
      __proto__: null,
${
  dictionary.members.map(member => {
    assert.equal(member.idlType.sequence, false, "Sequence types not supported yet");
    assert.equal(member.idlType.generic, null, "Generic types not supported yet");
    assert.equal(member.idlType.nullable, false, "Nullable types not supported yet");
    assert.equal(member.idlType.array, false, "Array types not supported yet");
    assert.equal(member.idlType.union, false, "Union types not supported yet");
    assert.deepEqual(member.extAttrs, [], "No extended attributes are supported on dictionary members yet");

    return `      ${member.name}: undefined,`;
  })
  .join("\n")
}
    };

${
  dictionary.members.map(member => {
    let generated = `
    const value_${member.name} = jsObj === undefined || jsObj === null ? undefined : jsObj.${member.name};
    if (value_${member.name} !== undefined) {
      dict.${member.name} = binding.webIDL.conversions['${member.idlType.idlType}'](value_${member.name});
    }`;

    if (member.default) {
      generated += ` else {
      dict.${member.name} = ${JSON.stringify(member.default.value)};
    }`;
    } else if (member.required) {
      generated += ` else {
      throw new TypeError('${member.name} is required when initializing a ${dictionary.name} dictionary');
    }`;
    }

    return generated;
  })
  .join("\n")
}

    return dict;
  };
});
`;

const outputFilename = path.resolve(path.dirname(inputFilename), path.basename(inputFilename, ".idl") + "-generated.js");
fs.writeFileSync(outputFilename, output, { encoding: "utf-8" });
