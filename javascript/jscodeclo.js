// node jscodeclo.js
// function z(){
//     var b=900;
//     function x(){
//         var a=7;
//         function y(){
//             console.log(a,b);
//         }
//         return y;
//     }
//    return x();
// }
// var c=z();
// c();
// console.log(c+"");

console.log("");
function z(){
    var b=900;
    function x(){
        var a=7;
        function y(){
            var c=3;
            var c2=4;
            function p1(){
                console.log("hi");
            }
            function p(){
                console.log(a,b,c,c2);
            }
           return p;
        }
       return  y();
    }
   return x();
}

var x=z();
console.log(x());
