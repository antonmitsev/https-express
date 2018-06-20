const port = 3000
const spdy = require('spdy')
const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()


app.get('*', (req, res) => {
  res
    .status(200)
    .json({message: 'ok'})
})

const options = {
  key: fs.readFileSync('keys/server.key'),
  cert:  fs.readFileSync('keys/server.crt')
}

spdy
  .createServer(options, app)
  .listen(port, (error) => {
    if (error) {
      console.error(error)
      return process.exit(1)
    } else {
      console.log('Listening on port: ' + port + '.')
    }
  }, function() {   //POSIX based - chane user ID not to work with root!
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


