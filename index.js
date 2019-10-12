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
	
var rpiDhtSensor = require('rpi-dht-sensor');
 var dht = new rpiDhtSensor.DHT11(4);
 
function readTemp () {
var readout = dht.read();

readout.temperature.toFixed(2).value = temp;
readout.humidity.toFixed(2).value = humid;



	const temp = readTemp();
​
	io.emit('new-data', {
		temp,
		humid
	})
}
}

setInteval(readSensor,2000);
