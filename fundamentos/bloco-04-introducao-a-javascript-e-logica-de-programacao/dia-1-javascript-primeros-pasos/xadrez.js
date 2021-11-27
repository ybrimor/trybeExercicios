let pecaDeXadrez; 
console.log('Escreva o nome de uma peça de xadrez');
pecaDeXadrez = "REI";
switch(pecaDeXadrez = pecaDeXadrez.toLowerCase()){
  case 'rei' :
    console.log('Pode mover-se em qualquer direção, porém apenas uma casa por vez.');
    break;
  case 'rainha' :
    console.log('Pode mover-se em qualquer direção quantas casas quiser, desde que estejam livres.');
    break;
  case 'torre' :
    console.log('Pode mover-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser, desde que estejam livres.');
    break; 
  case 'bispo' :
    console.log('Pode mover-se em na diagonal, quantas casas quiser, desde que estejam livres.');
    console.log('O Bispo que iniciar a partida em uma casa branca somente poderá transitar pelas brancas,');
    console.log('enquanto o Bispo que inicia em uma casa preta somente poderá transitar pelas casas pretas.');
    break; 
  case 'cavalo' :
    console.log('É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas.');
    console.log('O movimento do Cavalo é conhecido por “um-dois” ou “em L”.Ele pode andar duas casas nahorizontal ');
    console.log('e uma na vertical, ou duas na vertical e uma na horizontal,uma na horizontal e duas na vertical, e assim por diante');
    break; 
  case 'peão' :
    console.log('Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.');
    console.log('O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento');
    console.log('diferente do utilizado para avançar no tabuleiro. O peão pode capturar as peças que estejam uma fileira acima,');
    console.log('mas nas colunas adjacentes a sua.');
    break;
  default :
    console.log('Deve ingresar o nome de uma peça de xadrez');
}