// node 12t.js
// < --------------Question 12----------------->
// read:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

// What is the output ?
// A: We have to buy bananas!
// B: We don't have to buy bananas ->ans
// C: undefined
// D: 1

const groceries = ['banana', 'apple', 'peanuts'];

if (groceries.indexOf('banana')) {             // not match then -1
console.log('We have to buy bananas!');
} else {
console.log(`We don't have to buy bananas!`);
}


