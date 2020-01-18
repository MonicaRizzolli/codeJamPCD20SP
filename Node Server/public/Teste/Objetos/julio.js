let julio = []; // lista de objetos

function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  background(255);
  let tempo = millis();

  for (let i = 0; i < julio.length; i ++){
    let o = julio[i];
    o.update();
    o.desenha();
    if (tempo - o.tempo > o.vida) julio.splice(i, 1); // mata o objeto quando atinge o tempo maximo
  }
}

function mouseReleased(){
  let obj = new Julio(mouseX, mouseY);
  julio.unshift(obj);
  fullscreen(true);
}

class Julio{
  constructor(x,y){
    this.tam = 50; // tamanho do objeto
    this.av = random(0, 360);
    this.pos = createVector(x,y); // define a posicao inicial do objetos
    this.vel = createVector(40*sin(radians(this.av)), 40*cos(radians(this.av))); // define a velocidade do seu objeto
    this.tempo = millis(); // pega o tempo que o objeto nasceu
    this.vida = 5000; // tempo de vida do seu objeto
    this.a = 0;
  }

  update(){
    //COLOQUE AQUI O CODIGO DE COMPORTAMENTO DO OBEJTO
    this.vel.x = this.vel.x * 0.96;
    this.vel.y = this.vel.y * 0.96;
    this.pos.add(this.vel);
    this.a = this.a + 5;
    this.tam = this.tam * 0.9;
  }

  desenha(){
    //COLOQUE AQUI O DESENHO DO SEU OBJETO
    fill(0);

    beginShape();
    for (let i=0; i<360; i+=120) {
      vertex(this.pos.x + this.tam*4*sin(radians(i+this.a)), this.pos.y + this.tam*4*cos(radians(i+this.a)));
    }

    beginContour();
    for (let i=0; i>-360; i-=120) {
      vertex(this.pos.x + random (-15, 15) + this.tam*2*sin(radians(i+this.a)), this.pos.y + random (-15, 15) + this.tam*2*cos(radians(i+this.a)));
    }
    endContour();
    endShape(CLOSE);

  }

}
