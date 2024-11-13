
let login = document.getElementById('login')
let password = document.getElementById('password')
let email = document.getElementById('email')

let loginBox = document.getElementById('loginBox')
let passwordBox = document.getElementById('passwordBox')
let emailBox = document.getElementById('emailBox')

login.addEventListener('input', (ev) => {
    if (ev.target.value.length > 8 && ev.target.value[0] === ev.target.value[0].toLowerCase() &&
        !/[0-9]/.test(ev.target.value)) {
        
        loginBox.innerText = `Correct!`
        loginBox.style.color = 'green'
    } else{
        loginBox.innerText = `Wrong format!`
        loginBox.style.color = 'red'
    }
})

password.addEventListener('input', (ev) => {
    if(ev.target.value.length > 8 && ev.target.value[0] === ev.target.value[0].toUpperCase()
        && /[0-9]/.test(ev.target.value)) {

        passwordBox.innerText = `Correct!`
        passwordBox.style.color = 'green'
    } else{
        passwordBox.innerText = `Wrong format!`
        passwordBox.style.color = 'red'
    }
})

email.addEventListener('input', (ev) => {
    if(ev.target.value.includes('@') && ev.target.value.lastIndexOf('.') > ev.target.value.indexOf('@')){

        emailBox.innerText = `Correct!`
        emailBox.style.color = 'green'
    } else{
        emailBox.innerText = `Wrong format!`
        emailBox.style.color = 'red'
    }
})

let form = document.getElementById('LoginForm')
    form.addEventListener('submit', (ev) => {
        if (
            loginBox.style.color !== 'green' ||
            passwordBox.style.color !== 'green' ||
            emailBox.style.color !== 'green'
        ) {
            ev.preventDefault();
            alert('Fix errors');
        }
});