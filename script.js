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
        message.push = 'Username must be at least 3 characters long.';
    }else{
        message.push = '';
    };
    if (email.include('@')|| email.include('.')){
        isValid = false;
        message.push = 'Please enter a valid email address.';
    }else{
        message.push = ''};
    if (password.length<8){
        isValid = false;
        message.push = 'Password must be at least 8 characters long.';
    }else{
        message.push = ''
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