// node introPromise.js

// const fs = require('fs');
// console.log("before");

//synchronous working
// let data=fs.readFileSync("f1.txt");
// console.log(data + "");

//async working 
// fs.readFile("f1.txt", cb);
// function cb(err, data) {
//     if (err) {
//         console.log(err);
//     }
//     else console.log(data+"");
// }

// console.log('after');




const fs = require('fs');
console.log("before");
// promises working
let promiseToRead= fs.promises.readFile("f1.txt");

console.log(promiseToRead);



promiseToRead.then(printData);
promiseToRead.catch(printError);
console.log("after");


function printData(data) {
    console.log("promise is fulfilled");
    console.log(data+"");
}

function printError(err) {
  console.log(err);
}