/*
Microformats Test Suite - Downloaded from github repo: glennjones/tests version v0.1.18 
Mocha integration test from: microformats-v2/h-card/impliedname
The test was built on Thu Jul 02 2015 21:37:43 GMT+0100 (BST)
*/

assert = chai.assert;


describe('h-card', function() {
   var htmlFragment = "\n<img class=\"h-card\" src=\"jane.html\" alt=\"Jane Doe\"/>\n<area class=\"h-card\" href=\"jane.html\" alt=\"Jane Doe\"></area>\n<abbr class=\"h-card\" title=\"Jane Doe\">JD</abbr>\n\n<div class=\"h-card\"><img src=\"jane.html\" alt=\"Jane Doe\"/></div>\n<div class=\"h-card\"><area href=\"jane.html\" alt=\"Jane Doe\"></area></div>\n<div class=\"h-card\"><abbr title=\"Jane Doe\">JD</abbr></div>\n\n<div class=\"h-card\"><span><img src=\"jane.html\" alt=\"Jane Doe\"/></span></div>\n<div class=\"h-card\"><span><area href=\"jane.html\" alt=\"Jane Doe\"></area></span></div>\n<div class=\"h-card\"><span><abbr title=\"Jane Doe\">JD</abbr></span></div>\n\n<div class=\"h-card\"><img class=\"h-card\" src=\"john.html\" alt=\"John Doe\"/>Name</div>\n<div class=\"h-card\"><span class=\"h-card\"><img src=\"john.html\" alt=\"John Doe\"/>Name</span></div>\n";
   var expected = {"items":[{"type":["h-card"],"properties":{"name":["Jane Doe"],"photo":["http://example.com/jane.html"]}},{"type":["h-card"],"properties":{"name":["Jane Doe"],"url":["http://example.com/jane.html"]}},{"type":["h-card"],"properties":{"name":["Jane Doe"]}},{"type":["h-card"],"properties":{"name":["Jane Doe"],"photo":["http://example.com/jane.html"]}},{"type":["h-card"],"properties":{"name":["Jane Doe"],"url":["http://example.com/jane.html"]}},{"type":["h-card"],"properties":{"name":["Jane Doe"]}},{"type":["h-card"],"properties":{"name":["Jane Doe"],"photo":["http://example.com/jane.html"]}},{"type":["h-card"],"properties":{"name":["Jane Doe"],"url":["http://example.com/jane.html"]}},{"type":["h-card"],"properties":{"name":["Jane Doe"]}},{"type":["h-card"],"properties":{"name":["Name"]},"children":[{"type":["h-card"],"properties":{"name":["John Doe"],"photo":["http://example.com/john.html"]}}]},{"type":["h-card"],"properties":{"name":["Name"]},"children":[{"value":"Name","type":["h-card"],"properties":{"name":["John Doe"],"photo":["http://example.com/john.html"]}}]}],"rels":{},"rel-urls":{}};

   it('impliedname', function(){
       var doc, node, options, parser, found;
       doc = document.implementation.createHTMLDocument('New Document');
       node =  document.createElement('div');
       node.innerHTML = htmlFragment;
       doc.body.appendChild(node);
       options ={
       		'document': doc,
       		'node': node,
       		'baseUrl': 'http://example.com'
       };
       parser = new Modules.Parser();
       found = parser.get( options );
       assert.deepEqual(found, expected);
   });
});