const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};
refs.input.addEventListener("input", onSpanChange);
function onSpanChange(event) {
  refs.span.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    return (refs.span.textContent = "Anonymous");
  }
}
