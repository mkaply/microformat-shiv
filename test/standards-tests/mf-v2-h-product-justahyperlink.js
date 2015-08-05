/*
Microformats Test Suite - Downloaded from github repo: glennjones/tests version v0.1.18 
Mocha integration test from: microformats-v2/h-product/justahyperlink
The test was built on Wed Aug 05 2015 14:24:03 GMT+0100 (BST)
*/

assert = chai.assert;


describe('h-product', function() {
   var htmlFragment = "<a class=\"h-product\" href=\"http://www.raspberrypi.org/\">Raspberry Pi</a>";
   var expected = {"items":[{"type":["h-product"],"properties":{"name":["Raspberry Pi"],"url":["http://www.raspberrypi.org/"]}}],"rels":{},"rel-urls":{}};

   it('justahyperlink', function(){
       var doc, dom, node, options, parser, found;
       dom = new DOMParser();
       doc = dom.parseFromString( htmlFragment, 'text/html' );
       options ={
       		'document': doc,
       		'node': doc,
       		'baseUrl': 'http://example.com'
       };
       found = Microformats.get( options );
       assert.deepEqual(found, expected);
   });
});
