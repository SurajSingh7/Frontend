// node 9t.js
// < --------------Question 9----------------->
// read: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
// What is the output ?
// A: ['🥑', ['✨', '✨', ['🍕', '🍕']]]
// B: ['🥑', '✨', '✨', ['🍕', '🍕']]
// C: ['🥑', ['✨', '✨', '🍕', '🍕']]
// D: ['🥑', '✨', '✨', '🍕', '🍕']

// const emojis = ['🥑', ['✨', '✨', ['🍕', '🍕']]];

const emojis = ['🥑', 
                  ['✨', '✨',     // level -1
                   ['🍕', '🍕']    // level-2
                 ] ];
console.log(emojis.flat(Infinity));         // by default 1
