const darkModeButton = document.querySelector("#darkModeBtn");
const elementBody = document.querySelector("#body");
const increaseFontButton = document.querySelector("#increaseFontBtn");
const decreaseFontButton = document.querySelector("#decreaseFontBtn");
const fontSize = 100;
const increaseDecrease = 10;
let tamanho = 16;

darkModeButton.addEventListener("click", () => {
  elementBody.classList.toggle("dark-mode-option");
});

function increaseFont() {
  tamanho++;
  elementBody.style.fontSize = tamanho + "px";
}

function decreaseFont() {
  tamanho--;
  elementBody.style.fontSize = tamanho + "px";
}

increaseFontButton.addEventListener("click", () => {
  increaseFont();
});

decreaseFontButton.addEventListener("click", () => {
  decreaseFont();
});
