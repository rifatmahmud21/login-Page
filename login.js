document.getElementById('login-btn').addEventListener('click', function () {
    const userNameField = document.getElementById('user-field');
    const userName = userNameField.value;

    const userPasswordField = document.getElementById('password-field');
    const userPassword = parseInt(userPasswordField.value);
    if (userName === "rifat" && userPassword === 3687662) {
        window.location.href = "https://shiny-biscuit-b4380a.netlify.app/";
    }
    else {
        alert('Incorrect password. Try again!!')
    }
})



document.getElementById('forgot-btn').addEventListener('click', function () {
    window.location.href = "https://apps.who.int/healthinfo/systems/surveydata/index.php/auth/forgot_password";
})