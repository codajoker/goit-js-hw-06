const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert(" Все поля должны быть заполнены или вали с сайта");
  }
  const object = {
    email: `${email.value}`,
    password: `${password.value}`,
  };
  console.log(`email: ${object.email}, Password: ${object.password}`);
  event.currentTarget.reset();
}
