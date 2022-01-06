const estadosBrasil = ["Acre","Alagoas","Amazonas","Amapá"];
const siglasEstados =["AC","AL","AM","AP"];

for (var index = 0; index < estadosBrasil.length; index += 1){
    var pai = document.getElementById('dado-estado');
    pai.innerHTML += '<option></option>';
    pai.innerHTML.innerText = 'a';
}