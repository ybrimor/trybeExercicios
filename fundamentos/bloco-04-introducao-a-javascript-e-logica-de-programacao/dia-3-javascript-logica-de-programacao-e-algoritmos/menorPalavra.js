let array = ['java','javascript','python','html','css'];
let tamanho = [];
let menor = array[0];
for (let index = 0; index < array.length; index += 1){
    tamanho.push(array[index].length);
    if (menor.length > tamanho[index]){
        menor = array[index];
    }
}
console.log('A menor palavra de:', array, 'é:', menor);