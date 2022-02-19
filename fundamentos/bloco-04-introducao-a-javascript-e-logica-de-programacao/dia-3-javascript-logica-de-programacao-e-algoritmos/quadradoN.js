let tamanhoLado = 4;
let quadrado = [];
for (let indexLinha = 0; indexLinha < tamanhoLado; indexLinha +=1) {
  let linha = [];
  for (let indexColumna = 0; indexColumna < tamanhoLado; indexColumna +=1){
       linha.push('*');
  }
quadrado [indexLinha] = linha;
}
console.log(tamanhoLado);
console.log(quadrado);