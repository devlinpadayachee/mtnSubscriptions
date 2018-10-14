'use strict';

const Hapi = require('hapi');

const server = Hapi.server({
  port: 3000,
  host: 'localhost'
});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    //request.log(['a', 'b'], 'Request into hello world')
    request.logger.info('In handler %s', request.path);
    return 'Hello, world!';
  }
});

// server.route({
//     method: 'GET',
//     path: '/{name}',
//     handler: (request, h) => {
//
//         return 'Hello, ' + encodeURIComponent(request.params.name) + '!';
//     }
// });

const init = async () => {

  await server.register({
    plugin: require('hapi-pino'),
    options: {
      prettyPrint: true,
      logEvents: ['response']
    }
  });

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

init();
