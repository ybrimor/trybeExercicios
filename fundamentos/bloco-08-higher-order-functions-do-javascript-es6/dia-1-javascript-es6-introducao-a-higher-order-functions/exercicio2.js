// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const resultadoSorteio = (apuesta, resultado) => ((apuesta === resultado) ?  "Parabéns você ganhou" : "Tente novamente");


const sorteio = (apuesta,resultadoSorteio) => {
    const resultado = Math.round(4*Math.random()+ 1);
    console.log(resultado);
    return resultadoSorteio(apuesta,resultado);
}
console.log(sorteio(2,resultadoSorteio));
