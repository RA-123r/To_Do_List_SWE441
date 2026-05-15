
// Display User Name
document.getElementById('userNameDisplay').innerText = localStorage.getItem("userFullName") || "Guest";

document.getElementById('addTaskBtn').addEventListener('click', function() {
    const input = document.getElementById('taskInput');
    const list = document.getElementById('taskList');

    const taskText = input.value.trim();
    if (taskText === "") { 
        alert("Empty tasks are not allowed!"); // منع الإضافة إذا كان الحقل فارغاً
        return; 
    }
    const li = document.createElement('li');
    
    const span = document.createElement('span');
    span.textContent = taskText; 
    li.appendChild(span);

    li.onclick = function() {
        this.classList.toggle('completed');
    };

    list.appendChild(li);
    input.value = ""; 
});

document.getElementById('logoutBtn').addEventListener('click', function() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "login.html";
});