const refs = {
  button_decrement: document.querySelector(`button[data-action="decrement"]`),
  button_increment: document.querySelector(`button[data-action="increment"]`),
  span: document.querySelector(`#value`),
};
refs.button_decrement.addEventListener("click", onButton_decrementChange);
refs.button_increment.addEventListener("click", onButton_incrementChange);
let counterValue = 0;
function onButton_decrementChange() {
  counterValue -= 1;
  refs.span.textContent = counterValue;
}
function onButton_incrementChange() {
  counterValue += 1;
  refs.span.textContent = counterValue;
}
