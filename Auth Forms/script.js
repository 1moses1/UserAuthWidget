const formOpenBtn = document.querySelector("#form-open");
const home = document.querySelector(".home");
const formContainer = document.querySelector(".form_container");
const formCloseBtn = document.querySelector(".form_close");
const signupBtn = document.querySelector("#signup");
const loginBtn = document.querySelector("#login");
const pwShowHide = document.querySelectorAll(".pw_hide");

// Initialize activeForm variable to keep track of the currently active form
let activeForm = "login_form";

formOpenBtn.addEventListener("click", () => {
  home.classList.add("show");
  // Reset the active form to login form when opening the form container
  activeForm = "login_form";
  toggleFormVisibility();
});

formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  activeForm = "signup_form";
  toggleFormVisibility();
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  activeForm = "login_form";
  toggleFormVisibility();
});

// Function to toggle form visibility
function toggleFormVisibility() {
  const forms = document.querySelectorAll(".form");
  forms.forEach((form) => {
    if (form.classList.contains(activeForm)) {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  });
}

// LOGIN FORM VALIDATION //

document.addEventListener("DOMContentLoaded", function () {
  // Get references to the form and its input fields
  const loginForm = document.getElementById("loginForm");
  const emailInput = loginForm.querySelector('input[type="email"]');
  const passwordInput = loginForm.querySelector('input[type="password"]');

  // Add a submit event listener to the form
  loginForm.addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Check if both email and password fields are filled
    if (emailInput.value.trim() === "") {
      alert("Please fill in your email address.");
    } else if (passwordInput.value.trim() === "") {
      alert("Please enter your password.");
    } else {
      // Redirect to home.html (update the URL as needed)
      alert("Login successful!");
      window.location.href = "home.html";
    }
  });
});

// Registration form validation
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the form and its input fields
  const signupForm = document.getElementById("signupForm");
  const emailInput = signupForm.querySelector('input[type="email"]');
  const passwordInputs = signupForm.querySelectorAll('input[type="password"]');
  const usernameInput = signupForm.querySelector('input[type="text"]');
  const dobInput = signupForm.querySelector('input[type="date"]');
  const genderSelect = signupForm.querySelector('select');
  const phoneInput = signupForm.querySelector('input[type="tel"]');
  const countryInput = signupForm.querySelector('input[type="text"]');

  // Add a submit event listener to the form
  signupForm.addEventListener("submit", function (event) {
      // Prevent the default form submission behavior
      event.preventDefault();

      // Check if email field is filled
      if (emailInput.value.trim() === "") {
          alert("Please fill in your email address.");
      } else if (passwordInputs[0].value.trim() === "") {
          alert("Please create a password.");
      } else if (passwordInputs[1].value.trim() === "") {
          alert("Please confirm your password.");
      } else if (passwordInputs[0].value !== passwordInputs[1].value) {
          alert("Passwords do not match. Please confirm your password.");
      } else if (usernameInput.value.trim() === "") {
          alert("Please fill in your full name.");
      } else if (dobInput.value.trim() === "") {
          alert("Please select your date of birth.");
      } else if (genderSelect.value === "") {
          alert("Please select your gender.");
      } else if (phoneInput.value.trim() === "") {
          alert("Please fill in your phone number.");
      } else if (countryInput.value.trim() === "") {
          alert("Please fill in your country/region.");
      } else {
          // Registration successful; you can perform further actions here
          alert("Registration successful!");
          window.location.href = "home.html"; // Redirect to the home page
      }
  });
});


// PASSWORD RECOVERY FORM validation

// Handle "Forgot Password" link click
const forgotPasswordLink = document.querySelector(".forgot_pw");
const recoveryForm = document.querySelector(".recovery_form");

forgotPasswordLink.addEventListener("click", function (event) {
  event.preventDefault();
  activeForm = "recovery_form";
  toggleFormVisibility();
});

// Handle "Back to Login" link click
const backToLoginLink = document.querySelector("#backToLogin");

backToLoginLink.addEventListener("click", function (event) {
  event.preventDefault();
  activeForm = "login_form";
  toggleFormVisibility();
});

// Password Recovery Form Validation
document.addEventListener("DOMContentLoaded", function () {
  const recoveryForm = document.getElementById("recoveryForm");
  const emailInput = recoveryForm.querySelector('input[type="email"]');

  recoveryForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (emailInput.value.trim() === "") {
      alert("Please enter your email address.");
    } else {
      // Simulate sending the recovery email (replace with your logic)
      alert("Recovery email has been sent successfully!");
      activeForm = "login_form";
      toggleFormVisibility();
    }
  });
});

// Initialize form visibility on page load
toggleFormVisibility();
