//código do carro

let xCarros = [1000, 1000, 1000, 1000, 1000, 1000];
let yCarros = [50, 112, 174, 236, 298, 360];
let velocidadeCarros = [4, 3.5, 3.2, 5, 2.3, 4.5];
let comprimentoCarro = 140;
let alturaCarro = 65;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 1120;
    }
  }
}

function passouTodaATela(xCarro){
  return xCarro < - 130;
}





