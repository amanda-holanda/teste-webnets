const darkModeButton = document.querySelector("#darkModeBtn");
const body = document.querySelector("#body");

darkModeButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode-option");
});
