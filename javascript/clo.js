// node clo.js
// for(var i=1;i<=5;i++){


//     {
//     var endDate=new Date().getTime()+4000;
//     while(new Date().getTime()<endDate){
//     }
//     cb();
//     }
// }

// function cb(){
//     console.log(i);
// }

// let i=2;
// {
//    function y() {
    
//     for(let i=5;i<=6;i++){
//        function x(){
//          console.log(i);
//         }
//    }
//     return x;
    

//   }
// }
// let z=y();
// console.log(z());

//  let i;
// for( i=1;i<=5;i++){
    
//      setTimeout(function(){console.log(i)},i*1000);

// }
// console.log(i);

// var i=7;
// {
//     for(var i=0;i<5;i++){
//         console.log(i);
//     }
// }
// console.log(i);



// let i;
// for(i=1;i<=3;i++){
//     setTimeout(function(){console.log(i)},i*1000);
// }

// // vs

// for(let i=1;i<=3;i++){
//     setTimeout(function(){console.log(i)},i*1000);
// }



// let i=9;
// {
//     for(let i=2;i<=5;i++){
        

//     }
// }
// console.log(i);

{
var i=1;
setTimeout(function(){console.log(i)},i*1000);
}

{
 var i=2
setTimeout(function(){console.log(i)},i*1000);
}

{
var i=3
setTimeout(function(){console.log(i)},i*1000);
}

// output 3 3 3

    {
    let i=1;
    setTimeout(function(){console.log(i)},i*1000);
    }
    {
     let i=2
     setTimeout(function(){console.log(i)},i*1000);
    }
    
    {
    let i=3
    setTimeout(function(){console.log(i)},i*1000);
    }
 
    // output 1 2 3