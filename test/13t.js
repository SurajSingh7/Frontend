// node 13t.js
// < --------------Question 13----------------->
// read:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

// What is the output ?
// A: undefined undefined undefined undefined
// B: Mara undefined Lydia Hallie ReferenceError -> ans
// C: Mara null Lydia Hallie null
// D: null ReferenceError null ReferenceError

const person = {
  firstName: 'Lydia',
  lastName: 'Hallie',
  pet: {
    name: 'Mara',
    breed: 'Dutch Tulip Hound',
  },
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  
//   getFullName:function getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
};

console.log(person.pet?.name);  // mara
console.log(person.pet?.family?.name); // undefine
console.log(person.getFullName?.()); // Ly... Hallie
console.log(member.getLastName?.()); //ReferenceError

// ?-> agar aage waali property h to value acces kr lunga nhi to undefined return kryy dunga.