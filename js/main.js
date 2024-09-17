document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirm-password');
    const togglePassword = document.getElementById('toggle-password');
    const toggleConfirmPassword = document.getElementById('toggle-confirm-password');

    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            togglePassword.classList.add('bx-show');
            togglePassword.classList.remove('bx-hide');
        } else {
            passwordField.type = 'password';
            togglePassword.classList.remove('bx-show');
            togglePassword.classList.add('bx-hide');
        }
    });

    // Toggle confirm password visibility
    toggleConfirmPassword.addEventListener('click', function() {
        if (confirmPasswordField.type === 'password') {
            confirmPasswordField.type = 'text';
            toggleConfirmPassword.classList.add('bx-show');
            toggleConfirmPassword.classList.remove('bx-hide');
        } else {
            confirmPasswordField.type = 'password';
            toggleConfirmPassword.classList.remove('bx-show');
            toggleConfirmPassword.classList.add('bx-hide');
        }
    });

    // Validate form on submit
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Mencegah pengiriman formulir secara default

        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Validasi form
        if (fullname === '' || email === '' || password === '' || confirmPassword === '') {
            alert('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        // Jika validasi berhasil, Anda dapat mengirimkan formulir atau melakukan sesuatu dengan data
        alert('Form submitted successfully!');
        // form.submit(); // Uncomment this line to submit the form
    });
});
