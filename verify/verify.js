// node verify.js

// let p={
//     IName : "Suraj",
//     IIName : "Golu",
//     age : 23,
//     address : {
//                  state : "Up",
//                  City : "Sonebhadra",
//                  Country: "India"
//               },
//     SayHi : function(){
//               console.log("I am suraj");
//            }          
// }
// // console.log(p.address);
// // console.log(p.IName);
// // p.SayHi();

// // for loop
// // in Keyword in js is used to get keys from that object
// for(let key in p){
//     //key
//     console.log(key);
//    // console.log(p.key); //  wrong for value 
//    // value
//    console.log(p[key]);

// }

// This keyword

// let car ={
//     name:"Ferrari",
//     model:2022,
//     startEngine : function(){
//         console.log(`1.Statring the engine ${this}`);
//         console.log(`2.Statring the engine ${this.name}`);
//     }
// }

// delete car.model;
// console.log(car.model);

// //car.startEngine();

function outer(){
    var k=5;
    inner();
    function inner(){
        console.log(b);
    }
}
const b=10;
outer();
console.log(k);
