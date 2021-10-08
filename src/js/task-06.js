const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputExamination);
function onInputExamination(evant) {
  if (Number(input.dataset.length) === evant.currentTarget.value.length) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
  }
  console.log(evant.currentTarget.value.length);
}
