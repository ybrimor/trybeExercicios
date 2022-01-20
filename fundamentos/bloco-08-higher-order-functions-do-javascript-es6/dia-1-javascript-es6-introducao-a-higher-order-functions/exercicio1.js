// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const newEmployees = (newHire) => {
  const employees = {
    id1: newHire('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: newHire(' Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: newHire('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, SUbstituindo as aspas
  }
  return employees;
};
const newMail = (nomeCompleto) => {
  const newUsuario = nomeCompleto.toLowerCase().split(' ').join('_');
  return `${newUsuario}@trybe.com`;
}
const newHire = (nomeCompleto) => ({ fullName: nomeCompleto, email: newMail(nomeCompleto)});



