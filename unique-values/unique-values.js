// Unique Values
const menu = [
  {
    name: "pancakes",
    category: "breakfast",
  },
  {
    name: "burger",
    category: "lunch",
  },
  {
    name: "steak",
    category: "dinner",
  },
  {
    name: "bacon",
    category: "breakfast",
  },
  {
    name: "eggs",
    category: "breakfast",
  },
  {
    name: "pasta",
    category: "dinner",
  },
];

const categ = ["all", ...new Set(menu.map((item) => item.category))];
console.log(categ);
// map - get all instances
// new Set - narrow down
// ['all',...] - turn it back to array

const result = document.querySelector(".result");
result.innerHTML = categ
  .map((categories) => {
    return `<button>${categories}</button>`;
  })
  .join("");
