const showPasswordIcon = document.querySelector('.show-password-icon');
const passwordInput = document.querySelector('#password');

showPasswordIcon.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});