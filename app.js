// Variables
let input = document.querySelector("#input");
let buttonAdd = document.querySelector(".btn");
let tache = document.querySelector("#ajout");
let buttons = document.querySelector(".buttons");
let btnTodo = document.querySelector("#todo");
let btnDoing = document.querySelector("#doing");
let btnDone = document.querySelector("#done");
let container = document.querySelector(".todo");
// Fonction qui recupére la valeur de l'input
function recupInputValue() {
  let recup = input.value;
  tache.innerHTML += recup;
  container.style.display = "block";
}
buttonAdd.addEventListener("click", recupInputValue);
// Fonction qui change le BGcolor
btnTodo.addEventListener("click", () => {
  container.style.backgroundColor = "red";
});
btnDoing.addEventListener("click", () => {
  container.style.backgroundColor = "orange";
});
btnDone.addEventListener("click", () => {
  container.style.backgroundColor = "green";
});
