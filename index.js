const user = document.getElementById('user');
const password = document.getElementById('password');
const btnLogin = document.getElementById('login_button');
//const span =  document.querySelectorAll('span-error');
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

btnLogin.addEventListener("click", validateLogin);


function validatePassword(){
    
    let passwordValue =  password.value.length
    if(passwordValue < 6){
        alert('Senha inválida')
        return false
    }else{
        alert('Senha válida')
        return true
    }
}

function validateEmail(){
    let email = user.value
    if(emailRegex.test(email)){
        alert('Email válido')
    }else{
        alert('Email inválido')
    }
}

function error() {
    let passwordValue = password.value.length;
    let email = user.value

    console.log("Senha:", passwordValue, "Email válido?", email);

    if (passwordValue > 6 && !emailRegex.test(email)) {
        //EMAIL INVALIDO E SENHA VALIDA
    } else if (passwordValue <= 6 && emailRegex.test(email)) {
        //EMAIL VALIDO E SENHA INVALIDA
    } else if (passwordValue > 6 && emailRegex.test(email)) {
        //LOGIN VALIDO
    } else {
        //LOGIN INVÁLIDO
    }
}


function validateLogin(){
    validateEmail()
    validatePassword()
    error()
}





