let tamanhoLado = 4;
let linha = [];
let quadrado = [];
for (let indexLinha = 0; indexLinha < tamanhoLado; indexLinha +=1) {
  for (let indexColumna = 0; indexColumna < tamanhoLado; indexColumna +=1){
    linha[indexLinha, indexColumna] = '*';
  }
quadrado [indexLinha] = linha;
}
console.log(tamanhoLado);
console.log(quadrado);