document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const googleBtn = document.querySelector('.btn-google');

    // 1. Form Submit Validation
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Page refresh hone se rokne ke liye

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Basic Validation
        if (!email || !password) {
            alert('Kripya saari fields ko bharein!');
            return;
        }

        // Yahan aap apna backend API login logic laga sakte hain
        console.log('Logging in with:', { email, password });
        alert(`GrowSite par aapka swagat hai!\nEmail: ${email}`);
    });

    // 2. Google Login Button Click Action
    googleBtn.addEventListener('click', () => {
        console.log('Google Login clicked');
        // Firebase ya OAuth link karne par redirect code yahan aayega
        alert('Google authentication window open ho rahi hai...');
    });

    // 3. Simple Real-time Input Border Effect (Optional)
    const inputs = [emailInput, passwordInput];
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.borderColor = '#e50914';
        });
        input.addEventListener('blur', () => {
            if (input.value.trim() === '') {
                input.style.borderColor = '#333439';
            }
        });
    });
});
            
