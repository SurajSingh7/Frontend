// node function.js

// // fuction expression
// let sayHi=function abcd(x){
//     console.log("bye "+x);
// }
// //console.log("Line 54\n"+sayHi);
// //console.log(sayHi);
// //console.log(sayHi(5));
// console.log(abcd(5));
// //abcd(5); // ReferenceError: abcd is not defined

// let sayHi2=(x) => {
//     console.log("bye " + x);
// }
// sayHi2(5);

//IIFE
let addIIFE= (function add(a,b){
          return a+b;
})(5,7);
console.log(addIIFE);