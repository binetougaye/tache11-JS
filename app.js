// Variables
let container = document.querySelector(".todo");
let input = document.getElementById("input");
let btnAdd = document.querySelector(".btn");
let todoBtn = document.getElementById("todo");
// console.log(todoBtn);
let todoDoing = document.getElementById("doing");
let todoDone = document.getElementById("done");
let ajout = document.getElementById("ajout");
let tabTodos = [];
// tabTodos = [
// {
//   title: input.value,
//   id: Math.floor(Math.random()*100 + 1),
// }
// ]
// Event Listeners
btnAdd.addEventListener("click", function () {
  let newTodo = {
    title: input.value,
    id: Math.floor(Math.random() * 100 + 1),
  };
  tabTodos.push(newTodo);
  tabTodos.forEach((todo) => {
    container.innerHTML += ` <div class="mt-2 row justify-content-center align-items-center">
    <div class="col-lg-6 ajout">
        <p class="mt-2 ${todo.id}" id="ajout">${todo.title}</p>
    </div>
    <div class="col-lg-6 text-end buttons">
        <button id="todo" class="border-0 text-white">To do</button>
        <button id="doing" class="border-0 text-white" onclick="changeBgOrange(this)">Doing</button>
        <button id="done" class="border-0 text-white" onclick = "changeBgGreen(this)">Done</button>
    </div>
  </div>`;
  });

  // container.style.backgroundColor = "red";
});
function changeBgOrange(e) {
  console.log(e);
  let rowTodo = e.parentElement.parentElement;
  console.log(rowTodo);
  rowTodo.classList.add("bg-warning");
}
function changeBgGreen(e) {
  console.log(e);
  let rowTodo = e.parentElement.parentElement;
  console.log(rowTodo);
  rowTodo.classList.add("bg-success");
}
