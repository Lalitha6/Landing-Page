// Responsive menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
});

// Form validation
const loginForm = document.querySelector('.form');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const loginButton = document.querySelector('.btnn');

loginButton.addEventListener('click', validateForm);

function validateForm() {
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (emailValue === '' || passwordValue === '') {
        alert('Please enter both email and password');
        return;
    }

    // Add additional validation logic if needed

    // If all validations pass, you can proceed with form submission or other actions
    alert('Form submitted successfully!');
}
