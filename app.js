const { create } = require('xmlbuilder2');

const root = create()
  .ele('root', { att: 'val' })
  .dec({type: 'Text/xsl', href: 'AdvExmnSrh_9.xsl'})
    .ele('foo')
      .ele('bar').txt('foobar').up()
    .up()
    .ele('baz').up()
  .up();

// convert the XML tree to string
const xml = root.end({ prettyPrint: true });
console.log(xml);