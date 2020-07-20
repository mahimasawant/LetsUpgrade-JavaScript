const student = {
  name: "mahima",
  age: 21,
  projects: {
    dicegame: "two player js game",
  },
};
// Object destructuring:
const {
  name,
  age,
  projects: { dicegame },
} = student;
console.log(name);
console.log(age);
console.log(dicegame);
