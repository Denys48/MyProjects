import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";	
import "bootstrap/dist/js/bootstrap.bundle.min";
import Sortable from 'sortablejs';

const form = document.querySelector(".js--form");
const input = document.querySelector(".js--form__input");
const list = document.querySelector(".js--todos-wrapper");
const modal = document.getElementById("exampleModal");
const modalBody = document.querySelector(".modal-body");


new Sortable(list, {animation: 150});

const KEY = "todos";
let todos = JSON.parse(localStorage.getItem(KEY)) || [];

function save() {
	localStorage.setItem(KEY, JSON.stringify(todos));
}

function createTodo(todo, index) {
	const li = document.createElement("li");
	li.className = "todo-item";
	if (todo.completed) {
        li.classList.add("todo-item--checked")
    };
	li.dataset.index = index;

	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.checked = todo.completed;

	const span = document.createElement("span");
	span.className = "todo-item__description";
	span.textContent = todo.text;
    span.setAttribute("data-bs-toggle", "modal");
    span.setAttribute("data-bs-target", "#exampleModal");

	const button = document.createElement("button");
	button.className = "todo-item__delete";
	button.textContent = "Видалити";

	li.append(checkbox, span, button);
	list.appendChild(li);
}

function init() {
	list.innerHTML = "";
	todos.forEach((todo, index) => createTodo(todo, index));
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const text = input.value.trim();
	if (!text) {
        return;
    }

	const todo = { text, completed: false };
	todos.push(todo);
	save();
	createTodo(todo, todos.length - 1);
	input.value = "";
});

list.addEventListener("click", (e) => {
	if (!e.target.classList.contains("todo-item__delete")){
        return;
    }

	const li = e.target.closest(".todo-item");
	const index = Number(li.dataset.index);

	todos.splice(index, 1);
	save();
	li.remove();

	[...list.children].forEach((item, i) => {
		item.dataset.index = i;
	});
});

list.addEventListener("click", (e) => {
	if (!e.target.classList.contains("todo-item__description")) {
        return;
    }

	const li = e.target.closest(".todo-item");
	const index = Number(li.dataset.index);

	modalBody.textContent = todos[index].text;
});

list.addEventListener("change", (e) => {
	if (e.target.type !== "checkbox") {
        return;
    }

	const li = e.target.closest(".todo-item");
	const index = Number(li.dataset.index);

	todos[index].completed = e.target.checked;
	li.classList.toggle("todo-item--checked", e.target.checked);
	save();
});

modal.addEventListener("hidden.bs.modal", () => {
  document.activeElement.blur();
});

init();