// node 3t.js
// < --------------Question 3----------------->
// What is the output ?

// A: ['🍌', '🍊', '🍎']
// B: ['🍊', '🍎']
// C: ['🍇', '🍊', '🍎']  --> ans
// D: ['🍇', '🍌', '🍊', '🍎']

const fruit = ['🍌', '🍊', '🍎']

fruit.slice(0, 1)  // does not change in the original array/object
fruit.splice(0, 1)
fruit.unshift('🍇')

console.log(fruit)

