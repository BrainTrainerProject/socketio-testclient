var io = require('socket.io-client');

// Sender eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuaWNrbmFtZSI6InR3aWVucyIsImlzcyI6Imh0dHBzOi8vYnJhaW50cmFpbmVyLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1OTQyNWU2NWIyY2Q5MDA3YzNmYjU0ODMiLCJhdWQiOiJlcTlMdkZ1TWVrMEQ0YlNjSXNPYkpKMWI2MUJ1S0lCMyIsImV4cCI6MTUyOTE0OTgyNSwiaWF0IjoxNDk3NjEzODI1fQ.yhzCXo-iwg2YePBzVK9bF2Mot117o2iFU-bS8gWNZEU
// Empfaenger eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuaWNrbmFtZSI6InRod2llbnMiLCJpc3MiOiJodHRwczovL2JyYWludHJhaW5lci5ldS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NTk0MjYzN2RhNzIwMzk0MjA4Yzk3ZGJiIiwiYXVkIjoiZXE5THZGdU1lazBENGJTY0lzT2JKSjFiNjFCdUtJQjMiLCJleHAiOjE1MjkxNTQ2NjEsImlhdCI6MTQ5NzYxODY2MX0.lsfACL_jLO0579A_YWpmA_Ub2ZZwTi1ljur9peY2Pmg
var socket = io('http://localhost:8080', {
  extraHeaders: {
    Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuaWNrbmFtZSI6InRod2llbnMiLCJpc3MiOiJodHRwczovL2JyYWludHJhaW5lci5ldS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NTk0MjYzN2RhNzIwMzk0MjA4Yzk3ZGJiIiwiYXVkIjoiZXE5THZGdU1lazBENGJTY0lzT2JKSjFiNjFCdUtJQjMiLCJleHAiOjE1MjkxNTQ2NjEsImlhdCI6MTQ5NzYxODY2MX0.lsfACL_jLO0579A_YWpmA_Ub2ZZwTi1ljur9peY2Pmg"
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

// data will be a stringifyed object of Activity type

// Set events
socket.on('set_new', function(data) {
	console.log('set_new ' + data);
});

socket.on('set_update', function(data) {
  console.log('set_update ' + data);
});

socket.on('set_delete', function(data) {
  console.log('set_delete ' + data);
});

// Notecard events
socket.on('notecard_new', function(data) {
  console.log('notecard_new ' + data);
});

socket.on('notecard_update', function(data) {
  console.log('notecard_update ' + data);
});

socket.on('notecard_delete', function(data) {
  console.log('notecard_delete ' + data);
});

console.log('running');
