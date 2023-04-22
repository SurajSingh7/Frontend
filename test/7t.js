// node 7t.js
// for this question google what Object.freeze does 

// Which of the following will modify the person object?
// A: person.name = "Suresh"
// B: delete person.address
// C: person.address.street = "101 Main St"  --> ans
// D: person.pet = { name: "Mara" }

const person = {
  name: 'Lydia Hallie',
  address: {
    street: '100 Main St',
  },
};
// A frozen object can no longer be changed.(only freezez array at level one means like-level one key)
// only applies to the immediate properties of object itself.
// shallow freeze (upperi )
Object.freeze(person); 
