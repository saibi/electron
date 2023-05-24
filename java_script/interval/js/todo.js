const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;

  toDoInput.value = "";
  const obj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(obj);
  paintTodo(obj);
  saveTodos();
}
function handleDeleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos();
}
function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;

  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const button = document.createElement("button");
  button.innerHTML = "❌";
  button.addEventListener("click", handleDeleteTodo);

  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const parsed = JSON.parse(savedTodos);
  toDos = parsed;
  parsed.forEach(paintTodo);
}
