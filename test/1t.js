// node 1test.js
// < --------------Question 1----------------->
// 1.What is the output ?
// A: It's not a string!  -> ans
// B: Yay it's a string!
// C: TypeError
// D: undefined

let randomValue = { name: "Lydia" };
randomValue = 23;

if (!typeof randomValue === "string") {
  console.log("It's not a string!");
}
 else {
  console.log("Yay it's a string!");
}

/* 1.type of operator returns value in string -->"Number"
   2.All value are truthy unless they are defined as falsy(i.e 0,null,undefined,nan,""(empty string))
   3.== vs ===
*/
