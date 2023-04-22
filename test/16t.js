// < --------------Question 16----------------->
// revise default paramters and spread operator 
const person = {
    name: 'Lydia',
    age: 21,
  };
  
  const changeAge = function (x = { ...person }) {
    x.age += 1;
  }
  const changeAgeAndName = function (x = { ...person }) {
    x.age += 1;
    x.name = 'Sarah';
  };
  
  changeAge(person);
  changeAgeAndName();
  
  console.log(person);
//   A: {name: "Sarah", age: 22}
//   B: {name: "Sarah", age: 23}
//   C: {name: "Lydia", age: 22}
//   D: { name: "Lydia", age: 23 }