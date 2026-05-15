document.getElementById('loginBtn').addEventListener('click', function() {
    const fName = document.getElementById('firstName').value;
    const email = document.getElementById('email').value;
    const errorMsg = document.getElementById('error-message');

    if (email !== "") {
        localStorage.setItem("userFullName", fName);
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "dashboard.html";
    } else {
        errorMsg.innerText = "Please fill in your email to proceed!";
    }
});