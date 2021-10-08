const listWithIdEl = document.querySelector(`#categories`);
const childrenlistWithIdEl = listWithIdEl.children;
console.log(`Number of categories: ${childrenlistWithIdEl.length} `);
// const childrenListWithIdEl = listWithIdEl.children;

// console.log(
//   `Elements: ${childrenListWithIdEl[0].childNodes[3].children.length}`
// );
// console.log(`Category : ${childrenListWithIdEl[1].childNodes[1].textContent}`);
// console.log(
//   `Elements: ${childrenListWithIdEl[1].childNodes[3].children.length}`
// );
// console.log(`Category : ${childrenListWithIdEl[2].childNodes[1].textContent}`);
// console.log(
//   `Elements: ${childrenListWithIdEl[2].childNodes[3].children.length}`
// );
const itemsRef = document.querySelectorAll(".item");

itemsRef.forEach((element) => {
  const title = element.querySelector("h2").innerHTML;
  const itemsLength = element.querySelectorAll("li").length;
  console.log(` ${title} : ${itemsLength}`);
});
