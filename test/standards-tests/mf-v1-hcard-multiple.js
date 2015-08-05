/*
Microformats Test Suite - Downloaded from github repo: glennjones/tests version v0.1.18 
Mocha integration test from: microformats-v1/hcard/multiple
The test was built on Wed Aug 05 2015 14:24:03 GMT+0100 (BST)
*/

assert = chai.assert;


describe('hcard', function() {
   var htmlFragment = "<base href=\"http://example.com\">\n    <div class=\"vcard\">\n    \n    <div class=\"fn n\"><span class=\"given-name\">John</span> <span class=\"family-name\">Doe</span></div>\n    <a class=\"sound\" href=\"http://www.madgex.com/johndoe.mpeg\">Pronunciation of my name</a>\n    <div><img class=\"photo\" src=\"images/photo.gif\" alt=\"Photo of John Doe\" /></div>\n\n    <p>Nicknames:</p>\n    <ul>\n        <li class=\"nickname\">Man with no name</li>\n        <li class=\"nickname\">Lost boy</li>\n    </ul>\n\n    <p>About:</p>\n    <p class=\"note\">John Doe is one of those names you always have issues with.</p>\n    <p class=\"note\">It can be a real problem booking a hotel room with the name John Doe.</p>\n\n    <p>Companies:</p>\n    <div>\n        <img class=\"logo\" src=\"images/logo.gif\" alt=\"Madgex company logo\" />\n        <img class=\"logo\" src=\"images/logo.gif\" alt=\"Web Feet Media company logo\" />\n    </div>\n    <ul>\n        <li><a class=\"url org\" href=\"http://www.madgex.com/\">Madgex</a> <span class=\"title\">Creative Director</span></li>\n        <li><a class=\"url org\" href=\"http://www.webfeetmedia.com/\">Web Feet Media Ltd</a> <span class=\"title\">Owner</span></li>\n    </ul>\n    \n    <p>Tags: \n    <a rel=\"tag\" class=\"category\" href=\"http://en.wikipedia.org/wiki/design\">design</a>, \n    <a rel=\"tag\" class=\"category\" href=\"http://en.wikipedia.org/wiki/development\">development</a> and\n    <a rel=\"tag\" class=\"category\" href=\"http://en.wikipedia.org/wiki/web\">web</a>\n    </p>\n    \n    <p>Phone numbers:</p>\n    <ul>\n        <li class=\"tel\">\n            <span class=\"type\">Work</span> (<span class=\"type\">pref</span>erred):\n            <span class=\"value\">+1 415 555 100</span>\n        </li>\n        <li class=\"tel\"><span class=\"type\">Home</span>: <span class=\"value\">+1 415 555 200</span></li>\n        <li class=\"tel\"><span class=\"type\">Postal</span>: <span class=\"value\">+1 415 555 300</span></li>\n    </ul>\n    \n    <p>Emails:</p>\n    <ul>\n        <li><a class=\"email\" href=\"mailto:john.doe@madgex.com\">John Doe at Madgex</a></li>\n        <li><a class=\"email\" href=\"mailto:john.doe@webfeetmedia.com\">John Doe at Web Feet Media</a></li>\n    </ul>\n    <p>John Doe uses <span class=\"mailer\">PigeonMail 2.1</span> or <span class=\"mailer\">Outlook 2007</span> for email.</p>\n\n    <p>Addresses:</p>\n    <ul>\n        <li class=\"label\">\n            <span class=\"adr\">\n                <span class=\"type\">Work</span>: \n                <span class=\"street-address\">North Street</span>, \n                <span class=\"locality\">Brighton</span>, \n                <span class=\"country-name\">United Kingdom</span>\n            </span>\n            \n        </li>\n        <li class=\"label\">\n            <span class=\"adr\">\n                <span class=\"type\">Home</span>: \n                <span class=\"street-address\">West Street</span>, \n                <span class=\"locality\">Brighton</span>, \n                <span class=\"country-name\">United Kingdom</span>\n            </span>\n        </li>\n    </ul>\n    \n    <p>In emergency contact: <span class=\"agent\">Jane Doe</span> or <span class=\"agent vcard\">Dave Doe</span>.</p>\n    <p>Key: <span class=\"key\">hd02$Gfu*d%dh87KTa2=23934532479</span></p>\n</div>";
   var expected = {"items":[{"type":["h-card"],"properties":{"name":["John Doe"],"given-name":["John"],"family-name":["Doe"],"sound":["http://www.madgex.com/johndoe.mpeg"],"photo":["http://example.com/images/photo.gif"],"nickname":["Man with no name","Lost boy"],"note":["John Doe is one of those names you always have issues with.","It can be a real problem booking a hotel room with the name John Doe."],"logo":["http://example.com/images/logo.gif","http://example.com/images/logo.gif"],"url":["http://www.madgex.com/","http://www.webfeetmedia.com/"],"org":["Madgex","Web Feet Media Ltd"],"title":["Creative Director","Owner"],"category":["design","development","web"],"tel":["+1 415 555 100","+1 415 555 200","+1 415 555 300"],"email":["mailto:john.doe@madgex.com","mailto:john.doe@webfeetmedia.com"],"mailer":["PigeonMail 2.1","Outlook 2007"],"label":["Work: \n                North Street, \n                Brighton, \n                United Kingdom","Home: \n                West Street, \n                Brighton, \n                United Kingdom"],"adr":[{"value":"Work: \n                North Street, \n                Brighton, \n                United Kingdom","type":["h-adr"],"properties":{"street-address":["North Street"],"locality":["Brighton"],"country-name":["United Kingdom"],"name":["Work: \n                North Street, \n                Brighton, \n                United Kingdom"]}},{"value":"Home: \n                West Street, \n                Brighton, \n                United Kingdom","type":["h-adr"],"properties":{"street-address":["West Street"],"locality":["Brighton"],"country-name":["United Kingdom"],"name":["Home: \n                West Street, \n                Brighton, \n                United Kingdom"]}}],"agent":["Jane Doe",{"value":"Dave Doe","type":["h-card"],"properties":{"name":["Dave Doe"]}}],"key":["hd02$Gfu*d%dh87KTa2=23934532479"]}}],"rels":{"tag":["http://en.wikipedia.org/wiki/design","http://en.wikipedia.org/wiki/development","http://en.wikipedia.org/wiki/web"]},"rel-urls":{"http://en.wikipedia.org/wiki/design":{"text":"design","rels":["tag"]},"http://en.wikipedia.org/wiki/development":{"text":"development","rels":["tag"]},"http://en.wikipedia.org/wiki/web":{"text":"web","rels":["tag"]}}};

   it('multiple', function(){
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
