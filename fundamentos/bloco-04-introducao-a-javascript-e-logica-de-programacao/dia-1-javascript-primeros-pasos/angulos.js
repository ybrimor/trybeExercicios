const angulo1 = 60;
const angulo2 = 150;
const angulo3 = 90;
let soma = angulo1 + angulo2 + angulo3;
if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0){
    console.log("valor de ângulo inválido")    
} else if (soma == 180){
    console.log("true");
} else {
    console.log("false");
}