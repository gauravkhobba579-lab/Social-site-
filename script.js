import { createClient } from 'https://esm.sh'

const supabaseUrl = 'https://supabase.co'
const supabaseKey = 'sb_publishable_1CGe3TpztJwqClx9vUvI8M6uD79iYwW5q6D7rP9'

const supabase = createClient(supabaseUrl, supabaseKey)

let isSignup = false;
const form = document.getElementById("form");
const nameField = document.getElementById("nameField");
const formTitle = document.getElementById("formTitle");
const subtitle = document.getElementById("subtitle");
const submitBtn = document.getElementById("submitBtn");
const switchBtn = document.getElementById("switchBtn");
const switchMessage = document.getElementById("switchMessage");
const message = document.getElementById("message");

switchBtn.addEventListener("click", () => {
    isSignup = !isSignup;
    if (isSignup) {
        formTitle.innerText = "Create Account";
        submitBtn.innerText = "SIGN UP";
        switchMessage.innerText = "Already have an account?";
        switchBtn.innerText = "Login";
        if(nameField) nameField.style.maxHeight = "60px";
    } else {
        formTitle.innerText = "Login to your account";
        submitBtn.innerText = "LOGIN";
        switchMessage.innerText = "Don't have an account?";
        switchBtn.innerText = "Register here";
        if(nameField) nameField.style.maxHeight = "0px";
    }
});

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;
    
    if (isSignup) {
        const fullName = document.querySelector('input[type="text"]').value;
        
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: { full_name: fullName }
            }
        });

        if (error) {
            message.innerText = "Error: " + error.message;
            message.style.color = "red";
        } else {
            message.innerText = "Sign Up Successful! Welcome " + fullName;
            message.style.color = "green";
        }
    } else {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (error) {
            message.innerText = "Error: " + error.message;
            message.style.color = "red";
        } else {
            message.innerText = "Login Successful! Redirecting...";
            message.style.color = "green";
            // window.location.href = "profile.html"; 
        }
    }
});
