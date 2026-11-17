
let isSignup = false;

const form = document.getElementById("authForm");
const nameField = document.getElementById("nameField");
const formTitle = document.getElementById("formTitle");
const subtitle = document.getElementById("formSubtitle");
const submitBtn = document.getElementById("submitBtn");
const switchBtn = document.getElementById("switchBtn");
const switchMessage = document.getElementById("switchMessage");
const message = document.getElementById("message");

switchBtn.addEventListener("click", () => {
  isSignup = !isSignup;

  nameField.classList.toggle("hidden", !isSignup);

  document.getElementById("name").required = isSignup;

  formTitle.textContent = isSignup
    ? "Create Account"
    : "Welcome Back!";

  subtitle.textContent = isSignup
    ? "Join the GrowSite community"
    : "Login to your account";

  submitBtn.textContent = isSignup
    ? "CREATE ACCOUNT"
    : "LOGIN";

  switchMessage.textContent = isSignup
    ? "Already have an account?"
    : "Don't have an account?";

  switchBtn.textContent = isSignup
    ? "Login"
    : "Sign Up";

  message.textContent = "";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  message.textContent =
    "Demo only: Real account login will be connected in the next step.";
});

document.getElementById("forgotBtn").addEventListener("click", () => {
  message.textContent =
    "Password recovery will be available after secure login setup.";
});

document.getElementById("googleBtn").addEventListener("click", () => {
  message.textContent =
    "Google Login will be connected in the next step.";
});
