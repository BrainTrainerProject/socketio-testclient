var io = require('socket.io-client');

var socket = io('http://localhost:8080', {
  extraHeaders: {
    Authorization: "Bearer knWIpylbMRBeW23g"
  }
});

socket.on('connect', function() {
	console.log('hi');
});

socket.on('disconnect', function(data) {
	console.log('bye ' + data);
});

socket.on('message', function(data) {
	console.log('message ' + data);
});

socket.on('set_new', function(data) {
	console.log('set_new ' + data);
});

console.log('done');
