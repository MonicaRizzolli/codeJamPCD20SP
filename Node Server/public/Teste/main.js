var desenho;
var socket;

function setup() {
    createCanvas(displayWidth, displayHeight);
    socket = io.connect('http://192.168.1.3:3000');
    socket.emit('draw');
    socket.on('create', peerDraw)


    desenho = createGraphics(width, height)
}

function draw() {
    background(0)
    image(desenho, 0, 0)
}

function peerDraw() {
    
}