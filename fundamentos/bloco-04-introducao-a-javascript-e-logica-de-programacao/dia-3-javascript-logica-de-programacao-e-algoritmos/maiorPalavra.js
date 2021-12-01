let array = ['java','javascript','python','html','css'];
let tamanho = [];
let mayor=[];
for (let index = 0; index < array.length; index += 1){
    tamanho.push(array[index].length);
    if (mayor.length < tamanho[index]){
        mayor = array[index];
    }
}
console.log('La mayor palavra de:', array, 'es:', mayor);
