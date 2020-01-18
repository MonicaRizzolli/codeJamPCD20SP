var express = require('express')
var app = express()
var server = app.listen(3000)

var sketch = express.static('public/Teste')
app.use('/', sketch)

var lib = express.static('node_modules/socket.io-client/dist')
app.use('/lib', lib)

var socket = require('socket.io')
var io = socket(server)

io.sockets.on('connection', user => {
	user.on('draw', data =>{
		user.broadcast.emit('draw', data)
	})
})