let tamanhoBase = 8;
let triangulo = [];
for (let indexLinha = 0; indexLinha < tamanhoBase; indexLinha +=1) {
  let linha = [];
  for (let indexColumna = 0; indexColumna <= indexLinha; indexColumna +=1){
       linha.push('*');
  }
triangulo [indexLinha] = linha;
}
console.log(tamanhoBase);
console.log(triangulo);