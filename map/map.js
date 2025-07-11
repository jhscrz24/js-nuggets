// MAP Method
const people = [
  {
    name: "jeh",
    age: 23,
    position: "beginner",
  },
  {
    name: "jem",
    age: 22,
    position: "fullstack",
  },
  {
    name: "pat",
    age: 21,
    position: "frontend dev",
  },
  {
    name: "john",
    age: 26,
    position: "intern",
  },
];
// Quokka.js - Extension
// returns a new array
// does not change the size of original array (unlike filter)
// uses values from original array when making new one

// ex. 1
// const ages = people.map((person) => {
//   return person.age * 2;
// });

//ex. 2
// const getAges = (person) => person.age * 2;
// const ages = people.map();

// console.log(ages);

const newPeople = people.map((item) => {
  return {
    firstName: item.name.toUpperCase(),
    oldAge: item.age + 40,
  };
});

console.log(newPeople);

const names = people.map((person) => `<h2>${person.name}</h2>`);
const result = document.querySelector("#result");

result.innerHTML = names.join("");
