let objetos = []; // lista de objetos
let t = 0; // time variable
let k;

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
  let obj = new Fuser(mouseX, mouseY);
  objetos.unshift(obj);
}

class Fuser{
  constructor(x,y){
    this.tam = 20; // tamanho do objeto
    this.pos = createVector(x,y); // define a posicao inicial do objetos
    this.vel = createVector(random(-1,1),random(-1,1)); // define a velocidade do seu objeto
    this.tempo = millis(); // pega o tempo que o objeto nasceu
    this.vida = 5000; // tempo de vida do seu objeto
    noStroke();
    const r = random(25, 55);
    const b = random(25, 55);
  fill(r, 200, b);
  }

  update(){
    //COLOQUE AQUI O CODIGO DE COMPORTAMENTO DO OBEJTO
    this.vel = createVector(random(-1,1),random(-1,1));
    this.pos.add(this.vel);
  }

  desenha(){
    //COLOQUE AQUI O DESENHO DO SEU OBJETO
    // for (let x = 0; x <= width; x = x + 30) {
      // for (let y = 0; y <= height; y = y + 30) {
    const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (width / 2) + yAngle * (height / 2);

      // each particle moves in a circle
      const myX = this.pos.x + 20 * cos(2 * PI * t + angle);
      const myY = this.pos.y + 20 * sin(2 * PI * t + angle);

      ellipse(myX, myY, this.tam, this.tam); // draw particle
    // }
    // }
    t = t + 0.01; // update time
  }

}
