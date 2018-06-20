#!/usr/bin/env node

const conf = require('./config.js');

/**
 * Module dependencies.
 */

<<<<<<< HEAD
var appl = require('./core/app.js');

var app = new appl();
var app2 = new appl({applicationName: "nodetest"});
=======
var app = require('./core/app.js');
>>>>>>> fa8e4d71558726a8086b8f31fa848d88dd6e315b


var debug = require('debug')('demo:server');
var http = require('http');
const fs = require('fs')
const port = 80
const port2 = 443
const spdy = require('spdy')
const options = {
  key: fs.readFileSync('keys/server.key'),
  cert:  fs.readFileSync('keys/server.crt')
}

//HTTPS server
spdy
  .createServer(options, app)
  .listen(port2)
  .on('error', onError)
  .on('listening', onListening);
/**
 * Create HTTP server.
 */
var server = http.createServer(function(req, res){
  res.writeHead(301,
    {Location: 'https://' + req.headers.host + req.url}
  )
  res.end();
});

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}



if(false){












const port = 443
const spdy = require('spdy')

const express = require('express')

const fs = require('fs')

const app = express()


app.get('*', (req, res) => {
  console.log('accessed!'  + 
  ', port: ' +  req.port + 
  ', host: ' +  req.host + 
    ', hostname: ' +  req.hostname + 
    ', url: ' +  req.url + '(' + req.baseUrl+ ')' +
    ', req.ip:' + req.ip +
    ', timestamp: ' + (new Date).getTime()
  );
  res
    .status(200)
    .json({message: 'ok'})
})

const options = {
  key: fs.readFileSync('keys/server.key'),
  cert:  fs.readFileSync('keys/server.crt')
}



var http = require('http');

http.createServer((req, res) => {
    res.writeHead(301, {Location: 'https://' + req.headers.host + req.url});
    res.end();
  }
).listen(80);



spdy
  .createServer(options, app)
  .listen(port, (error) => {
    if (error) {
      console.error(error)
      return process.exit(1)
    } else {
      console.log('Listening on port: ' + port + '.')
    }
      //POSIX based - chane user ID not to work with root!
    // Listening
    try {
      console.log('Old User ID: ' + process.getuid() + ', Old Group ID: ' + process.getgid());
      process.setgid('users');
      process.setuid('tlhunter');
      console.log('New User ID: ' + process.getuid() + ', New Group ID: ' + process.getgid());
    } catch (err) {
      console.log('Cowardly refusing to keep the process alive as root.');
      //process.exit(1);
    }
  }

);


}