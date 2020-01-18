var sw = 8;
var desenho;

var socket;

function setup() {
  createCanvas(displayWidth, displayHeight);
  
  socket = io.connect('http://192.168.0.15:3000');
  socket.on('draw', peerDraw)
  
  
  desenho = createGraphics(width, height)
}

function draw() {
  background(0)
  image(desenho, 0, 0)
  noFill()
  stroke(255)
  ellipse( mouseX, mouseY, sw, sw )
}

function keyReleased(){
  //print( key )
  //if( key === 'c' ) 
  desenho.background(0)
}

function peerDraw(data){
  desenho.stroke( "#2AB3F5" )
  desenho.strokeWeight( data.msw )
  desenho.line( data.px, data.py, data.x, data.y )
}

function mousePressed() {
  fullscreen(true);
}

function mouseDragged(){
  desenho.stroke( "#2AA8E5" )
  desenho.strokeWeight( sw )
  desenho.line( pmouseX, pmouseY, mouseX, mouseY )
  
  var data = {
    px: pmouseX,
    py: pmouseY,
    x: mouseX,
    y: mouseY,
    msw: sw,
    name: "John"
  }
  socket.emit('draw', data );
}
function mouseWheel(event) {
  sw = constrain( sw + event.delta, 1, 100 );
}
