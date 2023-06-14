// var x=1;
// function square(){
//     let cb= function () {
//         console.log(this.x * this.x);
//     }
//     setTimeout(cb,2000);
// }

// var obj={
//     x:3,
//     square
// };
// obj.square();

var name ="suraj";
var obj={
    name:"singh",
    QuestionMaking(){
        console.log(this.name);
    }
}

var fun=obj.QuestionMaking;
fun();