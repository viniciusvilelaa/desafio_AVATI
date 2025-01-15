const user = document.getElementById('user');
const password = document.getElementById('password');
const btnLogin = document.getElementById('login_button');
const span =  document.querySelectorAll('span-error');
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

btnLogin.addEventListener("click", validateLogin);


function validatePassword(){
    
    let passwordValue =  user.value.length
    if(passwordValue < 6){
        alert('Senha inválida')
    }else{
        alert('Senha válida')
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

function validateLogin(){
    validateEmail()
    validatePassword()
}



