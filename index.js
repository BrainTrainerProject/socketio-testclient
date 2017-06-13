var io = require('socket.io-client');

var socket = io('http://localhost:8080', {
  extraHeaders: {
    Authorization: "Bearer Mz11As3GozUusMnW"
  }
});

socket.on('connect', function() {
	console.log('hi');
});

socket.send('message');

console.log('done');
