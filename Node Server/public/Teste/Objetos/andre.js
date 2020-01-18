let objetos = []; // lista de objetos

function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  background(255);
  let tempo = millis();

  for (let i = 0; i < objetos.length; i ++){
    let o = objetos[i];
    o.update();
    o.desenha();
    if (tempo - o.tempo > o.vida) objetos.splice(i, 1); // mata o objeto quando atinge o tempo maximo
  }
}

function mouseReleased(){
  let obj = new Burnier(mouseX, mouseY);
  objetos.unshift(obj);
  fullscreen(true);
}

class Burnier{
  constructor(x,y){
    this.tam = 10; // tamanho do objeto
    this.pos = createVector(x,y); // define a posicao inicial do objetos
    this.v = 5;
    this.vel = p5.Vector.random2D();
    this.vel.setMag(this.v);
    this.tempo = millis(); // pega o tempo que o objeto nasceu
    this.vida = 60000; // tempo de vida do seu objeto
    this.ciclo = 0;
    this.tCiclo = random(10,150);
    this.pontos = [];
    this.pontos.unshift(createVector(this.pos.x, this.pos.y));
    this.cor = color(random(255), random(255), random(255));
  }

  update(){
    if (this.ciclo > this.tCiclo) this.mudaDir();
    else  this.ciclo ++;
    this.pos.add(this.vel);
  }

  mudaDir(){
    this.tCiclo = random(10,150);
    this.ciclo = 0;
    if (random(1)>0.5) this.vel.rotate(PI/2);
    else this.vel.rotate(-PI/2);
    this.pontos.unshift(createVector(this.pos.x, this.pos.y));
  }

  desenha(){
    let strk = map(constrain(millis() - this.tempo,0,this.vida), 0, this.vida, 10,0);

    noFill();
    stroke(this.cor);
    strokeWeight(strk)
    beginShape();
    vertex(this.pos.x, this.pos.y);
    for(let i = 0; i < this.pontos.length; i++){
      vertex(this.pontos[i].x, this.pontos[i].y);
    }
    endShape();
  }

}
