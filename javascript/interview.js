// node interview.js

// // q1
// let arr=[1,4,2,3,2,4,1,5,6,1,1];
// let obj={};
// for(let i=0;i<arr.length;i++){
   
//     if(obj[arr[i]]==undefined) obj[arr[i]]=0;
//     obj[arr[i]]=obj[arr[i]]+1;
// }

// console.log(obj);

// // q2
// let codes={
//     "49":"hi",
//     "41":"i",
//     "1":"am",
//     "5":"suraj"
// }

// for(let key in codes){
//     console.log(key);   // 1 5 41 49 
// }

// q3
let codes={
    "+49":"hi",
    "41":"i",
    "1":"am",
    "+5":"suraj"
}

for(let key in codes){
    console.log(key);   // 1 5 41 49 
}