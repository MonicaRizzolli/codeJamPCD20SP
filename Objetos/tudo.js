let t = 0; // time variable
let k;
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
  // let obj = new Advan(mouseX, mouseY);
  objetos.unshift(obj);
  let obj1 = new Burnier(mouseX, mouseY);
  objetos.unshift(obj1);
   let obj2 = new Fuser(mouseX, mouseY);
  objetos.unshift(obj2);
  let obj3 = new Julio(mouseX, mouseY);
  objetos.unshift(obj3);
  let obj4 = new Macarena(mouseX, mouseY);
  objetos.unshift(obj4);
  let obj5 = new Maluta(mouseX, mouseY);
  objetos.unshift(obj5);
  let obj6 = new Monica(mouseX, mouseY);
  objetos.unshift(obj6);
  let obj7 = new Villares(mouseX, mouseY);
  objetos.unshift(obj7);
  let obj8 = new Grazi(mouseX, mouseY);
  objetos.unshift(obj8);
  let obj9 = new Rafa(mouseX, mouseY);
  objetos.unshift(obj9);

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
    const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (width / 2) + yAngle * (height / 2);

      // each particle moves in a circle
      const myX = this.pos.x + 20 * cos(2 * PI * t + angle);
      const myY = this.pos.y + 20 * sin(2 * PI * t + angle);

      ellipse(myX, myY, this.tam, this.tam); // draw particle
    t = t + 0.01; // update time
  }

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

class Macarena{
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

class Maluta{
  constructor(x,y){
    this.tam = 1000; // tamanho do objeto
    this.pos = createVector(x,y); // define a posicao inicial do objetos
    this.v = 3;
    this.vel = p5.Vector.random2D();
    this.vel.setMag(this.v);
    this.tempo = millis(); // pega o tempo que o objeto nasceu
    this.vida = 400; // tempo de vida do seu objeto
    this.ciclo = 0;
    this.tCiclo = random(10,150);
    this.pontos = [];
    this.pontos.unshift(createVector(this.pos.x, this.pos.y));
    this.cor = color(random(255), 25, random(255));
  }

  update(){
    if (this.ciclo > this.tCiclo) this.mudaDir();
    else  this.ciclo ++;
    this.pos.add(this.vel);
  }

  mudaDir(){
    this.tCiclo = random(100,150);
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

class Monica{
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

class Grazi{
  constructor(x,y){
    this.tam = 8; // tamanho do objeto
    this.pos = createVector(x,y); // define a posicao inicial do objetos
    this.vel = createVector(random(-1,1),random(-1,1)); // define a velocidade do seu objeto
    this.tempo = millis(); // pega o tempo que o objeto nasceu
    this.vida = 500000; // tempo de vida do seu objeto
  }

  update(){
    //COLOQUE AQUI O CODIGO DE COMPORTAMENTO DO OBEJTO
    this.vel = createVector(random(-1,1),random(-1,1));
    this.pos.add(this.vel);
    this.tam +=5;
  }

  desenha(){
    //COLOQUE AQUI O DESENHO DO SEU OBJETO
    colorMode(HSB, 100);
    fill(0,0,0,0);
    var h = map(this.tam, 8, 1800, 20, 100);  
    for (let i = 0; i < 20; i++) {
      let s = map(i,0,20,100,0);
      //let b = map(i,0,10,100,0);
      stroke(h, s, 90);
      strokeWeight(1)
      ellipse(this.pos.x, this.pos.y, this.tam-i*10, this.tam-i*10);
    }
  }

}

class Rafa{
  constructor(x,y){
    this.tam = 10; // tamanho do objeto
    this.pos = createVector(x,y); // define a posicao inicial do objetos
    this.vel = createVector(random(-30,30),random(-30,30)); // define a velocidade do seu objeto
    this.tempo = millis(); // pega o tempo que o objeto nasceu
    this.vida = 3000; // tempo de vida do seu objeto
    this.bounce = 0;
  }

  update(){ 

    this.pos.add(this.vel);
    this.pos0 = this.pos;
    this.pos0.add(this.vel)
    this.vel.mult(0.95);
    this.bounce += 1;
    if (this.bounce == 20) {
        let len = this.vel.mag();
        let new_vel = p5.Vector.random2D();
        this.vel = p5.Vector.mult(new_vel, len);
        this.bounce = 0;
    }
    
  }

  desenha(){
    //COLOQUE AQUI O DESENHO DO SEU OBJETO
    noStroke();
    fill(255, 0, 0);
    ellipse(this.pos.x, this.pos.y, this.tam, this.tam); 
  }

}
