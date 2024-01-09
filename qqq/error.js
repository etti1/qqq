document.getElementById('submit').addEventListener('click', function () {
    const emailInput = document.getElementById('email');
    const emailContainer = document.querySelector('.input-container');
    const emailError = document.getElementById('email-error');

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var isValidEmail = emailRegex.test(emailInput.value);

    if (!isValidEmail) {
        emailError.classList.add('active');
    } else {
        emailError.classList.remove('active');
        window.location.href = 'index.html2.html'
    }
});