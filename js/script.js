const form = document.querySelector('#form')

function verificationForm (e) {
    e.preventDefault()

    let temErro = false
    const inputEmail = document.querySelector('#email')
    const email = inputEmail.value

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const emailValid = emailRegex.test(email)


    if(!email.value || !emailValid){
        temErro = true
        inputEmail.classList.add('inputError')

        let span = document.querySelector('#span-email')
        span.innerText = 'Digite um email válido!'
    }
    if(email.value || emailValid){
        inputEmail.classList.remove('inputError')

        let span = document.querySelector('#span-email')
        span.innerText = ''
    }
    if(!temErro){
        formulario.submit()
    }
}

form.addEventListener('submit', verificationForm)
