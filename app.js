var Hapi            = require('hapi');


// Create a server with a host and port
var server = new Hapi.Server();

server.connection({
    host: (process.env.PORT)? '0.0.0.0' : 'localhost',
    port: parseInt(process.env.PORT, 10) || 3000
});


// setup routes to serve the test directory and file routes into other modules
server.route([{
	method: ['GET'],
	path: '/microformat-shiv.js',
    handler: {
		file: {
			path: './microformat-shiv.js'
		}
	}
},{
	method: ['GET'],
	path: '/node_modules/chai/chai.js',
    handler: {
		file: {
			path: './node_modules/chai/chai.js'
		}
	}
},{
	method: ['GET'],
	path: '/node_modules/mocha/mocha.js',
    handler: {
		file: {
			path: './node_modules/mocha/mocha.js'
		}
	}
},{
	method: ['GET'],
	path: '/node_modules/mocha/mocha.css',
    handler: {
		file: {
			path: './node_modules/mocha/mocha.css'
		}
	}
},{
	method: ['GET'],
	path: '/node_modules/poncho/node_modules/blanket/dist/qunit/blanket.min.js',
    handler: {
		file: {
			path: './node_modules/poncho/node_modules/blanket/dist/qunit/blanket.min.js'
		}
	}
},{
	method: ['GET'],
	path: '/node_modules/poncho/node_modules/blanket/src/adapters/mocha-blanket.js',
    handler: {
		file: {
			path: './node_modules/poncho/node_modules/blanket/src/adapters/mocha-blanket.js'
		}
	}
},{
	method: 'GET',
	path: '/{path*}',
	handler: {
		directory: {
			path: './test',
			listing: true
		}
	}
},{
	method: 'GET',
	path: '/lib/{path*}',
	handler: {
		directory: {
			path: './lib',
			listing: true,
		}
	}
},{
	method: 'GET',
	path: '/url/{path*}',
	handler: {
		directory: {
			path: './url',
			listing: true,
		}
	}
},{
	method: 'GET',
	path: '/thirdparty/{path*}',
	handler: {
		directory: {
			path: './thirdparty',
			listing: true,
		}
	}
},{
	method: 'GET',
	path: '/performance/{path*}',
	handler: {
		directory: {
			path: './performance',
			listing: true,
		}
	}
}]);


// log repsonses data to console
var goodOptions = {
    opsInterval: 1000,
    reporters: [{
        reporter: require('good-console'),
        events: { log: '*', response: '*' }
    }]
};


// Register plug-in and start
server.register([{
    register: require('good'),
    options: goodOptions
  },{
    register: require('blipp'),
  }], function (err) {
      if (err) {
          console.error(err);
      }else {
          server.start(function () {
              console.info('Server started at ' + server.info.uri);
          });
      }
  });
