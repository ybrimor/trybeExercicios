let num = 60;
let numPrimo = [];
for (let index = 1; index <= num; index += 1){
  let divisores = 2;
  if (index != 2 && index % 2 === 0){
    divisores = divisores + 1;
  } else if (index != 3 && index % 3 === 0){
    divisores =divisores + 1;
  } else if (index != 5 && index % 5 === 0){
    divisores =divisores + 1;
  } else if (index != 7 && index % 7 === 0){
    divisores =divisores + 1;
  }
  if (divisores === 2){
    numPrimo.push(index); 
  }
}

console.log('O maior  número primo entre 0 e', num, 'é:', Math.max(...numPrimo));