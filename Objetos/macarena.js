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
  fullscreen(true);
}

class Objeto{
  constructor(x,y){
    this.tam = 10; // tamanho do objeto
    this.pos = createVector(x,y); // define a posicao inicial do objetos
    this.vel = createVector(random(-1,1),random(-1,1)); // define a velocidade do seu objeto
    this.tempo = millis(); // pega o tempo que o objeto nasceu
    this.texto = random(["FORA BOLSONARO","LULA LIVRE"]);
    this.vida = this.texto.length * 500; // tempo de vida do seu objeto
  }

  update(){
    //COLOQUE AQUI O CODIGO DE COMPORTAMENTO DO OBEJTO
    this.vel = createVector(random(-1,1),random(-1,1));
    this.pos.add(this.vel);
  }

  desenha(){
    //COLOQUE AQUI O DESENHO DO SEU OBJETO
    fill(random(255),random(255),random(255));
    textSize(30);
    let index = int((millis() - this.tempo) / 500);
    text(this.texto.charAt(index), this.pos.x, this.pos.y);
  }

}
