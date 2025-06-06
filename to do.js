let tasks = [];

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task !== "") {
    tasks.push(task);
    input.value = "";
    renderTasks();
  } else {
    alert("Please enter a task!");
  }
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.onclick = () => deleteTask(index);

    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
//text change commit 