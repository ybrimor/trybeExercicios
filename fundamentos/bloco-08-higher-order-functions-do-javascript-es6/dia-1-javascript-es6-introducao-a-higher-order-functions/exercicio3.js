// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswer = (studentAnswers, rightAnswers ) => {
  let counter = 0;
  studentAnswers.forEach((studentAnswer,index)=>{
    if(studentAnswer === 'N.A') {
      counter += 0 ;
    } else if(studentAnswer === rightAnswers[index]){
      counter += 1;
    } else {
      counter += -0.5;
    }
  })
  return counter;
}

const correctAnswers = (rightAnswers, studentAnswers, checkAnswer) => {
  let wrongAnswers = 0;
  studentAnswers.forEach((studentAnswer,index)=>{
    if (studentAnswer !== rightAnswers[index]){
      wrongAnswers += 1;
    }
  })
  return checkAnswer(studentAnswers, rightAnswers ) + 0.5 * wrongAnswers;
}
console.log(`Note:${checkAnswer(studentAnswers, rightAnswers )}`);
console.log(`Correct Answers: ${correctAnswers(rightAnswers, studentAnswers, checkAnswer)}`);