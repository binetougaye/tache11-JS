// Variables
let container = document.querySelector(".todo");
let input = document.getElementById("input");
let btnAdd = document.querySelector(".btn");
let todoBtn = document.getElementById("todo");
console.log(todoBtn);
let todoDoing = document.getElementById("doing");
let todoDone = document.getElementById("done");
let ajout = document.getElementById("ajout");

// Event Listeners
btnAdd.addEventListener("click", function () {
  container.innerHTML += ` <div class="row justify-content-center align-items-center">
  <div class="col-lg-6 ajout">
      <p class="mt-2" id="ajout">${input.value}</p>
  </div>
  <div class="col-lg-6 text-end buttons">
      <button id="todo" class="border-0 text-white">To do</button>
      <button id="doing" class="border-0 text-white">Doing</button>
      <button id="done" class="border-0 text-white">Done</button>
  </div>
</div>`;
});

// todoBtn.addEventListener("click", function () {});
// How to create new element
// // let newElement = document.createElement("p");
// // newElement.innerHTML = "hello";
// let newContent = document.createTextNode("hi");
// // console.log(newElement);
