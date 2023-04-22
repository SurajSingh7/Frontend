// node 8t.js
// for this question google what Object.seal does 
// Which of the following will modify the person object?
// A: person.name = "Evan Bacon"  --> ans
// B: person.age = 21
// C: delete person.name
// D: Object.assign(person, { age: 21 })

const person = { name: 'suraj' };

// properites cannot be added , deleted but can be modified.
// shallow freeze (upperi )

Object.seal(person);

