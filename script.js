document.addEventListener('DOMContentLoaded',()=>{
    function handleFormSubmission () {
        const form = document.getElementById('registration-form')
    const feedbackDiv = document.getElementById('form-feedback')
    form.addEventListener('submit',(event)=>{
        event.preventDefault();
    });
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    let isValid = true
    const message = []
    if (username.length<3){
        isValid = false;
        usernameError.textContent = 'Username must be at least 3 characters long.';
    }else{
        usernameError.textContent = '';
    };
    if (email.include('@')|| email.include('.')){
        isValid = false;
        emailError.textContent = 'Please enter a valid email address.';
    }else{
        usernameError.textContent = ''};
    if (password.length<8){
        isValid = false;
        passwordError.textContent = 'Password must be at least 8 characters long.';
    }else{
        usernameError.textContent = ''
    };
    feedbackDiv.style.display='block'
    if (isValid){
        feedbackDiv.textContent = 'Registration successful!';
        feedbackDiv.style.color = '#28a745';
    }else{
        feedbackDiv.innerHTML = messages.join('<br>');
        feedbackDiv.style.color = '#dc3545';
    }
    }

    handleFormSubmission () 
});