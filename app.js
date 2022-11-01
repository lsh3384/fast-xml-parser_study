var xmlbuilder = require("xmlbuilder");

var root = xmlbuilder.create(
  "root",
  { version: "1.0", encoding: "UTF-8", standalone: true },
  { pubID: null, sysID: null },
  {
    keepNullNodes: false,
    keepNullAttributes: false,
    headless: false,
    ignoreDecorators: false,
    separateArrayItems: false,
    noDoubleEncoding: false,
    noValidation: false,
    invalidCharReplacement: undefined,
    stringify: {},
  }
);

root.ele('hello')

var obj = {
  person: {
    name: "John",
    "@age": 35,
    address: {
      city: "Istanbul",
    },
    phone: [
      { "#text": "555-1234", "@type": "home" },
      { "#text": "555-1235", "@type": "mobile" },
    ],
    id: function () {
      return 42;
    },
  },
};

var ele = root.ele(obj);

let result = ele.end({ pretty: true });

console.log(result)