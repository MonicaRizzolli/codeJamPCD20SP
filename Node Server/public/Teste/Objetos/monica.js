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
  let obj = new Objeto(mouseX, mouseY);
  objetos.unshift(obj);
  //fullscreen(true);
}

class Objeto{
  constructor(x,y){
    this.tam = random(100,300); // tamanho do objeto
    this.pos = createVector(x,y); // define a posicao inicial do objetos
    this.vel = createVector(random(-15,15),random(-15,15)); // define a velocidade do seu objeto
    this.tempo = millis(); // pega o tempo que o objeto nasceu
    this.vida = 5000; // tempo de vida do seu objeto
  }

  update(){
    //COLOQUE AQUI O CODIGO DE COMPORTAMENTO DO OBEJTO
    this.pos.add(this.vel);
  }

  desenha(){
    //COLOQUE AQUI O DESENHO DO SEU OBJETO
    push()
    translate(this.pos.x, this.pos.y)
    noFill()
    beginShape()
    stroke(random(256),random(256),random(256))
    strokeWeight(random(15))
    vertex(0, 0)
    vertex(random(-this.tam,this.tam), random(-this.tam,this.tam))
    vertex(random(-this.tam,this.tam), random(-this.tam,this.tam))
    vertex(random(-this.tam,this.tam), random(-this.tam,this.tam))
    vertex(random(-this.tam,this.tam), random(-this.tam,this.tam))
    endShape()
    pop()
  }

}

export { setup, draw, mouseReleased, Objeto }