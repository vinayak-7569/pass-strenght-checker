document.addEventListener('DOMContentLoaded', function() {
    const passwordField = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const lightRay = document.getElementById('lightRay');
    const strengthMessage = document.getElementById('strengthMessage');
    const icon = togglePassword.querySelector('i');

    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
        // Toggle the type attribute
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);

        // Toggle the eye icon
        icon.classList.toggle('fa-eye-slash');
        icon.classList.toggle('fa-eye');

        // Toggle light ray effect
        if (type === 'text') {
            lightRay.classList.add('show-ray');
        } else {
            lightRay.classList.remove('show-ray');
        }
    });

    // Password strength checker
    passwordField.addEventListener('input', function() {
        const password = passwordField.value;
        const strength = getPasswordStrength(password);

        strengthMessage.textContent = strength.message;
        strengthMessage.className = `strength-message ${strength.message}`;
    });

    function getPasswordStrength(password) {
        let strength = {
            message: '',
        };

        if (password.length === 0) {
            strength.message = '';
        } else if (password.length < 6) {
            strength.message = 'Weak';
        } else if (password.length < 10) {
            strength.message = 'Medium';
        } else {
            strength.message = 'Strong';
        }

        return strength;
    }
});
