const todoForm = document.getElementById("todo-form");
const todoListContainer = document.getElementById("todo-list-container");
const todoListDate = document.querySelector("#todo-list-container span");
const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-id");
let toDos = [];

const handleRemoveTodo = (event) => {
  const li = event.target.parentElement;
  toDos = toDos.filter((item) => item.id !== parseInt(li.id));
  saveTodos();
  li.remove();
  if (toDos.length === 0) {
    todoListContainer.classList.add("hidden");
  }
};
const paintTodo = (newTodo) => {
  const li = document.createElement("li");
  const label = document.createElement("label");
  const input = document.createElement("input");
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", handleRemoveTodo);

  input.setAttribute("type", "checkbox");
  label.setAttribute("for", newTodo.id);
  label.innerText = newTodo.text;
  li.id = input.id = newTodo.id;

  li.appendChild(input);
  li.appendChild(label);
  li.appendChild(button);
  todoList.appendChild(li);

  todoListContainer.classList.remove("hidden");
};

const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(toDos));
};
const handleTodo = (e) => {
  e.preventDefault();

  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
};
const date = new Date();
const weekOfDay = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const outputDate = `${date.getMonth() + 1}/${date.getDate()} ${
  weekOfDay[date.getDay()]
}`;
todoListDate.innerText = outputDate;
todoForm.addEventListener("submit", handleTodo);

const savedTodos = localStorage.getItem("todos");
if (savedTodos === "[]" || !savedTodos) {
  todoListContainer.classList.add("hidden");
} else if (savedTodos) {
  todoListContainer.classList.remove("hidden");
  const parsedTodos = JSON.parse(savedTodos);
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
