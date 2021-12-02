
function verificaPalindromo(word){
  word = word.split("");
  let palindromo = false;
  for(let index = 0; index < word.length; index +=1){
    if(word[index] === word.reverse()[index]){
      palindromo = true;
    } else {
      palindromo = false;
      break;
    }
  } return (palindromo);
  
}
console.log(verificaPalindromo('arara'));

