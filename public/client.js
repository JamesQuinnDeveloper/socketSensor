//Make Connection

var socket = io.connect('http://localhost:8989');

const cb = payload => {
	const { temp, humid } = payload;
	document.findElementById('temp').value = temp;
	document.findElementById('humid').value = humid;
}
​
socket.on('new-data', cb);



​


