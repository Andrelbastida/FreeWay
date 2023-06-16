// imagens e sons do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

//sons do jogo

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("imagens/Rual.png");
  imagemDoAtor = loadImage("imagens/ator.png");
  imagemCarro = loadImage("imagens/Carro1visaolateral1.gif");
  imagemCarro2 = loadImage("imagens/Carro7visaolateral1.gif");
  imagemCarro3 = loadImage("imagens/Carro3visaolateral1.gif");  
  imagemCarro4 = loadImage("imagens/Carro4visaolateral1.gif");
  imagemCarro5 = loadImage("imagens/Carro2visaolateral1.gif");
  imagemCarro6 = loadImage("imagens/Carro6visaolateral1.gif"); 
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro4, imagemCarro5, imagemCarro6]
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}