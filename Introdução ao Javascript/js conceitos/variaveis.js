/*  Variáveis em JS 
    Local da memória onde aloca-se valores e podem variar, tipagem dinamica
    
*/
var nomeVariavel = "receber Valor"; //string
var number = 10; //inteiro

console.log(number);
console.log(typeof number);

console.log(nomeVariavel);
console.log(typeof nomeVariavel);

var n1 = 10;
var n2 = 20;
console.log(n1+n2);
// operação de soma numero+string faz a contacatenação 10 + "20" = 1020


// o js implementou o valor (string) da variavel nome no elemento localizado pelo id="user". O js sugiu para dar vida ao HTML, usando ou nao de apis.        // var nome = prompt("Qual o seu nome?");
// usando o prompt todo valor inserido é tipado como string, por isso usar parseInt para tipar como inteiro
var recebeIdade = prompt("Informe a sua idade:");
var idade = parseInt(recebeIdade);


var ativo = true;
document.getElementById("user").innerText = nome;


console.log(typeof(nome));
console.log(nome);

console.log(typeof(idade));
console.log(idade);

console.log(typeof(ativo));
console.log(ativo);