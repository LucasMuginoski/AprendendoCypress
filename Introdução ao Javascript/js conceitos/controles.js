/*  Controles de Fluxo */

var idade= prompt("Qual a sua idade?");

if (idade >= 18){
    console.log("Posso tirar CNH e ir no show do Iron Maiden, run to the hills!!!");
}
else if(idade >= 12){
    console.log("Posso ir ao show do Jonas Brothers!")
}
else{
    console.log("Não posso tirar CNH e nem aos shows de música");
}

var ingresso = prompt("Qual seu tipo de ingresso?")
switch(ingresso){
    case 'vip':
        console.log("Irei ficar no camarote!");
        break;
    case 'premium':
         console.log("Irei ficar na pista premium!");
        break;
    case 'comum':
        console.log("Irei ficar na pista comum!");
        break;
    default:
        console.log("Tipo de ingresso inválido!");
        break;
}
