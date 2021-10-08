const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};
console.log(refs.input.elements);
refs.input.addEventListener("input", onSpanChangeFontSize);
function onSpanChangeFontSize(evant) {
  console.log(evant.currentTarget.value);
  refs.span.style.fontSize = `${evant.currentTarget.value}px`;
}
