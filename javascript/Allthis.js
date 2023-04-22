// node Allthis.js
var food="pizaa";
var obj1={
    food:"pasta",
    suraj:"hi",
    eat(){
        console.log("i am eating",this,this.suraj);
    }
}
var obj2={
    food:"pasta",
    suraj:"hif",
    eat(){
        console.log("i am eating",this,this.suraj);
    }
}
// var foo=obj.eat; 
// foo();
var x=obj1-obj2;
console.log(x);;