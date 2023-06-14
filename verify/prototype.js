function Creature(fc){
    this.fc=fc;
}

Creature.prototype.cfullc=function(){
    console.log("yes hi");
}


function Person(f,l,a){
    this.f=f;
    this.l=l;
    this.a=a;
}

Person.prototype.pfull=function(){
    console.log(this.f+" "+this.l);
}
Person.prototype.pfullk=function(){
    console.log(this.f+" "+this.l);
}

// Person.prototype=Object.create(Creature.prototype);
//  Person.prototype=Creature.prototype;

Person.prototype.__proto__=Creature.prototype;
// Person.prototype.__proto__=Object.create(Creature.prototype);


let p1=new Person("suraj","singh",22);
let c1=new Creature(10);


console.log(c1);
console.log(p1);





















// let obj1={k:"hj",l:"jk"};
// // console.log(obj1);

// // let obj2={};
//  let obj2=Object.create(null);
// console.log(obj2);

// ob.__proto__.ck="hi";

// console.log(ob);

// let arr =[2];
// arr.pk="hi i am";
// console.log(arr);

// let x="suraj";
// x.pk="hi;"
// console.log(x.__proto__)


// console.log(y.pink);
// console.log(y.__proto__);
// console.log(y.prototype);


// console.log(ob.prototype);