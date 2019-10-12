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
	

 
function readTemp () {
	//var rpiDhtSensor = require('rpi-dht-sensor');
	//var dht = new rpiDhtSensor.DHT11(4);
	//var readout = dht.read();

let temp = '50';
let humid = '60';
}
	const temp = readTemp();
​
	io.emit('new-data', {
		temp
		//humid
	})
}


setInteval(readSensor,2000);
