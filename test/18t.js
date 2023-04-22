// < --------------Question 18----------------->

// What is the output ?
// A: true
// B: false
// C: undefined
// D: TypeError ->ans

const colorConfig = {
  red: true,
  blue: false,
  green: true,
  black: true,
  yellow: false,
};

const colors = ['pink', 'red', 'blue'];

console.log(colorConfig.colors[1]);
// console.log(colorConfig[colors[1]]); --> this is the correct way

