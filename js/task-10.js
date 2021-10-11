const refs = {
  controls: document.querySelector("#controls"),
  input: document.querySelector("#controls > input"),
  buttonCreate: document.querySelector("#controls > button[data-create]"),
  buttonClear: document.querySelector("#controls > button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};
refs.buttonCreate.addEventListener("click", onCreateBoxes);
refs.buttonClear.addEventListener("click", onDestroyBoxes);
function onCreateBoxes(event) {
  for (let i = 0; i < Number(refs.input.value); i += 1) {
    const divEl = document.createElement(`div`);
    const size = 30 + refs.boxes.children.length * 10;
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.height = `${size}px`;
    divEl.style.width = `${size}px`;
    refs.boxes.append(divEl);
  }
}
function onDestroyBoxes(event) {
  refs.boxes.innerHTML = ``;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
