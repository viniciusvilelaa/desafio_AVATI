const user = document.getElementById('user');
const password = document.getElementById('password');
const btnLogin = document.getElementById('login_button');
const span = document.getElementById('span-validate');
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

btnLogin.addEventListener("click", validate);


function validate() {
    let passwordValue = password.value.length;
    let email = user.value.trim();
    let isValidEmail = emailRegex.test(email)

    console.log("Senha:", passwordValue, "Email válido?", isValidEmail);

    let message = "";
    let className = "";

    if (passwordValue > 6 && !isValidEmail) {

        //EMAIL INVALIDO E SENHA VALIDA
        className = 'span-validate-invalid';
        message = 'Digite um e-mail válido!';

    } else if (passwordValue <= 6 && isValidEmail) {

        //EMAIL VALIDO E SENHA INVALIDA
        className = 'span-validate-invalid';
        message = 'A senha deve conter pelo menos 6 caracteres!';

    } else if (passwordValue > 6 && isValidEmail) {

        //LOGIN VALIDO
        className = 'span-validate-sucefull';
        message = 'Login efetuado com sucesso!';

    } else {
        //LOGIN INVÁLIDO
        className = 'span-validate-invalid';
        message = 'Digite um e-mail e senha válidos!';
    }

    span.className = className;
    span.innerText = message;

}

