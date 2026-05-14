// SECURITY ISSUE: No redirect logic if someone accesses this page directly (Unauthorized Access)

// Display User Name
document.getElementById('userNameDisplay').innerText = localStorage.getItem("userFullName") || "Guest";

document.getElementById('addTaskBtn').addEventListener('click', function() {
    const input = document.getElementById('taskInput');
    const list = document.getElementById('taskList');

    // BUG: This function does NOT check for empty input (Empty Task Bug)
    const taskText = input.value;

    const li = document.createElement('li');
    
    // SECURITY ISSUE: innerHTML is vulnerable to XSS/Injection
    li.innerHTML = `<span>${taskText}</span>`; 

    // Feature Request: Mark as Done
    li.onclick = function() {
        this.classList.toggle('completed');
    };

    list.appendChild(li);

    // BUG: If you don't clear the input or disable the button, 
    // fast clicks will add multiple tasks easily.
});

document.getElementById('logoutBtn').addEventListener('click', function() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "login.html";
});