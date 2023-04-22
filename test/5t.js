// node 5t.js
// < --------------Question 5----------------->
// Which of the options result(s) in an error?
// A: 1
// B: 1 and 2
// C: 3 and 4  
// D: 3   --> ans

const emojis = ['🎄', '🎅🏼', '🎁', '⭐'];

/* 1 */ emojis.push('🦌');
/* 2 */ emojis.splice(0, 2);
/* 3 */ emojis = [...emojis, '🥂'];  // wrong 
/* 4 */ emojis.length = 0;
  // console.log(emojis); --> []

