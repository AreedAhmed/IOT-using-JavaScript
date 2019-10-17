'use strict';


const five = require("johnny-five");
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
var board = new five.Board();

app.use(express.static('public'));

board.on("ready", function() {
  var led = new five.Led(10);
  io.on('connection', function (socket) {
		socket.on('led-on', function (data) {
			led.on();
			console.log("LED On");
		});

		socket.on('led-off', function (data) {
			led.off();
			console.log("LED Off");
		});
	});
 });

http.listen(4000, function () {
    console.log('listening on port number 4000');
});