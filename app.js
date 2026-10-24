const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");
const signup = document.getElementById("signup");
const login = document.getElementById("login");

const showLogin = document.getElementById("showLogin");
const showSignup = document.getElementById("showSignup");
const message = document.getElementById("message");

let user = null;
showLogin.addEventListener("click", function () {
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    message.textContent = "";
});
showSignup.addEventListener("click", function () {
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
    message.textContent = "";
});
signup.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value;
    user = {
        name: name,
        email: email,
        password: password
    };
    alert("Signup successful! Now login.");
    signup.reset();
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    document.getElementById("loginEmail").value = email;
    message.textContent = "";
});
login.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;
    if (user === null) {
        alert("Please sign up first!");
        return;
    }
    if (email === user.email && password === user.password) {
        message.textContent = "Welcome, " + user.name + "! Login successful.";
        message.style.color = "green";
        login.reset();
    } else {
        message.textContent = "Incorrect email or password.";
        message.style.color = "red";
    }
});