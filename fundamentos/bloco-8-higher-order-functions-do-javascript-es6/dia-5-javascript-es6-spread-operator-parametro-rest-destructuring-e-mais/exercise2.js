// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
let suma = 0;
const sum = (...parametros) => {
    parametros.forEach(parametro => suma += parametro);
    return suma;
}

console.log(sum(2,4,6,5,10));