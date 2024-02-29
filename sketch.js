let xBolinha = 300;
let yBolinha = 200;
let diametro = 18;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raio = diametro / 2;

let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 7;
let raqueteAltura = 90;

let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  movimentaRaqueteDoOponente();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  //verificaColisaoRaqueteOponenteBiblioteca();
  incluiPlacar();
  marcaPonto();
  bolinhaNaoFicaPresa();
  
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x, y){

rect(x, y, raqueteComprimento, raqueteAltura);

}

function movimentaMinhaRaquete(){

  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(x, y) {
   colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  
  if(colidiu){
    velocidadeXBolinha *= -1;
  }

}

function movimentaRaqueteDoOponente() {

  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
  
  yRaqueteOponente += velocidadeYOponente;

}

function incluiPlacar() {
  
  stroke(255);
  textAlign(CENTER);
  textSize(20);
  fill(color(255, 140, 0));
  rect(150, 10, 50, 24);
  fill(255);
  text(meusPontos, 175, 29);
  fill(color(255, 140, 0));
  rect(450, 10, 50, 24);
  fill(255);
  text(pontosDoOponente, 475, 29);
  
}

function marcaPonto() {

  if (xBolinha > 590) {

    meusPontos += 1;
  
  }
  
  if (xBolinha < 10) {

    pontosDoOponente += 1;
  
  }

}


function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}
