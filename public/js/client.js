'use strict';

var LedStatus = "off";
const socket = io();

document.querySelector('.btn-check').addEventListener('click', function(event){
	event.preventDefault();
	LedStatus == "on"?(LedStatus = "off",socket.emit('led-off')):(LedStatus = "on",socket.emit('led-on'));    
});
