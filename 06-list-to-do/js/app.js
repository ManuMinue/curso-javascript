const tasks = [];

const renderTasks = (filterPriority = null) => {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  tasks
    .filter(({ priority }) => !filterPriority || priority === filterPriority)
    .forEach(({ text, priority }) => {
      const taskElement = document.createElement("div");
      taskElement.className = `task ${priority}`;
      taskElement.textContent = text;
      taskList.appendChild(taskElement);
    });
};

document.addEventListener("DOMContentLoaded", () => {
  const formAdd = document.getElementById("form-add");
  const formFilter = document.getElementById("form-filter");

  formAdd.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(formAdd);
    const taskText = formData.get("new-task").trim();
    const priority = formData.get("priority");

    if (!taskText) return;

    tasks.push({ text: taskText, priority });
    renderTasks();
    formAdd.reset();
  });

  formFilter.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(formFilter);
    const selectedPriority = formData.get("priority").trim();

    renderTasks(selectedPriority);
  });
});
