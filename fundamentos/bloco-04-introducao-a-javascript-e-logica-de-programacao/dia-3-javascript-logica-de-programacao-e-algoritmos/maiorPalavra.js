let array = ['java','javascript','python','html','css'];
let tamanho = [];
let maior=[];
for (let index = 0; index < array.length; index += 1){
    tamanho.push(array[index].length);
    if (maior.length < tamanho[index]){
        maior = array[index];
    }
}
console.log('La maior palavra de:', array, 'é:', maior);
