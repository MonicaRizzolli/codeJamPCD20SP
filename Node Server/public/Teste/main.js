const sw = 8;
const desenho;
const socket;

function setup() {
    createCanvas(displayWidth, displayHeight);

    socket = io.connect('http://192.168.0.15:3000');
    socket.on('draw', peerDraw)

    desenho = createGraphics(width, height)
}

function peerDraw(data) {
    console.log('peerDraw', data)
}