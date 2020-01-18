var express = require('express')
var app = express()
var server = app.listen(3000)

var sketch = express.static('public/Desenho_websockets_com_Pedro_G')
app.use('/', sketch)

var lib = express.static('node_modules/socket.io-client/dist')
app.use('/lib', lib)

var socket = require('socket.io')
var io = socket(server)

io.sockets.on('connection', user => {
	console.log('alguem entrou')
	user.on('draw', data =>{
		user.broadcast.emit('draw', data)
	})
})