function verificarIdade() {
    //criar variáveis e alocar os valores inseridos pelo usuário nela

    var nome = document.querySelector('input[name=nome]');
    var idade = document.querySelector('input[name=idade]');

    if (idade.value == "") {
        alert("Idade é obrigatória");
        return
    }

    var idadeNumerica = parseInt(idade.value);
    if (idadeNumerica > 65){
        alert("Ainda consegue velinho?");
    }
    else if (idadeNumerica >= 18) {
        alert("Okay, você pode tirar sua CNH");
    }
    else if (idadeNumerica >= 10) {
        alert("Você é menor de idade. Sugiro andar de bike!");
    }
    else if(idadeNumerica >= 0) {
        alert("Melhor tomar leite! hauhua");
    }
    else{
        alert("Não faz sentido idades negativas");
    }

}