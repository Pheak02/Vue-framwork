let count = 0;
const countHeader = document.getElementById("count")
const addBtn = document.getElementById("add");
const substractBtn = document.getElementById("substract");

countHeader.innerText = count


addBtn.addEventListener("click", () => {
  //execute when "click" event occur
  console.log("hello");
  count++;
  countHeader.innerText = count
});

substractBtn.addEventListener("click", () => {
  //execute when "click" event occur
  console.log("hello");
  count--;
  countHeader.innerText = count
});
