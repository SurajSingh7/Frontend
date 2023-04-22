// < --------------Question 19----------------->
// What is the output ?
// A: a is bigger, 6 and b is bigger, 3 
// B: a is bigger, undefined and b is bigger, undefined -->and
// C: undefined and undefined
// D: SyntaxError

function nums(a, b) {
  if (a > b) console.log('a is bigger');
  else console.log('b is bigger');
  return
  a + b;
}

console.log(nums(4, 2));
console.log(nums(1, 2));

