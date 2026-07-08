const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {

    const task = taskInput.value.trim();

    if(task === ""){
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${task}</span>
        <button class="delete-btn">Delete</button>
    `;

    taskList.appendChild(li);

    taskInput.value = "";

    li.querySelector(".delete-btn").addEventListener("click", () => {
        li.remove();
    });

});