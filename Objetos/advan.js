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
  let obj = new Advan(mouseX, mouseY);
  objetos.unshift(obj);
  fullscreen(true);
}

class Advan{
  constructor(x,y){
    this.iniTamX = 4; // tamanho do objeto
    this.iniTamY = 300; // tamanho do objeto
    this.pos = createVector(x,y); // define a posicao inicial do objetos
    this.vel = createVector(0,0); // define a velocidade do seu objeto
    this.tempo = millis(); // pega o tempo que o objeto nasceu
    this.vida = 5000; // tempo de vida do seu objeto
      this.inimY = mouseY;
  }

  update(){
    //COLOQUE AQUI O CODIGO DE COMPORTAMENTO DO OBEJTO
    //Adicionei aceleração
    this.acc = createVector(random(-0.5, 0.5),0);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
      
    //limitar velocidade
    this.vel.limit(10);
  }

  desenha(){
    //COLOQUE AQUI O DESENHO DO SEU OBJETO
    
    noStroke();
    for (var i = 0; i<30; i++){
        fill(0,0,255);
        this.tamY = sin((frameCount/24) + i*200) * this.inimY;
        rect(this.pos.x + this.iniTamX * i, 0, this.iniTamX, this.tamY);
        
    }
  }

}
