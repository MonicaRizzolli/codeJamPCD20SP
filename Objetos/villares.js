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
  let obj = new Villares(mouseX, mouseY);
  objetos.unshift(obj);
  //fullscreen(true);
}

class Villares{
  constructor(x,y){
    this.tam = random(100,300); // tamanho do objeto
    this.pos = createVector(x,y); // define a posicao inicial do objetos
    this.vel = createVector(random(-15,15),random(-15,15)); // define a velocidade do seu objeto
    this.tempo = millis(); // pega o tempo que o objeto nasceu
    this.vida = 5000; // tempo de vida do seu objeto
    this.cor = color(random(256),random(256),random(256), 100)

  }

  update(){
    //COLOQUE AQUI O CODIGO DE COMPORTAMENTO DO OBEJTO
    this.pos.add(this.vel);
  }

  desenha(){
    //COLOQUE AQUI O DESENHO DO SEU OBJETO
    push()
    translate(this.pos.x, this.pos.y)
    rotate(frameCount / 100)
    noFill()
    fill(this.cor)
    strokeWeight(random(15))
    triangle(0, 0, this.tam, 0,  0, this.tam)
    pop()
  }

}
