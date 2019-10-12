var express = require('express');
var socket = require('socket.io');

//App setup
var app = express();
var server = app.listen(8989,function(){
    console.log('listening on 8989!')
}); 

// Static files

app.use(express.static('public'));

var io = socket(server);


io.on('connection',function(socket){
    console.log('made socket connection', socket.id)
});


const readSensor = () => {
	// read sensor data here ***
	const temp = readTemp();
​
	io.emit('new-data', {
		temp
	})
}

setTimeout(readSensor, 2000);