import SignupPage from '../pages/signupPage';
//importando a classe SignupPage do aquivo signupPage na pasta pages;

describe('Cadatro', () => {

    //instanciar Globalmente SignupPage na variavel signup para todos os cenários
    var signup = new SignupPage();

    beforeEach(function () {
        cy.fixture('deliver').then((d) => {
            //d é a abreviação de deliver (pode ser qlqr coisa)
            this.deliver = d;

        })
    })

    it('Usuário deve tornar-se um entregador', function () {
        //instanciar localmente SignupPage na variavel signup
        //var signup = new SignupPage();

        signup.go();
        signup.fillForm(this.deliver.valido);
        signup.submit();

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage);

    })

    it('Usuário informa CPF incorreto', function () {
        signup.go();
        signup.fillForm(this.deliver.cpf_inv);
        signup.submit();

        const alertMessage = 'Oops! CPF inválido'
        signup.alertMessageShouldBe(alertMessage);

    })
})