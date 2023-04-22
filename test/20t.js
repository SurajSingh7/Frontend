
// < --------------Question 20----------------->
// read: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

// What is the output ?
// A: name Lydia and age 21
// B: ["name", "Lydia"] and ["age", 21]
// C: ["name", "age"] and undefined
// D: Error

const person = {
  name: 'Lydia',
  age: 21,
};

for (const [x, y] of Object.entries(person)) {
  console.log(x, y);
}
