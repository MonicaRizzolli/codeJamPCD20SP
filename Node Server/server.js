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
	const all = [0,1,2,3,4,5,6,7,8,9]
	user.on('draw', data =>{
		user.broadcast.emit('create', all[Math.floor(Math.random() * (all.length - 1)) + 1])
	})
})