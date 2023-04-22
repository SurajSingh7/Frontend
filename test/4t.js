//  node 4t.js
// < --------------Question 4----------------->
// What is the output ?
// A: 1
// B: 2
// C: 3
// D: 4

let count = 0;
const nums = [10, 11, 12, 13]; 
for(var i in nums){
	if (i) count += 1
    console.log(i) // 0,1,2,3
}

console.log(count)