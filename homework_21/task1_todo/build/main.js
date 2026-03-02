"use strict";

require("./style.css");
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/dist/js/bootstrap.bundle.min");
var _sortablejs = _interopRequireDefault(require("sortablejs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var form = document.querySelector(".js--form");
var input = document.querySelector(".js--form__input");
var list = document.querySelector(".js--todos-wrapper");
var modalEl = document.getElementById("exampleModal");
new _sortablejs.default(list, {
  animation: 150
});
var KEY = "todos";
var todos = JSON.parse(localStorage.getItem(KEY)) || [];
function save() {
  localStorage.setItem(KEY, JSON.stringify(todos));
}
function createTodo(todo, index) {
  var li = document.createElement("li");
  li.className = "todo-item";
  if (todo.completed) {
    li.classList.add("todo-item--checked");
  }
  ;
  li.dataset.index = index;
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;
  var span = document.createElement("span");
  span.className = "todo-item__description";
  span.textContent = todo.text;
  span.setAttribute("data-bs-toggle", "modal");
  span.setAttribute("data-bs-target", "#exampleModal");
  var button = document.createElement("button");
  button.className = "todo-item__delete";
  button.textContent = "Видалити";
  li.append(checkbox, span, button);
  list.appendChild(li);
}
function init() {
  list.innerHTML = "";
  todos.forEach(function (todo, index) {
    return createTodo(todo, index);
  });
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var text = input.value.trim();
  if (!text) {
    return;
  }
  var todo = {
    text: text,
    completed: false
  };
  todos.push(todo);
  save();
  createTodo(todo, todos.length - 1);
  input.value = "";
});
list.addEventListener("click", function (e) {
  if (!e.target.classList.contains("todo-item__delete")) {
    return;
  }
  var li = e.target.closest(".todo-item");
  var index = Number(li.dataset.index);
  todos.splice(index, 1);
  save();
  li.remove();
  _toConsumableArray(list.children).forEach(function (item, i) {
    item.dataset.index = i;
  });
});
list.addEventListener("change", function (e) {
  if (e.target.type !== "checkbox") {
    return;
  }
  var li = e.target.closest(".todo-item");
  var index = Number(li.dataset.index);
  todos[index].completed = e.target.checked;
  li.classList.toggle("todo-item--checked", e.target.checked);
  save();
});
modalEl.addEventListener("hidden.bs.modal", function () {
  document.activeElement.blur();
});
init();