document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent the default behavior of the form submitting and refreshing the page
    const newTask = document.createElement("li");
    newTask.innerText = document.querySelector("#new-task-description").value;
    taskList.appendChild(newTask);
    addDeleteButton(newTask); // add a delete button to the new task
    event.target.reset(); // clear the input field
  });

  function addDeleteButton(task) {
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "x";
    task.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
      task.remove(); // remove the task from the task list
    });
  }
});
