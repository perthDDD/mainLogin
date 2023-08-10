const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "uniteAsOne" && password === "achieveOurGoal") {
        alert("You have successfully logged in.");
        window.location.href = "https://funky-wave-252.notion.site/Heavenly-Library-f7f7b1afe2c349a988b6537e5b503c36?pvs=4";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
