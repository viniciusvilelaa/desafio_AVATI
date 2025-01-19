//CAPTURANDO ELEMENTOS HTML
const user = document.getElementById('user');
const password = document.getElementById('password');
const btnLogin = document.getElementById('login_button');
const span = document.getElementById('span-validate');
const spanMessage = document.getElementById('message')

//REGEX PARA VERIFICAÇÃO DO EMAIL
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


//VALIDAÇÃO DO LOGIN AO CLICAR NO BOTÃO
btnLogin.addEventListener('click', validate);


function validate() {
    let email = user.value.trim(); //CAPTURANDO EMAIL 
    let isValidEmail = emailRegex.test(email) //VERIFICANDO EMAIL
    let passwordValue = password.value.length; //CAPTURANDO TAMANHO DA SENHA

    //VARIAVEIS MODIFICADORAS DO SPAN
    let message = "";
    let className = "";

    if (passwordValue > 6 && !isValidEmail) {

        //EMAIL INVALIDO E SENHA VALIDA
        
        message = 'Digite um e-mail válido!';

    } else if (passwordValue <= 6 && isValidEmail) {

        //EMAIL VALIDO E SENHA INVALIDA
        
        message = 'A senha deve conter pelo menos 6 caracteres!';

    } else if (passwordValue > 6 && isValidEmail) {
        
        //LOGIN VALIDO
        span.className = 'span-loading';
        setTimeout(() => {
            span.classList.remove("span-loading");
            spanMessage.innerText = 'Login efetuado com sucesso!';
        }, 1000);
        

    } else {
        //LOGIN INVÁLIDO
        
        message = 'Digite um e-mail e senha válidos!';
    }

    //ALTERANDO SPAN
    spanMessage.innerText = message;

}

