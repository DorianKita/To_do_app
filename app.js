const taskArray = [];
const searchInput = document.querySelector(".search-input");
const tasksNumber = document.querySelector(".tasks-number");
const addInput = document.querySelector(".add-input");
const addBtn = document.querySelector(".addBtn");
const tasksList = document.querySelector(".tasks-list");
const taskElement = document.querySelectorAll("li");

//Add task function
const addTask = (e) => {
    e.preventDefault();
    if (!addInput.value) return
    const li = document.createElement("li");
    li.innerHTML = addInput.value + " <button>Remove</button>"
    taskArray.push(li);
    tasksList.appendChild(li);
    addInput.value = ""
};

addBtn.addEventListener("click", addTask);