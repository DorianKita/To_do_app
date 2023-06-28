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

    const tasks = [...taskElement];
    tasks.forEach((task, index) => {
        task.id = index;
    });

    li.querySelector("button").addEventListener("click", removeTask);
};

addBtn.addEventListener("click", addTask);

//remove task function

const removeTask = (e) => {
    const index = e.target.id
    e.target.parentNode.remove();
    taskArray.splice(index, 1)
};

//searching function
const searchTask = (e) => {
    const searchTask = e.target.value.toLowerCase();
    let tasks = [...taskArray];
    tasks = tasks.filter(task => task.textContent.toLowerCase().includes(searchTask));
    tasksList.textContent = "";
    tasks.forEach(task => tasksList.appendChild(task))
}


searchInput.addEventListener("input", searchTask);