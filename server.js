var http = require('http');
var fs = require('fs');
var events = require('events');
var eventEmitter = new events.EventEmitter();

var handler = function() {
    console.log('Se disparó el evento.');
};

eventEmitter.on('evento', handler);
http.createServer( function (req, res) {
    eventEmitter.emit('evento');
    res.end();
}).listen(8080);