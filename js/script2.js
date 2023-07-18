function messageUser () {
    const message = document.querySelector('#span-message')

    const urlParams = new URLSearchParams(window.location.search);

    // Retrieve the values using the parameter names
    const email = urlParams.get('email');

    // Use the values as needed
    let messageHtml = `A confirmation email has been send to ${email}. Please open it and click the button inside to confirm your subscription`
    message.innerHTML += messageHtml
    console.log('Email:', email);
}

messageUser()
