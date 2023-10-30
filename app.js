// Variables
let button = document.querySelector(".btn");
let todo = document.querySelector("#todos");
let input = document.querySelector("#input");
let ajout = document.querySelector("#ajout");
let btn1 = document.querySelector("#todo");
let btn2 = document.querySelector("#doing");
let btn3 = document.querySelector("#done");
button.addEventListener("click", () => {
  todo.innerHTML += `<div class="row  justify-content-center align-items-center"  id="todos">
    <div class="col-lg-6">
        <p class="mt-2" id="ajout">${input.value}</p>
    </div>
    <div class="col-lg-6 text-end">
        <button id="todo" class="border-0 text-white">To do</button>
        <button id="doing" class="border-0 text-white">Doing</button>
        <button id="done" class="border-0 text-white">Done</button>
    </div>
</div>`;
});
btn1.addEventListener("click", () => {
  todo.style.backgroundColor = "red";
});
