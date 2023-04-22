// node ArrayReduce.js
// let arr=[10,20,30,40,50];
// let val=4;
//  val=arr.reduce(function(pv,cv,ci){
//     console.log(pv+" "+cv+" "+ci+" ");
//     return pv+cv;
// })
// console.log(" --> "+val);

// // slice
// let arr=[10,20,30,40,50];
// let a1=arr.slice(0,3);
// let a2=arr.slice(2);
// let a3=arr.slice();
// let a4=arr.slice(-3,-1);
// let a5=arr.slice(1,-2);

// console.log(a1+"");
// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);

// let o1={
//     age:100
// };
// let o2={
//     age:200
// };
// let o3={ age:300 };
// let anarr=[o1,o2,o3];
// console.log(anarr);

// let scopy=anarr.slice();
// console.log(scopy);

// scopy[0].age=110;
// console.log(scopy);
// console.log(anarr);

let a=[10,20,30,40,50];
let a1=a.splice(2,0,100);
console.log(a);