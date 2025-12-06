function checkLogin() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const msg = document.getElementById("msg");

    if (user === "admin" && pass === "12345") {
        alert("Login Successful!");
        // Redirect to another page
        window.location.href = "welcome1.html";
        return false; // prevent form submission
    } else {
        msg.innerHTML = "Incorrect username or password!";
        return false;
    }
}
