const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "perthTGW500" && password === "uniteAs1Acheive") {
        alert("You have successfully logged in.");
        window.location.href = "https://funky-wave-252.notion.site/TGW-EDU-a5b9146a42804d269e86dcbe55c3f746?pvs=4";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
